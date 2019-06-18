import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header-component';
import { AppService } from './service/app.service';
import { SearchComponent } from './components/search/search-component';
import { BookComponent } from './components/books/book.component';
import { DashboardComponent } from './components/dashboard/dashboard-component';
import { RightMenuComponent } from './components/rightmenu/rightmenu-component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BookComponent,
    DashboardComponent,
    RightMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
