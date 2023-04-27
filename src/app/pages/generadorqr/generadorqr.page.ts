import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';
import { HeaderComponent } from '../../components/main/header/header.component';
@Component({
  selector: 'app-generadorqr',
  templateUrl: './generadorqr.page.html',
  styleUrls: ['./generadorqr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,QRCodeModule,HeaderComponent]
})
export class GeneradorqrPage implements OnInit {

  public myAngularxQrCode: string = '';

  constructor() {}

  ngOnInit() {}

}
