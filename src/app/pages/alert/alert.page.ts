import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/main/header/header.component';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent]
})
export class AlertPage {

  public alertButtons = ['OK'];
  isToastOpen = false;
  canDismiss = false;
  presentingElement = null;

  constructor() { }

  ngOnInit() {
    //this.presentingElement = document.querySelector('.ion-page');
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

}
