(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./jasper-report/jasper-report.component */ "./src/app/jasper-report/jasper-report.component.ts");



































var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    },
    {
        path: 'loader',
        component: _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__["LoaderComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'login/:userparams',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'spinner',
        component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__["SpinnerComponent"]
    },
    {
        path: 'forgotpassword',
        component: _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]
    },
    {
        path: 'signup',
        component: _login_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
    },
    {
        path: 'message/:id',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"]
    },
    {
        path: 'messagelist',
        component: _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__["MessageListComponent"]
    },
    {
        path: 'marksheet',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheet/:id',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheetlist',
        component: _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__["MarksheetListComponent"]
    },
    {
        path: 'marksheetmeritlist',
        component: _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__["MarksheetmeritListComponent"]
    },
    {
        path: 'getmarksheet',
        component: _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__["GetmarksheetComponent"]
    },
    {
        path: 'college',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'college/:id',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'collegelist',
        component: _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__["CollegeListComponent"]
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'student/:id',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'studentlist',
        component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__["StudentListComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'user/:id',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'userlist',
        component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"]
    },
    {
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'rolelist',
        component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__["RoleListComponent"]
    },
    {
        path: 'role/:id',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'course',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'courselist',
        component: _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__["CourseListComponent"]
    },
    {
        path: 'course/:id',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'faculty',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'facultylist',
        component: _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__["FacultyListComponent"]
    },
    {
        path: 'faculty/:id',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'timetable',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'timetablelist',
        component: _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__["TimetableListComponent"]
    },
    {
        path: 'timetable/:id',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'subject',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'subjectlist',
        component: _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__["SubjectListComponent"]
    },
    {
        path: 'subject/:id',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'myprofile',
        component: _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__["MyprofileComponent"]
    },
    {
        path: 'file',
        component: _file_file_component__WEBPACK_IMPORTED_MODULE_25__["FileComponent"]
    },
    { path: 'changepassword',
        component: _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__["ChangepasswordComponent"]
    },
    { path: 'jasperReport',
        component: _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_34__["JasperReportComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n  }\r\n  \r\n  .dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  .app {\r\n    margin: 48px;\r\n  }\r\n  \r\n  .buttons {\r\n    display: flex;\r\n    max-width: 500px;\r\n    justify-content: space-evenly;\r\n    margin-bottom: 48px;\r\n\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5hcHAge1xyXG4gICAgbWFyZ2luOiA0OHB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuXHJcbiAgfVxyXG5cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: myHttpLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myHttpLoader", function() { return myHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./jasper-report/jasper-report.component */ "./src/app/jasper-report/jasper-report.component.ts");















































// import { AuthService } from './auth.service';
function myHttpLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_7__["MarksheetComponent"],
                _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__["MarksheetListComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"],
                _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__["StudentListComponent"],
                _college_college_component__WEBPACK_IMPORTED_MODULE_9__["CollegeComponent"],
                _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__["CollegeListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _login_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"],
                _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__["MessageListComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
                _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_26__["RoleComponent"],
                _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__["RoleListComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_27__["CourseComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__["SubjectComponent"],
                _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__["SubjectListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"],
                _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__["CourseListComponent"],
                _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__["FacultyComponent"],
                _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__["FacultyListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"],
                _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__["TimetableListComponent"],
                _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__["MarksheetmeritListComponent"],
                _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__["GetmarksheetComponent"],
                _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__["ChangepasswordComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__["LoaderComponent"],
                _file_file_component__WEBPACK_IMPORTED_MODULE_34__["FileComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__["NavbarComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__["SpinnerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__["FooterComponent"],
                _user_myprofile_component__WEBPACK_IMPORTED_MODULE_45__["MyprofileComponent"],
                _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_46__["JasperReportComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: myHttpLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _auth_service__WEBPACK_IMPORTED_MODULE_44__["AuthService"], multi: true
                },
                _http_service_service__WEBPACK_IMPORTED_MODULE_12__["HttpServiceService"],
                _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__["DataValidator"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.intercept = function (req, next) {
        if (localStorage.getItem('fname') && localStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    "withCredentials": "true",
                    "name": "AKASH",
                    Authorization: this.http.getToken()
                }
            });
        }
        console.log(req.headers.get("Authorization") + "------------------->>>");
        return next.handle(req);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListCtl", function() { return BaseListCtl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");



var BaseListCtl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseListCtl, _super);
    function BaseListCtl(endpoint, locator, route) {
        var _this = _super.call(this, endpoint, locator, route) || this;
        _this.endpoint = endpoint;
        _this.locator = locator;
        _this.route = route;
        _this.deleteRecordList = [];
        _this.isMasterSel = false;
        _this.checkList = 0;
        return _this;
    }
    /**
     * Initialize component
     */
    BaseListCtl.prototype.ngOnInit = function () {
        this.preload();
        this.search();
        this.isMasterSel = false;
    };
    BaseListCtl.prototype.display = function () {
        this.search();
    };
    BaseListCtl.prototype.submit = function () {
        this.form.pageNo = 0;
        this.search();
    };
    BaseListCtl.prototype.delete = function (id) {
        _super.prototype.delete.call(this, id, function () {
            this.search();
        });
    };
    BaseListCtl.prototype.next = function () {
        this.form.pageNo++;
        this.display();
        //  this.isMasterSel = false ;  
        //  this.searchOperation('previous');
    };
    BaseListCtl.prototype.exit = function () {
        location.reload();
    };
    BaseListCtl.prototype.previous = function () {
        if (this.form.pageNo > 0) {
            this.form.pageNo--;
            //  this.display(); 
            this.isMasterSel = false;
            this.searchOperation('previous');
        }
    };
    BaseListCtl.prototype.checkUncheckAll = function (event) {
        var checked = event.target.checked;
        this.checkboxes.forEach(function (element) {
            element.nativeElement.checked = checked;
        });
    };
    BaseListCtl.prototype.checklistUpdate = function () {
        var _this = this;
        this.isMasterSel = false;
        this.checkList = 0;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked == true) {
                _this.checkList = _this.checkList + 1;
            }
        });
        if (this.checkList == this.form.list.length) {
            this.isMasterSel = true;
        }
    };
    //   deleteMany(){
    //   console.log('delete Many Records starts ');
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //   var msg : String =''
    //   this.deleteRecordList.length=0;
    //   console.log('record deleting start ')
    //   var isRecordSelected:boolean = false ;
    //     this.checkboxes.forEach((element) => {
    //       if (element.nativeElement.checked) {
    //         // console.log('record deleting ' + element.nativeElement.id)
    //         this.deleteRecordList.push(element.nativeElement.id);
    //         isRecordSelected = true ;
    //       }
    //     });     
    //     if(isRecordSelected){
    //       console.log('record(s) for delete ' + this.deleteRecordList)        
    //       this.serviceLocator.httpService.get(this.api.deleteMany + "/" + this.deleteRecordList + '?pageNo=' +this.form.pageNo, function (res) {
    //         if (res.success) {
    //             console.log('Inside response success ')
    //           //  this.deleteMany();
    //          //  this.form.message = "Data is deleted";
    //        //  msg ="Data is deleted";
    //         //  this.form.message = res.result.message;
    //           console.log('deleteMany Calling Callback'); 
    //           this.search();  
    //     } else {
    //       this.form.error = true;
    //       this.form.message = res.result.message;
    //     }
    //   });
    //   this.form.message = "Data is deleted" ;
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //     }else{
    //       this.form.message = "Select Atleast One Record";
    //         this.form.error = true;
    //     console.log('No record(s) for delete ')
    //   }
    //   console.log('delete Many Records ends ');
    // }
    BaseListCtl.prototype.deleteMany = function () {
        var _this = this;
        console.log('delete Many Records starts ');
        console.log('this.form.pageNo ' + this.form.pageNo);
        this.form.error = false;
        this.deleteRecordList.length = 0;
        console.log('record deleting start ');
        var isRecordSelected = false;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked) {
                // console.log('record deleting ' + element.nativeElement.id)
                _this.deleteRecordList.push(element.nativeElement.id);
                isRecordSelected = true;
            }
        });
        if (isRecordSelected) {
            console.log('record(s) for delete ' + this.deleteRecordList);
            _super.prototype.deleteMany.call(this, this.deleteRecordList + '?pageNo=' + this.form.pageNo, function () {
                //  this.search();  
            });
        }
        else {
            this.form.message = "Select Atleast One Record";
            this.form.error = true;
            console.log('No record(s) for delete ');
        }
        this.isMasterSel = false;
        console.log('delete Many Records ends ');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("checkboxes"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], BaseListCtl.prototype, "checkboxes", void 0);
    return BaseListCtl;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCtl", function() { return BaseCtl; });
