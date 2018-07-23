import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegConfirmationComponent } from './components/reg-confirmation/reg-confirmation.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DemographicsComponent } from './components/demographics/demographics.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegConfirmationComponent,
    DemographicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
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
      }
    ]),
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
