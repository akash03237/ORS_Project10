
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import {RoleComponent } from './role/role.component';
import { CourseComponent } from "./course/course.component";
import {SubjectComponent }  from "./subject/subject.component"
import { Subject, from } from 'rxjs';
import { RoleListComponent } from './role/role-list.component';
import { CourseListComponent } from "./course/course-list.component";
import {  FacultyComponent} from "./faculty/faculty.component";
import {  FacultyListComponent} from "./faculty/faculty-list.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent} from './spinner/spinner.component';
import {MyprofileComponent} from './user/myprofile.component';
import {JasperReportComponent} from './jasper-report/jasper-report.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'loader',
        component : LoaderComponent

    },
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'login/:userparams',
        component: LoginComponent
    },
   
    {
        path: 'spinner',
        component: SpinnerComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'message',
        component: MessageComponent,
      
    },
    {
        path: 'message/:id',
        component: MessageComponent
    },
    {
        path: 'messagelist',
        component: MessageListComponent
      
    },
    {
        path: 'marksheet',
        component: MarksheetComponent
      
    },
    {
        path: 'marksheet/:id',
        component: MarksheetComponent
      
    },
    {
        path: 'marksheetlist',
        component: MarksheetListComponent
      
    },
    {
        path: 'marksheetmeritlist',
        component: MarksheetmeritListComponent
      
    },
    {
        path: 'getmarksheet',
        component : GetmarksheetComponent
      
    },
    {
        path: 'college',
        component: CollegeComponent
      
    },
    {
        path: 'college/:id',
        component: CollegeComponent
      
    },
    {
        path: 'collegelist',
        component: CollegeListComponent
      
    },
    {
        path: 'student',
        component: StudentComponent
      
    },
    {
        path: 'student/:id',
        component: StudentComponent
      
    },
    {
        path: 'studentlist',
        component: StudentListComponent
      
    },
    {
        path: 'user',
        component: UserComponent
      
    },
    {
        path: 'user/:id',
        component: UserComponent
      
    },
    {
        path: 'userlist',
        component: UserListComponent
      
    },
    {
        path: 'role',
        component : RoleComponent
      
    },
    {
        path : 'rolelist',
        component : RoleListComponent
      
    },
    {
        path: 'role/:id',
        component: RoleComponent
      
    },
    {
        path: 'course',
        component: CourseComponent
      
    },
    {
        path: 'courselist',
        component: CourseListComponent
      
    },
    {
        path :'course/:id',
        component :CourseComponent
      
    },
    {

        path:'faculty',
        component:FacultyComponent
      
    },
    {
        path : 'facultylist',
        component : FacultyListComponent
      
    },
    {
        path : 'faculty/:id',
        component : FacultyComponent
      
    },
    {
        path: 'timetable',
        component : TimetableComponent
      

    },
    {
        path:'timetablelist',
        component: TimetableListComponent
      
    },
    {
        path : 'timetable/:id',
        component : TimetableComponent
      
    },
    {
        path: 'subject',
        component: SubjectComponent
      
    },
    {
        path: 'subjectlist',
        component : SubjectListComponent
      
    },
    {
        path : 'subject/:id',
        component : SubjectComponent
      
    },
    {
        path : 'myprofile',
        component: MyprofileComponent
    },
    {
        path: 'file',
        component: FileComponent
    },
    {   path :'changepassword',
        component : ChangepasswordComponent
      

    }, 

    {   path :'jasperReport',
        component : JasperReportComponent

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule],
    
})


export class AppRoutingModule { }