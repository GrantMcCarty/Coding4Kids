(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lessons/lessons.component */ "./src/app/lessons/lessons.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-stats/user-stats.component */ "./src/app/user-stats/user-stats.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");









const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'lessons', component: _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_3__["LessonsComponent"], canActivate: [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]] },
    { path: 'user-stats', component: _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_5__["UserStatsComponent"], canActivate: [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class AppComponent {
    constructor() {
        this.title = 'Coding4Kids';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [[1, "example-container"], ["mode", "side"], ["drawer", ""], ["routerLink", "/dashboard"], ["routerLink", "/lessons"], ["routerLink", "/user-stats"], [1, "toggle", 3, "click"], ["src", "../assets/images/pixil-frame-0.png", 2, "position", "fixed", "bottom", "0", "left", "0", "width", "12%", "height", "25%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_mat_icon_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "view_headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  mat-drawer-content[_ngcontent-%COMP%] {\r\n    background-color: #ff9;\r\n    padding: 12px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n  .toggle[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n  }\r\n  mat-drawer[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n    padding: 10px;\r\n    background-color: #c96;\r\n  }\r\n  a[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    padding: 5px;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n  a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ff9;\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBtYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICAudG9nZ2xlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgbWF0LWRyYXdlciB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOTY7XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lessons/lessons.component */ "./src/app/lessons/lessons.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-stats/user-stats.component */ "./src/app/user-stats/user-stats.component.ts");


















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_13__["LessonsComponent"],
        _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_16__["UserStatsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_13__["LessonsComponent"],
                    _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_16__["UserStatsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    nextLesson() {
        this.router.navigate(['/lessons']);
    }
}
DashboardComponent.??fac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 5, vars: 0, consts: [[1, "dashboard", "center"], [2, "position", "absolute", "top", "0%"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Start Next Lesson!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_button_click_3_listener() { return ctx.nextLesson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
        let item = sessionStorage.getItem('currentUser');
        if (item)
            this.username = item;
        else
            this.username = "Guest";
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 1, consts: [[1, "header"], [1, "center"], [2, "position", "absolute", "right", "0", "top", "0px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Coding4Kids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Current User: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.username);
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n    background-color: rgb(62, 124, 0);\r\n    width: 100%;\r\n    height: 85px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTI0LCAwKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/lessons/lessons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/lessons/lessons.component.ts ***!
  \**********************************************/
/*! exports provided: LessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsComponent", function() { return LessonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script.service */ "./src/app/script.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");









function LessonsComponent_div_6_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LessonsComponent_div_6_span_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r8.getLesson(i_r7 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Lesson ", i_r7 + 1, "");
} }
const _c0 = function () { return []; };
function LessonsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Lessons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LessonsComponent_div_6_span_3_Template, 3, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0).constructor(ctx_r0.currentLesson));
} }
function LessonsComponent_div_7_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function LessonsComponent_div_7_div_2_div_2_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r17.setChoice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const choice_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", choice_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", choice_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("for", choice_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](choice_r15);
} }
function LessonsComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LessonsComponent_div_7_div_2_Template_div_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r19.currentChoice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LessonsComponent_div_7_div_2_div_2_Template, 5, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r10.currentChoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r10.choices);
} }
function LessonsComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Answer Here:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function LessonsComponent_div_7_div_3_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r21.setInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LessonsComponent_div_7_div_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r23.checkInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Check Answer!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r11.input);
} }
function LessonsComponent_div_7_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LessonsComponent_div_7_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r24.checkAnswer(ctx_r24.currentChoice); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Check Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LessonsComponent_div_7_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LessonsComponent_div_7_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r26.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Next Question!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LessonsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LessonsComponent_div_7_div_2_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LessonsComponent_div_7_div_3_Template, 9, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, LessonsComponent_div_7_button_9_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, LessonsComponent_div_7_button_10_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerText", ctx_r1.getLessonText());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.quiz || ctx_r1.break);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.showInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.quiz && !ctx_r1.answered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.answered);
} }
function LessonsComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LessonsComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r28.flipPage(0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LessonsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LessonsComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r30.flipPage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LessonsComponent_div_11_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LessonsComponent_div_11_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r33.nextLesson(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Next Lesson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LessonsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LessonsComponent_div_11_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r35.repeatQuiz(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Repeat Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, LessonsComponent_div_11_button_6_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("You got : ", ctx_r4.correctAnswers, " / ", ctx_r4.totalQuestions, " Questions Correct!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.completedLesson());
} }
class LessonsComponent {
    constructor(httpClient, script, userService) {
        this.httpClient = httpClient;
        this.script = script;
        this.userService = userService;
        this.time = 0;
    }
    startTimer() {
        this.interval = setInterval(() => {
            this.time++;
        }, 1000);
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
    ngOnInit() {
        this.loadScript();
        this.userService.userCall(sessionStorage.getItem('currentUser')).subscribe(data => {
            this.currentLesson = data.stats.lessonsCompleted + 1;
        });
        this.currentPage = this.currentBreak = this.correctAnswers = this.time = 0;
        this.quiz = this.break = this.answered = this.endQuiz = false;
    }
    ngOnDestroy() {
        this.updateStats();
    }
    getLessonInfo(data) {
        var _a, _b;
        if (!data) {
            alert("Error getting lesson " + this.currentLesson);
            return;
        }
        this.lesson = data;
        this.totalQuestions = ((_b = (_a = this.lesson) === null || _a === void 0 ? void 0 : _a.quiz) === null || _b === void 0 ? void 0 : _b.length) || 0;
    }
    loadScript() {
        this.script.load('filepicker').then(data => {
            console.log('script loaded');
        }).catch(error => console.log(error));
    }
    getLessonText() {
        if (this.lesson) {
            let text = this.lesson.lessonText[this.currentPage];
            if (text != "break" && text != "quiz") {
                this.quiz = this.break = false;
                return this.lesson.lessonText[this.currentPage];
            }
            else if (text == "break") {
                this.break = true;
                this.choices = this.lesson.choices[this.currentBreak];
                return this.lesson.break[this.currentBreak];
            }
            else if (text == "quiz") {
                this.quiz = true;
                this.choices = this.lesson.quizChoices[this.currentBreak];
                return this.lesson.quiz[this.currentBreak];
            }
        }
        else
            return "";
    }
    hasNext() {
        return this.lesson && this.lesson.lessonText.length > this.currentPage + 1;
    }
    hasPrevious() {
        return this.lesson && this.currentPage != 0;
    }
    flipPage(number) {
        var _a;
        let pageNum = this.currentPage + number;
        if (pageNum < 0)
            return;
        let pageSize = this.lesson.lessonText.length;
        if (pageNum >= pageSize)
            return;
        this.currentPage += number;
        this.getLessonText();
        let showCode = ((_a = this.lesson) === null || _a === void 0 ? void 0 : _a.showCode) || -1;
        if (this.currentPage == showCode) {
            document.getElementById("codeSection").children[this.currentLesson - 1].removeAttribute("hidden");
        }
        else if (showCode != -1) {
            document.getElementById("codeSection").children[this.currentLesson - 1].setAttribute("hidden", "");
        }
        else if (this.lesson.inputPages) {
            this.showInput = this.lesson.inputPages.includes(this.currentPage);
        }
    }
    setChoice(event) {
        this.currentChoice = event.target.defaultValue;
    }
    checkAnswer() {
        if (this.currentChoice == undefined)
            return;
        let correct = this.currentChoice[0] == this.lesson.answers[this.currentBreak];
        if (correct)
            this.correctAnswers++;
        let message = correct ? "Correct! :)" : "Incorrect! :(";
        alert(message);
        this.answered = true;
        this.currentChoice = undefined;
    }
    nextQuestion() {
        this.answered = false;
        this.currentBreak++;
        if (this.currentBreak >= this.totalQuestions) {
            this.quiz = false;
            this.endQuiz = true;
        }
    }
    nextLesson() {
        this.updateStats();
        window.location.reload();
    }
    updateStats() {
        if (this.currentLesson == 7)
            return;
        let score = this.correctAnswers / this.totalQuestions;
        this.userService.updateStats({
            name: sessionStorage.getItem('currentUser'),
            lesson: this.currentLesson,
            timeSpent: this.time,
            quizScore: score,
            completed: score >= 0.8
        });
        this.pauseTimer();
    }
    repeatQuiz() {
        this.updateStats();
        this.endQuiz = false;
        this.quiz = true;
        this.correctAnswers = 0;
        this.currentBreak -= this.totalQuestions;
    }
    setInput($event) {
        this.input = $event.target.value;
    }
    checkInput() {
        let correct = this.lesson.correctInput;
        let found = false;
        correct.forEach(str => {
            if (str == this.input) {
                this.showInput = false;
                found = true;
                return;
            }
        });
        found ? alert("Correct! :D") : alert("Incorrect! :(");
    }
    completedLesson() {
        return (this.correctAnswers / this.totalQuestions) >= 0.8;
    }
    getLessonHeader() {
        return this.lesson ? this.lesson.header : "";
    }
    getLessonHeaderText() {
        return this.lesson ? this.lesson.headerText : "";
    }
    getLesson(lessonNum) {
        this.httpClient.get('assets/lessons/lesson' + lessonNum + '.json', { responseType: 'json' })
            .subscribe(data => this.getLessonInfo(data));
        this.currentLesson = lessonNum;
        this.startTimer();
    }
}
LessonsComponent.??fac = function LessonsComponent_Factory(t) { return new (t || LessonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
LessonsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LessonsComponent, selectors: [["app-lessons"]], decls: 12, vars: 7, consts: [[1, "header"], [1, "lesson"], [1, "boxheader"], [2, "padding-top", "6px"], ["class", "lessonChoices", 4, "ngIf"], [4, "ngIf"], [2, "position", "relative", "padding", "5px"], ["style", "float:left;", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["style", "float:right;", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "lessonChoices"], ["style", "padding:10px", 4, "ngFor", "ngForOf"], [2, "padding", "10px"], ["mat-raised-button", "", "color", "accent", 3, "click"], [2, "display", "block", "padding", "8px", "font-family", "Georgia, 'Times New Roman', Times, serif", "font-size", "25px", 3, "innerText"], ["class", "center", 4, "ngIf"], ["id", "codeSection"], ["id", "lesson1", "hidden", "", "data-pym-src", "https://www.jdoodle.com/embed/v0/3rgy?stdin=0&arg=0&rw=0"], ["hidden", ""], ["id", "lesson3", "hidden", "", "data-pym-src", "https://www.jdoodle.com/embed/v0/3rUH?stdin=0&arg=0&rw=1"], [1, "center"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "form-group", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "radio"], ["type", "radio", "name", "radio", 3, "id", "value", "change"], [3, "for"], [2, "display", "flex", "justify-content", "center", "align-content", "center"], [2, "width", "300px", "padding", "10px"], ["matInput", "", "type", "text", "id", "input", "name", "input", 3, "ngModel", "change"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "float", "left", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", 3, "click"]], template: function LessonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, LessonsComponent_div_6_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, LessonsComponent_div_7_Template, 11, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, LessonsComponent_button_9_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, LessonsComponent_button_10_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, LessonsComponent_div_11_Template, 7, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getLessonHeader());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getLessonHeaderText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.lesson);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.endQuiz);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hasPrevious() && !ctx.quiz);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hasNext() && !ctx.showInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.endQuiz);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"]], styles: [".lesson[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 150px;\r\n    border: 1px solid #000;\r\n    width: 50%;\r\n    height: 450px;\r\n    left: 25%;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    background-color: #FFF;\r\n    font-size: 20px;\r\n}\r\n.boxheader[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    background-color: #86592d;\r\n    color: #fff;\r\n    height: 8%;\r\n    text-align: center;\r\n    top: 0px;\r\n    z-index:2;\r\n}\r\n.radio-button[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.button-bottom[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 40%;\r\n    margin-bottom: 0px;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 70px;\r\n}\r\n.lessonChoices[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy9sZXNzb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sZXNzb25zL2xlc3NvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXNzb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYm94aGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY1OTJkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OjI7XHJcbn1cclxuLnJhZGlvLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnV0dG9uLWJvdHRvbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDcwcHg7XHJcbn1cclxuLmxlc3NvbkNob2ljZXN7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LessonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lessons',
                templateUrl: './lessons.component.html',
                styleUrls: ['./lessons.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _script_service__WEBPACK_IMPORTED_MODULE_2__["ScriptService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Sign-in or Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function LoginComponent_div_0_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.setUsername($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function LoginComponent_div_0_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.setPassword($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_div_0_Template_mat_icon_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.hide = !ctx_r4.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.checkUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_div_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.createUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx_r0.hide ? "password" : "text")("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.hide ? "visibility_off" : "visibility");
} }
class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.hide = true;
        this.checkSession();
    }
    checkSession() {
        let user = sessionStorage.getItem('currentUser');
        if (user) {
            this.username = user;
            this.loggedIn = true;
        }
    }
    checkUser() {
        if (this.username == null)
            this.username = "Guest";
        this.userService.loginCall(this.username, this.password).subscribe(data => {
            this.loggedIn = data.valid;
            if (data.valid)
                this.storeUser(this.username);
            else
                alert("Login failed, check username and password");
        });
    }
    storeUser(user) {
        console.log("Storing current user: " + user);
        sessionStorage.setItem('currentUser', user);
        this.router.navigate(['/dashboard']);
    }
    clear() {
        this.username = null;
        this.password = null;
    }
    createUser() {
        //cant create username as Guest/Admin or a duplicate username
        this.userService.createCall(this.username, this.password).subscribe(data => {
            this.loggedIn = data.valid;
            if (data.valid)
                this.storeUser(this.username);
            else
                alert("User already exists!\n Try logging in or creating an account with a different name.");
            return data.valid;
        });
    }
    setUsername($event) {
        this.username = $event.target.value;
    }
    setPassword($event) {
        this.password = $event.target.value;
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "logindiv", 4, "ngIf"], [1, "logindiv"], [1, "boxheader"], [1, "login"], ["matInput", "", "type", "text", "id", "username", "name", "username", "required", "", 3, "ngModel", "change"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "required", "", 3, "type", "ngModel", "change"], ["matSuffix", "", 3, "click"], ["type", "button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, LoginComponent_div_0_Template, 22, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"]], styles: [".logindiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 17.5%;\r\n    top: 100px;\r\n    width: 65%;\r\n    border: groove 2px #000;\r\n    border-radius: 15px;\r\n    background-color: rgb(255,255,255,.9);\r\n}\r\n.boxheader[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border: solid 1px #000;\r\n    border-radius: 12px 12px 0 0;\r\n    background-color: #000;\r\n    color: #fff;\r\n    width: 100%;\r\n    height: 26px;\r\n    top: -1px;\r\n    left: -1px;\r\n    text-align: center;\r\n}\r\n.login[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left: 5%;\r\n    padding: 5px;\r\n}\r\n.user[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 2;\r\n    top: 5%;\r\n    right: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5kaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTcuNSU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGJvcmRlcjogZ3Jvb3ZlIDJweCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSwuOSk7XHJcbn1cclxuLmJveGhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnVzZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogNSU7XHJcbiAgICByaWdodDogMiU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/script.service.ts":
/*!***********************************!*\
  !*** ./src/app/script.service.ts ***!
  \***********************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ScriptService {
    constructor() {
        this.script = {}; //if more scripts are needed, change script field to array
        this.script = { loaded: false, src: 'https://www.jdoodle.com/assets/jdoodle-pym.min.js' };
    }
    load(script) {
        var promises = [];
        promises.push(this.loadScript(script));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            //resolve if already loaded
            if (this.script.loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.script.src;
                if (script.readyState) { //IE
                    script.onreadystatechange = () => {
                        if (script.readyState === "loaded" || script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.script.loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else { //Others
                    script.onload = () => {
                        this.script.loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }
}
ScriptService.??fac = function ScriptService_Factory(t) { return new (t || ScriptService)(); };
ScriptService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ScriptService, factory: ScriptService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user-stats/user-stats.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-stats/user-stats.component.ts ***!
  \****************************************************/
/*! exports provided: UserStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatsComponent", function() { return UserStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function UserStatsComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const time_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](idx_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", time_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.getQuizScores(idx_r2), " ");
} }
class UserStatsComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.userCall(sessionStorage.getItem('currentUser')).subscribe(data => {
            this.userStats = data.stats;
        });
    }
    getTimeSpent() {
        var _a;
        let arr = [];
        let largest = 0;
        let index = 0, favLesson = 0;
        (_a = this.userStats) === null || _a === void 0 ? void 0 : _a.timeSpent.forEach(element => {
            let num = Number(element);
            if (num > largest) {
                largest = num;
                favLesson = index;
            }
            let minutes = Math.floor(num / 60);
            let seconds = num % 60;
            let str = minutes != 0
                ? minutes + " minutes, " + seconds + " seconds"
                : seconds + " seconds";
            arr.push(str);
            index++;
        });
        this.getFavoriteActivity(favLesson + 1);
        return arr;
    }
    getQuizScores(idx) {
        var _a;
        let scores = (_a = this.userStats) === null || _a === void 0 ? void 0 : _a.quizScores[idx];
        return scores && scores.length > 0 ? scores : ["N/A"];
    }
    scoresAsText(scores) {
        let string = "";
        for (let x = 0; x < (scores === null || scores === void 0 ? void 0 : scores.length); x++) {
            string += scores[x];
            if (x + 1 != scores.length)
                string += ", ";
        }
        return string == "" ? "No Attempts" : string;
    }
    getFavoriteActivity(favLesson) {
        switch (favLesson) {
            case 1:
                this.favoriteActivity = "What is coding?";
                break;
            case 2:
                this.favoriteActivity = "What are variables?";
                break;
            case 3:
                this.favoriteActivity = "Hello World!";
                break;
            case 4:
                this.favoriteActivity = "If/Else Statements";
                break;
            case 5:
                this.favoriteActivity = "Loops";
                break;
            case 6:
                this.favoriteActivity = "Arrays[]";
                break;
        }
    }
    showFavoriteActivity() {
        return this.favoriteActivity ? this.favoriteActivity : "";
    }
}
UserStatsComponent.??fac = function UserStatsComponent_Factory(t) { return new (t || UserStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
UserStatsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserStatsComponent, selectors: [["app-user-stats"]], decls: 20, vars: 2, consts: [[1, "stats"], [2, "margin-left", "-2%"], [1, "header"], [4, "ngFor", "ngForOf"], [1, "favActivity"], [1, "data", 2, "width", "60px"], [1, "data"], ["src", "../assets/images/pixil-frame-5.png", 2, "float", "left", "width", "50px", "height", "40px"], ["src", "../assets/images/pixil-frame-5.png", 2, "float", "right", "width", "50px", "height", "40px"]], template: function UserStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Lesson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Time Spent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Quiz Scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, UserStatsComponent_tr_11_Template, 11, 3, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Favorite Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.getTimeSpent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.showFavoriteActivity());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".stats[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items:center;\r\n    top: 80px;\r\n    width: 100%;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n    border:2px solid #000;\r\n    background-color: #86592d;\r\n    width: 90%;\r\n    padding: 0;\r\n    font-size: 30px;\r\n}\r\n.data[_ngcontent-%COMP%] {\r\n    border:2px solid #000;\r\n    background-color: #FFF;\r\n    border-radius: 10px;\r\n}\r\n.favActivity[_ngcontent-%COMP%] {\r\n    background-color: chartreuse;\r\n    border: 5px dotted #ad7339;\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 150px;\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zdGF0cy91c2VyLXN0YXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC91c2VyLXN0YXRzL3VzZXItc3RhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0c3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxudGFibGV7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY1OTJkO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmRhdGEge1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmZhdkFjdGl2aXR5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XHJcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgI2FkNzMzOTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserStatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-stats',
                templateUrl: './user-stats.component.html',
                styleUrls: ['./user-stats.component.css']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
    'Content-Type': 'application/json'
});
class UserService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.loggedIn = false;
        // url = "http://localhost:3030/api/";
        this.url = "https://coding-4-kids-qariq.ondigitalocean.app/api/";
    }
    canActivate() {
        if (sessionStorage.getItem('currentUser')) {
            return true;
        }
        else {
            this.route.navigate(['/login']);
            return false;
        }
    }
    login(userName, password) {
        this.loginCall(userName, password).subscribe(data => {
            this.username = userName;
            this.loggedIn = data.valid;
        });
        return this.loggedIn;
    }
    loginCall(userName, password) {
        this.http.post(this.url + "sendToken", { 'token': "token4CSCI3550" }, { headers, responseType: 'json' }).subscribe(data => {
            if (data != "token4CSCI3550" + "-002")
                return null;
        });
        var data = { 'user': userName, 'password': password };
        return this.http.post(this.url + "login", data, { headers, responseType: 'json' });
    }
    createCall(userName, password) {
        this.http.post(this.url + "sendToken", { 'token': "token4CSCI3550" }, { headers, responseType: 'json' }).subscribe(data => {
            if (data != "token4CSCI3550" + "-002")
                return null;
        });
        var data = { 'user': userName, 'password': password };
        return this.http.post(this.url + "create-user", data, { headers, responseType: 'json' });
    }
    getUser() {
        return this.http.get(this.url + "get-user");
    }
    getUserInfo() {
        this.getUser().subscribe(user => {
            this.username = user;
        });
        return this.username;
    }
    getUserStats(user) {
        this.userCall(user).subscribe(data => {
            console.log(data);
            return data;
        });
    }
    userCall(user) {
        var data = { 'user': user };
        return this.http.post(this.url + "get-user-stats", data, { headers, responseType: 'json' });
    }
    updateStats(stats) {
        this.updateCall(stats).subscribe(data => console.log(data));
    }
    updateCall(stats) {
        var data = { 'stats': stats };
        return this.http.post(this.url + "update-user-stats", data, { headers, responseType: 'json' });
    }
}
UserService.??fac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: UserService, factory: UserService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\grant\OneDrive\Desktop\Git-Projects\Coding4Kids\AngularProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map