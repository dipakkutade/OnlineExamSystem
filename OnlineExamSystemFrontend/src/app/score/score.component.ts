import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Answer, QuestionService } from '../question.service';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit
{
  score:any="";
  allanswers:Answer[]=[];

  constructor(private questionservice:QuestionService)
  {
    this.questionservice.getAllAnswers().subscribe(arrayfromresponse=>this.allanswers=arrayfromresponse);
  }

  ngOnInit(): void 
  {
    this.questionservice.endexam().subscribe(score=>this.score=score);
  }


  getColor(submittedAnswer:string,originalAnswer:string)
  {

    if(submittedAnswer==originalAnswer)
      return "green";
    else
      return "red";
  }

}
