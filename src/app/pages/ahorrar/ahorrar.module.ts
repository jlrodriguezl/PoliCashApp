import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhorrarPageRoutingModule } from './ahorrar-routing.module';

import { AhorrarPage } from './ahorrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhorrarPageRoutingModule
  ],
  declarations: [AhorrarPage]
})
export class AhorrarPageModule {}
