import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CarouselComponent} from './carousel/carousel.component';
import {AboutComponent} from './about/about.cmponent';
import {NlComponent} from './nengli/nl.component';
import {DrawComponent} from './draw/draw.component';
import {FaceComponent} from './face/face.component';
import {LoveComponent} from './love/love.component';
import {EmailComponent} from './email/email.component';
import {AppRoutesModule} from './app-routes.module';
import {IndexComponent} from './index/index.component';



@NgModule({
  declarations: [
    IndexComponent,
    EmailComponent,
    LoveComponent,
    FaceComponent,
    DrawComponent,
    NlComponent,
    AboutComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    AppComponent
  ],
  imports: [
    AppRoutesModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
