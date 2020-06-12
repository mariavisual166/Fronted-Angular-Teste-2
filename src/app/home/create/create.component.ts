import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Product } from '../../shared/models/product';
import { HttpService } from './../../shared/services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createFormGroup = new FormGroup({
    descrition: new FormControl(null, [Validators.minLength(6), Validators.required]),
    price: new FormControl(null,[]),
    image: new FormControl(null, [Validators.minLength(6), Validators.required]),
    location: new FormControl(null, [Validators.minLength(6), Validators.required])
  });
  constructor( private router: Router, private httpService:HttpService ) { }

  ngOnInit(): void {
  }


  createProdut(){
    const product : Product =  {
      desc: this.createFormGroup.get('descrition').value,
      price:this.createFormGroup.get('price').value,
      location:this.createFormGroup.get('location').value,
      img:this.createFormGroup.get('image').value,
      user_id : 1
    }
    console.log(this.createFormGroup);
    this.httpService.post('product ',product).subscribe(res => 
      {
        this.router.navigate(['/home']);
      }
    );
  }

}


