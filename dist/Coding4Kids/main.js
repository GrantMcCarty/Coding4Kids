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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");








const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'lessons', component: _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_3__["LessonsComponent"], canActivate: [_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 0, consts: [[1, "example-container"], ["mode", "side"], ["drawer", ""], ["routerLink", "/dashboard"], ["routerLink", "/lessons"], [1, "toggle", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "view_headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  mat-drawer-content[_ngcontent-%COMP%] {\r\n    background-color: #cf9;\r\n    padding: 12px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n  .toggle[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIG1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y5O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC50b2dnbGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
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

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_13__["LessonsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_13__["LessonsComponent"]
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
        console.log("next lesson");
        this.router.navigate(['/lessons']);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 5, vars: 0, consts: [[1, "dashboard", "center"], [2, "position", "absolute", "top", "0%"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Next Lesson!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_3_listener() { return ctx.nextLesson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
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
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 1, consts: [[1, "header"], [1, "center"], [2, "position", "absolute", "right", "0", "top", "0px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Coding4Kids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Current User: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n    background-color: #ff6;\r\n    width: 100%;\r\n    height: 85px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





function LessonsComponent_div_6_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LessonsComponent_div_6_div_3_div_2_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.setChoice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const choice_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", choice_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", choice_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", choice_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](choice_r8);
} }
function LessonsComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LessonsComponent_div_6_div_3_Template_div_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.currentChoice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LessonsComponent_div_6_div_3_div_2_Template, 5, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.currentChoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.choices);
} }
function LessonsComponent_div_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LessonsComponent_div_6_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.checkAnswer(ctx_r14.currentChoice); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LessonsComponent_div_6_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LessonsComponent_div_6_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.flipPage(0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LessonsComponent_div_6_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LessonsComponent_div_6_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.flipPage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LessonsComponent_div_6_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LessonsComponent_div_6_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next Question!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LessonsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LessonsComponent_div_6_div_3_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LessonsComponent_div_6_button_4_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LessonsComponent_div_6_button_5_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LessonsComponent_div_6_button_6_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LessonsComponent_div_6_button_7_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getLessonText());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.quiz || ctx_r0.break);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.quiz && !ctx_r0.answered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasPrevious() && !ctx_r0.quiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasNext());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.answered);
} }
function LessonsComponent_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LessonsComponent_div_7_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.repeatQuiz(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Repeat Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LessonsComponent_div_7_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LessonsComponent_div_7_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.nextLesson(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next Lesson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LessonsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LessonsComponent_div_7_button_2_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LessonsComponent_div_7_button_3_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" You got : ", ctx_r1.correctAnswers, " / ", ctx_r1.totalQuestions, " Questions Correct! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.correctAnswers < ctx_r1.totalQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.correctAnswers >= ctx_r1.totalQuestions);
} }
class LessonsComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.currentLesson = 1; //TODO implement what next lesson or current lesson is
        this.currentPage = this.currentBreak = this.correctAnswers = 0;
        this.quiz = this.break = this.answered = this.endQuiz = false;
        this.httpClient.get('assets/lessons/lesson' + this.currentLesson + '.json', { responseType: 'json' })
            .subscribe(data => {
            this.lesson = data;
            this.lessonHeader = this.lesson.header;
            this.headerText = this.lesson.headerText;
            this.totalQuestions = this.lesson.quiz.length;
        });
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
    }
    hasNext() {
        return this.lesson && this.lesson.lessonText.length > this.currentPage + 1;
    }
    hasPrevious() {
        return this.lesson && this.currentPage != 0;
    }
    flipPage(number) {
        let pageNum = this.currentPage + number;
        if (pageNum < 0)
            return;
        let pageSize = this.lesson.lessonText.length;
        if (pageNum >= pageSize)
            return;
        this.currentPage += number;
        this.getLessonText();
    }
    setChoice(event) {
        this.currentChoice = event.target.defaultValue;
    }
    checkAnswer() {
        if (this.currentChoice == undefined)
            return;
        console.log(this.currentChoice);
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
        if (this.currentBreak >= this.totalQuestions)
            this.endQuiz = true;
    }
    nextLesson() {
        //TODO implement lesson tracking feature
    }
    repeatQuiz() {
        this.endQuiz = false;
        this.correctAnswers = 0;
        this.currentBreak -= this.totalQuestions;
    }
}
LessonsComponent.ɵfac = function LessonsComponent_Factory(t) { return new (t || LessonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LessonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LessonsComponent, selectors: [["app-lessons"]], decls: 8, vars: 4, consts: [[1, "header"], [1, "lesson"], [1, "boxheader"], [2, "padding-top", "5px"], [4, "ngIf"], [2, "padding", "8px"], ["class", "center", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["style", "position: absolute; left:0; bottom: 0;", "mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["style", "position: absolute; right:0; bottom: 0;", "mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "center"], [1, "form-group", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "radio"], ["type", "radio", "name", "radio", 3, "id", "value", "change"], [3, "for"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 2, "position", "absolute", "left", "0", "bottom", "0", 3, "click"], ["mat-raised-button", "", "color", "accent", 2, "position", "absolute", "right", "0", "bottom", "0", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function LessonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LessonsComponent_div_6_Template, 8, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LessonsComponent_div_7_Template, 4, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lessonHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.endQuiz);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endQuiz);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".lesson[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 100px;\r\n    border: 1px solid #000;\r\n    width: 50%;\r\n    height: 450px;\r\n    left: 25%;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    background-color: #FFF;\r\n    font-size: 20px;\r\n}\r\n.boxheader[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background-color: rgb(0,0,255);\r\n    color: #fff;\r\n    width: 100%;\r\n    height: 8%;\r\n    text-align: center;\r\n    top: -20px;\r\n}\r\n.radio-button[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy9sZXNzb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sZXNzb25zL2xlc3NvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXNzb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYm94aGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMjU1KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAtMjBweDtcclxufVxyXG4ucmFkaW8tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lessons',
                templateUrl: './lessons.component.html',
                styleUrls: ['./lessons.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign-in or Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoginComponent_div_0_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.setUsername($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoginComponent_div_0_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setPassword($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_0_Template_mat_icon_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.hide = !ctx_r4.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.checkUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.createUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text")("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hide ? "visibility_off" : "visibility");
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
            return data.valid;
        });
        return false;
        //ng if failed send error banner?
    }
    setUsername($event) {
        this.username = $event.target.value;
    }
    setPassword($event) {
        this.password = $event.target.value;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "logindiv", 4, "ngIf"], [1, "logindiv"], [1, "boxheader"], [1, "login"], ["matInput", "", "type", "text", "id", "username", "name", "username", "required", "", 3, "ngModel", "change"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "required", "", 3, "type", "ngModel", "change"], ["matSuffix", "", 3, "click"], ["type", "button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 22, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"]], styles: [".logindiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 17.5%;\r\n    top: 100px;\r\n    width: 65%;\r\n    border: groove 2px #000;\r\n    border-radius: 15px;\r\n    background-color: rgb(255,255,255,.9);\r\n}\r\n.boxheader[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border: solid 1px #000;\r\n    border-radius: 12px 12px 0 0;\r\n    background-color: #000;\r\n    color: #fff;\r\n    width: 100%;\r\n    height: 26px;\r\n    top: -1px;\r\n    left: -1px;\r\n    text-align: center;\r\n}\r\n.login[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left: 5%;\r\n    padding: 5px;\r\n}\r\n.user[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 2;\r\n    top: 5%;\r\n    right: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5kaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTcuNSU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGJvcmRlcjogZ3Jvb3ZlIDJweCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSwuOSk7XHJcbn1cclxuLmJveGhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnVzZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogNSU7XHJcbiAgICByaWdodDogMiU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
        return this.http.post(this.url + "createUser", data, { headers, responseType: 'json' });
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
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
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