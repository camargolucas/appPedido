import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProductPage } from './edit-product';

@NgModule({
  declarations: [
    EditProductPage,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicPageModule.forChild(EditProductPage),
  ],
})
export class EditProductPageModule {}
