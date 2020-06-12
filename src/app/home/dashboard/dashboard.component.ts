import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { HttpService } from '../../shared/services/http.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Products: Product [] = []; 
  
  constructor(private HttpService : HttpService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.HttpService.get('product').subscribe(res => {
      this.Products = res['products'];
    });
  }
}
