import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {

  subject:any="";

  constructor(private service:QuestionService, private router:Router){

  }

  startExam(){
    sessionStorage.setItem("subject",this.subject);
    this.router.navigate(['question']);
    
  }



}
