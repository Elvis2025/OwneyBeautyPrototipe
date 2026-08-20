import { Injectable, computed, signal } from '@angular/core';
import { AppData, Booking, Role } from './models';
import { seedData } from './seed';
const KEY='owney_beauty_app_data_v1';
@Injectable({providedIn:'root'}) export class AppStore {
  private load():AppData { try { const value=localStorage.getItem(KEY); return value?JSON.parse(value) as AppData:seedData(); } catch { return seedData(); } }
  readonly data=signal<AppData>(this.load()); readonly role=computed(()=>this.data().role);
  readonly professionals=computed(()=>this.data().professionals); readonly services=computed(()=>this.data().services);
  readonly bookings=computed(()=>this.data().bookings); readonly favorites=computed(()=>this.data().favorites);
  private save(next:AppData):void { this.data.set(next); localStorage.setItem(KEY,JSON.stringify(next)); }
  patch(patch:Partial<AppData>):void { this.save({...this.data(),...patch}); }
  setRole(role:Role):void { this.patch({role}); }
  toggleFavorite(id:string):void { const f=this.favorites(); this.patch({favorites:f.includes(id)?f.filter(x=>x!==id):[...f,id]}); }
  addBooking(booking:Booking):void { if(this.bookings().some(b=>b.professionalId===booking.professionalId&&b.date===booking.date&&b.time===booking.time&&b.status!=='cancelled')) throw new Error('Este horario ya no está disponible.'); this.patch({bookings:[booking,...this.bookings()]}); }
  cancelBooking(id:string):void { this.patch({bookings:this.bookings().map(b=>b.id===id?{...b,status:'cancelled' as const}:b)}); }
  approveVerification(id:string):void { const verification=this.data().verifications.find(v=>v.id===id); if(!verification)return; this.patch({verifications:this.data().verifications.map(v=>v.id===id?{...v,status:'approved' as const}:v),professionals:this.professionals().map(p=>p.id===verification.professionalId?{...p,verified:true}:p)}); }
  approveRefund(id:string):void { const refund=this.data().refunds.find(r=>r.id===id); if(!refund)return; this.patch({refunds:this.data().refunds.map(r=>r.id===id?{...r,status:'approved' as const}:r),bookings:this.bookings().map(b=>b.id===refund.bookingId?{...b,paymentStatus:'refunded' as const}:b)}); }
  addService(service:AppData['services'][number]):void { this.patch({services:[service,...this.services()]}); }
  reset():void { this.save(seedData()); }
}
