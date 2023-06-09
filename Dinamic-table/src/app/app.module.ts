import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { MyTableComponent } from './components/my-table/my-table.component';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './pipe/filter.pipe';
import { OrdinamentoPipe } from './pipe/ordinamento.pipe';
import { PaginationPipe } from './pipe/pagination.pipe';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { MyActionComponent } from './components/my-action/my-action.component';
import { ToolPaginationComponent } from './components/tool-pagination/tool-pagination.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    FilterPipe,
    OrdinamentoPipe,
    PaginationPipe,
    MyButtonComponent,
    MyActionComponent,
    ToolPaginationComponent,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
