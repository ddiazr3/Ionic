import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from "../../components/main/header/header.component";

@Component({
    selector: 'app-offline',
    templateUrl: './offline.page.html',
    styleUrls: ['./offline.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, HeaderComponent]
})
export class OfflinePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
