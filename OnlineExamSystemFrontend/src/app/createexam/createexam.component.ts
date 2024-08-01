import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminnavComponent } from '../adminnav/adminnav.component';


@Component({
  selector: 'app-createexam',
  standalone: true,
  imports: [FormsModule,AdminnavComponent],
  templateUrl: './createexam.component.html',
  styleUrl: './createexam.component.css'
})
export class CreateexamComponent {


  constructor(private router:Router){}

  subject:string=''

  onSubmit() {
    console.log('Submitted question:', this.subject);

    this.router.navigate(['addquestion',this.subject]);
   
  }

}
