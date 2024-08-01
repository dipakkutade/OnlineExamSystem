import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AdminComponent } from './admin/admin.component';
import { CreateexamComponent } from './createexam/createexam.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserslistComponent } from './userslist/userslist.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'subject',component:SubjectsComponent},
    {path:'question',component:QuestionComponent},
    {path:'score',component:ScoreComponent},
    {path:'admin',component:AdminComponent},
    {path:'createexam',component:CreateexamComponent},
    {path:'addquestion/:subject',component:AddquestionComponent},
    {path:'admindashboard',component:AdmindashboardComponent},    
    {path:'users',component:UserslistComponent},
    {path:'adminnav',component:AdminnavComponent},
    {path:'app',component:AppComponent}


];
