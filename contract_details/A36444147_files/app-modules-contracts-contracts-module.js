(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-contracts-contracts-module"],{

/***/ "EU+Q":
/*!**************************************************************!*\
  !*** ./src/app/app-modules/contracts/contracts.component.ts ***!
  \**************************************************************/
/*! exports provided: ContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsComponent", function() { return ContractsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _theme_layouts_one_column_one_column_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/layouts/one-column/one-column.component */ "7ArV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ContractsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContractsComponent.ɵfac = function ContractsComponent_Factory(t) { return new (t || ContractsComponent)(); };
ContractsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContractsComponent, selectors: [["app-contracts"]], decls: 2, vars: 0, template: function ContractsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-one-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_theme_layouts_one_column_one_column_component__WEBPACK_IMPORTED_MODULE_1__["OneColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contracts',
                template: `
    <app-one-column>
      <router-outlet> </router-outlet>
    </app-one-column>
  `,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "K8OJ":
/*!*********************************************************************************!*\
  !*** ./src/app/app-modules/contracts/contracts-list/contract-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContractListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractListComponent", function() { return ContractListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_AppService_services_contracts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@AppService/services/contracts.service */ "vfH8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function ContractListComponent_tr_23_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const star_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", star_r3 ? "fas fa-star" : "far fa-star");
} }
const _c0 = function (a0) { return [a0]; };
function ContractListComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContractListComponent_tr_23_span_10_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contract_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, contract_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contract_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contract_r1.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contract_r1.trip_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contract_r1.trip_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", contract_r1.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", contract_r1.status === "\u0633\u0627\u0628\u0642\u0629" ? "prev-status" : "current-status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contract_r1.status, " ");
} }
class ContractListComponent {
    constructor(Contracts) {
        this.Contracts = Contracts;
        /** variables **/
        this.contractsList = [
            { id: 1, company_name: "ضيوف الرحمن للحج و العمره", trip_date: "01-5-2018 / 12-5-2023", trip_type: "عمره", stars: [1, 2, 3, 0, 0], status: "سابقة" },
            { id: 2, company_name: "شركة الفريد للساحة الدينيه", trip_date: "12-8-2023 / 22-8-2023", trip_type: "عمره", stars: [1, 2, 3, 4, 0], status: "حالية" },
        ];
        this.totalPages = 0;
        this.itemsPerPage = 0;
    }
    ngOnInit() {
        this.getContractsList();
    }
    /** methods */
    // call contract list service
    getContractsList() {
        this.Contracts.getListContracts().subscribe(res => {
            this.contractsList = res.data.map(contract => {
                return Object.assign(Object.assign({}, contract), { stars: [...Array(5).keys()] });
            });
            this.totalPages = res.meta.total;
            this.itemsPerPage = res.meta.per_page;
        });
    }
}
ContractListComponent.ɵfac = function ContractListComponent_Factory(t) { return new (t || ContractListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_AppService_services_contracts_service__WEBPACK_IMPORTED_MODULE_1__["ContractsService"])); };
ContractListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContractListComponent, selectors: [["app-contracts-list"]], decls: 24, vars: 1, consts: [[1, "contracts-section"], [1, "container", "py-4"], [1, "py-3"], [1, "contracts-table", "mt-5"], [1, "contracts-table-header"], [1, "table", "table-striped"], ["scope", "col"], ["class", "pointer", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "pointer", 3, "routerLink"], ["scope", "row"], ["class", "contract-table-star", 4, "ngFor", "ngForOf"], [1, "contract-table-status", 3, "ngClass"], [1, "contract-table-star"], [3, "ngClass"]], template: function ContractListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0627\u0633\u0645 \u0627\u0644\u0631\u062D\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u062D\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u062A\u0642\u064A\u0645 \u0627\u0644\u0631\u062D\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0627\u0644\u062D\u0627\u0644\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ContractListComponent_tr_23_Template, 14, 10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contractsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".contracts-table-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 8px 8px 0px 0px;\n  border: 1px solid #DDDCDC;\n  background: #F7F6F6;\n}\n\n.contracts-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #707170;\n  color: #FEFEFF;\n  font-weight: 400;\n}\n\n.contracts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  border: 1px solid #DDDCDC;\n}\n\n.contract-table-star[_ngcontent-%COMP%] {\n  margin: 0 2px;\n}\n\n.contract-table-star[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  color: #D4A655;\n}\n\n.contract-table-star[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%] {\n  color: #DDDCDC;\n}\n\n.contract-table-status[_ngcontent-%COMP%] {\n  width: 75px;\n  border-radius: 20px;\n  padding: 4px 16px 4px 16px;\n}\n\n.contract-table-status.prev-status[_ngcontent-%COMP%] {\n  background-color: rgba(108, 108, 103, 0.13);\n  border: 1px solid #C9C9C9CF;\n  color: #6F6D63;\n}\n\n.contract-table-status.current-status[_ngcontent-%COMP%] {\n  color: #15D43F;\n  background: rgba(205, 248, 214, 0.3);\n  border: 1px solid #CDF8D6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbnRyYWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUlGOztBQUZBO0VBQ0UsMkNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBTUYiLCJmaWxlIjoiY29udHJhY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cmFjdHMtdGFibGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjREREQ0RDO1xuICBiYWNrZ3JvdW5kOiAjRjdGNkY2O1xufVxuXG4uY29udHJhY3RzLXRhYmxlIC50YWJsZSB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcxNzA7XG4gIGNvbG9yOiAjRkVGRUZGO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbnRyYWN0cy10YWJsZSB0Ym9keSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNERERDREM7XG59XG5cbi5jb250cmFjdC10YWJsZS1zdGFyIHtcbiAgbWFyZ2luOiAwIDJweDtcbn1cbi5jb250cmFjdC10YWJsZS1zdGFyIC5mYXMge1xuICBjb2xvcjogI0Q0QTY1NTtcbn1cbi5jb250cmFjdC10YWJsZS1zdGFyIC5mYXIge1xuICBjb2xvcjogI0RERENEQztcbn1cblxuLmNvbnRyYWN0LXRhYmxlLXN0YXR1cyB7XG4gIHdpZHRoOiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA0cHggMTZweCA0cHggMTZweDtcbn1cbi5jb250cmFjdC10YWJsZS1zdGF0dXMucHJldi1zdGF0dXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwOCwgMTA4LCAxMDMsIDAuMTMpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzlDOUM5Q0Y7XG4gIGNvbG9yOiAjNkY2RDYzO1xufVxuLmNvbnRyYWN0LXRhYmxlLXN0YXR1cy5jdXJyZW50LXN0YXR1cyB7XG4gIGNvbG9yOiAjMTVENDNGO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwNSwgMjQ4LCAyMTQsIC4zKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NERjhENlxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contracts-list',
                templateUrl: './contract-list.component.html',
                styleUrls: ['./contract-list.component.scss']
            }]
    }], function () { return [{ type: src_app_AppService_services_contracts_service__WEBPACK_IMPORTED_MODULE_1__["ContractsService"] }]; }, null); })();


/***/ }),

/***/ "MSEB":
/*!***********************************************************!*\
  !*** ./src/app/app-modules/contracts/contracts.module.ts ***!
  \***********************************************************/
/*! exports provided: ContractsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsModule", function() { return ContractsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contracts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contracts-routing.module */ "tlPG");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@theme/theme.module */ "vTDv");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@core/core.module */ "V5UK");
/* harmony import */ var _contracts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contracts.component */ "EU+Q");
/* harmony import */ var _contracts_list_contract_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contracts-list/contract-list.component */ "K8OJ");
/* harmony import */ var _contract_details_contract_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contract-details/contract-details.component */ "YTbf");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");










