export type Role = 'customer' | 'professional' | 'admin';
export type VerificationStatus = 'pending' | 'review' | 'approved' | 'rejected';
export type BookingStatus = 'confirmed' | 'completed' | 'cancelled';
export type PaymentStatus = 'held' | 'released' | 'refunded';
export interface Professional { id:string; name:string; city:string; specialty:string; bio:string; image:string; cover:string; rating:number; reviewCount:number; verified:boolean; homeService:boolean; priceFrom:number; experience:number; }
export interface BeautyService { id:string; professionalId:string; name:string; category:string; description:string; price:number; durationMinutes:number; homeServiceAvailable:boolean; active:boolean; }
export interface Promotion { id:string; professionalId:string; name:string; description:string; percent:number; expires:string; active:boolean; }
export interface Booking { id:string; professionalId:string; serviceId:string; customerName:string; date:string; time:string; mode:'studio'|'home'; address?:string; distanceKm:number; travelFee:number; discount:number; total:number; status:BookingStatus; paymentStatus:PaymentStatus; }
export interface Review { id:string; professionalId:string; customer:string; rating:number; comment:string; date:string; service:string; }
export interface Verification { id:string; professionalId:string; submitted:string; documents:string[]; status:VerificationStatus; }
export interface Refund { id:string; bookingId:string; customer:string; amount:number; reason:string; status:'requested'|'approved'|'rejected'; }
export interface AppData { professionals:Professional[]; services:BeautyService[]; promotions:Promotion[]; bookings:Booking[]; reviews:Review[]; favorites:string[]; verifications:Verification[]; refunds:Refund[]; role:Role; }
