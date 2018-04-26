import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './components/menu/menu.component';
import { EntreeComponent } from './components/menu/entree/entree.component';
import { MeatComponent } from './components/menu/meat/meat.component';
import { FishComponent } from './components/menu/fish/fish.component';
import { VeganComponent } from './components/menu/vegan/vegan.component';
import { DessertComponent } from './components/menu/dessert/dessert.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainNavbarComponent,
    HeroComponent,
    MenuComponent,
    EntreeComponent,
    MeatComponent,
    FishComponent,
    VeganComponent,
    DessertComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
