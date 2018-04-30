import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './components/menu/menu.component';
import { MeatComponent } from './components/menu/meat/meat.component';
import { FishComponent } from './components/menu/fish/fish.component';
import { VeganComponent } from './components/menu/vegan/vegan.component';
import { DessertComponent } from './components/menu/dessert/dessert.component';
import { RecomendedComponent } from './components/recomended/recomended.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainNavbarComponent,
    HeroComponent,
    MenuComponent,
    MeatComponent,
    FishComponent,
    VeganComponent,
    DessertComponent,
    RecomendedComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
