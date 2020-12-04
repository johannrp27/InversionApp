import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { GoalsComponent } from './views/goals/goals.component';
import { TipsComponent } from './views/tips/tips.component';
import { HomeComponent } from './views/home/home.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GoalsComponent,
    TipsComponent,
    HomeComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
