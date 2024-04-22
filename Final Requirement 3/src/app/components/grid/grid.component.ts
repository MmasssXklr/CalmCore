import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  title = 'booksapp';
  //set the link of the based route
  readonly APIUrl="http://localhost:5038/api/books/";
  

  constructor(private http:HttpClient){
  }
  //initialize the books array
  books:any=[];

  refreshBooks(){
    this.http.get(this.APIUrl+'GetBooks').subscribe(data=>{
      this.books=data;
    })
  }
  ngOnInit(){
    this.refreshBooks();
  }

  addBook(){
    var newBook=(<HTMLInputElement>document.getElementById("newBook")).value;
    var newDesc=(<HTMLInputElement>document.getElementById("newDesc")).value;
    var newPrice=(<HTMLInputElement>document.getElementById("newPrice")).value;
    var formData=new FormData();
    formData.append("title", newBook);
    formData.append("desc", newDesc);
    formData.append("price", newPrice.toString());
    this.http.post(this.APIUrl+'AddBook', formData).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }
  
  deleteBook(id:any){
      this.http.delete(this.APIUrl+'DeleteBook?id='+id).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }
}