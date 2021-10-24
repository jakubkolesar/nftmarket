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
import { AirdropsComponent } from './airdrops/airdrops.component';
import { FollowComponent } from './follow/follow.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';

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
    CollaborationComponent,
    AirdropsComponent,
    FollowComponent,
    FooterComponent,
    FilterComponent
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
