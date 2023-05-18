import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideComponentComponent } from './side-component/side-component.component';
import { RightComponentComponent } from './right-component/right-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponentComponent,
    RightComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
