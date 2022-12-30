import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // удалить если не буду использовать, формы
import { SharedModule } from './Shared/shared.module';
import { NavComponent } from './header/components/nav.component/nav.component';
import { ModalBurgerComponent } from './header/components/modalBurger.windows/modalBurger.component';
import { ModalSearchComponent } from './header/components/modalSearch.windows/modalSearch.component';
import { FilterPipe } from './core/pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ModalBurgerComponent,
    ModalSearchComponent,
    FilterPipe
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