var BaseCtl = /** @class */ (function () {
    /**
     * Initialize services
     *
     * @param serviceLocator
     * @param route
     */
    function BaseCtl(endpoint, serviceLocator, route) {
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
            endpoint: null,
            get: null,
            save: null,
            search: null,
            delete: null,
            deleteMany: null,
            preload: null,
            report: null
        };
        /**
         * Form contains preload data, error/sucess message
         */
        this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        this.nextList = 0;
        var _self = this;
        _self.initApi(endpoint);
        /**
         * Get primary key from path variale
         */
        serviceLocator.getPathVariable(route, function (params) {
            _self.form.data.id = params["id"];
            console.log('I GOT ID', _self.form.data.id);
        });
    }
    BaseCtl.prototype.initApi = function (ep) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.delete = ep + "/delete";
        this.api.deleteMany = ep + "/deleteMany";
        this.api.preload = ep + "/preload";
        this.api.report = ep + "/report";
        console.log("API", this.api);
    };
    /**
     * Initialize component
     */
    BaseCtl.prototype.ngOnInit = function () {
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
    };
    /**
     * Loded preload data
     */
    BaseCtl.prototype.preload = function () {
        console.log("preload start");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res) {
            if (res.success) {
                _self.form.preload = res.result;
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    BaseCtl.prototype.validateForm = function (form) {
    };
    /**
     * Searhs records
     */
    BaseCtl.prototype.search = function () {
        console.log("search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.nextList = res.result.nextList;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.searchOperation = function (operation) {
        console.log("previous/next search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (operation == 'next' || operation == 'previous') {
                _self.nextList = res.result.nextList;
                _self.form.message = null;
                _self.form.error = false;
            }
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Contains display logic. It fetches data from database for the primary key
     */
    BaseCtl.prototype.display = function () {
        var _self = this;
        console.log('Inside display method');
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            _self.form.data.id = 0;
            if (res.success) {
                _self.populateForm(_self.form.data, res.result.data);
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Populate HTML form data
     * Overridden by child classes.
     *
     * @param form
     * @param data
     */
    BaseCtl.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'formid in base ctl');
    };
    /**
     * Contains submit logic. It saves data
     */
    BaseCtl.prototype.submit = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log("form data going to be submit" + this.form.data);
        //  console.log("form data going to be submit" + this.studentId);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                //  console.log("--------------------.");
                //return _self.form.data.id ;
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.delete = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    //  callback();  
                    this.search();
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.deleteMany = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.post(_self.api.deleteMany + "/" + id, this.form.data, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    _self.form.list = res.result.data;
                    console.log("List ::  ", +res.data);
                    console.log("List Size", _self.form.list.length);
                    //  callback();       
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.generateReport = function () {
        var _self = this;
        console.log('********* Generating Report ********************');
        this.serviceLocator.httpService.get(_self.api.report, function (res) {
            if (res.success) {
                console.log('*********  Report Generated ********************');
                alert('pass');
            }
            else {
                console.log('********* Error in Generating Report  ********************');
                alert('fail');
            }
        });
    };
    /**
     * Forward to page
     * @param page
     */
    BaseCtl.prototype.forward = function (page) {
        console.log(page + '--->>page value');
        this.serviceLocator.forward(page);
    };
    return BaseCtl;
}());



/***/ }),

/***/ "./src/app/college/college-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/college/college-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%;\r\nbackground: url(assets/files/211.jpg) no-repeat center center;\r\n background-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n       <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'College List' | translate }}</h1>\r\n        </div>\r\n      </div> \r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{'Search Name' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select name' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/college')\" type=\"button\" class=\"btn btn-success\">{{'Add College' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Name' | translate }}</th>\r\n                <th>{{'Address' | translate }}</th>\r\n                <th>{{'Phone' | translate }}</th>\r\n                <th>{{'City' | translate }}</th>\r\n                <th>{{'State' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.address }} </td>\r\n                <td> {{ m.phoneNo }} </td>\r\n                <td> {{ m.city }} </td>\r\n                <td> {{ m.state }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/college/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n            </table>\r\n              <table style=\"width: 100%;\">\r\n                <tr>\r\n                  <td style=\"width: 50%;\">\r\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                }} </button></td>\r\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/collegelist']\">{{'Back' | translate}}</a></td>\r\n    \r\n    \r\n            \r\n                <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                  translate }}</button></td>\r\n                </tr>\r\n                </table>\r\n    \r\n            \r\n          \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/college/college-list.component.ts ***!
  \***************************************************/
/*! exports provided: CollegeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function() { return CollegeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CollegeListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeListComponent, _super);
    function CollegeListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-list',
            template: __webpack_require__(/*! ./college-list.component.html */ "./src/app/college/college-list.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CollegeListComponent);
    return CollegeListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/college/college.component.html":
/*!************************************************!*\
  !*** ./src/app/college/college.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add College' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update College' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Name' | translate }}\">\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.name}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Address' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-map-marker grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"addr\" [(ngModel)]=\"form.data.address\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Address' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.address}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'City' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-location-arrow grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"city\" [(ngModel)]=\"form.data.city\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter City' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.city}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'State' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-address-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"state\" [(ngModel)]=\"form.data.state\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter State' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Phone No.' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phnNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Phone No.' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/collegelist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CollegeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeComponent, _super);
    function CollegeComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CollegeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        return flag;
    };
    CollegeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.state = data.state;
        form.city = data.city;
        form.phoneNo = data.phoneNo;
        console.log('Populated Form', form);
    };
    CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college',
            template: __webpack_require__(/*! ./college.component.html */ "./src/app/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CollegeComponent);
    return CollegeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/course/course-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/course/course-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\"\r\n style=\"padding-top: 3%;\r\npadding-bottom: 15%;\r\nbackground: url(assets/files/wav1.jpg) no-repeat center center;\r\n background-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\nheight:90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'Course List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"courseName\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select CourseName' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.duration\"\r\n            placeholder=\"{{'Search Duration' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/course')\" type=\"button\" class=\"btn btn-success\">{{'Add Course' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Name' | translate }}</th>\r\n                <th>{{'Duration' | translate }}</th>\r\n                <th>{{'Description' | translate }}</th>\r\n                <th>{{'Edit' | translate }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.courseName}} </td>\r\n                <td> {{ m.duration }} </td>\r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/course/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n              \r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/courselist']\">{{'Back' | translate}}</a></td>\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-list.component.ts ***!
  \*************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CourseListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseListComponent, _super);
    function CourseListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CourseListComponent);
    return CourseListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Course' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Course' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"courseName\" [(ngModel)]=\"form.data.courseName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Course Name' | translate }}\">\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.courseName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Duration' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\" >\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\r\n                </div>\r\n            \r\n                <select class=\"form-control\" name=\"duration\"\r\n                  [(ngModel)]=\"form.data.duration\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n                  <option [value]=\"1\">1 Year</option>\r\n                  <option [value]=\"2\">2 Year</option>\r\n                  <option [value]=\"3\">3 Year</option>\r\n                  <option [value]=\"4\">4 Year</option>\r\n                  <option [value]=\"5\">5 Year</option>\r\n\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.duration}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <textarea class=\"form-control\" placeholder=\"{{'Enter Description' | translate }}\" name=\"description\"\r\n                  [(ngModel)]=\"form.data.description\"></textarea>\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/courselist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List\r\n                ' | translate }}              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var CourseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseComponent, _super);
    function CourseComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    CourseComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CourseComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.courseName);
        flag = flag && validator.isNotNullObject(form.duration);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    CourseComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseName = data.courseName;
        form.duration = data.duration;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CourseComponent);
    return CourseComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar>\r\n<div>\r\n    <p class=\"text-info font-weight-bold\" style=\"padding-left: 30%; font-size: 70px;\">WELCOME TO ORS</p>\r\n    <div style=\"background-image: url(../../assets/files/IndexView.png); \r\n        -webkit-background-size: cover;\r\n        -moz-background-size: cover;\r\n        -o-background-size: cover;\r\n        background-size: 100%;\r\n        padding-bottom:18%;\r\n        padding-top: 5%;\r\n        \">\r\n        <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer> -->\r\n\r\n\r\n<style>\r\n  body{\r\n  \r\n  background-image: url('<%=ORSView.APP_CONTEXT%>/img/lib.jpg');\r\n      background-size: 100%;\r\n  \r\n  \r\n  }\r\n  .cl{\r\n    font-family: Lucida Calligraphy; \r\n  \r\n   /*  font-family: Monotype Corsiva;\r\n    \r\n   font-family: Footlight MT Light; */\r\n    }\r\n  </style>\r\n<app-navbar></app-navbar>\r\n\r\n<div>  \r\n  <!-- <div class=\"img-fluid\" style=\"background-image: url(../../assets/files/welcomeView2.png); \r\n      -webkit-background-size: cover;\r\n      -moz-background-size: cover;\r\n      -o-background-size: cover;\r\n      background-size: 100%;\r\n      padding-bottom:18%;\r\n      padding-top: 5%;\r\n      \">\r\n      <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\r\n  </div> -->\r\n\r\n  <div class=\"row \" style=\"padding-bottom: 14%;\r\n   background: url(assets/files/Corpus_Christi_College_New_Court,_Cambridge,_UK_-_Diliff.jpg) no-repeat center center;\r\n   \r\n  background-attachment: fixed;\r\n  background-size: cover; width:cover;\r\n    height: 120vh;\">\r\n    <p class=\"text-cs1 font-family ml-4 font-weight-bold\" style=\"padding-top: 7%; \r\n    padding-left: 36%;font-size: 45px; color: rgb(242, 255, 168);\">{{'WELCOME TO ORS' | translate}}</p></div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/endpoint-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint-service.service.ts ***!
  \*********************************************/
/*! exports provided: EndpointServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointServiceService", function() { return EndpointServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndpointServiceService = /** @class */ (function () {
    function EndpointServiceService() {
        this.SERVER_URL = "http://localhost:8080";
        this.MESSAGE = this.SERVER_URL + "/Message";
        this.USER = this.SERVER_URL + "/User";
        this.ROLE = this.SERVER_URL + "/Role";
        this.COLLEGE = this.SERVER_URL + "/College";
        this.MARKSHEET = this.SERVER_URL + "/Marksheet";
        this.STUDENT = this.SERVER_URL + "/Student";
        this.SUBJECT = this.SERVER_URL + "/Subject";
        this.FACULTY = this.SERVER_URL + "/Faculty";
        this.COURSE = this.SERVER_URL + "/Course";
        this.TIMETABLE = this.SERVER_URL + "/TimeTable";
        this.JASPERREPORT = this.SERVER_URL + "/Jasper";
    }
    EndpointServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EndpointServiceService);
    return EndpointServiceService;
}());



/***/ }),

/***/ "./src/app/faculty/faculty-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Faculty List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\r\n            placeholder=\"{{'Search College' | translate}}\">\r\n\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n\r\n        \r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/faculty')\" type=\"button\" class=\"btn btn-success\">{{'Add Faculty' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'DOB' | translate}}</th>\r\n                <th>{{'Gender' | translate}}</th>\r\n                <th>{{'College' | translate}}</th>\r\n                <th>{{'Course' | translate}}</th>\r\n                <th>{{'Subject' | translate}}</th>\r\n                <th>{{'Mobile' | translate}}</th>\r\n                <th>{{'Email' | translate}}</th>\r\n                <th>{{'Qualification' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td>{{(form.pageNo*5)+i+ 1}} </td>\r\n                <td>{{ m.firstName }} {{m.lastName}} </td>\r\n                <td>{{m.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>{{ m.gender }} </td>\r\n                <td>{{m.collegeName}}</td>\r\n                <td>{{m.courseName}}</td>\r\n                <td>{{m.subjectName}}</td>\r\n                <td>{{ m.phoneNo}}</td>\r\n                <td>{{m.email}}</td>\r\n                <td>{{m.qualification}}</td>\r\n                <td>\r\n                  <a (click)=\"forward( '/faculty/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash  text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/facultylist']\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.ts ***!
  \***************************************************/
