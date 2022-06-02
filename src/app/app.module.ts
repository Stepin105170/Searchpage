import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { CountdownclockComponent } from './countdownclock/countdownclock.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CountdownclockComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    HttpClientModule,
    
    FormsModule ,
    RouterModule,
   
    
   
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
