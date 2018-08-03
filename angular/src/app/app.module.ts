import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegConfirmationComponent } from './components/reg-confirmation/reg-confirmation.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DemographicsComponent } from './components/demographics/demographics.component';
import { FormExampleComponent } from './components/form-example/form-example.component';

import { reducers } from './store/reducers'
import { ProductsService } from './products.service';


@
NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegConfirmationComponent,
    DemographicsComponent,
    FormExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    //StoreModule.forRoot(reducers, null),
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent
    },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'registrationConfirmation',
        component: RegConfirmationComponent
      },
      {
        path: 'demographics',
        component: DemographicsComponent
      },
      {
        path: 'formExample',
        component: FormExampleComponent
      }
    ]),
    InputsModule,
    GridModule,
    DropDownListModule
  ],
  providers: [
    ProductsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
