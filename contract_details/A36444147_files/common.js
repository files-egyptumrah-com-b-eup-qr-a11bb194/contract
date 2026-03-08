(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2/44":
/*!*********************************************************!*\
  !*** ./src/app/@AppService/services/manasek.service.ts ***!
  \*********************************************************/
/*! exports provided: ManasekService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManasekService", function() { return ManasekService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ManasekService {
    constructor(http) {
        this.http = http;
    }
    getListManasek(data) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        Object.keys(data).forEach(function (key) {
            if (key && data[key] != undefined && data[key] != null && data[key] != '') {
                httpParams = httpParams.append(key, data[key]);
            }
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].citizensApi + "/rituals?" + httpParams);
    }
    getManasek(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].citizensApi + '/rituals/' + id);
    }
}
ManasekService.ɵfac = function ManasekService_Factory(t) { return new (t || ManasekService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ManasekService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ManasekService, factory: ManasekService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManasekService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Dp3S":
/*!*******************************************************!*\
  !*** ./src/app/@AppService/services/fatwa.service.ts ***!
  \*******************************************************/
/*! exports provided: FatwaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatwaService", function() { return FatwaService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");






class FatwaService {
    constructor(http) {
        this.http = http;
        this.CitizenFatwaDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentCitizenFatwaDetails = this.CitizenFatwaDetails.asObservable();
    }
    getListFatwas(data) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        Object.keys(data).forEach(function (key) {
            if (key && data[key] != undefined && data[key] != null && data[key] != '') {
                httpParams = httpParams.append(key, data[key]);
            }
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].citizensApi + "/fatwas?" + httpParams);
    }
    getFatwa(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].citizensApi + '/fatwas/' + id);
    }
    setFatwaByCode(CitizenFatwaDetails) {
        this.CitizenFatwaDetails.next(CitizenFatwaDetails);
    }
    getFatwaByCode(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].citizensApi + '/citizen-fatwas/' + id);
    }
    getSubjects() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].citizensApi + '/subjects');
    }
    setFatwaRequest(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].citizensApi + '/citizen-fatwas/ask', data);
    }
}
FatwaService.ɵfac = function FatwaService_Factory(t) { return new (t || FatwaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
FatwaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FatwaService, factory: FatwaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FatwaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "K9F0":
/*!***********************************************************!*\
  !*** ./src/app/@AppService/services/inquiries.service.ts ***!
  \***********************************************************/
/*! exports provided: InquiriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InquiriesService", function() { return InquiriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class InquiriesService {
    constructor(http) {
        this.http = http;
        this.PilgrimDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentPilgrimDetails = this.PilgrimDetails.asObservable();
    }
    setPilgrimDetails(PilgrimDetails) {
        this.PilgrimDetails.next(PilgrimDetails);
    }
    getPilgrimDetails(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].citizensApi + '/pilgrims', data);
    }
}
InquiriesService.ɵfac = function InquiriesService_Factory(t) { return new (t || InquiriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
InquiriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InquiriesService, factory: InquiriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InquiriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Ugbk":
/*!*********************************************************!*\
  !*** ./src/app/@AppService/services/travels.service.ts ***!
  \*********************************************************/
/*! exports provided: TravelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelsService", function() { return TravelsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TravelsService {
    constructor(http) {
        this.http = http;
    }
    getListTravels() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].citizensApi + '/packages/my-travels');
    }
    getMyTravels() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].citizensApi + '/covid');
    }
    getTravelsDetails(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].citizensApi + '/packages/my-travels/' + id);
    }
    ratePilgrim(obj) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].citizensApi + '/pilgrims/rate', obj);
    }
}
TravelsService.ɵfac = function TravelsService_Factory(t) { return new (t || TravelsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TravelsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TravelsService, factory: TravelsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Vgzv":
/*!***************************************************!*\
  !*** ./src/app/app-modules/pilgrim-guide/data.ts ***!
  \***************************************************/
/*! exports provided: guideURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guideURL", function() { return guideURL; });
const guideURL = 'assets/media/pdf/dalil-almo2tmreen-almassryeen.pdf';


/***/ }),

/***/ "myEZ":
/*!******************************************************!*\
  !*** ./src/app/@AppService/services/news.service.ts ***!
  \******************************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class NewsService {
    constructor(http) {
        this.http = http;
    }
    getListNews() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].citizensApi + '/circulars');
    }
    getNew(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].citizensApi + '/circulars/' + id);
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uQZG":
/*!***********************************************************!*\
  !*** ./src/app/@AppService/services/companies.service.ts ***!
  \***********************************************************/
/*! exports provided: CompaniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesService", function() { return CompaniesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class CompaniesService {
    constructor(http) {
        this.http = http;
    }
    // for example
    getListCompanies(data) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        Object.keys(data).forEach(function (key) {
            if (key && data[key] != undefined && data[key] != null && data[key] != '') {
                httpParams = httpParams.append(key, data[key]);
            }
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].citizensApi + "/companies/approved?" + httpParams);
    }
    getApprovedListCompanies(data) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        Object.keys(data).forEach(function (key) {
            if (key && data[key] != undefined && data[key] != null && data[key] != '') {
                httpParams = httpParams.append(key, data[key]);
            }
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].citizensApi + "/companies/saudi-agents/approved?" + httpParams);
    }
    getApprovedAirlinesList(data) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        Object.keys(data).forEach(function (key) {
            if (key && data[key] != undefined && data[key] != null && data[key] != '') {
                httpParams = httpParams.append(key, data[key]);
            }
        });
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].citizensApi + "/companies/transporters/approved?" + httpParams);
    }
    getCities() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].citizensApi + "/geo/cities?country_id=20");
    }
}
CompaniesService.ɵfac = function CompaniesService_Factory(t) { return new (t || CompaniesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CompaniesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompaniesService, factory: CompaniesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompaniesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map