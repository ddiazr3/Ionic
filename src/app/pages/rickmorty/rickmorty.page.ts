import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/main/header/header.component';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-rickmorty',
  templateUrl: './rickmorty.page.html',
  styleUrls: ['./rickmorty.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent]
})
export class RickmortyPage implements OnInit {
  private listServiceInstance = inject(ListService);
  private activeRouter = inject(ActivatedRoute);

  id:any
  rm: any = {}

  constructor() { }

  ngOnInit() {
    this.id = this.activeRouter.snapshot.paramMap.get("id")
    console.log(`id: ${this.id}`)
    this.listServiceInstance.getMorty(this.id).subscribe(d => this.rm = d)
  }

}
