import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/main/header/header.component';
import { ListService } from 'src/app/services/list.service';
import { ToastController, AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, RouterLink],
})
export class CardPage implements OnInit {
  private listServiceInstance = inject(ListService);
  private toastController = inject(ToastController);
  private alertController = inject(AlertController);

  listRickandMortyApy: any = [];
  constructor() {}

  ngOnInit() {
    this.listServiceInstance.getMortys().subscribe((data) => {
      this.listRickandMortyApy = data;
      console.log(this.listRickandMortyApy);
    });
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header: "Borrar la ciudad",
      message: 'Esta seguro de borrar la ciudad',
      buttons: ["Ok"]
    });

    await alert.present();

    let result = await alert.onDidDismiss()
    console.log(result)
  }
}
