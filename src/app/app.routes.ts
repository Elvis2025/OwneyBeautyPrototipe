import { Routes } from '@angular/router';
export const routes:Routes=[
 {path:'',loadComponent:()=>import('./features/home.component').then(m=>m.HomeComponent)},
 {path:'explore',loadComponent:()=>import('./features/explore.component').then(m=>m.ExploreComponent)},
 {path:'professionals/:id',loadComponent:()=>import('./features/profile.component').then(m=>m.ProfileComponent)},
 {path:'booking/:professionalId/:serviceId',loadComponent:()=>import('./features/booking.component').then(m=>m.BookingComponent)},
 {path:'bookings',loadComponent:()=>import('./features/bookings.component').then(m=>m.BookingsComponent)},
 {path:'bookings/:id',loadComponent:()=>import('./features/bookings.component').then(m=>m.BookingDetailComponent)},
 {path:'favorites',loadComponent:()=>import('./features/simple.component').then(m=>m.FavoritesComponent)},
 {path:'dashboard',redirectTo:'bookings'},
 {path:'pro',loadComponent:()=>import('./features/dashboard.component').then(m=>m.ProDashboardComponent)},
 {path:'pro/services',loadComponent:()=>import('./features/dashboard.component').then(m=>m.ServicesManageComponent)},
 {path:'admin',loadComponent:()=>import('./features/admin.component').then(m=>m.AdminComponent)},
 {path:'settings',loadComponent:()=>import('./features/simple.component').then(m=>m.SettingsComponent)},
 {path:'**',loadComponent:()=>import('./features/simple.component').then(m=>m.NotFoundComponent)}];
