import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class MenuComponent  implements OnInit {

  public appPages = [
    { title: 'Scanner', url: '/home', icon: 'scan' },
    { title: 'Generador Código', url: '/generadorqr', icon: 'scan' },
    { title: 'Formulario', url: '/formulario', icon: 'folder' },
    { title: 'Alerts', url: '/alert', icon: 'alert' },
    { title: 'Offline', url: '/offline', icon: 'cloud-offline' },
    { title: 'PushNotification', url: '/pushnotification', icon: 'notifications' },
    { title: 'Maps', url: '/maps', icon: 'locate' },
    { title: 'Cards', url: '/card', icon: 'id-card' },
    { title: 'List', url: '/list', icon: 'list' },
    { title: 'Fotos', url: '/foto', icon: 'camera' },
   /* { title: 'Scroll infinitive', url: '/scrollinfinitive', icon: 'list-circle' },*/
    { title: 'Login', url: '/login', icon: 'log-in' },
  ];
  constructor() {}

  ngOnInit() {}

}
