import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GridComponent } from './components/grid/grid.component';
import { ContactsComponent } from './components/contacts/contacts.component';
 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'contacts', component: ContactsComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }