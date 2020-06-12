import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpService } from './../../shared/services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    email: new FormControl(null, [Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$'), Validators.required]),
    password: new FormControl(null, [Validators.minLength(6), Validators.required])
  });
  constructor( private router: Router, private httpService:HttpService ) { }

  ngOnInit(): void {
  }

  
  signIn() {
    if (this.loginFormGroup.valid) {
      let id = 0;
      let name = '';
      var user = {
        email: this.loginFormGroup.get('email').value,
        password:this.loginFormGroup.get('password').value
      }
        this.httpService.post('user/login',user).subscribe(res => 
          {
              if (res['message'] === 'Login Success') {
                this.router.navigate(['/home']);
                this.httpService.token = res['token'];
                this.httpService.userId = res['key'];
              }else{

              }
          }
        );
      }
    }
  }



