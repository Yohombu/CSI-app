import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInfoComponent } from './Components/general-info/general-info.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: 'general-info', component:GeneralInfoComponent},
  { path: '', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
