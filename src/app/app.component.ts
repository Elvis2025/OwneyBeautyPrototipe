import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppStore } from './core/store';
import { Role } from './core/models';
@Component({selector:'app-root',imports:[RouterOutlet,RouterLink,RouterLinkActive],template:`
<div class="demo-bar">PROTOTIPO · DATOS FICTICIOS <span>Explora la experiencia completa</span></div>
<header><a routerLink="/" class="brand"><i>O</i> OWNEY <b>BEAUTY</b></a><nav><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a><a routerLink="/explore" routerLinkActive="active">Explorar</a><a routerLink="/favorites" routerLinkActive="active">Favoritos</a><a routerLink="/bookings" routerLinkActive="active">Mis citas</a></nav><div class="role"><span>Vista demo</span><select [value]="store.role()" (change)="roleChange($event)" aria-label="Cambiar rol"><option value="customer">Cliente</option><option value="professional">Profesional</option><option value="admin">Administrador</option></select></div></header>
<main><router-outlet /></main>
<nav class="bottom"><a routerLink="/">⌂<small>Inicio</small></a><a routerLink="/explore">⌕<small>Explorar</small></a><a routerLink="/bookings">◷<small>Citas</small></a><a routerLink="/favorites">♡<small>Favoritos</small></a><a routerLink="/dashboard">○<small>Perfil</small></a></nav>
<footer><div class="brand">OWNEY BEAUTY</div><p>Belleza profesional, con confianza.</p><small>Prototipo académico · Todos los perfiles y datos son ficticios.</small></footer>`})
export class AppComponent {constructor(public store:AppStore){} roleChange(e:Event){const role=(e.target as HTMLSelectElement).value as Role; this.store.setRole(role); location.href=role==='admin'?'/admin':role==='professional'?'/pro':'/';}}
