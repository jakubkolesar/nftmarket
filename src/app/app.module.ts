import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketComponent } from './market/market.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { KeyfeaturesComponent } from './keyfeatures/keyfeatures.component';
import { CollaborationComponent } from './collaboration/collaboration.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    MarketComponent,
    ChallengesComponent,
    KeyfeaturesComponent,
    CollaborationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'market', component: MarketComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
