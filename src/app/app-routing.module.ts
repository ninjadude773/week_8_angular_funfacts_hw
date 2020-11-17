import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { JavaComponent } from './java/java.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MhlComponent } from './mhl/mhl.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  {
    path: 'main', 
    component: MainPageComponent
  },
  {
    path: 'promises',
    component: PromisesComponent
  },
  {
    path : 'callbacks',
    component: CallbacksComponent
  },
  {
    path: 'mhl',
    component: MhlComponent
  },
  {
    path: 'java',
    component: JavaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
