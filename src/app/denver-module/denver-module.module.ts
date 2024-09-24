import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DenverModuleRoutingModule } from './denver-module-routing.module';
import { DenverComponent } from './denver/denver.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { MidSectionComponent } from './mid-section/mid-section.component';


@NgModule({
  declarations: [
    DenverComponent,
    HeroImageComponent,
    MidSectionComponent
  ],
  imports: [
    CommonModule,
    DenverModuleRoutingModule
  ],
  exports:[
    DenverComponent
  ]
})
export class DenverModuleModule { }
