import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  message:any="";


  user:User=new User();
  
   constructor(private service:UserService,private router:Router) { }
  
  
   validate()
   {
     this.service.validateUser(this.user).subscribe((answer: any)=>{
       
       if(answer)
       {
         this.router.navigate(['subject']);
         sessionStorage.setItem("username",this.user.username);
       }
       else
       {
         this.router.navigate(['login']);
         this.message="wrong credentials";
       }
  
         
     });
   }

}
