(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/+lp":
/*!******************************************************!*\
  !*** ./src/canvas-worker/canvas-worker.component.ts ***!
  \******************************************************/
/*! exports provided: CanvasWorkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasWorkerComponent", function() { return CanvasWorkerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_engine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/engine.service */ "wSd0");






const _c0 = ["canvas"];
class CanvasWorkerComponent {
    constructor(engine) {
        this.engine = engine;
    }
    onResize(event) {
        this.engine.setCameraPositionFromSize(event.target.innerWidth, event.target.innerHeight);
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const offscreen = this.canvas.nativeElement.transferControlToOffscreen();
            yield this.engine.init(offscreen);
            this.engine.initOrbitControls();
            this.addEventListener('pointermove', true);
            this.addEventListener('pointerup', true);
            for (let type of ['keydown', 'contextmenu', 'pointerdown', 'wheel', 'touchstart', 'touchend', 'touchmove']) {
                this.addEventListener(type);
            }
            this.render();
        });
    }
    addEventListener(type, parent = false) {
        document.addEventListener(type, event => {
            const eventProps = this.getEventProps(event);
            if (parent) {
                this.engine.dispatchControlsParentEvent(eventProps);
                return;
            }
            this.engine.dispatchControlsEvent(eventProps);
        }, false);
    }
    getEventProps(event) {
        const eventProps = new Object();
        const props = [
            "clientX",
            "clientY",
            "deltaY",
            "keyCode",
            "touches",
            "pointerType",
            "button",
            "ctrlKey",
            "metaKey",
            "shiftKey"
        ];
        for (const key of props) {
            if (event[key] === false || event[key] === undefined) {
                continue;
            }
            eventProps[key] = event[key];
        }
        eventProps.type = event.type;
        return eventProps;
    }
    render() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.engine.render();
        });
    }
}
CanvasWorkerComponent.ɵfac = function CanvasWorkerComponent_Factory(t) { return new (t || CanvasWorkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_engine_service__WEBPACK_IMPORTED_MODULE_2__["EngineService"])); };
CanvasWorkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CanvasWorkerComponent, selectors: [["ngx-canvas-worker"]], viewQuery: function CanvasWorkerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, hostBindings: function CanvasWorkerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function CanvasWorkerComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { width: "width", height: "height" }, decls: 2, vars: 2, consts: [[3, "width", "height"], ["canvas", ""]], template: function CanvasWorkerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("height", ctx.height);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CanvasWorkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-canvas-worker',
                template: "<canvas #canvas width='{{width}}' height='{{height}}'> </canvas>"
            }]
    }], function () { return [{ type: src_services_engine_service__WEBPACK_IMPORTED_MODULE_2__["EngineService"] }]; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gdros\apps\angular-three-worker-example\src\main.ts */"zUnb");


/***/ }),

/***/ "4U5Y":
/*!********************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=canvas.worker.js!./src/workers/engine.worker.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "canvas.worker.js.worker.js"

/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _canvas_worker_canvas_worker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas-worker/canvas-worker.component */ "/+lp");




// import { SharedBufferWorkerService } from 'src/service/shared-buffer.service';
class AppComponent {
    constructor() {
        this.title = 'angular-three-worker-example';
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.workerService = new SharedBufferWorkerService();
            // this.buffer = new SharedArrayBuffer(6); 
            // await this.workerService.initWorker(this.buffer);
            // this.update();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 2, consts: [[3, "width", "height"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-canvas-worker", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("height", ctx.height);
    } }, directives: [_canvas_worker_canvas_worker_component__WEBPACK_IMPORTED_MODULE_2__["CanvasWorkerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                template: '<ngx-canvas-worker width="{{width}}" height="{{height}}"></ngx-canvas-worker>',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var src_canvas_worker_canvas_worker_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/canvas-worker/canvas-worker.module */ "aQHs");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            src_canvas_worker_canvas_worker_module__WEBPACK_IMPORTED_MODULE_3__["NgxCanvasWorkerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        src_canvas_worker_canvas_worker_module__WEBPACK_IMPORTED_MODULE_3__["NgxCanvasWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    src_canvas_worker_canvas_worker_module__WEBPACK_IMPORTED_MODULE_3__["NgxCanvasWorkerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aQHs":
/*!***************************************************!*\
  !*** ./src/canvas-worker/canvas-worker.module.ts ***!
  \***************************************************/
/*! exports provided: NgxCanvasWorkerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCanvasWorkerModule", function() { return NgxCanvasWorkerModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _canvas_worker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-worker.component */ "/+lp");




class NgxCanvasWorkerModule {
}
NgxCanvasWorkerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxCanvasWorkerModule });
NgxCanvasWorkerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxCanvasWorkerModule_Factory(t) { return new (t || NgxCanvasWorkerModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxCanvasWorkerModule, { declarations: [_canvas_worker_component__WEBPACK_IMPORTED_MODULE_2__["CanvasWorkerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]], exports: [_canvas_worker_component__WEBPACK_IMPORTED_MODULE_2__["CanvasWorkerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxCanvasWorkerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _canvas_worker_component__WEBPACK_IMPORTED_MODULE_2__["CanvasWorkerComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ], exports: [
                    _canvas_worker_component__WEBPACK_IMPORTED_MODULE_2__["CanvasWorkerComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wSd0":
/*!****************************************!*\
  !*** ./src/services/engine.service.ts ***!
  \****************************************/
/*! exports provided: EngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineService", function() { return EngineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! comlink */ "PRU4");




function createEngineWorker() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const workerProxy = Object(comlink__WEBPACK_IMPORTED_MODULE_2__["wrap"])(new Worker(__webpack__worker__0, { type:undefined, name: 'canvas.worker.js' }));
        return yield new workerProxy();
    });
}
class EngineService {
    init(offscreen) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.engine)
                return;
            this.engine = yield createEngineWorker();
            this.engine.init(Object(comlink__WEBPACK_IMPORTED_MODULE_2__["transfer"])(offscreen, [offscreen]));
        });
    }
    render() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.engine.render();
        });
    }
    setCameraPositionFromSize(width, height) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.engine.setCameraPositionFromSize(width, height);
        });
    }
    initOrbitControls() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.engine.initOrbitControls();
        });
    }
    dispatchControlsEvent(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.engine.dispatchControlsEvent(event);
        });
    }
    dispatchControlsParentEvent(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.engine.dispatchControlsParentEvent(event);
        });
    }
}
EngineService.ɵfac = function EngineService_Factory(t) { return new (t || EngineService)(); };
EngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EngineService, factory: EngineService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EngineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=canvas.worker.js!../workers/engine.worker */ "4U5Y")))

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map