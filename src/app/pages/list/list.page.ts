import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/main/header/header.component';
import { ListService } from '../../services/list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class ListPage implements OnInit {
  private listServiceInstance = inject(ListService);

  listRickandMortyApy: any = [];
  listData: any = [];

  constructor() {}

  ngOnInit() {
    this.getInfo()
  }

  getInfo(){
    this.listServiceInstance.getMortys().subscribe((data) => {
      this.listRickandMortyApy = data;
      this.listData = data;
      console.log(this.listRickandMortyApy);
    });
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    if (query.length < 1) {
      this.listRickandMortyApy = this.listData;
    } else {
      this.listRickandMortyApy = this.listRickandMortyApy.filter(
        (d: any) => d.name.toLowerCase().indexOf(query) > -1
      );
    }
  }

  handleRefresh(event: any) {
    this.getInfo()
    event.target.complete();
  }
}
