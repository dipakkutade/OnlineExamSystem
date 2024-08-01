import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private httpclient: HttpClient) { }

  getFirstQuestion(subject: string): Observable<Question> {
    // ArrayList<String> al =new ArrayList<String>();

    return this.httpclient.get<Question>(
      'http://localhost:8080/getFirstQuestion/' + subject
    );

    // http://localhost:8080/getFirstQuestion will give JSON string having first Question details .
    // Angular will convert this JSON string into Question class's object .
  }

  nextQuestion() {
    return this.httpclient.get<Question>('http://localhost:8080/nextQuestion');
  }

  previousQuestion() {
    return this.httpclient.get<Question>(
      'http://localhost:8080/previousQuestion'
    );
  }

  saveAnswer(answer: Answer) {
    return this.httpclient.post<void>(
      'http://localhost:8080/saveAnswer',
      answer
    );
  }

  endexam() {
    return this.httpclient.get<number>('http://localhost:8080/endexam');
  }

  getAllAnswers() {
    return this.httpclient.get<Answer[]>('http://localhost:8080/getAllAnswers');
  }
}

// {"qno":1,"qtext":"why","op1":"A","op2":"B","op3":"C","op4":"D","answer":"A","subject":"java"}

export class Question {
  qno: number = 0;
  subject: string = '';
  qtext: string = '';
  op1: string = '';
  op2: string = '';
  op3: string = '';
  op4: string = '';
  answer: string = '';
}

export class Answer {
  qno: number;
  submittedAnswer: string;
  qtext: string;
  originalAnswer: string;

  constructor(
    qno: number,
    qtext: string,
    submittedAnswer: string,
    originalAnswer: string
  ) {
    this.qno = qno;
    this.originalAnswer = originalAnswer;
    this.submittedAnswer = submittedAnswer;
    this.qtext = qtext;
  }
}
