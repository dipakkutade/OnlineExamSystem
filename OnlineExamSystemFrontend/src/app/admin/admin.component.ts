import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  username:string="";
  password:string="";

  constructor(private httpClient:HttpClient,private router:Router){}

  validate() {

    if(this.username=='admin'&& this.password == 'admin@123') {
      this.router.navigate(['admindashboard'])
      sessionStorage.setItem('adminname',this.username);
    }

  }

}
