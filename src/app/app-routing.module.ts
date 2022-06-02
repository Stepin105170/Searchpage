import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountdownclockComponent } from './countdownclock/countdownclock.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'countdown', component:CountdownclockComponent},
  {path:'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule,
FormsModule],


  exports: [RouterModule]
})
export class AppRoutingModule { }
