import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/main/header/header.component';
//import {  } from 'phonegap-plugin-barcodescanner/src/android'
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class ScannerPage implements OnInit, OnDestroy {
  queryBody = document.querySelector('body') as HTMLElement | null;
  public scanResult: any = null;
  showBtn: Boolean = true
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.stopScan();
  }

  async checkPermission() {
    // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      // the user granted permission
      return true;
    }

    return false;
  };

  async scan() {
    this.scanResult = null
    // Check camera permission
    // This is just a simple example, check out the better checks below
    let permiso = await this.checkPermission()
    if(!permiso){
      return
    }
    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();
    this.showBtn = false
    this.queryBody?.classList.add('scanner-active');
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      this.scanResult = result.content;
      this.showBtn = true
      this.queryBody?.classList.remove('scanner-active');
    }
  }

  async stopScan() {
    this.scanResult = null
    this.showBtn = true
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    this.queryBody?.classList.remove('scanner-active');
  }
}
