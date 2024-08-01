import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../user.service';
import { CommonModule } from '@angular/common';
import { AdminnavComponent } from '../adminnav/adminnav.component';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule,AdminnavComponent],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent implements OnInit{

  users:User[]=[];
  user:User = new User();

  constructor(private adminservice:AdminService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminservice.getAllUsers().subscribe(response => this.users=response);
  }

  deleteUser(username:string) {
    this.adminservice.deleteUser(username).subscribe();
    this.getAllUsers();
  }

}
