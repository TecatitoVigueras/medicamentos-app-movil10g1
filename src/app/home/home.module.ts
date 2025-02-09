import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { IonicModule } from '@ionic/angular';
 
import { HomePageRoutingModule } from './home-routing.module';
import { SwiperModule } from 'swiper/angular';
 
import { HomePage } from './home.page';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePage, MedicamentoComponent]
})
export class HomePageModule {}