/*! exports provided: FacultyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyListComponent", function() { return FacultyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var FacultyListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyListComponent, _super);
    function FacultyListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    FacultyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty-list',
            template: __webpack_require__(/*! ./faculty-list.component.html */ "./src/app/faculty/faculty-list.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyListComponent);
    return FacultyListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/*!************************************************!*\
  !*** ./src/app/faculty/faculty.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Faculty'\r\n            | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update\r\n            Faculty' | translate}}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email' | translate}} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Qualification' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"qualification\" [(ngModel)]=\"form.data.qualification\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Your Qualification' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n            </div>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'College' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\r\n                </div>\r\n\r\n\r\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-list grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" [(ngModel)]=\"form.data.gender\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\r\n                  <option value=\"Male\">{{'Male' | translate}} </option>\r\n                  <option value=\"Female\">{{'Female' | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile No' | translate}} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                  required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/facultylist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var FacultyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyComponent, _super);
    function FacultyComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    FacultyComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    FacultyComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.email);
        console.log(form.email);
        flag = flag && validator.isNotNullObject(form.qualification);
        console.log(form.qualification);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        console.log(form.phoneNo + "in validateForm----------------------------");
        flag = flag && validator.isNotNullObject(form.courseId);
        console.log(form.courseId);
        flag = flag && validator.isNotNullObject(form.collegeId);
        console.log(form.collegeId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        console.log(form.subjectId);
        return flag;
    };
    FacultyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectId = data.subjectId;
        console.log(form.subjectId + 'subject--');
        form.collegeId = data.collegeId;
        form.courseId = data.courseId;
        console.log(form.courseId + 'course ----');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.email = data.email;
        form.qualification = data.qualification;
        form.gender = data.gender;
        form.dob = data.dob;
        form.phoneNo = data.phoneNo;
        console.log("phoneno----------------" + form.phoneNo);
    };
    FacultyComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyComponent);
    return FacultyComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/file/file.component.css":
/*!*****************************************!*\
  !*** ./src/app/file/file.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/file/file.component.html":
/*!******************************************!*\
  !*** ./src/app/file/file.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n        <h1 class=\"text-primary pt-4\">Upload Image Test Page</h1>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"container row pl-4\">\r\n <div class=\"form-group\">\r\n        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n\r\n        <input type=\"button\" class=\"btn btn-success\" (click)=\"onUpload()\" value=\"upload\">\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<hr />\r\n<!--   \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-12\">\r\n  \r\n          <div *ngIf=message>{{message}}</div>\r\n  \r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-6\">\r\n\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"image name\" [(ngModel)]=\"imageName\"\r\n  \r\n              name=\"name\" />\r\n  \r\n      </div>\r\n  \r\n      <div class=\"col-md-6\">\r\n  \r\n          <input type=\"button\" (click)=\"getImage()\" value=\"Get Image\">\r\n  \r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-12\">\r\n            <div *ngIf=retrievedImage>\r\n  \r\n              <img [src]=\"retrievedImage\">\r\n  \r\n          </div>\r\n  \r\n      </div>\r\n  \r\n  </div> -->"

/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FileComponent = /** @class */ (function () {
    function FileComponent(formBuilder, httpClient) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.fileToUpload = null;
    }
    FileComponent.prototype.ngOnInit = function () { };
    FileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    FileComponent.prototype.onUpload = function () {
        var _this = this;
        this.onSubmit(this.fileToUpload).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    FileComponent.prototype.onSubmit = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload);
        return this.httpClient.post("http://localhost:8080/User/profilePic/1", formData);
    };
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/file/file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    position: fixed;\r\n    \r\n    bottom: 0px;\r\n    height: 40px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIFxyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center \"\r\n style=\"background: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\">\r\n  <!-- Copyright -->\r\n  <div class=\"text-center pt-2 pb-2 text-light\" >\r\n    &copy; {{'COPYRIGHT' | translate}}\r\n    <a class=\"text-light\" href=\"\">{{'NCS PVT. LTD' | translate}}</a>\r\n  </div>\r\n  <!-- Copyright -->\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.token = '';
        this.form = {
            message: '',
            error: false
        };
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
    }
    HttpServiceService.prototype.setToken = function (token) {
        this.token = localStorage.getItem('token');
        //  console.log(this.token + '----> inside setToken');
    };
    HttpServiceService.prototype.getToken = function () {
        console.log(localStorage.getItem('token') + '====>> getToken');
        return localStorage.getItem('token');
    };
    HttpServiceService.prototype.isLogout = function () {
        var JSESSIONID = localStorage.getItem('fname');
        if ((JSESSIONID == "null" || JSESSIONID === null) && (this.router.url != "/login"
            && this.router.url != "/Auth"
            && this.router.url != "/logout"
            && this.router.url != "/forgotpassword"
            && this.router.url != "/signup"
            && this.router.url != "/login/true")) {
            this.form.message = "Your Session has been Expired! Please Re-Login";
            this.form.error = true;
            this.userparams.url = this.router.url; // to navigate the URI request.
            this.router.navigateByUrl("/login");
            console.log("AKASH SONI");
            return true;
        }
        else {
            return false;
        }
    };
    HttpServiceService.prototype.get = function (endpoint, callback) {
        if (this.isLogout()) {
            console.log('inside isLogout() return true');
            return true;
        }
        return this.httpClient.get(endpoint).subscribe(function (data) {
            console.log('Data :: ' + data);
            callback(data);
        });
    };
    HttpServiceService.prototype.post = function (endpoint, bean, callback) {
        if (this.isLogout()) {
            console.log('inside isLogout return true');
            return true;
        }
        return this.httpClient.post(endpoint, bean).subscribe(function (data) {
            console.log(data);
            callback(data);
        }, function (error) {
            console.log('ORS Error--', error);
        });
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/jasper-report/jasper-report.component.css":
/*!***********************************************************!*\
  !*** ./src/app/jasper-report/jasper-report.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2phc3Blci1yZXBvcnQvamFzcGVyLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/jasper-report/jasper-report.component.html":
/*!************************************************************!*\
  !*** ./src/app/jasper-report/jasper-report.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  jasper-report works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/jasper-report/jasper-report.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/jasper-report/jasper-report.component.ts ***!
  \**********************************************************/
/*! exports provided: JasperReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JasperReportComponent", function() { return JasperReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var JasperReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JasperReportComponent, _super);
    function JasperReportComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.JASPERREPORT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    JasperReportComponent.prototype.ngOnInit = function () {
        this.generateReport();
    };
    JasperReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jasper-report',
            template: __webpack_require__(/*! ./jasper-report.component.html */ "./src/app/jasper-report/jasper-report.component.html"),
            styles: [__webpack_require__(/*! ./jasper-report.component.css */ "./src/app/jasper-report/jasper-report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], JasperReportComponent);
    return JasperReportComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div id=\"loader\">\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"loading\"></div>\r\n    </div>\r\n\r\n    <p class=\"spinner-message\" *ngIf=\"message && message !== ''\">\r\n      {{message}}\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/login/forgotpassword.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login/forgotpassword.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar ></app-navbar>\r\n<style>\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  } \r\n  \r\n</style>\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:15%;\r\nbackground: url(assets/files/wlan-g460d14db8_1920.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 95vh;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n\r\n  <div class=\"col-sm-4\">\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form #loginForm=\"ngForm\">\r\n          \r\n          <div style=\"text-align: center;\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Forgot Password' | translate}}</h1>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error == false && form.message == 'Password has been sent to email id'\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <span class=\"alertRedColor\">{{inputerror.loginId}}</span>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n              <button (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Reset My Password' | translate}}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  \r\n</div>\r\n  </div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/forgotpassword.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/forgotpassword.component.ts ***!
  \***************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(httpService, dataValidator, router) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8080/Auth";
        this.form = {
            error: false,
            message: "",
            loginId: '',
        };
        this.inputerror = {};
        this.message = '';
    }
    ForgotPasswordComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        return flag;
    };
    /**
     * Initialize component
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.get(_self.endpoint + "/fp/" + this.form.loginId, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            console.log(res.result.message + '------>msg');
            if (res.result.message) {
                _self.form.message = res.result.message;
                console.log(_self.form.message + '-------> msg in sucess');
            }
            _self.form.error = !res.success;
            if (_self.form.error && res.result.inputerror) {
                _self.inputerror = res.result.inputerror;
            }
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/login/forgotpassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtHQUNUOzs7QUFFQTtJQUNDLFlBQVk7R0FDYjs7O0FBRUE7SUFDQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0UmVkQ29sb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5yZXF1aXJlZC1maWVsZDo6YWZ0ZXIgeyBcdFx0XHJcbiAgY29udGVudDogXCIqXCI7XHRcdFxyXG4gIGNvbG9yOiByZWQ7XHRcdFxyXG4gICB9XHRcclxuXHJcbiAgIC5zdWNjZXNzQ29sb3J7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgIH1cclxuXHJcbiAgIC5idG4tc3BhY2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar #one></app-navbar>\r\n<style>\r\n  #nnn{\r\n    background: none;\r\n    border: none;\r\n  }\r\n  \r\n  </style>\r\n  \r\n  \r\n<style type=\"text/css\">\r\n  .log1 {\r\n    padding-top: 13%; \r\n  }\r\n  \r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n    \r\n  }\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n    \r\n  }\r\n  </style>\r\n<div class=\"row \" style=\"padding-top: 8%; padding-bottom: 8%;\r\nbackground: url(assets/files/pexels-pixabay-268533.jpg) no-repeat center center;\r\n   background-attachment: fixed;\r\nbackground-size: 225vh;width:auto;\r\n  height: 105vh;\">\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card input-group-addon grad\">\r\n      <div class=\"card-body\">\r\n        <form>\r\n          <div style=\"text-align: center;\">\r\n            <h1 class=\"text-dark font-weight-bold\">{{'Login' | translate}}</h1>\r\n          </div>\r\n          <input type=\"hidden\" name=\"loginUrl\" [(ngModel)]=\"form.loginUrl\" class=\"form-control\">\r\n          <div *ngIf=\"form.error && form.message == 'Invalid ID or Password'\"\r\n            class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{'Invalid ID or Password' | translate}}\r\n          </div>\r\n          <div *ngIf=\"form.error==false && form.message == 'Logout Successfully'\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{'Log out successfully' | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message == 'Your Session has been Expired! Please Re-Login'\"\r\n            class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{'Session Expired, Please Login Again' | translate}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n           <span  *ngIf=\"inputerror.loginId != null\"\r\n          class=\"alertRedColor\" style=\" color: red;\" > {{'loginId'| translate}} </span> \r\n          </div>\r\n           <!-- <span class=\"alertRedColor\">{{inputerror.loginId}}</span>  -->\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span  *ngIf=\"inputerror.password != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span> \r\n\r\n            <!-- <span class=\"alertRedColor\">{{inputerror.password}}</span> -->\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n              <button (click)=\"signIn()\" class=\"btn btn-md btn-success\">\r\n                {{'Sign in' | translate}}</button>\r\n            </div>\r\n            &nbsp;&nbsp;&nbsp;\r\n            <div class=\"pl-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/forgotpassword']\">{{'Forgot Password' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer>\r\n\r\n</app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, dataValidator, router, cookieService, route, serviceLocator) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.serviceLocator = serviceLocator;
        this.endpoint = "http://localhost:8080/Auth";
        this.form = {
            error: false,
            message: '',
            loginId: '',
            password: '',
            loginUrl: '',
        };
        this.inputerror = {};
        this.message = '';
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
    }
    /**
     * Initialize component
     */
    LoginComponent.prototype.ngOnInit = function () {
        //this.userSessionCheck();
        if (this.httpService.form.error == true) {
            this.form.message = this.httpService.form.message;
            this.form.error = this.httpService.form.error;
        }
        var a = '';
        this.serviceLocator.getPathVariable(this.route, function (params) {
            a = params["userparams"];
            console.log('I GOT ID, its logout', a);
        });
        if (a == 'true') {
            this.form.message = 'Logout Successfully';
        }
    };
    LoginComponent.prototype.userSessionCheck = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            //  this.userList = params.get('userparams');    
            //  this.userparams=JSON.parse(this.route.snapshot.paramMap.get('userparams'));
            _this.userparams = JSON.parse(_this.route.snapshot.queryParamMap.get('userparams'));
            if (_this.userparams != null) {
                _this.form.message = _this.userparams.sessionExpiredMsg;
                _this.form.loginUrl = _this.userparams.url;
                //  console.log('URL-----------------------' + this.userparams.url);
                //  console.log('Message-----------------------' + this.userparams.sessionExpiredMsg);
                //  console.log('Method Type-----------------------' + this.userparams.methodType);
            }
        });
        if (this.form.message != null) {
            this.form.error = true;
        }
    };
    LoginComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        console.log(this.form.loginId);
        flag = flag && this.dataValidator.isNotNull(this.form.password);
        console.log(this.form.password);
        return flag;
    };
    LoginComponent.prototype.signIn = function () {
        var _self = this;
        this.form.error = false;
        var requestedUrl = this.httpService.userparams.url; //to get the URI
        console.log('signIn----', this.form);
        this.httpService.post(this.endpoint + "/login", this.form, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            //_self.form.loginId = res.result.loginId;
            if (_self.dataValidator.isNotNullObject(res.result.message)) {
                _self.form.message = res.result.message;
            }
            _self.form.error = !res.success;
            if (_self.dataValidator.isNotNullObject(res.result.inputerror)) {
                _self.inputerror = res.result.inputerror;
            }
            if (_self.dataValidator.isTrue(res.success)) {
                _self.httpService.setToken(res.result.token);
                localStorage.setItem("loginId", res.result.loginId);
                var tokenStr = "Bearer " + res.result.token;
                localStorage.setItem("token", tokenStr);
                localStorage.setItem("role", res.result.role);
                localStorage.setItem("fname", res.result.fname);
                localStorage.setItem("lname", res.result.lname);
                localStorage.setItem("userid", res.result.data.id);
                //   console.log(res.result.data.id + 'sessionId set ----');
                //   console.log(res.result.token + '  Token set ----');
                if (requestedUrl != null && requestedUrl != '') {
                    _self.router.navigateByUrl(requestedUrl);
                }
                else {
                    _self.router.navigateByUrl('dashboard');
                }
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_locator_service__WEBPACK_IMPORTED_MODULE_6__["ServiceLocatorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/signup.component.html":
/*!*********************************************!*\
  !*** ./src/app/login/signup.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n   .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 25px\r\n  ;\r\n  }\r\n \r\n</style>\r\n<div class=\"row \" style=\" padding-top: 4%;\r\n padding-bottom:0%;background-image: url(../../assets/files/9985.jpg);\r\nbackground-attachment: fixed;\r\nbackground-size: 100%;\r\n  height: 120vh;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n         <form>\r\n          <div style=\"text-align: center;\">\r\n            <h3 class=\"text-primary font-weight-bold\">\r\n              {{'Sign Up' | translate}}\r\n            </h3>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message|translate}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null && form.message.length>0\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message|translate}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.firstName != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'firstname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.firstName}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.lastName != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'lastname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.lastName}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Login id' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"login\" [(ngModel)]=\"form.data.login\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\r\n\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.login != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'email'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.login}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.password != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{password | translate}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span  *ngIf=\"form.inputerror.phone != null\"\r\n              class=\"alertRedColor\" style=\" color: red;\" > {{'phone'| translate}} </span>\r\n          </div>\r\n\r\n          <!-- <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.alternateMobile != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'mobile'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.phone}} </span> \r\n          <!-- </div>  -->\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [(ngModel)]=\"form.data.dob\" class=\"form-control\">\r\n              </div>\r\n            </div> <span  *ngIf=\"form.inputerror.dob != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'dob'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.dob}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\r\n                  <option value=\"Male\">{{'Male' | translate}} </option>\r\n                  <option value=\"Female\">{{'Female' | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div> <span  *ngIf=\"form.inputerror.gender != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'gender'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.gender}} </span> -->\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"pt-2\">\r\n\r\n\r\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Sign up' | translate}}</button>\r\n            </div>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <div class=\"pt-2\">\r\n\r\n              <a class=\"btn btn-warning mr-1\" href=\"/signup\">{{'Reset' | translate}}</a>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/signup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signup.component.ts ***!
  \*******************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(serviceLocator, httpService, dataValidator, router) {
        this.serviceLocator = serviceLocator;
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8080/Auth/signUp";
        this.form = {
            error: false,
            message: '',
            data: { id: null },
            inputerror: {},
        };
    }
    SignUpComponent.prototype.validate = function () {
        return this.validateForm(this.form);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    SignUpComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        flag = flag && validator.isNotNullObject(form.gender);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    /**
     * Initialize component
     */
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.reset = function () {
        this.router.navigateByUrl('/signup');
    };
    SignUpComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.post(this.endpoint, this.form.data, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            _self.form.error = !res.success;
            if (_self.form.error && res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/login/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.html":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div  style=\"\r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;\r\npadding-top: 5%;\r\npadding-bottom: 24%;\r\nwidth:100%;\r\n  height: 100;\">\r\n  <form name=\"rollForm\" (ngSubmit)=\"go()\">\r\n    <div align=\"center\">\r\n      <div style=\"font-size: 80px;\">\r\n      <p class=\"font-weight-bold text-primary\">{{'Get Marksheet' | translate }}</p>\r\n    </div>\r\n    </div>\r\n    <div class=\"row pt-4 pb-4\">\r\n      <div class=\"col-sm-4 \"></div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n        <input type=\"text\" name=\"rollNo\" id=\"rollNo\" class=\"form-control\" [(ngModel)]=\"form.data.rollNo\"\r\n          placeholder=\"{{'Enter Roll Number' | translate }}\">&emsp;</div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n        <button type=\"submit\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n          {{'Search' | translate }}</button>\r\n        <a class=\"btn btn-primary\" [routerLink]=\"['/getmarksheet']\"> {{'Reset' | translate}} </a>\r\n        \r\n        &emsp;\r\n\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-3 col-xs-3\"></div>\r\n\r\n    </div>\r\n  </form>\r\n  <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    {{form.message}}\r\n  </div>\r\n  <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    {{form.message}}\r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"form.list.rollNo!= null\" >\r\n\r\n    <table width=\"100%\" class=\"table table-bordered table-striped table-hover\" border=\"3px\">\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'RollNO' | translate }}</th>\r\n        <td id=\"po1\" colspan=\"3\">{{form.list.rollNo}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Name' | translate }}</th>\r\n        <td id=\"po1\" colspan=\"3\">{{form.list.name}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Marks' | translate }}</th>\r\n        <th align=\"center\" id=\"po1\">{{'Max Marks' | translate }}</th>\r\n        <th  align=\"center\" id=\"po1\">{{'Min Marks' | translate }}</th>\r\n        <th  align=\"center\" id=\"po1\">{{'Marks Obtain' | translate }}</th>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Subject' | translate }}</th>\r\n        \r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Physics' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.physics}}*</span> -->\r\n          <span [ngStyle]=\"{'color': (form.list.physics >35) ? 'green': 'red' }\">{{form.list.physics}}</span>\r\n          \r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Chemistry' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.chemistry}}*</span>  -->\r\n          <span [ngStyle]=\"{'color': (form.list.chemistry >35) ? 'green': 'red' }\">{{form.list.chemistry}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Maths' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.maths}}*</span> -->\r\n          <span [ngStyle]=\"{'color': (form.list.maths >35) ? 'green': 'red' }\">{{form.list.maths}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Total' | translate }}</th>\r\n\r\n        <td id=\"po1\" colspan=\"3\" align=\"center\">{{form.list.maths+form.list.physics+form.list.chemistry}}</td>\r\n      </tr>\r\n      <tr>\r\n\r\n        <th id=\"po1\" colspan=\"2\">{{'Percentage' | translate }}</th>\r\n\r\n        <td id=\"po1\" colspan=\"3\" align=\"center\">\r\n          {{((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 | number:'2.0-2' }}%\r\n        \r\n          \r\n        \r\n        \r\n        </td>\r\n      </tr>\r\n     <!--  <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Grade' | translate }}</font>\r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\r\n          <font color=\"green\"><b>{{'PASS' | translate }}</b></font>\r\n        </td>\r\n      </tr> -->\r\n\r\n      <!-- <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>\r\n          <font color=\"red\"><b>F</b></font>\r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\r\n          <font color=\"red\"><b>{{'FAIL' | translate }}</b></font>\r\n        </td>\r\n      </tr> -->\r\n      <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>         \r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\"  *ngIf=\"((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 > 35; else elseBlock\">\r\n\r\n          <font color=\"green\"><b>{{'Pass' | translate }}</b></font>\r\n        </td>\r\n        <ng-template #elseBlock><td id=\"po1\" align=\"center\" colspan=\"3\" ><font color=\"red\"><b>{{'Fail' | translate }}</b></font></td></ng-template>\r\n      </tr>\r\n\r\n    </table>\r\n    \r\n</div><div style=\"position: relative; clear: both;\">\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.ts ***!
  \*****************************************************/
/*! exports provided: GetmarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetmarksheetComponent", function() { return GetmarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var GetmarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GetmarksheetComponent, _super);
    function GetmarksheetComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, rollNo: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    GetmarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    GetmarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.rollNo);
        return flag;
    };
    GetmarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.rollNo = data.rollNo;
    };
    GetmarksheetComponent.prototype.go = function () {
        var _self = this;
        console.log("onClickSubmit");
        console.log(this.form.data);
        console.log(this.form.data.rollNo);
        this.httpservice.get("http://localhost:8080/Marksheet/rollno/" + this.form.data.rollNo, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    GetmarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getmarksheet',
            template: __webpack_require__(/*! ./getmarksheet.component.html */ "./src/app/marksheet/getmarksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], GetmarksheetComponent);
    return GetmarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 8%; \r\nbackground: url(assets/files/pexels-pixabay-326333.jpg) no-repeat center center;\r\nbackground-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <!-- <div class=\"col-sm-6 p-1 text-center\"> -->\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'Marksheet List' | translate}}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row  pt-4 pb-4 \" style=\"margin-left:15%\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{'Search Name'| translate}}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.rollNo\"\r\n            placeholder=\"{{'Search Roll No'| translate}}\">\r\n\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.marksheetList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search'| translate}}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/marksheet')\" type=\"button\" class=\"btn btn-success\">{{'Add Marksheet'| translate}}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No'| translate}}</th>\r\n                <th>{{'RollNO'| translate}}</th>\r\n                <th>{{'Name'| translate}}</th>\r\n                <th>{{'Physics'| translate}}</th>\r\n                <th>{{'Chemistry'| translate}}</th>\r\n                <th>{{'Maths'| translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <!-- <td> <input type=\"checkbox\" name=\"list_name\" value=\"{{isMasterSel}}\" [(ngModel)]=\"isMasterSel\" (change)=\"isAllSelected()\"/>\r\n                  </td> -->\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\"\r\n                    value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                \r\n\r\n                <td> {{ m.rollNo }} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.physics }} </td>\r\n                <td> {{ m.chemistry }} </td>\r\n                <td> {{ m.maths }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/marksheet/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n\r\n                  <!-- <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <table style=\"width: 100%;\">\r\n          <tr>\r\n            <td style=\"width: 50%;\">\r\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                }} </button>\r\n            </td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\"\r\n              [routerLink]=\"['/marksheetlist']\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n\r\n\r\n\r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                translate }}</button></td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MarksheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetListComponent", function() { return MarksheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MarksheetListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetListComponent, _super);
    function MarksheetListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    MarksheetListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    MarksheetListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8080/Marksheet/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet-list',
            template: __webpack_require__(/*! ./marksheet-list.component.html */ "./src/app/marksheet/marksheet-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MarksheetListComponent);
    return MarksheetListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya3NoZWV0L21hcmtzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0dBQ1Q7OztBQUVBO0lBQ0MsWUFBWTtHQUNiOzs7QUFFQTtJQUNDLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hcmtzaGVldC9tYXJrc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxyXG4gIGNvbnRlbnQ6IFwiKlwiO1x0XHRcclxuICBjb2xvcjogcmVkO1x0XHRcclxuICAgfVx0XHJcblxyXG4gICAuc3VjY2Vzc0NvbG9ye1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICB9XHJcblxyXG4gICAuYnRuLXNwYWNlIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Marksheet' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Marksheet' | translate}}</h2>\r\n          \r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Roll No' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"rollNo\" [(ngModel)]=\"form.data.rollNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Roll No' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.rollNo}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Student' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                \r\n\r\n                <select class=\"form-control\" required name=\"studentId\"\r\n                  [(ngModel)]=\"form.data.studentId\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Student' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.studentList\" [value]=\"obj.id\">{{obj.firstName + ' ' +obj.lastName }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.studentId}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Physics' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phy\" [(ngModel)]=\"form.data.physics\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Physics Marks' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.physics}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Chemistry' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"chemistry\" [(ngModel)]=\"form.data.chemistry\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Chemistry Marks' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.chemistry}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Maths' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                \r\n                <input type=\"text\" name=\"math\" [(ngModel)]=\"form.data.maths\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Maths Marks'| translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.maths}} </span>\r\n          </div>\r\n         \r\n         \r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update'| translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/marksheetlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'Back'| translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.ts ***!
  \**************************************************/
/*! exports provided: MarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetComponent", function() { return MarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var MarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetComponent, _super);
    function MarksheetComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.marksheetForm = null;
        return _this;
    }
    MarksheetComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('Dheeraj');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Dheeraj----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    MarksheetComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    MarksheetComponent.prototype.onUpload = function (marksheetform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    MarksheetComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.marksheetForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetComponent.prototype.onSubmitProfile = function (fileToUpload, marksheetform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.form.data.id, formData);
    };
    MarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    MarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        console.log('Student name :: ' + form.name);
        flag = flag && validator.isNotNullObject(form.rollNo);
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.physics);
        flag = flag && validator.isNotNullObject(form.chemistry);
        flag = flag && validator.isNotNullObject(form.maths);
        return flag;
    };
    MarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.studentId = data.studentId;
        form.rollNo = data.rollNo;
        form.physics = data.physics;
        form.chemistry = data.chemistry;
        form.maths = data.maths;
        form.imageId = data.imageId;
        console.log('Populated Form', form);
    };
    MarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet',
            template: __webpack_require__(/*! ./marksheet.component.html */ "./src/app/marksheet/marksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MarksheetComponent);
    return MarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  }\r\n  \r\n</style>\r\n<div class=\"content-wrapper\" style=\"padding-top: 1%;padding-bottom: 1%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"col-sm-12 pt-3\"> \r\n          <h3 class=\"text-primary text-center font-weight-bold\">{{'Marksheet Merit List' | translate}}</h3>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div style=\"margin-left: 87%;\" class=\"pb-2\">\r\n\r\n        <a href=\"\" (click)=\"forward( '/jasperReport')\" class=\"btn btn-lg btn-primary \" role=\"button\"  target=\"blank\">\r\n          <span class=\"fa fa-print mr-1\"></span>{{'Print' | translate}}</a>\r\n      </div> -->\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold grad\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n              <th >{{'S.No' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'RollNO' | translate}}  </th>\r\n\t\t\t\t\t\t\t<th >{{'Name' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Physics' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Chemistry' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Maths' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Total' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Percentage(%)' | translate}}</th>\r\n\t\t\t\t\t\t</tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let m of form.list; let i = index\" >\r\n\t\t\t\t\t\t\t<td>{{(form.pageNo*5)+i+ 1}} </td>\r\n\t\t\t\t\t\t\t<td >{{m.rollNo}}</td>\r\n\t\t\t\t\t\t\t<td >{{m.name}}</td>\r\n\t\t\t\t\t\t\t<td >{{m.physics}}</td>\r\n              <td> {{m.chemistry}}</td>\r\n              <td> {{m.maths}}</td>\r\n              <td>{{m.physics+m.maths+m.chemistry}}</td>\r\n              <td>{{((m.physics+m.maths+m.chemistry)*100)/300 | number:'2.0-2' }}%</td>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</tr>\r\n          </tbody>\r\n          </table>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div><app-footer>\r\n  \r\n</app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.ts ***!
  \************************************************************/
/*! exports provided: MarksheetmeritListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetmeritListComponent", function() { return MarksheetmeritListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var MarksheetmeritListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetmeritListComponent, _super);
    function MarksheetmeritListComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        return _this;
    }
    MarksheetmeritListComponent.prototype.ngOnInit = function () {
        this.getMeritList();
    };
    MarksheetmeritListComponent.prototype.getMeritList = function () {
        var _self = this;
        this.httpservice.get("http://localhost:8080/Marksheet/meritlist", function (res) {
            if (res.success) {
                _self.form.list = res.result.list;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    MarksheetmeritListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheetmerit-list',
            template: __webpack_require__(/*! ./marksheetmerit-list.component.html */ "./src/app/marksheet/marksheetmerit-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], MarksheetmeritListComponent);
    return MarksheetmeritListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/message/message-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/message/message-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat, repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"col-sm-6 p-1\">\r\n          <h4 class=\"text-primary font-weight-bold\">{{'Message List' | translate}}</h4>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n\r\n        <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subject\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.body\"\r\n            placeholder=\"{{'Search Body' | translate}}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate}}</button></div>\r\n        <div class=\"col=sm-1\">\r\n          <button (click)=\"forward('/message')\" type=\"button\" class=\"btn btn-success\">{{'Add Message'| translate}}\r\n          </button></div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-lg-1\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous'| translate}}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n          <button (click)=\"next()\" class=\"btn btn-info\">{{'Next'| translate}} </button>\r\n        </div>\r\n        <div class=\"col-lg-2\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'| translate}}</th>\r\n                <th>{{'Code'| translate}}</th>\r\n                <th>{{'Subject' | translate}}</th>\r\n                <th>{{'Body'| translate}}</th>\r\n                <th>{{'Type'| translate}}</th>\r\n                <th>{{'Status'| translate}}</th>\r\n                <th>#</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.code }} </td>\r\n                <td> {{ m.subject }} </td>\r\n                <td> {{ m.body }} </td>\r\n                <td> {{ m.type }} </td>\r\n                <td> {{ m.status }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/message/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/message/message-list.component.ts ***!
  \***************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var MessageListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageListComponent, _super);
    function MessageListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/message/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageListComponent);
    return MessageListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg);\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Message' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Message' | translate}} </h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Type' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-comment grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"type\" [(ngModel)]=\"form.data.type\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Type' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.type}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Code' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-commenting grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"code\" id=\"code\" [(ngModel)]=\"form.data.code\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option selected=\"true\">{{'Please select'  | translate }}</option>\r\n                  <option value=\"U-FP\">U-FP </option>\r\n                  <option value=\"U-REG\">U-REG </option>\r\n                  <option value=\"U-CP\">U-CP</option>\r\n                </select>\r\n\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.code}}</span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-comments grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"subject\" [(ngModel)]=\"form.data.subject\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Subject'| translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Body' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"body\" [(ngModel)]=\"form.data.body\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Body' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.body}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"status\" [(ngModel)]=\"form.data.status\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Status' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'HTML' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"html\" [(ngModel)]=\"form.data.html\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message HTML' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.html}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/messagelist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\r\n              </button></div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var MessageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageComponent, _super);
    function MessageComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.type);
        flag = flag && validator.isNotNullObject(form.code);
        flag = flag && validator.isNotNullObject(form.subject);
        flag = flag && validator.isNotNullObject(form.body);
        return flag;
    };
    MessageComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.code = data.code;
        form.type = data.type;
        form.subject = data.subject;
        form.body = data.body;
        form.status = data.status;
        form.html = data.html;
        console.log('Populated Form', form);
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageComponent);
    return MessageComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n  .raj{\r\n  background-image : linear-gradient(to bottom right, rgb(52, 174, 174), rgb(205, 228, 240));}\r\n\r\n  .c1{\r\ncolor: rgb(235, 6, 6);\r\n  }\r\n  </style>\r\n\r\n<div class=\"header\">\r\n  <nav *ngIf=\"!isLogin()\" class=\"navbar navbar-expand-lg raj\">\r\n    <div class=\"logo\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n        <!-- <strong class=\"text-white\">Rays</strong> -->\r\n        <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\">\r\n      </a>  \r\n    </div>\r\n    <select #locale (change)='changeLocale(locale.value)'class=\"c1\" >\r\n       <option value=\"en\">{{'Select Language' | translate }}</option> \r\n      \r\n      <option value=\"en\" style=\"color: red;\">English</option>\r\n      <option value=\"hi\"style=\"color: red;\">{{'Hindi' | translate }}</option>\r\n    </select>\r\n\r\n\r\n    <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\" style=\"font-size: 15px;\">\r\n      <ul class=\"navbar-nav ml-auto\" style=\"padding-right: 6.5%;\">\r\n        \r\n        <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/myNav']\" id=\"navbarDropdown\" role=\"button\"\r\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <font style=\"color: white;\">{{'Hi,Guest'| translate}}\r\n            </font>\r\n\r\n          </a>\r\n\r\n          <div class=\"dropdown-menu\" id=\"myNav\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/login']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; &nbsp; {{'Log in' | translate}}</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/signup']\"><i class=\" fa fa-users\"></i> &nbsp; {{'User Registration' |\r\n              translate}}</a>\r\n          </div>\r\n        </li>\r\n        <li>\r\n\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n\r\n<nav *ngIf=\"isLogin()\" class=\"navbar navbar-expand-lg raj\">\r\n\r\n  <div class=\"logo\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n      <!-- <strong class=\"text-white\">Rays</strong> -->\r\n      <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\">\r\n    </a>\r\n  </div>\r\n  <!-- <strong class=\"text-white\">NCS Pvt Ltd</strong> -->\r\n\r\n\r\n  <select #locale (click)='changeLocale(locale.value)'>\r\n     <option value=\"hi\">{{'Select Language' | translate }}</option>\r\n    <option value=\"en\">English</option>\r\n    <option value=\"hi\">{{'Hindi' | translate }}</option>\r\n  </select>\r\n\r\n\r\n  <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n\r\n\r\n    <div class=\"col-sm-2\"></div>\r\n\r\n\r\n\r\n    <ul class=\"nav navbar-nav pl-2 \">\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'User' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/user']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add User' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/userlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'User List' | translate}}</a>\r\n        </div>\r\n      </li>\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Marksheet' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/marksheet']\"><i class=\"fa fa-file\"></i> &nbsp; {{'Add Marksheet' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/marksheetlist']\"><i class=\"fa fa-paste\"></i> &nbsp;\r\n            {{'Marksheet List' | translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/marksheetmeritlist']\"><i\r\n              class=\" fa fa-list\"></i> &nbsp; {{'Marksheet Merit List' | translate}} </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/getmarksheet']\"><i class=\"fa fa-copy\"></i> &nbsp; {{'Get Marksheet' |\r\n            translate}}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Role' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/role']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; {{'Add Role' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/rolelist']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Role List' |\r\n            translate}}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'College' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/college']\"><i class=\"fa fa-university\"></i> &nbsp; {{'Add College' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/collegelist']\"><i class=\"fa fa-building\"></i> &nbsp;\r\n            {{'College List' | translate}} </a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Course' | translate}}\r\n          </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/course']\"><i class=\"fa fa-book\"></i> &nbsp; {{'Add Course' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/courselist']\"><i class=\"fa fa-list\"></i> &nbsp; {{'Course List'\r\n            | translate}} </a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Student' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/student']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Student' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/studentlist']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Student\r\n            List' | translate}}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Faculty' | translate}}\r\n          </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/faculty']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Add Faculty' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/facultylist']\"><i class=\" fa fa-list\"></i> &nbsp; {{'Faculty\r\n            List' | translate}}</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'TimeTable' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/timetable']\"><i class=\"fa fa-clock-o\"></i> &nbsp; {{'Add TimeTable'\r\n            | translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/timetablelist']\"><i class=\"fa fa-list\"></i> &nbsp;\r\n            {{'TimeTable List' | translate}}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Subject' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/subject']\"><i class=\"fa fa-calculator\"></i> &nbsp; {{'Add Subject' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/subjectlist']\"> <i class=\"fa fa-list\"></i> &nbsp; {{'Subject\r\n            List' | translate}}\r\n          </a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{form.data.fname }} ({{form.data.role}})\r\n          </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n          <a class=\"dropdown-item\" (click)=\"forward()\"><i class=\" fa fa-user-md\"></i> &nbsp; {{'My Profile' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/changepassword']\"><i class=\" fa fa-key\"></i> &nbsp; {{'Change Password' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['../assets/doc/index.html']\" target=\"blank\"><i class=\"fa fa-file\"></i> &nbsp;\r\n            {{'Java Doc' | translate}}</a>\r\n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\" fa fa-lock\"></i> &nbsp;&nbsp;{{'Log Out' | translate}}</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, route, httpService, myservice, servicelocator) {
        this.translate = translate;
        this.route = route;
        this.httpService = httpService;
        this.myservice = myservice;
        this.servicelocator = servicelocator;
        this.form = {
            error: false,
            message: null,
            firstName: null,
            data: { id: null, fname: null, lname: null, role: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
        };
        console.log('DefaultLang ' + localStorage.getItem("locale"));
        if (localStorage.getItem("locale") != null) {
            translate.setDefaultLang(localStorage.getItem("locale"));
        }
        else {
            translate.setDefaultLang("en");
        }
    }
    NavbarComponent.prototype.changeLocale = function (locale) {
        localStorage.setItem("locale", locale);
        this.translate.use(localStorage.getItem("locale"));
        console.log('Locale ' + locale);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        // var _self = this;
        // this.httpService.get("http://localhost:8080/Auth/menu",function (res){
        //   if(res.success){
        //     _self.form.list = res.result.list;
        //   }else{
        //     _self.form.error = false;
        //     _self.form.message = res.result.message;
        //   }
        //   console.log('FORM', _self.form);
        // });
    };
    NavbarComponent.prototype.forward = function () {
        this.userid = localStorage.getItem("userid");
        console.log('UID---' + this.userid);
        this.servicelocator.forward("/user/" + this.userid);
    };
    NavbarComponent.prototype.isLogin = function () {
        var check = localStorage.getItem('fname');
        if (check != "null" && check != null) {
            this.form.data.fname = localStorage.getItem("fname");
            this.form.data.lname = localStorage.getItem("lname");
            this.form.data.loginId = localStorage.getItem("loginId");
            this.form.data.role = localStorage.getItem("role");
            // console.log('fname is ---->>>' + this.form.data.fname);
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.logout = function () {
        var _self = this;
        console.log('Logout', this.form);
        // let url = this.servicelocator.endpoints.getEndpoint(this.servicelocator.endpoints.AUTH, "logout");
        // this.servicelocator.httpService.post(url, this.form, function (res, error) {
        //   if (error) {
        //     alert(error);
        //     return;
        //   }
        //   _self.loginId = "null";
        //   localStorage.removeItem("token");
        //   localStorage.removeItem("fname");
        //   localStorage.removeItem("lname");
        //   localStorage.removeItem("loginId");
        //   localStorage.removeItem("role")
        //   console.log('After logout jsessionid---' +localStorage.getItem("JSESSIONID") + "  logout Pushpendra Singh Kushwah");
        //   this.form.message = "Logout Successfully";
        //   console.log(this.form.message);
        //  _self.servicelocator.router.navigateByUrl('/login/true');
        _self.httpService.get("http://localhost:8080/User/logout", function (res) {
            _self.servicelocator.router.navigateByUrl('/login/true');
            if (res.success) {
                localStorage.clear();
                _self.form.message = res.result.message;
                //     _self.form.list = res.result.data;
                //     localStorage.removeItem("JSESSIONID");
                //     _self.servicelocator.router.navigateByUrl('/login');
                //     if(_self.form.list.length == 0){
                //       _self.form.message = "No record found";
                //       _self.form.error = true;
                //     }
                //     console.log("List Size",_self.form.list.length );
                //   }else{
                //     _self.form.error = false;
                //     _self.form.message = res.result.message;
                //   }
                //   console.log('FORM', _self.form);
            }
            ;
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/role/role-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/role/role-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15;\r\n background: url(assets/files/back1.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n    <div class=\"container-fluid\">\r\n\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\" style=\"height: 50px;\">\r\n                \r\n                <div class=\"text-center\">\r\n                    <h1 class=\"text-primary font-weight-bold\">{{'Role List' | translate}}</h1>\r\n                  </div>\r\n                </div>\r\n          \r\n                <div class=\"row p-1\">\r\n                  <div class=\"col-sm-1\"></div>\r\n                  <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n                      placeholder=\"{{'Search Name' | translate}}\">\r\n          \r\n                  </div>\r\n                  <!-- <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n                  </div> -->\r\n                  <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\r\n                      placeholder=\"{{'Search Description' | translate}}\">\r\n          \r\n                  </div>\r\n\r\n                  <div class=\"col-sm-2\">\r\n\r\n                    <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n                      <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n                      <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                    </select>\r\n                  </div>\r\n          \r\n                  \r\n                 \r\n                  <div class=\"col-sm-1 ml-3\">\r\n                    <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n                      {{'Search' | translate }}</button>\r\n                  </div>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <div class=\"col-lg-2 ml-4\">\r\n                    <button (click)=\"forward('/role')\" type=\"button\" class=\"btn btn-success\">{{'Add Role' | translate}}\r\n                    </button>\r\n                  </div>\r\n          \r\n                  <div class=\"col-sm-1\">\r\n                    <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n                      {{'Delete'| translate}}</button>\r\n                  </div>\r\n                </div>\r\n            <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                {{form.message}}\r\n              </div>\r\n              <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                {{form.message}}\r\n              </div>\r\n\r\n          \r\n\r\n            <div class=\"p-1\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered table-striped table-hover font-weight-bold text-primary\">\r\n                        <thead class=\"thead-light text-uppercase\">\r\n                            <tr>\r\n                                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                                <th>{{'S.No' | translate }}</th>\r\n                                <th>{{'Name' | translate }}</th>\r\n                                <th>{{'Description' | translate }}</th>\r\n                                <th>{{'Edit' | translate}}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let m of form.list; let i = index\">\r\n                                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                                </td>\r\n                                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                                <td> {{ m.name }} </td>\r\n                                <td> {{ m.description }} </td>\r\n                                <td>\r\n                                    <a (click)=\"forward( '/role/' +  m.id)\" style=\"cursor: pointer;\">\r\n                                        <i class=\"fa fa-edit text-info\"></i>\r\n                                    </a>\r\n                                    <!-- /\r\n                                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                                        <i class=\"fa fa-trash text-danger\"></i>\r\n                                    </a> -->\r\n                                </td>\r\n                                \r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div><table style=\"width: 100%;\">\r\n                    <tr>\r\n                      <td style=\"width: 50%;\">\r\n                  <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                    }} </button></td>\r\n                    <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                    <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\">\r\n                      <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/rolelist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n        \r\n          \r\n          \r\n                \r\n                    <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                      translate }}</button></td>\r\n                    </tr>\r\n                    </table>\r\n              \r\n                    \r\n               \r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-list.component.ts ***!
  \*********************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RoleListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleListComponent, _super);
    function RoleListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/role/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RoleListComponent);
    return RoleListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlL3JvbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168),\r\n        rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 7%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Role' |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Role' |\r\n            translate }}</h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Role Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/rolelist')\" class=\"btn btn-md btn-warning\">\r\n                {{'List' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var RoleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleComponent, _super);
    function RoleComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    RoleComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    RoleComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.status = data.status;
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RoleComponent);
    return RoleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/service-locator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service-locator.service.ts ***!
  \********************************************/
