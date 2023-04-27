import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/main/header/header.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ReactiveFormsModule,
  ],
})
export class FormularioPage implements OnInit {
  private fb = inject(FormBuilder);
  private toastController = inject(ToastController);

  public personales: FormGroup;

  constructor() {
    this.personales = this.fb.group({
      nombre: ['', Validators.required],
      apellido: [''],
      masculino: [''],
      mayor: [false, Validators.required],
      fechaNac: ['', Validators.required],
      direccion: [''],
      fruta: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async createData() {
    console.log('Formulario valido');
    console.log(this.personales.valid);
    console.log(this.personales.value);
    if (this.personales.valid) {
      const toast = await this.toastController.create({
        message: 'Formulario completado',
        duration: 1500,
        position: 'bottom',
        color: 'success',
      });
      await toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Formulario incompleto',
        duration: 1500,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
    }
  }
}
