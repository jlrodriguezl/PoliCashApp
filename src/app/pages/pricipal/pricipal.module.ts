import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricipalPageRoutingModule } from './pricipal-routing.module';

import { PricipalPage } from './pricipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricipalPageRoutingModule
  ],
  declarations: [PricipalPage]
})
export class PricipalPageModule {}
