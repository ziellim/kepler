import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ValuesComponent } from './values/values.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingsComponent } from './pricings/pricings.component';
import { TeamsComponent } from './teams/teams.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CtaComponent } from './cta/cta.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ValuesComponent,
    TestimonialsComponent,
    PricingsComponent,
    TeamsComponent,
    LoginComponent,
    RegisterComponent,
    CtaComponent,
    BlogComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
