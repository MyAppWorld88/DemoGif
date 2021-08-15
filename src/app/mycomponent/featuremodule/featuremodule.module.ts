import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiflistComponent } from './giflist/giflist.component';
import { FeatureroutingModule } from './featurerouting.module';
import { DatafilterPipe } from './utility/datafilter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    GiflistComponent,
    DatafilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule, 
  ],
  exports:[FeatureroutingModule]
})
export class FeaturemoduleModule { }
