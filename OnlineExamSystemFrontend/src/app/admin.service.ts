import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.service';
import { Question } from './question.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  deleteUser(username: string) {
    return this.httpClient.delete<void>("http://localhost:8080/admin/deleteUser/"+username);
  }


  createExam(questions: Question[]) {
    return this.httpClient.post<void>("http://localhost:8080/admin/createExam",questions);
  }


  
  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get<User[]>("http://localhost:8080/admin/getAllUsers");
  }

  
}
