import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatStepperModule} from '@angular/material/stepper';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './components/footer/footer.component';
import { FirstpageBodyComponent } from './components/firstpage-body/firstpage-body.component';
import { BannerComponent } from './components/firstpage-body/banner/banner.component';
import { ThreePicComponent } from './components/firstpage-body/three-pic/three-pic.component';
import { OnePicComponent } from './components/firstpage-body/one-pic/one-pic.component';
import { TwoPicComponent } from './components/firstpage-body/two-pic/two-pic.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import { CatTopWearComponent } from './components/categories/cat-top-wear/cat-top-wear.component';
import { RootComponentComponent } from './components/root-component/root-component.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { FilterComponent } from './components/categories/filter/filter.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/auth-pages/login/login.component';
import { RegisterComponent } from './components/auth-pages/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { ViewitemComponent } from './components/viewitem/viewitem.component';
import { CartComponent } from './components/cart/cart.component';
import {MatListModule} from '@angular/material/list';
import { BuyComponent } from './components/buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstpageBodyComponent,
    BannerComponent,
    ThreePicComponent,
    OnePicComponent,
    TwoPicComponent,
    CatTopWearComponent,
    RootComponentComponent,
    FilterComponent,
    LoginComponent,
    RegisterComponent,
    ViewitemComponent,
    CartComponent,
    BuyComponent,
  ],
  imports: [
    MatListModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatCardModule,
    MatPaginatorModule,
    MatChipsModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