/*! exports provided: ServiceLocatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return ServiceLocatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");






var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(hs, dv, r, ep) {
        this.hs = hs;
        this.dv = dv;
        this.r = r;
        this.ep = ep;
        this.httpService = null;
        this.dataValidator = null;
        this.router = null;
        this.endpoints = null;
        this.httpService = hs;
        this.dataValidator = dv;
        this.router = r;
        this.endpoints = ep;
    }
    /**
     * get path variable from url
     *
     * @param route
     * @param callback
     */
    ServiceLocatorService.prototype.getPathVariable = function (route, callback) {
        route.params.subscribe(function (params) {
            callback(params);
        });
    };
    /**
     * Forward to page
     *
     * @param page
     */
    ServiceLocatorService.prototype.forward = function (page) {
        this.router.navigateByUrl(page);
    };
    ServiceLocatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__["EndpointServiceService"]])
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  spinner works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/student/student-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/student/student-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n\r\n        <div class=\"text-center\">\r\n          <h2 class=\"text-primary font-weight-bold\">{{'Student List' | translate }}</h2>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.enrolNo\"\r\n            placeholder=\"{{'Search Enrollment' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\r\n            placeholder=\"{{'Search College' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.email\"\r\n            placeholder=\"{{'Search Email' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNo\"\r\n            placeholder=\"{{'Search Mobile Number' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-lg-2\">\r\n          <button (click)=\"forward('/student')\" type=\"button\" class=\"btn btn-success\">{{'Add Student' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No' | translate }}</th>\r\n                <th>{{'Enrollment No' | translate }}</th>\r\n                <th>{{'First Name' | translate }}</th>\r\n                <th>{{'Last Name' | translate }}</th>\r\n                <th>{{'College' | translate }}</th>\r\n                <th>{{'DOB' | translate }}</th>\r\n                <th>{{'Mobile' | translate }}</th>\r\n                <th>{{'Email' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td>{{m.enrolNo}}</td>\r\n                <td> {{ m.firstName }} </td>\r\n                <td> {{ m.lastName }} </td>\r\n                <td> {{ m.collegeName }} </td>\r\n                <td>{{m.dob | date : 'dd-MM-yyyy'}}</td>\r\n                <td> {{ m.phoneNo }} </td>\r\n                <td> {{ m.email }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/student/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n              <tr> <td style=\"width: 50%;\"><button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' |\r\n                    translate }} </button>\r\n                </td>  \r\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/studentlist']\">{{'Back' | translate}}</a></td>\r\n                <td>\r\n                  <button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\">{{'Next' | translate }} </button>\r\n                 </td>\r\n                </tr>\r\n              </table>\r\n          \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-list.component.ts ***!
  \***************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var StudentListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentListComponent, _super);
    function StudentListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentListComponent);
    return StudentListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; \r\npadding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Student' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Student' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Enrollment No' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"enrolNo\" [(ngModel)]=\"form.data.enrolNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Enrollment Number' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.enrolNo}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstN\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastN\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'College' | translate }} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\r\n                </div>\r\n\r\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select College' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.collegeId}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email' | translate }} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\r\n          </div>\r\n          \r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"  ><b>{{'Mobile No' | translate }} </b>\r\n              <span class=\"required-field\" ></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" maxlength=\"10\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/studentlist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var StudentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentComponent, _super);
    function StudentComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    StudentComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.enrolNo);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        flag = flag && validator.isNotNullObject(form.email);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    StudentComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.collegeId = data.collegeId;
        console.log(form.collegeId + " inside populateForm method");
        form.email = data.email;
        form.enrolNo = data.enrolNo;
        form.dob = data.dob;
        //let ndate = new Date(data.dob);
        //console.log(form.dob + 'date ------',ndate)
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.phoneNo = data.phoneNo;
    };
    StudentComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentComponent);
    return StudentComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/subject/subject-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Subject List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\r\n            placeholder=\"{{'Search Course' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/subject')\" type=\"button\" class=\"btn btn-success\">{{'Add Subject' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n      \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'Course' | translate}}</th>\r\n               \r\n                <th>{{'Description' | translate}}</th>\r\n                <th>{{'Edit' | translate }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.subjectName}} </td>\r\n                <td> {{ m.courseName}} </td>\r\n               \r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/subject/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/subjectlist']\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n                \r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/subject-list.component.ts ***!
  \***************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var SubjectListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectListComponent, _super);
    function SubjectListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! ./subject-list.component.html */ "./src/app/subject/subject-list.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectListComponent);
    return SubjectListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Subject' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Subject' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"subjectName\" [(ngModel)]=\"form.data.subjectName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Subject Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Description' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"form.data.description\"\r\n                  placeholder=\"{{'Enter Description' | translate}}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/subjectlist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\r\n              </button></div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var SubjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectComponent, _super);
    function SubjectComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    SubjectComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.subjectName);
        flag = flag && validator.isNotNullObject(form.description);
        flag = flag && validator.isNotNullObject(form.courseId);
        return flag;
    };
    SubjectComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectName = data.subjectName;
        form.description = data.description;
        form.courseId = data.courseId;
        console.log('Populated Form', form);
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectComponent);
    return SubjectComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'TimeTable List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\r\n            placeholder=\"{{'Search Course' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/timetable')\" type=\"button\" class=\"btn btn-success\">{{'Add TimeTable' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Semester' | translate }}</th>\r\n                <th>{{'ExamDate' | translate }}</th>\r\n                <th>{{'ExamTime' | translate }}</th>\r\n                <th>{{'Course' | translate }}</th>\r\n                <th>{{'Subject' | translate }}</th>\r\n                <th>{{'Description' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              \r\n              <tr *ngFor=\"let m of form.list; let i = index;\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.semester }} </td>\r\n                <td> {{ m.examDate | date : 'dd-MM-yyyy' }} </td>\r\n                <td> {{ m.examTime }} </td>\r\n                <td> {{ m.courseName }} </td>\r\n                <td> {{ m.subjectName }} </td>\r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/timetable/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                      <i class=\"fa fa-trash text-danger\"></i>\r\n                    </a>\r\n                  </td> -->\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/timetablelist']\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n              \r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/timetable/timetable-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TimetableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableListComponent", function() { return TimetableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var TimetableListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableListComponent, _super);
    function TimetableListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        var ppSize = 0;
        return _this;
    }
    TimetableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable-list',
            template: __webpack_require__(/*! ./timetable-list.component.html */ "./src/app/timetable/timetable-list.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TimetableListComponent);
    return TimetableListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timetable/timetable.component.html":
/*!****************************************************!*\
  !*** ./src/app/timetable/timetable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add TimeTable' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update TimeTable' | translate }}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Course' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          \r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-globe grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Subject' | translate }}</option>\r\n            \r\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Semester' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"semester\" [(ngModel)]=\"form.data.semester\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\"> {{'Please select' | translate}} </option>\r\n                  <option value=\"1 Semester\">1 Semester</option>\r\n                  <option value=\"2 Semester\">2 Semester</option>\r\n                  <option value=\"3 Semester\">3 Semester</option>\r\n                  <option value=\"4 Semester\">4 Semester</option>\r\n                  <option value=\"5 Semester\">5 Semester</option>\r\n                  <option value=\"6 Semester\">6 Semester</option>\r\n                  <option value=\"7 Semester\">7 Semester</option>\r\n                  <option value=\"8 Semester\">8 Semester</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.semester}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Exam Date' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"examDate\" [value]=\"form.data.examDate | date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.examDate=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.examDate}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Exam Time' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"examTime\" [(ngModel)]=\"form.data.examTime\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select examTime' | translate }}</option>\r\n            \r\n                  <option selected disabled>{{'Please select' | translate }}</option>\r\n                  <option value=\"08:00 AM to 11:00 AM\">08:00 AM to 11:00 AM</option>\r\n                  <option value=\"12:00PM to 3:00PM\">12:00PM to 3:00PM</option>\r\n                  <option value=\"3:00PM to 6:00PM\">3:00PM to 6:00PM</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.examTime}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea  name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\"  (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button  *ngIf=\"form.data.id>0\"  (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n              {{'Update' | translate }}</button>\r\n            </div>\r\n           \r\n           \r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/timetablelist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TimetableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableComponent, _super);
    function TimetableComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    TimetableComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    TimetableComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.semester);
        flag = flag && validator.isNotNullObject(form.examDate);
        console.log(form.examDate);
        flag = flag && validator.isNotNullObject(form.examTime);
        flag = flag && validator.isNotNullObject(form.courseId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    TimetableComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseId = data.courseId;
        form.subjectId = data.subjectId;
        form.semester = data.semester;
        form.examDate = data.examDate;
        form.examTime = data.examTime;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    TimetableComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable',
            template: __webpack_require__(/*! ./timetable.component.html */ "./src/app/timetable/timetable.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TimetableComponent);
    return TimetableComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/changepassword.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/changepassword.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n.grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  }\r\n  </style>\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom: 5%;\r\n background-image: url(../../assets/files/wall.jpg);\r\n  background-attachment: fixed;\r\n  background-size: cover; width:auto;\r\n    height: auto;\">\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2  class=\"text-primary font-weight-bold\">{{'Change Password' | translate }}</h2>\r\n    \r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Old Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"oldPassword\" [(ngModel)]=\"form.data.oldPassword\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Old Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n        \r\n        <div style=\"padding-top:3%\">\r\n            <span><b>{{'New Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock-alt grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"newPassword\" [(ngModel)]=\"form.data.newPassword\" class=\"form-control\"\r\n                placeholder=\"{{'Enter New Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>Confirm Password</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"form.data.confirmPassword\" class=\"form-control\"\r\n                placeholder=\"{{'Confirm Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.confirmPassword}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button   (click)=\"changePassword()\" class=\"btn btn-success mr-2\">\r\n               {{'Update' | translate}} </button>\r\n            </div>\r\n            <input type=\"hidden\" name=\"loginId\" [(ngModel)]=\"form.data.confirmPassword\">\r\n            \r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/changepassword.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/changepassword.component.ts ***!
  \**************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var ChangepasswordComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangepasswordComponent, _super);
    function ChangepasswordComponent(locator, route, httpService) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpService = httpService;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    ChangepasswordComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.oldPassword);
        flag = flag && validator.isNotNullObject(form.newPassword);
        flag = flag && validator.isNotNullObject(form.confirmPassword);
        return flag;
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        var _self = this;
        this.form.data.loginId = localStorage.getItem("loginId");
        this.httpService.post("http://localhost:8080/User/changepassword", this.form.data, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.form.message = res.result.message;
            }
        });
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/user/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/myprofile.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/myprofile.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; \r\nbackground: url(assets/files/edc.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg\">\r\n        <form name=\"myProfile\">\r\n          <h2 class=\"text-primary font-weight-bold\">{{'My Profile'  | translate }}</h2>\r\n         \r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          \r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'login Id'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Password'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.password}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n          \r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Gender'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select'  | translate }}</option>\r\n                  <option value=\"Male\">{{'Male'  | translate }} </option>\r\n                  <option value=\"Female\">{{'Female'  | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Image'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"file\" id=\"customFile\" name=\"imageId\"\r\n                  (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\">\r\n\r\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\" readonly>\r\n\r\n                  <option value=\"Active\">{{'Active'  | translate }} </option>\r\n                  <option value=\"Inactive\">{{'Inactive'  | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            \r\n\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/myprofile.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/myprofile.component.ts ***!
  \*********************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MyprofileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyprofileComponent, _super);
    function MyprofileComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    MyprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/user/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MyprofileComponent);
    return MyprofileComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/user-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/user-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/whit2.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <!-- <div class=\"col-sm-5\"> -->\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'User List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n      <!-- <button class=\"filebtn third\">Button 3</button> -->\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.firstName\"\r\n            placeholder=\"{{'Search First Name' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/user')\" type=\"button\" class=\"btn btn-success\">{{'Add User' | translate}}\r\n          </button>\r\n        </div>\r\n        \r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\"  name=\"list_name\" value=\"h1\" \r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'Image' | translate}}</th>\r\n                <th>{{'First Name' | translate}}</th>\r\n                <th>{{'Last Name' | translate}}</th>\r\n                <th>{{'Login' | translate}}</th>\r\n                <th>{{'Status' | translate}}</th>\r\n                <th>{{'Role' | translate}}</th>\r\n                <th>{{'Phone' | translate}}</th>\r\n                <th>{{'DOB' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" [disabled]=\"m.roleName=='Admin'\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td>\r\n                  <div *ngIf=\"m.imageId\">\r\n                    <img src=\"http://localhost:8080/User/profilePic/{{m.id}}\" height=\"55px\" width=\"80px\">\r\n                  </div>\r\n                  <div *ngIf=\"!m.imageId\">\r\n                    <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\r\n                  </div>\r\n                </td>\r\n\r\n                <td> {{ m.firstName }} </td>\r\n                <td> {{ m.lastName }} </td>\r\n                <td> {{ m.loginId }} </td>\r\n                <td> {{ m.status }} </td>\r\n                <td> {{ m.roleName }} </td>\r\n                <td> {{ m.phone }} </td>\r\n                <td> {{ m.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>\r\n\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\" [disabled]=\"m.roleName=='Admin'\" (click)=\"forward( '/user/' +  m.id)\" style=\"\r\n                  cursor: pointer;\"></button>\r\n                  <!-- <a (click)=\"forward( '/user/' +  m.id)\" style=\"\r\n                    cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-primary\"></i>\r\n                  </a> -->\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger \"></i>\r\n                  </a> -->\r\n\r\n                </td>\r\n              </tr>\r\n\r\n\r\n\r\n\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/userlist']\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserListComponent, _super);
    function UserListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    UserListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    UserListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8080/User/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserListComponent);
    return UserListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.file-btn{\r\n    border: black;\r\n}\r\n\r\n\r\n.third {\r\n    border-color: #b300b3;\r\n    color: #695d29;\r\n    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;\r\n    transition: all 150ms ease-in-out;\r\n  }\r\n\r\n\r\n.third:hover {\r\n    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;\r\n  }\r\n\r\n\r\n.filebtn {\r\n    box-sizing: border-box;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    background-color: transparent;\r\n    border: 2px solid #e74c3c;\r\n    border-radius: 0.6em;\r\n    color: #e74c3c;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-self: center;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    margin: 20px;\r\n    padding: 1.2em 2.8em;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n  }\r\n\r\n\r\n.filebtn:hover, .filebtn:focus {\r\n    color: #ffffff;\r\n    outline: 0;\r\n  }\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3REFBd0Q7SUFFeEQsaUNBQWlDO0VBQ25DOzs7QUFDQTtJQUNFLDBEQUEwRDtFQUM1RDs7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO09BQ3JCLHFCQUFxQjtZQUNoQixnQkFBZ0I7SUFDeEIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFJZixhQUFhO0lBR0wsa0JBQWtCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGdCQUFnQjtFQUNsQjs7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZmlsZS1idG57XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG59XHJcblxyXG4udGhpcmQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjMwMGIzO1xyXG4gICAgY29sb3I6ICM2OTVkMjk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICMzNDk4ZGIgaW5zZXQsIDAgMCAwIDAgIzM0OThkYjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAudGhpcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjMzQ5OGRiIGluc2V0LCAwIDAgMTBweCA0cHggIzM0OThkYjtcclxuICB9XHJcbiAgLmZpbGVidG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMS4yZW0gMi44ZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5maWxlYnRuOmhvdmVyLCAuZmlsZWJ0bjpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<style type=\"text/css\">\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 2%; padding-bottom:2%;\r\n\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:100%;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad \">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add User' |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update User' |\r\n            translate }}</h2>\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Role Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n\r\n\r\n                <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.data.roleId\" aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.roleId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'role'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.roleId}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.firstName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'firstname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.lastName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'lastname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'login Id' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.loginId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'email'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.loginId}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Password' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.password != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'password'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.password}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Mobile' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.phone != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'phone'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.alternateMobile != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'mobile'| translate}} </span></div>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.alternateMobile}} </span> -->\r\n\r\n\r\n            <div>\r\n         \r\n             <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                  required />\r\n              </div>\r\n            </div>\r\n<span *ngIf=\"form.inputerror.dob != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'dob'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span> -->\r\n          </div>\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n                  <option value=\"Male\">{{'Male' | translate }} </option>\r\n                  <option value=\"Female\">{{'Female' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.gender != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'gender'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.gender}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Image' | translate }}</b>\r\n              <!-- <option [ngValue]=\"\" value=\"undefined\"></option> -->\r\n              <span *ngIf=\"!form.data.imageId\" class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div *ngIf=\"form.data.imageId\">\r\n                <img src=\"http://localhost:8080/User/profilePic/{{form.data.id}}\" height=\"55px\" width=\"80px\">\r\n              </div>\r\n              <div *ngIf=\"!form.data.imageId\">\r\n                <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-picture-o grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"file\" id=\"customFile\" name=\"imageId\" (change)=\"onFileSelect($event.target.files)\"\r\n                  accept=\"image/*\">\r\n\r\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bell grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Status' | translate }}</option>\r\n                  <option value=\"Active\">{{'Active' | translate }} </option>\r\n                  <option value=\"Inactive\">{{'Inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.status != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'status'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.status}} </span> -->\r\n          </div>\r\n          <div class=\"row pt-2 pl-2 pb-3\">\r\n\r\n            <div class=\"col-md-3\"></div>\r\n\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"col-md-1\"></div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/userlist']\"\r\n                  style=\"text-decoration: none; color: white;\">{{'List' | translate }}</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserComponent, _super);
    function UserComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.userForm = null;
        return _this;
    }
    UserComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('akash');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------akash----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            _self.myFile();
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    UserComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    UserComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.onSubmitProfile = function (fileToUpload, userform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.form.data.id, formData);
    };
    UserComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.roleId);
        console.log(form.roleId);
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        console.log(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        console.log(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        console.log(form.phone);
        flag = flag && validator.isNotNullObject(form.alternateMobile);
        console.log(form.alternateMobile);
        flag = flag && validator.isNotNullObject(form.dob);
        console.log(form.dob);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender + 'gender--');
        flag = flag && validator.isNotNullObject(form.status);
        console.log(form.status + 'status---');
        return flag;
    };
    UserComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in usercomponent');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.loginId = data.loginId;
        form.password = data.password;
        form.gender = data.gender;
        console.log(form.gender + 'gender--');
        form.alternateMobile = data.alternateMobile;
        form.phone = data.phone;
        console.log(form.phone);
        form.dob = data.dob;
        form.roleId = data.roleId;
        form.status = data.status;
        form.imageId = data.imageId;
        console.log(form.status + 'status---');
    };
    UserComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    UserComponent.prototype.test = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/utility/data-validator.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/data-validator.ts ***!
  \*******************************************/