class ContractsModule {
}
ContractsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContractsModule });
ContractsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContractsModule_Factory(t) { return new (t || ContractsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["themeModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _contracts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContractsRoutingModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__["NgxQRCodeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContractsModule, { declarations: [_contracts_component__WEBPACK_IMPORTED_MODULE_5__["ContractsComponent"], _contracts_list_contract_list_component__WEBPACK_IMPORTED_MODULE_6__["ContractListComponent"], _contract_details_contract_details_component__WEBPACK_IMPORTED_MODULE_7__["ContractDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["themeModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _contracts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContractsRoutingModule"],
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__["NgxQRCodeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_contracts_component__WEBPACK_IMPORTED_MODULE_5__["ContractsComponent"], _contracts_list_contract_list_component__WEBPACK_IMPORTED_MODULE_6__["ContractListComponent"], _contract_details_contract_details_component__WEBPACK_IMPORTED_MODULE_7__["ContractDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["themeModule"],
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _contracts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContractsRoutingModule"],
                    _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__["NgxQRCodeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "YTbf":
/*!**************************************************************************************!*\
  !*** ./src/app/app-modules/contracts/contract-details/contract-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ContractDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDetailsComponent", function() { return ContractDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/ar */ "Brhu");
/* harmony import */ var _angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_AppService_services_inquiries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@AppService/services/inquiries.service */ "K9F0");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");










function ContractDetailsComponent_div_0_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0645\u0646 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](6, 2, ctx_r2.PilgrimDetails == null ? null : ctx_r2.PilgrimDetails.issue_date, "dd-MM-yyyy", "", "ar"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0627\u0644\u0649 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](9, 7, ctx_r2.PilgrimDetails == null ? null : ctx_r2.PilgrimDetails.visa_valid_to, "dd-MM-yyyy", "", "ar"), "");
} }
function ContractDetailsComponent_div_0_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 67);
} }
function ContractDetailsComponent_div_0_a_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r4.contractDetails.eup_qr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ContractDetailsComponent_div_0_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0642\u0644 / \u0627\u0644\u0637\u064A\u0631\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0646\u0648\u0639 \u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0642\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/contracts/infrastructure.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r5.contractDetails.transportation_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0646\u0627\u0642\u0644", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.contractDetails.transportation_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r5.contractDetails == null ? null : ctx_r5.contractDetails.transportation_type) ? ctx_r5.contractDetails.transportation_type : "-");
} }
function ContractDetailsComponent_div_0_div_107_div_1_div_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0645\u0627 \u062A\u0645 \u062A\u063A\u064A\u0631\u0647 \u0628\u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 1, segment_r8.modification.new_details.created_at, "dd MMMM hh:mm a", "", "ar"), " ");
} }
function ContractDetailsComponent_div_0_div_107_div_1_div_17_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0645\u0627 \u062A\u0645 \u062A\u063A\u064A\u0631\u0647");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailsComponent_div_0_div_107_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContractDetailsComponent_div_0_div_107_div_1_div_17_span_3_Template, 3, 6, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContractDetailsComponent_div_0_div_107_div_1_div_17_span_4_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0637\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", segment_r8 == null ? null : segment_r8.modification == null ? null : segment_r8.modification.new_details == null ? null : segment_r8.modification.new_details.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(segment_r8 == null ? null : segment_r8.modification == null ? null : segment_r8.modification.new_details.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", segment_r8.modification.new_details == null ? null : segment_r8.modification.new_details.from_port == null ? null : segment_r8.modification.new_details.from_port.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](16, 5, segment_r8.modification.new_details == null ? null : segment_r8.modification.new_details.from_date, "dd MMMM yyyy, hh:mm a", "", "ar"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](17, 10, segment_r8.modification.new_details == null ? null : segment_r8.modification.new_details.end_date, "dd MMMM yyyy, hh:mm a", "", "ar"), " ");
} }
function ContractDetailsComponent_div_0_div_107_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0642\u0644\u0627\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0637\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContractDetailsComponent_div_0_div_107_div_1_div_17_Template, 18, 15, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", segment_r8.segment_type === "departure" ? "assets/images/contracts/departure-icon.svg" : "assets/images/contracts/return-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", segment_r8.trip_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", segment_r8.segment_type === "departure" ? "\u0631\u062D\u0644\u0629 \u0627\u0644\u0645\u063A\u0627\u062F\u0631\u0629" : "\u0631\u062D\u0644\u0629 \u0627\u0644\u0639\u0648\u062F\u0629", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](11, 6, segment_r8 == null ? null : segment_r8.start_date, "dd MMMM yyyy", "", "ar"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](segment_r8 == null ? null : segment_r8.details == null ? null : segment_r8.details.from_port == null ? null : segment_r8.details.from_port.port_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (segment_r8 == null ? null : segment_r8.modification == null ? null : segment_r8.modification.new_details) !== null);
} }
function ContractDetailsComponent_div_0_div_107_div_2_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0639\u062F\u062F \u0627\u0644\u064A\u0627\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", segment_r8.details == null ? null : segment_r8.details.nightsCount, " ");
} }
function ContractDetailsComponent_div_0_div_107_div_2_p_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062A\u0628\u0639\u062F \u0639\u0646 \u0627\u0644\u062D\u0631\u0645 \u0628\u0645\u0633\u0627\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", segment_r8.details == null ? null : segment_r8.details.hotel == null ? null : segment_r8.details.hotel.haram_distance, " \u0645\u062A\u0631 ");
} }
function ContractDetailsComponent_div_0_div_107_div_2_div_35_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0645\u0627 \u062A\u0645 \u062A\u063A\u064A\u0631\u0647 \u0628\u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 1, segment_r8.modification.new_details.created_at, "dd MMMM hh:mm a", "", "ar"), " ");
} }
function ContractDetailsComponent_div_0_div_107_div_2_div_35_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0645\u0627 \u062A\u0645 \u062A\u063A\u064A\u0631\u0647");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailsComponent_div_0_div_107_div_2_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContractDetailsComponent_div_0_div_107_div_2_div_35_span_3_Template, 3, 6, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContractDetailsComponent_div_0_div_107_div_2_div_35_span_4_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0633\u0645 \u0627\u0644\u0641\u0646\u062F\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", segment_r8 == null ? null : segment_r8.modification == null ? null : segment_r8.modification.new_details == null ? null : segment_r8.modification.new_details.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(segment_r8.modification == null ? null : segment_r8.modification.new_details.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](segment_r8.modification.new_details == null ? null : segment_r8.modification.new_details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](segment_r8.modification.new_details == null ? null : segment_r8.modification.new_details.city == null ? null : segment_r8.modification.new_details.city.name);
} }
function ContractDetailsComponent_div_0_div_107_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0641\u0646\u062F\u0642 \u0627\u0644\u0627\u0642\u0627\u0645\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0633\u0645 \u0627\u0644\u0641\u0646\u062F\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0645\u062F\u0647 \u0627\u0644\u0627\u0642\u0627\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ContractDetailsComponent_div_0_div_107_div_2_p_33_Template, 5, 1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ContractDetailsComponent_div_0_div_107_div_2_p_34_Template, 5, 1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ContractDetailsComponent_div_0_div_107_div_2_div_35_Template, 16, 4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](segment_r8.details == null ? null : segment_r8.details.hotel == null ? null : segment_r8.details.hotel.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", segment_r8.details == null ? null : segment_r8.details.hotel == null ? null : segment_r8.details.hotel.city == null ? null : segment_r8.details.hotel.city.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", segment_r8.details == null ? null : segment_r8.details.area_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0645\u0646 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 8, segment_r8 == null ? null : segment_r8.start_date, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0625\u0644\u0649 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 11, segment_r8 == null ? null : segment_r8.end_date, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", segment_r8.details == null ? null : segment_r8.details.nightsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", segment_r8.details == null ? null : segment_r8.details.hotel == null ? null : segment_r8.details.hotel.haram_distance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (segment_r8 == null ? null : segment_r8.modification == null ? null : segment_r8.modification.new_details) !== null);
} }
function ContractDetailsComponent_div_0_div_107_hr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 76);
} }
function ContractDetailsComponent_div_0_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContractDetailsComponent_div_0_div_107_div_1_Template, 18, 11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContractDetailsComponent_div_0_div_107_div_2_Template, 36, 14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContractDetailsComponent_div_0_div_107_hr_3_Template, 1, 0, "hr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", segment_r8.trip_id === "Transportation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", segment_r8.trip_id === "Hotel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.contractDetails.package.segments.length - 1 > i_r9);
} }
function ContractDetailsComponent_div_0_section_108_div_3_ng_container_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailsComponent_div_0_section_108_div_3_ng_container_11_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supervisor_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", supervisor_r30.egypt_phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supervisor_r30.egypt_phone);
} }
function ContractDetailsComponent_div_0_section_108_div_3_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContractDetailsComponent_div_0_section_108_div_3_ng_container_11_span_1_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractDetailsComponent_div_0_section_108_div_3_ng_container_11_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.toggleEG(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContractDetailsComponent_div_0_section_108_div_3_ng_container_11_a_4_Template, 2, 2, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const supervisor_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !supervisor_r30.egypt_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", supervisor_r30.egypt_phone);
} }
function ContractDetailsComponent_div_0_section_108_div_3_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractDetailsComponent_div_0_section_108_div_3_ng_container_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r43.toggleEG(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0627\u0636\u063A\u0637 \u0644\u0639\u0631\u0636 \u0627\u0644\u0631\u0642\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ContractDetailsComponent_div_0_section_108_div_3_ng_container_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailsComponent_div_0_section_108_div_3_ng_container_16_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supervisor_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", supervisor_r30.saudi_phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](supervisor_r30.saudi_phone);
} }
function ContractDetailsComponent_div_0_section_108_div_3_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContractDetailsComponent_div_0_section_108_div_3_ng_container_16_span_1_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractDetailsComponent_div_0_section_108_div_3_ng_container_16_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r49.toggleSA(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContractDetailsComponent_div_0_section_108_div_3_ng_container_16_a_4_Template, 2, 2, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const supervisor_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !supervisor_r30.saudi_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", supervisor_r30.saudi_phone);
} }
function ContractDetailsComponent_div_0_section_108_div_3_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractDetailsComponent_div_0_section_108_div_3_ng_container_17_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r53.toggleSA(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0627\u0636\u063A\u0637 \u0644\u0639\u0631\u0636 \u0627\u0644\u0631\u0642\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ContractDetailsComponent_div_0_section_108_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0641 : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 (\u0645\u0635\u0631) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContractDetailsComponent_div_0_section_108_div_3_ng_container_11_Template, 5, 2, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContractDetailsComponent_div_0_section_108_div_3_ng_container_12_Template, 4, 0, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 (\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContractDetailsComponent_div_0_section_108_div_3_ng_container_16_Template, 5, 2, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContractDetailsComponent_div_0_section_108_div_3_ng_container_17_Template, 4, 0, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supervisor_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (supervisor_r30 == null ? null : supervisor_r30.name) || "\u0627\u0644\u0627\u0633\u0645 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", supervisor_r30.hidden_eg === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", supervisor_r30.hidden_eg === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", supervisor_r30.hidden_sa === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", supervisor_r30.hidden_sa === true);
} }
function ContractDetailsComponent_div_0_section_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0641\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContractDetailsComponent_div_0_section_108_div_3_Template, 18, 5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.contractDetails.supervisors);
} }
function ContractDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " / \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u062A\u0645 \u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0627\u0644\u0639\u0642\u062F \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0645\u0646 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u062A\u0645 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u064A \u0627\u0644\u0639\u0642\u062F \u0645\u0646 \u062E\u0644\u0627\u0644 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u062A\u0645 \u0627\u0635\u062F\u0627\u0631 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0627\u0644\u062E\u0627\u0635 \u0628\u0627\u0644\u0645\u0639\u062A\u0645\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0627\u0644\u0645\u0634\u0641\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u062B\u064A\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ContractDetailsComponent_div_0_div_42_Template, 10, 12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ContractDetailsComponent_div_0_img_44_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "ngx-qrcode", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ContractDetailsComponent_div_0_a_47_Template, 3, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u0628\u064A\u0627\u0646\u0627\u062A \u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0627\u0633\u0645 \u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u0631\u0642\u0645 \u062A\u0631\u062E\u064A\u0635 \u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u0645\u062F\u0629 \u0627\u0644\u062A\u0639\u0627\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0641\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u0631\u0642\u0645 \u062C\u0648\u0627\u0632 \u0627\u0644\u0633\u0641\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u0631\u0642\u0645 \u0627\u0644\u062A\u0623\u0634\u064A\u0631\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u0645\u0633\u0627\u0631 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ContractDetailsComponent_div_0_div_106_Template, 17, 5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, ContractDetailsComponent_div_0_div_107_Template, 4, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, ContractDetailsComponent_div_0_section_108_Template, 4, 1, "section", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "section", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](118, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](121, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648 \u0627\u0644\u0623\u062D\u0643\u0627\u0645 \u0641\u064A \u062D\u0627\u0644\u0647 \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " 1. \u0625\u0634\u0639\u0627\u0631 \u0628\u0627\u0644\u0641\u0633\u062E: \u064A\u062C\u0628 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u0631\u0627\u063A\u0628 \u0641\u064A \u0641\u0633\u062E \u0627\u0644\u0639\u0642\u062F \u0625\u0628\u0644\u0627\u063A \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u064A\u0629 \u0628\u0631\u063A\u0628\u062A\u0647 \u0641\u064A \u0627\u0644\u0641\u0633\u062E \u0648\u0641\u0642\u064B\u0627 \u0644\u0644\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629 \u0644\u0644\u0634\u0631\u0643\u0629. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u0623\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062B\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ContractDetailsComponent_div_0_Template_input_input_142_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.acceptContract = !ctx_r56.acceptContract; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " \u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0639\u0644\u064A \u0627\u0644\u0634\u0631\u0648\u0637 \u0648 \u0627\u0644\u0623\u062D\u0643\u0627\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractDetailsComponent_div_0_Template_button_click_147_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.printContract(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0639\u0642\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.contractDetails.status.received ? "assets/images/contracts/tick-circle-active.svg" : "assets/images/contracts/tick-circle-grey.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.contractDetails.status.received ? "text-grey-900" : "text-grey-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.contractDetails.status.under_revision ? "assets/images/contracts/tick-circle-active.svg" : "assets/images/contracts/tick-circle-grey.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.contractDetails.status.under_revision ? "text-grey-900" : "text-grey-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.contractDetails.status.ministry ? "assets/images/contracts/tick-circle-active.svg" : "assets/images/contracts/tick-circle-grey.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.contractDetails.status.ministry ? "text-grey-900" : "text-grey-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.contractDetails.qr_code != null ? "assets/images/contracts/tick-circle-active.svg" : "assets/images/contracts/tick-circle-grey.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.contractDetails.qr_code != null ? "text-grey-900" : "text-grey-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.contractDetails.qr_code != null ? "text-green-500" : ctx_r0.contractDetails.status.ministry ? "text-green-500" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.contractDetails.qr_code != null ? "assets/images/contracts/check-mark.svg" : ctx_r0.contractDetails.status.ministry ? "assets/images/contracts/check-mark.svg" : "assets/images/contracts/exclamation-mark-danger.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.contractDetails.qr_code != null ? " \u0645\u0648\u062B\u0642 \u0645\u0646 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629" : ctx_r0.contractDetails.status.ministry ? "\u062C\u0627\u0631\u064A \u0627\u0635\u062F\u0627\u0631 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 \u0644\u0644\u0639\u0645\u0631\u0647 " : "\u063A\u064A\u0631 \u0645\u0648\u062B\u0642", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contractDetails.qr_code != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contractDetails.qr_code != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementType", ctx_r0.elementType)("value", ctx_r0.contractDetails.eup_qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contractDetails.eup_qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.contractDetails.company_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.contractDetails.license_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0645\u0646 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](74, 33, ctx_r0.contractDetails.package.departure_date, "dd-MM-yyyy", "", "ar"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0627\u0644\u0649 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](77, 38, ctx_r0.contractDetails.package.return_date, "dd-MM-yyyy", "", "ar"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.contractDetails.arabic_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.contractDetails.passport_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.contractDetails.national_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.contractDetails.visa_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contractDetails.transportation_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.contractDetails.package.segments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contractDetails == null ? null : ctx_r0.contractDetails.supervisors == null ? null : ctx_r0.contractDetails.supervisors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0645\u0646 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](118, 43, ctx_r0.contractDetails.package.departure_date, "dd-MM-yyyy", "", "ar"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0627\u0644\u0649 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](121, 48, ctx_r0.contractDetails.package.return_date, "dd-MM-yyyy", "", "ar"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contractDetails.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contractDetails.arabic_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.acceptContract);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.acceptContract);
} }
function ContractDetailsComponent_div_1_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F 4 \u0623\u064A\u0627\u0645 \u0645\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0635\u062F\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailsComponent_div_1_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0645\u0646 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](6, 2, ctx_r60.PilgrimDetails == null ? null : ctx_r60.PilgrimDetails.issue_date, "dd-MM-yyyy", "", "ar"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0627\u0644\u0649 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](10, 7, ctx_r60.PilgrimDetails == null ? null : ctx_r60.PilgrimDetails.visa_valid_to, "dd-MM-yyyy", "", "ar"), "");
} }
function ContractDetailsComponent_div_1_div_45_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u062A\u0645 \u0627\u0646\u062A\u0647\u0627\u0621 \u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailsComponent_div_1_div_45_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0645\u0641\u0639\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailsComponent_div_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContractDetailsComponent_div_1_div_45_p_4_Template, 4, 0, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContractDetailsComponent_div_1_div_45_p_5_Template, 4, 0, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r61.PilgrimDetails == null ? null : ctx_r61.PilgrimDetails.ShowVisaWaring);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r61.PilgrimDetails == null ? null : ctx_r61.PilgrimDetails.ShowVisaWaring));
} }
function ContractDetailsComponent_div_1_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u062C\u0627\u0631\u064A \u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContractDetailsComponent_div_1_img_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 120);
} }
function ContractDetailsComponent_div_1_ngx_qrcode_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-qrcode", 26);
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementType", ctx_r64.elementType)("value", ctx_r64.contractDetails.eup_qr);
} }
function ContractDetailsComponent_div_1_a_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r65.contractDetails.eup_qr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ContractDetailsComponent_div_1_ng_container_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0628\u0646\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0645\u0628\u0631\u0645 \u0628\u064A\u0646 \u0627\u0644\u0645\u0639\u062A\u0645\u0631 \u0648\u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ContractDetailsComponent_div_1_ng_container_111_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0642\u0627\u0645\u0629 / \u0627\u0644\u0633\u0643\u0646 ( \u0625\u0636\u0627\u0641\u064A ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0633\u0645 \u0627\u0644\u0641\u0646\u062F\u0642 / \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0633\u0643\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0645\u062F\u0647 \u0627\u0644\u0627\u0642\u0627\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r70.contractDetails == null ? null : ctx_r70.contractDetails.program_info == null ? null : ctx_r70.contractDetails.program_info.second_hotel == null ? null : ctx_r70.contractDetails.program_info.second_hotel.name) ? ctx_r70.contractDetails == null ? null : ctx_r70.contractDetails.program_info == null ? null : ctx_r70.contractDetails.program_info.second_hotel == null ? null : ctx_r70.contractDetails.program_info.second_hotel.name : "\u0645\u0643\u0627\u0646 \u0627\u0644\u0644\u0625\u0642\u0627\u0645\u0629 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r70.contractDetails == null ? null : ctx_r70.contractDetails.program_info == null ? null : ctx_r70.contractDetails.program_info.second_hotel == null ? null : ctx_r70.contractDetails.program_info.second_hotel.city) ? ctx_r70.contractDetails == null ? null : ctx_r70.contractDetails.program_info == null ? null : ctx_r70.contractDetails.program_info.second_hotel == null ? null : ctx_r70.contractDetails.program_info.second_hotel.city : "\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641\u0629", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0645\u0646 : ", (ctx_r70.contractDetails == null ? null : ctx_r70.contractDetails.program_info == null ? null : ctx_r70.contractDetails.program_info.second_hotel == null ? null : ctx_r70.contractDetails.program_info.second_hotel.checkin_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 4, ctx_r70.contractDetails == null ? null : ctx_r70.contractDetails.program_info == null ? null : ctx_r70.contractDetails.program_info.second_hotel == null ? null : ctx_r70.contractDetails.program_info.second_hotel.checkin_date, "dd-MM-yyyy") : "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0625\u0644\u0649 : ", (ctx_r70.contractDetails == null ? null : ctx_r70.contractDetails.program_info == null ? null : ctx_r70.contractDetails.program_info.second_hotel == null ? null : ctx_r70.contractDetails.program_info.second_hotel.checkout_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 7, ctx_r70.contractDetails == null ? null : ctx_r70.contractDetails.program_info == null ? null : ctx_r70.contractDetails.program_info.second_hotel == null ? null : ctx_r70.contractDetails.program_info.second_hotel.checkout_date, "dd-MM-yyyy") : "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
} }
function ContractDetailsComponent_div_1_ng_container_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0646\u0627\u0642\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0642\u0644 / \u0627\u0644\u0637\u064A\u0631\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0635\u0644\u0629 \u0627\u0644\u0642\u0631\u0627\u0628\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0642\u0627\u0645\u0629 / \u0627\u0644\u0633\u0643\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0627\u0633\u0645 \u0627\u0644\u0641\u0646\u062F\u0642 / \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0633\u0643\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0645\u062F\u0647 \u0627\u0644\u0627\u0642\u0627\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ContractDetailsComponent_div_1_ng_container_111_ng_container_63_Template, 30, 10, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/contracts/departure-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.transporter_name) ? ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.transporter_name : "\u0627\u0644\u0646\u0627\u0642\u0644 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/contracts/traveler-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.recipient_name) ? ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.recipient_name : "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.kinship) ? ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.kinship : "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.recipient_phone) ? ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.recipient_phone : "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.hotel_name) ? ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.hotel_name : "\u0627\u0644\u0641\u0646\u062F\u0642 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.city) ? ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.city : "\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641\u0629", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0645\u0646 : ", (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.arrival_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 11, ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.arrival_date, "dd-MM-yyyy") : "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0625\u0644\u0649 : ", (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.departure_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](62, 14, ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.departure_date, "dd-MM-yyyy") : "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.second_hotel == null ? null : ctx_r67.contractDetails.program_info.second_hotel.name) || (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.second_hotel == null ? null : ctx_r67.contractDetails.program_info.second_hotel.city) || (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.second_hotel == null ? null : ctx_r67.contractDetails.program_info.second_hotel.checkin_date) || (ctx_r67.contractDetails == null ? null : ctx_r67.contractDetails.program_info == null ? null : ctx_r67.contractDetails.program_info.second_hotel == null ? null : ctx_r67.contractDetails.program_info.second_hotel.checkout_date));
} }
function ContractDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0639\u0627\u0642\u062F\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " / \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u062A\u0645 \u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0627\u0644\u0639\u0642\u062F \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0645\u0646 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u062A\u0645 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u064A \u0627\u0644\u0639\u0642\u062F \u0645\u0646 \u062E\u0644\u0627\u0644 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u062A\u0645 \u0627\u0635\u062F\u0627\u0631 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0627\u0644\u062E\u0627\u0635 \u0628\u0627\u0644\u0645\u0639\u062A\u0645\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0627\u0644\u0645\u0634\u0641\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ContractDetailsComponent_div_1_span_35_Template, 2, 0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u062B\u064A\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ContractDetailsComponent_div_1_div_44_Template, 11, 12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ContractDetailsComponent_div_1_div_45_Template, 6, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ContractDetailsComponent_div_1_div_46_Template, 8, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ContractDetailsComponent_div_1_img_48_Template, 1, 0, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ContractDetailsComponent_div_1_ngx_qrcode_50_Template, 1, 2, "ngx-qrcode", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ContractDetailsComponent_div_1_a_51_Template, 3, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u0628\u064A\u0627\u0646\u0627\u062A \u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u0627\u0633\u0645 \u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0631\u0642\u0645 \u062A\u0631\u062E\u064A\u0635 \u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u0645\u062F\u0629 \u0627\u0644\u062A\u0639\u0627\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0641\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u0631\u0642\u0645 \u062C\u0648\u0627\u0632 \u0627\u0644\u0633\u0641\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u0631\u0642\u0645 \u0627\u0644\u062A\u0623\u0634\u064A\u0631\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u0645\u0633\u0627\u0631 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ContractDetailsComponent_div_1_ng_container_110_Template, 4, 0, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ContractDetailsComponent_div_1_ng_container_111_Template, 64, 17, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "section", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](121, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](124, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648 \u0627\u0644\u0623\u062D\u0643\u0627\u0645 \u0641\u064A \u062D\u0627\u0644\u0647 \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " 1. \u0625\u0634\u0639\u0627\u0631 \u0628\u0627\u0644\u0641\u0633\u062E: \u064A\u062C\u0628 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u0631\u0627\u063A\u0628 \u0641\u064A \u0641\u0633\u062E \u0627\u0644\u0639\u0642\u062F \u0625\u0628\u0644\u0627\u063A \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u064A\u0629 \u0628\u0631\u063A\u0628\u062A\u0647 \u0641\u064A \u0627\u0644\u0641\u0633\u062E \u0648\u0641\u0642\u064B\u0627 \u0644\u0644\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629 \u0644\u0644\u0634\u0631\u0643\u0629. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u0623\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062B\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ContractDetailsComponent_div_1_Template_input_input_145_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.acceptContract = !ctx_r71.acceptContract; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " \u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0639\u0644\u064A \u0627\u0644\u0634\u0631\u0648\u0637 \u0648 \u0627\u0644\u0623\u062D\u0643\u0627\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractDetailsComponent_div_1_Template_button_click_150_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.printContract(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0639\u0642\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/contracts/tick-circle-active.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.contractDetails.eup_qr || !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode ? "assets/images/contracts/tick-circle-active.svg" : "assets/images/contracts/tick-circle-grey.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.contractDetails.eup_qr || !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode ? "text-grey-900" : "text-grey-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.contractDetails.eup_qr || !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode ? "assets/images/contracts/tick-circle-active.svg" : "assets/images/contracts/tick-circle-grey.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.contractDetails.eup_qr || !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode ? "text-grey-900" : "text-grey-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.contractDetails.eup_qr ? "assets/images/contracts/tick-circle-active.svg" : "assets/images/contracts/tick-circle-grey.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.contractDetails.eup_qr ? "text-grey-900" : "text-grey-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contractDetails.eup_qr || !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.contractDetails.eup_qr || !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode ? "text-green-500" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.contractDetails.eup_qr || !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode ? "assets/images/contracts/check-mark.svg" : "assets/images/contracts/exclamation-mark-danger.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contractDetails.eup_qr || !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode ? " \u0645\u0648\u062B\u0642 \u0645\u0646 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629" : "\u063A\u064A\u0631 \u0645\u0648\u062B\u0642", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contractDetails.eup_qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contractDetails.eup_qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contractDetails.eup_qr || !ctx_r1.contractDetails.eup_qr && ctx_r1.contractDetails.qrcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contractDetails.eup_qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contractDetails.eup_qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contractDetails.company_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contractDetails.license_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0645\u0646 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](78, 33, ctx_r1.contractDetails.issue_date, "dd-MM-yyyy", "", "ar"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0627\u0644\u0649 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](81, 38, ctx_r1.contractDetails.visa_valid_to, "dd-MM-yyyy", "", "ar"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contractDetails.arabic_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contractDetails.passport_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contractDetails.national_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contractDetails.visa_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.contractDetails == null ? null : ctx_r1.contractDetails.program_info));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contractDetails == null ? null : ctx_r1.contractDetails.program_info);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0645\u0646 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](121, 43, ctx_r1.contractDetails.issue_date, "dd-MM-yyyy", "", "ar"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0627\u0644\u0649 : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](124, 48, ctx_r1.contractDetails.visa_valid_to, "dd-MM-yyyy", "", "ar"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.contractDetails.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.contractDetails.arabic_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.acceptContract);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.acceptContract);
} }
class ContractDetailsComponent {
    // actual_flight_path!: ActualFlightPath | any;
    constructor(activatedRoute, Inquiries) {
        this.activatedRoute = activatedRoute;
        this.Inquiries = Inquiries;
        this.search_text = '';
        this.hasChange = false;
        this.Today = new Date();
        this.elementType = 'url';
        this.value = 'https://umrah.eg/contracts/contract-details/' +
            this.activatedRoute.snapshot.paramMap.get('id');
        this.contractDetails = null;
        this.ratingStars = [5, 4, 3, 2, 1];
        this.isDepartureMapOpen = false;
        this.isHotelMapOpen = false;
        this.isReturnMapOpen = false;
        this.acceptContract = false;
        this.loading = false;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_ar__WEBPACK_IMPORTED_MODULE_1___default.a);
    }
    hotelCheckModification(contractDetails) {
        contractDetails.package.segments.forEach((segment) => {
            contractDetails.package.modification.forEach((modifi) => {
                var _a, _b, _c, _d, _e, _f, _g;
                if (((_a = modifi === null || modifi === void 0 ? void 0 : modifi.old_details) === null || _a === void 0 ? void 0 : _a.id) == ((_c = (_b = segment === null || segment === void 0 ? void 0 : segment.details) === null || _b === void 0 ? void 0 : _b.hotel) === null || _c === void 0 ? void 0 : _c.id) &&
                    (segment === null || segment === void 0 ? void 0 : segment.trip_id) == 'Hotel') {
                    segment.modification = modifi;
                }
                if (((_e = (_d = modifi === null || modifi === void 0 ? void 0 : modifi.old_details) === null || _d === void 0 ? void 0 : _d.from_port) === null || _e === void 0 ? void 0 : _e.id) == ((_g = (_f = segment === null || segment === void 0 ? void 0 : segment.details) === null || _f === void 0 ? void 0 : _f.from_port) === null || _g === void 0 ? void 0 : _g.id) &&
                    (segment === null || segment === void 0 ? void 0 : segment.trip_id) == 'Transportation') {
                    segment.modification = modifi;
                }
            });
        });
    }
    printContract() {
        window === null || window === void 0 ? void 0 : window.print();
    }
    // select rating
    // handleItinraryRate(event: Event, itinrary: ItinraryItem) {
    //   const element = event.currentTarget as HTMLInputElement;
    //   itinrary.rating = element.value;
    //   if (+element.value > 1) {
    //     itinrary.isOpen = false;
    //     itinrary.compliant = ""
    //     return
    //   }
    //   itinrary.isOpen = true;
    // }
    // compilnats text area changes
    // handleComplaintsChanges(event: Event, itinrary: ItinraryItem) {
    //   const element = event.currentTarget as HTMLInputElement;
    //   itinrary.compliant = element.value;
    // }
    // handleSendComplaints(itinrary: ItinraryItem,) {
    // }
    ngOnInit() {
        // const search_text = this.route.snapshot.paramMap.get('id');
        // const data = { search_text }
        // // call contract service
        // this.contract.getContractDetails(data).subscribe(res => {
        //   this.contractDetails = res?.data;
        //   this.hotelCheckModification(res?.data)
        // });
        this.getInitData();
    }
    getInitData() {
        this.loading = true;
        this.Inquiries.currentPilgrimDetails.subscribe({
            next: (res) => {
                var _a, _b, _c, _d, _e, _f, _g;
                if (res != '') {
                    this.PilgrimDetails = res;
                    this.contractDetails = res;
                    if ((_a = this.contractDetails.supervisors) === null || _a === void 0 ? void 0 : _a.length) {
                        this.contractDetails.supervisors.forEach((s, index) => {
                            this.contractDetails.supervisors[index].hidden_eg = true;
                            this.contractDetails.supervisors[index].hidden_sa = true;
                        });
                    }
                    this.listStarts = Array((_c = (_b = this.PilgrimDetails) === null || _b === void 0 ? void 0 : _b.package) === null || _c === void 0 ? void 0 : _c.stars);
                    let packageStars = ((_e = (_d = this.PilgrimDetails) === null || _d === void 0 ? void 0 : _d.package) === null || _e === void 0 ? void 0 : _e.stars) || 0;
                    this.listEmptyStarts = Array(5 - packageStars);
                    this.segments = (_g = (_f = this.PilgrimDetails) === null || _f === void 0 ? void 0 : _f.package) === null || _g === void 0 ? void 0 : _g.segments;
                    if (!this.PilgrimDetails.is_other_pilgrim) {
                        this.hotelCheckModification(this.contractDetails);
                    }
                    if (this.PilgrimDetails.visa_valid_to != null) {
                        let today = moment__WEBPACK_IMPORTED_MODULE_3__(this.Today).format('YYYY-MM-DD');
                        if (!moment__WEBPACK_IMPORTED_MODULE_3__(today).isAfter(this.PilgrimDetails.visa_valid_to)) {
                            this.PilgrimDetails.ShowVisaWaring = false;
                        }
                        else {
                            this.PilgrimDetails.ShowVisaWaring = true;
                        }
                    }
                    this.loading = false;
                }
                else {
                    this.search_text = this.activatedRoute.snapshot.paramMap.get('id');
                    this.getPilgrimDetails();
                }
            },
            error: () => {
                this.loading = false;
            },
        });
    }
    getPilgrimDetails() {
        this.Inquiries.getPilgrimDetails({
            search_text: this.search_text,
        }).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g;
            this.PilgrimDetails = res.data;
            this.contractDetails = res === null || res === void 0 ? void 0 : res.data;
            if ((_a = this.contractDetails.supervisors) === null || _a === void 0 ? void 0 : _a.length) {
                this.contractDetails.supervisors.forEach((s, index) => {
                    this.contractDetails.supervisors[index].hidden_eg = true;
                    this.contractDetails.supervisors[index].hidden_sa = true;
                });
            }
            this.listStarts = Array((_c = (_b = this.PilgrimDetails) === null || _b === void 0 ? void 0 : _b.package) === null || _c === void 0 ? void 0 : _c.stars);
            let packageStars = ((_e = (_d = this.PilgrimDetails) === null || _d === void 0 ? void 0 : _d.package) === null || _e === void 0 ? void 0 : _e.stars) || 0;
            this.listEmptyStarts = Array(5 - packageStars);
            this.segments = (_g = (_f = this.PilgrimDetails) === null || _f === void 0 ? void 0 : _f.package) === null || _g === void 0 ? void 0 : _g.segments;
            if (!this.PilgrimDetails.is_other_pilgrim) {
                this.hotelCheckModification(res.data);
            }
            if (this.PilgrimDetails.visa_valid_to != null) {
                let today = moment__WEBPACK_IMPORTED_MODULE_3__(this.Today).format('YYYY-MM-DD');
                if (!moment__WEBPACK_IMPORTED_MODULE_3__(today).isAfter(this.PilgrimDetails.visa_valid_to)) {
                    this.PilgrimDetails.ShowVisaWaring = false;
                }
                else {
                    this.PilgrimDetails.ShowVisaWaring = true;
                }
            }
            this.loading = false;
        }, (error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                toast: true,
                position: 'top-right',
                text: error.error.message,
                showConfirmButton: false,
                icon: 'error',
                timer: 3000,
            });
            this.loading = false;
        });
    }
    toggleEG(index) {
        if (this.contractDetails.supervisors[index])
            this.contractDetails.supervisors[index].hidden_eg =
                !this.contractDetails.supervisors[index].hidden_eg;
    }
    toggleSA(index) {
        if (this.contractDetails.supervisors[index])
            this.contractDetails.supervisors[index].hidden_sa =
                !this.contractDetails.supervisors[index].hidden_sa;
    }
}
ContractDetailsComponent.ɵfac = function ContractDetailsComponent_Factory(t) { return new (t || ContractDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_AppService_services_inquiries_service__WEBPACK_IMPORTED_MODULE_6__["InquiriesService"])); };
ContractDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContractDetailsComponent, selectors: [["app-contract-details"]], decls: 2, vars: 2, consts: [["class", "contracts-section", 4, "ngIf"], [1, "contracts-section"], [1, "container", "py-4"], [1, "py-3", "breadcrumb"], [1, "text-base", "pointer"], [1, "contract-details", "mt-5"], [1, "contract-status-container"], [1, "font-weight-bold", "h4"], [1, "contract-status"], [1, "contract-status-item"], [1, "contract-status-item-img"], ["alt", "", "width", "25px", 3, "src"], [3, "ngClass"], ["alt", "unfinished ", "width", "25px", 3, "src"], ["alt", "\u062E\u0637\u0648\u0629 \u0627\u0635\u062F\u0627\u0631 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F", "width", "25px", 3, "src"], [1, "qr-code-container"], [1, "header"], [1, "row", "mt-base-spacing"], [1, "col-md-6", "col-12"], [1, "text-grey-400", "col-3"], [1, "col-9", 3, "ngClass"], ["alt", "", 3, "src"], ["class", "row mt-base-spacing", 4, "ngIf"], [1, "col-md-3"], ["class", "d-block m-auto mt-3", "src", "assets\\Image\\1.png", "style", "width: 200px !important; margin-top: 12px !important", "srcset", "", 4, "ngIf"], [1, "col-md-3", "col-12", "text-center"], ["cssClass", "aclass", 3, "elementType", "value"], ["class", "btn download-btn download-btn-print px-3 mt-2", 3, "href", 4, "ngIf"], [1, "online-contract-container"], [1, "online-contract-details"], [1, "h6", "font-weight-bold", "my-2"], ["src", "assets/images/contracts/company-icon.svg", "alt", ""], [1, "content-details"], [1, "row", "my-2", "align-items-center"], [1, "col-5", "text-grey-400"], [1, "col-7", "font-weight-bold"], [1, "col-7", "font-weight-bold", "test-mo", "d-flex", "justify-content-between"], ["src", "assets/images/contracts/traveler-icon.svg", "alt", ""], [1, "contract-itinrary"], [1, "itinrary-header"], ["class", "itinrary-item", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "online-contract-validation", 4, "ngIf"], [1, "online-contract-validation"], [1, "contract-code-valid"], [1, "text-grey-400", "h6", "mt-base-spacing"], [1, "col-md-3", "col-6"], [1, "contract-terms", "mt-base-spacing"], ["src", "assets/images/contracts/exclamation-mark.svg", "alt", ""], [1, "h6", "my-0", "mx-2"], [1, "contract-signature-container"], [1, "contract-e-signature"], [1, "mt-2", "text-grey-400"], [1, "row", "my-3", "gap-5", "contract-sides", "mx-0"], [1, "col-md-4", "col-12", "d-flex", "justify-content-between"], [1, "text-grey-400"], [1, "col-md-4", "col-12", "d-flex", "justify-content-between", "mt-3", "mt-md-0"], [1, "d-flex", "align-items-center", "user-select-none"], ["type", "checkbox", "name", "accept-contract", "id", "accept-contract", 1, "checkbox", "pointer", 3, "checked", "input"], ["for", "accept-contract", 1, "mx-2", "my-0", "pointer"], [1, "row"], [1, "col-md-4", "col-12"], [1, "btn", "bg-base", "w-100", "py-2", "mt-base-spacing", "mb-2", "print-btn", 3, "disabled", "click"], ["src", "assets/images/contracts/printer-icon.svg", "alt", "\u0635\u0648\u0631\u0629 \u0637\u0627\u0628\u0639\u0629", 1, "mx-2"], [1, "text-grey-400", "col-4"], [1, "col-8"], [1, "mx-3"], ["src", "assets\\Image\\1.png", "srcset", "", 1, "d-block", "m-auto", "mt-3", 2, "width", "200px !important", "margin-top", "12px !important"], [1, "btn", "download-btn", "download-btn-print", "px-3", "mt-2", 3, "href"], ["src", "assets/images/contracts/download-icon.svg", "alt", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "width", "20px", "height", "20px", 1, "mx-2"], [1, "itinrary-item"], ["width", "30", 3, "src", "alt"], [1, "row", "mt-3"], [1, "col-md-8", "col-12"], [1, "col-md-3", "col-4", "text-grey-400"], [1, "col-md-9", "col-8", "text-grey-900"], [1, "bg-grey-50"], ["class", "bg-grey-50", 4, "ngIf"], [3, "src", "alt"], ["class", "changed-itinrary mt-3", 4, "ngIf"], [1, "changed-itinrary", "mt-3"], [1, "text-danger"], ["src", "assets/images/contracts/exclamation-mark-danger.svg", "alt", "\u0645\u0627 \u062A\u0645 \u062A\u063A\u064A\u0631\u0647", "width", "24px", "height", "24px"], [4, "ngIf"], [1, "changed-itinrary-data", "col-md-8", "col-12", "mt-3"], [1, "row", "mt-1"], ["src", "assets/images/contracts/hotel-icon.svg", "alt", "\u0641\u0646\u062F\u0642 \u0627\u0644\u0627\u0642\u0627\u0645\u0629"], [1, "col-5", "text-grey-900"], [1, "mx-2"], ["class", "row", 4, "ngIf"], ["class", "wrapper border border-1 rounded-3 px-4 py-3 mt-3", 4, "ngFor", "ngForOf"], [1, "wrapper", "border", "border-1", "rounded-3", "px-4", "py-3", "mt-3"], [1, "col-lg-5", "col-6"], [1, "my-0"], ["href", "javascript:void(0);", 1, "text-danger", "font-weight-bolder", "d-inline-block", "ml-5", 2, "font-size", "14px", "letter-spacing", "0.5px", 3, "click"], [1, "fa", "fa-eye-slash"], ["style", "font-size: 17px; letter-spacing: 0.5px", "class", "text-base font-weight-bolder text-decoration-underline d-inline-block ml-2", 3, "href", 4, "ngIf"], [1, "text-base", "font-weight-bolder", "text-decoration-underline", "d-inline-block", "ml-2", 2, "font-size", "17px", "letter-spacing", "0.5px", 3, "href"], ["href", "javascript:void(0);", 1, "text-base", "font-weight-bolder", "d-inline-block", "ml-5", 2, "font-size", "14px", "letter-spacing", "0.5px", 3, "click"], [1, "fa", "fa-eye"], ["href", "javascript:void(0);", 1, "text-danger", "font-weight-bolder", "d-inline-block", "ml-3", 2, "font-size", "14px", "letter-spacing", "0.5px", 3, "click"], ["href", "javascript:void(0);", 1, "text-base", "font-weight-bolder", "d-inline-block", "ml-3", 2, "font-size", "14px", "letter-spacing", "0.5px", 3, "click"], ["alt", "\u062A\u0645 \u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0637\u0644\u0628", "width", "25px", 3, "src"], [1, "text-grey-900"], [1, "head"], [1, "header", "d-flex", "justify-content-between", "align-items-center"], ["class", "fs-15", 4, "ngIf"], [1, "col-8", "fw-600", 3, "ngClass"], ["class", "d-block m-auto mt-3", "src", "assets\\Image\\1.png", "style", "width: 200px !important; margin-top: 12px !important", 4, "ngIf"], ["cssClass", "aclass", 3, "elementType", "value", 4, "ngIf"], [1, "fs-15"], ["class", "text-danger font-weight-bold", 4, "ngIf"], ["class", "text-green-500 font-weight-bold", 4, "ngIf"], [1, "text-danger", "font-weight-bold"], [1, "fa", "fa-times-circle"], [1, "mx-1"], [1, "text-green-500", "font-weight-bold"], [1, "fa", "fa-check-circle"], [1, "text-warning", "font-weight-bold"], [1, "fa", "fa-info-circle", "text-warning"], ["src", "assets\\Image\\1.png", 1, "d-block", "m-auto", "mt-3", 2, "width", "200px !important", "margin-top", "12px !important"], [1, "itinrary-item", "d-flex", "justify-content-center", "align-items-center", "p-lg-4", "p-3", 2, "min-height", "130px"], [1, "text-success", "fw-600", "my-0"], [3, "src"], [1, "col-4", "text-grey-400"], [1, "col-8", "text-grey-900"]], template: function ContractDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContractDetailsComponent_div_0_Template, 150, 53, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContractDetailsComponent_div_1_Template, 153, 53, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contractDetails && !ctx.contractDetails.is_other_pilgrim);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contractDetails && ctx.contractDetails.is_other_pilgrim);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QrcodeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["@charset \"UTF-8\";\n.contracts-section[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #050001;\n  padding-bottom: 2rem;\n}\n.contracts-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .contracts-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.contract-status-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.contract-status[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 10px;\n  margin-top: 1rem;\n}\n.contract-status-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0;\n  max-width: 30%;\n  font-size: 1rem !important;\n}\n.contract-status-item-img[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.contract-status-item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  background-color: #f2f2f2;\n}\n.contract-status-item[_ngcontent-%COMP%]:not(:last-child)   .contract-status-item-img[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 1px;\n  width: 85%;\n  background-color: #dddcdc;\n  z-index: 0;\n}\n.qr-code-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dddcdc;\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 1.25rem;\n}\n.qr-code-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #d4a655;\n}\n.qr-code-container[_ngcontent-%COMP%]   .download-btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 2rem;\n  color: #d4a655;\n  border-radius: 8px;\n  border: 1px solid #d4a655;\n  margin-top: 1.25rem;\n  font-weight: 700;\n  font-size: 14px;\n}\n.online-contract-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dddcdc;\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 1.25rem;\n}\n.online-contract-details[_ngcontent-%COMP%] {\n  margin-top: 1.6rem;\n  border-radius: 12px;\n  background: #fff;\n  font-size: 1rem !important;\n}\n.online-contract-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #d4a655;\n}\n.online-contract-details[_ngcontent-%COMP%]   .content-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid #dddcdc;\n  max-height: 100%;\n  min-height: 82%;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-header[_ngcontent-%COMP%] {\n  padding: 1rem 0px;\n  font-size: 1.2rem;\n  font-weight: 600;\n  text-align: center;\n  background-color: #f7f6f6;\n  margin-top: 1.25rem;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .toggle-location-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #d4a655;\n  padding: 0;\n  border: 0 !important;\n  box-shadow: none !important;\n  font-size: 1rem;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-location-map[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n  transition: all 0.35s ease;\n  padding-bottom: 1rem;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-location-map.shown[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  height: 185px;\n  transition: all 0.35s ease;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .changed-itinrary[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: #d42115;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .changed-itinrary[_ngcontent-%COMP%]   .changed-itinrary-data[_ngcontent-%COMP%] {\n  padding: 1rem 1.4rem;\n  background-color: #faf4eb;\n  border-radius: 12px;\n  border: 1px solid #d4a655;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-rating[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  margin-right: 6px;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-left: 2px;\n  margin: 0;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  content: \"\uF005\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n  font-style: normal;\n  color: #dddcdc;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover::before, .contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover    ~ [_ngcontent-%COMP%]::before {\n  color: #d4a655 !important;\n  font-weight: 900 !important;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-rating[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%]::before, .contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-rating[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%]    ~ .checked[_ngcontent-%COMP%]::before {\n  color: #d4a655;\n  font-weight: 900;\n  content: \"\uF005\";\n  font-family: \"Font Awesome 5 Free\";\n  font-style: normal;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-compliant[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0;\n}\n.contract-itinrary[_ngcontent-%COMP%]   .itinrary-item[_ngcontent-%COMP%]   .itinrary-item-compliant[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 135px;\n}\n.itinrary-item-rating[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%]::before, .itinrary-item-rating[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%]    ~ .itinrary-item-rating[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%]::before {\n  color: #d4a655;\n  font-weight: 900;\n  content: \"\uF005\";\n  font-family: \"Font Awesome 5 Free\";\n  font-style: normal;\n}\n.online-contract-validation[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dddcdc;\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 1.25rem;\n}\n.online-contract-validation[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #d4a655;\n}\n.contract-terms[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.contract-signature-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.contract-signature-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  right: 0;\n  border: 1px solid #dddcdc;\n  z-index: 0;\n}\n.contract-signature-container[_ngcontent-%COMP%]   .contract-e-signature[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background-color: #fff;\n  padding-left: 8px;\n}\n.contract-sides[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  border: 1px solid #f7f6f6;\n  background: rgba(247, 246, 246, 0.3);\n}\n.checkbox[_ngcontent-%COMP%] {\n  accent-color: #d4a655;\n}\n.text-base[_ngcontent-%COMP%] {\n  color: #d4a655 !important;\n}\n.text-grey-400[_ngcontent-%COMP%] {\n  color: #707170 !important;\n}\n.text-grey-900[_ngcontent-%COMP%] {\n  color: #050001 !important;\n}\n.text-green-500[_ngcontent-%COMP%] {\n  color: #15d43f;\n}\n.bg-grey-400[_ngcontent-%COMP%] {\n  background-color: #707170 !important;\n}\n.bg-grey-900[_ngcontent-%COMP%] {\n  background-color: #050001 !important;\n}\n.bg-grey-50[_ngcontent-%COMP%] {\n  background-color: #dddcdc !important;\n}\n.bg-base[_ngcontent-%COMP%] {\n  background-color: #d4a655 !important;\n  color: #fff !important;\n}\n.mt-base-spacing[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n@media screen and (max-width: 767px) {\n  .contracts-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .contracts-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n\n  .online-contract-details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n  .online-contract-details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]   .content-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n\n  .contract-status-item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n}\n@media print {\n  body[_ngcontent-%COMP%] {\n    size: a4;\n    background-color: #fff;\n  }\n\n  .contract-details[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n\n  .contract-status-container[_ngcontent-%COMP%], .print-btn[_ngcontent-%COMP%], .download-btn-print[_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .itinrary-item[_ngcontent-%COMP%] {\n    margin: 2rem 0 !important;\n  }\n\n  .online-contract-details[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n\n  .test-mo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.85rem !important;\n  }\n\n  .qr-code-container[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.query-details[_ngcontent-%COMP%] {\n  min-height: 81.2vh;\n}\n.red[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n  color: #dc3545 !important;\n}\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #3caf61 !important;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #d9001d !important;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #356191 !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.border-info[_ngcontent-%COMP%] {\n  border-color: #356191 !important;\n}\n.border-group[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid #dee2e6;\n  border-radius: 4px !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: #656565 !important;\n}\n.border-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 0.5rem;\n  top: -1rem;\n  right: 0.5rem;\n  z-index: 2;\n  background-color: #fff;\n  padding: 0;\n  font-weight: bold;\n}\n.tableSys[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #656565;\n  text-align: right;\n  font-size: 12px;\n  padding: 8px 3px !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #656565;\n  border-color: #656565;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  border: none;\n}\n.h5[_ngcontent-%COMP%] {\n  font-size: 1.25rem !important;\n}\n.mysec[_ngcontent-%COMP%] {\n  padding: 15px;\n  border: 1px solid #e5e5e5;\n  background-color: #ededed;\n  border-radius: 5px;\n}\n.mysec[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #bca556;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n}\n.mysec[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: bold;\n  color: #324356;\n  margin-bottom: 0;\n}\n.mysec[_ngcontent-%COMP%]   .mysec-body[_ngcontent-%COMP%]   .tabular-data[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: 1rem !important;\n}\n.mysec[_ngcontent-%COMP%]   .mysec-body[_ngcontent-%COMP%]   .tabular-data[_ngcontent-%COMP%]   .data-key[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #767676;\n  padding: 8px;\n}\n.mysec[_ngcontent-%COMP%]   .mysec-body[_ngcontent-%COMP%]   .tabular-data[_ngcontent-%COMP%]   .data-value[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-radius: 0;\n  color: #324356;\n  font-weight: bold;\n  text-align: left;\n  padding: 8px;\n}\n.mysec-body[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .col-md-6[_ngcontent-%COMP%]:last-child {\n  padding-right: 30px;\n}\n.mysec-body[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .col-md-6[_ngcontent-%COMP%]:first-child {\n  padding-left: 30px;\n}\n.itinerary-vertical[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.itinerary-vertical[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-bottom: 1.5rem;\n}\n.itinerary-vertical[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .iconePoint[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  margin: 0 auto;\n  border-radius: 50%;\n  border: 1px dashed #b7b7b9;\n  line-height: 3;\n  background: #fff;\n  position: relative;\n  z-index: 2;\n  float: right;\n  margin-left: 15px;\n}\n.itinerary-vertical[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  position: absolute;\n  left: 5px;\n  top: 0.5rem;\n}\n.itinerary-vertical[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  height: 100%;\n  width: 2px;\n  display: block;\n  border: 1px dashed #b7b7b9;\n}\n.itinerary-vertical.initial-itinerary[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: #3caf61 !important;\n}\n.itinerary-vertical.initial-itinerary[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: #d9001d !important;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.fs-14[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.fs-15[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbnRyYWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBUWhCO0VBQ0UsZUFBQTtFQUNBLGNBUlM7RUFTVCxvQkFBQTtBQU5GO0FBUUU7O0VBRUUsZUFBQTtBQU5KO0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFQRjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBUEY7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVBGO0FBVUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBUEY7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBUEo7QUFXQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQXhEUTtFQXlEUixVQUFBO0FBUkY7QUFXQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkE1RGE7QUFvRGY7QUFVRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBUko7QUFXRTtFQUNFLG9CQUFBO0VBQ0EsY0E3RVM7RUE4RVQsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQTFFVztFQTJFWCxnQkFBQTtFQUNBLGVBQUE7QUFUSjtBQWFBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQXJGYTtBQTJFZjtBQWFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFWRjtBQVlFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFWSjtBQWFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVhKO0FBZ0JFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQXhIVztBQTJHZjtBQWdCRTtFQUNFLG1CQTVIVztBQThHZjtBQWdCSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWROO0FBZ0JNO0VBQ0UsaUJBQUE7QUFkUjtBQWtCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBaEpPO0VBaUpQLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQWhCTjtBQW1CSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FBakJOO0FBb0JJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBbEJOO0FBc0JNO0VBQ0UsY0FwS087QUFnSmY7QUF1Qk07RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXJCUjtBQXlCSTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBdkJOO0FBeUJNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUF2QlI7QUEwQk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBeEJSO0FBMEJRO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF4QlY7QUEyQlE7RUFFRSx5QkFBQTtFQUNBLDJCQUFBO0FBMUJWO0FBOEJNOztFQUVFLGNBcE5LO0VBcU5MLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUE1QlI7QUFnQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUE5Qk47QUFnQ007RUFDRSxhQUFBO0FBOUJSO0FBb0NBOztFQUVFLGNBM09XO0VBNE9YLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFqQ0Y7QUFvQ0E7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBalBhO0FBZ05mO0FBbUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFqQ0o7QUFxQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFsQ0Y7QUFxQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUFsQ0Y7QUFvQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQWxDSjtBQXFDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFuQ0o7QUF1Q0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0FBcENGO0FBdUNBO0VBQ0UscUJBclNXO0FBaVFiO0FBdUNBO0VBQ0UseUJBQUE7QUFwQ0Y7QUF1Q0E7RUFDRSx5QkFBQTtBQXBDRjtBQXVDQTtFQUNFLHlCQUFBO0FBcENGO0FBdUNBO0VBQ0UsY0FoVFU7QUE0UVo7QUF1Q0E7RUFDRSxvQ0FBQTtBQXBDRjtBQXVDQTtFQUNFLG9DQUFBO0FBcENGO0FBdUNBO0VBQ0Usb0NBQUE7QUFwQ0Y7QUF1Q0E7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBcENGO0FBdUNBO0VBQ0UsbUJBcFVhO0FBZ1NmO0FBdUNBO0VBRUk7O0lBRUUsMEJBQUE7RUFyQ0o7O0VBeUNBO0lBQ0UsMEJBQUE7RUF0Q0Y7RUF3Q0U7SUFDRSwwQkFBQTtFQXRDSjs7RUEwQ0E7SUFDRSwwQkFBQTtFQXZDRjtBQUNGO0FBMkNBO0VBQ0U7SUFDRSxRQUFBO0lBQ0Esc0JBQUE7RUF6Q0Y7O0VBNENBO0lBQ0Usb0JBQUE7RUF6Q0Y7O0VBNENBOzs7O0lBSUUsYUFBQTtFQXpDRjs7RUE0Q0E7SUFDRSx5QkFBQTtFQXpDRjs7RUE0Q0E7SUFDRSxnQkFBQTtFQXpDRjs7RUE0Q0U7SUFDRSw2QkFBQTtFQXpDSjs7RUE2Q0E7SUFDRSxTQUFBO0VBMUNGO0FBQ0Y7QUE2Q0E7RUFDRSxrQkFBQTtBQTNDRjtBQTZDQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7QUExQ0Y7QUE2Q0E7RUFHRSxjQUFBO0VBQ0EsZ0JBQUE7QUExQ0Y7QUE2Q0E7RUFDRSx5QkFBQTtBQTFDRjtBQTRDQTtFQUNFLHlCQUFBO0FBekNGO0FBMkNBO0VBQ0UseUJBQUE7QUF4Q0Y7QUEwQ0E7RUFDRSx5QkFBQTtBQXZDRjtBQXlDQTtFQUNFLGdDQUFBO0FBdENGO0FBd0NBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBckNGO0FBdUNBO0VBQ0UseUJBQUE7QUFwQ0Y7QUFzQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFuQ0Y7QUFzQ0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQW5DRjtBQXFDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBbENGO0FBb0NBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0FBakNGO0FBbUNBO0VBQ0UsNkJBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBaENGO0FBaUNFO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQS9CSjtBQWdDSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUE5Qk47QUFrQ0k7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0FBaENOO0FBaUNNO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQS9CUjtBQWlDTTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUEvQlI7QUFvQ0E7RUFDRSxtQkFBQTtBQWpDRjtBQW1DQTtFQUNFLGtCQUFBO0FBaENGO0FBbUNBO0VBQ0UsV0FBQTtBQWhDRjtBQWtDSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBaENOO0FBaUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQS9CUjtBQWlDTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQS9CUjtBQWlDTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQS9CUjtBQW1ERTtFQUNFLHlCQUFBO0FBaERKO0FBa0RFO0VBQ0UseUJBQUE7QUFoREo7QUFvREE7RUFDRSxZQUFBO0FBakRGO0FBbURBO0VBQ0UsMEJBQUE7QUFoREY7QUFrREE7RUFDRSwwQkFBQTtBQS9DRiIsImZpbGUiOiJjb250cmFjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2UtY29sb3I6ICNkNGE2NTU7XG4kZ3JleS01MDogI2RkZGNkYztcbiRncmV5LTkwMDogIzA1MDAwMTtcbiRncmV5LTQwMDogIzcwNzE3MDtcbiRkYW5nZXItY29sb3I6ICNkNDIxMTU7XG4kZ3JlZW4tNTAwOiAjMTVkNDNmO1xuJGJhc2Utc3BhY2luZzogMS4yNXJlbTtcblxuLmNvbnRyYWN0cy1zZWN0aW9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogJGdyZXktOTAwO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcblxuICBzcGFuLFxuICBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmNvbnRyYWN0LXN0YXR1cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udHJhY3Qtc3RhdHVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jb250cmFjdC1zdGF0dXMtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAwIDA7XG4gIG1heC13aWR0aDogMzAlO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmNvbnRyYWN0LXN0YXR1cy1pdGVtLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICYgaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICB9XG59XG5cbi5jb250cmFjdC1zdGF0dXMtaXRlbTpub3QoOmxhc3QtY2hpbGQpIC5jb250cmFjdC1zdGF0dXMtaXRlbS1pbWc6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5LTUwO1xuICB6LWluZGV4OiAwO1xufVxuXG4ucXItY29kZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleS01MDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogJGJhc2Utc3BhY2luZztcblxuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYmFzZS1jb2xvcjtcbiAgfVxuXG4gIC5kb3dubG9hZC1idG4ge1xuICAgIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xuICAgIGNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJhc2UtY29sb3I7XG4gICAgbWFyZ2luLXRvcDogJGJhc2Utc3BhY2luZztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4ub25saW5lLWNvbnRyYWN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRncmV5LTUwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAkYmFzZS1zcGFjaW5nO1xufVxuXG4ub25saW5lLWNvbnRyYWN0LWRldGFpbHMge1xuICBtYXJnaW4tdG9wOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuXG4gIC5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRiYXNlLWNvbG9yO1xuICB9XG5cbiAgLmNvbnRlbnQtZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleS01MDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDgyJTtcbiAgfVxufVxuXG4uY29udHJhY3QtaXRpbnJhcnkge1xuICAuaXRpbnJhcnktaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDBweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmNmY2O1xuICAgIG1hcmdpbi10b3A6ICRiYXNlLXNwYWNpbmc7XG4gIH1cblxuICAuaXRpbnJhcnktaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogJGJhc2Utc3BhY2luZztcblxuICAgIC5oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC50b2dnbGUtbG9jYXRpb24tYnRuIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6ICRiYXNlLWNvbG9yO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5pdGlucmFyeS1sb2NhdGlvbi1tYXAge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLml0aW5yYXJ5LWxvY2F0aW9uLW1hcC5zaG93biB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcbiAgICB9XG5cbiAgICAuY2hhbmdlZC1pdGlucmFyeSB7XG4gICAgICAudGV4dC1kYW5nZXIge1xuICAgICAgICBjb2xvcjogJGRhbmdlci1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLmNoYW5nZWQtaXRpbnJhcnktZGF0YSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS40cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNGViO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmFzZS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRpbnJhcnktaXRlbS1yYXRpbmcge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGNvbG9yOiAjZGRkY2RjO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3Zlcjo6YmVmb3JlLFxuICAgICAgICAmOmhvdmVyIH4gOjpiZWZvcmUge1xuICAgICAgICAgIGNvbG9yOiAkYmFzZS1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2hlY2tlZDo6YmVmb3JlLFxuICAgICAgLmNoZWNrZWQgfiAuY2hlY2tlZDo6YmVmb3JlIHtcbiAgICAgICAgY29sb3I6ICRiYXNlLWNvbG9yO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBjb250ZW50OiBcIlxcZjAwNVwiO1xuICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRpbnJhcnktaXRlbS1jb21wbGlhbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgaGVpZ2h0OiAxMzVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLml0aW5yYXJ5LWl0ZW0tcmF0aW5nIC5jaGVja2VkOjpiZWZvcmUsXG4uaXRpbnJhcnktaXRlbS1yYXRpbmcgLmNoZWNrZWQgfiAuaXRpbnJhcnktaXRlbS1yYXRpbmcgLmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29udGVudDogXCJcXGYwMDVcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5vbmxpbmUtY29udHJhY3QtdmFsaWRhdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRncmV5LTUwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAkYmFzZS1zcGFjaW5nO1xuXG4gIC5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRiYXNlLWNvbG9yO1xuICB9XG59XG5cbi5jb250cmFjdC10ZXJtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250cmFjdC1zaWduYXR1cmUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMSwgMjIwLCAyMjAsIDEpO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICAuY29udHJhY3QtZS1zaWduYXR1cmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cbn1cblxuLmNvbnRyYWN0LXNpZGVzIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmNmY2O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ2LCAyNDYsIDAuMyk7XG59XG5cbi5jaGVja2JveCB7XG4gIGFjY2VudC1jb2xvcjogJGJhc2UtY29sb3I7XG59XG5cbi50ZXh0LWJhc2Uge1xuICBjb2xvcjogJGJhc2UtY29sb3IgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZ3JleS00MDAge1xuICBjb2xvcjogJGdyZXktNDAwICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWdyZXktOTAwIHtcbiAgY29sb3I6ICRncmV5LTkwMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1ncmVlbi01MDAge1xuICBjb2xvcjogJGdyZWVuLTUwMDtcbn1cblxuLmJnLWdyZXktNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktNDAwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1ncmV5LTkwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5LTkwMCAhaW1wb3J0YW50O1xufVxuXG4uYmctZ3JleS01MCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5LTUwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1iYXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3IgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLm10LWJhc2Utc3BhY2luZyB7XG4gIG1hcmdpbi10b3A6ICRiYXNlLXNwYWNpbmc7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250cmFjdHMtc2VjdGlvbiB7XG4gICAgc3BhbixcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5vbmxpbmUtY29udHJhY3QtZGV0YWlscyA+ICoge1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuXG4gICAgLmNvbnRlbnQtZGV0YWlscyBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5jb250cmFjdC1zdGF0dXMtaXRlbSA+ICoge1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIGZvciBwcmludCBvbmx5XG5AbWVkaWEgcHJpbnQge1xuICBib2R5IHtcbiAgICBzaXplOiBhNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmNvbnRyYWN0LWRldGFpbHMge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRyYWN0LXN0YXR1cy1jb250YWluZXIsXG4gIC5wcmludC1idG4sXG4gIC5kb3dubG9hZC1idG4tcHJpbnQsXG4gIC5icmVhZGNydW1iIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLml0aW5yYXJ5LWl0ZW0ge1xuICAgIG1hcmdpbjogMnJlbSAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAub25saW5lLWNvbnRyYWN0LWRldGFpbHMgLmNvbC0xMiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuICAudGVzdC1tbyB7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAucXItY29kZS1jb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ucXVlcnktZGV0YWlscyB7XG4gIG1pbi1oZWlnaHQ6IDgxLjJ2aDtcbn1cbi5yZWQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG5cbi50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzNjYWY2MSAhaW1wb3J0YW50O1xufVxuLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6ICNkOTAwMWQgIWltcG9ydGFudDtcbn1cbi50ZXh0LWluZm8ge1xuICBjb2xvcjogIzM1NjE5MSAhaW1wb3J0YW50O1xufVxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xufVxuLmJvcmRlci1pbmZvIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzU2MTkxICFpbXBvcnRhbnQ7XG59XG4uYm9yZGVyLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbn1cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogIzY1NjU2NSAhaW1wb3J0YW50O1xufVxuLmJvcmRlci1ncm91cCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHRvcDogLTFyZW07XG4gIHJpZ2h0OiAwLjVyZW07XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGFibGVTeXMgdGhlYWQgdHIgdGgge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1NjU2NTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogOHB4IDNweCAhaW1wb3J0YW50O1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NTY1NjU7XG4gIGJvcmRlci1jb2xvcjogIzY1NjU2NTtcbn1cbi50YWJsZSB0ZCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG59XG4uaDUge1xuICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm15c2VjIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAuc2VjLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JjYTU1NjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICMzMjQzNTY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuICAubXlzZWMtYm9keSB7XG4gICAgLnRhYnVsYXItZGF0YSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgIC5kYXRhLWtleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogIzc2NzY3NjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuICAgICAgLmRhdGEtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgY29sb3I6ICMzMjQzNTY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubXlzZWMtYm9keSA+IC5yb3cgPiAuY29sLW1kLTY6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4ubXlzZWMtYm9keSA+IC5yb3cgPiAuY29sLW1kLTY6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5pdGluZXJhcnktdmVydGljYWwge1xuICB3aWR0aDogMTAwJTtcbiAgdWwge1xuICAgIGxpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgLmljb25lUG9pbnQge1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2I3YjdiOTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHRvcDogMC41cmVtO1xuICAgICAgfVxuICAgICAgLmxpbmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMS41cmVtO1xuICAgICAgICByaWdodDogMS41cmVtO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2I3YjdiOTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5pdGluZXJhcnktdmVydGljYWwuaW5pdGlhbC1pdGluZXJhcnkge1xuICAvLyAudGV4dC1tdXRlZCxcbiAgLy8gLnRleHQtcHJpbWFyeSxcbiAgLy8gLnRleHQtc3VjY2VzcyxcbiAgLy8gLnRleHQtZGFuZ2VyLFxuICAvLyAudGV4dC1pbmZvIHtcbiAgLy8gICBjb2xvcjogIzVhNWE1YSAhaW1wb3J0YW50O1xuICAvLyB9XG4gIC8vIC5ib3JkZXItbXV0ZWQsXG4gIC8vIC5ib3JkZXItcHJpbWFyeSxcbiAgLy8gLmJvcmRlci1zdWNjZXNzLFxuICAvLyAuYm9yZGVyLWRhbmdlcixcbiAgLy8gLmJvcmRlci1pbmZvIHtcbiAgLy8gICBib3JkZXItY29sb3I6ICM1YTVhNWEgIWltcG9ydGFudDtcbiAgLy8gfVxuICAubm90aWZpY2F0aW9uIC50ZXh0LXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjM2NhZjYxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5vdGlmaWNhdGlvbiAudGV4dC1kYW5nZXIge1xuICAgIGNvbG9yOiAjZDkwMDFkICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmFjdGlvbnMgLmJ0biB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5mcy0xNCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuLmZzLTE1IHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contract-details',
                templateUrl: './contract-details.component.html',
                styleUrls: ['./contract-details.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_AppService_services_inquiries_service__WEBPACK_IMPORTED_MODULE_6__["InquiriesService"] }]; }, null); })();


/***/ }),

