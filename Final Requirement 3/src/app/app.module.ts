import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksListComponent } from './components/books-list/books-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';

import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';


import {MatDividerModule} from '@angular/material/divider';
import { ButtonsComponent } from './components/buttons/buttons.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridComponent } from './components/grid/grid.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { ContactsComponent } from './components/contacts/contacts.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BooksListComponent,
    ButtonsComponent,
    GridComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatChipsModule,MatBadgeModule, MatButtonModule,MatDividerModule,MatGridListModule,MatRadioModule,
    MatListModule,RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }