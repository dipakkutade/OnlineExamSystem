import { Component, OnInit } from '@angular/core';
import { Question } from '../question.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminnavComponent } from '../adminnav/adminnav.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addquestion',
  standalone: true,
  imports: [FormsModule, CommonModule, AdminnavComponent],
  templateUrl: './addquestion.component.html',
  styleUrl: './addquestion.component.css',
})
export class AddquestionComponent implements OnInit {
  question: Question = new Question();

  questions: Question[] = [];
  reply: string = '';

  questionCounter: number = 1;
  sub: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.question.subject = params['subject'];
      this.question.qno = this.questionCounter;
      this.sub = this.question.subject;
      console.log(this.question.subject);
    });
  }

  onSubmit() {
    console.log('Submitted question:', this.question);

    this.questions.push(this.question);

    this.question = new Question();
    this.questionCounter++;
    this.question.qno = this.questionCounter;
    this.question.subject = this.sub;

    
  }

  addQuestion() {
    this.questions.push(this.question);
  }

  createExam() {
    console.log('Done Test Creation');
    this.questions.push(this.question);

    this.adminService.createExam(this.questions).subscribe();
    this.router.navigate(['admindashboard']);
  }
}