/*! exports provided: DataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidator", function() { return DataValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataValidator = /** @class */ (function () {
    function DataValidator() {
    }
    DataValidator.prototype.trim = function (valueToWhite) {
        return valueToWhite.replace(/\s/g, "");
    };
    //Vipin Gupta
    /**
     * Check is string is not empty
     * @param val
     */
    DataValidator.prototype.isNotNull = function (val) {
        var flag = true;
        try {
            if (val) {
                val = this.trim(val);
                flag = val.length > 0;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
   * Is string is empty
   * @param val
   */
    DataValidator.prototype.isNull = function (val) {
        return !this.isNotNullObject(val);
    };
    /**
     * Is not null object
     */
    DataValidator.prototype.isNotNullObject = function (val) {
        var flag = true;
        try {
            if (val) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
     * Is null object
     */
    DataValidator.prototype.isNullObject = function (val) {
        return !this.isNotNullObject(val);
    };
    DataValidator.prototype.isTrue = function (val) {
        var flag = true;
        if (val) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    /**
     *
     * @param val Convets string into number
     */
    DataValidator.prototype.toInt = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseInt(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    DataValidator.prototype.toFloat = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseFloat(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    /**
     * Create clone pobject
     *
     * @param obj
     */
    DataValidator.prototype.getClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    DataValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataValidator);
    return DataValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ORS_Project10\ORSProject10-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map