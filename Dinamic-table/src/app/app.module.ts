import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import {ButtonCustomComponent} from "../../../button-custom/src/app/button-custom/button-custom.component";

import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './pipe/filter.pipe';
import { OrdinamentoPipe } from './pipe/ordinamento.pipe';
import { PaginationPipe } from './pipe/pagination.pipe';
import { MyButtonComponent } from './components/my-button/my-button.component';
@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    FilterPipe,
    OrdinamentoPipe,
    PaginationPipe,
    ButtonCustomComponent,
    MyButtonComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
