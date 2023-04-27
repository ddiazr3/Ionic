import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from "../../components/main/header/header.component";

@Component({
    selector: 'app-foto',
    templateUrl: './foto.page.html',
    styleUrls: ['./foto.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, HeaderComponent]
})
export class FotoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
