import { Component } from '@angular/core';
import { User, UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user : User = new User();

  constructor(private service:UserService) {}

  saveUser() {
    this.service.saveUser(this.user).subscribe();
  }

}