/***/ "tlPG":
/*!*******************************************************************!*\
  !*** ./src/app/app-modules/contracts/contracts-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContractsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsRoutingModule", function() { return ContractsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contracts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contracts.component */ "EU+Q");
/* harmony import */ var _contract_details_contract_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contract-details/contract-details.component */ "YTbf");






const routes = [
    {
        path: '',
        component: _contracts_component__WEBPACK_IMPORTED_MODULE_2__["ContractsComponent"],
        children: [
            // {
            //   path: 'list',
            //   component: ContractListComponent
            // },
            {
                path: 'contract-details/:id',
                component: _contract_details_contract_details_component__WEBPACK_IMPORTED_MODULE_3__["ContractDetailsComponent"]
            },
            {
                path: '',
                redirectTo: 'contracts',
                pathMatch: 'full',
            }
        ],
        data: {
            title: 'عقود الكترونية',
            preload: true
        }
    }
];
class ContractsRoutingModule {
}
ContractsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContractsRoutingModule });
ContractsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContractsRoutingModule_Factory(t) { return new (t || ContractsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContractsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vfH8":
/*!***********************************************************!*\
  !*** ./src/app/@AppService/services/contracts.service.ts ***!
  \***********************************************************/
/*! exports provided: ContractsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsService", function() { return ContractsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ContractsService {
    constructor(http) {
        this.http = http;
    }
    getListContracts() {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].citizensApi + '/contracts?' + httpParams);
    }
    getContractDetails(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].citizensApi + '/pilgrims', data);
    }
}
ContractsService.ɵfac = function ContractsService_Factory(t) { return new (t || ContractsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContractsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContractsService, factory: ContractsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=app-modules-contracts-contracts-module.js.map