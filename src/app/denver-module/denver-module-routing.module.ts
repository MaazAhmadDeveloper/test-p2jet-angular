import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenverComponent } from './denver/denver.component';

const routes: Routes = [
  {path: "", component: DenverComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class DenverModuleRoutingModule { }
