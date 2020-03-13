function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- Navigation -->\n<app-menu></app-menu>\n\n \n\n<!-- Page Content -->\n<div class=\"container\">\n  <router-outlet></router-outlet>  \n <!-- <h1 class=\"mt-4\">Logo Nav by Start Bootstrap</h1>\n  <p>The logo in the navbar is now a default Bootstrap feature in Bootstrap 4! Make sure to set the width and height of the logo within the HTML or with CSS. For best results, use an SVG image as your logo.</p>\n-->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"about\"  style=\"height: 500px;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <h2>About this page</h2>\n          <p class=\"lead\">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>\n          <ul>\n            <li>Clickable nav links that smooth scroll to page sections</li>\n            <li>Responsive behavior when clicking nav links perfect for a one page website</li>\n            <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>          \n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"contact\" >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <h2>Contact us</h2>\n          <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>\n        </div>\n      </div>\n    </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fermo-list/fermo-list.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fermo-list/fermo-list.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFermoListFermoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!--\n\n\thttps://ng-bootstrap.github.io/#/components/table/examples#complete\n\n\thttps://blog.angular-university.io/angular-material-data-table/\n\t\n\thttps://www.positronx.io/angular-material-8-data-table-pagination-sorting-tutorial/\n\n\thttp://michaelbromley.github.io/ngx-pagination/#/advanced\n\n\t\t<table class=\"table table-hover\" id=\"dev-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<th scope=\"col\">Linea</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">Anomalia</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">Durata</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">Tipo guasto</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">Data inizio</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">Data validazione</th>\t\t\t\t\t\t\n                                <th scope=\"col\"></th>\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let f of fermi\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<td>{{f.idLineaNavigation['nome']}}</td>\n\t\t\t\t\t\t\t\t<td>{{f.anomalia}}</td>\n\t\t\t\t\t\t\t\t<td>{{f.durata}}</td>\n\t\t\t\t\t\t\t\t<td>{{f.tipoGuasto}}</td>\n\t\t\t\t\t\t\t\t<td>{{f.dataInizio | date: 'dd/MM/yyyy'}}</td>\n\t\t\t\t\t\t\t\t<td>{{f.dataValidazione | date: 'dd/MM/yyyy'}}</td>\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"View\"><a  [href]=\"'#/fermo-management?action=view&idfermo=' + f.idFermo\"  class=\"fa fa-search\"></a></p></td>\n\t\t\t\t\t\t\t\t<td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><a  [href]=\"'#/fermo-management?action=edit&idfermo=' + f.idFermo\"  class=\"fa fa-pencil\"></a></p></td>\n\t\t\t\t\t\t\t\t<td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><a  [href]=\"'#/fermo-management?action=delete&idfermo=' + f.idFermo\"  class=\"fa fa-trash\"></a></p></td>\n\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\n-->\n\n\n<div class=\"container\">   \n\t<div class=\"row\">\t\t\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"panel panel-primary\" >\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">Storico Fermi</h3>\n\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t<span   title=\"Nuovo fermo\" [routerLink]=\"['../fermo-management']\" data-container=\"body\">\n\t\t\t\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\t\n\n\t\t    \t<div style=\"margin: 8px;\">\n\t\t\t\t\t<label class=\"control\">Filtra\n\t\t\t\t\t\t<input type=\"text\" class=\"input\" placeholder=\"filter\" [(ngModel)]=\"filter\">\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<table class=\"table table-striped table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">Linea</th>\n\t\t\t\t\t\t<th scope=\"col\">Anomalia</th>\n\t\t\t\t\t\t<th scope=\"col\">Durata</th>\n\t\t\t\t\t\t<th scope=\"col\">Tipo guasto</th>\n\t\t\t\t\t\t<th scope=\"col\">Data inizio</th>\n\t\t\t\t\t\t<th scope=\"col\">Data validazione</th>\t\t\t\t\t\t\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\t\t\t\t\n\t\t\t\t\t\t<tr *ngFor=\"let f of fermi | stringFilter: filter: 'anomalia' | paginate: config \">\t\n\t\t\t\t\t\t<!--<td>{{f.idLineaNavigation['nome']}}</td>-->\n\t\t\t\t\t\t<td>{{f.linea}}</td>\n\t\t\t\t\t\t<td>{{f.anomalia}}</td>\n\t\t\t\t\t\t<td>{{f.durata}}</td>\n\t\t\t\t\t\t<td>{{f.tipoGuasto}}</td>\n\t\t\t\t\t\t<td>{{f.dataInizio | date: 'dd/MM/yyyy'}}</td>\n\t\t\t\t\t\t<td>{{f.dataValidazione | date: 'dd/MM/yyyy'}}</td>\t\t\t\t\t\n\n\t\t\t\t\t\t<td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"View\"><a  [href]=\"'#/fermo-management?action=view&idfermo=' + f.idFermo\"  class=\"fa fa-search\"></a></p></td>\n\t\t\t\t\t\t<td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\" *ngIf=\"(!f.closed || !notAdmin)\" ><a  [href]=\"'#/fermo-management?action=edit&idfermo=' + f.idFermo\"  class=\"fa fa-pencil\"></a></p></td>\n\t\t\t\t\t\t<td><p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\" *ngIf=\"!(notAdmin)\"><a  [href]=\"'#/fermo-list?action=delete&idfermo=' + f.idFermo\"  class=\"fa fa-trash\"></a></p></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\t\t\n\t\t\t\t</table>  \n\t\t\t\t<div class=\"text-center\">\t\t\t\t\t\n\t\t\t\t\t<pagination-controls [id]=\"config.id\" class=\"my-pagination\"\n\t\t\t\t\t[maxSize]=\"maxSize\"\n\t\t\t\t\t[directionLinks]=\"directionLinks\"\n\t\t\t\t\t[autoHide]=\"autoHide\"\n\t\t\t\t\t[responsive]=\"responsive\"\n\t\t\t\t\t[previousLabel]=\"labels.previousLabel\"\n\t\t\t\t\t[nextLabel]=\"labels.nextLabel\"\n\t\t\t\t\t[screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n\t\t\t\t\t[screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n\t\t\t\t\t[screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\"\n\t\t\t\t\t(pageChange)=\"onPageChange($event)\"\n\t\t\t\t\t(pageBoundsCorrection)=\"onPageBoundsCorrection($event)\"></pagination-controls>\n\t\t\t\t</div>\t\t\n\t\t\t</div>\n        </div>\n\t</div>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fermo-management/fermo-management.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fermo-management/fermo-management.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFermoManagementFermoManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n          <!--\n          https://www.freakyjolly.com/angular-datepicker-timepicker-using-ng-pick-datetime-tutorial-by-example/#more-2931\n\n          https://unpkg.com/ng-material-datetimepicker@1.17.1/index.html\n          \n          https://daniel-projects.firebaseapp.com/owlng/date-time-picker\n\n          <owl-date-time [(formControlName)]=\"datePicker\" name=\"date\" [(ngModel)]=\"date\" [dataType]=\"'string'\" [type]=\"'calendar'\" [placeHolder]=\"'DD/MM/YYYY'\" [dateFormat]=\"'DD/MM/YYYY'\" showHeader=\"true\" ></owl-date-time>\n\n\n          {idFermo: \"7a3ad222-255e-482c-8b41-0ba6fd407446\", idLinea: \"e309085d-5ba9-447a-b049-914c29072957\", idUtenteSitma: null, idUtentePoste: \"aa3e22fb-3ac2-4e19-a1a3-7841bf09de49\", anomalia: \"crash pc\", …}\nidFermo: \"7a3ad222-255e-482c-8b41-0ba6fd407446\"\nidLinea: \"e309085d-5ba9-447a-b049-914c29072957\"\nidUtenteSitma: null\nidUtentePoste: \"aa3e22fb-3ac2-4e19-a1a3-7841bf09de49\"\nanomalia: \"crash pc\"\ngrado: \"A\"\ndataInizio: \"2020-02-17T00:00:00\"\nturno: \"3\"\ntipoTurno: null\nmodulo: null\nsottoassieme: null\ndataFine: \"2020-02-18T00:00:00\"\nimpattoDegrado: null\nimpactFactor: null\ndurataReale: null\ndurata: 90\nclasseGuasto: null\ntipoGuasto: \"operatore\"\ncausaGuasto: null\nimputabilita: null\nsoluzione: null\ndescrSoluzione: null\ndataValidazione: \"2020-02-18T00:00:00\"\nrefPoste: null\nrefAssistenza: \"stefano cavallotti\"\ndeleted: false\nclosed: false\nidLineaNavigation: null\nidUtentePosteNavigation: null\nidUtenteSitmaNavigation: null\n\n        -->\n\n    <div class=\"container\"  >    \n          \n        <div class=\"row\">           \n            <div style=\"margin-top: 35px;\">\n                <div class=\"panel panel-primary\"  >\n                <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">Nuovo fermo</h3>\n                </div>\n                    <div class=\"panel-body\" style=\"margin-bottom: 20px;\">  \n                        \n                       \n                            <div class=\"tab-pane active\" id=\"test\">\n                                    \n                                <alert></alert>\n\n                                <fieldset [disabled]=\"fieldsetPosteDisabled\">\n                                <div class=\"col-md-12 col-sm-12 postecontainer\">         \n                                        <div style=\"padding: 5px;margin:5px;\">\n                                                <div class = \"form-group col-md-3 col-sm-3\">\n                                               <!-- <input type=\"hidden\" id=\"idFermo\"  [(ngModel)]=\"fermo.idFermo\"> --> \n                                                <label for=\"linea\">Linea</label>\t \n                                                <!--<span class=\"help-block\">Selezionare la parte che ha generato il problema</span>  -->         \n                                                <select class=\"form-control input-sm\" id=\"linea\" [(ngModel)]=\"fermo.linea\" (ngModelChange)=\"FilterModulo(fermo.linea)\">\n                                                <option>-- Linea --</option>\n                                                <option *ngFor=\"let l of lineas\" [ngValue]=\"l.id\">{{l.name}}</option>  \n                                                </select>\n                                                </div>\n                            \n                                                <div class = \"form-group col-md-3 col-sm-3\">\n                                                <label for=\"anomalia\">Anomalia</label>\t \n                                                <!--<span class=\"help-block\">Selezionare il tipo di anomalia</span>  -->         \n                                                <select class=\"form-control input-sm\" id=\"anomalia\" [(ngModel)]=\"fermo.anomalia\">\n                                                <option>-- Anomalia --</option>\n                                                <option *ngFor=\"let a of anomalias\" [ngValue]=\"a.id\">{{a.name}}</option>                                              \n                                                </select>\n                                                </div>\n                            \n                                                <div class = \"form-group col-md-3 col-sm-3\">\n                                                <label for=\"grado\">Grado</label>\t                    \n                                                <select class=\"form-control input-sm\" id=\"grado\" [(ngModel)]=\"fermo.grado\" (ngModelChange)=\"SetImpactForm(fermo.grado)\">\n                                                <option>-- Grado --</option>\n                                                <option *ngFor=\"let g of grados\" [ngValue]=\"g.id\">{{g.name}}</option>     \n                                                </select>\n                                                </div>\n                            \n                                                <div class=\"form-group col-md-3 col-sm-3\">\n                                                <label for=\"name\">Data inizio\t</label> <br>\n                                                <input [owlDateTime]=\"dataInizio\" [owlDateTimeTrigger]=\"dataInizio\" placeholder=\"Data inzio\"\n                                                 class=\"form-control input-sm\" [(ngModel)]=\"fermo.dataInizio\" (ngModelChange)=\"SetImpactForm(fermo.grado)\">\n                                                <owl-date-time #dataInizio ></owl-date-time>                                  \n                                                </div>\n                            \n                                                <div class = \"form-group col-md-3 col-sm-3\">\n                                                <label for=\"turno\">Turno</label>\t                    \n                                                <select class=\"form-control input-sm\" id=\"turno\" [(ngModel)]=\"fermo.turno\">\n                                                <option>-- Turno --</option>\n                                                <option *ngFor=\"let t of turnos\" [ngValue]=\"t.id\">{{t.name}}</option>     \n                                                </select>\n                                                </div>\n                            \n                                                <div class = \"form-group col-md-3 col-sm-3\">\n                                                <label for=\"tipoturno\">Tipo turno</label>\t                    \n                                                <select class=\"form-control input-sm\" id=\"tipoturno\" [(ngModel)]=\"fermo.tipoTurno\">\n                                                <option>-- Tipo turno --</option>\n                                                <option *ngFor=\"let t of tipoTurnos\" [ngValue]=\"t.id\">{{t.name}}</option>                                                 \n                                                </select>\n                                                </div>\n                            \n                                                <div class = \"form-group col-md-3 col-sm-3\">\n                                                <label for=\"operatore\">Operatore</label>\t                    \n                                                <select class=\"form-control input-sm\" id=\"operatore\" [(ngModel)]=\"fermo.idUtentePoste\">\n                                                <option>-- Operatore --</option>                                               \n                                                <option *ngFor=\"let u of utentiPoste\" [ngValue]=\"u.idUtente\">{{u.cognome}} {{u.nome}}</option>            \n                                                </select>\n                                                </div>\n\n                                                <div class=\"form-group col-md-3 col-sm-3\">\n                                                    <label for=\"impattodegrado\">Impatto degrado</label>\n                                                    <input type=\"text\" class=\"form-control input-sm\" id=\"impattodegrado\" [attr.disabled]=\"disabled ? '' : null\" placeholder=\"\" \n                                                    [(ngModel)]=\"fermo.impattoDegrado\" (ngModelChange)=\"setDurataForImpactFactor()\">\n                                                </div> \n                                            </div>                    \n                                </div>\n                                </fieldset>\n\n                                <fieldset [disabled]=\"fieldsetSitmaDisabled\">\n                                <div class=\"col-md-12 col-sm-12 sitmacontainer\">         \n                                    <div style=\"padding: 5px;margin:5px;\">\n                                        <div class=\"form-group  col-md-3 col-sm-3\" >\n                                            <label for=\"tecnico\">Tecnico</label>\t                    \n                                            <select class=\"form-control input-sm\" id=\"tecnico\" [(ngModel)]=\"fermo.idUtenteSitma\">\n                                            <option>-- Tecnico --</option>\n                                            <option *ngFor=\"let u of utentiSitma\" [ngValue]=\"u.idUtente\">{{u.cognome}} {{u.nome}}</option>        \n                                            </select>\n                                        </div>\n                                        <div class=\"form-group col-md-3 col-sm-3\" >\n                                            <label for=\"modulo\">Modulo</label>\t                    \n                                            <select class=\"form-control input-sm\" id=\"modulo\" [(ngModel)]=\"fermo.modulo\" (ngModelChange)=\"FilterSottoassieme(fermo.modulo)\">\n                                            <option>-- Modulo --</option>\n                                            <option *ngFor=\"let m of modulosFiltered\" [ngValue]=\"m.id\">{{m.name}}</option>        \n                                            </select>\n                                        </div>\n                                        <div class=\"form-group  col-md-3 col-sm-3\" >\n                                            <label for=\"sottoassieme\">Sottoassieme</label>\t                    \n                                            <select class=\"form-control input-sm\" id=\"sottoassieme\" [(ngModel)]=\"fermo.sottoassieme\">\n                                            <option>-- Sottoassieme --</option>\n                                            <option *ngFor=\"let s of sottoassiemesFiltered\" [ngValue]=\"s.id\">{{s.name}}</option>                              \n                                            </select>\n                                        </div>\n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"name\">Data fine</label> <br>\n                                            <input [owlDateTime]=\"dataFine\" [owlDateTimeTrigger]=\"dataFine\" placeholder=\"Data fine\" \n                                            class=\"form-control input-sm\" [(ngModel)]=\"fermo.dataFine\" (ngModelChange)=\"SetImpactForm(fermo.grado)\">\n                                            <owl-date-time #dataFine></owl-date-time>\n                                        </div>  \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"classeguasto\">Classe guasto</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" id=\"classeguasto\" placeholder=\"\" [(ngModel)]=\"fermo.classeGuasto\">\n                                        </div>   \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"tipoguasto\">Tipo guasto</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" id=\"tipoguasto\" placeholder=\"\" [(ngModel)]=\"fermo.tipoGuasto\">\n                                        </div>   \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"causaguasto\">Causa guasto</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" id=\"causaguasto\" placeholder=\"\" [(ngModel)]=\"fermo.causaGuasto\">\n                                        </div>  \n                                        <div class=\"form-group  col-md-3 col-sm-3\" >\n                                            <label for=\"imputabilita\">Imputabilita</label>\t                    \n                                            <select class=\"form-control input-sm\" id=\"imputabilita\" [(ngModel)]=\"fermo.imputabilita\">\n                                            <option>-- Imputabilita --</option>\n                                            <option *ngFor=\"let i of imputabilitas\" [ngValue]=\"i.id\">{{i.name}}</option>           \n                                            </select>\n                                        </div>\n                                        <div class=\"form-group  col-md-3 col-sm-3\" >\n                                            <label for=\"soluzione\">Soluzione</label>\t                    \n                                            <select class=\"form-control input-sm\" id=\"soluzione\"[(ngModel)]=\"fermo.soluzione\">\n                                            <option>-- Soluzione --</option>\n                                            <option *ngFor=\"let s of soluziones\" [ngValue]=\"s.id\">{{s.name}}</option>                                                 \n                                            </select>\n                                        </div>  \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"descrsoluzione\">Descr soluzione</label>                                     \n                                            <textarea class=\"form-control input-sm\" id=\"descrsoluzione\" rows=\"2\" [(ngModel)]=\"fermo.descrSoluzione\"></textarea>\n                                        </div>                             \n                                    </div>                                   \n                                  </div>\n                                </fieldset>\n\n                                <fieldset [attr.disabled]=\"disabled ? '' : null\">\n                                <div class=\"col-md-12 col-sm-12 autocompletecontainerinside\">   \n                                    <div style=\"padding: 5px;margin:5px;\">                                           \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"impactfactor\">Impact factor</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" readonly=\"true\" id=\"impactfactor\" placeholder=\"\" [(ngModel)]=\"fermo.impactFactor\">\n                                        </div>   \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"duratareale\">Durata reale</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" readonly=\"true\" id=\"duratareale\" placeholder=\"\" [(ngModel)]=\"fermo.durataReale\">\n                                        </div>   \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"durata\">Durata</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" readonly=\"true\" id=\"durata\" placeholder=\"\" [(ngModel)]=\"fermo.durata\">\n                                        </div>          \n                                    </div>                                                                       \n                                </div>     \n                                </fieldset>                               \n                                <!--\n                                <div class=\"col-md-12 col-sm-12 autocompletecontainer\">         \n                                    <div style=\"padding: 5px;margin:5px;\">\n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"impactfactor\">Impact factor</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" id=\"impactfactor\" placeholder=\"\" [(ngModel)]=\"fermo.impactFactor\">\n                                        </div>   \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"duratareale\">Durata reale</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" id=\"duratareale\" placeholder=\"\" [(ngModel)]=\"fermo.durataReale\">\n                                        </div>   \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"durata\">Durata</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" id=\"durata\" placeholder=\"\" [(ngModel)]=\"fermo.durata\">\n                                        </div>     \n                                    </div>\n                                </div>-->\n                                \n                              \n\n                                <fieldset [disabled]=\"fieldsetPosteDisabled\">\n                                <div class=\"col-md-12 col-sm-12 postecontainer\">         \n                                    <div style=\"padding: 5px;margin:5px;\">\n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"name\">Data Validazione</label> <br>\n                                            <input [owlDateTime]=\"dataValidazione\" [owlDateTimeTrigger]=\"dataValidazione\" \n                                            placeholder=\"Data validazione\" class=\"form-control input-sm\" [(ngModel)]=\"fermo.dataValidazione\">\n                                            <owl-date-time #dataValidazione></owl-date-time>\n                                        </div>   \n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"refposte\">Ref Poste</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" id=\"refposte\" placeholder=\"\" [(ngModel)]=\"fermo.refPoste\">\n                                        </div>     \n                                    </div>\n                                </div>        \n                                </fieldset>\n                                \n                                <fieldset [disabled]=\"fieldsetSitmaDisabled\">\n                                <div class=\"col-md-12 col-sm-12 sitmacontainer\">         \n                                    <div style=\"padding: 5px;margin:5px;\">\n                                        <div class=\"form-group col-md-3 col-sm-3\">\n                                            <label for=\"refassistenza\">Ref Assistenza</label>\n                                            <input type=\"text\" class=\"form-control input-sm\" id=\"refassistenza\" placeholder=\"\" [(ngModel)]=\"fermo.refAssistenza\">\n                                        </div>                                       \n                                    </div>\n                                </div>\n                                </fieldset>\n                        </div>   \n\n                        <fieldset [disabled]=\"fieldsetDisabled\">\n                        <div class=\"col-md-12 col-sm-12 centrabottone\" >\n                            <input type=\"button\" class=\"btn btn-primary\" (click)=\"onSave($event)\" value=\"Salva\"/>                     \n                        </div>        \n                        </fieldset>                            \n\n                    </div>         \n                </div>   \n            </div>   \n    \n        </div>\n    </div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!-- Footer -->\n  <div class=\"navbar fixed-bottom bg-dark\">\n    <div class=\"container\">\n        <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2019</p>\n      </div>\n  </div>\n\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <!-- Header - set the background image for the header in the line below -->\n  <header class=\"py-5 bg-image-full\" style=\"background-image: url('../assets/images/1.png'); background-repeat: no-repeat;  background-size: 1200px 150px;\">\n   \n  </header>\n  <!-- Content section -->\n  <section class=\"py-5\" >\n    <div class=\"container\">\n      <h1 style=\"color:red ; font-weight: bold;\">Easy Sort by Sitma</h1>\n      <h2>Gestione fermi e anomalie</h2>\n      <p class=\"lead\">Sistema per la registrazione dei tempi di guasto (maggiori di 2 ore)</p>\n    </div>\n  </section>\n\n  <!-- Image Section - set the background image for the header in the line below -->\n  <section class=\"py-5 bg-image-full\" style=\"background-image: url('../assets/images/6.png'); background-repeat: no-repeat;  background-size: 1200px 500px;\">\n    <!-- Put anything you want here! There is just a spacer below for demo purposes! -->\n    <div style=\"height: 400px;\"></div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"login\" >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n\n        <div class=\"col-md-6 offset-md-3 mt-5\">\n            <!--<div class=\"alert alert-info\">\n                Username: test<br />\n                Password: test\n            </div>-->\n            <div class=\"card\">\n                <h4 class=\"card-header\">Login</h4>\n                <div class=\"card-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"username\">Username</label>\n                            <input type=\"text\" id=\"username\"  #usernameInput placeholder=\"Username\"class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\">Password</label>\n                            <input type=\"password\" id=\"password\"  #passwordInput placeholder=\"Password\"class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            </div>\n                        </div>                      \n                        <button (click)=\"doLogin(usernameInput.value, passwordInput.value)\"  class=\"btn btn-primary centrabottone\" >Login</button>\n                        <div class=\"alert alert-danger mt-3 mb-0\" *ngIf=\"error\">\n                         {{errorMsg}}                       \n                        </div>\n                      </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark static-top\">\n<div class=\"container\">    \n  <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"../assets/images/sitma.png\" height=\"42\" alt=\"\">\n      </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\".\">Home\n              <span class=\"sr-only\">(current)</span>\n            </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"(isLoggedIn | async)\">\n        <a class=\"nav-link\" href=\"#/fermo-list\">Fermi</a>\n      </li>        \n      <li class=\"nav-item\" *ngIf=\"!(isLoggedIn | async)\">\n        <a class=\"nav-link\" href=\"#/login\" *ngIf=\"!(isLoggedIn | async)\">Login</a>\n      </li>   \n      <li *ngIf=\"(isLoggedIn | async)\" (click)=\"onLogout()\">\n        <a class=\"nav-link\" (click)=\"onLogout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</div>\n</nav>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/assets/_alert/alert.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/assets/_alert/alert.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAssets_alertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}}\">\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n    <span [innerHTML]=\"alert.message\"></span>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_fermo_management_fermo_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/fermo-management/fermo-management.component */
    "./src/app/components/fermo-management/fermo-management.component.ts");
    /* harmony import */


    var _components_fermo_list_fermo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/fermo-list/fermo-list.component */
    "./src/app/components/fermo-list/fermo-list.component.ts");

    var routes = [{
      path: "",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "about",
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }, {
      path: "contact",
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }, {
      path: "login",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: "fermo-management",
      component: _components_fermo_management_fermo_management_component__WEBPACK_IMPORTED_MODULE_7__["FermoManagementComponent"]
    }, {
      path: "fermo-list",
      component: _components_fermo_list_fermo_list_component__WEBPACK_IMPORTED_MODULE_8__["FermoListComponent"]
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'EasySortGestioneFermi';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_fermo_management_fermo_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/fermo-management/fermo-management.component */
    "./src/app/components/fermo-management/fermo-management.component.ts");
    /* harmony import */


    var _components_fermo_list_fermo_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/fermo-list/fermo-list.component */
    "./src/app/components/fermo-list/fermo-list.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _string_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./string-filter-pipe */
    "./src/app/string-filter-pipe.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/picker.js");
    /* harmony import */


    var src_assets_alert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/assets/_alert */
    "./src/assets/_alert/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // <-- import the module
    //aggiungo le rotte

    /*
    const routes = [
      {path: "", component: HomeComponent},
      {path: "home", component: HomeComponent},
      {path: "about", component: AboutComponent},
      {path: "contact", component: ContactComponent},
      {path: "login", component:LoginComponent},
    ]
    */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_fermo_management_fermo_management_component__WEBPACK_IMPORTED_MODULE_13__["FermoManagementComponent"], _components_fermo_list_fermo_list_component__WEBPACK_IMPORTED_MODULE_14__["FermoListComponent"], _string_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["StringFilterPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], //RouterModule.forRoot(routes, {useHash:true}),   
      _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__["OwlNativeDateTimeModule"], src_assets_alert__WEBPACK_IMPORTED_MODULE_19__["AlertModule"]],
      providers: [{
        provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__["OWL_DATE_TIME_LOCALE"],
        useValue: 'it'
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/contact/contact.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/components/contact/contact.component.css")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/fermo-list/fermo-list.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/fermo-list/fermo-list.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFermoListFermoListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n    background: red;\r\n  }\r\n  \r\n.table-hover thead tr:hover th, .table-hover tbody tr:hover td {\r\n    background-color: #ffcccb;\r\n}\r\n  \r\n.fa-pencil {\r\ncolor: black\r\n}\r\n  \r\n.fa-trash {\r\ncolor: black\r\n}\r\n  \r\n.fa-search {\r\ncolor: black\r\n}\r\n  \r\n.row{\r\n    margin-top:40px;\r\n    padding: 0 10px;\r\n}\r\n  \r\n.clickable{\r\n    cursor: pointer;   \r\n}\r\n  \r\n.panel-heading div {\r\n    margin-top: -18px;\r\n    font-size: 15px;\r\n}\r\n  \r\n.panel-heading div span{\r\n    margin-left:5px;\r\n}\r\n  \r\n.panel-body{\r\n    display: none;\r\n}\r\n  \r\n.panel{\r\n    margin-bottom:20px;   \r\n    background-color:#fff;\r\n    border:1px solid transparent;\r\n    border-radius:4px;\r\n    box-shadow:0 1px 1px rgba(0,0,0,.05)\r\n}\r\n  \r\n.panel-body{\r\n    padding:15px\r\n}\r\n  \r\n.panel-heading{\r\n    padding:10px 15px;\r\n    border-bottom:1px solid transparent;\r\n    border-top-left-radius:3px;\r\n    border-top-right-radius:3px\r\n}\r\n  \r\n.panel-heading>.dropdown .dropdown-toggle{\r\n    color:inherit\r\n}\r\n  \r\n.panel-title{\r\n    margin-top:0;\r\n    margin-bottom:0;\r\n    font-size:16px;\r\n    color:inherit\r\n}\r\n  \r\n.panel-title>a{\r\n    color:inherit\r\n}\r\n  \r\n.panel-footer{\r\n    padding:10px 15px;\r\n    background-color:#f5f5f5;\r\n    border-top:1px solid #ddd;\r\n    border-bottom-right-radius:3px;\r\n    border-bottom-left-radius:3px\r\n}\r\n  \r\n.panel>.list-group,.panel>.panel-collapse>.list-group{\r\n    margin-bottom:0\r\n}\r\n  \r\n.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{\r\n    border-width:1px 0;\r\n    border-radius:0\r\n}\r\n  \r\n.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{\r\n    border-top:0;\r\n    border-top-left-radius:3px;\r\n    border-top-right-radius:3px\r\n}\r\n  \r\n.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{\r\n    border-bottom:0;\r\n    border-bottom-right-radius:3px;\r\n    border-bottom-left-radius:3px\r\n}\r\n  \r\n.panel-heading+.list-group .list-group-item:first-child{\r\n    border-top-width:0\r\n}\r\n  \r\n.list-group+.panel-footer{\r\n    border-top-width:0\r\n}\r\n  \r\n.panel>.table,.panel>.table-responsive>.table,.panel>.panel-collapse>.table{\r\n    margin-bottom:0\r\n}\r\n  \r\n.panel>.table caption,.panel>.table-responsive>.table caption,.panel>.panel-collapse>.table caption{\r\n    padding-right:15px;\r\n    padding-left:15px\r\n}\r\n  \r\n.panel>.table:first-child,.panel>.table-responsive:first-child>.table:first-child{\r\n    border-top-left-radius:3px;\r\n    border-top-right-radius:3px\r\n}\r\n  \r\n.panel>.table:first-child>thead:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child{\r\n    border-top-left-radius:3px;\r\n    border-top-right-radius:3px\r\n}\r\n  \r\n.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child{\r\n    border-top-left-radius:3px\r\n}\r\n  \r\n.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child{\r\n    border-top-right-radius:3px\r\n}\r\n  \r\n.panel>.table:last-child,.panel>.table-responsive:last-child>.table:last-child{\r\n    border-bottom-right-radius:3px;\r\n    border-bottom-left-radius:3px\r\n}\r\n  \r\n.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child{\r\n    border-bottom-right-radius:3px;\r\n    border-bottom-left-radius:3px\r\n}\r\n  \r\n.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child{\r\n    border-bottom-left-radius:3px\r\n}\r\n  \r\n.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child{\r\n    border-bottom-right-radius:3px\r\n}\r\n  \r\n.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{\r\n    border-top:1px solid #ddd\r\n}\r\n  \r\n.panel>.table>tbody:first-child>tr:first-child th,.panel>.table>tbody:first-child>tr:first-child td{\r\n    border-top:0\r\n}\r\n  \r\n.panel>.table-bordered,.panel>.table-responsive>.table-bordered{\r\n    border:0\r\n}\r\n  \r\n.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{\r\n    border-left:0\r\n}\r\n  \r\n.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{\r\n    border-right:0\r\n}\r\n  \r\n.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th{\r\n    border-bottom:0\r\n}\r\n  \r\n.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{\r\n    border-bottom:0\r\n}\r\n  \r\n.panel>.table-responsive{\r\n    margin-bottom:0;\r\n    border:0\r\n}\r\n  \r\n.panel-group{\r\n    margin-bottom:20px\r\n}\r\n  \r\n.panel-group .panel{\r\n    margin-bottom:0;\r\n    border-radius:4px\r\n}\r\n  \r\n.panel-group .panel+.panel{\r\n    margin-top:5px\r\n}\r\n  \r\n.panel-group .panel-heading{\r\n    border-bottom:0\r\n}\r\n  \r\n.panel-group .panel-heading+.panel-collapse>.panel-body,.panel-group .panel-heading+.panel-collapse>.list-group{\r\n    border-top:1px solid #ddd\r\n}\r\n  \r\n.panel-group .panel-footer{\r\n    border-top:0\r\n}\r\n  \r\n.panel-group .panel-footer+.panel-collapse .panel-body{\r\n    border-bottom:1px solid #ddd\r\n}\r\n  \r\n.panel-default{\r\n    border-color:#ddd\r\n}\r\n  \r\n.panel-default>.panel-heading{\r\n    color:#333;\r\n    background-color:#f5f5f5;\r\n    border-color:#ddd\r\n}\r\n  \r\n.panel-default>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#ddd\r\n}\r\n  \r\n.panel-default>.panel-heading .badge{\r\n    color:#f5f5f5;\r\n    background-color:#333\r\n}\r\n  \r\n.panel-default>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#ddd\r\n}\r\n  \r\n.panel-primary{\r\n    border-color:#dd061c\r\n}\r\n  \r\n.panel-primary>.panel-heading{\r\n    color:#fff;\r\n    background-color:#dd061c;\r\n    border-color:#dd061c\r\n}\r\n  \r\n.panel-primary>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#dd061c\r\n}\r\n  \r\n.panel-primary>.panel-heading .badge{\r\n    color:#dd061c;\r\n    background-color:#fff\r\n}\r\n  \r\n.panel-primary>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#dd061c\r\n}\r\n  \r\n.panel-success{\r\n    border-color:#d6e9c6\r\n}\r\n  \r\n.panel-success>.panel-heading{\r\n    color:#3c763d;\r\n    background-color:#dff0d8;\r\n    border-color:#d6e9c6\r\n}\r\n  \r\n.panel-success>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#d6e9c6\r\n}\r\n  \r\n.panel-success>.panel-heading .badge{\r\n    color:#dff0d8;\r\n    background-color:#3c763d\r\n}\r\n  \r\n.panel-success>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#d6e9c6\r\n}\r\n  \r\n.panel-info{\r\n    border-color:#bce8f1\r\n}\r\n  \r\n.panel-info>.panel-heading{\r\n    color:#31708f;\r\n    background-color:#d9edf7;\r\n    border-color:#bce8f1\r\n}\r\n  \r\n.panel-info>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#bce8f1\r\n}\r\n  \r\n.panel-info>.panel-heading .badge{\r\n    color:#d9edf7;\r\n    background-color:#31708f\r\n}\r\n  \r\n.panel-info>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#bce8f1\r\n}\r\n  \r\n.panel-warning{\r\n    border-color:#faebcc\r\n}\r\n  \r\n.panel-warning>.panel-heading{\r\n    color:#8a6d3b;\r\n    background-color:#fcf8e3;\r\n    border-color:#faebcc\r\n}\r\n  \r\n.panel-warning>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#faebcc\r\n}\r\n  \r\n.panel-warning>.panel-heading .badge{\r\n    color:#fcf8e3;\r\n    background-color:#8a6d3b\r\n}\r\n  \r\n.panel-warning>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#faebcc\r\n}\r\n  \r\n.panel-danger{\r\n    border-color:#ebccd1\r\n}\r\n  \r\n.panel-danger>.panel-heading{\r\n    color:#a94442;\r\n    background-color:#f2dede;\r\n    border-color:#ebccd1\r\n}\r\n  \r\n.panel-danger>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#ebccd1\r\n}\r\n  \r\n.panel-danger>.panel-heading .badge{\r\n    color:#f2dede;\r\n    background-color:#a94442\r\n}\r\n  \r\n.panel-danger>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#ebccd1\r\n}\r\n  \r\n.form-group{\r\n    margin-bottom:15px\r\n}\r\n  \r\n.input-sm,.form-group-sm .form-control{\r\n    height:30px;\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\n  \r\nselect.input-sm,select.form-group-sm .form-control{\r\n    height:30px;\r\n    line-height:30px\r\n}\r\n  \r\ntextarea.input-sm,textarea.form-group-sm .form-control,select[multiple].input-sm,select[multiple].form-group-sm .form-control{\r\n    height:auto\r\n}\r\n  \r\n.input-lg,.form-group-lg .form-control{\r\n    height:46px;\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    line-height:1.33;\r\n    border-radius:6px\r\n}\r\n  \r\nselect.input-lg,select.form-group-lg .form-control{\r\n    height:46px;\r\n    line-height:46px\r\n}\r\n  \r\ntextarea.input-lg,textarea.form-group-lg .form-control,select[multiple].input-lg,select[multiple].form-group-lg .form-control{\r\n    height:auto\r\n}\r\n  \r\n.has-feedback{\r\n    position:relative\r\n}\r\n  \r\n.has-feedback .form-control{\r\n    padding-right:42.5px\r\n}\r\n  \r\n.form-inline .form-group{\r\n    display:inline-block;\r\n    margin-bottom:0;\r\n    vertical-align:middle\r\n}\r\n  \r\n.form-inline .form-control{\r\n    display:inline-block;\r\n    width:auto;\r\n    vertical-align:middle\r\n}\r\n  \r\n.form-inline .form-control-static{\r\n    display:inline-block\r\n}\r\n  \r\n.form-inline .input-group{\r\n    display:inline-table;\r\n    vertical-align:middle\r\n}\r\n  \r\n.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{\r\n    width:auto\r\n}\r\n  \r\n.form-inline .input-group>.form-control{\r\n    width:100%\r\n}\r\n  \r\n.form-inline .control-label{\r\n    margin-bottom:0;\r\n    vertical-align:middle\r\n}\r\n  \r\n.form-inline .radio,.form-inline .checkbox{\r\n    display:inline-block;\r\n    margin-top:0;\r\n    margin-bottom:0;\r\n    vertical-align:middle\r\n}\r\n  \r\n.form-inline .radio label,.form-inline .checkbox label{\r\n    padding-left:0\r\n}\r\n  \r\n.form-inline .radio input[type=radio],.form-inline .checkbox input[type=checkbox]{\r\n    position:relative;\r\n    margin-left:0\r\n}\r\n  \r\n.form-inline .has-feedback .form-control-feedback{\r\n    top:0\r\n}\r\n  \r\n.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{\r\npadding-top:7px;\r\nmargin-top:0;\r\nmargin-bottom:0\r\n}\r\n  \r\n.form-horizontal .radio,.form-horizontal .checkbox{\r\nmin-height:27px\r\n}\r\n  \r\n.form-horizontal .form-group{\r\nmargin-right:-15px;\r\nmargin-left:-15px\r\n}\r\n  \r\n.help-block{\r\n    display:block;\r\n    margin-top:5px;\r\n    margin-bottom:10px;\r\n    color:#737373\r\n}\r\n  \r\n.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{\r\n    color:#a94442\r\n}\r\n  \r\n.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{\r\n    color:#3c763d\r\n}\r\n  \r\n.row{\r\n    margin-right:-15px;\r\n    margin-left:-15px\r\n}\r\n  \r\n.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{\r\n    position:relative;\r\n    min-height:1px;\r\n    padding-right:15px;\r\n    padding-left:15px\r\n}\r\n  \r\n.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{\r\n    float:left\r\n}\r\n  \r\n.col-xs-12{\r\n    width:100%\r\n}\r\n  \r\n.col-xs-11{\r\n    width:91.66666667%\r\n}\r\n  \r\n.col-xs-10{\r\n    width:83.33333333%\r\n}\r\n  \r\n.col-xs-9{\r\n    width:75%\r\n}\r\n  \r\n.col-xs-8{\r\n    width:66.66666667%\r\n}\r\n  \r\n.col-xs-7{\r\n    width:58.33333333%\r\n}\r\n  \r\n.col-xs-6{\r\n    width:50%\r\n}\r\n  \r\n.col-xs-5{\r\n    width:41.66666667%\r\n}\r\n  \r\n.col-xs-4{\r\n    width:33.33333333%\r\n}\r\n  \r\n.col-xs-3{\r\n    width:25%\r\n}\r\n  \r\n.col-xs-2{\r\n    width:16.66666667%\r\n}\r\n  \r\n.col-xs-1{\r\n    width:8.33333333%\r\n}\r\n  \r\n.col-xs-pull-12{\r\n    right:100%\r\n}\r\n  \r\n.col-xs-pull-11{\r\n    right:91.66666667%\r\n}\r\n  \r\n.col-xs-pull-10{\r\n    right:83.33333333%\r\n}\r\n  \r\n.col-xs-pull-9{\r\n    right:75%\r\n}\r\n  \r\n.col-xs-pull-8{\r\n    right:66.66666667%\r\n}\r\n  \r\n.col-xs-pull-7{\r\n    right:58.33333333%\r\n}\r\n  \r\n.col-xs-pull-6{\r\n    right:50%\r\n}\r\n  \r\n.col-xs-pull-5{\r\n    right:41.66666667%\r\n}\r\n  \r\n.col-xs-pull-4{\r\n    right:33.33333333%\r\n}\r\n  \r\n.col-xs-pull-3{\r\n    right:25%\r\n}\r\n  \r\n.col-xs-pull-2{\r\n    right:16.66666667%\r\n}\r\n  \r\n.col-xs-pull-1{\r\n    right:8.33333333%\r\n}\r\n  \r\n.col-xs-pull-0{\r\n    right:auto\r\n}\r\n  \r\n.col-xs-push-12{\r\n    left:100%\r\n}\r\n  \r\n.col-xs-push-11{\r\n    left:91.66666667%\r\n}\r\n  \r\n.col-xs-push-10{\r\n    left:83.33333333%\r\n}\r\n  \r\n.col-xs-push-9{\r\n    left:75%\r\n}\r\n  \r\n.col-xs-push-8{\r\n    left:66.66666667%\r\n}\r\n  \r\n.col-xs-push-7{\r\n    left:58.33333333%\r\n}\r\n  \r\n.col-xs-push-6{\r\n    left:50%\r\n}\r\n  \r\n.col-xs-push-5{\r\n    left:41.66666667%\r\n}\r\n  \r\n.col-xs-push-4{\r\n    left:33.33333333%\r\n}\r\n  \r\n.col-xs-push-3{\r\n    left:25%\r\n}\r\n  \r\n.col-xs-push-2{\r\n    left:16.66666667%\r\n}\r\n  \r\n.col-xs-push-1{\r\n    left:8.33333333%\r\n}\r\n  \r\n.col-xs-push-0{\r\n    left:auto\r\n}\r\n  \r\n.col-xs-offset-12{\r\n    margin-left:100%\r\n}\r\n  \r\n.col-xs-offset-11{\r\n    margin-left:91.66666667%\r\n}\r\n  \r\n.col-xs-offset-10{\r\n    margin-left:83.33333333%\r\n}\r\n  \r\n.col-xs-offset-9{\r\n    margin-left:75%\r\n}\r\n  \r\n.col-xs-offset-8{\r\n    margin-left:66.66666667%\r\n}\r\n  \r\n.col-xs-offset-7{\r\n    margin-left:58.33333333%\r\n}\r\n  \r\n.col-xs-offset-6{\r\n    margin-left:50%\r\n}\r\n  \r\n.col-xs-offset-5{\r\n    margin-left:41.66666667%\r\n}\r\n  \r\n.col-xs-offset-4{\r\n    margin-left:33.33333333%\r\n}\r\n  \r\n.col-xs-offset-3{\r\n    margin-left:25%\r\n}\r\n  \r\n.col-xs-offset-2{\r\n    margin-left:16.66666667%\r\n}\r\n  \r\n.col-xs-offset-1{\r\n    margin-left:8.33333333%\r\n}\r\n  \r\n.col-xs-offset-0{\r\n    margin-left:0\r\n}\r\n  \r\n@media (min-width:768px){\r\n    .col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{\r\n        float:left\r\n    }\r\n    .col-sm-12{\r\n        width:100%\r\n    }\r\n    .col-sm-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-sm-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-sm-9{\r\n        width:75%\r\n    }\r\n    .col-sm-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-sm-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-sm-6{\r\n        width:50%\r\n    }\r\n    .col-sm-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-sm-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-sm-3{\r\n        width:25%\r\n    }\r\n    .col-sm-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-sm-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-sm-pull-12{\r\n        right:100%\r\n    }\r\n    .col-sm-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-sm-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-sm-pull-9{\r\n        right:75%\r\n    }\r\n    .col-sm-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-sm-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-sm-pull-6{\r\n        right:50%\r\n    }\r\n    .col-sm-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-sm-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-sm-pull-3{\r\n        right:25%\r\n    }\r\n    .col-sm-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-sm-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-sm-pull-0{\r\n        right:auto\r\n    }\r\n    .col-sm-push-12{\r\n        left:100%\r\n    }\r\n    .col-sm-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-sm-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-sm-push-9{\r\n        left:75%\r\n    }\r\n    .col-sm-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-sm-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-sm-push-6{\r\n        left:50%\r\n    }\r\n    .col-sm-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-sm-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-sm-push-3{\r\n        left:25%\r\n    }\r\n    .col-sm-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-sm-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-sm-push-0{\r\n        left:auto\r\n    }\r\n    .col-sm-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-sm-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-sm-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-sm-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-sm-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-sm-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-sm-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-sm-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-sm-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-sm-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-sm-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-sm-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-sm-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n  \r\n@media (min-width:992px){\r\n    .col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{\r\n        float:left\r\n    }\r\n    .col-md-12{\r\n        width:100%\r\n    }\r\n    .col-md-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-md-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-md-9{\r\n        width:75%\r\n    }\r\n    .col-md-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-md-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-md-6{\r\n        width:50%\r\n    }\r\n    .col-md-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-md-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-md-3{\r\n        width:25%\r\n    }\r\n    .col-md-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-md-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-md-pull-12{\r\n        right:100%\r\n    }\r\n    .col-md-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-md-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-md-pull-9{\r\n        right:75%\r\n    }\r\n    .col-md-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-md-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-md-pull-6{\r\n        right:50%\r\n    }\r\n    .col-md-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-md-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-md-pull-3{\r\n        right:25%\r\n    }\r\n    .col-md-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-md-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-md-pull-0{\r\n        right:auto\r\n    }\r\n    .col-md-push-12{\r\n        left:100%\r\n    }\r\n    .col-md-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-md-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-md-push-9{\r\n        left:75%\r\n    }\r\n    .col-md-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-md-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-md-push-6{\r\n        left:50%\r\n    }\r\n    .col-md-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-md-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-md-push-3{\r\n        left:25%\r\n    }\r\n    .col-md-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-md-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-md-push-0{\r\n        left:auto\r\n    }\r\n    .col-md-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-md-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-md-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-md-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-md-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-md-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-md-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-md-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-md-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-md-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-md-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-md-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-md-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n  \r\n@media (min-width:1200px){\r\n    .col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{\r\n        float:left\r\n    }\r\n    .col-lg-12{\r\n        width:100%\r\n    }\r\n    .col-lg-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-lg-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-lg-9{\r\n        width:75%\r\n    }\r\n    .col-lg-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-lg-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-lg-6{\r\n        width:50%\r\n    }\r\n    .col-lg-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-lg-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-lg-3{\r\n        width:25%\r\n    }\r\n    .col-lg-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-lg-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-lg-pull-12{\r\n        right:100%\r\n    }\r\n    .col-lg-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-lg-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-lg-pull-9{\r\n        right:75%\r\n    }\r\n    .col-lg-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-lg-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-lg-pull-6{\r\n        right:50%\r\n    }\r\n    .col-lg-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-lg-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-lg-pull-3{\r\n        right:25%\r\n    }\r\n    .col-lg-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-lg-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-lg-pull-0{\r\n        right:auto\r\n    }\r\n    .col-lg-push-12{\r\n        left:100%\r\n    }\r\n    .col-lg-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-lg-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-lg-push-9{\r\n        left:75%\r\n    }\r\n    .col-lg-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-lg-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-lg-push-6{\r\n        left:50%\r\n    }\r\n    .col-lg-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-lg-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-lg-push-3{\r\n        left:25%\r\n    }\r\n    .col-lg-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-lg-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-lg-push-0{\r\n        left:auto\r\n    }\r\n    .col-lg-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-lg-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-lg-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-lg-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-lg-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-lg-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-lg-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-lg-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-lg-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-lg-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-lg-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-lg-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-lg-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n  \r\n.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{\r\n    position:relative;\r\n    min-height:1px;\r\n    padding-right:15px;\r\n    padding-left:15px\r\n}\r\n  \r\n.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{\r\n    float:left\r\n}\r\n  \r\n.col-xs-12{\r\n    width:100%\r\n}\r\n  \r\n.col-xs-11{\r\n    width:91.66666667%\r\n}\r\n  \r\n.col-xs-10{\r\n    width:83.33333333%\r\n}\r\n  \r\n.col-xs-9{\r\n    width:75%\r\n}\r\n  \r\n.col-xs-8{\r\n    width:66.66666667%\r\n}\r\n  \r\n.col-xs-7{\r\n    width:58.33333333%\r\n}\r\n  \r\n.col-xs-6{\r\n    width:50%\r\n}\r\n  \r\n.col-xs-5{\r\n    width:41.66666667%\r\n}\r\n  \r\n.col-xs-4{\r\n    width:33.33333333%\r\n}\r\n  \r\n.col-xs-3{\r\n    width:25%\r\n}\r\n  \r\n.col-xs-2{\r\n    width:16.66666667%\r\n}\r\n  \r\n.col-xs-1{\r\n    width:8.33333333%\r\n}\r\n  \r\n.col-xs-pull-12{\r\n    right:100%\r\n}\r\n  \r\n.col-xs-pull-11{\r\n    right:91.66666667%\r\n}\r\n  \r\n.col-xs-pull-10{\r\n    right:83.33333333%\r\n}\r\n  \r\n.col-xs-pull-9{\r\n    right:75%\r\n}\r\n  \r\n.col-xs-pull-8{\r\n    right:66.66666667%\r\n}\r\n  \r\n.col-xs-pull-7{\r\n    right:58.33333333%\r\n}\r\n  \r\n.col-xs-pull-6{\r\n    right:50%\r\n}\r\n  \r\n.col-xs-pull-5{\r\n    right:41.66666667%\r\n}\r\n  \r\n.col-xs-pull-4{\r\n    right:33.33333333%\r\n}\r\n  \r\n.col-xs-pull-3{\r\n    right:25%\r\n}\r\n  \r\n.col-xs-pull-2{\r\n    right:16.66666667%\r\n}\r\n  \r\n.col-xs-pull-1{\r\n    right:8.33333333%\r\n}\r\n  \r\n.col-xs-pull-0{\r\n    right:auto\r\n}\r\n  \r\n.col-xs-push-12{\r\n    left:100%\r\n}\r\n  \r\n.col-xs-push-11{\r\n    left:91.66666667%\r\n}\r\n  \r\n.col-xs-push-10{\r\n    left:83.33333333%\r\n}\r\n  \r\n.col-xs-push-9{\r\n    left:75%\r\n}\r\n  \r\n.col-xs-push-8{\r\n    left:66.66666667%\r\n}\r\n  \r\n.col-xs-push-7{\r\n    left:58.33333333%\r\n}\r\n  \r\n.col-xs-push-6{\r\n    left:50%\r\n}\r\n  \r\n.col-xs-push-5{\r\n    left:41.66666667%\r\n}\r\n  \r\n.col-xs-push-4{\r\n    left:33.33333333%\r\n}\r\n  \r\n.col-xs-push-3{\r\n    left:25%\r\n}\r\n  \r\n.col-xs-push-2{\r\n    left:16.66666667%\r\n}\r\n  \r\n.col-xs-push-1{\r\n    left:8.33333333%\r\n}\r\n  \r\n.col-xs-push-0{\r\n    left:auto\r\n}\r\n  \r\n.col-xs-offset-12{\r\n    margin-left:100%\r\n}\r\n  \r\n.col-xs-offset-11{\r\n    margin-left:91.66666667%\r\n}\r\n  \r\n.col-xs-offset-10{\r\n    margin-left:83.33333333%\r\n}\r\n  \r\n.col-xs-offset-9{\r\n    margin-left:75%\r\n}\r\n  \r\n.col-xs-offset-8{\r\n    margin-left:66.66666667%\r\n}\r\n  \r\n.col-xs-offset-7{\r\n    margin-left:58.33333333%\r\n}\r\n  \r\n.col-xs-offset-6{\r\n    margin-left:50%\r\n}\r\n  \r\n.col-xs-offset-5{\r\n    margin-left:41.66666667%\r\n}\r\n  \r\n.col-xs-offset-4{\r\n    margin-left:33.33333333%\r\n}\r\n  \r\n.col-xs-offset-3{\r\n    margin-left:25%\r\n}\r\n  \r\n.col-xs-offset-2{\r\n    margin-left:16.66666667%\r\n}\r\n  \r\n.col-xs-offset-1{\r\n    margin-left:8.33333333%\r\n}\r\n  \r\n.col-xs-offset-0{\r\n    margin-left:0\r\n}\r\n  \r\n@media (min-width:768px){\r\n    .col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{\r\n        float:left\r\n    }\r\n    .col-sm-12{\r\n        width:100%\r\n    }\r\n    .col-sm-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-sm-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-sm-9{\r\n        width:75%\r\n    }\r\n    .col-sm-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-sm-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-sm-6{\r\n        width:50%\r\n    }\r\n    .col-sm-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-sm-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-sm-3{\r\n        width:25%\r\n    }\r\n    .col-sm-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-sm-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-sm-pull-12{\r\n        right:100%\r\n    }\r\n    .col-sm-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-sm-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-sm-pull-9{\r\n        right:75%\r\n    }\r\n    .col-sm-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-sm-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-sm-pull-6{\r\n        right:50%\r\n    }\r\n    .col-sm-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-sm-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-sm-pull-3{\r\n        right:25%\r\n    }\r\n    .col-sm-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-sm-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-sm-pull-0{\r\n        right:auto\r\n    }\r\n    .col-sm-push-12{\r\n        left:100%\r\n    }\r\n    .col-sm-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-sm-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-sm-push-9{\r\n        left:75%\r\n    }\r\n    .col-sm-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-sm-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-sm-push-6{\r\n        left:50%\r\n    }\r\n    .col-sm-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-sm-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-sm-push-3{\r\n        left:25%\r\n    }\r\n    .col-sm-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-sm-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-sm-push-0{\r\n        left:auto\r\n    }\r\n    .col-sm-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-sm-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-sm-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-sm-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-sm-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-sm-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-sm-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-sm-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-sm-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-sm-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-sm-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-sm-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-sm-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n  \r\n@media (min-width:992px){\r\n    .col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{\r\n        float:left\r\n    }\r\n    .col-md-12{\r\n        width:100%\r\n    }\r\n    .col-md-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-md-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-md-9{\r\n        width:75%\r\n    }\r\n    .col-md-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-md-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-md-6{\r\n        width:50%\r\n    }\r\n    .col-md-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-md-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-md-3{\r\n        width:25%\r\n    }\r\n    .col-md-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-md-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-md-pull-12{\r\n        right:100%\r\n    }\r\n    .col-md-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-md-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-md-pull-9{\r\n        right:75%\r\n    }\r\n    .col-md-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-md-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-md-pull-6{\r\n        right:50%\r\n    }\r\n    .col-md-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-md-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-md-pull-3{\r\n        right:25%\r\n    }\r\n    .col-md-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-md-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-md-pull-0{\r\n        right:auto\r\n    }\r\n    .col-md-push-12{\r\n        left:100%\r\n    }\r\n    .col-md-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-md-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-md-push-9{\r\n        left:75%\r\n    }\r\n    .col-md-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-md-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-md-push-6{\r\n        left:50%\r\n    }\r\n    .col-md-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-md-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-md-push-3{\r\n        left:25%\r\n    }\r\n    .col-md-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-md-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-md-push-0{\r\n        left:auto\r\n    }\r\n    .col-md-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-md-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-md-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-md-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-md-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-md-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-md-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-md-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-md-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-md-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-md-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-md-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-md-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n  \r\n@media (min-width:1200px){\r\n    .col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{\r\n        float:left\r\n    }\r\n    .col-lg-12{\r\n        width:100%\r\n    }\r\n    .col-lg-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-lg-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-lg-9{\r\n        width:75%\r\n    }\r\n    .col-lg-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-lg-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-lg-6{\r\n        width:50%\r\n    }\r\n    .col-lg-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-lg-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-lg-3{\r\n        width:25%\r\n    }\r\n    .col-lg-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-lg-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-lg-pull-12{\r\n        right:100%\r\n    }\r\n    .col-lg-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-lg-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-lg-pull-9{\r\n        right:75%\r\n    }\r\n    .col-lg-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-lg-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-lg-pull-6{\r\n        right:50%\r\n    }\r\n    .col-lg-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-lg-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-lg-pull-3{\r\n        right:25%\r\n    }\r\n    .col-lg-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-lg-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-lg-pull-0{\r\n        right:auto\r\n    }\r\n    .col-lg-push-12{\r\n        left:100%\r\n    }\r\n    .col-lg-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-lg-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-lg-push-9{\r\n        left:75%\r\n    }\r\n    .col-lg-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-lg-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-lg-push-6{\r\n        left:50%\r\n    }\r\n    .col-lg-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-lg-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-lg-push-3{\r\n        left:25%\r\n    }\r\n    .col-lg-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-lg-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-lg-push-0{\r\n        left:auto\r\n    }\r\n    .col-lg-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-lg-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-lg-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-lg-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-lg-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-lg-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-lg-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-lg-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-lg-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-lg-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-lg-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-lg-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-lg-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n  \r\ntable{\r\n    background-color:transparent\r\n}\r\n  \r\n.center-block{\r\n    display:block;\r\n    margin-right:auto;\r\n    margin-left:auto\r\n}\r\n  \r\n.pull-right{\r\n    float:right!important\r\n}\r\n  \r\n.pull-left{\r\n    float:left!important\r\n}\r\n  \r\n.hide{\r\n    display:none!important\r\n}\r\n  \r\n.show{\r\n    display:block!important\r\n}\r\n  \r\n.invisible{\r\n    visibility:hidden\r\n}\r\n  \r\n.text-hide{\r\n    font:0/0 a;\r\n    color:transparent;\r\n    text-shadow:none;\r\n    background-color:transparent;\r\n    border:0\r\n}\r\n  \r\n.hidden{\r\n    display:none!important;\r\n    visibility:hidden!important\r\n}\r\n  \r\n.affix{\r\n    position:fixed\r\n}\r\n  \r\n@-ms-viewport{\r\n    width:device-width\r\n}\r\n  \r\n.visible-xs,.visible-sm,.visible-md,.visible-lg{\r\n    display:none!important\r\n}\r\n  \r\n.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{\r\n    display:none!important\r\n}\r\n  \r\ntable{\r\n    background-color:transparent\r\n}\r\n  \r\ncaption{\r\n    padding-top:8px;\r\n    padding-bottom:8px;\r\n    color:#777;\r\n    text-align:left\r\n}\r\n  \r\nth{\r\n    text-align:left\r\n}\r\n  \r\n.table{\r\n    width:100%;\r\n    max-width:100%;\r\n    margin-bottom:20px\r\n}\r\n  \r\n.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{\r\n    padding:8px;\r\n    line-height:1.42857143;\r\n    vertical-align:top;\r\n    border-top:1px solid #ddd\r\n}\r\n  \r\n.table>thead>tr>th{\r\n    vertical-align:bottom;\r\n    border-bottom:2px solid #ddd\r\n}\r\n  \r\n.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>td{\r\n    border-top:0\r\n}\r\n  \r\n.table>tbody+tbody{\r\n    border-top:2px solid #ddd\r\n}\r\n  \r\n.table .table{\r\n    background-color:#fff\r\n}\r\n  \r\n.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{\r\n    padding:5px\r\n}\r\n  \r\n.table-bordered{\r\n    border:1px solid #ddd\r\n}\r\n  \r\n.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{\r\n    border:1px solid #ddd\r\n}\r\n  \r\n.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{\r\n    border-bottom-width:2px\r\n}\r\n  \r\n.table-striped>tbody>tr:nth-child(odd){\r\n    background-color:#f9f9f9\r\n}\r\n  \r\n.table-hover>tbody>tr:hover{\r\n    background-color:#f5f5f5\r\n}\r\n  \r\ntable col[class*=col-]{\r\n    position:static;\r\n    display:table-column;\r\n    float:none\r\n}\r\n  \r\ntable td[class*=col-],table th[class*=col-]{\r\n    position:static;\r\n    display:table-cell;\r\n    float:none\r\n}\r\n  \r\n.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th{\r\n    background-color:#f5f5f5\r\n}\r\n  \r\n.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th{\r\n    background-color:#e8e8e8\r\n}\r\n  \r\n.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th{\r\n    background-color:#dff0d8\r\n}\r\n  \r\n.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th{\r\n    background-color:#d0e9c6\r\n}\r\n  \r\n.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th{\r\n    background-color:#d9edf7\r\n}\r\n  \r\n.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th{\r\n    background-color:#c4e3f3\r\n}\r\n  \r\n.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th{\r\n    background-color:#fcf8e3\r\n}\r\n  \r\n.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th{\r\n    background-color:#faf2cc\r\n}\r\n  \r\n.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th{\r\n    background-color:#f2dede\r\n}\r\n  \r\n.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th{\r\n    background-color:#ebcccc\r\n}\r\n  \r\n.table-responsive{\r\n    min-height:.01%;\r\n    overflow-x:auto\r\n}\r\n  \r\n@media screen and (max-width:767px){\r\n    .table-responsive{\r\n        width:100%;\r\n        margin-bottom:15px;\r\n        overflow-y:hidden;\r\n        -ms-overflow-style:-ms-autohiding-scrollbar;\r\n        border:1px solid #ddd\r\n    }\r\n    .table-responsive>.table{\r\n        margin-bottom:0\r\n    }\r\n    .table-responsive>.table>thead>tr>th,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>td{\r\n        white-space:nowrap\r\n    }\r\n    .table-responsive>.table-bordered{\r\n        border:0\r\n    }\r\n    .table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{\r\n        border-left:0\r\n    }\r\n    .table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{\r\n        border-right:0\r\n    }\r\n    .table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>td{\r\n        border-bottom:0\r\n    }\r\n}\r\n  \r\nfieldset{\r\n    min-width:0;\r\n    padding:0;\r\n    margin:0;\r\n    border:0\r\n}\r\n  \r\nlegend{\r\n    display:block;\r\n    width:100%;\r\n    padding:0;\r\n    margin-bottom:20px;\r\n    font-size:21px;\r\n    line-height:inherit;\r\n    color:#333;\r\n    border:0;\r\n    border-bottom:1px solid #e5e5e5\r\n}\r\n  \r\nlabel{\r\n    display:inline-block;\r\n    max-width:100%;\r\n    margin-bottom:5px;\r\n    font-weight:700\r\n}\r\n  \r\ninput[type=search]{\r\n    box-sizing:border-box\r\n}\r\n  \r\ninput[type=radio],input[type=checkbox]{\r\n    margin:4px 0 0;\r\n    margin-top:1px \\9;\r\n    line-height:normal\r\n}\r\n  \r\ninput[type=file]{\r\n    display:block\r\n}\r\n  \r\ninput[type=range]{\r\n    display:block;\r\n    width:100%\r\n}\r\n  \r\nselect[multiple],select[size]{\r\n    height:auto\r\n}\r\n  \r\ninput[type=file]:focus,input[type=radio]:focus,input[type=checkbox]:focus{\r\n    outline:thin dotted;\r\n    outline:5px auto -webkit-focus-ring-color;\r\n    outline-offset:-2px\r\n}\r\n  \r\noutput{\r\n    display:block;\r\n    padding-top:7px;\r\n    font-size:14px;\r\n    line-height:1.42857143;\r\n    color:#555\r\n}\r\n  \r\n.form-control{\r\n    display:block;\r\n    width:100%;\r\n    height:34px;\r\n    padding:6px 12px;\r\n    font-size:14px;\r\n    line-height:1.42857143;\r\n    color:#555;\r\n    background-color:#fff;\r\n    background-image:none;\r\n    border:1px solid #ccc;\r\n    border-radius:4px;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075);\r\n    -webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\r\n    -webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n    transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s\r\n}\r\n  \r\n.form-control:focus{\r\n    border-color:#66afe9;\r\n    outline:0;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)\r\n}\r\n  \r\n.form-control::-moz-placeholder{\r\n    color:#999;\r\n    opacity:1\r\n}\r\n  \r\n.form-control:-ms-input-placeholder{\r\n    color:#999\r\n}\r\n  \r\n.form-control::-webkit-input-placeholder{\r\n    color:#999\r\n}\r\n  \r\n.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{\r\n    cursor:not-allowed;\r\n    background-color:#eee;\r\n    opacity:1\r\n}\r\n  \r\ntextarea.form-control{\r\n    height:auto\r\n}\r\n  \r\ninput[type=search]{\r\n    -webkit-appearance:none\r\n}\r\n  \r\ninput[type=date],input[type=time],input[type=datetime-local],input[type=month]{\r\n    line-height:34px;\r\n    line-height:1.42857143 \\0\r\n}\r\n  \r\ninput[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{\r\n    line-height:30px;\r\n    line-height:1.5 \\0\r\n}\r\n  \r\ninput[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{\r\n    line-height:46px;\r\n    line-height:1.33 \\0\r\n}\r\n  \r\n_:-ms-fullscreen,:root input[type=date],_:-ms-fullscreen,:root input[type=time],_:-ms-fullscreen,:root input[type=datetime-local],_:-ms-fullscreen,:root input[type=month]{\r\n    line-height:1.42857143\r\n}\r\n  \r\n_:-ms-fullscreen.input-sm,:root input[type=date].input-sm,_:-ms-fullscreen.input-sm,:root input[type=time].input-sm,_:-ms-fullscreen.input-sm,:root input[type=datetime-local].input-sm,_:-ms-fullscreen.input-sm,:root input[type=month].input-sm{\r\n    line-height:1.5\r\n}\r\n  \r\n_:-ms-fullscreen.input-lg,:root input[type=date].input-lg,_:-ms-fullscreen.input-lg,:root input[type=time].input-lg,_:-ms-fullscreen.input-lg,:root input[type=datetime-local].input-lg,_:-ms-fullscreen.input-lg,:root input[type=month].input-lg{\r\n    line-height:1.33\r\n}\r\n  \r\n.form-group{\r\n    margin-bottom:15px\r\n}\r\n  \r\n.radio,.checkbox{\r\n    position:relative;\r\n    display:block;\r\n    margin-top:10px;\r\n    margin-bottom:10px\r\n}\r\n  \r\n.radio label,.checkbox label{\r\n    min-height:20px;\r\n    padding-left:20px;\r\n    margin-bottom:0;\r\n    font-weight:400;\r\n    cursor:pointer\r\n}\r\n  \r\n.radio input[type=radio],.radio-inline input[type=radio],.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox]{\r\n    position:absolute;\r\n    margin-top:4px \\9;\r\n    margin-left:-20px\r\n}\r\n  \r\n.radio+.radio,.checkbox+.checkbox{\r\n    margin-top:-5px\r\n}\r\n  \r\n.radio-inline,.checkbox-inline{\r\n    display:inline-block;\r\n    padding-left:20px;\r\n    margin-bottom:0;\r\n    font-weight:400;\r\n    vertical-align:middle;\r\n    cursor:pointer\r\n}\r\n  \r\n.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{\r\n    margin-top:0;\r\n    margin-left:10px\r\n}\r\n  \r\ninput[type=radio][disabled],input[type=checkbox][disabled],input[type=radio].disabled,input[type=checkbox].disabled,fieldset[disabled] input[type=radio],fieldset[disabled] input[type=checkbox]{\r\n    cursor:not-allowed\r\n}\r\n  \r\n.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{\r\n    cursor:not-allowed\r\n}\r\n  \r\n.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{\r\n    cursor:not-allowed\r\n}\r\n  \r\n.form-control-static{\r\n    padding-top:7px;\r\n    padding-bottom:7px;\r\n    margin-bottom:0\r\n}\r\n  \r\n.form-control-static.input-lg,.form-control-static.input-sm{\r\n    padding-right:0;\r\n    padding-left:0\r\n}\r\n  \r\n.input-sm,.form-group-sm .form-control{\r\n    height:30px;\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\n  \r\nselect.input-sm,select.form-group-sm .form-control{\r\n    height:30px;\r\n    line-height:30px\r\n}\r\n  \r\ntextarea.input-sm,textarea.form-group-sm .form-control,select[multiple].input-sm,select[multiple].form-group-sm .form-control{\r\n    height:auto\r\n}\r\n  \r\n.input-lg,.form-group-lg .form-control{\r\n    height:46px;\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    line-height:1.33;\r\n    border-radius:6px\r\n}\r\n  \r\nselect.input-lg,select.form-group-lg .form-control{\r\n    height:46px;\r\n    line-height:46px\r\n}\r\n  \r\ntextarea.input-lg,textarea.form-group-lg .form-control,select[multiple].input-lg,select[multiple].form-group-lg .form-control{\r\n    height:auto\r\n}\r\n  \r\n.has-feedback{\r\n    position:relative\r\n}\r\n  \r\n.has-feedback .form-control{\r\n    padding-right:42.5px\r\n}\r\n  \r\n.form-control-feedback{\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n    z-index:2;\r\n    display:block;\r\n    width:34px;\r\n    height:34px;\r\n    line-height:34px;\r\n    text-align:center;\r\n    pointer-events:none\r\n}\r\n  \r\n.input-lg+.form-control-feedback{\r\n    width:46px;\r\n    height:46px;\r\n    line-height:46px\r\n}\r\n  \r\n.input-sm+.form-control-feedback{\r\n    width:30px;\r\n    height:30px;\r\n    line-height:30px\r\n}\r\n  \r\n.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{\r\n    color:#3c763d\r\n}\r\n  \r\n.has-success .form-control{\r\n    border-color:#3c763d;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\r\n}\r\n  \r\n.has-success .form-control:focus{\r\n    border-color:#2b542c;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168\r\n}\r\n  \r\n.has-success .input-group-addon{\r\n    color:#3c763d;\r\n    background-color:#dff0d8;\r\n    border-color:#3c763d\r\n}\r\n  \r\n.has-success .form-control-feedback{\r\n    color:#3c763d\r\n}\r\n  \r\n.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label{\r\n    color:#8a6d3b\r\n}\r\n  \r\n.has-warning .form-control{\r\n    border-color:#8a6d3b;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\r\n}\r\n  \r\n.has-warning .form-control:focus{\r\n    border-color:#66512c;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b\r\n}\r\n  \r\n.has-warning .input-group-addon{\r\n    color:#8a6d3b;\r\n    background-color:#fcf8e3;\r\n    border-color:#8a6d3b\r\n}\r\n  \r\n.has-warning .form-control-feedback{\r\n    color:#8a6d3b\r\n}\r\n  \r\n.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{\r\n    color:#a94442\r\n}\r\n  \r\n.has-error .form-control{\r\n    border-color:#a94442;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\r\n}\r\n  \r\n.has-error .form-control:focus{\r\n    border-color:#843534;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483\r\n}\r\n  \r\n.has-error .input-group-addon{\r\n    color:#a94442;\r\n    background-color:#f2dede;\r\n    border-color:#a94442\r\n}\r\n  \r\n.has-error .form-control-feedback{\r\n    color:#a94442\r\n}\r\n  \r\n.has-feedback label~.form-control-feedback{\r\n    top:25px\r\n}\r\n  \r\n.has-feedback label.sr-only~.form-control-feedback{\r\n    top:0\r\n}\r\n  \r\n.help-block{\r\n    display:block;\r\n    margin-top:5px;\r\n    margin-bottom:10px;\r\n    color:#737373\r\n}\r\n  \r\n@media (min-width:768px){\r\n    .form-inline .form-group{\r\n        display:inline-block;\r\n        margin-bottom:0;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .form-control{\r\n        display:inline-block;\r\n        width:auto;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .form-control-static{\r\n        display:inline-block\r\n    }\r\n    .form-inline .input-group{\r\n        display:inline-table;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{\r\n        width:auto\r\n    }\r\n    .form-inline .input-group>.form-control{\r\n        width:100%\r\n    }\r\n    .form-inline .control-label{\r\n        margin-bottom:0;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .radio,.form-inline .checkbox{\r\n        display:inline-block;\r\n        margin-top:0;\r\n        margin-bottom:0;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .radio label,.form-inline .checkbox label{\r\n        padding-left:0\r\n    }\r\n    .form-inline .radio input[type=radio],.form-inline .checkbox input[type=checkbox]{\r\n        position:relative;\r\n        margin-left:0\r\n    }\r\n    .form-inline .has-feedback .form-control-feedback{\r\n        top:0\r\n    }\r\n}\r\n  \r\n.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{\r\n    padding-top:7px;\r\n    margin-top:0;\r\n    margin-bottom:0\r\n}\r\n  \r\n.form-horizontal .radio,.form-horizontal .checkbox{\r\n    min-height:27px\r\n}\r\n  \r\n.form-horizontal .form-group{\r\n    margin-right:-15px;\r\n    margin-left:-15px\r\n}\r\n  \r\n@media (min-width:768px){\r\n    .form-horizontal .control-label{\r\n        padding-top:7px;\r\n        margin-bottom:0;\r\n        text-align:right\r\n    }\r\n}\r\n  \r\n.form-horizontal .has-feedback .form-control-feedback{\r\n    right:15px\r\n}\r\n  \r\n@media (min-width:768px){\r\n    .form-horizontal .form-group-lg .control-label{\r\n        padding-top:14.3px\r\n    }\r\n}\r\n  \r\n@media (min-width:768px){\r\n    .form-horizontal .form-group-sm .control-label{\r\n        padding-top:6px\r\n    }\r\n}\r\n  \r\n.btn{\r\n    display:inline-block;\r\n    padding:6px 12px;\r\n    margin-bottom:0;\r\n    font-size:14px;\r\n    font-weight:400;\r\n    line-height:1.42857143;\r\n    text-align:center;\r\n    white-space:nowrap;\r\n    vertical-align:middle;\r\n    touch-action:manipulation;\r\n    cursor:pointer;\r\n    -webkit-fermo-select:none;\r\n    -moz-fermo-select:none;\r\n    -ms-fermo-select:none;\r\n    fermo-select:none;\r\n    background-image:none;\r\n    border:1px solid transparent;\r\n    border-radius:4px\r\n}\r\n  \r\n.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus{\r\n    outline:thin dotted;\r\n    outline:5px auto -webkit-focus-ring-color;\r\n    outline-offset:-2px\r\n}\r\n  \r\n.btn:hover,.btn:focus,.btn.focus{\r\n    color:#333;\r\n    text-decoration:none\r\n}\r\n  \r\n.btn:active,.btn.active{\r\n    background-image:none;\r\n    outline:0;\r\n    box-shadow:inset 0 3px 5px rgba(0,0,0,.125)\r\n}\r\n  \r\n.btn.disabled,.btn[disabled],fieldset[disabled] .btn{\r\n    pointer-events:none;\r\n    cursor:not-allowed;\r\n    filter:alpha(opacity=65);\r\n    box-shadow:none;\r\n    opacity:.65\r\n}\r\n  \r\n.btn-default{\r\n    color:#333;\r\n    background-color:#fff;\r\n    border-color:#ccc\r\n}\r\n  \r\n.btn-default:hover,.btn-default:focus,.btn-default.focus,.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{\r\n    color:#333;\r\n    background-color:#e6e6e6;\r\n    border-color:#adadad\r\n}\r\n  \r\n.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{\r\n    background-image:none\r\n}\r\n  \r\n.btn-default.disabled,.btn-default[disabled],fieldset[disabled] .btn-default,.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled.focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default.focus,.btn-default.disabled:active,.btn-default[disabled]:active,fieldset[disabled] .btn-default:active,.btn-default.disabled.active,.btn-default[disabled].active,fieldset[disabled] .btn-default.active{\r\n    background-color:#fff;\r\n    border-color:#ccc\r\n}\r\n  \r\n.btn-default .badge{\r\n    color:#fff;\r\n    background-color:#333\r\n}\r\n  \r\n.btn-primary{\r\n    color:#fff;\r\n    background-color:#dd061c;\r\n    border-color:#357ebd\r\n}\r\n  \r\n.btn-primary:hover,.btn-primary:focus,.btn-primary.focus,.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{\r\n    color:#fff;\r\n    background-color:#3071a9;\r\n    border-color:#285e8e\r\n}\r\n  \r\n.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{\r\n    background-image:none\r\n}\r\n  \r\n.btn-primary.disabled,.btn-primary[disabled],fieldset[disabled] .btn-primary,.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled.focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary.focus,.btn-primary.disabled:active,.btn-primary[disabled]:active,fieldset[disabled] .btn-primary:active,.btn-primary.disabled.active,.btn-primary[disabled].active,fieldset[disabled] .btn-primary.active{\r\n    background-color:#dd061c;\r\n    border-color:#357ebd\r\n}\r\n  \r\n.btn-primary .badge{\r\n    color:#dd061c;\r\n    background-color:#fff\r\n}\r\n  \r\n.btn-success{\r\n    color:#fff;\r\n    background-color:#5cb85c;\r\n    border-color:#4cae4c\r\n}\r\n  \r\n.btn-success:hover,.btn-success:focus,.btn-success.focus,.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{\r\n    color:#fff;\r\n    background-color:#449d44;\r\n    border-color:#398439\r\n}\r\n  \r\n.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{\r\n    background-image:none\r\n}\r\n  \r\n.btn-success.disabled,.btn-success[disabled],fieldset[disabled] .btn-success,.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled.focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success.focus,.btn-success.disabled:active,.btn-success[disabled]:active,fieldset[disabled] .btn-success:active,.btn-success.disabled.active,.btn-success[disabled].active,fieldset[disabled] .btn-success.active{\r\n    background-color:#5cb85c;\r\n    border-color:#4cae4c\r\n}\r\n  \r\n.btn-success .badge{\r\n    color:#5cb85c;\r\n    background-color:#fff\r\n}\r\n  \r\n.btn-info{\r\n    color:#fff;\r\n    background-color:#5bc0de;\r\n    border-color:#46b8da\r\n}\r\n  \r\n.btn-info:hover,.btn-info:focus,.btn-info.focus,.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{\r\n    color:#fff;\r\n    background-color:#31b0d5;\r\n    border-color:#269abc\r\n}\r\n  \r\n.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{\r\n    background-image:none\r\n}\r\n  \r\n.btn-info.disabled,.btn-info[disabled],fieldset[disabled] .btn-info,.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled.focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info.focus,.btn-info.disabled:active,.btn-info[disabled]:active,fieldset[disabled] .btn-info:active,.btn-info.disabled.active,.btn-info[disabled].active,fieldset[disabled] .btn-info.active{\r\n    background-color:#5bc0de;\r\n    border-color:#46b8da\r\n}\r\n  \r\n.btn-info .badge{\r\n    color:#5bc0de;\r\n    background-color:#fff\r\n}\r\n  \r\n.btn-warning{\r\n    color:#fff;\r\n    background-color:#f0ad4e;\r\n    border-color:#eea236\r\n}\r\n  \r\n.btn-warning:hover,.btn-warning:focus,.btn-warning.focus,.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{\r\n    color:#fff;\r\n    background-color:#ec971f;\r\n    border-color:#d58512\r\n}\r\n  \r\n.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{\r\n    background-image:none\r\n}\r\n  \r\n.btn-warning.disabled,.btn-warning[disabled],fieldset[disabled] .btn-warning,.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled.focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning.focus,.btn-warning.disabled:active,.btn-warning[disabled]:active,fieldset[disabled] .btn-warning:active,.btn-warning.disabled.active,.btn-warning[disabled].active,fieldset[disabled] .btn-warning.active{\r\n    background-color:#f0ad4e;\r\n    border-color:#eea236\r\n}\r\n  \r\n.btn-warning .badge{\r\n    color:#f0ad4e;\r\n    background-color:#fff\r\n}\r\n  \r\n.btn-danger{\r\n    color:#fff;\r\n    background-color:#d9534f;\r\n    border-color:#d43f3a\r\n}\r\n  \r\n.btn-danger:hover,.btn-danger:focus,.btn-danger.focus,.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{\r\n    color:#fff;\r\n    background-color:#c9302c;\r\n    border-color:#ac2925\r\n}\r\n  \r\n.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{\r\n    background-image:none\r\n}\r\n  \r\n.btn-danger.disabled,.btn-danger[disabled],fieldset[disabled] .btn-danger,.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled.focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger.focus,.btn-danger.disabled:active,.btn-danger[disabled]:active,fieldset[disabled] .btn-danger:active,.btn-danger.disabled.active,.btn-danger[disabled].active,fieldset[disabled] .btn-danger.active{\r\n    background-color:#d9534f;\r\n    border-color:#d43f3a\r\n}\r\n  \r\n.btn-danger .badge{\r\n    color:#d9534f;\r\n    background-color:#fff\r\n}\r\n  \r\n.btn-link{\r\n    font-weight:400;\r\n    color:#dd061c;\r\n    border-radius:0\r\n}\r\n  \r\n.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link{\r\n    background-color:transparent;\r\n    box-shadow:none\r\n}\r\n  \r\n.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{\r\n    border-color:transparent\r\n}\r\n  \r\n.btn-link:hover,.btn-link:focus{\r\n    color:#2a6496;\r\n    text-decoration:underline;\r\n    background-color:transparent\r\n}\r\n  \r\n.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{\r\n    color:#777;\r\n    text-decoration:none\r\n}\r\n  \r\n.btn-lg,.btn-group-lg>.btn{\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    line-height:1.33;\r\n    border-radius:6px\r\n}\r\n  \r\n.btn-sm,.btn-group-sm>.btn{\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\n  \r\n.btn-xs,.btn-group-xs>.btn{\r\n    padding:1px 5px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\n  \r\n.btn-block{\r\n    display:block;\r\n    width:100%\r\n}\r\n  \r\n.btn-block+.btn-block{\r\n    margin-top:5px\r\n}\r\n  \r\ninput[type=submit].btn-block,input[type=reset].btn-block,input[type=button].btn-block{\r\n    width:100%\r\n}\r\n  \r\n.fade{\r\n    opacity:0;\r\n    -webkit-transition:opacity .15s linear;\r\n    transition:opacity .15s linear\r\n}\r\n  \r\n.fade.in{\r\n    opacity:1\r\n}\r\n  \r\n.collapse{\r\n    display:none;\r\n    visibility:hidden\r\n}\r\n  \r\n.collapse.in{\r\n    display:block;\r\n    visibility:visible\r\n}\r\n  \r\ntr.collapse.in{\r\n    display:table-row\r\n}\r\n  \r\ntbody.collapse.in{\r\n    display:table-row-group\r\n}\r\n  \r\n.collapsing{\r\n    position:relative;\r\n    height:0;\r\n    overflow:hidden;\r\n    -webkit-transition-timing-function:ease;\r\n    transition-timing-function:ease;\r\n    -webkit-transition-duration:.35s;\r\n    transition-duration:.35s;\r\n    -webkit-transition-property:height,visibility;\r\n    transition-property:height,visibility\r\n}\r\n  \r\n.caret{\r\n    display:inline-block;\r\n    width:0;\r\n    height:0;\r\n    margin-left:2px;\r\n    vertical-align:middle;\r\n    border-top:4px solid;\r\n    border-right:4px solid transparent;\r\n    border-left:4px solid transparent\r\n}\r\n  \r\n.dropdown{\r\n    position:relative\r\n}\r\n  \r\n.dropdown-toggle:focus{\r\n    outline:0\r\n}\r\n  \r\n.dropdown-menu{\r\n    position:absolute;\r\n    top:100%;\r\n    left:0;\r\n    z-index:1000;\r\n    display:none;\r\n    float:left;\r\n    min-width:160px;\r\n    padding:5px 0;\r\n    margin:2px 0 0;\r\n    font-size:14px;\r\n    text-align:left;\r\n    list-style:none;\r\n    background-color:#fff;\r\n    -webkit-background-clip:padding-box;\r\n    background-clip:padding-box;\r\n    border:1px solid #ccc;\r\n    border:1px solid rgba(0,0,0,.15);\r\n    border-radius:4px;\r\n    box-shadow:0 6px 12px rgba(0,0,0,.175)\r\n}\r\n  \r\n.dropdown-menu.pull-right{\r\n    right:0;\r\n    left:auto\r\n}\r\n  \r\n.dropdown-menu .divider{\r\n    height:1px;\r\n    margin:9px 0;\r\n    overflow:hidden;\r\n    background-color:#e5e5e5\r\n}\r\n  \r\n.dropdown-menu>li>a{\r\n    display:block;\r\n    padding:3px 20px;\r\n    clear:both;\r\n    font-weight:400;\r\n    line-height:1.42857143;\r\n    color:#333;\r\n    white-space:nowrap\r\n}\r\n  \r\n.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{\r\n    color:#262626;\r\n    text-decoration:none;\r\n    background-color:#f5f5f5\r\n}\r\n  \r\n.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{\r\n    color:#fff;\r\n    text-decoration:none;\r\n    background-color:#dd061c;\r\n    outline:0\r\n}\r\n  \r\n.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{\r\n    color:#777\r\n}\r\n  \r\n.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{\r\n    text-decoration:none;\r\n    cursor:not-allowed;\r\n    background-color:transparent;\r\n    background-image:none;\r\n    filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)\r\n}\r\n  \r\n.open>.dropdown-menu{\r\n    display:block\r\n}\r\n  \r\n.open>a{\r\n    outline:0\r\n}\r\n  \r\n.dropdown-menu-right{\r\n    right:0;\r\n    left:auto\r\n}\r\n  \r\n.dropdown-menu-left{\r\n    right:auto;\r\n    left:0\r\n}\r\n  \r\n.dropdown-header{\r\n    display:block;\r\n    padding:3px 20px;\r\n    font-size:12px;\r\n    line-height:1.42857143;\r\n    color:#777;\r\n    white-space:nowrap\r\n}\r\n  \r\n.dropdown-backdrop{\r\n    position:fixed;\r\n    top:0;\r\n    right:0;\r\n    bottom:0;\r\n    left:0;\r\n    z-index:990\r\n}\r\n  \r\n.pull-right>.dropdown-menu{\r\n    right:0;\r\n    left:auto\r\n}\r\n  \r\n.dropup .caret,.navbar-fixed-bottom .dropdown .caret{\r\n    content:\"\";\r\n    border-top:0;\r\n    border-bottom:4px solid\r\n}\r\n  \r\n.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{\r\n    top:auto;\r\n    bottom:100%;\r\n    margin-bottom:1px\r\n}\r\n  \r\n@media (min-width:768px){\r\n    .navbar-right .dropdown-menu{\r\n        right:0;\r\n        left:auto\r\n    }\r\n    .navbar-right .dropdown-menu-left{\r\n        right:auto;\r\n        left:0\r\n    }\r\n}\r\n  \r\n.btn-group,.btn-group-vertical{\r\n    position:relative;\r\n    display:inline-block;\r\n    vertical-align:middle\r\n}\r\n  \r\n.btn-group>.btn,.btn-group-vertical>.btn{\r\n    position:relative;\r\n    float:left\r\n}\r\n  \r\n.btn-group>.btn:hover,.btn-group-vertical>.btn:hover,.btn-group>.btn:focus,.btn-group-vertical>.btn:focus,.btn-group>.btn:active,.btn-group-vertical>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn.active{\r\n    z-index:2\r\n}\r\n  \r\n.btn-group>.btn:focus,.btn-group-vertical>.btn:focus{\r\n    outline:0\r\n}\r\n  \r\n.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{\r\n    margin-left:-1px\r\n}\r\n  \r\n.btn-toolbar{\r\n    margin-left:-5px\r\n}\r\n  \r\n.btn-toolbar .btn-group,.btn-toolbar .input-group{\r\n    float:left\r\n}\r\n  \r\n.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{\r\n    margin-left:5px\r\n}\r\n  \r\n.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){\r\n    border-radius:0\r\n}\r\n  \r\n.btn-group>.btn:first-child{\r\n    margin-left:0\r\n}\r\n  \r\n.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){\r\n    border-top-right-radius:0;\r\n    border-bottom-right-radius:0\r\n}\r\n  \r\n.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){\r\n    border-top-left-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n  \r\n.btn-group>.btn-group{\r\n    float:left\r\n}\r\n  \r\n.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{\r\n    border-radius:0\r\n}\r\n  \r\n.btn-group>.btn-group:first-child>.btn:last-child,.btn-group>.btn-group:first-child>.dropdown-toggle{\r\n    border-top-right-radius:0;\r\n    border-bottom-right-radius:0\r\n}\r\n  \r\n.btn-group>.btn-group:last-child>.btn:first-child{\r\n    border-top-left-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n  \r\n.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{\r\n    outline:0\r\n}\r\n  \r\n.btn-group>.btn+.dropdown-toggle{\r\n    padding-right:8px;\r\n    padding-left:8px\r\n}\r\n  \r\n.btn-group>.btn-lg+.dropdown-toggle{\r\n    padding-right:12px;\r\n    padding-left:12px\r\n}\r\n  \r\n.btn-group.open .dropdown-toggle{\r\n    box-shadow:inset 0 3px 5px rgba(0,0,0,.125)\r\n}\r\n  \r\n.btn-group.open .dropdown-toggle.btn-link{\r\n    box-shadow:none\r\n}\r\n  \r\n.btn .caret{\r\n    margin-left:0\r\n}\r\n  \r\n.btn-lg .caret{\r\n    border-width:5px 5px 0;\r\n    border-bottom-width:0\r\n}\r\n  \r\n.dropup .btn-lg .caret{\r\n    border-width:0 5px 5px\r\n}\r\n  \r\n.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{\r\n    display:block;\r\n    float:none;\r\n    width:100%;\r\n    max-width:100%\r\n}\r\n  \r\n.btn-group-vertical>.btn-group>.btn{\r\n    float:none\r\n}\r\n  \r\n.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{\r\n    margin-top:-1px;\r\n    margin-left:0\r\n}\r\n  \r\n.btn-group-vertical>.btn:not(:first-child):not(:last-child){\r\n    border-radius:0\r\n}\r\n  \r\n.btn-group-vertical>.btn:first-child:not(:last-child){\r\n    border-top-right-radius:4px;\r\n    border-bottom-right-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n  \r\n.btn-group-vertical>.btn:last-child:not(:first-child){\r\n    border-top-left-radius:0;\r\n    border-top-right-radius:0;\r\n    border-bottom-left-radius:4px\r\n}\r\n  \r\n.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{\r\n    border-radius:0\r\n}\r\n  \r\n.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{\r\n    border-bottom-right-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n  \r\n.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{\r\n    border-top-left-radius:0;\r\n    border-top-right-radius:0\r\n}\r\n  \r\n.btn-group-justified{\r\n    display:table;\r\n    width:100%;\r\n    table-layout:fixed;\r\n    border-collapse:separate\r\n}\r\n  \r\n.btn-group-justified>.btn,.btn-group-justified>.btn-group{\r\n    display:table-cell;\r\n    float:none;\r\n    width:1%\r\n}\r\n  \r\n.btn-group-justified>.btn-group .btn{\r\n    width:100%\r\n}\r\n  \r\n.btn-group-justified>.btn-group .dropdown-menu{\r\n    left:auto\r\n}\r\n  \r\n[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=radio],[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox]{\r\n    position:absolute;\r\n    clip:rect(0,0,0,0);\r\n    pointer-events:none\r\n}\r\n  \r\n.input-group{\r\n    position:relative;\r\n    display:table;\r\n    border-collapse:separate\r\n}\r\n  \r\n.input-group[class*=col-]{\r\n    float:none;\r\n    padding-right:0;\r\n    padding-left:0\r\n}\r\n  \r\n.input-group .form-control{\r\n    position:relative;\r\n    z-index:2;\r\n    float:left;\r\n    width:100%;\r\n    margin-bottom:0\r\n}\r\n  \r\n.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{\r\n    height:46px;\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    line-height:1.33;\r\n    border-radius:6px\r\n}\r\n  \r\nselect.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{\r\n    height:46px;\r\n    line-height:46px\r\n}\r\n  \r\ntextarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn,select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn{\r\n    height:auto\r\n}\r\n  \r\n.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{\r\n    height:30px;\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\n  \r\nselect.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{\r\n    height:30px;\r\n    line-height:30px\r\n}\r\n  \r\ntextarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn,select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn{\r\n    height:auto\r\n}\r\n  \r\n.input-group-addon,.input-group-btn,.input-group .form-control{\r\n    display:table-cell\r\n}\r\n  \r\n.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){\r\n    border-radius:0\r\n}\r\n  \r\n.input-group-addon,.input-group-btn{\r\n    width:1%;\r\n    white-space:nowrap;\r\n    vertical-align:middle\r\n}\r\n  \r\n.input-group-addon{\r\n    padding:6px 12px;\r\n    font-size:14px;\r\n    font-weight:400;\r\n    line-height:1;\r\n    color:#555;\r\n    text-align:center;\r\n    background-color:#eee;\r\n    border:1px solid #ccc;\r\n    border-radius:4px\r\n}\r\n  \r\n.input-group-addon.input-sm{\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    border-radius:3px\r\n}\r\n  \r\n.input-group-addon.input-lg{\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    border-radius:6px\r\n}\r\n  \r\n.input-group-addon input[type=radio],.input-group-addon input[type=checkbox]{\r\n    margin-top:0\r\n}\r\n  \r\n.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn{\r\n    border-top-right-radius:0;\r\n    border-bottom-right-radius:0\r\n}\r\n  \r\n.input-group-addon:first-child{\r\n    border-right:0\r\n}\r\n  \r\n.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn{\r\n    border-top-left-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n  \r\n.input-group-addon:last-child{\r\n    border-left:0\r\n}\r\n  \r\n.input-group-btn{\r\n    position:relative;\r\n    font-size:0;\r\n    white-space:nowrap\r\n}\r\n  \r\n.input-group-btn>.btn{\r\n    position:relative\r\n}\r\n  \r\n.input-group-btn>.btn+.btn{\r\n    margin-left:-1px\r\n}\r\n  \r\n.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active{\r\n    z-index:2\r\n}\r\n  \r\n.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{\r\n    margin-right:-1px\r\n}\r\n  \r\n.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{\r\n    margin-left:-1px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZXJtby1saXN0L2Zlcm1vLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0VBQ2pCOztBQUVGO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUdBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUVqQjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2Q7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFDQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUI7QUFDSjs7QUFDQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCO0FBQ0o7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCO0FBQ0o7O0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFDQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZjtBQUNKOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUVBO0FBQ0EsZUFBZTtBQUNmLFlBQVk7QUFDWjtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtBQUNKOztBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7QUFDSjs7QUFDQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJ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ZTtJQUNmO0FBQ0o7O0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLFFBQVE7SUFDUixrQkFBa0I7SUFDbEI7QUFDSjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckI7QUFDSjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Q7QUFDSjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Q7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVybW8tbGlzdC9mZXJtby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4udGFibGUtaG92ZXIgdGhlYWQgdHI6aG92ZXIgdGgsIC50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NiO1xyXG59XHJcblxyXG4uZmEtcGVuY2lsIHtcclxuY29sb3I6IGJsYWNrXHJcbn1cclxuLmZhLXRyYXNoIHtcclxuY29sb3I6IGJsYWNrXHJcbn1cclxuLmZhLXNlYXJjaCB7XHJcbmNvbG9yOiBibGFja1xyXG59XHJcblxyXG5cclxuLnJvd3tcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4uY2xpY2thYmxle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgIFxyXG59XHJcblxyXG4ucGFuZWwtaGVhZGluZyBkaXYge1xyXG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnBhbmVsLWhlYWRpbmcgZGl2IHNwYW57XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuLnBhbmVsLWJvZHl7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGFuZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6MCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTtcclxuICAgIGJveC1zaGFkb3c6MCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KVxyXG59XHJcbi5wYW5lbC1ib2R5e1xyXG4gICAgcGFkZGluZzoxNXB4XHJcbn1cclxuLnBhbmVsLWhlYWRpbmd7XHJcbiAgICBwYWRkaW5nOjEwcHggMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozcHhcclxufVxyXG4ucGFuZWwtaGVhZGluZz4uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZXtcclxuICAgIGNvbG9yOmluaGVyaXRcclxufVxyXG4ucGFuZWwtdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGNvbG9yOmluaGVyaXRcclxufVxyXG4ucGFuZWwtdGl0bGU+YXtcclxuICAgIGNvbG9yOmluaGVyaXRcclxufVxyXG4ucGFuZWwtZm9vdGVye1xyXG4gICAgcGFkZGluZzoxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6M3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHhcclxufVxyXG4ucGFuZWw+Lmxpc3QtZ3JvdXAsLnBhbmVsPi5wYW5lbC1jb2xsYXBzZT4ubGlzdC1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206MFxyXG59XHJcbi5wYW5lbD4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+Lmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbXtcclxuICAgIGJvcmRlci13aWR0aDoxcHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6MFxyXG59XHJcbi5wYW5lbD4ubGlzdC1ncm91cDpmaXJzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+Lmxpc3QtZ3JvdXA6Zmlyc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci10b3A6MDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6M3B4XHJcbn1cclxuLnBhbmVsPi5saXN0LWdyb3VwOmxhc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+Lmxpc3QtZ3JvdXA6bGFzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tOjA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweFxyXG59XHJcbi5wYW5lbC1oZWFkaW5nKy5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOjBcclxufVxyXG4ubGlzdC1ncm91cCsucGFuZWwtZm9vdGVye1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDowXHJcbn1cclxuLnBhbmVsPi50YWJsZSwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+LnRhYmxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTowXHJcbn1cclxuLnBhbmVsPi50YWJsZSBjYXB0aW9uLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUgY2FwdGlvbiwucGFuZWw+LnBhbmVsLWNvbGxhcHNlPi50YWJsZSBjYXB0aW9ue1xyXG4gICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjE1cHhcclxufVxyXG4ucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweFxyXG59XHJcbi5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweFxyXG59XHJcbi5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4XHJcbn1cclxuLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweFxyXG59XHJcbi5wYW5lbD4udGFibGU6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4XHJcbn1cclxuLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRmb290Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweFxyXG59XHJcbi5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRoOmZpcnN0LWNoaWxke1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHhcclxufVxyXG4ucGFuZWw+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRmb290Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkPi50YWJsZTpsYXN0LWNoaWxkPnRmb290Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRoOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHhcclxufVxyXG4ucGFuZWw+LnBhbmVsLWJvZHkrLnRhYmxlLC5wYW5lbD4ucGFuZWwtYm9keSsudGFibGUtcmVzcG9uc2l2ZSwucGFuZWw+LnRhYmxlKy5wYW5lbC1ib2R5LC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZSsucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNkZGRcclxufVxyXG4ucGFuZWw+LnRhYmxlPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoLC5wYW5lbD4udGFibGU+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGR7XHJcbiAgICBib3JkZXItdG9wOjBcclxufVxyXG4ucGFuZWw+LnRhYmxlLWJvcmRlcmVkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXI6MFxyXG59XHJcbi5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmZpcnN0LWNoaWxke1xyXG4gICAgYm9yZGVyLWxlZnQ6MFxyXG59XHJcbi5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZDpsYXN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXJpZ2h0OjBcclxufVxyXG4ucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyOmZpcnN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpmaXJzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmZpcnN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGgsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cjpmaXJzdC1jaGlsZD50aCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmZpcnN0LWNoaWxkPnRoLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6Zmlyc3QtY2hpbGQ+dGh7XHJcbiAgICBib3JkZXItYm90dG9tOjBcclxufVxyXG4ucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpsYXN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI6bGFzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpsYXN0LWNoaWxkPnRoLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6bGFzdC1jaGlsZD50aCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGgsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cjpsYXN0LWNoaWxkPnRoe1xyXG4gICAgYm9yZGVyLWJvdHRvbTowXHJcbn1cclxuLnBhbmVsPi50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgYm9yZGVyOjBcclxufVxyXG4ucGFuZWwtZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHhcclxufVxyXG4ucGFuZWwtZ3JvdXAgLnBhbmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgYm9yZGVyLXJhZGl1czo0cHhcclxufVxyXG4ucGFuZWwtZ3JvdXAgLnBhbmVsKy5wYW5lbHtcclxuICAgIG1hcmdpbi10b3A6NXB4XHJcbn1cclxuLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5ne1xyXG4gICAgYm9yZGVyLWJvdHRvbTowXHJcbn1cclxuLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keSwucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5saXN0LWdyb3Vwe1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2RkZFxyXG59XHJcbi5wYW5lbC1ncm91cCAucGFuZWwtZm9vdGVye1xyXG4gICAgYm9yZGVyLXRvcDowXHJcbn1cclxuLnBhbmVsLWdyb3VwIC5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZFxyXG59XHJcbi5wYW5lbC1kZWZhdWx0e1xyXG4gICAgYm9yZGVyLWNvbG9yOiNkZGRcclxufVxyXG4ucGFuZWwtZGVmYXVsdD4ucGFuZWwtaGVhZGluZ3tcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7XHJcbiAgICBib3JkZXItY29sb3I6I2RkZFxyXG59XHJcbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci10b3AtY29sb3I6I2RkZFxyXG59XHJcbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nIC5iYWRnZXtcclxuICAgIGNvbG9yOiNmNWY1ZjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzNcclxufVxyXG4ucGFuZWwtZGVmYXVsdD4ucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6I2RkZFxyXG59XHJcbi5wYW5lbC1wcmltYXJ5e1xyXG4gICAgYm9yZGVyLWNvbG9yOiNkZDA2MWNcclxufVxyXG4ucGFuZWwtcHJpbWFyeT4ucGFuZWwtaGVhZGluZ3tcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZDA2MWM7XHJcbiAgICBib3JkZXItY29sb3I6I2RkMDYxY1xyXG59XHJcbi5wYW5lbC1wcmltYXJ5Pi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci10b3AtY29sb3I6I2RkMDYxY1xyXG59XHJcbi5wYW5lbC1wcmltYXJ5Pi5wYW5lbC1oZWFkaW5nIC5iYWRnZXtcclxuICAgIGNvbG9yOiNkZDA2MWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZcclxufVxyXG4ucGFuZWwtcHJpbWFyeT4ucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6I2RkMDYxY1xyXG59XHJcbi5wYW5lbC1zdWNjZXNze1xyXG4gICAgYm9yZGVyLWNvbG9yOiNkNmU5YzZcclxufVxyXG4ucGFuZWwtc3VjY2Vzcz4ucGFuZWwtaGVhZGluZ3tcclxuICAgIGNvbG9yOiMzYzc2M2Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZmYwZDg7XHJcbiAgICBib3JkZXItY29sb3I6I2Q2ZTljNlxyXG59XHJcbi5wYW5lbC1zdWNjZXNzPi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci10b3AtY29sb3I6I2Q2ZTljNlxyXG59XHJcbi5wYW5lbC1zdWNjZXNzPi5wYW5lbC1oZWFkaW5nIC5iYWRnZXtcclxuICAgIGNvbG9yOiNkZmYwZDg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYzc2M2RcclxufVxyXG4ucGFuZWwtc3VjY2Vzcz4ucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6I2Q2ZTljNlxyXG59XHJcbi5wYW5lbC1pbmZve1xyXG4gICAgYm9yZGVyLWNvbG9yOiNiY2U4ZjFcclxufVxyXG4ucGFuZWwtaW5mbz4ucGFuZWwtaGVhZGluZ3tcclxuICAgIGNvbG9yOiMzMTcwOGY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkOWVkZjc7XHJcbiAgICBib3JkZXItY29sb3I6I2JjZThmMVxyXG59XHJcbi5wYW5lbC1pbmZvPi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci10b3AtY29sb3I6I2JjZThmMVxyXG59XHJcbi5wYW5lbC1pbmZvPi5wYW5lbC1oZWFkaW5nIC5iYWRnZXtcclxuICAgIGNvbG9yOiNkOWVkZjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMTcwOGZcclxufVxyXG4ucGFuZWwtaW5mbz4ucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6I2JjZThmMVxyXG59XHJcbi5wYW5lbC13YXJuaW5ne1xyXG4gICAgYm9yZGVyLWNvbG9yOiNmYWViY2NcclxufVxyXG4ucGFuZWwtd2FybmluZz4ucGFuZWwtaGVhZGluZ3tcclxuICAgIGNvbG9yOiM4YTZkM2I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmY2Y4ZTM7XHJcbiAgICBib3JkZXItY29sb3I6I2ZhZWJjY1xyXG59XHJcbi5wYW5lbC13YXJuaW5nPi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci10b3AtY29sb3I6I2ZhZWJjY1xyXG59XHJcbi5wYW5lbC13YXJuaW5nPi5wYW5lbC1oZWFkaW5nIC5iYWRnZXtcclxuICAgIGNvbG9yOiNmY2Y4ZTM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4YTZkM2JcclxufVxyXG4ucGFuZWwtd2FybmluZz4ucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6I2ZhZWJjY1xyXG59XHJcbi5wYW5lbC1kYW5nZXJ7XHJcbiAgICBib3JkZXItY29sb3I6I2ViY2NkMVxyXG59XHJcbi5wYW5lbC1kYW5nZXI+LnBhbmVsLWhlYWRpbmd7XHJcbiAgICBjb2xvcjojYTk0NDQyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjJkZWRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNlYmNjZDFcclxufVxyXG4ucGFuZWwtZGFuZ2VyPi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci10b3AtY29sb3I6I2ViY2NkMVxyXG59XHJcbi5wYW5lbC1kYW5nZXI+LnBhbmVsLWhlYWRpbmcgLmJhZGdle1xyXG4gICAgY29sb3I6I2YyZGVkZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2E5NDQ0MlxyXG59XHJcbi5wYW5lbC1kYW5nZXI+LnBhbmVsLWZvb3RlcisucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiNlYmNjZDFcclxufVxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHhcclxufVxyXG5cclxuLmlucHV0LXNtLC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4XHJcbn1cclxuc2VsZWN0LmlucHV0LXNtLHNlbGVjdC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OjMwcHhcclxufVxyXG50ZXh0YXJlYS5pbnB1dC1zbSx0ZXh0YXJlYS5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2wsc2VsZWN0W211bHRpcGxlXS5pbnB1dC1zbSxzZWxlY3RbbXVsdGlwbGVdLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDphdXRvXHJcbn1cclxuLmlucHV0LWxnLC5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6NDZweDtcclxuICAgIHBhZGRpbmc6MTBweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czo2cHhcclxufVxyXG5zZWxlY3QuaW5wdXQtbGcsc2VsZWN0LmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDo0NnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6NDZweFxyXG59XHJcbnRleHRhcmVhLmlucHV0LWxnLHRleHRhcmVhLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbCxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWxnLHNlbGVjdFttdWx0aXBsZV0uZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OmF1dG9cclxufVxyXG4uaGFzLWZlZWRiYWNre1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmVcclxufVxyXG4uaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjQyLjVweFxyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgLmZvcm0tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG59XHJcbi5mb3JtLWlubGluZSAuZm9ybS1jb250cm9se1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlXHJcbn1cclxuLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wtc3RhdGlje1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2tcclxufVxyXG4uZm9ybS1pbmxpbmUgLmlucHV0LWdyb3Vwe1xyXG4gICAgZGlzcGxheTppbmxpbmUtdGFibGU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcclxufVxyXG4uZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hZGRvbiwuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4sLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6YXV0b1xyXG59XHJcbi5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOjEwMCVcclxufVxyXG4uZm9ybS1pbmxpbmUgLmNvbnRyb2wtbGFiZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcclxufVxyXG4uZm9ybS1pbmxpbmUgLnJhZGlvLC5mb3JtLWlubGluZSAuY2hlY2tib3h7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6MDtcclxuICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG59XHJcbi5mb3JtLWlubGluZSAucmFkaW8gbGFiZWwsLmZvcm0taW5saW5lIC5jaGVja2JveCBsYWJlbHtcclxuICAgIHBhZGRpbmctbGVmdDowXHJcbn1cclxuLmZvcm0taW5saW5lIC5yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXSwuZm9ybS1pbmxpbmUgLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDowXHJcbn1cclxuLmZvcm0taW5saW5lIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFja3tcclxuICAgIHRvcDowXHJcbn1cclxuXHJcbi5mb3JtLWhvcml6b250YWwgLnJhZGlvLC5mb3JtLWhvcml6b250YWwgLmNoZWNrYm94LC5mb3JtLWhvcml6b250YWwgLnJhZGlvLWlubGluZSwuZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveC1pbmxpbmV7XHJcbnBhZGRpbmctdG9wOjdweDtcclxubWFyZ2luLXRvcDowO1xyXG5tYXJnaW4tYm90dG9tOjBcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5yYWRpbywuZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveHtcclxubWluLWhlaWdodDoyN3B4XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cHtcclxubWFyZ2luLXJpZ2h0Oi0xNXB4O1xyXG5tYXJnaW4tbGVmdDotMTVweFxyXG59XHJcblxyXG4uaGVscC1ibG9ja3tcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGNvbG9yOiM3MzczNzNcclxufVxyXG4uaGFzLWVycm9yIC5oZWxwLWJsb2NrLC5oYXMtZXJyb3IgLmNvbnRyb2wtbGFiZWwsLmhhcy1lcnJvciAucmFkaW8sLmhhcy1lcnJvciAuY2hlY2tib3gsLmhhcy1lcnJvciAucmFkaW8taW5saW5lLC5oYXMtZXJyb3IgLmNoZWNrYm94LWlubGluZSwuaGFzLWVycm9yLnJhZGlvIGxhYmVsLC5oYXMtZXJyb3IuY2hlY2tib3ggbGFiZWwsLmhhcy1lcnJvci5yYWRpby1pbmxpbmUgbGFiZWwsLmhhcy1lcnJvci5jaGVja2JveC1pbmxpbmUgbGFiZWx7XHJcbiAgICBjb2xvcjojYTk0NDQyXHJcbn1cclxuLmhhcy1zdWNjZXNzIC5oZWxwLWJsb2NrLC5oYXMtc3VjY2VzcyAuY29udHJvbC1sYWJlbCwuaGFzLXN1Y2Nlc3MgLnJhZGlvLC5oYXMtc3VjY2VzcyAuY2hlY2tib3gsLmhhcy1zdWNjZXNzIC5yYWRpby1pbmxpbmUsLmhhcy1zdWNjZXNzIC5jaGVja2JveC1pbmxpbmUsLmhhcy1zdWNjZXNzLnJhZGlvIGxhYmVsLC5oYXMtc3VjY2Vzcy5jaGVja2JveCBsYWJlbCwuaGFzLXN1Y2Nlc3MucmFkaW8taW5saW5lIGxhYmVsLC5oYXMtc3VjY2Vzcy5jaGVja2JveC1pbmxpbmUgbGFiZWx7XHJcbiAgICBjb2xvcjojM2M3NjNkXHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDotMTVweFxyXG59XHJcbi5jb2wteHMtMSwuY29sLXNtLTEsLmNvbC1tZC0xLC5jb2wtbGctMSwuY29sLXhzLTIsLmNvbC1zbS0yLC5jb2wtbWQtMiwuY29sLWxnLTIsLmNvbC14cy0zLC5jb2wtc20tMywuY29sLW1kLTMsLmNvbC1sZy0zLC5jb2wteHMtNCwuY29sLXNtLTQsLmNvbC1tZC00LC5jb2wtbGctNCwuY29sLXhzLTUsLmNvbC1zbS01LC5jb2wtbWQtNSwuY29sLWxnLTUsLmNvbC14cy02LC5jb2wtc20tNiwuY29sLW1kLTYsLmNvbC1sZy02LC5jb2wteHMtNywuY29sLXNtLTcsLmNvbC1tZC03LC5jb2wtbGctNywuY29sLXhzLTgsLmNvbC1zbS04LC5jb2wtbWQtOCwuY29sLWxnLTgsLmNvbC14cy05LC5jb2wtc20tOSwuY29sLW1kLTksLmNvbC1sZy05LC5jb2wteHMtMTAsLmNvbC1zbS0xMCwuY29sLW1kLTEwLC5jb2wtbGctMTAsLmNvbC14cy0xMSwuY29sLXNtLTExLC5jb2wtbWQtMTEsLmNvbC1sZy0xMSwuY29sLXhzLTEyLC5jb2wtc20tMTIsLmNvbC1tZC0xMiwuY29sLWxnLTEye1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OjFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4XHJcbn1cclxuLmNvbC14cy0xLC5jb2wteHMtMiwuY29sLXhzLTMsLmNvbC14cy00LC5jb2wteHMtNSwuY29sLXhzLTYsLmNvbC14cy03LC5jb2wteHMtOCwuY29sLXhzLTksLmNvbC14cy0xMCwuY29sLXhzLTExLC5jb2wteHMtMTJ7XHJcbiAgICBmbG9hdDpsZWZ0XHJcbn1cclxuLmNvbC14cy0xMntcclxuICAgIHdpZHRoOjEwMCVcclxufVxyXG4uY29sLXhzLTExe1xyXG4gICAgd2lkdGg6OTEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy0xMHtcclxuICAgIHdpZHRoOjgzLjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtOXtcclxuICAgIHdpZHRoOjc1JVxyXG59XHJcbi5jb2wteHMtOHtcclxuICAgIHdpZHRoOjY2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtN3tcclxuICAgIHdpZHRoOjU4LjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtNntcclxuICAgIHdpZHRoOjUwJVxyXG59XHJcbi5jb2wteHMtNXtcclxuICAgIHdpZHRoOjQxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtNHtcclxuICAgIHdpZHRoOjMzLjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtM3tcclxuICAgIHdpZHRoOjI1JVxyXG59XHJcbi5jb2wteHMtMntcclxuICAgIHdpZHRoOjE2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtMXtcclxuICAgIHdpZHRoOjguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdWxsLTEye1xyXG4gICAgcmlnaHQ6MTAwJVxyXG59XHJcbi5jb2wteHMtcHVsbC0xMXtcclxuICAgIHJpZ2h0OjkxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVsbC0xMHtcclxuICAgIHJpZ2h0OjgzLjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtcHVsbC05e1xyXG4gICAgcmlnaHQ6NzUlXHJcbn1cclxuLmNvbC14cy1wdWxsLTh7XHJcbiAgICByaWdodDo2Ni42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1bGwtN3tcclxuICAgIHJpZ2h0OjU4LjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtcHVsbC02e1xyXG4gICAgcmlnaHQ6NTAlXHJcbn1cclxuLmNvbC14cy1wdWxsLTV7XHJcbiAgICByaWdodDo0MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1bGwtNHtcclxuICAgIHJpZ2h0OjMzLjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtcHVsbC0ze1xyXG4gICAgcmlnaHQ6MjUlXHJcbn1cclxuLmNvbC14cy1wdWxsLTJ7XHJcbiAgICByaWdodDoxNi42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1bGwtMXtcclxuICAgIHJpZ2h0OjguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdWxsLTB7XHJcbiAgICByaWdodDphdXRvXHJcbn1cclxuLmNvbC14cy1wdXNoLTEye1xyXG4gICAgbGVmdDoxMDAlXHJcbn1cclxuLmNvbC14cy1wdXNoLTExe1xyXG4gICAgbGVmdDo5MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1c2gtMTB7XHJcbiAgICBsZWZ0OjgzLjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtcHVzaC05e1xyXG4gICAgbGVmdDo3NSVcclxufVxyXG4uY29sLXhzLXB1c2gtOHtcclxuICAgIGxlZnQ6NjYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1wdXNoLTd7XHJcbiAgICBsZWZ0OjU4LjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtcHVzaC02e1xyXG4gICAgbGVmdDo1MCVcclxufVxyXG4uY29sLXhzLXB1c2gtNXtcclxuICAgIGxlZnQ6NDEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1wdXNoLTR7XHJcbiAgICBsZWZ0OjMzLjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtcHVzaC0ze1xyXG4gICAgbGVmdDoyNSVcclxufVxyXG4uY29sLXhzLXB1c2gtMntcclxuICAgIGxlZnQ6MTYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1wdXNoLTF7XHJcbiAgICBsZWZ0OjguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdXNoLTB7XHJcbiAgICBsZWZ0OmF1dG9cclxufVxyXG4uY29sLXhzLW9mZnNldC0xMntcclxuICAgIG1hcmdpbi1sZWZ0OjEwMCVcclxufVxyXG4uY29sLXhzLW9mZnNldC0xMXtcclxuICAgIG1hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTEwe1xyXG4gICAgbWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtOXtcclxuICAgIG1hcmdpbi1sZWZ0Ojc1JVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTh7XHJcbiAgICBtYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLW9mZnNldC03e1xyXG4gICAgbWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtNntcclxuICAgIG1hcmdpbi1sZWZ0OjUwJVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTV7XHJcbiAgICBtYXJnaW4tbGVmdDo0MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLW9mZnNldC00e1xyXG4gICAgbWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtM3tcclxuICAgIG1hcmdpbi1sZWZ0OjI1JVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTJ7XHJcbiAgICBtYXJnaW4tbGVmdDoxNi42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLW9mZnNldC0xe1xyXG4gICAgbWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLW9mZnNldC0we1xyXG4gICAgbWFyZ2luLWxlZnQ6MFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5jb2wtc20tMSwuY29sLXNtLTIsLmNvbC1zbS0zLC5jb2wtc20tNCwuY29sLXNtLTUsLmNvbC1zbS02LC5jb2wtc20tNywuY29sLXNtLTgsLmNvbC1zbS05LC5jb2wtc20tMTAsLmNvbC1zbS0xMSwuY29sLXNtLTEye1xyXG4gICAgICAgIGZsb2F0OmxlZnRcclxuICAgIH1cclxuICAgIC5jb2wtc20tMTJ7XHJcbiAgICAgICAgd2lkdGg6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS0xMXtcclxuICAgICAgICB3aWR0aDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tMTB7XHJcbiAgICAgICAgd2lkdGg6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTl7XHJcbiAgICAgICAgd2lkdGg6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTh7XHJcbiAgICAgICAgd2lkdGg6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTd7XHJcbiAgICAgICAgd2lkdGg6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTZ7XHJcbiAgICAgICAgd2lkdGg6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTV7XHJcbiAgICAgICAgd2lkdGg6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTR7XHJcbiAgICAgICAgd2lkdGg6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTN7XHJcbiAgICAgICAgd2lkdGg6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTJ7XHJcbiAgICAgICAgd2lkdGg6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTF7XHJcbiAgICAgICAgd2lkdGg6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0xMntcclxuICAgICAgICByaWdodDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtMTF7XHJcbiAgICAgICAgcmlnaHQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtMTB7XHJcbiAgICAgICAgcmlnaHQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtOXtcclxuICAgICAgICByaWdodDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC04e1xyXG4gICAgICAgIHJpZ2h0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTd7XHJcbiAgICAgICAgcmlnaHQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtNntcclxuICAgICAgICByaWdodDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC01e1xyXG4gICAgICAgIHJpZ2h0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTR7XHJcbiAgICAgICAgcmlnaHQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtM3tcclxuICAgICAgICByaWdodDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0ye1xyXG4gICAgICAgIHJpZ2h0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTF7XHJcbiAgICAgICAgcmlnaHQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0we1xyXG4gICAgICAgIHJpZ2h0OmF1dG9cclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC0xMntcclxuICAgICAgICBsZWZ0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC0xMXtcclxuICAgICAgICBsZWZ0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTEwe1xyXG4gICAgICAgIGxlZnQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtOXtcclxuICAgICAgICBsZWZ0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTh7XHJcbiAgICAgICAgbGVmdDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC03e1xyXG4gICAgICAgIGxlZnQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtNntcclxuICAgICAgICBsZWZ0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTV7XHJcbiAgICAgICAgbGVmdDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC00e1xyXG4gICAgICAgIGxlZnQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtM3tcclxuICAgICAgICBsZWZ0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTJ7XHJcbiAgICAgICAgbGVmdDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC0xe1xyXG4gICAgICAgIGxlZnQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC0we1xyXG4gICAgICAgIGxlZnQ6YXV0b1xyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtMTJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtMTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0xMHtcclxuICAgICAgICBtYXJnaW4tbGVmdDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC04e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtN3tcclxuICAgICAgICBtYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTZ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC01e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtNHtcclxuICAgICAgICBtYXJnaW4tbGVmdDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0ye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtMHtcclxuICAgICAgICBtYXJnaW4tbGVmdDowXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpe1xyXG4gICAgLmNvbC1tZC0xLC5jb2wtbWQtMiwuY29sLW1kLTMsLmNvbC1tZC00LC5jb2wtbWQtNSwuY29sLW1kLTYsLmNvbC1tZC03LC5jb2wtbWQtOCwuY29sLW1kLTksLmNvbC1tZC0xMCwuY29sLW1kLTExLC5jb2wtbWQtMTJ7XHJcbiAgICAgICAgZmxvYXQ6bGVmdFxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0xMntcclxuICAgICAgICB3aWR0aDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTExe1xyXG4gICAgICAgIHdpZHRoOjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0xMHtcclxuICAgICAgICB3aWR0aDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtOXtcclxuICAgICAgICB3aWR0aDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtOHtcclxuICAgICAgICB3aWR0aDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtN3tcclxuICAgICAgICB3aWR0aDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtNntcclxuICAgICAgICB3aWR0aDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtNXtcclxuICAgICAgICB3aWR0aDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtNHtcclxuICAgICAgICB3aWR0aDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtM3tcclxuICAgICAgICB3aWR0aDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtMntcclxuICAgICAgICB3aWR0aDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtMXtcclxuICAgICAgICB3aWR0aDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTEye1xyXG4gICAgICAgIHJpZ2h0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC0xMXtcclxuICAgICAgICByaWdodDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC0xMHtcclxuICAgICAgICByaWdodDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC05e1xyXG4gICAgICAgIHJpZ2h0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTh7XHJcbiAgICAgICAgcmlnaHQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtN3tcclxuICAgICAgICByaWdodDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC02e1xyXG4gICAgICAgIHJpZ2h0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTV7XHJcbiAgICAgICAgcmlnaHQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtNHtcclxuICAgICAgICByaWdodDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC0ze1xyXG4gICAgICAgIHJpZ2h0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTJ7XHJcbiAgICAgICAgcmlnaHQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtMXtcclxuICAgICAgICByaWdodDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTB7XHJcbiAgICAgICAgcmlnaHQ6YXV0b1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTEye1xyXG4gICAgICAgIGxlZnQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTExe1xyXG4gICAgICAgIGxlZnQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMTB7XHJcbiAgICAgICAgbGVmdDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC05e1xyXG4gICAgICAgIGxlZnQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtOHtcclxuICAgICAgICBsZWZ0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTd7XHJcbiAgICAgICAgbGVmdDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC02e1xyXG4gICAgICAgIGxlZnQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtNXtcclxuICAgICAgICBsZWZ0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTR7XHJcbiAgICAgICAgbGVmdDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC0ze1xyXG4gICAgICAgIGxlZnQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMntcclxuICAgICAgICBsZWZ0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTF7XHJcbiAgICAgICAgbGVmdDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTB7XHJcbiAgICAgICAgbGVmdDphdXRvXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC0xMntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC0xMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTEwe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtOXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTh7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC03e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtNntcclxuICAgICAgICBtYXJnaW4tbGVmdDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC00e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtM3tcclxuICAgICAgICBtYXJnaW4tbGVmdDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC0xe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC0we1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpe1xyXG4gICAgLmNvbC1sZy0xLC5jb2wtbGctMiwuY29sLWxnLTMsLmNvbC1sZy00LC5jb2wtbGctNSwuY29sLWxnLTYsLmNvbC1sZy03LC5jb2wtbGctOCwuY29sLWxnLTksLmNvbC1sZy0xMCwuY29sLWxnLTExLC5jb2wtbGctMTJ7XHJcbiAgICAgICAgZmxvYXQ6bGVmdFxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy0xMntcclxuICAgICAgICB3aWR0aDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTExe1xyXG4gICAgICAgIHdpZHRoOjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy0xMHtcclxuICAgICAgICB3aWR0aDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctOXtcclxuICAgICAgICB3aWR0aDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctOHtcclxuICAgICAgICB3aWR0aDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctN3tcclxuICAgICAgICB3aWR0aDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctNntcclxuICAgICAgICB3aWR0aDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctNXtcclxuICAgICAgICB3aWR0aDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctNHtcclxuICAgICAgICB3aWR0aDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctM3tcclxuICAgICAgICB3aWR0aDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctMntcclxuICAgICAgICB3aWR0aDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctMXtcclxuICAgICAgICB3aWR0aDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTEye1xyXG4gICAgICAgIHJpZ2h0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC0xMXtcclxuICAgICAgICByaWdodDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC0xMHtcclxuICAgICAgICByaWdodDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC05e1xyXG4gICAgICAgIHJpZ2h0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTh7XHJcbiAgICAgICAgcmlnaHQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtN3tcclxuICAgICAgICByaWdodDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC02e1xyXG4gICAgICAgIHJpZ2h0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTV7XHJcbiAgICAgICAgcmlnaHQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtNHtcclxuICAgICAgICByaWdodDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC0ze1xyXG4gICAgICAgIHJpZ2h0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTJ7XHJcbiAgICAgICAgcmlnaHQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtMXtcclxuICAgICAgICByaWdodDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTB7XHJcbiAgICAgICAgcmlnaHQ6YXV0b1xyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTEye1xyXG4gICAgICAgIGxlZnQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTExe1xyXG4gICAgICAgIGxlZnQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMTB7XHJcbiAgICAgICAgbGVmdDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC05e1xyXG4gICAgICAgIGxlZnQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtOHtcclxuICAgICAgICBsZWZ0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTd7XHJcbiAgICAgICAgbGVmdDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC02e1xyXG4gICAgICAgIGxlZnQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtNXtcclxuICAgICAgICBsZWZ0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTR7XHJcbiAgICAgICAgbGVmdDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC0ze1xyXG4gICAgICAgIGxlZnQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMntcclxuICAgICAgICBsZWZ0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTF7XHJcbiAgICAgICAgbGVmdDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTB7XHJcbiAgICAgICAgbGVmdDphdXRvXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC0xMntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC0xMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTEwe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtOXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTh7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC03e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtNntcclxuICAgICAgICBtYXJnaW4tbGVmdDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC00e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtM3tcclxuICAgICAgICBtYXJnaW4tbGVmdDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC0xe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC0we1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBcclxuICAgIH1cclxufVxyXG5cclxuLmNvbC14cy0xLC5jb2wtc20tMSwuY29sLW1kLTEsLmNvbC1sZy0xLC5jb2wteHMtMiwuY29sLXNtLTIsLmNvbC1tZC0yLC5jb2wtbGctMiwuY29sLXhzLTMsLmNvbC1zbS0zLC5jb2wtbWQtMywuY29sLWxnLTMsLmNvbC14cy00LC5jb2wtc20tNCwuY29sLW1kLTQsLmNvbC1sZy00LC5jb2wteHMtNSwuY29sLXNtLTUsLmNvbC1tZC01LC5jb2wtbGctNSwuY29sLXhzLTYsLmNvbC1zbS02LC5jb2wtbWQtNiwuY29sLWxnLTYsLmNvbC14cy03LC5jb2wtc20tNywuY29sLW1kLTcsLmNvbC1sZy03LC5jb2wteHMtOCwuY29sLXNtLTgsLmNvbC1tZC04LC5jb2wtbGctOCwuY29sLXhzLTksLmNvbC1zbS05LC5jb2wtbWQtOSwuY29sLWxnLTksLmNvbC14cy0xMCwuY29sLXNtLTEwLC5jb2wtbWQtMTAsLmNvbC1sZy0xMCwuY29sLXhzLTExLC5jb2wtc20tMTEsLmNvbC1tZC0xMSwuY29sLWxnLTExLC5jb2wteHMtMTIsLmNvbC1zbS0xMiwuY29sLW1kLTEyLC5jb2wtbGctMTJ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6MXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjE1cHhcclxufVxyXG4uY29sLXhzLTEsLmNvbC14cy0yLC5jb2wteHMtMywuY29sLXhzLTQsLmNvbC14cy01LC5jb2wteHMtNiwuY29sLXhzLTcsLmNvbC14cy04LC5jb2wteHMtOSwuY29sLXhzLTEwLC5jb2wteHMtMTEsLmNvbC14cy0xMntcclxuICAgIGZsb2F0OmxlZnRcclxufVxyXG4uY29sLXhzLTEye1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbi5jb2wteHMtMTF7XHJcbiAgICB3aWR0aDo5MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLTEwe1xyXG4gICAgd2lkdGg6ODMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy05e1xyXG4gICAgd2lkdGg6NzUlXHJcbn1cclxuLmNvbC14cy04e1xyXG4gICAgd2lkdGg6NjYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy03e1xyXG4gICAgd2lkdGg6NTguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy02e1xyXG4gICAgd2lkdGg6NTAlXHJcbn1cclxuLmNvbC14cy01e1xyXG4gICAgd2lkdGg6NDEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy00e1xyXG4gICAgd2lkdGg6MzMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy0ze1xyXG4gICAgd2lkdGg6MjUlXHJcbn1cclxuLmNvbC14cy0ye1xyXG4gICAgd2lkdGg6MTYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy0xe1xyXG4gICAgd2lkdGg6OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1bGwtMTJ7XHJcbiAgICByaWdodDoxMDAlXHJcbn1cclxuLmNvbC14cy1wdWxsLTExe1xyXG4gICAgcmlnaHQ6OTEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1wdWxsLTEwe1xyXG4gICAgcmlnaHQ6ODMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdWxsLTl7XHJcbiAgICByaWdodDo3NSVcclxufVxyXG4uY29sLXhzLXB1bGwtOHtcclxuICAgIHJpZ2h0OjY2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVsbC03e1xyXG4gICAgcmlnaHQ6NTguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdWxsLTZ7XHJcbiAgICByaWdodDo1MCVcclxufVxyXG4uY29sLXhzLXB1bGwtNXtcclxuICAgIHJpZ2h0OjQxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVsbC00e1xyXG4gICAgcmlnaHQ6MzMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdWxsLTN7XHJcbiAgICByaWdodDoyNSVcclxufVxyXG4uY29sLXhzLXB1bGwtMntcclxuICAgIHJpZ2h0OjE2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVsbC0xe1xyXG4gICAgcmlnaHQ6OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1bGwtMHtcclxuICAgIHJpZ2h0OmF1dG9cclxufVxyXG4uY29sLXhzLXB1c2gtMTJ7XHJcbiAgICBsZWZ0OjEwMCVcclxufVxyXG4uY29sLXhzLXB1c2gtMTF7XHJcbiAgICBsZWZ0OjkxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVzaC0xMHtcclxuICAgIGxlZnQ6ODMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdXNoLTl7XHJcbiAgICBsZWZ0Ojc1JVxyXG59XHJcbi5jb2wteHMtcHVzaC04e1xyXG4gICAgbGVmdDo2Ni42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1c2gtN3tcclxuICAgIGxlZnQ6NTguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdXNoLTZ7XHJcbiAgICBsZWZ0OjUwJVxyXG59XHJcbi5jb2wteHMtcHVzaC01e1xyXG4gICAgbGVmdDo0MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1c2gtNHtcclxuICAgIGxlZnQ6MzMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdXNoLTN7XHJcbiAgICBsZWZ0OjI1JVxyXG59XHJcbi5jb2wteHMtcHVzaC0ye1xyXG4gICAgbGVmdDoxNi42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1c2gtMXtcclxuICAgIGxlZnQ6OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1c2gtMHtcclxuICAgIGxlZnQ6YXV0b1xyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTEye1xyXG4gICAgbWFyZ2luLWxlZnQ6MTAwJVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTExe1xyXG4gICAgbWFyZ2luLWxlZnQ6OTEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMTB7XHJcbiAgICBtYXJnaW4tbGVmdDo4My4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLW9mZnNldC05e1xyXG4gICAgbWFyZ2luLWxlZnQ6NzUlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtOHtcclxuICAgIG1hcmdpbi1sZWZ0OjY2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTd7XHJcbiAgICBtYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLW9mZnNldC02e1xyXG4gICAgbWFyZ2luLWxlZnQ6NTAlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtNXtcclxuICAgIG1hcmdpbi1sZWZ0OjQxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTR7XHJcbiAgICBtYXJnaW4tbGVmdDozMy4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLW9mZnNldC0ze1xyXG4gICAgbWFyZ2luLWxlZnQ6MjUlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMntcclxuICAgIG1hcmdpbi1sZWZ0OjE2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTF7XHJcbiAgICBtYXJnaW4tbGVmdDo4LjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTB7XHJcbiAgICBtYXJnaW4tbGVmdDowXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmNvbC1zbS0xLC5jb2wtc20tMiwuY29sLXNtLTMsLmNvbC1zbS00LC5jb2wtc20tNSwuY29sLXNtLTYsLmNvbC1zbS03LC5jb2wtc20tOCwuY29sLXNtLTksLmNvbC1zbS0xMCwuY29sLXNtLTExLC5jb2wtc20tMTJ7XHJcbiAgICAgICAgZmxvYXQ6bGVmdFxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS0xMntcclxuICAgICAgICB3aWR0aDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTExe1xyXG4gICAgICAgIHdpZHRoOjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS0xMHtcclxuICAgICAgICB3aWR0aDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tOXtcclxuICAgICAgICB3aWR0aDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tOHtcclxuICAgICAgICB3aWR0aDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tN3tcclxuICAgICAgICB3aWR0aDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tNntcclxuICAgICAgICB3aWR0aDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tNXtcclxuICAgICAgICB3aWR0aDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tNHtcclxuICAgICAgICB3aWR0aDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tM3tcclxuICAgICAgICB3aWR0aDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tMntcclxuICAgICAgICB3aWR0aDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tMXtcclxuICAgICAgICB3aWR0aDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTEye1xyXG4gICAgICAgIHJpZ2h0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0xMXtcclxuICAgICAgICByaWdodDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0xMHtcclxuICAgICAgICByaWdodDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC05e1xyXG4gICAgICAgIHJpZ2h0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTh7XHJcbiAgICAgICAgcmlnaHQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtN3tcclxuICAgICAgICByaWdodDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC02e1xyXG4gICAgICAgIHJpZ2h0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTV7XHJcbiAgICAgICAgcmlnaHQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtNHtcclxuICAgICAgICByaWdodDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0ze1xyXG4gICAgICAgIHJpZ2h0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTJ7XHJcbiAgICAgICAgcmlnaHQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtMXtcclxuICAgICAgICByaWdodDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTB7XHJcbiAgICAgICAgcmlnaHQ6YXV0b1xyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTEye1xyXG4gICAgICAgIGxlZnQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTExe1xyXG4gICAgICAgIGxlZnQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtMTB7XHJcbiAgICAgICAgbGVmdDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC05e1xyXG4gICAgICAgIGxlZnQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtOHtcclxuICAgICAgICBsZWZ0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTd7XHJcbiAgICAgICAgbGVmdDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC02e1xyXG4gICAgICAgIGxlZnQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtNXtcclxuICAgICAgICBsZWZ0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTR7XHJcbiAgICAgICAgbGVmdDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC0ze1xyXG4gICAgICAgIGxlZnQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtMntcclxuICAgICAgICBsZWZ0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTF7XHJcbiAgICAgICAgbGVmdDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTB7XHJcbiAgICAgICAgbGVmdDphdXRvXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0xMntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0xMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTEwe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtOXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTh7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC03e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtNntcclxuICAgICAgICBtYXJnaW4tbGVmdDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC00e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtM3tcclxuICAgICAgICBtYXJnaW4tbGVmdDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0xe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0we1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7XHJcbiAgICAuY29sLW1kLTEsLmNvbC1tZC0yLC5jb2wtbWQtMywuY29sLW1kLTQsLmNvbC1tZC01LC5jb2wtbWQtNiwuY29sLW1kLTcsLmNvbC1tZC04LC5jb2wtbWQtOSwuY29sLW1kLTEwLC5jb2wtbWQtMTEsLmNvbC1tZC0xMntcclxuICAgICAgICBmbG9hdDpsZWZ0XHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTEye1xyXG4gICAgICAgIHdpZHRoOjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtMTF7XHJcbiAgICAgICAgd2lkdGg6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTEwe1xyXG4gICAgICAgIHdpZHRoOjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC05e1xyXG4gICAgICAgIHdpZHRoOjc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC04e1xyXG4gICAgICAgIHdpZHRoOjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC03e1xyXG4gICAgICAgIHdpZHRoOjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC02e1xyXG4gICAgICAgIHdpZHRoOjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC01e1xyXG4gICAgICAgIHdpZHRoOjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC00e1xyXG4gICAgICAgIHdpZHRoOjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0ze1xyXG4gICAgICAgIHdpZHRoOjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0ye1xyXG4gICAgICAgIHdpZHRoOjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0xe1xyXG4gICAgICAgIHdpZHRoOjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtMTJ7XHJcbiAgICAgICAgcmlnaHQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTExe1xyXG4gICAgICAgIHJpZ2h0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTEwe1xyXG4gICAgICAgIHJpZ2h0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTl7XHJcbiAgICAgICAgcmlnaHQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtOHtcclxuICAgICAgICByaWdodDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC03e1xyXG4gICAgICAgIHJpZ2h0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTZ7XHJcbiAgICAgICAgcmlnaHQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtNXtcclxuICAgICAgICByaWdodDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC00e1xyXG4gICAgICAgIHJpZ2h0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTN7XHJcbiAgICAgICAgcmlnaHQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtMntcclxuICAgICAgICByaWdodDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC0xe1xyXG4gICAgICAgIHJpZ2h0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtMHtcclxuICAgICAgICByaWdodDphdXRvXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMTJ7XHJcbiAgICAgICAgbGVmdDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMTF7XHJcbiAgICAgICAgbGVmdDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC0xMHtcclxuICAgICAgICBsZWZ0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTl7XHJcbiAgICAgICAgbGVmdDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC04e1xyXG4gICAgICAgIGxlZnQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtN3tcclxuICAgICAgICBsZWZ0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTZ7XHJcbiAgICAgICAgbGVmdDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC01e1xyXG4gICAgICAgIGxlZnQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtNHtcclxuICAgICAgICBsZWZ0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTN7XHJcbiAgICAgICAgbGVmdDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC0ye1xyXG4gICAgICAgIGxlZnQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMXtcclxuICAgICAgICBsZWZ0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMHtcclxuICAgICAgICBsZWZ0OmF1dG9cclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTEye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTExe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtMTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC05e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtOHtcclxuICAgICAgICBtYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC02e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtNXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC0ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtMntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7XHJcbiAgICAuY29sLWxnLTEsLmNvbC1sZy0yLC5jb2wtbGctMywuY29sLWxnLTQsLmNvbC1sZy01LC5jb2wtbGctNiwuY29sLWxnLTcsLmNvbC1sZy04LC5jb2wtbGctOSwuY29sLWxnLTEwLC5jb2wtbGctMTEsLmNvbC1sZy0xMntcclxuICAgICAgICBmbG9hdDpsZWZ0XHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTEye1xyXG4gICAgICAgIHdpZHRoOjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctMTF7XHJcbiAgICAgICAgd2lkdGg6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTEwe1xyXG4gICAgICAgIHdpZHRoOjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy05e1xyXG4gICAgICAgIHdpZHRoOjc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy04e1xyXG4gICAgICAgIHdpZHRoOjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy03e1xyXG4gICAgICAgIHdpZHRoOjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy02e1xyXG4gICAgICAgIHdpZHRoOjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy01e1xyXG4gICAgICAgIHdpZHRoOjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy00e1xyXG4gICAgICAgIHdpZHRoOjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy0ze1xyXG4gICAgICAgIHdpZHRoOjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy0ye1xyXG4gICAgICAgIHdpZHRoOjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy0xe1xyXG4gICAgICAgIHdpZHRoOjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtMTJ7XHJcbiAgICAgICAgcmlnaHQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTExe1xyXG4gICAgICAgIHJpZ2h0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTEwe1xyXG4gICAgICAgIHJpZ2h0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTl7XHJcbiAgICAgICAgcmlnaHQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtOHtcclxuICAgICAgICByaWdodDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC03e1xyXG4gICAgICAgIHJpZ2h0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTZ7XHJcbiAgICAgICAgcmlnaHQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtNXtcclxuICAgICAgICByaWdodDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC00e1xyXG4gICAgICAgIHJpZ2h0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTN7XHJcbiAgICAgICAgcmlnaHQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtMntcclxuICAgICAgICByaWdodDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC0xe1xyXG4gICAgICAgIHJpZ2h0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtMHtcclxuICAgICAgICByaWdodDphdXRvXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMTJ7XHJcbiAgICAgICAgbGVmdDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMTF7XHJcbiAgICAgICAgbGVmdDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC0xMHtcclxuICAgICAgICBsZWZ0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTl7XHJcbiAgICAgICAgbGVmdDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC04e1xyXG4gICAgICAgIGxlZnQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtN3tcclxuICAgICAgICBsZWZ0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTZ7XHJcbiAgICAgICAgbGVmdDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC01e1xyXG4gICAgICAgIGxlZnQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtNHtcclxuICAgICAgICBsZWZ0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTN7XHJcbiAgICAgICAgbGVmdDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC0ye1xyXG4gICAgICAgIGxlZnQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMXtcclxuICAgICAgICBsZWZ0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMHtcclxuICAgICAgICBsZWZ0OmF1dG9cclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTEye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTExe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtMTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC05e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtOHtcclxuICAgICAgICBtYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC02e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtNXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC0ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtMntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MFxyXG4gICAgfVxyXG59XHJcbnRhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFxyXG59XHJcblxyXG4uY2VudGVyLWJsb2Nre1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0b1xyXG59XHJcbi5wdWxsLXJpZ2h0e1xyXG4gICAgZmxvYXQ6cmlnaHQhaW1wb3J0YW50XHJcbn1cclxuLnB1bGwtbGVmdHtcclxuICAgIGZsb2F0OmxlZnQhaW1wb3J0YW50XHJcbn1cclxuLmhpZGV7XHJcbiAgICBkaXNwbGF5Om5vbmUhaW1wb3J0YW50XHJcbn1cclxuLnNob3d7XHJcbiAgICBkaXNwbGF5OmJsb2NrIWltcG9ydGFudFxyXG59XHJcbi5pbnZpc2libGV7XHJcbiAgICB2aXNpYmlsaXR5OmhpZGRlblxyXG59XHJcbi50ZXh0LWhpZGV7XHJcbiAgICBmb250OjAvMCBhO1xyXG4gICAgY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjowXHJcbn1cclxuLmhpZGRlbntcclxuICAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnRcclxufVxyXG4uYWZmaXh7XHJcbiAgICBwb3NpdGlvbjpmaXhlZFxyXG59XHJcbkAtbXMtdmlld3BvcnR7XHJcbiAgICB3aWR0aDpkZXZpY2Utd2lkdGhcclxufVxyXG4udmlzaWJsZS14cywudmlzaWJsZS1zbSwudmlzaWJsZS1tZCwudmlzaWJsZS1sZ3tcclxuICAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnRcclxufVxyXG4udmlzaWJsZS14cy1ibG9jaywudmlzaWJsZS14cy1pbmxpbmUsLnZpc2libGUteHMtaW5saW5lLWJsb2NrLC52aXNpYmxlLXNtLWJsb2NrLC52aXNpYmxlLXNtLWlubGluZSwudmlzaWJsZS1zbS1pbmxpbmUtYmxvY2ssLnZpc2libGUtbWQtYmxvY2ssLnZpc2libGUtbWQtaW5saW5lLC52aXNpYmxlLW1kLWlubGluZS1ibG9jaywudmlzaWJsZS1sZy1ibG9jaywudmlzaWJsZS1sZy1pbmxpbmUsLnZpc2libGUtbGctaW5saW5lLWJsb2Nre1xyXG4gICAgZGlzcGxheTpub25lIWltcG9ydGFudFxyXG59XHJcblxyXG5cclxudGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50XHJcbn1cclxuY2FwdGlvbntcclxuICAgIHBhZGRpbmctdG9wOjhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjhweDtcclxuICAgIGNvbG9yOiM3Nzc7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnRcclxufVxyXG50aHtcclxuICAgIHRleHQtYWxpZ246bGVmdFxyXG59XHJcbi50YWJsZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweFxyXG59XHJcbi50YWJsZT50aGVhZD50cj50aCwudGFibGU+dGJvZHk+dHI+dGgsLnRhYmxlPnRmb290PnRyPnRoLC50YWJsZT50aGVhZD50cj50ZCwudGFibGU+dGJvZHk+dHI+dGQsLnRhYmxlPnRmb290PnRyPnRke1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQzO1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2RkZFxyXG59XHJcbi50YWJsZT50aGVhZD50cj50aHtcclxuICAgIHZlcnRpY2FsLWFsaWduOmJvdHRvbTtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNkZGRcclxufVxyXG4udGFibGU+Y2FwdGlvbit0aGVhZD50cjpmaXJzdC1jaGlsZD50aCwudGFibGU+Y29sZ3JvdXArdGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGgsLnRhYmxlPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkPnRoLC50YWJsZT5jYXB0aW9uK3RoZWFkPnRyOmZpcnN0LWNoaWxkPnRkLC50YWJsZT5jb2xncm91cCt0aGVhZD50cjpmaXJzdC1jaGlsZD50ZCwudGFibGU+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQ+dGR7XHJcbiAgICBib3JkZXItdG9wOjBcclxufVxyXG4udGFibGU+dGJvZHkrdGJvZHl7XHJcbiAgICBib3JkZXItdG9wOjJweCBzb2xpZCAjZGRkXHJcbn1cclxuLnRhYmxlIC50YWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZlxyXG59XHJcbi50YWJsZS1jb25kZW5zZWQ+dGhlYWQ+dHI+dGgsLnRhYmxlLWNvbmRlbnNlZD50Ym9keT50cj50aCwudGFibGUtY29uZGVuc2VkPnRmb290PnRyPnRoLC50YWJsZS1jb25kZW5zZWQ+dGhlYWQ+dHI+dGQsLnRhYmxlLWNvbmRlbnNlZD50Ym9keT50cj50ZCwudGFibGUtY29uZGVuc2VkPnRmb290PnRyPnRke1xyXG4gICAgcGFkZGluZzo1cHhcclxufVxyXG4udGFibGUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkZGRcclxufVxyXG4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGgsLnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRoLC50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aCwudGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQsLnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkLC50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2RkZFxyXG59XHJcbi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50aCwudGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGR7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOjJweFxyXG59XHJcbi50YWJsZS1zdHJpcGVkPnRib2R5PnRyOm50aC1jaGlsZChvZGQpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjlmOWY5XHJcbn1cclxuLnRhYmxlLWhvdmVyPnRib2R5PnRyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1XHJcbn1cclxudGFibGUgY29sW2NsYXNzKj1jb2wtXXtcclxuICAgIHBvc2l0aW9uOnN0YXRpYztcclxuICAgIGRpc3BsYXk6dGFibGUtY29sdW1uO1xyXG4gICAgZmxvYXQ6bm9uZVxyXG59XHJcbnRhYmxlIHRkW2NsYXNzKj1jb2wtXSx0YWJsZSB0aFtjbGFzcyo9Y29sLV17XHJcbiAgICBwb3NpdGlvbjpzdGF0aWM7XHJcbiAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICBmbG9hdDpub25lXHJcbn1cclxuLnRhYmxlPnRoZWFkPnRyPnRkLmFjdGl2ZSwudGFibGU+dGJvZHk+dHI+dGQuYWN0aXZlLC50YWJsZT50Zm9vdD50cj50ZC5hY3RpdmUsLnRhYmxlPnRoZWFkPnRyPnRoLmFjdGl2ZSwudGFibGU+dGJvZHk+dHI+dGguYWN0aXZlLC50YWJsZT50Zm9vdD50cj50aC5hY3RpdmUsLnRhYmxlPnRoZWFkPnRyLmFjdGl2ZT50ZCwudGFibGU+dGJvZHk+dHIuYWN0aXZlPnRkLC50YWJsZT50Zm9vdD50ci5hY3RpdmU+dGQsLnRhYmxlPnRoZWFkPnRyLmFjdGl2ZT50aCwudGFibGU+dGJvZHk+dHIuYWN0aXZlPnRoLC50YWJsZT50Zm9vdD50ci5hY3RpdmU+dGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjVcclxufVxyXG4udGFibGUtaG92ZXI+dGJvZHk+dHI+dGQuYWN0aXZlOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50cj50aC5hY3RpdmU6aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyLmFjdGl2ZTpob3Zlcj50ZCwudGFibGUtaG92ZXI+dGJvZHk+dHI6aG92ZXI+LmFjdGl2ZSwudGFibGUtaG92ZXI+dGJvZHk+dHIuYWN0aXZlOmhvdmVyPnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZThlOGU4XHJcbn1cclxuLnRhYmxlPnRoZWFkPnRyPnRkLnN1Y2Nlc3MsLnRhYmxlPnRib2R5PnRyPnRkLnN1Y2Nlc3MsLnRhYmxlPnRmb290PnRyPnRkLnN1Y2Nlc3MsLnRhYmxlPnRoZWFkPnRyPnRoLnN1Y2Nlc3MsLnRhYmxlPnRib2R5PnRyPnRoLnN1Y2Nlc3MsLnRhYmxlPnRmb290PnRyPnRoLnN1Y2Nlc3MsLnRhYmxlPnRoZWFkPnRyLnN1Y2Nlc3M+dGQsLnRhYmxlPnRib2R5PnRyLnN1Y2Nlc3M+dGQsLnRhYmxlPnRmb290PnRyLnN1Y2Nlc3M+dGQsLnRhYmxlPnRoZWFkPnRyLnN1Y2Nlc3M+dGgsLnRhYmxlPnRib2R5PnRyLnN1Y2Nlc3M+dGgsLnRhYmxlPnRmb290PnRyLnN1Y2Nlc3M+dGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZmYwZDhcclxufVxyXG4udGFibGUtaG92ZXI+dGJvZHk+dHI+dGQuc3VjY2Vzczpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHI+dGguc3VjY2Vzczpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHIuc3VjY2Vzczpob3Zlcj50ZCwudGFibGUtaG92ZXI+dGJvZHk+dHI6aG92ZXI+LnN1Y2Nlc3MsLnRhYmxlLWhvdmVyPnRib2R5PnRyLnN1Y2Nlc3M6aG92ZXI+dGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkMGU5YzZcclxufVxyXG4udGFibGU+dGhlYWQ+dHI+dGQuaW5mbywudGFibGU+dGJvZHk+dHI+dGQuaW5mbywudGFibGU+dGZvb3Q+dHI+dGQuaW5mbywudGFibGU+dGhlYWQ+dHI+dGguaW5mbywudGFibGU+dGJvZHk+dHI+dGguaW5mbywudGFibGU+dGZvb3Q+dHI+dGguaW5mbywudGFibGU+dGhlYWQ+dHIuaW5mbz50ZCwudGFibGU+dGJvZHk+dHIuaW5mbz50ZCwudGFibGU+dGZvb3Q+dHIuaW5mbz50ZCwudGFibGU+dGhlYWQ+dHIuaW5mbz50aCwudGFibGU+dGJvZHk+dHIuaW5mbz50aCwudGFibGU+dGZvb3Q+dHIuaW5mbz50aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Q5ZWRmN1xyXG59XHJcbi50YWJsZS1ob3Zlcj50Ym9keT50cj50ZC5pbmZvOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50cj50aC5pbmZvOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50ci5pbmZvOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uaW5mbywudGFibGUtaG92ZXI+dGJvZHk+dHIuaW5mbzpob3Zlcj50aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2M0ZTNmM1xyXG59XHJcbi50YWJsZT50aGVhZD50cj50ZC53YXJuaW5nLC50YWJsZT50Ym9keT50cj50ZC53YXJuaW5nLC50YWJsZT50Zm9vdD50cj50ZC53YXJuaW5nLC50YWJsZT50aGVhZD50cj50aC53YXJuaW5nLC50YWJsZT50Ym9keT50cj50aC53YXJuaW5nLC50YWJsZT50Zm9vdD50cj50aC53YXJuaW5nLC50YWJsZT50aGVhZD50ci53YXJuaW5nPnRkLC50YWJsZT50Ym9keT50ci53YXJuaW5nPnRkLC50YWJsZT50Zm9vdD50ci53YXJuaW5nPnRkLC50YWJsZT50aGVhZD50ci53YXJuaW5nPnRoLC50YWJsZT50Ym9keT50ci53YXJuaW5nPnRoLC50YWJsZT50Zm9vdD50ci53YXJuaW5nPnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmNmOGUzXHJcbn1cclxuLnRhYmxlLWhvdmVyPnRib2R5PnRyPnRkLndhcm5pbmc6aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyPnRoLndhcm5pbmc6aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyLndhcm5pbmc6aG92ZXI+dGQsLnRhYmxlLWhvdmVyPnRib2R5PnRyOmhvdmVyPi53YXJuaW5nLC50YWJsZS1ob3Zlcj50Ym9keT50ci53YXJuaW5nOmhvdmVyPnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmFmMmNjXHJcbn1cclxuLnRhYmxlPnRoZWFkPnRyPnRkLmRhbmdlciwudGFibGU+dGJvZHk+dHI+dGQuZGFuZ2VyLC50YWJsZT50Zm9vdD50cj50ZC5kYW5nZXIsLnRhYmxlPnRoZWFkPnRyPnRoLmRhbmdlciwudGFibGU+dGJvZHk+dHI+dGguZGFuZ2VyLC50YWJsZT50Zm9vdD50cj50aC5kYW5nZXIsLnRhYmxlPnRoZWFkPnRyLmRhbmdlcj50ZCwudGFibGU+dGJvZHk+dHIuZGFuZ2VyPnRkLC50YWJsZT50Zm9vdD50ci5kYW5nZXI+dGQsLnRhYmxlPnRoZWFkPnRyLmRhbmdlcj50aCwudGFibGU+dGJvZHk+dHIuZGFuZ2VyPnRoLC50YWJsZT50Zm9vdD50ci5kYW5nZXI+dGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMmRlZGVcclxufVxyXG4udGFibGUtaG92ZXI+dGJvZHk+dHI+dGQuZGFuZ2VyOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50cj50aC5kYW5nZXI6aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyLmRhbmdlcjpob3Zlcj50ZCwudGFibGUtaG92ZXI+dGJvZHk+dHI6aG92ZXI+LmRhbmdlciwudGFibGUtaG92ZXI+dGJvZHk+dHIuZGFuZ2VyOmhvdmVyPnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWJjY2NjXHJcbn1cclxuLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtaW4taGVpZ2h0Oi4wMSU7XHJcbiAgICBvdmVyZmxvdy14OmF1dG9cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6aGlkZGVuO1xyXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTotbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZGRkXHJcbiAgICB9XHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZT4udGFibGV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowXHJcbiAgICB9XHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZT4udGFibGU+dGhlYWQ+dHI+dGgsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlPnRib2R5PnRyPnRoLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZT50Zm9vdD50cj50aCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGU+dGhlYWQ+dHI+dGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlPnRib2R5PnRyPnRkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZT50Zm9vdD50cj50ZHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXBcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZHtcclxuICAgICAgICBib3JkZXI6MFxyXG4gICAgfVxyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmZpcnN0LWNoaWxkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50aDpmaXJzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGg6Zmlyc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkOmZpcnN0LWNoaWxkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZDpmaXJzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGQ6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6MFxyXG4gICAgfVxyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRoOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjBcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpsYXN0LWNoaWxkPnRoLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cjpsYXN0LWNoaWxkPnRoLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpsYXN0LWNoaWxkPnRkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cjpsYXN0LWNoaWxkPnRke1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206MFxyXG4gICAgfVxyXG59XHJcbmZpZWxkc2V0e1xyXG4gICAgbWluLXdpZHRoOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJvcmRlcjowXHJcbn1cclxubGVnZW5ke1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICBmb250LXNpemU6MjFweDtcclxuICAgIGxpbmUtaGVpZ2h0OmluaGVyaXQ7XHJcbiAgICBjb2xvcjojMzMzO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTVlNWU1XHJcbn1cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICBmb250LXdlaWdodDo3MDBcclxufVxyXG5pbnB1dFt0eXBlPXNlYXJjaF17XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94XHJcbn1cclxuaW5wdXRbdHlwZT1yYWRpb10saW5wdXRbdHlwZT1jaGVja2JveF17XHJcbiAgICBtYXJnaW46NHB4IDAgMDtcclxuICAgIG1hcmdpbi10b3A6MXB4IFxcOTtcclxuICAgIGxpbmUtaGVpZ2h0Om5vcm1hbFxyXG59XHJcbmlucHV0W3R5cGU9ZmlsZV17XHJcbiAgICBkaXNwbGF5OmJsb2NrXHJcbn1cclxuaW5wdXRbdHlwZT1yYW5nZV17XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbnNlbGVjdFttdWx0aXBsZV0sc2VsZWN0W3NpemVde1xyXG4gICAgaGVpZ2h0OmF1dG9cclxufVxyXG5pbnB1dFt0eXBlPWZpbGVdOmZvY3VzLGlucHV0W3R5cGU9cmFkaW9dOmZvY3VzLGlucHV0W3R5cGU9Y2hlY2tib3hdOmZvY3Vze1xyXG4gICAgb3V0bGluZTp0aGluIGRvdHRlZDtcclxuICAgIG91dGxpbmU6NXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6LTJweFxyXG59XHJcbm91dHB1dHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDo3cHg7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7XHJcbiAgICBjb2xvcjojNTU1XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjM0cHg7XHJcbiAgICBwYWRkaW5nOjZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQzO1xyXG4gICAgY29sb3I6IzU1NTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bm9uZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpO1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcclxuICAgIC1vLXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xyXG4gICAgdHJhbnNpdGlvbjpib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cyxib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXNcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYm9yZGVyLWNvbG9yOiM2NmFmZTk7XHJcbiAgICBvdXRsaW5lOjA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KTtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KVxyXG59XHJcbi5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjojOTk5O1xyXG4gICAgb3BhY2l0eToxXHJcbn1cclxuLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjojOTk5XHJcbn1cclxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiM5OTlcclxufVxyXG4uZm9ybS1jb250cm9sW2Rpc2FibGVkXSwuZm9ybS1jb250cm9sW3JlYWRvbmx5XSxmaWVsZHNldFtkaXNhYmxlZF0gLmZvcm0tY29udHJvbHtcclxuICAgIGN1cnNvcjpub3QtYWxsb3dlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcclxuICAgIG9wYWNpdHk6MVxyXG59XHJcbnRleHRhcmVhLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDphdXRvXHJcbn1cclxuaW5wdXRbdHlwZT1zZWFyY2hde1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmVcclxufVxyXG5pbnB1dFt0eXBlPWRhdGVdLGlucHV0W3R5cGU9dGltZV0saW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0saW5wdXRbdHlwZT1tb250aF17XHJcbiAgICBsaW5lLWhlaWdodDozNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS40Mjg1NzE0MyBcXDBcclxufVxyXG5pbnB1dFt0eXBlPWRhdGVdLmlucHV0LXNtLGlucHV0W3R5cGU9dGltZV0uaW5wdXQtc20saW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0uaW5wdXQtc20saW5wdXRbdHlwZT1tb250aF0uaW5wdXQtc217XHJcbiAgICBsaW5lLWhlaWdodDozMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS41IFxcMFxyXG59XHJcbmlucHV0W3R5cGU9ZGF0ZV0uaW5wdXQtbGcsaW5wdXRbdHlwZT10aW1lXS5pbnB1dC1sZyxpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXS5pbnB1dC1sZyxpbnB1dFt0eXBlPW1vbnRoXS5pbnB1dC1sZ3tcclxuICAgIGxpbmUtaGVpZ2h0OjQ2cHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjMzIFxcMFxyXG59XHJcbl86LW1zLWZ1bGxzY3JlZW4sOnJvb3QgaW5wdXRbdHlwZT1kYXRlXSxfOi1tcy1mdWxsc2NyZWVuLDpyb290IGlucHV0W3R5cGU9dGltZV0sXzotbXMtZnVsbHNjcmVlbiw6cm9vdCBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSxfOi1tcy1mdWxsc2NyZWVuLDpyb290IGlucHV0W3R5cGU9bW9udGhde1xyXG4gICAgbGluZS1oZWlnaHQ6MS40Mjg1NzE0M1xyXG59XHJcbl86LW1zLWZ1bGxzY3JlZW4uaW5wdXQtc20sOnJvb3QgaW5wdXRbdHlwZT1kYXRlXS5pbnB1dC1zbSxfOi1tcy1mdWxsc2NyZWVuLmlucHV0LXNtLDpyb290IGlucHV0W3R5cGU9dGltZV0uaW5wdXQtc20sXzotbXMtZnVsbHNjcmVlbi5pbnB1dC1zbSw6cm9vdCBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXS5pbnB1dC1zbSxfOi1tcy1mdWxsc2NyZWVuLmlucHV0LXNtLDpyb290IGlucHV0W3R5cGU9bW9udGhdLmlucHV0LXNte1xyXG4gICAgbGluZS1oZWlnaHQ6MS41XHJcbn1cclxuXzotbXMtZnVsbHNjcmVlbi5pbnB1dC1sZyw6cm9vdCBpbnB1dFt0eXBlPWRhdGVdLmlucHV0LWxnLF86LW1zLWZ1bGxzY3JlZW4uaW5wdXQtbGcsOnJvb3QgaW5wdXRbdHlwZT10aW1lXS5pbnB1dC1sZyxfOi1tcy1mdWxsc2NyZWVuLmlucHV0LWxnLDpyb290IGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLmlucHV0LWxnLF86LW1zLWZ1bGxzY3JlZW4uaW5wdXQtbGcsOnJvb3QgaW5wdXRbdHlwZT1tb250aF0uaW5wdXQtbGd7XHJcbiAgICBsaW5lLWhlaWdodDoxLjMzXHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHhcclxufVxyXG4ucmFkaW8sLmNoZWNrYm94e1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4XHJcbn1cclxuLnJhZGlvIGxhYmVsLC5jaGVja2JveCBsYWJlbHtcclxuICAgIG1pbi1oZWlnaHQ6MjBweDtcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgY3Vyc29yOnBvaW50ZXJcclxufVxyXG4ucmFkaW8gaW5wdXRbdHlwZT1yYWRpb10sLnJhZGlvLWlubGluZSBpbnB1dFt0eXBlPXJhZGlvXSwuY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0sLmNoZWNrYm94LWlubGluZSBpbnB1dFt0eXBlPWNoZWNrYm94XXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDo0cHggXFw5O1xyXG4gICAgbWFyZ2luLWxlZnQ6LTIwcHhcclxufVxyXG4ucmFkaW8rLnJhZGlvLC5jaGVja2JveCsuY2hlY2tib3h7XHJcbiAgICBtYXJnaW4tdG9wOi01cHhcclxufVxyXG4ucmFkaW8taW5saW5lLC5jaGVja2JveC1pbmxpbmV7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgY3Vyc29yOnBvaW50ZXJcclxufVxyXG4ucmFkaW8taW5saW5lKy5yYWRpby1pbmxpbmUsLmNoZWNrYm94LWlubGluZSsuY2hlY2tib3gtaW5saW5le1xyXG4gICAgbWFyZ2luLXRvcDowO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweFxyXG59XHJcbmlucHV0W3R5cGU9cmFkaW9dW2Rpc2FibGVkXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtkaXNhYmxlZF0saW5wdXRbdHlwZT1yYWRpb10uZGlzYWJsZWQsaW5wdXRbdHlwZT1jaGVja2JveF0uZGlzYWJsZWQsZmllbGRzZXRbZGlzYWJsZWRdIGlucHV0W3R5cGU9cmFkaW9dLGZpZWxkc2V0W2Rpc2FibGVkXSBpbnB1dFt0eXBlPWNoZWNrYm94XXtcclxuICAgIGN1cnNvcjpub3QtYWxsb3dlZFxyXG59XHJcbi5yYWRpby1pbmxpbmUuZGlzYWJsZWQsLmNoZWNrYm94LWlubGluZS5kaXNhYmxlZCxmaWVsZHNldFtkaXNhYmxlZF0gLnJhZGlvLWlubGluZSxmaWVsZHNldFtkaXNhYmxlZF0gLmNoZWNrYm94LWlubGluZXtcclxuICAgIGN1cnNvcjpub3QtYWxsb3dlZFxyXG59XHJcbi5yYWRpby5kaXNhYmxlZCBsYWJlbCwuY2hlY2tib3guZGlzYWJsZWQgbGFiZWwsZmllbGRzZXRbZGlzYWJsZWRdIC5yYWRpbyBsYWJlbCxmaWVsZHNldFtkaXNhYmxlZF0gLmNoZWNrYm94IGxhYmVse1xyXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkXHJcbn1cclxuLmZvcm0tY29udHJvbC1zdGF0aWN7XHJcbiAgICBwYWRkaW5nLXRvcDo3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBcclxufVxyXG4uZm9ybS1jb250cm9sLXN0YXRpYy5pbnB1dC1sZywuZm9ybS1jb250cm9sLXN0YXRpYy5pbnB1dC1zbXtcclxuICAgIHBhZGRpbmctcmlnaHQ6MDtcclxuICAgIHBhZGRpbmctbGVmdDowXHJcbn1cclxuLmlucHV0LXNtLC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4XHJcbn1cclxuc2VsZWN0LmlucHV0LXNtLHNlbGVjdC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OjMwcHhcclxufVxyXG50ZXh0YXJlYS5pbnB1dC1zbSx0ZXh0YXJlYS5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2wsc2VsZWN0W211bHRpcGxlXS5pbnB1dC1zbSxzZWxlY3RbbXVsdGlwbGVdLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDphdXRvXHJcbn1cclxuLmlucHV0LWxnLC5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6NDZweDtcclxuICAgIHBhZGRpbmc6MTBweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czo2cHhcclxufVxyXG5zZWxlY3QuaW5wdXQtbGcsc2VsZWN0LmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDo0NnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6NDZweFxyXG59XHJcbnRleHRhcmVhLmlucHV0LWxnLHRleHRhcmVhLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbCxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWxnLHNlbGVjdFttdWx0aXBsZV0uZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OmF1dG9cclxufVxyXG4uaGFzLWZlZWRiYWNre1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmVcclxufVxyXG4uaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjQyLjVweFxyXG59XHJcbi5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIHotaW5kZXg6MjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDozNHB4O1xyXG4gICAgaGVpZ2h0OjM0cHg7XHJcbiAgICBsaW5lLWhlaWdodDozNHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lXHJcbn1cclxuLmlucHV0LWxnKy5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7XHJcbiAgICB3aWR0aDo0NnB4O1xyXG4gICAgaGVpZ2h0OjQ2cHg7XHJcbiAgICBsaW5lLWhlaWdodDo0NnB4XHJcbn1cclxuLmlucHV0LXNtKy5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7XHJcbiAgICB3aWR0aDozMHB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDozMHB4XHJcbn1cclxuLmhhcy1zdWNjZXNzIC5oZWxwLWJsb2NrLC5oYXMtc3VjY2VzcyAuY29udHJvbC1sYWJlbCwuaGFzLXN1Y2Nlc3MgLnJhZGlvLC5oYXMtc3VjY2VzcyAuY2hlY2tib3gsLmhhcy1zdWNjZXNzIC5yYWRpby1pbmxpbmUsLmhhcy1zdWNjZXNzIC5jaGVja2JveC1pbmxpbmUsLmhhcy1zdWNjZXNzLnJhZGlvIGxhYmVsLC5oYXMtc3VjY2Vzcy5jaGVja2JveCBsYWJlbCwuaGFzLXN1Y2Nlc3MucmFkaW8taW5saW5lIGxhYmVsLC5oYXMtc3VjY2Vzcy5jaGVja2JveC1pbmxpbmUgbGFiZWx7XHJcbiAgICBjb2xvcjojM2M3NjNkXHJcbn1cclxuLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItY29sb3I6IzNjNzYzZDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KTtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSlcclxufVxyXG4uaGFzLXN1Y2Nlc3MgLmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJvcmRlci1jb2xvcjojMmI1NDJjO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA2cHggIzY3YjE2ODtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDZweCAjNjdiMTY4XHJcbn1cclxuLmhhcy1zdWNjZXNzIC5pbnB1dC1ncm91cC1hZGRvbntcclxuICAgIGNvbG9yOiMzYzc2M2Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZmYwZDg7XHJcbiAgICBib3JkZXItY29sb3I6IzNjNzYzZFxyXG59XHJcbi5oYXMtc3VjY2VzcyAuZm9ybS1jb250cm9sLWZlZWRiYWNre1xyXG4gICAgY29sb3I6IzNjNzYzZFxyXG59XHJcbi5oYXMtd2FybmluZyAuaGVscC1ibG9jaywuaGFzLXdhcm5pbmcgLmNvbnRyb2wtbGFiZWwsLmhhcy13YXJuaW5nIC5yYWRpbywuaGFzLXdhcm5pbmcgLmNoZWNrYm94LC5oYXMtd2FybmluZyAucmFkaW8taW5saW5lLC5oYXMtd2FybmluZyAuY2hlY2tib3gtaW5saW5lLC5oYXMtd2FybmluZy5yYWRpbyBsYWJlbCwuaGFzLXdhcm5pbmcuY2hlY2tib3ggbGFiZWwsLmhhcy13YXJuaW5nLnJhZGlvLWlubGluZSBsYWJlbCwuaGFzLXdhcm5pbmcuY2hlY2tib3gtaW5saW5lIGxhYmVse1xyXG4gICAgY29sb3I6IzhhNmQzYlxyXG59XHJcbi5oYXMtd2FybmluZyAuZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLWNvbG9yOiM4YTZkM2I7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSk7XHJcbiAgICBib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpXHJcbn1cclxuLmhhcy13YXJuaW5nIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6IzY2NTEyYztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgNnB4ICNjMGExNmI7XHJcbiAgICBib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA2cHggI2MwYTE2YlxyXG59XHJcbi5oYXMtd2FybmluZyAuaW5wdXQtZ3JvdXAtYWRkb257XHJcbiAgICBjb2xvcjojOGE2ZDNiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmNmOGUzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiM4YTZkM2JcclxufVxyXG4uaGFzLXdhcm5pbmcgLmZvcm0tY29udHJvbC1mZWVkYmFja3tcclxuICAgIGNvbG9yOiM4YTZkM2JcclxufVxyXG4uaGFzLWVycm9yIC5oZWxwLWJsb2NrLC5oYXMtZXJyb3IgLmNvbnRyb2wtbGFiZWwsLmhhcy1lcnJvciAucmFkaW8sLmhhcy1lcnJvciAuY2hlY2tib3gsLmhhcy1lcnJvciAucmFkaW8taW5saW5lLC5oYXMtZXJyb3IgLmNoZWNrYm94LWlubGluZSwuaGFzLWVycm9yLnJhZGlvIGxhYmVsLC5oYXMtZXJyb3IuY2hlY2tib3ggbGFiZWwsLmhhcy1lcnJvci5yYWRpby1pbmxpbmUgbGFiZWwsLmhhcy1lcnJvci5jaGVja2JveC1pbmxpbmUgbGFiZWx7XHJcbiAgICBjb2xvcjojYTk0NDQyXHJcbn1cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLWNvbG9yOiNhOTQ0NDI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSk7XHJcbiAgICBib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpXHJcbn1cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYm9yZGVyLWNvbG9yOiM4NDM1MzQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDZweCAjY2U4NDgzO1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgNnB4ICNjZTg0ODNcclxufVxyXG4uaGFzLWVycm9yIC5pbnB1dC1ncm91cC1hZGRvbntcclxuICAgIGNvbG9yOiNhOTQ0NDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMmRlZGU7XHJcbiAgICBib3JkZXItY29sb3I6I2E5NDQ0MlxyXG59XHJcbi5oYXMtZXJyb3IgLmZvcm0tY29udHJvbC1mZWVkYmFja3tcclxuICAgIGNvbG9yOiNhOTQ0NDJcclxufVxyXG4uaGFzLWZlZWRiYWNrIGxhYmVsfi5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7XHJcbiAgICB0b3A6MjVweFxyXG59XHJcbi5oYXMtZmVlZGJhY2sgbGFiZWwuc3Itb25seX4uZm9ybS1jb250cm9sLWZlZWRiYWNre1xyXG4gICAgdG9wOjBcclxufVxyXG4uaGVscC1ibG9ja3tcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGNvbG9yOiM3MzczNzNcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuZm9ybS1pbmxpbmUgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG4gICAgfVxyXG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcclxuICAgIH1cclxuICAgIC5mb3JtLWlubGluZSAuZm9ybS1jb250cm9sLXN0YXRpY3tcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9ja1xyXG4gICAgfVxyXG4gICAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS10YWJsZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcclxuICAgIH1cclxuICAgIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWFkZG9uLC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biwuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgd2lkdGg6YXV0b1xyXG4gICAgfVxyXG4gICAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9se1xyXG4gICAgICAgIHdpZHRoOjEwMCVcclxuICAgIH1cclxuICAgIC5mb3JtLWlubGluZSAuY29udHJvbC1sYWJlbHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlXHJcbiAgICB9XHJcbiAgICAuZm9ybS1pbmxpbmUgLnJhZGlvLC5mb3JtLWlubGluZSAuY2hlY2tib3h7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcclxuICAgIH1cclxuICAgIC5mb3JtLWlubGluZSAucmFkaW8gbGFiZWwsLmZvcm0taW5saW5lIC5jaGVja2JveCBsYWJlbHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MFxyXG4gICAgfVxyXG4gICAgLmZvcm0taW5saW5lIC5yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXSwuZm9ybS1pbmxpbmUgLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBcclxuICAgIH1cclxuICAgIC5mb3JtLWlubGluZSAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7XHJcbiAgICAgICAgdG9wOjBcclxuICAgIH1cclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5yYWRpbywuZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveCwuZm9ybS1ob3Jpem9udGFsIC5yYWRpby1pbmxpbmUsLmZvcm0taG9yaXpvbnRhbCAuY2hlY2tib3gtaW5saW5le1xyXG4gICAgcGFkZGluZy10b3A6N3B4O1xyXG4gICAgbWFyZ2luLXRvcDowO1xyXG4gICAgbWFyZ2luLWJvdHRvbTowXHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAucmFkaW8sLmZvcm0taG9yaXpvbnRhbCAuY2hlY2tib3h7XHJcbiAgICBtaW4taGVpZ2h0OjI3cHhcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLXJpZ2h0Oi0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6LTE1cHhcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuZm9ybS1ob3Jpem9udGFsIC5jb250cm9sLWxhYmVse1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodFxyXG4gICAgfVxyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNre1xyXG4gICAgcmlnaHQ6MTVweFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAtbGcgLmNvbnRyb2wtbGFiZWx7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTQuM3B4XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cC1zbSAuY29udHJvbC1sYWJlbHtcclxuICAgICAgICBwYWRkaW5nLXRvcDo2cHhcclxuICAgIH1cclxufVxyXG4uYnRue1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOjZweCAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQzO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICAtbXMtdG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjtcclxuICAgIHRvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIC13ZWJraXQtZmVybW8tc2VsZWN0Om5vbmU7XHJcbiAgICAtbW96LWZlcm1vLXNlbGVjdDpub25lO1xyXG4gICAgLW1zLWZlcm1vLXNlbGVjdDpub25lO1xyXG4gICAgZmVybW8tc2VsZWN0Om5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czo0cHhcclxufVxyXG4uYnRuOmZvY3VzLC5idG46YWN0aXZlOmZvY3VzLC5idG4uYWN0aXZlOmZvY3VzLC5idG4uZm9jdXMsLmJ0bjphY3RpdmUuZm9jdXMsLmJ0bi5hY3RpdmUuZm9jdXN7XHJcbiAgICBvdXRsaW5lOnRoaW4gZG90dGVkO1xyXG4gICAgb3V0bGluZTo1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XHJcbiAgICBvdXRsaW5lLW9mZnNldDotMnB4XHJcbn1cclxuLmJ0bjpob3ZlciwuYnRuOmZvY3VzLC5idG4uZm9jdXN7XHJcbiAgICBjb2xvcjojMzMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmVcclxufVxyXG4uYnRuOmFjdGl2ZSwuYnRuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bm9uZTtcclxuICAgIG91dGxpbmU6MDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSlcclxufVxyXG4uYnRuLmRpc2FibGVkLC5idG5bZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRue1xyXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxuICAgIGN1cnNvcjpub3QtYWxsb3dlZDtcclxuICAgIGZpbHRlcjphbHBoYShvcGFjaXR5PTY1KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzpub25lO1xyXG4gICAgYm94LXNoYWRvdzpub25lO1xyXG4gICAgb3BhY2l0eTouNjVcclxufVxyXG4uYnRuLWRlZmF1bHR7XHJcbiAgICBjb2xvcjojMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNjY2NcclxufVxyXG4uYnRuLWRlZmF1bHQ6aG92ZXIsLmJ0bi1kZWZhdWx0OmZvY3VzLC5idG4tZGVmYXVsdC5mb2N1cywuYnRuLWRlZmF1bHQ6YWN0aXZlLC5idG4tZGVmYXVsdC5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZGVmYXVsdHtcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNmU2ZTY7XHJcbiAgICBib3JkZXItY29sb3I6I2FkYWRhZFxyXG59XHJcbi5idG4tZGVmYXVsdDphY3RpdmUsLmJ0bi1kZWZhdWx0LmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kZWZhdWx0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lXHJcbn1cclxuLmJ0bi1kZWZhdWx0LmRpc2FibGVkLC5idG4tZGVmYXVsdFtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdCwuYnRuLWRlZmF1bHQuZGlzYWJsZWQ6aG92ZXIsLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWZhdWx0OmhvdmVyLC5idG4tZGVmYXVsdC5kaXNhYmxlZDpmb2N1cywuYnRuLWRlZmF1bHRbZGlzYWJsZWRdOmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlZmF1bHQ6Zm9jdXMsLmJ0bi1kZWZhdWx0LmRpc2FibGVkLmZvY3VzLC5idG4tZGVmYXVsdFtkaXNhYmxlZF0uZm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdC5mb2N1cywuYnRuLWRlZmF1bHQuZGlzYWJsZWQ6YWN0aXZlLC5idG4tZGVmYXVsdFtkaXNhYmxlZF06YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlZmF1bHQ6YWN0aXZlLC5idG4tZGVmYXVsdC5kaXNhYmxlZC5hY3RpdmUsLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXS5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6I2NjY1xyXG59XHJcbi5idG4tZGVmYXVsdCAuYmFkZ2V7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzMzXHJcbn1cclxuLmJ0bi1wcmltYXJ5e1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkMDYxYztcclxuICAgIGJvcmRlci1jb2xvcjojMzU3ZWJkXHJcbn1cclxuLmJ0bi1wcmltYXJ5OmhvdmVyLC5idG4tcHJpbWFyeTpmb2N1cywuYnRuLXByaW1hcnkuZm9jdXMsLmJ0bi1wcmltYXJ5OmFjdGl2ZSwuYnRuLXByaW1hcnkuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXByaW1hcnl7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzA3MWE5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiMyODVlOGVcclxufVxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLC5idG4tcHJpbWFyeS5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bm9uZVxyXG59XHJcbi5idG4tcHJpbWFyeS5kaXNhYmxlZCwuYnRuLXByaW1hcnlbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnksLmJ0bi1wcmltYXJ5LmRpc2FibGVkOmhvdmVyLC5idG4tcHJpbWFyeVtkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeTpob3ZlciwuYnRuLXByaW1hcnkuZGlzYWJsZWQ6Zm9jdXMsLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5OmZvY3VzLC5idG4tcHJpbWFyeS5kaXNhYmxlZC5mb2N1cywuYnRuLXByaW1hcnlbZGlzYWJsZWRdLmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnkuZm9jdXMsLmJ0bi1wcmltYXJ5LmRpc2FibGVkOmFjdGl2ZSwuYnRuLXByaW1hcnlbZGlzYWJsZWRdOmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5OmFjdGl2ZSwuYnRuLXByaW1hcnkuZGlzYWJsZWQuYWN0aXZlLC5idG4tcHJpbWFyeVtkaXNhYmxlZF0uYWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnkuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGQwNjFjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiMzNTdlYmRcclxufVxyXG4uYnRuLXByaW1hcnkgLmJhZGdle1xyXG4gICAgY29sb3I6I2RkMDYxYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZlxyXG59XHJcbi5idG4tc3VjY2Vzc3tcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1Y2I4NWM7XHJcbiAgICBib3JkZXItY29sb3I6IzRjYWU0Y1xyXG59XHJcbi5idG4tc3VjY2Vzczpob3ZlciwuYnRuLXN1Y2Nlc3M6Zm9jdXMsLmJ0bi1zdWNjZXNzLmZvY3VzLC5idG4tc3VjY2VzczphY3RpdmUsLmJ0bi1zdWNjZXNzLmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1zdWNjZXNze1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ0OWQ0NDtcclxuICAgIGJvcmRlci1jb2xvcjojMzk4NDM5XHJcbn1cclxuLmJ0bi1zdWNjZXNzOmFjdGl2ZSwuYnRuLXN1Y2Nlc3MuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmVcclxufVxyXG4uYnRuLXN1Y2Nlc3MuZGlzYWJsZWQsLmJ0bi1zdWNjZXNzW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzLC5idG4tc3VjY2Vzcy5kaXNhYmxlZDpob3ZlciwuYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3M6aG92ZXIsLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmZvY3VzLC5idG4tc3VjY2Vzc1tkaXNhYmxlZF06Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tc3VjY2Vzczpmb2N1cywuYnRuLXN1Y2Nlc3MuZGlzYWJsZWQuZm9jdXMsLmJ0bi1zdWNjZXNzW2Rpc2FibGVkXS5mb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzLmZvY3VzLC5idG4tc3VjY2Vzcy5kaXNhYmxlZDphY3RpdmUsLmJ0bi1zdWNjZXNzW2Rpc2FibGVkXTphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tc3VjY2VzczphY3RpdmUsLmJ0bi1zdWNjZXNzLmRpc2FibGVkLmFjdGl2ZSwuYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdLmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzVjYjg1YztcclxuICAgIGJvcmRlci1jb2xvcjojNGNhZTRjXHJcbn1cclxuLmJ0bi1zdWNjZXNzIC5iYWRnZXtcclxuICAgIGNvbG9yOiM1Y2I4NWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZcclxufVxyXG4uYnRuLWluZm97XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNWJjMGRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiM0NmI4ZGFcclxufVxyXG4uYnRuLWluZm86aG92ZXIsLmJ0bi1pbmZvOmZvY3VzLC5idG4taW5mby5mb2N1cywuYnRuLWluZm86YWN0aXZlLC5idG4taW5mby5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4taW5mb3tcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMWIwZDU7XHJcbiAgICBib3JkZXItY29sb3I6IzI2OWFiY1xyXG59XHJcbi5idG4taW5mbzphY3RpdmUsLmJ0bi1pbmZvLmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1pbmZve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lXHJcbn1cclxuLmJ0bi1pbmZvLmRpc2FibGVkLC5idG4taW5mb1tkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mbywuYnRuLWluZm8uZGlzYWJsZWQ6aG92ZXIsLmJ0bi1pbmZvW2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbmZvOmhvdmVyLC5idG4taW5mby5kaXNhYmxlZDpmb2N1cywuYnRuLWluZm9bZGlzYWJsZWRdOmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWluZm86Zm9jdXMsLmJ0bi1pbmZvLmRpc2FibGVkLmZvY3VzLC5idG4taW5mb1tkaXNhYmxlZF0uZm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mby5mb2N1cywuYnRuLWluZm8uZGlzYWJsZWQ6YWN0aXZlLC5idG4taW5mb1tkaXNhYmxlZF06YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWluZm86YWN0aXZlLC5idG4taW5mby5kaXNhYmxlZC5hY3RpdmUsLmJ0bi1pbmZvW2Rpc2FibGVkXS5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mby5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1YmMwZGU7XHJcbiAgICBib3JkZXItY29sb3I6IzQ2YjhkYVxyXG59XHJcbi5idG4taW5mbyAuYmFkZ2V7XHJcbiAgICBjb2xvcjojNWJjMGRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmXHJcbn1cclxuLmJ0bi13YXJuaW5ne1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwYWQ0ZTtcclxuICAgIGJvcmRlci1jb2xvcjojZWVhMjM2XHJcbn1cclxuLmJ0bi13YXJuaW5nOmhvdmVyLC5idG4td2FybmluZzpmb2N1cywuYnRuLXdhcm5pbmcuZm9jdXMsLmJ0bi13YXJuaW5nOmFjdGl2ZSwuYnRuLXdhcm5pbmcuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXdhcm5pbmd7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWM5NzFmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNkNTg1MTJcclxufVxyXG4uYnRuLXdhcm5pbmc6YWN0aXZlLC5idG4td2FybmluZy5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4td2FybmluZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bm9uZVxyXG59XHJcbi5idG4td2FybmluZy5kaXNhYmxlZCwuYnRuLXdhcm5pbmdbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmcsLmJ0bi13YXJuaW5nLmRpc2FibGVkOmhvdmVyLC5idG4td2FybmluZ1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4td2FybmluZzpob3ZlciwuYnRuLXdhcm5pbmcuZGlzYWJsZWQ6Zm9jdXMsLmJ0bi13YXJuaW5nW2Rpc2FibGVkXTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nOmZvY3VzLC5idG4td2FybmluZy5kaXNhYmxlZC5mb2N1cywuYnRuLXdhcm5pbmdbZGlzYWJsZWRdLmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmcuZm9jdXMsLmJ0bi13YXJuaW5nLmRpc2FibGVkOmFjdGl2ZSwuYnRuLXdhcm5pbmdbZGlzYWJsZWRdOmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nOmFjdGl2ZSwuYnRuLXdhcm5pbmcuZGlzYWJsZWQuYWN0aXZlLC5idG4td2FybmluZ1tkaXNhYmxlZF0uYWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmcuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBhZDRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNlZWEyMzZcclxufVxyXG4uYnRuLXdhcm5pbmcgLmJhZGdle1xyXG4gICAgY29sb3I6I2YwYWQ0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZlxyXG59XHJcbi5idG4tZGFuZ2Vye1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Q5NTM0ZjtcclxuICAgIGJvcmRlci1jb2xvcjojZDQzZjNhXHJcbn1cclxuLmJ0bi1kYW5nZXI6aG92ZXIsLmJ0bi1kYW5nZXI6Zm9jdXMsLmJ0bi1kYW5nZXIuZm9jdXMsLmJ0bi1kYW5nZXI6YWN0aXZlLC5idG4tZGFuZ2VyLmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kYW5nZXJ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzkzMDJjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNhYzI5MjVcclxufVxyXG4uYnRuLWRhbmdlcjphY3RpdmUsLmJ0bi1kYW5nZXIuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRhbmdlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bm9uZVxyXG59XHJcbi5idG4tZGFuZ2VyLmRpc2FibGVkLC5idG4tZGFuZ2VyW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXIsLmJ0bi1kYW5nZXIuZGlzYWJsZWQ6aG92ZXIsLmJ0bi1kYW5nZXJbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlcjpob3ZlciwuYnRuLWRhbmdlci5kaXNhYmxlZDpmb2N1cywuYnRuLWRhbmdlcltkaXNhYmxlZF06Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGFuZ2VyOmZvY3VzLC5idG4tZGFuZ2VyLmRpc2FibGVkLmZvY3VzLC5idG4tZGFuZ2VyW2Rpc2FibGVkXS5mb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXIuZm9jdXMsLmJ0bi1kYW5nZXIuZGlzYWJsZWQ6YWN0aXZlLC5idG4tZGFuZ2VyW2Rpc2FibGVkXTphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGFuZ2VyOmFjdGl2ZSwuYnRuLWRhbmdlci5kaXNhYmxlZC5hY3RpdmUsLmJ0bi1kYW5nZXJbZGlzYWJsZWRdLmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXIuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDk1MzRmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNkNDNmM2FcclxufVxyXG4uYnRuLWRhbmdlciAuYmFkZ2V7XHJcbiAgICBjb2xvcjojZDk1MzRmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmXHJcbn1cclxuLmJ0bi1saW5re1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgY29sb3I6I2RkMDYxYztcclxuICAgIGJvcmRlci1yYWRpdXM6MFxyXG59XHJcbi5idG4tbGluaywuYnRuLWxpbms6YWN0aXZlLC5idG4tbGluay5hY3RpdmUsLmJ0bi1saW5rW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1saW5re1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzpub25lO1xyXG4gICAgYm94LXNoYWRvdzpub25lXHJcbn1cclxuLmJ0bi1saW5rLC5idG4tbGluazpob3ZlciwuYnRuLWxpbms6Zm9jdXMsLmJ0bi1saW5rOmFjdGl2ZXtcclxuICAgIGJvcmRlci1jb2xvcjp0cmFuc3BhcmVudFxyXG59XHJcbi5idG4tbGluazpob3ZlciwuYnRuLWxpbms6Zm9jdXN7XHJcbiAgICBjb2xvcjojMmE2NDk2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnRcclxufVxyXG4uYnRuLWxpbmtbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWxpbms6aG92ZXIsLmJ0bi1saW5rW2Rpc2FibGVkXTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1saW5rOmZvY3Vze1xyXG4gICAgY29sb3I6Izc3NztcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lXHJcbn1cclxuLmJ0bi1sZywuYnRuLWdyb3VwLWxnPi5idG57XHJcbiAgICBwYWRkaW5nOjEwcHggMTZweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS4zMztcclxuICAgIGJvcmRlci1yYWRpdXM6NnB4XHJcbn1cclxuLmJ0bi1zbSwuYnRuLWdyb3VwLXNtPi5idG57XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweFxyXG59XHJcbi5idG4teHMsLmJ0bi1ncm91cC14cz4uYnRue1xyXG4gICAgcGFkZGluZzoxcHggNXB4O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweFxyXG59XHJcbi5idG4tYmxvY2t7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbi5idG4tYmxvY2srLmJ0bi1ibG9ja3tcclxuICAgIG1hcmdpbi10b3A6NXB4XHJcbn1cclxuaW5wdXRbdHlwZT1zdWJtaXRdLmJ0bi1ibG9jayxpbnB1dFt0eXBlPXJlc2V0XS5idG4tYmxvY2ssaW5wdXRbdHlwZT1idXR0b25dLmJ0bi1ibG9ja3tcclxuICAgIHdpZHRoOjEwMCVcclxufVxyXG4uZmFkZXtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgbGluZWFyXHJcbn1cclxuLmZhZGUuaW57XHJcbiAgICBvcGFjaXR5OjFcclxufVxyXG4uY29sbGFwc2V7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB2aXNpYmlsaXR5OmhpZGRlblxyXG59XHJcbi5jb2xsYXBzZS5pbntcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB2aXNpYmlsaXR5OnZpc2libGVcclxufVxyXG50ci5jb2xsYXBzZS5pbntcclxuICAgIGRpc3BsYXk6dGFibGUtcm93XHJcbn1cclxudGJvZHkuY29sbGFwc2UuaW57XHJcbiAgICBkaXNwbGF5OnRhYmxlLXJvdy1ncm91cFxyXG59XHJcbi5jb2xsYXBzaW5ne1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6MDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOi4zNXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOi4zNXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOi4zNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LHZpc2liaWxpdHk7XHJcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCx2aXNpYmlsaXR5O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsdmlzaWJpbGl0eVxyXG59XHJcbi5jYXJldHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6MDtcclxuICAgIGhlaWdodDowO1xyXG4gICAgbWFyZ2luLWxlZnQ6MnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgYm9yZGVyLXRvcDo0cHggc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6NHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6NHB4IHNvbGlkIHRyYW5zcGFyZW50XHJcbn1cclxuLmRyb3Bkb3due1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmVcclxufVxyXG4uZHJvcGRvd24tdG9nZ2xlOmZvY3Vze1xyXG4gICAgb3V0bGluZTowXHJcbn1cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDoxMDAlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgei1pbmRleDoxMDAwO1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1pbi13aWR0aDoxNjBweDtcclxuICAgIHBhZGRpbmc6NXB4IDA7XHJcbiAgICBtYXJnaW46MnB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OjAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgIGJveC1zaGFkb3c6MCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpXHJcbn1cclxuLmRyb3Bkb3duLW1lbnUucHVsbC1yaWdodHtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBsZWZ0OmF1dG9cclxufVxyXG4uZHJvcGRvd24tbWVudSAuZGl2aWRlcntcclxuICAgIGhlaWdodDoxcHg7XHJcbiAgICBtYXJnaW46OXB4IDA7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNWU1ZTVcclxufVxyXG4uZHJvcGRvd24tbWVudT5saT5he1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBhZGRpbmc6M3B4IDIwcHg7XHJcbiAgICBjbGVhcjpib3RoO1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MS40Mjg1NzE0MztcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXBcclxufVxyXG4uZHJvcGRvd24tbWVudT5saT5hOmhvdmVyLC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXN7XHJcbiAgICBjb2xvcjojMjYyNjI2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjVcclxufVxyXG4uZHJvcGRvd24tbWVudT4uYWN0aXZlPmEsLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmhvdmVyLC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YTpmb2N1c3tcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkMDYxYztcclxuICAgIG91dGxpbmU6MFxyXG59XHJcbi5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hLC5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hOmhvdmVyLC5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hOmZvY3Vze1xyXG4gICAgY29sb3I6Izc3N1xyXG59XHJcbi5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hOmhvdmVyLC5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hOmZvY3Vze1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lO1xyXG4gICAgZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkPWZhbHNlKVxyXG59XHJcbi5vcGVuPi5kcm9wZG93bi1tZW51e1xyXG4gICAgZGlzcGxheTpibG9ja1xyXG59XHJcbi5vcGVuPmF7XHJcbiAgICBvdXRsaW5lOjBcclxufVxyXG4uZHJvcGRvd24tbWVudS1yaWdodHtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBsZWZ0OmF1dG9cclxufVxyXG4uZHJvcGRvd24tbWVudS1sZWZ0e1xyXG4gICAgcmlnaHQ6YXV0bztcclxuICAgIGxlZnQ6MFxyXG59XHJcbi5kcm9wZG93bi1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgcGFkZGluZzozcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS40Mjg1NzE0MztcclxuICAgIGNvbG9yOiM3Nzc7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXBcclxufVxyXG4uZHJvcGRvd24tYmFja2Ryb3B7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgei1pbmRleDo5OTBcclxufVxyXG4ucHVsbC1yaWdodD4uZHJvcGRvd24tbWVudXtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBsZWZ0OmF1dG9cclxufVxyXG4uZHJvcHVwIC5jYXJldCwubmF2YmFyLWZpeGVkLWJvdHRvbSAuZHJvcGRvd24gLmNhcmV0e1xyXG4gICAgY29udGVudDpcIlwiO1xyXG4gICAgYm9yZGVyLXRvcDowO1xyXG4gICAgYm9yZGVyLWJvdHRvbTo0cHggc29saWRcclxufVxyXG4uZHJvcHVwIC5kcm9wZG93bi1tZW51LC5uYXZiYXItZml4ZWQtYm90dG9tIC5kcm9wZG93biAuZHJvcGRvd24tbWVudXtcclxuICAgIHRvcDphdXRvO1xyXG4gICAgYm90dG9tOjEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjFweFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5uYXZiYXItcmlnaHQgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICBsZWZ0OmF1dG9cclxuICAgIH1cclxuICAgIC5uYXZiYXItcmlnaHQgLmRyb3Bkb3duLW1lbnUtbGVmdHtcclxuICAgICAgICByaWdodDphdXRvO1xyXG4gICAgICAgIGxlZnQ6MFxyXG4gICAgfVxyXG59XHJcbi5idG4tZ3JvdXAsLmJ0bi1ncm91cC12ZXJ0aWNhbHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcclxufVxyXG4uYnRuLWdyb3VwPi5idG4sLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRue1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBmbG9hdDpsZWZ0XHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuOmhvdmVyLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bjpob3ZlciwuYnRuLWdyb3VwPi5idG46Zm9jdXMsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmZvY3VzLC5idG4tZ3JvdXA+LmJ0bjphY3RpdmUsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmFjdGl2ZSwuYnRuLWdyb3VwPi5idG4uYWN0aXZlLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi5hY3RpdmV7XHJcbiAgICB6LWluZGV4OjJcclxufVxyXG4uYnRuLWdyb3VwPi5idG46Zm9jdXMsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmZvY3Vze1xyXG4gICAgb3V0bGluZTowXHJcbn1cclxuLmJ0bi1ncm91cCAuYnRuKy5idG4sLmJ0bi1ncm91cCAuYnRuKy5idG4tZ3JvdXAsLmJ0bi1ncm91cCAuYnRuLWdyb3VwKy5idG4sLmJ0bi1ncm91cCAuYnRuLWdyb3VwKy5idG4tZ3JvdXB7XHJcbiAgICBtYXJnaW4tbGVmdDotMXB4XHJcbn1cclxuLmJ0bi10b29sYmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6LTVweFxyXG59XHJcbi5idG4tdG9vbGJhciAuYnRuLWdyb3VwLC5idG4tdG9vbGJhciAuaW5wdXQtZ3JvdXB7XHJcbiAgICBmbG9hdDpsZWZ0XHJcbn1cclxuLmJ0bi10b29sYmFyPi5idG4sLmJ0bi10b29sYmFyPi5idG4tZ3JvdXAsLmJ0bi10b29sYmFyPi5pbnB1dC1ncm91cHtcclxuICAgIG1hcmdpbi1sZWZ0OjVweFxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKXtcclxuICAgIGJvcmRlci1yYWRpdXM6MFxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bjpmaXJzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1sZWZ0OjBcclxufVxyXG4uYnRuLWdyb3VwPi5idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSl7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MFxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpLC5idG4tZ3JvdXA+LmRyb3Bkb3duLXRvZ2dsZTpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MFxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bi1ncm91cHtcclxuICAgIGZsb2F0OmxlZnRcclxufVxyXG4uYnRuLWdyb3VwPi5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKT4uYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuLWdyb3VwOmZpcnN0LWNoaWxkPi5idG46bGFzdC1jaGlsZCwuYnRuLWdyb3VwPi5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ+LmRyb3Bkb3duLXRvZ2dsZXtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuLWdyb3VwOmxhc3QtY2hpbGQ+LmJ0bjpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MFxyXG59XHJcbi5idG4tZ3JvdXAgLmRyb3Bkb3duLXRvZ2dsZTphY3RpdmUsLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGV7XHJcbiAgICBvdXRsaW5lOjBcclxufVxyXG4uYnRuLWdyb3VwPi5idG4rLmRyb3Bkb3duLXRvZ2dsZXtcclxuICAgIHBhZGRpbmctcmlnaHQ6OHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjhweFxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bi1sZysuZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgcGFkZGluZy1yaWdodDoxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjEycHhcclxufVxyXG4uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZXtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSlcclxufVxyXG4uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tbGlua3tcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzpub25lO1xyXG4gICAgYm94LXNoYWRvdzpub25lXHJcbn1cclxuLmJ0biAuY2FyZXR7XHJcbiAgICBtYXJnaW4tbGVmdDowXHJcbn1cclxuLmJ0bi1sZyAuY2FyZXR7XHJcbiAgICBib3JkZXItd2lkdGg6NXB4IDVweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDowXHJcbn1cclxuLmRyb3B1cCAuYnRuLWxnIC5jYXJldHtcclxuICAgIGJvcmRlci13aWR0aDowIDVweCA1cHhcclxufVxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4sLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cD4uYnRue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGZsb2F0Om5vbmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOjEwMCVcclxufVxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXA+LmJ0bntcclxuICAgIGZsb2F0Om5vbmVcclxufVxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4rLmJ0biwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4rLmJ0bi1ncm91cCwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXArLmJ0biwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXArLmJ0bi1ncm91cHtcclxuICAgIG1hcmdpbi10b3A6LTFweDtcclxuICAgIG1hcmdpbi1sZWZ0OjBcclxufVxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgIGJvcmRlci1yYWRpdXM6MFxyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MFxyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4XHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk+LmJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6MFxyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpPi5idG46bGFzdC1jaGlsZCwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKT4uZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MFxyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpPi5idG46Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cC1qdXN0aWZpZWR7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRhYmxlLWxheW91dDpmaXhlZDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZVxyXG59XHJcbi5idG4tZ3JvdXAtanVzdGlmaWVkPi5idG4sLmJ0bi1ncm91cC1qdXN0aWZpZWQ+LmJ0bi1ncm91cHtcclxuICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgIGZsb2F0Om5vbmU7XHJcbiAgICB3aWR0aDoxJVxyXG59XHJcbi5idG4tZ3JvdXAtanVzdGlmaWVkPi5idG4tZ3JvdXAgLmJ0bntcclxuICAgIHdpZHRoOjEwMCVcclxufVxyXG4uYnRuLWdyb3VwLWp1c3RpZmllZD4uYnRuLWdyb3VwIC5kcm9wZG93bi1tZW51e1xyXG4gICAgbGVmdDphdXRvXHJcbn1cclxuW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4gaW5wdXRbdHlwZT1yYWRpb10sW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4tZ3JvdXA+LmJ0biBpbnB1dFt0eXBlPXJhZGlvXSxbZGF0YS10b2dnbGU9YnV0dG9uc10+LmJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSxbZGF0YS10b2dnbGU9YnV0dG9uc10+LmJ0bi1ncm91cD4uYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBjbGlwOnJlY3QoMCwwLDAsMCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lXHJcbn1cclxuLmlucHV0LWdyb3Vwe1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlXHJcbn1cclxuLmlucHV0LWdyb3VwW2NsYXNzKj1jb2wtXXtcclxuICAgIGZsb2F0Om5vbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MFxyXG59XHJcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9se1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjI7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206MFxyXG59XHJcbi5pbnB1dC1ncm91cC1sZz4uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYWRkb24sLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1idG4+LmJ0bntcclxuICAgIGhlaWdodDo0NnB4O1xyXG4gICAgcGFkZGluZzoxMHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOjZweFxyXG59XHJcbnNlbGVjdC5pbnB1dC1ncm91cC1sZz4uZm9ybS1jb250cm9sLHNlbGVjdC5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYWRkb24sc2VsZWN0LmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1idG4+LmJ0bntcclxuICAgIGhlaWdodDo0NnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6NDZweFxyXG59XHJcbnRleHRhcmVhLmlucHV0LWdyb3VwLWxnPi5mb3JtLWNvbnRyb2wsdGV4dGFyZWEuaW5wdXQtZ3JvdXAtbGc+LmlucHV0LWdyb3VwLWFkZG9uLHRleHRhcmVhLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1idG4+LmJ0bixzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLWxnPi5mb3JtLWNvbnRyb2wsc2VsZWN0W211bHRpcGxlXS5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYWRkb24sc2VsZWN0W211bHRpcGxlXS5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYnRuPi5idG57XHJcbiAgICBoZWlnaHQ6YXV0b1xyXG59XHJcbi5pbnB1dC1ncm91cC1zbT4uZm9ybS1jb250cm9sLC5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYWRkb24sLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1idG4+LmJ0bntcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czozcHhcclxufVxyXG5zZWxlY3QuaW5wdXQtZ3JvdXAtc20+LmZvcm0tY29udHJvbCxzZWxlY3QuaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWFkZG9uLHNlbGVjdC5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYnRuPi5idG57XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OjMwcHhcclxufVxyXG50ZXh0YXJlYS5pbnB1dC1ncm91cC1zbT4uZm9ybS1jb250cm9sLHRleHRhcmVhLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1hZGRvbix0ZXh0YXJlYS5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYnRuPi5idG4sc2VsZWN0W211bHRpcGxlXS5pbnB1dC1ncm91cC1zbT4uZm9ybS1jb250cm9sLHNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWFkZG9uLHNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWJ0bj4uYnRue1xyXG4gICAgaGVpZ2h0OmF1dG9cclxufVxyXG4uaW5wdXQtZ3JvdXAtYWRkb24sLmlucHV0LWdyb3VwLWJ0biwuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbHtcclxuICAgIGRpc3BsYXk6dGFibGUtY2VsbFxyXG59XHJcbi5pbnB1dC1ncm91cC1hZGRvbjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpLC5pbnB1dC1ncm91cC1idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSwuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgYm9yZGVyLXJhZGl1czowXHJcbn1cclxuLmlucHV0LWdyb3VwLWFkZG9uLC5pbnB1dC1ncm91cC1idG57XHJcbiAgICB3aWR0aDoxJTtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG59XHJcbi5pbnB1dC1ncm91cC1hZGRvbntcclxuICAgIHBhZGRpbmc6NnB4IDEycHg7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OjE7XHJcbiAgICBjb2xvcjojNTU1O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweFxyXG59XHJcbi5pbnB1dC1ncm91cC1hZGRvbi5pbnB1dC1zbXtcclxuICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4XHJcbn1cclxuLmlucHV0LWdyb3VwLWFkZG9uLmlucHV0LWxne1xyXG4gICAgcGFkZGluZzoxMHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NnB4XHJcbn1cclxuLmlucHV0LWdyb3VwLWFkZG9uIGlucHV0W3R5cGU9cmFkaW9dLC5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPWNoZWNrYm94XXtcclxuICAgIG1hcmdpbi10b3A6MFxyXG59XHJcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZpcnN0LWNoaWxkLC5pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuLWdyb3VwPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uZHJvcGRvd24tdG9nZ2xlLC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpLC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCk+LmJ0bntcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowXHJcbn1cclxuLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXJpZ2h0OjBcclxufVxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpsYXN0LWNoaWxkLC5pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxkLC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuLC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuLWdyb3VwPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5kcm9wZG93bi10b2dnbGUsLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuOm5vdCg6Zmlyc3QtY2hpbGQpLC5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQ+LmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKT4uYnRue1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowXHJcbn1cclxuLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItbGVmdDowXHJcbn1cclxuLmlucHV0LWdyb3VwLWJ0bntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOjA7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXBcclxufVxyXG4uaW5wdXQtZ3JvdXAtYnRuPi5idG57XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZVxyXG59XHJcbi5pbnB1dC1ncm91cC1idG4+LmJ0bisuYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6LTFweFxyXG59XHJcbi5pbnB1dC1ncm91cC1idG4+LmJ0bjpob3ZlciwuaW5wdXQtZ3JvdXAtYnRuPi5idG46Zm9jdXMsLmlucHV0LWdyb3VwLWJ0bj4uYnRuOmFjdGl2ZXtcclxuICAgIHotaW5kZXg6MlxyXG59XHJcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQ+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG4tZ3JvdXB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTFweFxyXG59XHJcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuLC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWxlZnQ6LTFweFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fermo-list/fermo-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/fermo-list/fermo-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: FermoListComponent */

  /***/
  function srcAppComponentsFermoListFermoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FermoListComponent", function () {
      return FermoListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_fermi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/fermi.service */
    "./src/app/services/fermi.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FermoListComponent =
    /*#__PURE__*/
    function () {
      function FermoListComponent(api, router, routed) {
        _classCallCheck(this, FermoListComponent);

        this.api = api;
        this.router = router;
        this.routed = routed;
        this.p = 1;
        this.filter = '';
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.responsive = false;
        this.config = {
          id: 'advanced',
          itemsPerPage: 10,
          currentPage: 1
        };
        this.labels = {
          previousLabel: 'Previous',
          nextLabel: 'Next',
          screenReaderPaginationLabel: 'Pagination',
          screenReaderPageLabel: 'page',
          screenReaderCurrentLabel: "You're on page"
        };
        this.eventLog = [];
        this.popped = [];
        this.currentUserLoggedIn = JSON.parse(localStorage.getItem('currentUser'));
      }

      _createClass(FermoListComponent, [{
        key: "onPageChange",
        value: function onPageChange(number) {
          this.logEvent("pageChange(".concat(number, ")"));
          this.config.currentPage = number;
        }
      }, {
        key: "onPageBoundsCorrection",
        value: function onPageBoundsCorrection(number) {
          this.logEvent("pageBoundsCorrection(".concat(number, ")"));
          this.config.currentPage = number;
        }
      }, {
        key: "pushItem",
        value: function pushItem() {
          var item = this.popped.pop() || 'A newly-created meal!';
          this.fermi.push(item);
        }
      }, {
        key: "popItem",
        value: function popItem() {
          this.popped.push(this.fermi.pop());
        }
      }, {
        key: "logEvent",
        value: function logEvent(message) {
          this.eventLog.unshift("".concat(new Date().toISOString(), ": ").concat(message));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.notAdmin = true;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.currentUserLoggedIn.utenteRuolo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var idUtenteRuolo = _step.value;

              if (idUtenteRuolo.idRuoloNavigation.nomeRuolo == 'AMMINISTRATORE') {
                this.notAdmin = false;
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.routed.queryParams.subscribe(function (params) {
            console.log(params);
            _this.action = params.action;
            _this.idFermo = params.idfermo;

            switch (_this.action) {
              case "delete":
                _this.deleteFermo();

                break;

              default:
            }
          });
          this.loadPage();
        }
      }, {
        key: "loadPage",
        value: function loadPage() {
          var _this2 = this;

          var onSuccess = function onSuccess(res) {
            console.log(res);
            _this2.fermi = res;
          };

          var onError = function onError(err) {
            console.log(err);
          };

          this.api.getFermi().subscribe(onSuccess, onError);
        }
      }, {
        key: "deleteFermo",
        value: function deleteFermo() {
          var _this3 = this;

          this.api.deleteFermo(this.idFermo).subscribe(function (res) {
            console.log(res);

            _this3.loadPage();
          }, function (err) {
            console.log(err);

            _this3.router.navigateByUrl("fermo-list");
          });
        }
      }]);

      return FermoListComponent;
    }();

    FermoListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_fermi_service__WEBPACK_IMPORTED_MODULE_2__["FermiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data')], FermoListComponent.prototype, "fermi", void 0);
    FermoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fermo-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fermo-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fermo-list/fermo-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fermo-list.component.css */
      "./src/app/components/fermo-list/fermo-list.component.css")).default]
    })], FermoListComponent);
    /***/
  },

  /***/
  "./src/app/components/fermo-management/fermo-management.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/fermo-management/fermo-management.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFermoManagementFermoManagementComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.postecontainer{\r\n    margin-top: 15px;\r\n    border:solid;\r\n    border-radius: 6px;\r\n     border-color: lightgray;\r\n     border-width: thin; \r\n     background-color: #ffffcc;\r\n}\r\n.sitmacontainer{\r\n    margin-top: 15px;\r\n    border:solid;\r\n    border-radius: 6px;\r\n     border-color: lightgray;\r\n     border-width: thin; \r\n     background-color: #d9ffcc;\r\n}\r\n.autocompletecontainer{\r\n    margin-top: 15px;\r\n    border:solid;\r\n    border-radius: 6px;\r\n     border-color: lightgray;\r\n     border-width: thin; \r\n     background-color: #b3ecff;\r\n}\r\n.autocompletecontainerinside{ \r\n    margin-top: 15px;\r\n    border:solid;\r\n    border-radius: 6px;\r\n     border-color: lightgray;\r\n     border-width: thin; \r\n     background-color: #b3ecff;\r\n}\r\n.centrabottone{\r\n    display: -webkit-box;\r\n    display: flex;\r\n     -webkit-box-pack: center;\r\n             justify-content: center;\r\n     margin:15px;\r\n}\r\n.tab-pane{\r\n    height:650px;\r\n    overflow-y:scroll;\r\n    overflow-x: hidden;    \r\n    padding: 10px;\r\n}\r\n.panel{\r\n    margin-bottom:20px;   \r\n    background-color:#fff;\r\n    border:1px solid transparent;\r\n    border-radius:4px;\r\n    box-shadow:0 1px 1px rgba(0,0,0,.05)\r\n}\r\n.panel-body{\r\n    padding:15px\r\n}\r\n.panel-heading{\r\n    padding:10px 15px;\r\n    border-bottom:1px solid transparent;\r\n    border-top-left-radius:3px;\r\n    border-top-right-radius:3px\r\n}\r\n.panel-heading>.dropdown .dropdown-toggle{\r\n    color:inherit\r\n}\r\n.panel-title{\r\n    margin-top:0;\r\n    margin-bottom:0;\r\n    font-size:16px;\r\n    color:inherit\r\n}\r\n.panel-title>a{\r\n    color:inherit\r\n}\r\n.panel-footer{\r\n    padding:10px 15px;\r\n    background-color:#f5f5f5;\r\n    border-top:1px solid #ddd;\r\n    border-bottom-right-radius:3px;\r\n    border-bottom-left-radius:3px\r\n}\r\n.panel>.list-group,.panel>.panel-collapse>.list-group{\r\n    margin-bottom:0\r\n}\r\n.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{\r\n    border-width:1px 0;\r\n    border-radius:0\r\n}\r\n.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{\r\n    border-top:0;\r\n    border-top-left-radius:3px;\r\n    border-top-right-radius:3px\r\n}\r\n.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{\r\n    border-bottom:0;\r\n    border-bottom-right-radius:3px;\r\n    border-bottom-left-radius:3px\r\n}\r\n.panel-heading+.list-group .list-group-item:first-child{\r\n    border-top-width:0\r\n}\r\n.list-group+.panel-footer{\r\n    border-top-width:0\r\n}\r\n.panel>.table,.panel>.table-responsive>.table,.panel>.panel-collapse>.table{\r\n    margin-bottom:0\r\n}\r\n.panel>.table caption,.panel>.table-responsive>.table caption,.panel>.panel-collapse>.table caption{\r\n    padding-right:15px;\r\n    padding-left:15px\r\n}\r\n.panel>.table:first-child,.panel>.table-responsive:first-child>.table:first-child{\r\n    border-top-left-radius:3px;\r\n    border-top-right-radius:3px\r\n}\r\n.panel>.table:first-child>thead:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child{\r\n    border-top-left-radius:3px;\r\n    border-top-right-radius:3px\r\n}\r\n.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child{\r\n    border-top-left-radius:3px\r\n}\r\n.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child{\r\n    border-top-right-radius:3px\r\n}\r\n.panel>.table:last-child,.panel>.table-responsive:last-child>.table:last-child{\r\n    border-bottom-right-radius:3px;\r\n    border-bottom-left-radius:3px\r\n}\r\n.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child{\r\n    border-bottom-right-radius:3px;\r\n    border-bottom-left-radius:3px\r\n}\r\n.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child{\r\n    border-bottom-left-radius:3px\r\n}\r\n.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child{\r\n    border-bottom-right-radius:3px\r\n}\r\n.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{\r\n    border-top:1px solid #ddd\r\n}\r\n.panel>.table>tbody:first-child>tr:first-child th,.panel>.table>tbody:first-child>tr:first-child td{\r\n    border-top:0\r\n}\r\n.panel>.table-bordered,.panel>.table-responsive>.table-bordered{\r\n    border:0\r\n}\r\n.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child{\r\n    border-left:0\r\n}\r\n.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child{\r\n    border-right:0\r\n}\r\n.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th{\r\n    border-bottom:0\r\n}\r\n.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{\r\n    border-bottom:0\r\n}\r\n.panel>.table-responsive{\r\n    margin-bottom:0;\r\n    border:0\r\n}\r\n.panel-group{\r\n    margin-bottom:20px\r\n}\r\n.panel-group .panel{\r\n    margin-bottom:0;\r\n    border-radius:4px\r\n}\r\n.panel-group .panel+.panel{\r\n    margin-top:5px\r\n}\r\n.panel-group .panel-heading{\r\n    border-bottom:0\r\n}\r\n.panel-group .panel-heading+.panel-collapse>.panel-body,.panel-group .panel-heading+.panel-collapse>.list-group{\r\n    border-top:1px solid #ddd\r\n}\r\n.panel-group .panel-footer{\r\n    border-top:0\r\n}\r\n.panel-group .panel-footer+.panel-collapse .panel-body{\r\n    border-bottom:1px solid #ddd\r\n}\r\n.panel-default{\r\n    border-color:#ddd\r\n}\r\n.panel-default>.panel-heading{\r\n    color:#333;\r\n    background-color:#f5f5f5;\r\n    border-color:#ddd\r\n}\r\n.panel-default>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#ddd\r\n}\r\n.panel-default>.panel-heading .badge{\r\n    color:#f5f5f5;\r\n    background-color:#333\r\n}\r\n.panel-default>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#ddd\r\n}\r\n.panel-primary{\r\n    border-color:#dd061c\r\n}\r\n.panel-primary>.panel-heading{\r\n    color:#fff;\r\n    background-color:#dd061c;\r\n    border-color:#dd061c\r\n}\r\n.panel-primary>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#dd061c\r\n}\r\n.panel-primary>.panel-heading .badge{\r\n    color:#dd061c;\r\n    background-color:#fff\r\n}\r\n.panel-primary>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#dd061c\r\n}\r\n.panel-success{\r\n    border-color:#d6e9c6\r\n}\r\n.panel-success>.panel-heading{\r\n    color:#3c763d;\r\n    background-color:#dff0d8;\r\n    border-color:#d6e9c6\r\n}\r\n.panel-success>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#d6e9c6\r\n}\r\n.panel-success>.panel-heading .badge{\r\n    color:#dff0d8;\r\n    background-color:#3c763d\r\n}\r\n.panel-success>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#d6e9c6\r\n}\r\n.panel-info{\r\n    border-color:#bce8f1\r\n}\r\n.panel-info>.panel-heading{\r\n    color:#31708f;\r\n    background-color:#d9edf7;\r\n    border-color:#bce8f1\r\n}\r\n.panel-info>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#bce8f1\r\n}\r\n.panel-info>.panel-heading .badge{\r\n    color:#d9edf7;\r\n    background-color:#31708f\r\n}\r\n.panel-info>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#bce8f1\r\n}\r\n.panel-warning{\r\n    border-color:#faebcc\r\n}\r\n.panel-warning>.panel-heading{\r\n    color:#8a6d3b;\r\n    background-color:#fcf8e3;\r\n    border-color:#faebcc\r\n}\r\n.panel-warning>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#faebcc\r\n}\r\n.panel-warning>.panel-heading .badge{\r\n    color:#fcf8e3;\r\n    background-color:#8a6d3b\r\n}\r\n.panel-warning>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#faebcc\r\n}\r\n.panel-danger{\r\n    border-color:#ebccd1\r\n}\r\n.panel-danger>.panel-heading{\r\n    color:#a94442;\r\n    background-color:#f2dede;\r\n    border-color:#ebccd1\r\n}\r\n.panel-danger>.panel-heading+.panel-collapse>.panel-body{\r\n    border-top-color:#ebccd1\r\n}\r\n.panel-danger>.panel-heading .badge{\r\n    color:#f2dede;\r\n    background-color:#a94442\r\n}\r\n.panel-danger>.panel-footer+.panel-collapse>.panel-body{\r\n    border-bottom-color:#ebccd1\r\n}\r\n.form-group{\r\n    margin-bottom:15px\r\n}\r\n.input-sm,.form-group-sm .form-control{\r\n    height:30px;\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\nselect.input-sm,select.form-group-sm .form-control{\r\n    height:30px;\r\n    line-height:30px\r\n}\r\ntextarea.input-sm,textarea.form-group-sm .form-control,select[multiple].input-sm,select[multiple].form-group-sm .form-control{\r\n    height:auto\r\n}\r\n.input-lg,.form-group-lg .form-control{\r\n    height:46px;\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    line-height:1.33;\r\n    border-radius:6px\r\n}\r\nselect.input-lg,select.form-group-lg .form-control{\r\n    height:46px;\r\n    line-height:46px\r\n}\r\ntextarea.input-lg,textarea.form-group-lg .form-control,select[multiple].input-lg,select[multiple].form-group-lg .form-control{\r\n    height:auto\r\n}\r\n.has-feedback{\r\n    position:relative\r\n}\r\n.has-feedback .form-control{\r\n    padding-right:42.5px\r\n}\r\n.form-inline .form-group{\r\n    display:inline-block;\r\n    margin-bottom:0;\r\n    vertical-align:middle\r\n}\r\n.form-inline .form-control{\r\n    display:inline-block;\r\n    width:auto;\r\n    vertical-align:middle\r\n}\r\n.form-inline .form-control-static{\r\n    display:inline-block\r\n}\r\n.form-inline .input-group{\r\n    display:inline-table;\r\n    vertical-align:middle\r\n}\r\n.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{\r\n    width:auto\r\n}\r\n.form-inline .input-group>.form-control{\r\n    width:100%\r\n}\r\n.form-inline .control-label{\r\n    margin-bottom:0;\r\n    vertical-align:middle\r\n}\r\n.form-inline .radio,.form-inline .checkbox{\r\n    display:inline-block;\r\n    margin-top:0;\r\n    margin-bottom:0;\r\n    vertical-align:middle\r\n}\r\n.form-inline .radio label,.form-inline .checkbox label{\r\n    padding-left:0\r\n}\r\n.form-inline .radio input[type=radio],.form-inline .checkbox input[type=checkbox]{\r\n    position:relative;\r\n    margin-left:0\r\n}\r\n.form-inline .has-feedback .form-control-feedback{\r\n    top:0\r\n}\r\n.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{\r\npadding-top:7px;\r\nmargin-top:0;\r\nmargin-bottom:0\r\n}\r\n.form-horizontal .radio,.form-horizontal .checkbox{\r\nmin-height:27px\r\n}\r\n.form-horizontal .form-group{\r\nmargin-right:-15px;\r\nmargin-left:-15px\r\n}\r\n.help-block{\r\n    display:block;\r\n    margin-top:5px;\r\n    margin-bottom:10px;\r\n    color:#737373\r\n}\r\n.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{\r\n    color:#a94442\r\n}\r\n.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{\r\n    color:#3c763d\r\n}\r\n.row{\r\n    margin-right:-15px;\r\n    margin-left:-15px\r\n}\r\n.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{\r\n    position:relative;\r\n    min-height:1px;\r\n    padding-right:15px;\r\n    padding-left:15px\r\n}\r\n.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{\r\n    float:left\r\n}\r\n.col-xs-12{\r\n    width:100%\r\n}\r\n.col-xs-11{\r\n    width:91.66666667%\r\n}\r\n.col-xs-10{\r\n    width:83.33333333%\r\n}\r\n.col-xs-9{\r\n    width:75%\r\n}\r\n.col-xs-8{\r\n    width:66.66666667%\r\n}\r\n.col-xs-7{\r\n    width:58.33333333%\r\n}\r\n.col-xs-6{\r\n    width:50%\r\n}\r\n.col-xs-5{\r\n    width:41.66666667%\r\n}\r\n.col-xs-4{\r\n    width:33.33333333%\r\n}\r\n.col-xs-3{\r\n    width:25%\r\n}\r\n.col-xs-2{\r\n    width:16.66666667%\r\n}\r\n.col-xs-1{\r\n    width:8.33333333%\r\n}\r\n.col-xs-pull-12{\r\n    right:100%\r\n}\r\n.col-xs-pull-11{\r\n    right:91.66666667%\r\n}\r\n.col-xs-pull-10{\r\n    right:83.33333333%\r\n}\r\n.col-xs-pull-9{\r\n    right:75%\r\n}\r\n.col-xs-pull-8{\r\n    right:66.66666667%\r\n}\r\n.col-xs-pull-7{\r\n    right:58.33333333%\r\n}\r\n.col-xs-pull-6{\r\n    right:50%\r\n}\r\n.col-xs-pull-5{\r\n    right:41.66666667%\r\n}\r\n.col-xs-pull-4{\r\n    right:33.33333333%\r\n}\r\n.col-xs-pull-3{\r\n    right:25%\r\n}\r\n.col-xs-pull-2{\r\n    right:16.66666667%\r\n}\r\n.col-xs-pull-1{\r\n    right:8.33333333%\r\n}\r\n.col-xs-pull-0{\r\n    right:auto\r\n}\r\n.col-xs-push-12{\r\n    left:100%\r\n}\r\n.col-xs-push-11{\r\n    left:91.66666667%\r\n}\r\n.col-xs-push-10{\r\n    left:83.33333333%\r\n}\r\n.col-xs-push-9{\r\n    left:75%\r\n}\r\n.col-xs-push-8{\r\n    left:66.66666667%\r\n}\r\n.col-xs-push-7{\r\n    left:58.33333333%\r\n}\r\n.col-xs-push-6{\r\n    left:50%\r\n}\r\n.col-xs-push-5{\r\n    left:41.66666667%\r\n}\r\n.col-xs-push-4{\r\n    left:33.33333333%\r\n}\r\n.col-xs-push-3{\r\n    left:25%\r\n}\r\n.col-xs-push-2{\r\n    left:16.66666667%\r\n}\r\n.col-xs-push-1{\r\n    left:8.33333333%\r\n}\r\n.col-xs-push-0{\r\n    left:auto\r\n}\r\n.col-xs-offset-12{\r\n    margin-left:100%\r\n}\r\n.col-xs-offset-11{\r\n    margin-left:91.66666667%\r\n}\r\n.col-xs-offset-10{\r\n    margin-left:83.33333333%\r\n}\r\n.col-xs-offset-9{\r\n    margin-left:75%\r\n}\r\n.col-xs-offset-8{\r\n    margin-left:66.66666667%\r\n}\r\n.col-xs-offset-7{\r\n    margin-left:58.33333333%\r\n}\r\n.col-xs-offset-6{\r\n    margin-left:50%\r\n}\r\n.col-xs-offset-5{\r\n    margin-left:41.66666667%\r\n}\r\n.col-xs-offset-4{\r\n    margin-left:33.33333333%\r\n}\r\n.col-xs-offset-3{\r\n    margin-left:25%\r\n}\r\n.col-xs-offset-2{\r\n    margin-left:16.66666667%\r\n}\r\n.col-xs-offset-1{\r\n    margin-left:8.33333333%\r\n}\r\n.col-xs-offset-0{\r\n    margin-left:0\r\n}\r\n@media (min-width:768px){\r\n    .col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{\r\n        float:left\r\n    }\r\n    .col-sm-12{\r\n        width:100%\r\n    }\r\n    .col-sm-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-sm-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-sm-9{\r\n        width:75%\r\n    }\r\n    .col-sm-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-sm-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-sm-6{\r\n        width:50%\r\n    }\r\n    .col-sm-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-sm-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-sm-3{\r\n        width:25%\r\n    }\r\n    .col-sm-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-sm-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-sm-pull-12{\r\n        right:100%\r\n    }\r\n    .col-sm-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-sm-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-sm-pull-9{\r\n        right:75%\r\n    }\r\n    .col-sm-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-sm-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-sm-pull-6{\r\n        right:50%\r\n    }\r\n    .col-sm-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-sm-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-sm-pull-3{\r\n        right:25%\r\n    }\r\n    .col-sm-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-sm-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-sm-pull-0{\r\n        right:auto\r\n    }\r\n    .col-sm-push-12{\r\n        left:100%\r\n    }\r\n    .col-sm-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-sm-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-sm-push-9{\r\n        left:75%\r\n    }\r\n    .col-sm-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-sm-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-sm-push-6{\r\n        left:50%\r\n    }\r\n    .col-sm-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-sm-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-sm-push-3{\r\n        left:25%\r\n    }\r\n    .col-sm-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-sm-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-sm-push-0{\r\n        left:auto\r\n    }\r\n    .col-sm-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-sm-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-sm-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-sm-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-sm-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-sm-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-sm-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-sm-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-sm-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-sm-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-sm-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-sm-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-sm-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n@media (min-width:992px){\r\n    .col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{\r\n        float:left\r\n    }\r\n    .col-md-12{\r\n        width:100%\r\n    }\r\n    .col-md-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-md-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-md-9{\r\n        width:75%\r\n    }\r\n    .col-md-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-md-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-md-6{\r\n        width:50%\r\n    }\r\n    .col-md-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-md-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-md-3{\r\n        width:25%\r\n    }\r\n    .col-md-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-md-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-md-pull-12{\r\n        right:100%\r\n    }\r\n    .col-md-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-md-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-md-pull-9{\r\n        right:75%\r\n    }\r\n    .col-md-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-md-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-md-pull-6{\r\n        right:50%\r\n    }\r\n    .col-md-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-md-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-md-pull-3{\r\n        right:25%\r\n    }\r\n    .col-md-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-md-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-md-pull-0{\r\n        right:auto\r\n    }\r\n    .col-md-push-12{\r\n        left:100%\r\n    }\r\n    .col-md-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-md-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-md-push-9{\r\n        left:75%\r\n    }\r\n    .col-md-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-md-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-md-push-6{\r\n        left:50%\r\n    }\r\n    .col-md-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-md-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-md-push-3{\r\n        left:25%\r\n    }\r\n    .col-md-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-md-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-md-push-0{\r\n        left:auto\r\n    }\r\n    .col-md-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-md-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-md-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-md-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-md-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-md-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-md-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-md-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-md-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-md-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-md-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-md-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-md-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n@media (min-width:1200px){\r\n    .col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{\r\n        float:left\r\n    }\r\n    .col-lg-12{\r\n        width:100%\r\n    }\r\n    .col-lg-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-lg-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-lg-9{\r\n        width:75%\r\n    }\r\n    .col-lg-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-lg-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-lg-6{\r\n        width:50%\r\n    }\r\n    .col-lg-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-lg-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-lg-3{\r\n        width:25%\r\n    }\r\n    .col-lg-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-lg-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-lg-pull-12{\r\n        right:100%\r\n    }\r\n    .col-lg-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-lg-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-lg-pull-9{\r\n        right:75%\r\n    }\r\n    .col-lg-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-lg-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-lg-pull-6{\r\n        right:50%\r\n    }\r\n    .col-lg-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-lg-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-lg-pull-3{\r\n        right:25%\r\n    }\r\n    .col-lg-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-lg-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-lg-pull-0{\r\n        right:auto\r\n    }\r\n    .col-lg-push-12{\r\n        left:100%\r\n    }\r\n    .col-lg-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-lg-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-lg-push-9{\r\n        left:75%\r\n    }\r\n    .col-lg-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-lg-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-lg-push-6{\r\n        left:50%\r\n    }\r\n    .col-lg-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-lg-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-lg-push-3{\r\n        left:25%\r\n    }\r\n    .col-lg-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-lg-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-lg-push-0{\r\n        left:auto\r\n    }\r\n    .col-lg-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-lg-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-lg-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-lg-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-lg-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-lg-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-lg-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-lg-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-lg-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-lg-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-lg-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-lg-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-lg-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{\r\n    position:relative;\r\n    min-height:1px;\r\n    padding-right:15px;\r\n    padding-left:15px\r\n}\r\n.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{\r\n    float:left\r\n}\r\n.col-xs-12{\r\n    width:100%\r\n}\r\n.col-xs-11{\r\n    width:91.66666667%\r\n}\r\n.col-xs-10{\r\n    width:83.33333333%\r\n}\r\n.col-xs-9{\r\n    width:75%\r\n}\r\n.col-xs-8{\r\n    width:66.66666667%\r\n}\r\n.col-xs-7{\r\n    width:58.33333333%\r\n}\r\n.col-xs-6{\r\n    width:50%\r\n}\r\n.col-xs-5{\r\n    width:41.66666667%\r\n}\r\n.col-xs-4{\r\n    width:33.33333333%\r\n}\r\n.col-xs-3{\r\n    width:25%\r\n}\r\n.col-xs-2{\r\n    width:16.66666667%\r\n}\r\n.col-xs-1{\r\n    width:8.33333333%\r\n}\r\n.col-xs-pull-12{\r\n    right:100%\r\n}\r\n.col-xs-pull-11{\r\n    right:91.66666667%\r\n}\r\n.col-xs-pull-10{\r\n    right:83.33333333%\r\n}\r\n.col-xs-pull-9{\r\n    right:75%\r\n}\r\n.col-xs-pull-8{\r\n    right:66.66666667%\r\n}\r\n.col-xs-pull-7{\r\n    right:58.33333333%\r\n}\r\n.col-xs-pull-6{\r\n    right:50%\r\n}\r\n.col-xs-pull-5{\r\n    right:41.66666667%\r\n}\r\n.col-xs-pull-4{\r\n    right:33.33333333%\r\n}\r\n.col-xs-pull-3{\r\n    right:25%\r\n}\r\n.col-xs-pull-2{\r\n    right:16.66666667%\r\n}\r\n.col-xs-pull-1{\r\n    right:8.33333333%\r\n}\r\n.col-xs-pull-0{\r\n    right:auto\r\n}\r\n.col-xs-push-12{\r\n    left:100%\r\n}\r\n.col-xs-push-11{\r\n    left:91.66666667%\r\n}\r\n.col-xs-push-10{\r\n    left:83.33333333%\r\n}\r\n.col-xs-push-9{\r\n    left:75%\r\n}\r\n.col-xs-push-8{\r\n    left:66.66666667%\r\n}\r\n.col-xs-push-7{\r\n    left:58.33333333%\r\n}\r\n.col-xs-push-6{\r\n    left:50%\r\n}\r\n.col-xs-push-5{\r\n    left:41.66666667%\r\n}\r\n.col-xs-push-4{\r\n    left:33.33333333%\r\n}\r\n.col-xs-push-3{\r\n    left:25%\r\n}\r\n.col-xs-push-2{\r\n    left:16.66666667%\r\n}\r\n.col-xs-push-1{\r\n    left:8.33333333%\r\n}\r\n.col-xs-push-0{\r\n    left:auto\r\n}\r\n.col-xs-offset-12{\r\n    margin-left:100%\r\n}\r\n.col-xs-offset-11{\r\n    margin-left:91.66666667%\r\n}\r\n.col-xs-offset-10{\r\n    margin-left:83.33333333%\r\n}\r\n.col-xs-offset-9{\r\n    margin-left:75%\r\n}\r\n.col-xs-offset-8{\r\n    margin-left:66.66666667%\r\n}\r\n.col-xs-offset-7{\r\n    margin-left:58.33333333%\r\n}\r\n.col-xs-offset-6{\r\n    margin-left:50%\r\n}\r\n.col-xs-offset-5{\r\n    margin-left:41.66666667%\r\n}\r\n.col-xs-offset-4{\r\n    margin-left:33.33333333%\r\n}\r\n.col-xs-offset-3{\r\n    margin-left:25%\r\n}\r\n.col-xs-offset-2{\r\n    margin-left:16.66666667%\r\n}\r\n.col-xs-offset-1{\r\n    margin-left:8.33333333%\r\n}\r\n.col-xs-offset-0{\r\n    margin-left:0\r\n}\r\n@media (min-width:768px){\r\n    .col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{\r\n        float:left\r\n    }\r\n    .col-sm-12{\r\n        width:100%\r\n    }\r\n    .col-sm-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-sm-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-sm-9{\r\n        width:75%\r\n    }\r\n    .col-sm-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-sm-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-sm-6{\r\n        width:50%\r\n    }\r\n    .col-sm-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-sm-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-sm-3{\r\n        width:25%\r\n    }\r\n    .col-sm-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-sm-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-sm-pull-12{\r\n        right:100%\r\n    }\r\n    .col-sm-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-sm-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-sm-pull-9{\r\n        right:75%\r\n    }\r\n    .col-sm-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-sm-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-sm-pull-6{\r\n        right:50%\r\n    }\r\n    .col-sm-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-sm-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-sm-pull-3{\r\n        right:25%\r\n    }\r\n    .col-sm-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-sm-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-sm-pull-0{\r\n        right:auto\r\n    }\r\n    .col-sm-push-12{\r\n        left:100%\r\n    }\r\n    .col-sm-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-sm-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-sm-push-9{\r\n        left:75%\r\n    }\r\n    .col-sm-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-sm-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-sm-push-6{\r\n        left:50%\r\n    }\r\n    .col-sm-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-sm-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-sm-push-3{\r\n        left:25%\r\n    }\r\n    .col-sm-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-sm-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-sm-push-0{\r\n        left:auto\r\n    }\r\n    .col-sm-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-sm-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-sm-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-sm-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-sm-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-sm-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-sm-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-sm-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-sm-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-sm-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-sm-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-sm-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-sm-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n@media (min-width:992px){\r\n    .col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{\r\n        float:left\r\n    }\r\n    .col-md-12{\r\n        width:100%\r\n    }\r\n    .col-md-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-md-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-md-9{\r\n        width:75%\r\n    }\r\n    .col-md-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-md-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-md-6{\r\n        width:50%\r\n    }\r\n    .col-md-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-md-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-md-3{\r\n        width:25%\r\n    }\r\n    .col-md-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-md-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-md-pull-12{\r\n        right:100%\r\n    }\r\n    .col-md-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-md-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-md-pull-9{\r\n        right:75%\r\n    }\r\n    .col-md-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-md-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-md-pull-6{\r\n        right:50%\r\n    }\r\n    .col-md-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-md-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-md-pull-3{\r\n        right:25%\r\n    }\r\n    .col-md-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-md-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-md-pull-0{\r\n        right:auto\r\n    }\r\n    .col-md-push-12{\r\n        left:100%\r\n    }\r\n    .col-md-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-md-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-md-push-9{\r\n        left:75%\r\n    }\r\n    .col-md-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-md-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-md-push-6{\r\n        left:50%\r\n    }\r\n    .col-md-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-md-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-md-push-3{\r\n        left:25%\r\n    }\r\n    .col-md-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-md-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-md-push-0{\r\n        left:auto\r\n    }\r\n    .col-md-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-md-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-md-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-md-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-md-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-md-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-md-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-md-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-md-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-md-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-md-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-md-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-md-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\n@media (min-width:1200px){\r\n    .col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{\r\n        float:left\r\n    }\r\n    .col-lg-12{\r\n        width:100%\r\n    }\r\n    .col-lg-11{\r\n        width:91.66666667%\r\n    }\r\n    .col-lg-10{\r\n        width:83.33333333%\r\n    }\r\n    .col-lg-9{\r\n        width:75%\r\n    }\r\n    .col-lg-8{\r\n        width:66.66666667%\r\n    }\r\n    .col-lg-7{\r\n        width:58.33333333%\r\n    }\r\n    .col-lg-6{\r\n        width:50%\r\n    }\r\n    .col-lg-5{\r\n        width:41.66666667%\r\n    }\r\n    .col-lg-4{\r\n        width:33.33333333%\r\n    }\r\n    .col-lg-3{\r\n        width:25%\r\n    }\r\n    .col-lg-2{\r\n        width:16.66666667%\r\n    }\r\n    .col-lg-1{\r\n        width:8.33333333%\r\n    }\r\n    .col-lg-pull-12{\r\n        right:100%\r\n    }\r\n    .col-lg-pull-11{\r\n        right:91.66666667%\r\n    }\r\n    .col-lg-pull-10{\r\n        right:83.33333333%\r\n    }\r\n    .col-lg-pull-9{\r\n        right:75%\r\n    }\r\n    .col-lg-pull-8{\r\n        right:66.66666667%\r\n    }\r\n    .col-lg-pull-7{\r\n        right:58.33333333%\r\n    }\r\n    .col-lg-pull-6{\r\n        right:50%\r\n    }\r\n    .col-lg-pull-5{\r\n        right:41.66666667%\r\n    }\r\n    .col-lg-pull-4{\r\n        right:33.33333333%\r\n    }\r\n    .col-lg-pull-3{\r\n        right:25%\r\n    }\r\n    .col-lg-pull-2{\r\n        right:16.66666667%\r\n    }\r\n    .col-lg-pull-1{\r\n        right:8.33333333%\r\n    }\r\n    .col-lg-pull-0{\r\n        right:auto\r\n    }\r\n    .col-lg-push-12{\r\n        left:100%\r\n    }\r\n    .col-lg-push-11{\r\n        left:91.66666667%\r\n    }\r\n    .col-lg-push-10{\r\n        left:83.33333333%\r\n    }\r\n    .col-lg-push-9{\r\n        left:75%\r\n    }\r\n    .col-lg-push-8{\r\n        left:66.66666667%\r\n    }\r\n    .col-lg-push-7{\r\n        left:58.33333333%\r\n    }\r\n    .col-lg-push-6{\r\n        left:50%\r\n    }\r\n    .col-lg-push-5{\r\n        left:41.66666667%\r\n    }\r\n    .col-lg-push-4{\r\n        left:33.33333333%\r\n    }\r\n    .col-lg-push-3{\r\n        left:25%\r\n    }\r\n    .col-lg-push-2{\r\n        left:16.66666667%\r\n    }\r\n    .col-lg-push-1{\r\n        left:8.33333333%\r\n    }\r\n    .col-lg-push-0{\r\n        left:auto\r\n    }\r\n    .col-lg-offset-12{\r\n        margin-left:100%\r\n    }\r\n    .col-lg-offset-11{\r\n        margin-left:91.66666667%\r\n    }\r\n    .col-lg-offset-10{\r\n        margin-left:83.33333333%\r\n    }\r\n    .col-lg-offset-9{\r\n        margin-left:75%\r\n    }\r\n    .col-lg-offset-8{\r\n        margin-left:66.66666667%\r\n    }\r\n    .col-lg-offset-7{\r\n        margin-left:58.33333333%\r\n    }\r\n    .col-lg-offset-6{\r\n        margin-left:50%\r\n    }\r\n    .col-lg-offset-5{\r\n        margin-left:41.66666667%\r\n    }\r\n    .col-lg-offset-4{\r\n        margin-left:33.33333333%\r\n    }\r\n    .col-lg-offset-3{\r\n        margin-left:25%\r\n    }\r\n    .col-lg-offset-2{\r\n        margin-left:16.66666667%\r\n    }\r\n    .col-lg-offset-1{\r\n        margin-left:8.33333333%\r\n    }\r\n    .col-lg-offset-0{\r\n        margin-left:0\r\n    }\r\n}\r\ntable{\r\n    background-color:transparent\r\n}\r\n.center-block{\r\n    display:block;\r\n    margin-right:auto;\r\n    margin-left:auto\r\n}\r\n.pull-right{\r\n    float:right!important\r\n}\r\n.pull-left{\r\n    float:left!important\r\n}\r\n.hide{\r\n    display:none!important\r\n}\r\n.show{\r\n    display:block!important\r\n}\r\n.invisible{\r\n    visibility:hidden\r\n}\r\n.text-hide{\r\n    font:0/0 a;\r\n    color:transparent;\r\n    text-shadow:none;\r\n    background-color:transparent;\r\n    border:0\r\n}\r\n.hidden{\r\n    display:none!important;\r\n    visibility:hidden!important\r\n}\r\n.affix{\r\n    position:fixed\r\n}\r\n@-ms-viewport{\r\n    width:device-width\r\n}\r\n.visible-xs,.visible-sm,.visible-md,.visible-lg{\r\n    display:none!important\r\n}\r\n.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{\r\n    display:none!important\r\n}\r\ntable{\r\n    background-color:transparent\r\n}\r\ncaption{\r\n    padding-top:8px;\r\n    padding-bottom:8px;\r\n    color:#777;\r\n    text-align:left\r\n}\r\nth{\r\n    text-align:left\r\n}\r\n.table{\r\n    width:100%;\r\n    max-width:100%;\r\n    margin-bottom:20px\r\n}\r\n.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{\r\n    padding:8px;\r\n    line-height:1.42857143;\r\n    vertical-align:top;\r\n    border-top:1px solid #ddd\r\n}\r\n.table>thead>tr>th{\r\n    vertical-align:bottom;\r\n    border-bottom:2px solid #ddd\r\n}\r\n.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>th,.table>caption+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>td,.table>thead:first-child>tr:first-child>td{\r\n    border-top:0\r\n}\r\n.table>tbody+tbody{\r\n    border-top:2px solid #ddd\r\n}\r\n.table .table{\r\n    background-color:#fff\r\n}\r\n.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{\r\n    padding:5px\r\n}\r\n.table-bordered{\r\n    border:1px solid #ddd\r\n}\r\n.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{\r\n    border:1px solid #ddd\r\n}\r\n.table-bordered>thead>tr>th,.table-bordered>thead>tr>td{\r\n    border-bottom-width:2px\r\n}\r\n.table-striped>tbody>tr:nth-child(odd){\r\n    background-color:#f9f9f9\r\n}\r\n.table-hover>tbody>tr:hover{\r\n    background-color:#f5f5f5\r\n}\r\ntable col[class*=col-]{\r\n    position:static;\r\n    display:table-column;\r\n    float:none\r\n}\r\ntable td[class*=col-],table th[class*=col-]{\r\n    position:static;\r\n    display:table-cell;\r\n    float:none\r\n}\r\n.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th{\r\n    background-color:#f5f5f5\r\n}\r\n.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover,.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr.active:hover>th{\r\n    background-color:#e8e8e8\r\n}\r\n.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th{\r\n    background-color:#dff0d8\r\n}\r\n.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover,.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr.success:hover>th{\r\n    background-color:#d0e9c6\r\n}\r\n.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th{\r\n    background-color:#d9edf7\r\n}\r\n.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover,.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr.info:hover>th{\r\n    background-color:#c4e3f3\r\n}\r\n.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th{\r\n    background-color:#fcf8e3\r\n}\r\n.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover,.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr.warning:hover>th{\r\n    background-color:#faf2cc\r\n}\r\n.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th{\r\n    background-color:#f2dede\r\n}\r\n.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover,.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr.danger:hover>th{\r\n    background-color:#ebcccc\r\n}\r\n.table-responsive{\r\n    min-height:.01%;\r\n    overflow-x:auto\r\n}\r\n@media screen and (max-width:767px){\r\n    .table-responsive{\r\n        width:100%;\r\n        margin-bottom:15px;\r\n        overflow-y:hidden;\r\n        -ms-overflow-style:-ms-autohiding-scrollbar;\r\n        border:1px solid #ddd\r\n    }\r\n    .table-responsive>.table{\r\n        margin-bottom:0\r\n    }\r\n    .table-responsive>.table>thead>tr>th,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tfoot>tr>td{\r\n        white-space:nowrap\r\n    }\r\n    .table-responsive>.table-bordered{\r\n        border:0\r\n    }\r\n    .table-responsive>.table-bordered>thead>tr>th:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child{\r\n        border-left:0\r\n    }\r\n    .table-responsive>.table-bordered>thead>tr>th:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child{\r\n        border-right:0\r\n    }\r\n    .table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>th,.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>td{\r\n        border-bottom:0\r\n    }\r\n}\r\nfieldset{\r\n    min-width:0;\r\n    padding:0;\r\n    margin:0;\r\n    border:0\r\n}\r\nlegend{\r\n    display:block;\r\n    width:100%;\r\n    padding:0;\r\n    margin-bottom:20px;\r\n    font-size:21px;\r\n    line-height:inherit;\r\n    color:#333;\r\n    border:0;\r\n    border-bottom:1px solid #e5e5e5\r\n}\r\nlabel{\r\n    display:inline-block;\r\n    max-width:100%;\r\n    margin-bottom:5px;\r\n    font-weight:700\r\n}\r\ninput[type=search]{\r\n    box-sizing:border-box\r\n}\r\ninput[type=radio],input[type=checkbox]{\r\n    margin:4px 0 0;\r\n    margin-top:1px \\9;\r\n    line-height:normal\r\n}\r\ninput[type=file]{\r\n    display:block\r\n}\r\ninput[type=range]{\r\n    display:block;\r\n    width:100%\r\n}\r\nselect[multiple],select[size]{\r\n    height:auto\r\n}\r\ninput[type=file]:focus,input[type=radio]:focus,input[type=checkbox]:focus{\r\n    outline:thin dotted;\r\n    outline:5px auto -webkit-focus-ring-color;\r\n    outline-offset:-2px\r\n}\r\noutput{\r\n    display:block;\r\n    padding-top:7px;\r\n    font-size:14px;\r\n    line-height:1.42857143;\r\n    color:#555\r\n}\r\n.form-control{\r\n    display:block;\r\n    width:100%;\r\n    height:34px;\r\n    padding:6px 12px;\r\n    font-size:14px;\r\n    line-height:1.42857143;\r\n    color:#555;\r\n    background-color:#fff;\r\n    background-image:none;\r\n    border:1px solid #ccc;\r\n    border-radius:4px;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075);\r\n    -webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\r\n    -webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n    transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s\r\n}\r\n.form-control:focus{\r\n    border-color:#66afe9;\r\n    outline:0;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)\r\n}\r\n.form-control::-moz-placeholder{\r\n    color:#999;\r\n    opacity:1\r\n}\r\n.form-control:-ms-input-placeholder{\r\n    color:#999\r\n}\r\n.form-control::-webkit-input-placeholder{\r\n    color:#999\r\n}\r\n.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{\r\n    cursor:not-allowed;\r\n    background-color:#eee;\r\n    opacity:1\r\n}\r\ntextarea.form-control{\r\n    height:auto\r\n}\r\ninput[type=search]{\r\n    -webkit-appearance:none\r\n}\r\ninput[type=date],input[type=time],input[type=datetime-local],input[type=month]{\r\n    line-height:34px;\r\n    line-height:1.42857143 \\0\r\n}\r\ninput[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{\r\n    line-height:30px;\r\n    line-height:1.5 \\0\r\n}\r\ninput[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{\r\n    line-height:46px;\r\n    line-height:1.33 \\0\r\n}\r\n_:-ms-fullscreen,:root input[type=date],_:-ms-fullscreen,:root input[type=time],_:-ms-fullscreen,:root input[type=datetime-local],_:-ms-fullscreen,:root input[type=month]{\r\n    line-height:1.42857143\r\n}\r\n_:-ms-fullscreen.input-sm,:root input[type=date].input-sm,_:-ms-fullscreen.input-sm,:root input[type=time].input-sm,_:-ms-fullscreen.input-sm,:root input[type=datetime-local].input-sm,_:-ms-fullscreen.input-sm,:root input[type=month].input-sm{\r\n    line-height:1.5\r\n}\r\n_:-ms-fullscreen.input-lg,:root input[type=date].input-lg,_:-ms-fullscreen.input-lg,:root input[type=time].input-lg,_:-ms-fullscreen.input-lg,:root input[type=datetime-local].input-lg,_:-ms-fullscreen.input-lg,:root input[type=month].input-lg{\r\n    line-height:1.33\r\n}\r\n.form-group{\r\n    margin-bottom:15px\r\n}\r\n.radio,.checkbox{\r\n    position:relative;\r\n    display:block;\r\n    margin-top:10px;\r\n    margin-bottom:10px\r\n}\r\n.radio label,.checkbox label{\r\n    min-height:20px;\r\n    padding-left:20px;\r\n    margin-bottom:0;\r\n    font-weight:400;\r\n    cursor:pointer\r\n}\r\n.radio input[type=radio],.radio-inline input[type=radio],.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox]{\r\n    position:absolute;\r\n    margin-top:4px \\9;\r\n    margin-left:-20px\r\n}\r\n.radio+.radio,.checkbox+.checkbox{\r\n    margin-top:-5px\r\n}\r\n.radio-inline,.checkbox-inline{\r\n    display:inline-block;\r\n    padding-left:20px;\r\n    margin-bottom:0;\r\n    font-weight:400;\r\n    vertical-align:middle;\r\n    cursor:pointer\r\n}\r\n.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{\r\n    margin-top:0;\r\n    margin-left:10px\r\n}\r\ninput[type=radio][disabled],input[type=checkbox][disabled],input[type=radio].disabled,input[type=checkbox].disabled,fieldset[disabled] input[type=radio],fieldset[disabled] input[type=checkbox]{\r\n    cursor:not-allowed\r\n}\r\n.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{\r\n    cursor:not-allowed\r\n}\r\n.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{\r\n    cursor:not-allowed\r\n}\r\n.form-control-static{\r\n    padding-top:7px;\r\n    padding-bottom:7px;\r\n    margin-bottom:0\r\n}\r\n.form-control-static.input-lg,.form-control-static.input-sm{\r\n    padding-right:0;\r\n    padding-left:0\r\n}\r\n.input-sm,.form-group-sm .form-control{\r\n    height:30px;\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\nselect.input-sm,select.form-group-sm .form-control{\r\n    height:30px;\r\n    line-height:30px\r\n}\r\ntextarea.input-sm,textarea.form-group-sm .form-control,select[multiple].input-sm,select[multiple].form-group-sm .form-control{\r\n    height:auto\r\n}\r\n.input-lg,.form-group-lg .form-control{\r\n    height:46px;\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    line-height:1.33;\r\n    border-radius:6px\r\n}\r\nselect.input-lg,select.form-group-lg .form-control{\r\n    height:46px;\r\n    line-height:46px\r\n}\r\ntextarea.input-lg,textarea.form-group-lg .form-control,select[multiple].input-lg,select[multiple].form-group-lg .form-control{\r\n    height:auto\r\n}\r\n.has-feedback{\r\n    position:relative\r\n}\r\n.has-feedback .form-control{\r\n    padding-right:42.5px\r\n}\r\n.form-control-feedback{\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n    z-index:2;\r\n    display:block;\r\n    width:34px;\r\n    height:34px;\r\n    line-height:34px;\r\n    text-align:center;\r\n    pointer-events:none\r\n}\r\n.input-lg+.form-control-feedback{\r\n    width:46px;\r\n    height:46px;\r\n    line-height:46px\r\n}\r\n.input-sm+.form-control-feedback{\r\n    width:30px;\r\n    height:30px;\r\n    line-height:30px\r\n}\r\n.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{\r\n    color:#3c763d\r\n}\r\n.has-success .form-control{\r\n    border-color:#3c763d;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\r\n}\r\n.has-success .form-control:focus{\r\n    border-color:#2b542c;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168\r\n}\r\n.has-success .input-group-addon{\r\n    color:#3c763d;\r\n    background-color:#dff0d8;\r\n    border-color:#3c763d\r\n}\r\n.has-success .form-control-feedback{\r\n    color:#3c763d\r\n}\r\n.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label{\r\n    color:#8a6d3b\r\n}\r\n.has-warning .form-control{\r\n    border-color:#8a6d3b;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\r\n}\r\n.has-warning .form-control:focus{\r\n    border-color:#66512c;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b\r\n}\r\n.has-warning .input-group-addon{\r\n    color:#8a6d3b;\r\n    background-color:#fcf8e3;\r\n    border-color:#8a6d3b\r\n}\r\n.has-warning .form-control-feedback{\r\n    color:#8a6d3b\r\n}\r\n.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{\r\n    color:#a94442\r\n}\r\n.has-error .form-control{\r\n    border-color:#a94442;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075)\r\n}\r\n.has-error .form-control:focus{\r\n    border-color:#843534;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483\r\n}\r\n.has-error .input-group-addon{\r\n    color:#a94442;\r\n    background-color:#f2dede;\r\n    border-color:#a94442\r\n}\r\n.has-error .form-control-feedback{\r\n    color:#a94442\r\n}\r\n.has-feedback label~.form-control-feedback{\r\n    top:25px\r\n}\r\n.has-feedback label.sr-only~.form-control-feedback{\r\n    top:0\r\n}\r\n.help-block{\r\n    display:block;\r\n    margin-top:5px;\r\n    margin-bottom:10px;\r\n    color:#737373\r\n}\r\n@media (min-width:768px){\r\n    .form-inline .form-group{\r\n        display:inline-block;\r\n        margin-bottom:0;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .form-control{\r\n        display:inline-block;\r\n        width:auto;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .form-control-static{\r\n        display:inline-block\r\n    }\r\n    .form-inline .input-group{\r\n        display:inline-table;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{\r\n        width:auto\r\n    }\r\n    .form-inline .input-group>.form-control{\r\n        width:100%\r\n    }\r\n    .form-inline .control-label{\r\n        margin-bottom:0;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .radio,.form-inline .checkbox{\r\n        display:inline-block;\r\n        margin-top:0;\r\n        margin-bottom:0;\r\n        vertical-align:middle\r\n    }\r\n    .form-inline .radio label,.form-inline .checkbox label{\r\n        padding-left:0\r\n    }\r\n    .form-inline .radio input[type=radio],.form-inline .checkbox input[type=checkbox]{\r\n        position:relative;\r\n        margin-left:0\r\n    }\r\n    .form-inline .has-feedback .form-control-feedback{\r\n        top:0\r\n    }\r\n}\r\n.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{\r\n    padding-top:7px;\r\n    margin-top:0;\r\n    margin-bottom:0\r\n}\r\n.form-horizontal .radio,.form-horizontal .checkbox{\r\n    min-height:27px\r\n}\r\n.form-horizontal .form-group{\r\n    margin-right:-15px;\r\n    margin-left:-15px\r\n}\r\n@media (min-width:768px){\r\n    .form-horizontal .control-label{\r\n        padding-top:7px;\r\n        margin-bottom:0;\r\n        text-align:right\r\n    }\r\n}\r\n.form-horizontal .has-feedback .form-control-feedback{\r\n    right:15px\r\n}\r\n@media (min-width:768px){\r\n    .form-horizontal .form-group-lg .control-label{\r\n        padding-top:14.3px\r\n    }\r\n}\r\n@media (min-width:768px){\r\n    .form-horizontal .form-group-sm .control-label{\r\n        padding-top:6px\r\n    }\r\n}\r\n.btn{\r\n    display:inline-block;\r\n    padding:6px 12px;\r\n    margin-bottom:0;\r\n    font-size:14px;\r\n    font-weight:400;\r\n    line-height:1.42857143;\r\n    text-align:center;\r\n    white-space:nowrap;\r\n    vertical-align:middle;\r\n    touch-action:manipulation;\r\n    cursor:pointer;\r\n    -webkit-fermo-select:none;\r\n    -moz-fermo-select:none;\r\n    -ms-fermo-select:none;\r\n    fermo-select:none;\r\n    background-image:none;\r\n    border:1px solid transparent;\r\n    border-radius:4px\r\n}\r\n.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus{\r\n    outline:thin dotted;\r\n    outline:5px auto -webkit-focus-ring-color;\r\n    outline-offset:-2px\r\n}\r\n.btn:hover,.btn:focus,.btn.focus{\r\n    color:#333;\r\n    text-decoration:none\r\n}\r\n.btn:active,.btn.active{\r\n    background-image:none;\r\n    outline:0;\r\n    box-shadow:inset 0 3px 5px rgba(0,0,0,.125)\r\n}\r\n.btn.disabled,.btn[disabled],fieldset[disabled] .btn{\r\n    pointer-events:none;\r\n    cursor:not-allowed;\r\n    filter:alpha(opacity=65);\r\n    box-shadow:none;\r\n    opacity:.65\r\n}\r\n.btn-default{\r\n    color:#333;\r\n    background-color:#fff;\r\n    border-color:#ccc\r\n}\r\n.btn-default:hover,.btn-default:focus,.btn-default.focus,.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{\r\n    color:#333;\r\n    background-color:#e6e6e6;\r\n    border-color:#adadad\r\n}\r\n.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{\r\n    background-image:none\r\n}\r\n.btn-default.disabled,.btn-default[disabled],fieldset[disabled] .btn-default,.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled.focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default.focus,.btn-default.disabled:active,.btn-default[disabled]:active,fieldset[disabled] .btn-default:active,.btn-default.disabled.active,.btn-default[disabled].active,fieldset[disabled] .btn-default.active{\r\n    background-color:#fff;\r\n    border-color:#ccc\r\n}\r\n.btn-default .badge{\r\n    color:#fff;\r\n    background-color:#333\r\n}\r\n.btn-primary{\r\n    color:#fff;\r\n    background-color:#dd061c;\r\n    border-color:#dd061c\r\n}\r\n.btn-primary:hover,.btn-primary:focus,.btn-primary.focus,.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{\r\n    color:#fff;\r\n    background-color:#dd061c;\r\n    border-color:#dd061c\r\n}\r\n.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{\r\n    background-image:none\r\n}\r\n.btn-primary.disabled,.btn-primary[disabled],fieldset[disabled] .btn-primary,.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled.focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary.focus,.btn-primary.disabled:active,.btn-primary[disabled]:active,fieldset[disabled] .btn-primary:active,.btn-primary.disabled.active,.btn-primary[disabled].active,fieldset[disabled] .btn-primary.active{\r\n    background-color:#dd061c;\r\n    border-color:#dd061c\r\n}\r\n.btn-primary .badge{\r\n    color:#dd061c;\r\n    background-color:#fff\r\n}\r\n.btn-success{\r\n    color:#fff;\r\n    background-color:#5cb85c;\r\n    border-color:#4cae4c\r\n}\r\n.btn-success:hover,.btn-success:focus,.btn-success.focus,.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{\r\n    color:#fff;\r\n    background-color:#449d44;\r\n    border-color:#398439\r\n}\r\n.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{\r\n    background-image:none\r\n}\r\n.btn-success.disabled,.btn-success[disabled],fieldset[disabled] .btn-success,.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled.focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success.focus,.btn-success.disabled:active,.btn-success[disabled]:active,fieldset[disabled] .btn-success:active,.btn-success.disabled.active,.btn-success[disabled].active,fieldset[disabled] .btn-success.active{\r\n    background-color:#5cb85c;\r\n    border-color:#4cae4c\r\n}\r\n.btn-success .badge{\r\n    color:#5cb85c;\r\n    background-color:#fff\r\n}\r\n.btn-info{\r\n    color:#fff;\r\n    background-color:#5bc0de;\r\n    border-color:#46b8da\r\n}\r\n.btn-info:hover,.btn-info:focus,.btn-info.focus,.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{\r\n    color:#fff;\r\n    background-color:#31b0d5;\r\n    border-color:#269abc\r\n}\r\n.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{\r\n    background-image:none\r\n}\r\n.btn-info.disabled,.btn-info[disabled],fieldset[disabled] .btn-info,.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled.focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info.focus,.btn-info.disabled:active,.btn-info[disabled]:active,fieldset[disabled] .btn-info:active,.btn-info.disabled.active,.btn-info[disabled].active,fieldset[disabled] .btn-info.active{\r\n    background-color:#5bc0de;\r\n    border-color:#46b8da\r\n}\r\n.btn-info .badge{\r\n    color:#5bc0de;\r\n    background-color:#fff\r\n}\r\n.btn-warning{\r\n    color:#fff;\r\n    background-color:#f0ad4e;\r\n    border-color:#eea236\r\n}\r\n.btn-warning:hover,.btn-warning:focus,.btn-warning.focus,.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{\r\n    color:#fff;\r\n    background-color:#ec971f;\r\n    border-color:#d58512\r\n}\r\n.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{\r\n    background-image:none\r\n}\r\n.btn-warning.disabled,.btn-warning[disabled],fieldset[disabled] .btn-warning,.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled.focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning.focus,.btn-warning.disabled:active,.btn-warning[disabled]:active,fieldset[disabled] .btn-warning:active,.btn-warning.disabled.active,.btn-warning[disabled].active,fieldset[disabled] .btn-warning.active{\r\n    background-color:#f0ad4e;\r\n    border-color:#eea236\r\n}\r\n.btn-warning .badge{\r\n    color:#f0ad4e;\r\n    background-color:#fff\r\n}\r\n.btn-danger{\r\n    color:#fff;\r\n    background-color:#d9534f;\r\n    border-color:#d43f3a\r\n}\r\n.btn-danger:hover,.btn-danger:focus,.btn-danger.focus,.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{\r\n    color:#fff;\r\n    background-color:#c9302c;\r\n    border-color:#ac2925\r\n}\r\n.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{\r\n    background-image:none\r\n}\r\n.btn-danger.disabled,.btn-danger[disabled],fieldset[disabled] .btn-danger,.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled.focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger.focus,.btn-danger.disabled:active,.btn-danger[disabled]:active,fieldset[disabled] .btn-danger:active,.btn-danger.disabled.active,.btn-danger[disabled].active,fieldset[disabled] .btn-danger.active{\r\n    background-color:#d9534f;\r\n    border-color:#d43f3a\r\n}\r\n.btn-danger .badge{\r\n    color:#d9534f;\r\n    background-color:#fff\r\n}\r\n.btn-link{\r\n    font-weight:400;\r\n    color:#dd061c;\r\n    border-radius:0\r\n}\r\n.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link{\r\n    background-color:transparent;\r\n    box-shadow:none\r\n}\r\n.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{\r\n    border-color:transparent\r\n}\r\n.btn-link:hover,.btn-link:focus{\r\n    color:#2a6496;\r\n    text-decoration:underline;\r\n    background-color:transparent\r\n}\r\n.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{\r\n    color:#777;\r\n    text-decoration:none\r\n}\r\n.btn-lg,.btn-group-lg>.btn{\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    line-height:1.33;\r\n    border-radius:6px\r\n}\r\n.btn-sm,.btn-group-sm>.btn{\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\n.btn-xs,.btn-group-xs>.btn{\r\n    padding:1px 5px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\n.btn-block{\r\n    display:block;\r\n    width:100%\r\n}\r\n.btn-block+.btn-block{\r\n    margin-top:5px\r\n}\r\ninput[type=submit].btn-block,input[type=reset].btn-block,input[type=button].btn-block{\r\n    width:100%\r\n}\r\n.fade{\r\n    opacity:0;\r\n    -webkit-transition:opacity .15s linear;\r\n    transition:opacity .15s linear\r\n}\r\n.fade.in{\r\n    opacity:1\r\n}\r\n.collapse{\r\n    display:none;\r\n    visibility:hidden\r\n}\r\n.collapse.in{\r\n    display:block;\r\n    visibility:visible\r\n}\r\ntr.collapse.in{\r\n    display:table-row\r\n}\r\ntbody.collapse.in{\r\n    display:table-row-group\r\n}\r\n.collapsing{\r\n    position:relative;\r\n    height:0;\r\n    overflow:hidden;\r\n    -webkit-transition-timing-function:ease;\r\n    transition-timing-function:ease;\r\n    -webkit-transition-duration:.35s;\r\n    transition-duration:.35s;\r\n    -webkit-transition-property:height,visibility;\r\n    transition-property:height,visibility\r\n}\r\n.caret{\r\n    display:inline-block;\r\n    width:0;\r\n    height:0;\r\n    margin-left:2px;\r\n    vertical-align:middle;\r\n    border-top:4px solid;\r\n    border-right:4px solid transparent;\r\n    border-left:4px solid transparent\r\n}\r\n.dropdown{\r\n    position:relative\r\n}\r\n.dropdown-toggle:focus{\r\n    outline:0\r\n}\r\n.dropdown-menu{\r\n    position:absolute;\r\n    top:100%;\r\n    left:0;\r\n    z-index:1000;\r\n    display:none;\r\n    float:left;\r\n    min-width:160px;\r\n    padding:5px 0;\r\n    margin:2px 0 0;\r\n    font-size:14px;\r\n    text-align:left;\r\n    list-style:none;\r\n    background-color:#fff;\r\n    -webkit-background-clip:padding-box;\r\n    background-clip:padding-box;\r\n    border:1px solid #ccc;\r\n    border:1px solid rgba(0,0,0,.15);\r\n    border-radius:4px;\r\n    box-shadow:0 6px 12px rgba(0,0,0,.175)\r\n}\r\n.dropdown-menu.pull-right{\r\n    right:0;\r\n    left:auto\r\n}\r\n.dropdown-menu .divider{\r\n    height:1px;\r\n    margin:9px 0;\r\n    overflow:hidden;\r\n    background-color:#e5e5e5\r\n}\r\n.dropdown-menu>li>a{\r\n    display:block;\r\n    padding:3px 20px;\r\n    clear:both;\r\n    font-weight:400;\r\n    line-height:1.42857143;\r\n    color:#333;\r\n    white-space:nowrap\r\n}\r\n.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{\r\n    color:#262626;\r\n    text-decoration:none;\r\n    background-color:#f5f5f5\r\n}\r\n.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{\r\n    color:#fff;\r\n    text-decoration:none;\r\n    background-color:#dd061c;\r\n    outline:0\r\n}\r\n.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{\r\n    color:#777\r\n}\r\n.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{\r\n    text-decoration:none;\r\n    cursor:not-allowed;\r\n    background-color:transparent;\r\n    background-image:none;\r\n    filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)\r\n}\r\n.open>.dropdown-menu{\r\n    display:block\r\n}\r\n.open>a{\r\n    outline:0\r\n}\r\n.dropdown-menu-right{\r\n    right:0;\r\n    left:auto\r\n}\r\n.dropdown-menu-left{\r\n    right:auto;\r\n    left:0\r\n}\r\n.dropdown-header{\r\n    display:block;\r\n    padding:3px 20px;\r\n    font-size:12px;\r\n    line-height:1.42857143;\r\n    color:#777;\r\n    white-space:nowrap\r\n}\r\n.dropdown-backdrop{\r\n    position:fixed;\r\n    top:0;\r\n    right:0;\r\n    bottom:0;\r\n    left:0;\r\n    z-index:990\r\n}\r\n.pull-right>.dropdown-menu{\r\n    right:0;\r\n    left:auto\r\n}\r\n.dropup .caret,.navbar-fixed-bottom .dropdown .caret{\r\n    content:\"\";\r\n    border-top:0;\r\n    border-bottom:4px solid\r\n}\r\n.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{\r\n    top:auto;\r\n    bottom:100%;\r\n    margin-bottom:1px\r\n}\r\n@media (min-width:768px){\r\n    .navbar-right .dropdown-menu{\r\n        right:0;\r\n        left:auto\r\n    }\r\n    .navbar-right .dropdown-menu-left{\r\n        right:auto;\r\n        left:0\r\n    }\r\n}\r\n.btn-group,.btn-group-vertical{\r\n    position:relative;\r\n    display:inline-block;\r\n    vertical-align:middle\r\n}\r\n.btn-group>.btn,.btn-group-vertical>.btn{\r\n    position:relative;\r\n    float:left\r\n}\r\n.btn-group>.btn:hover,.btn-group-vertical>.btn:hover,.btn-group>.btn:focus,.btn-group-vertical>.btn:focus,.btn-group>.btn:active,.btn-group-vertical>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn.active{\r\n    z-index:2\r\n}\r\n.btn-group>.btn:focus,.btn-group-vertical>.btn:focus{\r\n    outline:0\r\n}\r\n.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{\r\n    margin-left:-1px\r\n}\r\n.btn-toolbar{\r\n    margin-left:-5px\r\n}\r\n.btn-toolbar .btn-group,.btn-toolbar .input-group{\r\n    float:left\r\n}\r\n.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{\r\n    margin-left:5px\r\n}\r\n.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){\r\n    border-radius:0\r\n}\r\n.btn-group>.btn:first-child{\r\n    margin-left:0\r\n}\r\n.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){\r\n    border-top-right-radius:0;\r\n    border-bottom-right-radius:0\r\n}\r\n.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){\r\n    border-top-left-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n.btn-group>.btn-group{\r\n    float:left\r\n}\r\n.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{\r\n    border-radius:0\r\n}\r\n.btn-group>.btn-group:first-child>.btn:last-child,.btn-group>.btn-group:first-child>.dropdown-toggle{\r\n    border-top-right-radius:0;\r\n    border-bottom-right-radius:0\r\n}\r\n.btn-group>.btn-group:last-child>.btn:first-child{\r\n    border-top-left-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{\r\n    outline:0\r\n}\r\n.btn-group>.btn+.dropdown-toggle{\r\n    padding-right:8px;\r\n    padding-left:8px\r\n}\r\n.btn-group>.btn-lg+.dropdown-toggle{\r\n    padding-right:12px;\r\n    padding-left:12px\r\n}\r\n.btn-group.open .dropdown-toggle{\r\n    box-shadow:inset 0 3px 5px rgba(0,0,0,.125)\r\n}\r\n.btn-group.open .dropdown-toggle.btn-link{\r\n    box-shadow:none\r\n}\r\n.btn .caret{\r\n    margin-left:0\r\n}\r\n.btn-lg .caret{\r\n    border-width:5px 5px 0;\r\n    border-bottom-width:0\r\n}\r\n.dropup .btn-lg .caret{\r\n    border-width:0 5px 5px\r\n}\r\n.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{\r\n    display:block;\r\n    float:none;\r\n    width:100%;\r\n    max-width:100%\r\n}\r\n.btn-group-vertical>.btn-group>.btn{\r\n    float:none\r\n}\r\n.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{\r\n    margin-top:-1px;\r\n    margin-left:0\r\n}\r\n.btn-group-vertical>.btn:not(:first-child):not(:last-child){\r\n    border-radius:0\r\n}\r\n.btn-group-vertical>.btn:first-child:not(:last-child){\r\n    border-top-right-radius:4px;\r\n    border-bottom-right-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n.btn-group-vertical>.btn:last-child:not(:first-child){\r\n    border-top-left-radius:0;\r\n    border-top-right-radius:0;\r\n    border-bottom-left-radius:4px\r\n}\r\n.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{\r\n    border-radius:0\r\n}\r\n.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{\r\n    border-bottom-right-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{\r\n    border-top-left-radius:0;\r\n    border-top-right-radius:0\r\n}\r\n.btn-group-justified{\r\n    display:table;\r\n    width:100%;\r\n    table-layout:fixed;\r\n    border-collapse:separate\r\n}\r\n.btn-group-justified>.btn,.btn-group-justified>.btn-group{\r\n    display:table-cell;\r\n    float:none;\r\n    width:1%\r\n}\r\n.btn-group-justified>.btn-group .btn{\r\n    width:100%\r\n}\r\n.btn-group-justified>.btn-group .dropdown-menu{\r\n    left:auto\r\n}\r\n[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=radio],[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox]{\r\n    position:absolute;\r\n    clip:rect(0,0,0,0);\r\n    pointer-events:none\r\n}\r\n.input-group{\r\n    position:relative;\r\n    display:table;\r\n    border-collapse:separate\r\n}\r\n.input-group[class*=col-]{\r\n    float:none;\r\n    padding-right:0;\r\n    padding-left:0\r\n}\r\n.input-group .form-control{\r\n    position:relative;\r\n    z-index:2;\r\n    float:left;\r\n    width:100%;\r\n    margin-bottom:0\r\n}\r\n.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{\r\n    height:46px;\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    line-height:1.33;\r\n    border-radius:6px\r\n}\r\nselect.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{\r\n    height:46px;\r\n    line-height:46px\r\n}\r\ntextarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn,select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn{\r\n    height:auto\r\n}\r\n.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{\r\n    height:30px;\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    line-height:1.5;\r\n    border-radius:3px\r\n}\r\nselect.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{\r\n    height:30px;\r\n    line-height:30px\r\n}\r\ntextarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn,select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn{\r\n    height:auto\r\n}\r\n.input-group-addon,.input-group-btn,.input-group .form-control{\r\n    display:table-cell\r\n}\r\n.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){\r\n    border-radius:0\r\n}\r\n.input-group-addon,.input-group-btn{\r\n    width:1%;\r\n    white-space:nowrap;\r\n    vertical-align:middle\r\n}\r\n.input-group-addon{\r\n    padding:6px 12px;\r\n    font-size:14px;\r\n    font-weight:400;\r\n    line-height:1;\r\n    color:#555;\r\n    text-align:center;\r\n    background-color:#eee;\r\n    border:1px solid #ccc;\r\n    border-radius:4px\r\n}\r\n.input-group-addon.input-sm{\r\n    padding:5px 10px;\r\n    font-size:12px;\r\n    border-radius:3px\r\n}\r\n.input-group-addon.input-lg{\r\n    padding:10px 16px;\r\n    font-size:18px;\r\n    border-radius:6px\r\n}\r\n.input-group-addon input[type=radio],.input-group-addon input[type=checkbox]{\r\n    margin-top:0\r\n}\r\n.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn{\r\n    border-top-right-radius:0;\r\n    border-bottom-right-radius:0\r\n}\r\n.input-group-addon:first-child{\r\n    border-right:0\r\n}\r\n.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn{\r\n    border-top-left-radius:0;\r\n    border-bottom-left-radius:0\r\n}\r\n.input-group-addon:last-child{\r\n    border-left:0\r\n}\r\n.input-group-btn{\r\n    position:relative;\r\n    font-size:0;\r\n    white-space:nowrap\r\n}\r\n.input-group-btn>.btn{\r\n    position:relative\r\n}\r\n.input-group-btn>.btn+.btn{\r\n    margin-left:-1px\r\n}\r\n.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active{\r\n    z-index:2\r\n}\r\n.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{\r\n    margin-right:-1px\r\n}\r\n.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{\r\n    margin-left:-1px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZXJtby1tYW5hZ2VtZW50L2Zlcm1vLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtLQUNqQix1QkFBdUI7S0FDdkIsa0JBQWtCO0tBQ2xCLHlCQUF5QjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7S0FDakIsdUJBQXVCO0tBQ3ZCLGtCQUFrQjtLQUNsQix5QkFBeUI7QUFDOUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0tBQ2pCLHVCQUF1QjtLQUN2QixrQkFBa0I7S0FDbEIseUJBQXlCO0FBQzlCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtLQUNqQix1QkFBdUI7S0FDdkIsa0JBQWtCO0tBQ2xCLHlCQUF5QjtBQUM5QjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0tBQ1osd0JBQXVCO2FBQXZCLHVCQUF1QjtLQUN2QixXQUFXO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFFakI7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUI7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQjtB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QSxrQkFBa0I7QUFDbEI7QUFDQTtBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEI7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtBQUNKO0FBQ0E7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7QUFDSjtBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtBQUNKO0FBQ0E7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7QUFDSjtBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lB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SUFDakIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QjtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zlcm1vLW1hbmFnZW1lbnQvZmVybW8tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wb3N0ZWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6c29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgYm9yZGVyLXdpZHRoOiB0aGluOyBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmNjO1xyXG59XHJcbi5zaXRtYWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6c29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgYm9yZGVyLXdpZHRoOiB0aGluOyBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlmZmNjO1xyXG59XHJcbi5hdXRvY29tcGxldGVjb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOnNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgIGJvcmRlci13aWR0aDogdGhpbjsgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZWNmZjtcclxufVxyXG4uYXV0b2NvbXBsZXRlY29udGFpbmVyaW5zaWRleyBcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6c29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgYm9yZGVyLXdpZHRoOiB0aGluOyBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlY2ZmO1xyXG59XHJcbi5jZW50cmFib3R0b25le1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBtYXJnaW46MTVweDtcclxufVxyXG4udGFiLXBhbmV7XHJcbiAgICBoZWlnaHQ6NjUwcHg7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5wYW5lbHtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDsgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzowIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpO1xyXG4gICAgYm94LXNoYWRvdzowIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpXHJcbn1cclxuLnBhbmVsLWJvZHl7XHJcbiAgICBwYWRkaW5nOjE1cHhcclxufVxyXG4ucGFuZWwtaGVhZGluZ3tcclxuICAgIHBhZGRpbmc6MTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweFxyXG59XHJcbi5wYW5lbC1oZWFkaW5nPi5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgY29sb3I6aW5oZXJpdFxyXG59XHJcbi5wYW5lbC10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6MDtcclxuICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgY29sb3I6aW5oZXJpdFxyXG59XHJcbi5wYW5lbC10aXRsZT5he1xyXG4gICAgY29sb3I6aW5oZXJpdFxyXG59XHJcbi5wYW5lbC1mb290ZXJ7XHJcbiAgICBwYWRkaW5nOjEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweFxyXG59XHJcbi5wYW5lbD4ubGlzdC1ncm91cCwucGFuZWw+LnBhbmVsLWNvbGxhcHNlPi5saXN0LWdyb3Vwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTowXHJcbn1cclxuLnBhbmVsPi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0sLnBhbmVsPi5wYW5lbC1jb2xsYXBzZT4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgYm9yZGVyLXdpZHRoOjFweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czowXHJcbn1cclxuLnBhbmVsPi5saXN0LWdyb3VwOmZpcnN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQsLnBhbmVsPi5wYW5lbC1jb2xsYXBzZT4ubGlzdC1ncm91cDpmaXJzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXRvcDowO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozcHhcclxufVxyXG4ucGFuZWw+Lmxpc3QtZ3JvdXA6bGFzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQsLnBhbmVsPi5wYW5lbC1jb2xsYXBzZT4ubGlzdC1ncm91cDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci1ib3R0b206MDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4XHJcbn1cclxuLnBhbmVsLWhlYWRpbmcrLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6MFxyXG59XHJcbi5saXN0LWdyb3VwKy5wYW5lbC1mb290ZXJ7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOjBcclxufVxyXG4ucGFuZWw+LnRhYmxlLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUsLnBhbmVsPi5wYW5lbC1jb2xsYXBzZT4udGFibGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBcclxufVxyXG4ucGFuZWw+LnRhYmxlIGNhcHRpb24sLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZSBjYXB0aW9uLC5wYW5lbD4ucGFuZWwtY29sbGFwc2U+LnRhYmxlIGNhcHRpb257XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTVweFxyXG59XHJcbi5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6M3B4XHJcbn1cclxuLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6M3B4XHJcbn1cclxuLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHhcclxufVxyXG4ucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6M3B4XHJcbn1cclxuLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkPi50YWJsZTpsYXN0LWNoaWxke1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6M3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHhcclxufVxyXG4ucGFuZWw+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkPi50YWJsZTpsYXN0LWNoaWxkPnRmb290Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4XHJcbn1cclxuLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRmb290Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRmb290Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweFxyXG59XHJcbi5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweFxyXG59XHJcbi5wYW5lbD4ucGFuZWwtYm9keSsudGFibGUsLnBhbmVsPi5wYW5lbC1ib2R5Ky50YWJsZS1yZXNwb25zaXZlLC5wYW5lbD4udGFibGUrLnBhbmVsLWJvZHksLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlKy5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2RkZFxyXG59XHJcbi5wYW5lbD4udGFibGU+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGgsLnBhbmVsPi50YWJsZT50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZHtcclxuICAgIGJvcmRlci10b3A6MFxyXG59XHJcbi5wYW5lbD4udGFibGUtYm9yZGVyZWQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlcjowXHJcbn1cclxuLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGQ6Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItbGVmdDowXHJcbn1cclxuLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItcmlnaHQ6MFxyXG59XHJcbi5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cjpmaXJzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmZpcnN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6Zmlyc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cjpmaXJzdC1jaGlsZD50aCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyOmZpcnN0LWNoaWxkPnRoLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6Zmlyc3QtY2hpbGQ+dGgsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpmaXJzdC1jaGlsZD50aHtcclxuICAgIGJvcmRlci1ib3R0b206MFxyXG59XHJcbi5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6bGFzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cjpsYXN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI6bGFzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGgsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpsYXN0LWNoaWxkPnRoLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI6bGFzdC1jaGlsZD50aCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGh7XHJcbiAgICBib3JkZXItYm90dG9tOjBcclxufVxyXG4ucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICBib3JkZXI6MFxyXG59XHJcbi5wYW5lbC1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweFxyXG59XHJcbi5wYW5lbC1ncm91cCAucGFuZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweFxyXG59XHJcbi5wYW5lbC1ncm91cCAucGFuZWwrLnBhbmVse1xyXG4gICAgbWFyZ2luLXRvcDo1cHhcclxufVxyXG4ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmd7XHJcbiAgICBib3JkZXItYm90dG9tOjBcclxufVxyXG4ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5LC5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZysucGFuZWwtY29sbGFwc2U+Lmxpc3QtZ3JvdXB7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkXHJcbn1cclxuLnBhbmVsLWdyb3VwIC5wYW5lbC1mb290ZXJ7XHJcbiAgICBib3JkZXItdG9wOjBcclxufVxyXG4ucGFuZWwtZ3JvdXAgLnBhbmVsLWZvb3RlcisucGFuZWwtY29sbGFwc2UgLnBhbmVsLWJvZHl7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkXHJcbn1cclxuLnBhbmVsLWRlZmF1bHR7XHJcbiAgICBib3JkZXItY29sb3I6I2RkZFxyXG59XHJcbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5ne1xyXG4gICAgY29sb3I6IzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtcclxuICAgIGJvcmRlci1jb2xvcjojZGRkXHJcbn1cclxuLnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjojZGRkXHJcbn1cclxuLnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcgLmJhZGdle1xyXG4gICAgY29sb3I6I2Y1ZjVmNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzMzM1xyXG59XHJcbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjojZGRkXHJcbn1cclxuLnBhbmVsLXByaW1hcnl7XHJcbiAgICBib3JkZXItY29sb3I6I2RkMDYxY1xyXG59XHJcbi5wYW5lbC1wcmltYXJ5Pi5wYW5lbC1oZWFkaW5ne1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkMDYxYztcclxuICAgIGJvcmRlci1jb2xvcjojZGQwNjFjXHJcbn1cclxuLnBhbmVsLXByaW1hcnk+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjojZGQwNjFjXHJcbn1cclxuLnBhbmVsLXByaW1hcnk+LnBhbmVsLWhlYWRpbmcgLmJhZGdle1xyXG4gICAgY29sb3I6I2RkMDYxYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZlxyXG59XHJcbi5wYW5lbC1wcmltYXJ5Pi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjojZGQwNjFjXHJcbn1cclxuLnBhbmVsLXN1Y2Nlc3N7XHJcbiAgICBib3JkZXItY29sb3I6I2Q2ZTljNlxyXG59XHJcbi5wYW5lbC1zdWNjZXNzPi5wYW5lbC1oZWFkaW5ne1xyXG4gICAgY29sb3I6IzNjNzYzZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2RmZjBkODtcclxuICAgIGJvcmRlci1jb2xvcjojZDZlOWM2XHJcbn1cclxuLnBhbmVsLXN1Y2Nlc3M+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjojZDZlOWM2XHJcbn1cclxuLnBhbmVsLXN1Y2Nlc3M+LnBhbmVsLWhlYWRpbmcgLmJhZGdle1xyXG4gICAgY29sb3I6I2RmZjBkODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNjNzYzZFxyXG59XHJcbi5wYW5lbC1zdWNjZXNzPi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjojZDZlOWM2XHJcbn1cclxuLnBhbmVsLWluZm97XHJcbiAgICBib3JkZXItY29sb3I6I2JjZThmMVxyXG59XHJcbi5wYW5lbC1pbmZvPi5wYW5lbC1oZWFkaW5ne1xyXG4gICAgY29sb3I6IzMxNzA4ZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Q5ZWRmNztcclxuICAgIGJvcmRlci1jb2xvcjojYmNlOGYxXHJcbn1cclxuLnBhbmVsLWluZm8+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjojYmNlOGYxXHJcbn1cclxuLnBhbmVsLWluZm8+LnBhbmVsLWhlYWRpbmcgLmJhZGdle1xyXG4gICAgY29sb3I6I2Q5ZWRmNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzMxNzA4ZlxyXG59XHJcbi5wYW5lbC1pbmZvPi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjojYmNlOGYxXHJcbn1cclxuLnBhbmVsLXdhcm5pbmd7XHJcbiAgICBib3JkZXItY29sb3I6I2ZhZWJjY1xyXG59XHJcbi5wYW5lbC13YXJuaW5nPi5wYW5lbC1oZWFkaW5ne1xyXG4gICAgY29sb3I6IzhhNmQzYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZjZjhlMztcclxuICAgIGJvcmRlci1jb2xvcjojZmFlYmNjXHJcbn1cclxuLnBhbmVsLXdhcm5pbmc+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjojZmFlYmNjXHJcbn1cclxuLnBhbmVsLXdhcm5pbmc+LnBhbmVsLWhlYWRpbmcgLmJhZGdle1xyXG4gICAgY29sb3I6I2ZjZjhlMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzhhNmQzYlxyXG59XHJcbi5wYW5lbC13YXJuaW5nPi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjojZmFlYmNjXHJcbn1cclxuLnBhbmVsLWRhbmdlcntcclxuICAgIGJvcmRlci1jb2xvcjojZWJjY2QxXHJcbn1cclxuLnBhbmVsLWRhbmdlcj4ucGFuZWwtaGVhZGluZ3tcclxuICAgIGNvbG9yOiNhOTQ0NDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMmRlZGU7XHJcbiAgICBib3JkZXItY29sb3I6I2ViY2NkMVxyXG59XHJcbi5wYW5lbC1kYW5nZXI+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjojZWJjY2QxXHJcbn1cclxuLnBhbmVsLWRhbmdlcj4ucGFuZWwtaGVhZGluZyAuYmFkZ2V7XHJcbiAgICBjb2xvcjojZjJkZWRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYTk0NDQyXHJcbn1cclxuLnBhbmVsLWRhbmdlcj4ucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6I2ViY2NkMVxyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweFxyXG59XHJcblxyXG4uaW5wdXQtc20sLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czozcHhcclxufVxyXG5zZWxlY3QuaW5wdXQtc20sc2VsZWN0LmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MzBweFxyXG59XHJcbnRleHRhcmVhLmlucHV0LXNtLHRleHRhcmVhLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbCxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LXNtLHNlbGVjdFttdWx0aXBsZV0uZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OmF1dG9cclxufVxyXG4uaW5wdXQtbGcsLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDo0NnB4O1xyXG4gICAgcGFkZGluZzoxMHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOjZweFxyXG59XHJcbnNlbGVjdC5pbnB1dC1sZyxzZWxlY3QuZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OjQ2cHg7XHJcbiAgICBsaW5lLWhlaWdodDo0NnB4XHJcbn1cclxudGV4dGFyZWEuaW5wdXQtbGcsdGV4dGFyZWEuZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9sLHNlbGVjdFttdWx0aXBsZV0uaW5wdXQtbGcsc2VsZWN0W211bHRpcGxlXS5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6YXV0b1xyXG59XHJcbi5oYXMtZmVlZGJhY2t7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZVxyXG59XHJcbi5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbHtcclxuICAgIHBhZGRpbmctcmlnaHQ6NDIuNXB4XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSAuZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlXHJcbn1cclxuLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcclxufVxyXG4uZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbC1zdGF0aWN7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9ja1xyXG59XHJcbi5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXB7XHJcbiAgICBkaXNwbGF5OmlubGluZS10YWJsZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG59XHJcbi5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWFkZG9uLC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biwuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDphdXRvXHJcbn1cclxuLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbi5mb3JtLWlubGluZSAuY29udHJvbC1sYWJlbHtcclxuICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG59XHJcbi5mb3JtLWlubGluZSAucmFkaW8sLmZvcm0taW5saW5lIC5jaGVja2JveHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDowO1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlXHJcbn1cclxuLmZvcm0taW5saW5lIC5yYWRpbyBsYWJlbCwuZm9ybS1pbmxpbmUgLmNoZWNrYm94IGxhYmVse1xyXG4gICAgcGFkZGluZy1sZWZ0OjBcclxufVxyXG4uZm9ybS1pbmxpbmUgLnJhZGlvIGlucHV0W3R5cGU9cmFkaW9dLC5mb3JtLWlubGluZSAuY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF17XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OjBcclxufVxyXG4uZm9ybS1pbmxpbmUgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNre1xyXG4gICAgdG9wOjBcclxufVxyXG5cclxuLmZvcm0taG9yaXpvbnRhbCAucmFkaW8sLmZvcm0taG9yaXpvbnRhbCAuY2hlY2tib3gsLmZvcm0taG9yaXpvbnRhbCAucmFkaW8taW5saW5lLC5mb3JtLWhvcml6b250YWwgLmNoZWNrYm94LWlubGluZXtcclxucGFkZGluZy10b3A6N3B4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbm1hcmdpbi1ib3R0b206MFxyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLnJhZGlvLC5mb3JtLWhvcml6b250YWwgLmNoZWNrYm94e1xyXG5taW4taGVpZ2h0OjI3cHhcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3Vwe1xyXG5tYXJnaW4tcmlnaHQ6LTE1cHg7XHJcbm1hcmdpbi1sZWZ0Oi0xNXB4XHJcbn1cclxuXHJcbi5oZWxwLWJsb2Nre1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgY29sb3I6IzczNzM3M1xyXG59XHJcbi5oYXMtZXJyb3IgLmhlbHAtYmxvY2ssLmhhcy1lcnJvciAuY29udHJvbC1sYWJlbCwuaGFzLWVycm9yIC5yYWRpbywuaGFzLWVycm9yIC5jaGVja2JveCwuaGFzLWVycm9yIC5yYWRpby1pbmxpbmUsLmhhcy1lcnJvciAuY2hlY2tib3gtaW5saW5lLC5oYXMtZXJyb3IucmFkaW8gbGFiZWwsLmhhcy1lcnJvci5jaGVja2JveCBsYWJlbCwuaGFzLWVycm9yLnJhZGlvLWlubGluZSBsYWJlbCwuaGFzLWVycm9yLmNoZWNrYm94LWlubGluZSBsYWJlbHtcclxuICAgIGNvbG9yOiNhOTQ0NDJcclxufVxyXG4uaGFzLXN1Y2Nlc3MgLmhlbHAtYmxvY2ssLmhhcy1zdWNjZXNzIC5jb250cm9sLWxhYmVsLC5oYXMtc3VjY2VzcyAucmFkaW8sLmhhcy1zdWNjZXNzIC5jaGVja2JveCwuaGFzLXN1Y2Nlc3MgLnJhZGlvLWlubGluZSwuaGFzLXN1Y2Nlc3MgLmNoZWNrYm94LWlubGluZSwuaGFzLXN1Y2Nlc3MucmFkaW8gbGFiZWwsLmhhcy1zdWNjZXNzLmNoZWNrYm94IGxhYmVsLC5oYXMtc3VjY2Vzcy5yYWRpby1pbmxpbmUgbGFiZWwsLmhhcy1zdWNjZXNzLmNoZWNrYm94LWlubGluZSBsYWJlbHtcclxuICAgIGNvbG9yOiMzYzc2M2RcclxufVxyXG5cclxuLnJvd3tcclxuICAgIG1hcmdpbi1yaWdodDotMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4XHJcbn1cclxuLmNvbC14cy0xLC5jb2wtc20tMSwuY29sLW1kLTEsLmNvbC1sZy0xLC5jb2wteHMtMiwuY29sLXNtLTIsLmNvbC1tZC0yLC5jb2wtbGctMiwuY29sLXhzLTMsLmNvbC1zbS0zLC5jb2wtbWQtMywuY29sLWxnLTMsLmNvbC14cy00LC5jb2wtc20tNCwuY29sLW1kLTQsLmNvbC1sZy00LC5jb2wteHMtNSwuY29sLXNtLTUsLmNvbC1tZC01LC5jb2wtbGctNSwuY29sLXhzLTYsLmNvbC1zbS02LC5jb2wtbWQtNiwuY29sLWxnLTYsLmNvbC14cy03LC5jb2wtc20tNywuY29sLW1kLTcsLmNvbC1sZy03LC5jb2wteHMtOCwuY29sLXNtLTgsLmNvbC1tZC04LC5jb2wtbGctOCwuY29sLXhzLTksLmNvbC1zbS05LC5jb2wtbWQtOSwuY29sLWxnLTksLmNvbC14cy0xMCwuY29sLXNtLTEwLC5jb2wtbWQtMTAsLmNvbC1sZy0xMCwuY29sLXhzLTExLC5jb2wtc20tMTEsLmNvbC1tZC0xMSwuY29sLWxnLTExLC5jb2wteHMtMTIsLmNvbC1zbS0xMiwuY29sLW1kLTEyLC5jb2wtbGctMTJ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6MXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjE1cHhcclxufVxyXG4uY29sLXhzLTEsLmNvbC14cy0yLC5jb2wteHMtMywuY29sLXhzLTQsLmNvbC14cy01LC5jb2wteHMtNiwuY29sLXhzLTcsLmNvbC14cy04LC5jb2wteHMtOSwuY29sLXhzLTEwLC5jb2wteHMtMTEsLmNvbC14cy0xMntcclxuICAgIGZsb2F0OmxlZnRcclxufVxyXG4uY29sLXhzLTEye1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbi5jb2wteHMtMTF7XHJcbiAgICB3aWR0aDo5MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLTEwe1xyXG4gICAgd2lkdGg6ODMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy05e1xyXG4gICAgd2lkdGg6NzUlXHJcbn1cclxuLmNvbC14cy04e1xyXG4gICAgd2lkdGg6NjYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy03e1xyXG4gICAgd2lkdGg6NTguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy02e1xyXG4gICAgd2lkdGg6NTAlXHJcbn1cclxuLmNvbC14cy01e1xyXG4gICAgd2lkdGg6NDEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy00e1xyXG4gICAgd2lkdGg6MzMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy0ze1xyXG4gICAgd2lkdGg6MjUlXHJcbn1cclxuLmNvbC14cy0ye1xyXG4gICAgd2lkdGg6MTYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy0xe1xyXG4gICAgd2lkdGg6OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1bGwtMTJ7XHJcbiAgICByaWdodDoxMDAlXHJcbn1cclxuLmNvbC14cy1wdWxsLTExe1xyXG4gICAgcmlnaHQ6OTEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1wdWxsLTEwe1xyXG4gICAgcmlnaHQ6ODMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdWxsLTl7XHJcbiAgICByaWdodDo3NSVcclxufVxyXG4uY29sLXhzLXB1bGwtOHtcclxuICAgIHJpZ2h0OjY2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVsbC03e1xyXG4gICAgcmlnaHQ6NTguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdWxsLTZ7XHJcbiAgICByaWdodDo1MCVcclxufVxyXG4uY29sLXhzLXB1bGwtNXtcclxuICAgIHJpZ2h0OjQxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVsbC00e1xyXG4gICAgcmlnaHQ6MzMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdWxsLTN7XHJcbiAgICByaWdodDoyNSVcclxufVxyXG4uY29sLXhzLXB1bGwtMntcclxuICAgIHJpZ2h0OjE2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVsbC0xe1xyXG4gICAgcmlnaHQ6OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1bGwtMHtcclxuICAgIHJpZ2h0OmF1dG9cclxufVxyXG4uY29sLXhzLXB1c2gtMTJ7XHJcbiAgICBsZWZ0OjEwMCVcclxufVxyXG4uY29sLXhzLXB1c2gtMTF7XHJcbiAgICBsZWZ0OjkxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVzaC0xMHtcclxuICAgIGxlZnQ6ODMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdXNoLTl7XHJcbiAgICBsZWZ0Ojc1JVxyXG59XHJcbi5jb2wteHMtcHVzaC04e1xyXG4gICAgbGVmdDo2Ni42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1c2gtN3tcclxuICAgIGxlZnQ6NTguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdXNoLTZ7XHJcbiAgICBsZWZ0OjUwJVxyXG59XHJcbi5jb2wteHMtcHVzaC01e1xyXG4gICAgbGVmdDo0MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1c2gtNHtcclxuICAgIGxlZnQ6MzMuMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1wdXNoLTN7XHJcbiAgICBsZWZ0OjI1JVxyXG59XHJcbi5jb2wteHMtcHVzaC0ye1xyXG4gICAgbGVmdDoxNi42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1c2gtMXtcclxuICAgIGxlZnQ6OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1c2gtMHtcclxuICAgIGxlZnQ6YXV0b1xyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTEye1xyXG4gICAgbWFyZ2luLWxlZnQ6MTAwJVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTExe1xyXG4gICAgbWFyZ2luLWxlZnQ6OTEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMTB7XHJcbiAgICBtYXJnaW4tbGVmdDo4My4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLW9mZnNldC05e1xyXG4gICAgbWFyZ2luLWxlZnQ6NzUlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtOHtcclxuICAgIG1hcmdpbi1sZWZ0OjY2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTd7XHJcbiAgICBtYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLW9mZnNldC02e1xyXG4gICAgbWFyZ2luLWxlZnQ6NTAlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtNXtcclxuICAgIG1hcmdpbi1sZWZ0OjQxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTR7XHJcbiAgICBtYXJnaW4tbGVmdDozMy4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLW9mZnNldC0ze1xyXG4gICAgbWFyZ2luLWxlZnQ6MjUlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMntcclxuICAgIG1hcmdpbi1sZWZ0OjE2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTF7XHJcbiAgICBtYXJnaW4tbGVmdDo4LjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTB7XHJcbiAgICBtYXJnaW4tbGVmdDowXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmNvbC1zbS0xLC5jb2wtc20tMiwuY29sLXNtLTMsLmNvbC1zbS00LC5jb2wtc20tNSwuY29sLXNtLTYsLmNvbC1zbS03LC5jb2wtc20tOCwuY29sLXNtLTksLmNvbC1zbS0xMCwuY29sLXNtLTExLC5jb2wtc20tMTJ7XHJcbiAgICAgICAgZmxvYXQ6bGVmdFxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS0xMntcclxuICAgICAgICB3aWR0aDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTExe1xyXG4gICAgICAgIHdpZHRoOjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS0xMHtcclxuICAgICAgICB3aWR0aDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tOXtcclxuICAgICAgICB3aWR0aDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tOHtcclxuICAgICAgICB3aWR0aDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tN3tcclxuICAgICAgICB3aWR0aDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tNntcclxuICAgICAgICB3aWR0aDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tNXtcclxuICAgICAgICB3aWR0aDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tNHtcclxuICAgICAgICB3aWR0aDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tM3tcclxuICAgICAgICB3aWR0aDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tMntcclxuICAgICAgICB3aWR0aDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tMXtcclxuICAgICAgICB3aWR0aDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTEye1xyXG4gICAgICAgIHJpZ2h0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0xMXtcclxuICAgICAgICByaWdodDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0xMHtcclxuICAgICAgICByaWdodDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC05e1xyXG4gICAgICAgIHJpZ2h0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTh7XHJcbiAgICAgICAgcmlnaHQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtN3tcclxuICAgICAgICByaWdodDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC02e1xyXG4gICAgICAgIHJpZ2h0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTV7XHJcbiAgICAgICAgcmlnaHQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtNHtcclxuICAgICAgICByaWdodDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0ze1xyXG4gICAgICAgIHJpZ2h0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTJ7XHJcbiAgICAgICAgcmlnaHQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtMXtcclxuICAgICAgICByaWdodDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTB7XHJcbiAgICAgICAgcmlnaHQ6YXV0b1xyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTEye1xyXG4gICAgICAgIGxlZnQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTExe1xyXG4gICAgICAgIGxlZnQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtMTB7XHJcbiAgICAgICAgbGVmdDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC05e1xyXG4gICAgICAgIGxlZnQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtOHtcclxuICAgICAgICBsZWZ0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTd7XHJcbiAgICAgICAgbGVmdDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC02e1xyXG4gICAgICAgIGxlZnQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtNXtcclxuICAgICAgICBsZWZ0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTR7XHJcbiAgICAgICAgbGVmdDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC0ze1xyXG4gICAgICAgIGxlZnQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtMntcclxuICAgICAgICBsZWZ0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTF7XHJcbiAgICAgICAgbGVmdDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTB7XHJcbiAgICAgICAgbGVmdDphdXRvXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0xMntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0xMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTEwe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtOXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTh7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC03e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtNntcclxuICAgICAgICBtYXJnaW4tbGVmdDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC00e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtM3tcclxuICAgICAgICBtYXJnaW4tbGVmdDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0xe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0we1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7XHJcbiAgICAuY29sLW1kLTEsLmNvbC1tZC0yLC5jb2wtbWQtMywuY29sLW1kLTQsLmNvbC1tZC01LC5jb2wtbWQtNiwuY29sLW1kLTcsLmNvbC1tZC04LC5jb2wtbWQtOSwuY29sLW1kLTEwLC5jb2wtbWQtMTEsLmNvbC1tZC0xMntcclxuICAgICAgICBmbG9hdDpsZWZ0XHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTEye1xyXG4gICAgICAgIHdpZHRoOjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtMTF7XHJcbiAgICAgICAgd2lkdGg6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTEwe1xyXG4gICAgICAgIHdpZHRoOjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC05e1xyXG4gICAgICAgIHdpZHRoOjc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC04e1xyXG4gICAgICAgIHdpZHRoOjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC03e1xyXG4gICAgICAgIHdpZHRoOjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC02e1xyXG4gICAgICAgIHdpZHRoOjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC01e1xyXG4gICAgICAgIHdpZHRoOjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC00e1xyXG4gICAgICAgIHdpZHRoOjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0ze1xyXG4gICAgICAgIHdpZHRoOjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0ye1xyXG4gICAgICAgIHdpZHRoOjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0xe1xyXG4gICAgICAgIHdpZHRoOjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtMTJ7XHJcbiAgICAgICAgcmlnaHQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTExe1xyXG4gICAgICAgIHJpZ2h0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTEwe1xyXG4gICAgICAgIHJpZ2h0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTl7XHJcbiAgICAgICAgcmlnaHQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtOHtcclxuICAgICAgICByaWdodDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC03e1xyXG4gICAgICAgIHJpZ2h0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTZ7XHJcbiAgICAgICAgcmlnaHQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtNXtcclxuICAgICAgICByaWdodDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC00e1xyXG4gICAgICAgIHJpZ2h0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTN7XHJcbiAgICAgICAgcmlnaHQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtMntcclxuICAgICAgICByaWdodDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC0xe1xyXG4gICAgICAgIHJpZ2h0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtMHtcclxuICAgICAgICByaWdodDphdXRvXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMTJ7XHJcbiAgICAgICAgbGVmdDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMTF7XHJcbiAgICAgICAgbGVmdDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC0xMHtcclxuICAgICAgICBsZWZ0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTl7XHJcbiAgICAgICAgbGVmdDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC04e1xyXG4gICAgICAgIGxlZnQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtN3tcclxuICAgICAgICBsZWZ0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTZ7XHJcbiAgICAgICAgbGVmdDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC01e1xyXG4gICAgICAgIGxlZnQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtNHtcclxuICAgICAgICBsZWZ0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTN7XHJcbiAgICAgICAgbGVmdDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC0ye1xyXG4gICAgICAgIGxlZnQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMXtcclxuICAgICAgICBsZWZ0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtMHtcclxuICAgICAgICBsZWZ0OmF1dG9cclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTEye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTExe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtMTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC05e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtOHtcclxuICAgICAgICBtYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC02e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtNXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC0ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtMntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7XHJcbiAgICAuY29sLWxnLTEsLmNvbC1sZy0yLC5jb2wtbGctMywuY29sLWxnLTQsLmNvbC1sZy01LC5jb2wtbGctNiwuY29sLWxnLTcsLmNvbC1sZy04LC5jb2wtbGctOSwuY29sLWxnLTEwLC5jb2wtbGctMTEsLmNvbC1sZy0xMntcclxuICAgICAgICBmbG9hdDpsZWZ0XHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTEye1xyXG4gICAgICAgIHdpZHRoOjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctMTF7XHJcbiAgICAgICAgd2lkdGg6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTEwe1xyXG4gICAgICAgIHdpZHRoOjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy05e1xyXG4gICAgICAgIHdpZHRoOjc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy04e1xyXG4gICAgICAgIHdpZHRoOjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy03e1xyXG4gICAgICAgIHdpZHRoOjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy02e1xyXG4gICAgICAgIHdpZHRoOjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy01e1xyXG4gICAgICAgIHdpZHRoOjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy00e1xyXG4gICAgICAgIHdpZHRoOjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy0ze1xyXG4gICAgICAgIHdpZHRoOjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy0ye1xyXG4gICAgICAgIHdpZHRoOjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy0xe1xyXG4gICAgICAgIHdpZHRoOjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtMTJ7XHJcbiAgICAgICAgcmlnaHQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTExe1xyXG4gICAgICAgIHJpZ2h0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTEwe1xyXG4gICAgICAgIHJpZ2h0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTl7XHJcbiAgICAgICAgcmlnaHQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtOHtcclxuICAgICAgICByaWdodDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC03e1xyXG4gICAgICAgIHJpZ2h0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTZ7XHJcbiAgICAgICAgcmlnaHQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtNXtcclxuICAgICAgICByaWdodDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC00e1xyXG4gICAgICAgIHJpZ2h0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTN7XHJcbiAgICAgICAgcmlnaHQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtMntcclxuICAgICAgICByaWdodDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC0xe1xyXG4gICAgICAgIHJpZ2h0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtMHtcclxuICAgICAgICByaWdodDphdXRvXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMTJ7XHJcbiAgICAgICAgbGVmdDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMTF7XHJcbiAgICAgICAgbGVmdDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC0xMHtcclxuICAgICAgICBsZWZ0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTl7XHJcbiAgICAgICAgbGVmdDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC04e1xyXG4gICAgICAgIGxlZnQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtN3tcclxuICAgICAgICBsZWZ0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTZ7XHJcbiAgICAgICAgbGVmdDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC01e1xyXG4gICAgICAgIGxlZnQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtNHtcclxuICAgICAgICBsZWZ0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTN7XHJcbiAgICAgICAgbGVmdDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC0ye1xyXG4gICAgICAgIGxlZnQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMXtcclxuICAgICAgICBsZWZ0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtMHtcclxuICAgICAgICBsZWZ0OmF1dG9cclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTEye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTExe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtMTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC05e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtOHtcclxuICAgICAgICBtYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC02e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtNXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC0ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtMntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MFxyXG4gICAgfVxyXG59XHJcblxyXG4uY29sLXhzLTEsLmNvbC1zbS0xLC5jb2wtbWQtMSwuY29sLWxnLTEsLmNvbC14cy0yLC5jb2wtc20tMiwuY29sLW1kLTIsLmNvbC1sZy0yLC5jb2wteHMtMywuY29sLXNtLTMsLmNvbC1tZC0zLC5jb2wtbGctMywuY29sLXhzLTQsLmNvbC1zbS00LC5jb2wtbWQtNCwuY29sLWxnLTQsLmNvbC14cy01LC5jb2wtc20tNSwuY29sLW1kLTUsLmNvbC1sZy01LC5jb2wteHMtNiwuY29sLXNtLTYsLmNvbC1tZC02LC5jb2wtbGctNiwuY29sLXhzLTcsLmNvbC1zbS03LC5jb2wtbWQtNywuY29sLWxnLTcsLmNvbC14cy04LC5jb2wtc20tOCwuY29sLW1kLTgsLmNvbC1sZy04LC5jb2wteHMtOSwuY29sLXNtLTksLmNvbC1tZC05LC5jb2wtbGctOSwuY29sLXhzLTEwLC5jb2wtc20tMTAsLmNvbC1tZC0xMCwuY29sLWxnLTEwLC5jb2wteHMtMTEsLmNvbC1zbS0xMSwuY29sLW1kLTExLC5jb2wtbGctMTEsLmNvbC14cy0xMiwuY29sLXNtLTEyLC5jb2wtbWQtMTIsLmNvbC1sZy0xMntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDoxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTVweFxyXG59XHJcbi5jb2wteHMtMSwuY29sLXhzLTIsLmNvbC14cy0zLC5jb2wteHMtNCwuY29sLXhzLTUsLmNvbC14cy02LC5jb2wteHMtNywuY29sLXhzLTgsLmNvbC14cy05LC5jb2wteHMtMTAsLmNvbC14cy0xMSwuY29sLXhzLTEye1xyXG4gICAgZmxvYXQ6bGVmdFxyXG59XHJcbi5jb2wteHMtMTJ7XHJcbiAgICB3aWR0aDoxMDAlXHJcbn1cclxuLmNvbC14cy0xMXtcclxuICAgIHdpZHRoOjkxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtMTB7XHJcbiAgICB3aWR0aDo4My4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLTl7XHJcbiAgICB3aWR0aDo3NSVcclxufVxyXG4uY29sLXhzLTh7XHJcbiAgICB3aWR0aDo2Ni42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLTd7XHJcbiAgICB3aWR0aDo1OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLTZ7XHJcbiAgICB3aWR0aDo1MCVcclxufVxyXG4uY29sLXhzLTV7XHJcbiAgICB3aWR0aDo0MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLTR7XHJcbiAgICB3aWR0aDozMy4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLTN7XHJcbiAgICB3aWR0aDoyNSVcclxufVxyXG4uY29sLXhzLTJ7XHJcbiAgICB3aWR0aDoxNi42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLTF7XHJcbiAgICB3aWR0aDo4LjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtcHVsbC0xMntcclxuICAgIHJpZ2h0OjEwMCVcclxufVxyXG4uY29sLXhzLXB1bGwtMTF7XHJcbiAgICByaWdodDo5MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLXB1bGwtMTB7XHJcbiAgICByaWdodDo4My4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1bGwtOXtcclxuICAgIHJpZ2h0Ojc1JVxyXG59XHJcbi5jb2wteHMtcHVsbC04e1xyXG4gICAgcmlnaHQ6NjYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1wdWxsLTd7XHJcbiAgICByaWdodDo1OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1bGwtNntcclxuICAgIHJpZ2h0OjUwJVxyXG59XHJcbi5jb2wteHMtcHVsbC01e1xyXG4gICAgcmlnaHQ6NDEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1wdWxsLTR7XHJcbiAgICByaWdodDozMy4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1bGwtM3tcclxuICAgIHJpZ2h0OjI1JVxyXG59XHJcbi5jb2wteHMtcHVsbC0ye1xyXG4gICAgcmlnaHQ6MTYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1wdWxsLTF7XHJcbiAgICByaWdodDo4LjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtcHVsbC0we1xyXG4gICAgcmlnaHQ6YXV0b1xyXG59XHJcbi5jb2wteHMtcHVzaC0xMntcclxuICAgIGxlZnQ6MTAwJVxyXG59XHJcbi5jb2wteHMtcHVzaC0xMXtcclxuICAgIGxlZnQ6OTEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1wdXNoLTEwe1xyXG4gICAgbGVmdDo4My4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1c2gtOXtcclxuICAgIGxlZnQ6NzUlXHJcbn1cclxuLmNvbC14cy1wdXNoLTh7XHJcbiAgICBsZWZ0OjY2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVzaC03e1xyXG4gICAgbGVmdDo1OC4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1c2gtNntcclxuICAgIGxlZnQ6NTAlXHJcbn1cclxuLmNvbC14cy1wdXNoLTV7XHJcbiAgICBsZWZ0OjQxLjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVzaC00e1xyXG4gICAgbGVmdDozMy4zMzMzMzMzMyVcclxufVxyXG4uY29sLXhzLXB1c2gtM3tcclxuICAgIGxlZnQ6MjUlXHJcbn1cclxuLmNvbC14cy1wdXNoLTJ7XHJcbiAgICBsZWZ0OjE2LjY2NjY2NjY3JVxyXG59XHJcbi5jb2wteHMtcHVzaC0xe1xyXG4gICAgbGVmdDo4LjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtcHVzaC0we1xyXG4gICAgbGVmdDphdXRvXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMTJ7XHJcbiAgICBtYXJnaW4tbGVmdDoxMDAlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMTF7XHJcbiAgICBtYXJnaW4tbGVmdDo5MS42NjY2NjY2NyVcclxufVxyXG4uY29sLXhzLW9mZnNldC0xMHtcclxuICAgIG1hcmdpbi1sZWZ0OjgzLjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTl7XHJcbiAgICBtYXJnaW4tbGVmdDo3NSVcclxufVxyXG4uY29sLXhzLW9mZnNldC04e1xyXG4gICAgbWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtN3tcclxuICAgIG1hcmdpbi1sZWZ0OjU4LjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTZ7XHJcbiAgICBtYXJnaW4tbGVmdDo1MCVcclxufVxyXG4uY29sLXhzLW9mZnNldC01e1xyXG4gICAgbWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtNHtcclxuICAgIG1hcmdpbi1sZWZ0OjMzLjMzMzMzMzMzJVxyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTN7XHJcbiAgICBtYXJnaW4tbGVmdDoyNSVcclxufVxyXG4uY29sLXhzLW9mZnNldC0ye1xyXG4gICAgbWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjclXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMXtcclxuICAgIG1hcmdpbi1sZWZ0OjguMzMzMzMzMzMlXHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMHtcclxuICAgIG1hcmdpbi1sZWZ0OjBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuY29sLXNtLTEsLmNvbC1zbS0yLC5jb2wtc20tMywuY29sLXNtLTQsLmNvbC1zbS01LC5jb2wtc20tNiwuY29sLXNtLTcsLmNvbC1zbS04LC5jb2wtc20tOSwuY29sLXNtLTEwLC5jb2wtc20tMTEsLmNvbC1zbS0xMntcclxuICAgICAgICBmbG9hdDpsZWZ0XHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTEye1xyXG4gICAgICAgIHdpZHRoOjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tMTF7XHJcbiAgICAgICAgd2lkdGg6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTEwe1xyXG4gICAgICAgIHdpZHRoOjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS05e1xyXG4gICAgICAgIHdpZHRoOjc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS04e1xyXG4gICAgICAgIHdpZHRoOjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS03e1xyXG4gICAgICAgIHdpZHRoOjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS02e1xyXG4gICAgICAgIHdpZHRoOjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS01e1xyXG4gICAgICAgIHdpZHRoOjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS00e1xyXG4gICAgICAgIHdpZHRoOjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS0ze1xyXG4gICAgICAgIHdpZHRoOjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS0ye1xyXG4gICAgICAgIHdpZHRoOjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS0xe1xyXG4gICAgICAgIHdpZHRoOjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtMTJ7XHJcbiAgICAgICAgcmlnaHQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTExe1xyXG4gICAgICAgIHJpZ2h0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTEwe1xyXG4gICAgICAgIHJpZ2h0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTl7XHJcbiAgICAgICAgcmlnaHQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtOHtcclxuICAgICAgICByaWdodDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC03e1xyXG4gICAgICAgIHJpZ2h0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTZ7XHJcbiAgICAgICAgcmlnaHQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtNXtcclxuICAgICAgICByaWdodDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC00e1xyXG4gICAgICAgIHJpZ2h0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdWxsLTN7XHJcbiAgICAgICAgcmlnaHQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtMntcclxuICAgICAgICByaWdodDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVsbC0xe1xyXG4gICAgICAgIHJpZ2h0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1bGwtMHtcclxuICAgICAgICByaWdodDphdXRvXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtMTJ7XHJcbiAgICAgICAgbGVmdDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtMTF7XHJcbiAgICAgICAgbGVmdDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC0xMHtcclxuICAgICAgICBsZWZ0OjgzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTl7XHJcbiAgICAgICAgbGVmdDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC04e1xyXG4gICAgICAgIGxlZnQ6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtN3tcclxuICAgICAgICBsZWZ0OjU4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTZ7XHJcbiAgICAgICAgbGVmdDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC01e1xyXG4gICAgICAgIGxlZnQ6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtNHtcclxuICAgICAgICBsZWZ0OjMzLjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1wdXNoLTN7XHJcbiAgICAgICAgbGVmdDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtc20tcHVzaC0ye1xyXG4gICAgICAgIGxlZnQ6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtMXtcclxuICAgICAgICBsZWZ0OjguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLXB1c2gtMHtcclxuICAgICAgICBsZWZ0OmF1dG9cclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTEye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTExe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtMTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC05e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtOHtcclxuICAgICAgICBtYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC02e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtNXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLW9mZnNldC0ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbS1vZmZzZXQtMntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtc20tb2Zmc2V0LTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXtcclxuICAgIC5jb2wtbWQtMSwuY29sLW1kLTIsLmNvbC1tZC0zLC5jb2wtbWQtNCwuY29sLW1kLTUsLmNvbC1tZC02LC5jb2wtbWQtNywuY29sLW1kLTgsLmNvbC1tZC05LC5jb2wtbWQtMTAsLmNvbC1tZC0xMSwuY29sLW1kLTEye1xyXG4gICAgICAgIGZsb2F0OmxlZnRcclxuICAgIH1cclxuICAgIC5jb2wtbWQtMTJ7XHJcbiAgICAgICAgd2lkdGg6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0xMXtcclxuICAgICAgICB3aWR0aDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtMTB7XHJcbiAgICAgICAgd2lkdGg6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTl7XHJcbiAgICAgICAgd2lkdGg6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTh7XHJcbiAgICAgICAgd2lkdGg6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTd7XHJcbiAgICAgICAgd2lkdGg6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTZ7XHJcbiAgICAgICAgd2lkdGg6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTV7XHJcbiAgICAgICAgd2lkdGg6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTR7XHJcbiAgICAgICAgd2lkdGg6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTN7XHJcbiAgICAgICAgd2lkdGg6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTJ7XHJcbiAgICAgICAgd2lkdGg6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTF7XHJcbiAgICAgICAgd2lkdGg6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC0xMntcclxuICAgICAgICByaWdodDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtMTF7XHJcbiAgICAgICAgcmlnaHQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtMTB7XHJcbiAgICAgICAgcmlnaHQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtOXtcclxuICAgICAgICByaWdodDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC04e1xyXG4gICAgICAgIHJpZ2h0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTd7XHJcbiAgICAgICAgcmlnaHQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtNntcclxuICAgICAgICByaWdodDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC01e1xyXG4gICAgICAgIHJpZ2h0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTR7XHJcbiAgICAgICAgcmlnaHQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1bGwtM3tcclxuICAgICAgICByaWdodDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC0ye1xyXG4gICAgICAgIHJpZ2h0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdWxsLTF7XHJcbiAgICAgICAgcmlnaHQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVsbC0we1xyXG4gICAgICAgIHJpZ2h0OmF1dG9cclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC0xMntcclxuICAgICAgICBsZWZ0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC0xMXtcclxuICAgICAgICBsZWZ0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTEwe1xyXG4gICAgICAgIGxlZnQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtOXtcclxuICAgICAgICBsZWZ0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTh7XHJcbiAgICAgICAgbGVmdDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC03e1xyXG4gICAgICAgIGxlZnQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtNntcclxuICAgICAgICBsZWZ0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTV7XHJcbiAgICAgICAgbGVmdDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC00e1xyXG4gICAgICAgIGxlZnQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLXB1c2gtM3tcclxuICAgICAgICBsZWZ0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1wdXNoLTJ7XHJcbiAgICAgICAgbGVmdDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC0xe1xyXG4gICAgICAgIGxlZnQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtcHVzaC0we1xyXG4gICAgICAgIGxlZnQ6YXV0b1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtMTJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtMTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC0xMHtcclxuICAgICAgICBtYXJnaW4tbGVmdDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC04e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtN3tcclxuICAgICAgICBtYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTZ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC01e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtNHtcclxuICAgICAgICBtYXJnaW4tbGVmdDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbWQtb2Zmc2V0LTN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLW9mZnNldC0ye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1tZC1vZmZzZXQtMHtcclxuICAgICAgICBtYXJnaW4tbGVmdDowXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXtcclxuICAgIC5jb2wtbGctMSwuY29sLWxnLTIsLmNvbC1sZy0zLC5jb2wtbGctNCwuY29sLWxnLTUsLmNvbC1sZy02LC5jb2wtbGctNywuY29sLWxnLTgsLmNvbC1sZy05LC5jb2wtbGctMTAsLmNvbC1sZy0xMSwuY29sLWxnLTEye1xyXG4gICAgICAgIGZsb2F0OmxlZnRcclxuICAgIH1cclxuICAgIC5jb2wtbGctMTJ7XHJcbiAgICAgICAgd2lkdGg6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy0xMXtcclxuICAgICAgICB3aWR0aDo5MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctMTB7XHJcbiAgICAgICAgd2lkdGg6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTl7XHJcbiAgICAgICAgd2lkdGg6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTh7XHJcbiAgICAgICAgd2lkdGg6NjYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTd7XHJcbiAgICAgICAgd2lkdGg6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTZ7XHJcbiAgICAgICAgd2lkdGg6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTV7XHJcbiAgICAgICAgd2lkdGg6NDEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTR7XHJcbiAgICAgICAgd2lkdGg6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTN7XHJcbiAgICAgICAgd2lkdGg6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTJ7XHJcbiAgICAgICAgd2lkdGg6MTYuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTF7XHJcbiAgICAgICAgd2lkdGg6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC0xMntcclxuICAgICAgICByaWdodDoxMDAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtMTF7XHJcbiAgICAgICAgcmlnaHQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtMTB7XHJcbiAgICAgICAgcmlnaHQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtOXtcclxuICAgICAgICByaWdodDo3NSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC04e1xyXG4gICAgICAgIHJpZ2h0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTd7XHJcbiAgICAgICAgcmlnaHQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtNntcclxuICAgICAgICByaWdodDo1MCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC01e1xyXG4gICAgICAgIHJpZ2h0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTR7XHJcbiAgICAgICAgcmlnaHQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1bGwtM3tcclxuICAgICAgICByaWdodDoyNSVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC0ye1xyXG4gICAgICAgIHJpZ2h0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdWxsLTF7XHJcbiAgICAgICAgcmlnaHQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVsbC0we1xyXG4gICAgICAgIHJpZ2h0OmF1dG9cclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC0xMntcclxuICAgICAgICBsZWZ0OjEwMCVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC0xMXtcclxuICAgICAgICBsZWZ0OjkxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTEwe1xyXG4gICAgICAgIGxlZnQ6ODMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtOXtcclxuICAgICAgICBsZWZ0Ojc1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTh7XHJcbiAgICAgICAgbGVmdDo2Ni42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC03e1xyXG4gICAgICAgIGxlZnQ6NTguMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtNntcclxuICAgICAgICBsZWZ0OjUwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTV7XHJcbiAgICAgICAgbGVmdDo0MS42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC00e1xyXG4gICAgICAgIGxlZnQ6MzMuMzMzMzMzMzMlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLXB1c2gtM3tcclxuICAgICAgICBsZWZ0OjI1JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1wdXNoLTJ7XHJcbiAgICAgICAgbGVmdDoxNi42NjY2NjY2NyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC0xe1xyXG4gICAgICAgIGxlZnQ6OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctcHVzaC0we1xyXG4gICAgICAgIGxlZnQ6YXV0b1xyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtMTJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTAwJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtMTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6OTEuNjY2NjY2NjclXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC0xMHtcclxuICAgICAgICBtYXJnaW4tbGVmdDo4My4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NzUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC04e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjY2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtN3tcclxuICAgICAgICBtYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTZ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTAlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC01e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjQxLjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtNHtcclxuICAgICAgICBtYXJnaW4tbGVmdDozMy4zMzMzMzMzMyVcclxuICAgIH1cclxuICAgIC5jb2wtbGctb2Zmc2V0LTN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjUlXHJcbiAgICB9XHJcbiAgICAuY29sLWxnLW9mZnNldC0ye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE2LjY2NjY2NjY3JVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtMXtcclxuICAgICAgICBtYXJnaW4tbGVmdDo4LjMzMzMzMzMzJVxyXG4gICAgfVxyXG4gICAgLmNvbC1sZy1vZmZzZXQtMHtcclxuICAgICAgICBtYXJnaW4tbGVmdDowXHJcbiAgICB9XHJcbn1cclxudGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5jZW50ZXItYmxvY2t7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvXHJcbn1cclxuLnB1bGwtcmlnaHR7XHJcbiAgICBmbG9hdDpyaWdodCFpbXBvcnRhbnRcclxufVxyXG4ucHVsbC1sZWZ0e1xyXG4gICAgZmxvYXQ6bGVmdCFpbXBvcnRhbnRcclxufVxyXG4uaGlkZXtcclxuICAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnRcclxufVxyXG4uc2hvd3tcclxuICAgIGRpc3BsYXk6YmxvY2shaW1wb3J0YW50XHJcbn1cclxuLmludmlzaWJsZXtcclxuICAgIHZpc2liaWxpdHk6aGlkZGVuXHJcbn1cclxuLnRleHQtaGlkZXtcclxuICAgIGZvbnQ6MC8wIGE7XHJcbiAgICBjb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIHRleHQtc2hhZG93Om5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOjBcclxufVxyXG4uaGlkZGVue1xyXG4gICAgZGlzcGxheTpub25lIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudFxyXG59XHJcbi5hZmZpeHtcclxuICAgIHBvc2l0aW9uOmZpeGVkXHJcbn1cclxuQC1tcy12aWV3cG9ydHtcclxuICAgIHdpZHRoOmRldmljZS13aWR0aFxyXG59XHJcbi52aXNpYmxlLXhzLC52aXNpYmxlLXNtLC52aXNpYmxlLW1kLC52aXNpYmxlLWxne1xyXG4gICAgZGlzcGxheTpub25lIWltcG9ydGFudFxyXG59XHJcbi52aXNpYmxlLXhzLWJsb2NrLC52aXNpYmxlLXhzLWlubGluZSwudmlzaWJsZS14cy1pbmxpbmUtYmxvY2ssLnZpc2libGUtc20tYmxvY2ssLnZpc2libGUtc20taW5saW5lLC52aXNpYmxlLXNtLWlubGluZS1ibG9jaywudmlzaWJsZS1tZC1ibG9jaywudmlzaWJsZS1tZC1pbmxpbmUsLnZpc2libGUtbWQtaW5saW5lLWJsb2NrLC52aXNpYmxlLWxnLWJsb2NrLC52aXNpYmxlLWxnLWlubGluZSwudmlzaWJsZS1sZy1pbmxpbmUtYmxvY2t7XHJcbiAgICBkaXNwbGF5Om5vbmUhaW1wb3J0YW50XHJcbn1cclxuXHJcblxyXG50YWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnRcclxufVxyXG5jYXB0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6OHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206OHB4O1xyXG4gICAgY29sb3I6Izc3NztcclxuICAgIHRleHQtYWxpZ246bGVmdFxyXG59XHJcbnRoe1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0XHJcbn1cclxuLnRhYmxle1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4XHJcbn1cclxuLnRhYmxlPnRoZWFkPnRyPnRoLC50YWJsZT50Ym9keT50cj50aCwudGFibGU+dGZvb3Q+dHI+dGgsLnRhYmxlPnRoZWFkPnRyPnRkLC50YWJsZT50Ym9keT50cj50ZCwudGFibGU+dGZvb3Q+dHI+dGR7XHJcbiAgICBwYWRkaW5nOjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkXHJcbn1cclxuLnRhYmxlPnRoZWFkPnRyPnRoe1xyXG4gICAgdmVydGljYWwtYWxpZ246Ym90dG9tO1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2RkZFxyXG59XHJcbi50YWJsZT5jYXB0aW9uK3RoZWFkPnRyOmZpcnN0LWNoaWxkPnRoLC50YWJsZT5jb2xncm91cCt0aGVhZD50cjpmaXJzdC1jaGlsZD50aCwudGFibGU+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQ+dGgsLnRhYmxlPmNhcHRpb24rdGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGQsLnRhYmxlPmNvbGdyb3VwK3RoZWFkPnRyOmZpcnN0LWNoaWxkPnRkLC50YWJsZT50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZD50ZHtcclxuICAgIGJvcmRlci10b3A6MFxyXG59XHJcbi50YWJsZT50Ym9keSt0Ym9keXtcclxuICAgIGJvcmRlci10b3A6MnB4IHNvbGlkICNkZGRcclxufVxyXG4udGFibGUgLnRhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmXHJcbn1cclxuLnRhYmxlLWNvbmRlbnNlZD50aGVhZD50cj50aCwudGFibGUtY29uZGVuc2VkPnRib2R5PnRyPnRoLC50YWJsZS1jb25kZW5zZWQ+dGZvb3Q+dHI+dGgsLnRhYmxlLWNvbmRlbnNlZD50aGVhZD50cj50ZCwudGFibGUtY29uZGVuc2VkPnRib2R5PnRyPnRkLC50YWJsZS1jb25kZW5zZWQ+dGZvb3Q+dHI+dGR7XHJcbiAgICBwYWRkaW5nOjVweFxyXG59XHJcbi50YWJsZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2RkZFxyXG59XHJcbi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50aCwudGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGgsLnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoLC50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZCwudGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQsLnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRke1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZGRkXHJcbn1cclxuLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoLC50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6MnB4XHJcbn1cclxuLnRhYmxlLXN0cmlwZWQ+dGJvZHk+dHI6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5ZjlcclxufVxyXG4udGFibGUtaG92ZXI+dGJvZHk+dHI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjVcclxufVxyXG50YWJsZSBjb2xbY2xhc3MqPWNvbC1de1xyXG4gICAgcG9zaXRpb246c3RhdGljO1xyXG4gICAgZGlzcGxheTp0YWJsZS1jb2x1bW47XHJcbiAgICBmbG9hdDpub25lXHJcbn1cclxudGFibGUgdGRbY2xhc3MqPWNvbC1dLHRhYmxlIHRoW2NsYXNzKj1jb2wtXXtcclxuICAgIHBvc2l0aW9uOnN0YXRpYztcclxuICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgIGZsb2F0Om5vbmVcclxufVxyXG4udGFibGU+dGhlYWQ+dHI+dGQuYWN0aXZlLC50YWJsZT50Ym9keT50cj50ZC5hY3RpdmUsLnRhYmxlPnRmb290PnRyPnRkLmFjdGl2ZSwudGFibGU+dGhlYWQ+dHI+dGguYWN0aXZlLC50YWJsZT50Ym9keT50cj50aC5hY3RpdmUsLnRhYmxlPnRmb290PnRyPnRoLmFjdGl2ZSwudGFibGU+dGhlYWQ+dHIuYWN0aXZlPnRkLC50YWJsZT50Ym9keT50ci5hY3RpdmU+dGQsLnRhYmxlPnRmb290PnRyLmFjdGl2ZT50ZCwudGFibGU+dGhlYWQ+dHIuYWN0aXZlPnRoLC50YWJsZT50Ym9keT50ci5hY3RpdmU+dGgsLnRhYmxlPnRmb290PnRyLmFjdGl2ZT50aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNVxyXG59XHJcbi50YWJsZS1ob3Zlcj50Ym9keT50cj50ZC5hY3RpdmU6aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyPnRoLmFjdGl2ZTpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHIuYWN0aXZlOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uYWN0aXZlLC50YWJsZS1ob3Zlcj50Ym9keT50ci5hY3RpdmU6aG92ZXI+dGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZThcclxufVxyXG4udGFibGU+dGhlYWQ+dHI+dGQuc3VjY2VzcywudGFibGU+dGJvZHk+dHI+dGQuc3VjY2VzcywudGFibGU+dGZvb3Q+dHI+dGQuc3VjY2VzcywudGFibGU+dGhlYWQ+dHI+dGguc3VjY2VzcywudGFibGU+dGJvZHk+dHI+dGguc3VjY2VzcywudGFibGU+dGZvb3Q+dHI+dGguc3VjY2VzcywudGFibGU+dGhlYWQ+dHIuc3VjY2Vzcz50ZCwudGFibGU+dGJvZHk+dHIuc3VjY2Vzcz50ZCwudGFibGU+dGZvb3Q+dHIuc3VjY2Vzcz50ZCwudGFibGU+dGhlYWQ+dHIuc3VjY2Vzcz50aCwudGFibGU+dGJvZHk+dHIuc3VjY2Vzcz50aCwudGFibGU+dGZvb3Q+dHIuc3VjY2Vzcz50aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2RmZjBkOFxyXG59XHJcbi50YWJsZS1ob3Zlcj50Ym9keT50cj50ZC5zdWNjZXNzOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50cj50aC5zdWNjZXNzOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50ci5zdWNjZXNzOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uc3VjY2VzcywudGFibGUtaG92ZXI+dGJvZHk+dHIuc3VjY2Vzczpob3Zlcj50aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2QwZTljNlxyXG59XHJcbi50YWJsZT50aGVhZD50cj50ZC5pbmZvLC50YWJsZT50Ym9keT50cj50ZC5pbmZvLC50YWJsZT50Zm9vdD50cj50ZC5pbmZvLC50YWJsZT50aGVhZD50cj50aC5pbmZvLC50YWJsZT50Ym9keT50cj50aC5pbmZvLC50YWJsZT50Zm9vdD50cj50aC5pbmZvLC50YWJsZT50aGVhZD50ci5pbmZvPnRkLC50YWJsZT50Ym9keT50ci5pbmZvPnRkLC50YWJsZT50Zm9vdD50ci5pbmZvPnRkLC50YWJsZT50aGVhZD50ci5pbmZvPnRoLC50YWJsZT50Ym9keT50ci5pbmZvPnRoLC50YWJsZT50Zm9vdD50ci5pbmZvPnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDllZGY3XHJcbn1cclxuLnRhYmxlLWhvdmVyPnRib2R5PnRyPnRkLmluZm86aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyPnRoLmluZm86aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyLmluZm86aG92ZXI+dGQsLnRhYmxlLWhvdmVyPnRib2R5PnRyOmhvdmVyPi5pbmZvLC50YWJsZS1ob3Zlcj50Ym9keT50ci5pbmZvOmhvdmVyPnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzRlM2YzXHJcbn1cclxuLnRhYmxlPnRoZWFkPnRyPnRkLndhcm5pbmcsLnRhYmxlPnRib2R5PnRyPnRkLndhcm5pbmcsLnRhYmxlPnRmb290PnRyPnRkLndhcm5pbmcsLnRhYmxlPnRoZWFkPnRyPnRoLndhcm5pbmcsLnRhYmxlPnRib2R5PnRyPnRoLndhcm5pbmcsLnRhYmxlPnRmb290PnRyPnRoLndhcm5pbmcsLnRhYmxlPnRoZWFkPnRyLndhcm5pbmc+dGQsLnRhYmxlPnRib2R5PnRyLndhcm5pbmc+dGQsLnRhYmxlPnRmb290PnRyLndhcm5pbmc+dGQsLnRhYmxlPnRoZWFkPnRyLndhcm5pbmc+dGgsLnRhYmxlPnRib2R5PnRyLndhcm5pbmc+dGgsLnRhYmxlPnRmb290PnRyLndhcm5pbmc+dGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmY2Y4ZTNcclxufVxyXG4udGFibGUtaG92ZXI+dGJvZHk+dHI+dGQud2FybmluZzpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHI+dGgud2FybmluZzpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHIud2FybmluZzpob3Zlcj50ZCwudGFibGUtaG92ZXI+dGJvZHk+dHI6aG92ZXI+Lndhcm5pbmcsLnRhYmxlLWhvdmVyPnRib2R5PnRyLndhcm5pbmc6aG92ZXI+dGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYWYyY2NcclxufVxyXG4udGFibGU+dGhlYWQ+dHI+dGQuZGFuZ2VyLC50YWJsZT50Ym9keT50cj50ZC5kYW5nZXIsLnRhYmxlPnRmb290PnRyPnRkLmRhbmdlciwudGFibGU+dGhlYWQ+dHI+dGguZGFuZ2VyLC50YWJsZT50Ym9keT50cj50aC5kYW5nZXIsLnRhYmxlPnRmb290PnRyPnRoLmRhbmdlciwudGFibGU+dGhlYWQ+dHIuZGFuZ2VyPnRkLC50YWJsZT50Ym9keT50ci5kYW5nZXI+dGQsLnRhYmxlPnRmb290PnRyLmRhbmdlcj50ZCwudGFibGU+dGhlYWQ+dHIuZGFuZ2VyPnRoLC50YWJsZT50Ym9keT50ci5kYW5nZXI+dGgsLnRhYmxlPnRmb290PnRyLmRhbmdlcj50aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2YyZGVkZVxyXG59XHJcbi50YWJsZS1ob3Zlcj50Ym9keT50cj50ZC5kYW5nZXI6aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyPnRoLmRhbmdlcjpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHIuZGFuZ2VyOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uZGFuZ2VyLC50YWJsZS1ob3Zlcj50Ym9keT50ci5kYW5nZXI6aG92ZXI+dGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlYmNjY2NcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG1pbi1oZWlnaHQ6LjAxJTtcclxuICAgIG92ZXJmbG93LXg6YXV0b1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTpoaWRkZW47XHJcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOi1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNkZGRcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlPi50YWJsZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjBcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlPi50YWJsZT50aGVhZD50cj50aCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGU+dGJvZHk+dHI+dGgsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlPnRmb290PnRyPnRoLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZT50aGVhZD50cj50ZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGU+dGJvZHk+dHI+dGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlPnRmb290PnRyPnRke1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcFxyXG4gICAgfVxyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVke1xyXG4gICAgICAgIGJvcmRlcjowXHJcbiAgICB9XHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGg6Zmlyc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRoOmZpcnN0LWNoaWxkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aDpmaXJzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6Zmlyc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkOmZpcnN0LWNoaWxkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZDpmaXJzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXItbGVmdDowXHJcbiAgICB9XHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGg6bGFzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGg6bGFzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGg6bGFzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6bGFzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQ6bGFzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGQ6bGFzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6MFxyXG4gICAgfVxyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGgsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGgsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTowXHJcbiAgICB9XHJcbn1cclxuZmllbGRzZXR7XHJcbiAgICBtaW4td2lkdGg6MDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgYm9yZGVyOjBcclxufVxyXG5sZWdlbmR7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgIGZvbnQtc2l6ZToyMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6aW5oZXJpdDtcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU1ZTVcclxufVxyXG5sYWJlbHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMFxyXG59XHJcbmlucHV0W3R5cGU9c2VhcmNoXXtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3hcclxufVxyXG5pbnB1dFt0eXBlPXJhZGlvXSxpbnB1dFt0eXBlPWNoZWNrYm94XXtcclxuICAgIG1hcmdpbjo0cHggMCAwO1xyXG4gICAgbWFyZ2luLXRvcDoxcHggXFw5O1xyXG4gICAgbGluZS1oZWlnaHQ6bm9ybWFsXHJcbn1cclxuaW5wdXRbdHlwZT1maWxlXXtcclxuICAgIGRpc3BsYXk6YmxvY2tcclxufVxyXG5pbnB1dFt0eXBlPXJhbmdlXXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlXHJcbn1cclxuc2VsZWN0W211bHRpcGxlXSxzZWxlY3Rbc2l6ZV17XHJcbiAgICBoZWlnaHQ6YXV0b1xyXG59XHJcbmlucHV0W3R5cGU9ZmlsZV06Zm9jdXMsaW5wdXRbdHlwZT1yYWRpb106Zm9jdXMsaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXN7XHJcbiAgICBvdXRsaW5lOnRoaW4gZG90dGVkO1xyXG4gICAgb3V0bGluZTo1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XHJcbiAgICBvdXRsaW5lLW9mZnNldDotMnB4XHJcbn1cclxub3V0cHV0e1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBhZGRpbmctdG9wOjdweDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS40Mjg1NzE0MztcclxuICAgIGNvbG9yOiM1NTVcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MzRweDtcclxuICAgIHBhZGRpbmc6NnB4IDEycHg7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7XHJcbiAgICBjb2xvcjojNTU1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSk7XHJcbiAgICBib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOmJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjpib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cyxib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XHJcbiAgICB0cmFuc2l0aW9uOmJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1c1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6IzY2YWZlOTtcclxuICAgIG91dGxpbmU6MDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYmEoMTAyLDE3NSwyMzMsLjYpO1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYmEoMTAyLDE3NSwyMzMsLjYpXHJcbn1cclxuLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiM5OTk7XHJcbiAgICBvcGFjaXR5OjFcclxufVxyXG4uZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiM5OTlcclxufVxyXG4uZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6Izk5OVxyXG59XHJcbi5mb3JtLWNvbnRyb2xbZGlzYWJsZWRdLC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldLGZpZWxkc2V0W2Rpc2FibGVkXSAuZm9ybS1jb250cm9se1xyXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWVlO1xyXG4gICAgb3BhY2l0eToxXHJcbn1cclxudGV4dGFyZWEuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OmF1dG9cclxufVxyXG5pbnB1dFt0eXBlPXNlYXJjaF17XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6bm9uZVxyXG59XHJcbmlucHV0W3R5cGU9ZGF0ZV0saW5wdXRbdHlwZT10aW1lXSxpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSxpbnB1dFt0eXBlPW1vbnRoXXtcclxuICAgIGxpbmUtaGVpZ2h0OjM0cHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQzIFxcMFxyXG59XHJcbmlucHV0W3R5cGU9ZGF0ZV0uaW5wdXQtc20saW5wdXRbdHlwZT10aW1lXS5pbnB1dC1zbSxpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXS5pbnB1dC1zbSxpbnB1dFt0eXBlPW1vbnRoXS5pbnB1dC1zbXtcclxuICAgIGxpbmUtaGVpZ2h0OjMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjUgXFwwXHJcbn1cclxuaW5wdXRbdHlwZT1kYXRlXS5pbnB1dC1sZyxpbnB1dFt0eXBlPXRpbWVdLmlucHV0LWxnLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLmlucHV0LWxnLGlucHV0W3R5cGU9bW9udGhdLmlucHV0LWxne1xyXG4gICAgbGluZS1oZWlnaHQ6NDZweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuMzMgXFwwXHJcbn1cclxuXzotbXMtZnVsbHNjcmVlbiw6cm9vdCBpbnB1dFt0eXBlPWRhdGVdLF86LW1zLWZ1bGxzY3JlZW4sOnJvb3QgaW5wdXRbdHlwZT10aW1lXSxfOi1tcy1mdWxsc2NyZWVuLDpyb290IGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLF86LW1zLWZ1bGxzY3JlZW4sOnJvb3QgaW5wdXRbdHlwZT1tb250aF17XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQzXHJcbn1cclxuXzotbXMtZnVsbHNjcmVlbi5pbnB1dC1zbSw6cm9vdCBpbnB1dFt0eXBlPWRhdGVdLmlucHV0LXNtLF86LW1zLWZ1bGxzY3JlZW4uaW5wdXQtc20sOnJvb3QgaW5wdXRbdHlwZT10aW1lXS5pbnB1dC1zbSxfOi1tcy1mdWxsc2NyZWVuLmlucHV0LXNtLDpyb290IGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLmlucHV0LXNtLF86LW1zLWZ1bGxzY3JlZW4uaW5wdXQtc20sOnJvb3QgaW5wdXRbdHlwZT1tb250aF0uaW5wdXQtc217XHJcbiAgICBsaW5lLWhlaWdodDoxLjVcclxufVxyXG5fOi1tcy1mdWxsc2NyZWVuLmlucHV0LWxnLDpyb290IGlucHV0W3R5cGU9ZGF0ZV0uaW5wdXQtbGcsXzotbXMtZnVsbHNjcmVlbi5pbnB1dC1sZyw6cm9vdCBpbnB1dFt0eXBlPXRpbWVdLmlucHV0LWxnLF86LW1zLWZ1bGxzY3JlZW4uaW5wdXQtbGcsOnJvb3QgaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0uaW5wdXQtbGcsXzotbXMtZnVsbHNjcmVlbi5pbnB1dC1sZyw6cm9vdCBpbnB1dFt0eXBlPW1vbnRoXS5pbnB1dC1sZ3tcclxuICAgIGxpbmUtaGVpZ2h0OjEuMzNcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweFxyXG59XHJcbi5yYWRpbywuY2hlY2tib3h7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHhcclxufVxyXG4ucmFkaW8gbGFiZWwsLmNoZWNrYm94IGxhYmVse1xyXG4gICAgbWluLWhlaWdodDoyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBjdXJzb3I6cG9pbnRlclxyXG59XHJcbi5yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXSwucmFkaW8taW5saW5lIGlucHV0W3R5cGU9cmFkaW9dLC5jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSwuY2hlY2tib3gtaW5saW5lIGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOjRweCBcXDk7XHJcbiAgICBtYXJnaW4tbGVmdDotMjBweFxyXG59XHJcbi5yYWRpbysucmFkaW8sLmNoZWNrYm94Ky5jaGVja2JveHtcclxuICAgIG1hcmdpbi10b3A6LTVweFxyXG59XHJcbi5yYWRpby1pbmxpbmUsLmNoZWNrYm94LWlubGluZXtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICBjdXJzb3I6cG9pbnRlclxyXG59XHJcbi5yYWRpby1pbmxpbmUrLnJhZGlvLWlubGluZSwuY2hlY2tib3gtaW5saW5lKy5jaGVja2JveC1pbmxpbmV7XHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4XHJcbn1cclxuaW5wdXRbdHlwZT1yYWRpb11bZGlzYWJsZWRdLGlucHV0W3R5cGU9Y2hlY2tib3hdW2Rpc2FibGVkXSxpbnB1dFt0eXBlPXJhZGlvXS5kaXNhYmxlZCxpbnB1dFt0eXBlPWNoZWNrYm94XS5kaXNhYmxlZCxmaWVsZHNldFtkaXNhYmxlZF0gaW5wdXRbdHlwZT1yYWRpb10sZmllbGRzZXRbZGlzYWJsZWRdIGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkXHJcbn1cclxuLnJhZGlvLWlubGluZS5kaXNhYmxlZCwuY2hlY2tib3gtaW5saW5lLmRpc2FibGVkLGZpZWxkc2V0W2Rpc2FibGVkXSAucmFkaW8taW5saW5lLGZpZWxkc2V0W2Rpc2FibGVkXSAuY2hlY2tib3gtaW5saW5le1xyXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkXHJcbn1cclxuLnJhZGlvLmRpc2FibGVkIGxhYmVsLC5jaGVja2JveC5kaXNhYmxlZCBsYWJlbCxmaWVsZHNldFtkaXNhYmxlZF0gLnJhZGlvIGxhYmVsLGZpZWxkc2V0W2Rpc2FibGVkXSAuY2hlY2tib3ggbGFiZWx7XHJcbiAgICBjdXJzb3I6bm90LWFsbG93ZWRcclxufVxyXG4uZm9ybS1jb250cm9sLXN0YXRpY3tcclxuICAgIHBhZGRpbmctdG9wOjdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjdweDtcclxuICAgIG1hcmdpbi1ib3R0b206MFxyXG59XHJcbi5mb3JtLWNvbnRyb2wtc3RhdGljLmlucHV0LWxnLC5mb3JtLWNvbnRyb2wtc3RhdGljLmlucHV0LXNte1xyXG4gICAgcGFkZGluZy1yaWdodDowO1xyXG4gICAgcGFkZGluZy1sZWZ0OjBcclxufVxyXG4uaW5wdXQtc20sLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czozcHhcclxufVxyXG5zZWxlY3QuaW5wdXQtc20sc2VsZWN0LmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MzBweFxyXG59XHJcbnRleHRhcmVhLmlucHV0LXNtLHRleHRhcmVhLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbCxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LXNtLHNlbGVjdFttdWx0aXBsZV0uZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OmF1dG9cclxufVxyXG4uaW5wdXQtbGcsLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDo0NnB4O1xyXG4gICAgcGFkZGluZzoxMHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOjZweFxyXG59XHJcbnNlbGVjdC5pbnB1dC1sZyxzZWxlY3QuZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OjQ2cHg7XHJcbiAgICBsaW5lLWhlaWdodDo0NnB4XHJcbn1cclxudGV4dGFyZWEuaW5wdXQtbGcsdGV4dGFyZWEuZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9sLHNlbGVjdFttdWx0aXBsZV0uaW5wdXQtbGcsc2VsZWN0W211bHRpcGxlXS5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6YXV0b1xyXG59XHJcbi5oYXMtZmVlZGJhY2t7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZVxyXG59XHJcbi5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbHtcclxuICAgIHBhZGRpbmctcmlnaHQ6NDIuNXB4XHJcbn1cclxuLmZvcm0tY29udHJvbC1mZWVkYmFja3tcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgei1pbmRleDoyO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjM0cHg7XHJcbiAgICBoZWlnaHQ6MzRweDtcclxuICAgIGxpbmUtaGVpZ2h0OjM0cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmVcclxufVxyXG4uaW5wdXQtbGcrLmZvcm0tY29udHJvbC1mZWVkYmFja3tcclxuICAgIHdpZHRoOjQ2cHg7XHJcbiAgICBoZWlnaHQ6NDZweDtcclxuICAgIGxpbmUtaGVpZ2h0OjQ2cHhcclxufVxyXG4uaW5wdXQtc20rLmZvcm0tY29udHJvbC1mZWVkYmFja3tcclxuICAgIHdpZHRoOjMwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OjMwcHhcclxufVxyXG4uaGFzLXN1Y2Nlc3MgLmhlbHAtYmxvY2ssLmhhcy1zdWNjZXNzIC5jb250cm9sLWxhYmVsLC5oYXMtc3VjY2VzcyAucmFkaW8sLmhhcy1zdWNjZXNzIC5jaGVja2JveCwuaGFzLXN1Y2Nlc3MgLnJhZGlvLWlubGluZSwuaGFzLXN1Y2Nlc3MgLmNoZWNrYm94LWlubGluZSwuaGFzLXN1Y2Nlc3MucmFkaW8gbGFiZWwsLmhhcy1zdWNjZXNzLmNoZWNrYm94IGxhYmVsLC5oYXMtc3VjY2Vzcy5yYWRpby1pbmxpbmUgbGFiZWwsLmhhcy1zdWNjZXNzLmNoZWNrYm94LWlubGluZSBsYWJlbHtcclxuICAgIGNvbG9yOiMzYzc2M2RcclxufVxyXG4uaGFzLXN1Y2Nlc3MgLmZvcm0tY29udHJvbHtcclxuICAgIGJvcmRlci1jb2xvcjojM2M3NjNkO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpO1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KVxyXG59XHJcbi5oYXMtc3VjY2VzcyAuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYm9yZGVyLWNvbG9yOiMyYjU0MmM7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDZweCAjNjdiMTY4O1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgNnB4ICM2N2IxNjhcclxufVxyXG4uaGFzLXN1Y2Nlc3MgLmlucHV0LWdyb3VwLWFkZG9ue1xyXG4gICAgY29sb3I6IzNjNzYzZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2RmZjBkODtcclxuICAgIGJvcmRlci1jb2xvcjojM2M3NjNkXHJcbn1cclxuLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7XHJcbiAgICBjb2xvcjojM2M3NjNkXHJcbn1cclxuLmhhcy13YXJuaW5nIC5oZWxwLWJsb2NrLC5oYXMtd2FybmluZyAuY29udHJvbC1sYWJlbCwuaGFzLXdhcm5pbmcgLnJhZGlvLC5oYXMtd2FybmluZyAuY2hlY2tib3gsLmhhcy13YXJuaW5nIC5yYWRpby1pbmxpbmUsLmhhcy13YXJuaW5nIC5jaGVja2JveC1pbmxpbmUsLmhhcy13YXJuaW5nLnJhZGlvIGxhYmVsLC5oYXMtd2FybmluZy5jaGVja2JveCBsYWJlbCwuaGFzLXdhcm5pbmcucmFkaW8taW5saW5lIGxhYmVsLC5oYXMtd2FybmluZy5jaGVja2JveC1pbmxpbmUgbGFiZWx7XHJcbiAgICBjb2xvcjojOGE2ZDNiXHJcbn1cclxuLmhhcy13YXJuaW5nIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItY29sb3I6IzhhNmQzYjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KTtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSlcclxufVxyXG4uaGFzLXdhcm5pbmcgLmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJvcmRlci1jb2xvcjojNjY1MTJjO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA2cHggI2MwYTE2YjtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDZweCAjYzBhMTZiXHJcbn1cclxuLmhhcy13YXJuaW5nIC5pbnB1dC1ncm91cC1hZGRvbntcclxuICAgIGNvbG9yOiM4YTZkM2I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmY2Y4ZTM7XHJcbiAgICBib3JkZXItY29sb3I6IzhhNmQzYlxyXG59XHJcbi5oYXMtd2FybmluZyAuZm9ybS1jb250cm9sLWZlZWRiYWNre1xyXG4gICAgY29sb3I6IzhhNmQzYlxyXG59XHJcbi5oYXMtZXJyb3IgLmhlbHAtYmxvY2ssLmhhcy1lcnJvciAuY29udHJvbC1sYWJlbCwuaGFzLWVycm9yIC5yYWRpbywuaGFzLWVycm9yIC5jaGVja2JveCwuaGFzLWVycm9yIC5yYWRpby1pbmxpbmUsLmhhcy1lcnJvciAuY2hlY2tib3gtaW5saW5lLC5oYXMtZXJyb3IucmFkaW8gbGFiZWwsLmhhcy1lcnJvci5jaGVja2JveCBsYWJlbCwuaGFzLWVycm9yLnJhZGlvLWlubGluZSBsYWJlbCwuaGFzLWVycm9yLmNoZWNrYm94LWlubGluZSBsYWJlbHtcclxuICAgIGNvbG9yOiNhOTQ0NDJcclxufVxyXG4uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItY29sb3I6I2E5NDQ0MjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KTtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSlcclxufVxyXG4uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6Izg0MzUzNDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgNnB4ICNjZTg0ODM7XHJcbiAgICBib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA2cHggI2NlODQ4M1xyXG59XHJcbi5oYXMtZXJyb3IgLmlucHV0LWdyb3VwLWFkZG9ue1xyXG4gICAgY29sb3I6I2E5NDQ0MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2YyZGVkZTtcclxuICAgIGJvcmRlci1jb2xvcjojYTk0NDQyXHJcbn1cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sLWZlZWRiYWNre1xyXG4gICAgY29sb3I6I2E5NDQ0MlxyXG59XHJcbi5oYXMtZmVlZGJhY2sgbGFiZWx+LmZvcm0tY29udHJvbC1mZWVkYmFja3tcclxuICAgIHRvcDoyNXB4XHJcbn1cclxuLmhhcy1mZWVkYmFjayBsYWJlbC5zci1vbmx5fi5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7XHJcbiAgICB0b3A6MFxyXG59XHJcbi5oZWxwLWJsb2Nre1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgY29sb3I6IzczNzM3M1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5mb3JtLWlubGluZSAuZm9ybS1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlXHJcbiAgICB9XHJcbiAgICAuZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG4gICAgfVxyXG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wtc3RhdGlje1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbiAgICB9XHJcbiAgICAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3Vwe1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLXRhYmxlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG4gICAgfVxyXG4gICAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24sLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuLC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbHtcclxuICAgICAgICB3aWR0aDphdXRvXHJcbiAgICB9XHJcbiAgICAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgd2lkdGg6MTAwJVxyXG4gICAgfVxyXG4gICAgLmZvcm0taW5saW5lIC5jb250cm9sLWxhYmVse1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcclxuICAgIH1cclxuICAgIC5mb3JtLWlubGluZSAucmFkaW8sLmZvcm0taW5saW5lIC5jaGVja2JveHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG4gICAgfVxyXG4gICAgLmZvcm0taW5saW5lIC5yYWRpbyBsYWJlbCwuZm9ybS1pbmxpbmUgLmNoZWNrYm94IGxhYmVse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDowXHJcbiAgICB9XHJcbiAgICAuZm9ybS1pbmxpbmUgLnJhZGlvIGlucHV0W3R5cGU9cmFkaW9dLC5mb3JtLWlubGluZSAuY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF17XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MFxyXG4gICAgfVxyXG4gICAgLmZvcm0taW5saW5lIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFja3tcclxuICAgICAgICB0b3A6MFxyXG4gICAgfVxyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLnJhZGlvLC5mb3JtLWhvcml6b250YWwgLmNoZWNrYm94LC5mb3JtLWhvcml6b250YWwgLnJhZGlvLWlubGluZSwuZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveC1pbmxpbmV7XHJcbiAgICBwYWRkaW5nLXRvcDo3cHg7XHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBcclxufVxyXG4uZm9ybS1ob3Jpem9udGFsIC5yYWRpbywuZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveHtcclxuICAgIG1pbi1oZWlnaHQ6MjdweFxyXG59XHJcbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDotMTVweFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtbGFiZWx7XHJcbiAgICAgICAgcGFkZGluZy10b3A6N3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0XHJcbiAgICB9XHJcbn1cclxuLmZvcm0taG9yaXpvbnRhbCAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7XHJcbiAgICByaWdodDoxNXB4XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cC1sZyAuY29udHJvbC1sYWJlbHtcclxuICAgICAgICBwYWRkaW5nLXRvcDoxNC4zcHhcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwLXNtIC5jb250cm9sLWxhYmVse1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjZweFxyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6NnB4IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgIC1tcy10b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO1xyXG4gICAgdG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1mZXJtby1zZWxlY3Q6bm9uZTtcclxuICAgIC1tb3otZmVybW8tc2VsZWN0Om5vbmU7XHJcbiAgICAtbXMtZmVybW8tc2VsZWN0Om5vbmU7XHJcbiAgICBmZXJtby1zZWxlY3Q6bm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bm9uZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweFxyXG59XHJcbi5idG46Zm9jdXMsLmJ0bjphY3RpdmU6Zm9jdXMsLmJ0bi5hY3RpdmU6Zm9jdXMsLmJ0bi5mb2N1cywuYnRuOmFjdGl2ZS5mb2N1cywuYnRuLmFjdGl2ZS5mb2N1c3tcclxuICAgIG91dGxpbmU6dGhpbiBkb3R0ZWQ7XHJcbiAgICBvdXRsaW5lOjVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcclxuICAgIG91dGxpbmUtb2Zmc2V0Oi0ycHhcclxufVxyXG4uYnRuOmhvdmVyLC5idG46Zm9jdXMsLmJ0bi5mb2N1c3tcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZVxyXG59XHJcbi5idG46YWN0aXZlLC5idG4uYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lO1xyXG4gICAgb3V0bGluZTowO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KVxyXG59XHJcbi5idG4uZGlzYWJsZWQsLmJ0bltkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idG57XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xyXG4gICAgZmlsdGVyOmFscGhhKG9wYWNpdHk9NjUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgICBvcGFjaXR5Oi42NVxyXG59XHJcbi5idG4tZGVmYXVsdHtcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6I2NjY1xyXG59XHJcbi5idG4tZGVmYXVsdDpob3ZlciwuYnRuLWRlZmF1bHQ6Zm9jdXMsLmJ0bi1kZWZhdWx0LmZvY3VzLC5idG4tZGVmYXVsdDphY3RpdmUsLmJ0bi1kZWZhdWx0LmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kZWZhdWx0e1xyXG4gICAgY29sb3I6IzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2U2ZTZlNjtcclxuICAgIGJvcmRlci1jb2xvcjojYWRhZGFkXHJcbn1cclxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSwuYnRuLWRlZmF1bHQuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRlZmF1bHR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmVcclxufVxyXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQsLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWZhdWx0LC5idG4tZGVmYXVsdC5kaXNhYmxlZDpob3ZlciwuYnRuLWRlZmF1bHRbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlZmF1bHQ6aG92ZXIsLmJ0bi1kZWZhdWx0LmRpc2FibGVkOmZvY3VzLC5idG4tZGVmYXVsdFtkaXNhYmxlZF06Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdDpmb2N1cywuYnRuLWRlZmF1bHQuZGlzYWJsZWQuZm9jdXMsLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXS5mb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWZhdWx0LmZvY3VzLC5idG4tZGVmYXVsdC5kaXNhYmxlZDphY3RpdmUsLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXTphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdDphY3RpdmUsLmJ0bi1kZWZhdWx0LmRpc2FibGVkLmFjdGl2ZSwuYnRuLWRlZmF1bHRbZGlzYWJsZWRdLmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWZhdWx0LmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjojY2NjXHJcbn1cclxuLmJ0bi1kZWZhdWx0IC5iYWRnZXtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzNcclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGQwNjFjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNkZDA2MWNcclxufVxyXG4uYnRuLXByaW1hcnk6aG92ZXIsLmJ0bi1wcmltYXJ5OmZvY3VzLC5idG4tcHJpbWFyeS5mb2N1cywuYnRuLXByaW1hcnk6YWN0aXZlLC5idG4tcHJpbWFyeS5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeXtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZDA2MWM7XHJcbiAgICBib3JkZXItY29sb3I6I2RkMDYxY1xyXG59XHJcbi5idG4tcHJpbWFyeTphY3RpdmUsLmJ0bi1wcmltYXJ5LmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lXHJcbn1cclxuLmJ0bi1wcmltYXJ5LmRpc2FibGVkLC5idG4tcHJpbWFyeVtkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeSwuYnRuLXByaW1hcnkuZGlzYWJsZWQ6aG92ZXIsLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5OmhvdmVyLC5idG4tcHJpbWFyeS5kaXNhYmxlZDpmb2N1cywuYnRuLXByaW1hcnlbZGlzYWJsZWRdOmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnk6Zm9jdXMsLmJ0bi1wcmltYXJ5LmRpc2FibGVkLmZvY3VzLC5idG4tcHJpbWFyeVtkaXNhYmxlZF0uZm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeS5mb2N1cywuYnRuLXByaW1hcnkuZGlzYWJsZWQ6YWN0aXZlLC5idG4tcHJpbWFyeVtkaXNhYmxlZF06YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnk6YWN0aXZlLC5idG4tcHJpbWFyeS5kaXNhYmxlZC5hY3RpdmUsLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXS5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeS5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZDA2MWM7XHJcbiAgICBib3JkZXItY29sb3I6I2RkMDYxY1xyXG59XHJcbi5idG4tcHJpbWFyeSAuYmFkZ2V7XHJcbiAgICBjb2xvcjojZGQwNjFjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmXHJcbn1cclxuLmJ0bi1zdWNjZXNze1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzVjYjg1YztcclxuICAgIGJvcmRlci1jb2xvcjojNGNhZTRjXHJcbn1cclxuLmJ0bi1zdWNjZXNzOmhvdmVyLC5idG4tc3VjY2Vzczpmb2N1cywuYnRuLXN1Y2Nlc3MuZm9jdXMsLmJ0bi1zdWNjZXNzOmFjdGl2ZSwuYnRuLXN1Y2Nlc3MuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXN1Y2Nlc3N7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDQ5ZDQ0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiMzOTg0MzlcclxufVxyXG4uYnRuLXN1Y2Nlc3M6YWN0aXZlLC5idG4tc3VjY2Vzcy5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bm9uZVxyXG59XHJcbi5idG4tc3VjY2Vzcy5kaXNhYmxlZCwuYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3MsLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmhvdmVyLC5idG4tc3VjY2Vzc1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tc3VjY2Vzczpob3ZlciwuYnRuLXN1Y2Nlc3MuZGlzYWJsZWQ6Zm9jdXMsLmJ0bi1zdWNjZXNzW2Rpc2FibGVkXTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzOmZvY3VzLC5idG4tc3VjY2Vzcy5kaXNhYmxlZC5mb2N1cywuYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdLmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3MuZm9jdXMsLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmFjdGl2ZSwuYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdOmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzOmFjdGl2ZSwuYnRuLXN1Y2Nlc3MuZGlzYWJsZWQuYWN0aXZlLC5idG4tc3VjY2Vzc1tkaXNhYmxlZF0uYWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3MuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNWNiODVjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiM0Y2FlNGNcclxufVxyXG4uYnRuLXN1Y2Nlc3MgLmJhZGdle1xyXG4gICAgY29sb3I6IzVjYjg1YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZlxyXG59XHJcbi5idG4taW5mb3tcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1YmMwZGU7XHJcbiAgICBib3JkZXItY29sb3I6IzQ2YjhkYVxyXG59XHJcbi5idG4taW5mbzpob3ZlciwuYnRuLWluZm86Zm9jdXMsLmJ0bi1pbmZvLmZvY3VzLC5idG4taW5mbzphY3RpdmUsLmJ0bi1pbmZvLmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1pbmZve1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzMxYjBkNTtcclxuICAgIGJvcmRlci1jb2xvcjojMjY5YWJjXHJcbn1cclxuLmJ0bi1pbmZvOmFjdGl2ZSwuYnRuLWluZm8uYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWluZm97XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmVcclxufVxyXG4uYnRuLWluZm8uZGlzYWJsZWQsLmJ0bi1pbmZvW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbmZvLC5idG4taW5mby5kaXNhYmxlZDpob3ZlciwuYnRuLWluZm9bZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWluZm86aG92ZXIsLmJ0bi1pbmZvLmRpc2FibGVkOmZvY3VzLC5idG4taW5mb1tkaXNhYmxlZF06Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mbzpmb2N1cywuYnRuLWluZm8uZGlzYWJsZWQuZm9jdXMsLmJ0bi1pbmZvW2Rpc2FibGVkXS5mb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbmZvLmZvY3VzLC5idG4taW5mby5kaXNhYmxlZDphY3RpdmUsLmJ0bi1pbmZvW2Rpc2FibGVkXTphY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mbzphY3RpdmUsLmJ0bi1pbmZvLmRpc2FibGVkLmFjdGl2ZSwuYnRuLWluZm9bZGlzYWJsZWRdLmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbmZvLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzViYzBkZTtcclxuICAgIGJvcmRlci1jb2xvcjojNDZiOGRhXHJcbn1cclxuLmJ0bi1pbmZvIC5iYWRnZXtcclxuICAgIGNvbG9yOiM1YmMwZGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZcclxufVxyXG4uYnRuLXdhcm5pbmd7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBhZDRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNlZWEyMzZcclxufVxyXG4uYnRuLXdhcm5pbmc6aG92ZXIsLmJ0bi13YXJuaW5nOmZvY3VzLC5idG4td2FybmluZy5mb2N1cywuYnRuLXdhcm5pbmc6YWN0aXZlLC5idG4td2FybmluZy5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4td2FybmluZ3tcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlYzk3MWY7XHJcbiAgICBib3JkZXItY29sb3I6I2Q1ODUxMlxyXG59XHJcbi5idG4td2FybmluZzphY3RpdmUsLmJ0bi13YXJuaW5nLmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi13YXJuaW5ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lXHJcbn1cclxuLmJ0bi13YXJuaW5nLmRpc2FibGVkLC5idG4td2FybmluZ1tkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idG4td2FybmluZywuYnRuLXdhcm5pbmcuZGlzYWJsZWQ6aG92ZXIsLmJ0bi13YXJuaW5nW2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nOmhvdmVyLC5idG4td2FybmluZy5kaXNhYmxlZDpmb2N1cywuYnRuLXdhcm5pbmdbZGlzYWJsZWRdOmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmc6Zm9jdXMsLmJ0bi13YXJuaW5nLmRpc2FibGVkLmZvY3VzLC5idG4td2FybmluZ1tkaXNhYmxlZF0uZm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4td2FybmluZy5mb2N1cywuYnRuLXdhcm5pbmcuZGlzYWJsZWQ6YWN0aXZlLC5idG4td2FybmluZ1tkaXNhYmxlZF06YWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmc6YWN0aXZlLC5idG4td2FybmluZy5kaXNhYmxlZC5hY3RpdmUsLmJ0bi13YXJuaW5nW2Rpc2FibGVkXS5hY3RpdmUsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4td2FybmluZy5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMGFkNGU7XHJcbiAgICBib3JkZXItY29sb3I6I2VlYTIzNlxyXG59XHJcbi5idG4td2FybmluZyAuYmFkZ2V7XHJcbiAgICBjb2xvcjojZjBhZDRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmXHJcbn1cclxuLmJ0bi1kYW5nZXJ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDk1MzRmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNkNDNmM2FcclxufVxyXG4uYnRuLWRhbmdlcjpob3ZlciwuYnRuLWRhbmdlcjpmb2N1cywuYnRuLWRhbmdlci5mb2N1cywuYnRuLWRhbmdlcjphY3RpdmUsLmJ0bi1kYW5nZXIuYWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRhbmdlcntcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjOTMwMmM7XHJcbiAgICBib3JkZXItY29sb3I6I2FjMjkyNVxyXG59XHJcbi5idG4tZGFuZ2VyOmFjdGl2ZSwuYnRuLWRhbmdlci5hY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpub25lXHJcbn1cclxuLmJ0bi1kYW5nZXIuZGlzYWJsZWQsLmJ0bi1kYW5nZXJbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlciwuYnRuLWRhbmdlci5kaXNhYmxlZDpob3ZlciwuYnRuLWRhbmdlcltkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGFuZ2VyOmhvdmVyLC5idG4tZGFuZ2VyLmRpc2FibGVkOmZvY3VzLC5idG4tZGFuZ2VyW2Rpc2FibGVkXTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXI6Zm9jdXMsLmJ0bi1kYW5nZXIuZGlzYWJsZWQuZm9jdXMsLmJ0bi1kYW5nZXJbZGlzYWJsZWRdLmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlci5mb2N1cywuYnRuLWRhbmdlci5kaXNhYmxlZDphY3RpdmUsLmJ0bi1kYW5nZXJbZGlzYWJsZWRdOmFjdGl2ZSxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXI6YWN0aXZlLC5idG4tZGFuZ2VyLmRpc2FibGVkLmFjdGl2ZSwuYnRuLWRhbmdlcltkaXNhYmxlZF0uYWN0aXZlLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlci5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkOTUzNGY7XHJcbiAgICBib3JkZXItY29sb3I6I2Q0M2YzYVxyXG59XHJcbi5idG4tZGFuZ2VyIC5iYWRnZXtcclxuICAgIGNvbG9yOiNkOTUzNGY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZcclxufVxyXG4uYnRuLWxpbmt7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBjb2xvcjojZGQwNjFjO1xyXG4gICAgYm9yZGVyLXJhZGl1czowXHJcbn1cclxuLmJ0bi1saW5rLC5idG4tbGluazphY3RpdmUsLmJ0bi1saW5rLmFjdGl2ZSwuYnRuLWxpbmtbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWxpbmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICBib3gtc2hhZG93Om5vbmVcclxufVxyXG4uYnRuLWxpbmssLmJ0bi1saW5rOmhvdmVyLC5idG4tbGluazpmb2N1cywuYnRuLWxpbms6YWN0aXZle1xyXG4gICAgYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50XHJcbn1cclxuLmJ0bi1saW5rOmhvdmVyLC5idG4tbGluazpmb2N1c3tcclxuICAgIGNvbG9yOiMyYTY0OTY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFxyXG59XHJcbi5idG4tbGlua1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tbGluazpob3ZlciwuYnRuLWxpbmtbZGlzYWJsZWRdOmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWxpbms6Zm9jdXN7XHJcbiAgICBjb2xvcjojNzc3O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmVcclxufVxyXG4uYnRuLWxnLC5idG4tZ3JvdXAtbGc+LmJ0bntcclxuICAgIHBhZGRpbmc6MTBweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czo2cHhcclxufVxyXG4uYnRuLXNtLC5idG4tZ3JvdXAtc20+LmJ0bntcclxuICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4XHJcbn1cclxuLmJ0bi14cywuYnRuLWdyb3VwLXhzPi5idG57XHJcbiAgICBwYWRkaW5nOjFweCA1cHg7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4XHJcbn1cclxuLmJ0bi1ibG9ja3tcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlXHJcbn1cclxuLmJ0bi1ibG9jaysuYnRuLWJsb2Nre1xyXG4gICAgbWFyZ2luLXRvcDo1cHhcclxufVxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYnRuLWJsb2NrLGlucHV0W3R5cGU9cmVzZXRdLmJ0bi1ibG9jayxpbnB1dFt0eXBlPWJ1dHRvbl0uYnRuLWJsb2Nre1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbi5mYWRle1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBsaW5lYXJcclxufVxyXG4uZmFkZS5pbntcclxuICAgIG9wYWNpdHk6MVxyXG59XHJcbi5jb2xsYXBzZXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHZpc2liaWxpdHk6aGlkZGVuXHJcbn1cclxuLmNvbGxhcHNlLmlue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHZpc2liaWxpdHk6dmlzaWJsZVxyXG59XHJcbnRyLmNvbGxhcHNlLmlue1xyXG4gICAgZGlzcGxheTp0YWJsZS1yb3dcclxufVxyXG50Ym9keS5jb2xsYXBzZS5pbntcclxuICAgIGRpc3BsYXk6dGFibGUtcm93LWdyb3VwXHJcbn1cclxuLmNvbGxhcHNpbmd7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGhlaWdodDowO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZTtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246LjM1cztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246LjM1cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246LjM1cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsdmlzaWJpbGl0eTtcclxuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LHZpc2liaWxpdHk7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCx2aXNpYmlsaXR5XHJcbn1cclxuLmNhcmV0e1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDowO1xyXG4gICAgaGVpZ2h0OjA7XHJcbiAgICBtYXJnaW4tbGVmdDoycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICBib3JkZXItdG9wOjRweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDo0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDo0cHggc29saWQgdHJhbnNwYXJlbnRcclxufVxyXG4uZHJvcGRvd257XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZVxyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOjBcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjEwMCU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB6LWluZGV4OjEwMDA7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWluLXdpZHRoOjE2MHB4O1xyXG4gICAgcGFkZGluZzo1cHggMDtcclxuICAgIG1hcmdpbjoycHggMCAwO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtcclxuICAgIGJhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6MCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgYm94LXNoYWRvdzowIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSlcclxufVxyXG4uZHJvcGRvd24tbWVudS5wdWxsLXJpZ2h0e1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGxlZnQ6YXV0b1xyXG59XHJcbi5kcm9wZG93bi1tZW51IC5kaXZpZGVye1xyXG4gICAgaGVpZ2h0OjFweDtcclxuICAgIG1hcmdpbjo5cHggMDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2U1ZTVlNVxyXG59XHJcbi5kcm9wZG93bi1tZW51PmxpPmF7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgcGFkZGluZzozcHggMjBweDtcclxuICAgIGNsZWFyOmJvdGg7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQzO1xyXG4gICAgY29sb3I6IzMzMztcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcFxyXG59XHJcbi5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIsLmRyb3Bkb3duLW1lbnU+bGk+YTpmb2N1c3tcclxuICAgIGNvbG9yOiMyNjI2MjY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNVxyXG59XHJcbi5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YSwuZHJvcGRvd24tbWVudT4uYWN0aXZlPmE6aG92ZXIsLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmZvY3Vze1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGQwNjFjO1xyXG4gICAgb3V0bGluZTowXHJcbn1cclxuLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmEsLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6aG92ZXIsLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6Zm9jdXN7XHJcbiAgICBjb2xvcjojNzc3XHJcbn1cclxuLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6aG92ZXIsLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6Zm9jdXN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGN1cnNvcjpub3QtYWxsb3dlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmU7XHJcbiAgICBmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQ9ZmFsc2UpXHJcbn1cclxuLm9wZW4+LmRyb3Bkb3duLW1lbnV7XHJcbiAgICBkaXNwbGF5OmJsb2NrXHJcbn1cclxuLm9wZW4+YXtcclxuICAgIG91dGxpbmU6MFxyXG59XHJcbi5kcm9wZG93bi1tZW51LXJpZ2h0e1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGxlZnQ6YXV0b1xyXG59XHJcbi5kcm9wZG93bi1tZW51LWxlZnR7XHJcbiAgICByaWdodDphdXRvO1xyXG4gICAgbGVmdDowXHJcbn1cclxuLmRyb3Bkb3duLWhlYWRlcntcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBwYWRkaW5nOjNweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQzO1xyXG4gICAgY29sb3I6Izc3NztcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcFxyXG59XHJcbi5kcm9wZG93bi1iYWNrZHJvcHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB6LWluZGV4Ojk5MFxyXG59XHJcbi5wdWxsLXJpZ2h0Pi5kcm9wZG93bi1tZW51e1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGxlZnQ6YXV0b1xyXG59XHJcbi5kcm9wdXAgLmNhcmV0LC5uYXZiYXItZml4ZWQtYm90dG9tIC5kcm9wZG93biAuY2FyZXR7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbiAgICBib3JkZXItdG9wOjA7XHJcbiAgICBib3JkZXItYm90dG9tOjRweCBzb2xpZFxyXG59XHJcbi5kcm9wdXAgLmRyb3Bkb3duLW1lbnUsLm5hdmJhci1maXhlZC1ib3R0b20gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51e1xyXG4gICAgdG9wOmF1dG87XHJcbiAgICBib3R0b206MTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206MXB4XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLm5hdmJhci1yaWdodCAuZHJvcGRvd24tbWVudXtcclxuICAgICAgICByaWdodDowO1xyXG4gICAgICAgIGxlZnQ6YXV0b1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1yaWdodCAuZHJvcGRvd24tbWVudS1sZWZ0e1xyXG4gICAgICAgIHJpZ2h0OmF1dG87XHJcbiAgICAgICAgbGVmdDowXHJcbiAgICB9XHJcbn1cclxuLmJ0bi1ncm91cCwuYnRuLWdyb3VwLXZlcnRpY2Fse1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0biwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG57XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGZsb2F0OmxlZnRcclxufVxyXG4uYnRuLWdyb3VwPi5idG46aG92ZXIsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmhvdmVyLC5idG4tZ3JvdXA+LmJ0bjpmb2N1cywuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46Zm9jdXMsLmJ0bi1ncm91cD4uYnRuOmFjdGl2ZSwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46YWN0aXZlLC5idG4tZ3JvdXA+LmJ0bi5hY3RpdmUsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLmFjdGl2ZXtcclxuICAgIHotaW5kZXg6MlxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bjpmb2N1cywuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46Zm9jdXN7XHJcbiAgICBvdXRsaW5lOjBcclxufVxyXG4uYnRuLWdyb3VwIC5idG4rLmJ0biwuYnRuLWdyb3VwIC5idG4rLmJ0bi1ncm91cCwuYnRuLWdyb3VwIC5idG4tZ3JvdXArLmJ0biwuYnRuLWdyb3VwIC5idG4tZ3JvdXArLmJ0bi1ncm91cHtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xcHhcclxufVxyXG4uYnRuLXRvb2xiYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDotNXB4XHJcbn1cclxuLmJ0bi10b29sYmFyIC5idG4tZ3JvdXAsLmJ0bi10b29sYmFyIC5pbnB1dC1ncm91cHtcclxuICAgIGZsb2F0OmxlZnRcclxufVxyXG4uYnRuLXRvb2xiYXI+LmJ0biwuYnRuLXRvb2xiYXI+LmJ0bi1ncm91cCwuYnRuLXRvb2xiYXI+LmlucHV0LWdyb3Vwe1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4XHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpe1xyXG4gICAgYm9yZGVyLXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWxlZnQ6MFxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKXtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCksLmJ0bi1ncm91cD4uZHJvcGRvd24tdG9nZ2xlOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuLWdyb3Vwe1xyXG4gICAgZmxvYXQ6bGVmdFxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpPi5idG57XHJcbiAgICBib3JkZXItcmFkaXVzOjBcclxufVxyXG4uYnRuLWdyb3VwPi5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ+LmJ0bjpsYXN0LWNoaWxkLC5idG4tZ3JvdXA+LmJ0bi1ncm91cDpmaXJzdC1jaGlsZD4uZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBcclxufVxyXG4uYnRuLWdyb3VwPi5idG4tZ3JvdXA6bGFzdC1jaGlsZD4uYnRuOmZpcnN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cCAuZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZSwuYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZXtcclxuICAgIG91dGxpbmU6MFxyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bisuZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgcGFkZGluZy1yaWdodDo4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6OHB4XHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuLWxnKy5kcm9wZG93bi10b2dnbGV7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTJweFxyXG59XHJcbi5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KVxyXG59XHJcbi5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1saW5re1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICBib3gtc2hhZG93Om5vbmVcclxufVxyXG4uYnRuIC5jYXJldHtcclxuICAgIG1hcmdpbi1sZWZ0OjBcclxufVxyXG4uYnRuLWxnIC5jYXJldHtcclxuICAgIGJvcmRlci13aWR0aDo1cHggNXB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOjBcclxufVxyXG4uZHJvcHVwIC5idG4tbGcgLmNhcmV0e1xyXG4gICAgYm9yZGVyLXdpZHRoOjAgNXB4IDVweFxyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWw+LmJ0biwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXAsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwPi5idG57XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgZmxvYXQ6bm9uZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6MTAwJVxyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cD4uYnRue1xyXG4gICAgZmxvYXQ6bm9uZVxyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bisuYnRuLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bisuYnRuLWdyb3VwLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cCsuYnRuLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cCsuYnRuLWdyb3Vwe1xyXG4gICAgbWFyZ2luLXRvcDotMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MFxyXG59XHJcbi5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgYm9yZGVyLXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHhcclxufVxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKT4uYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk+LmJ0bjpsYXN0LWNoaWxkLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpPi5kcm9wZG93bi10b2dnbGV7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowXHJcbn1cclxuLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCk+LmJ0bjpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjBcclxufVxyXG4uYnRuLWdyb3VwLWp1c3RpZmllZHtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OmZpeGVkO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlXHJcbn1cclxuLmJ0bi1ncm91cC1qdXN0aWZpZWQ+LmJ0biwuYnRuLWdyb3VwLWp1c3RpZmllZD4uYnRuLWdyb3Vwe1xyXG4gICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgZmxvYXQ6bm9uZTtcclxuICAgIHdpZHRoOjElXHJcbn1cclxuLmJ0bi1ncm91cC1qdXN0aWZpZWQ+LmJ0bi1ncm91cCAuYnRue1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbi5idG4tZ3JvdXAtanVzdGlmaWVkPi5idG4tZ3JvdXAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICBsZWZ0OmF1dG9cclxufVxyXG5bZGF0YS10b2dnbGU9YnV0dG9uc10+LmJ0biBpbnB1dFt0eXBlPXJhZGlvXSxbZGF0YS10b2dnbGU9YnV0dG9uc10+LmJ0bi1ncm91cD4uYnRuIGlucHV0W3R5cGU9cmFkaW9dLFtkYXRhLXRvZ2dsZT1idXR0b25zXT4uYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdLFtkYXRhLXRvZ2dsZT1idXR0b25zXT4uYnRuLWdyb3VwPi5idG4gaW5wdXRbdHlwZT1jaGVja2JveF17XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGNsaXA6cmVjdCgwLDAsMCwwKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmVcclxufVxyXG4uaW5wdXQtZ3JvdXB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6c2VwYXJhdGVcclxufVxyXG4uaW5wdXQtZ3JvdXBbY2xhc3MqPWNvbC1de1xyXG4gICAgZmxvYXQ6bm9uZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6MDtcclxuICAgIHBhZGRpbmctbGVmdDowXHJcbn1cclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MjtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTowXHJcbn1cclxuLmlucHV0LWdyb3VwLWxnPi5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1hZGRvbiwuaW5wdXQtZ3JvdXAtbGc+LmlucHV0LWdyb3VwLWJ0bj4uYnRue1xyXG4gICAgaGVpZ2h0OjQ2cHg7XHJcbiAgICBwYWRkaW5nOjEwcHggMTZweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS4zMztcclxuICAgIGJvcmRlci1yYWRpdXM6NnB4XHJcbn1cclxuc2VsZWN0LmlucHV0LWdyb3VwLWxnPi5mb3JtLWNvbnRyb2wsc2VsZWN0LmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1hZGRvbixzZWxlY3QuaW5wdXQtZ3JvdXAtbGc+LmlucHV0LWdyb3VwLWJ0bj4uYnRue1xyXG4gICAgaGVpZ2h0OjQ2cHg7XHJcbiAgICBsaW5lLWhlaWdodDo0NnB4XHJcbn1cclxudGV4dGFyZWEuaW5wdXQtZ3JvdXAtbGc+LmZvcm0tY29udHJvbCx0ZXh0YXJlYS5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYWRkb24sdGV4dGFyZWEuaW5wdXQtZ3JvdXAtbGc+LmlucHV0LWdyb3VwLWJ0bj4uYnRuLHNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtbGc+LmZvcm0tY29udHJvbCxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1hZGRvbixzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1idG4+LmJ0bntcclxuICAgIGhlaWdodDphdXRvXHJcbn1cclxuLmlucHV0LWdyb3VwLXNtPi5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1hZGRvbiwuaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWJ0bj4uYnRue1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweFxyXG59XHJcbnNlbGVjdC5pbnB1dC1ncm91cC1zbT4uZm9ybS1jb250cm9sLHNlbGVjdC5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYWRkb24sc2VsZWN0LmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1idG4+LmJ0bntcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MzBweFxyXG59XHJcbnRleHRhcmVhLmlucHV0LWdyb3VwLXNtPi5mb3JtLWNvbnRyb2wsdGV4dGFyZWEuaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWFkZG9uLHRleHRhcmVhLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1idG4+LmJ0bixzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLXNtPi5mb3JtLWNvbnRyb2wsc2VsZWN0W211bHRpcGxlXS5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYWRkb24sc2VsZWN0W211bHRpcGxlXS5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYnRuPi5idG57XHJcbiAgICBoZWlnaHQ6YXV0b1xyXG59XHJcbi5pbnB1dC1ncm91cC1hZGRvbiwuaW5wdXQtZ3JvdXAtYnRuLC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9se1xyXG4gICAgZGlzcGxheTp0YWJsZS1jZWxsXHJcbn1cclxuLmlucHV0LWdyb3VwLWFkZG9uOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksLmlucHV0LWdyb3VwLWJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpLC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICBib3JkZXItcmFkaXVzOjBcclxufVxyXG4uaW5wdXQtZ3JvdXAtYWRkb24sLmlucHV0LWdyb3VwLWJ0bntcclxuICAgIHdpZHRoOjElO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlXHJcbn1cclxuLmlucHV0LWdyb3VwLWFkZG9ue1xyXG4gICAgcGFkZGluZzo2cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MTtcclxuICAgIGNvbG9yOiM1NTU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4XHJcbn1cclxuLmlucHV0LWdyb3VwLWFkZG9uLmlucHV0LXNte1xyXG4gICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czozcHhcclxufVxyXG4uaW5wdXQtZ3JvdXAtYWRkb24uaW5wdXQtbGd7XHJcbiAgICBwYWRkaW5nOjEwcHggMTZweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo2cHhcclxufVxyXG4uaW5wdXQtZ3JvdXAtYWRkb24gaW5wdXRbdHlwZT1yYWRpb10sLmlucHV0LWdyb3VwLWFkZG9uIGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gICAgbWFyZ2luLXRvcDowXHJcbn1cclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zmlyc3QtY2hpbGQsLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkLC5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQ+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG4tZ3JvdXA+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5kcm9wZG93bi10b2dnbGUsLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSksLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4tZ3JvdXA6bm90KDpsYXN0LWNoaWxkKT4uYnRue1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBcclxufVxyXG4uaW5wdXQtZ3JvdXAtYWRkb246Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItcmlnaHQ6MFxyXG59XHJcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmxhc3QtY2hpbGQsLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQsLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4tZ3JvdXA+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQ+LmRyb3Bkb3duLXRvZ2dsZSwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG46bm90KDpmaXJzdC1jaGlsZCksLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpPi5idG57XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjBcclxufVxyXG4uaW5wdXQtZ3JvdXAtYWRkb246bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci1sZWZ0OjBcclxufVxyXG4uaW5wdXQtZ3JvdXAtYnRue1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6MDtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcFxyXG59XHJcbi5pbnB1dC1ncm91cC1idG4+LmJ0bntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlXHJcbn1cclxuLmlucHV0LWdyb3VwLWJ0bj4uYnRuKy5idG57XHJcbiAgICBtYXJnaW4tbGVmdDotMXB4XHJcbn1cclxuLmlucHV0LWdyb3VwLWJ0bj4uYnRuOmhvdmVyLC5pbnB1dC1ncm91cC1idG4+LmJ0bjpmb2N1cywuaW5wdXQtZ3JvdXAtYnRuPi5idG46YWN0aXZle1xyXG4gICAgei1pbmRleDoyXHJcbn1cclxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuLC5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQ+LmJ0bi1ncm91cHtcclxuICAgIG1hcmdpbi1yaWdodDotMXB4XHJcbn1cclxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4tZ3JvdXB7XHJcbiAgICBtYXJnaW4tbGVmdDotMXB4XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/fermo-management/fermo-management.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/fermo-management/fermo-management.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FermoManagementComponent, Guid */

  /***/
  function srcAppComponentsFermoManagementFermoManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FermoManagementComponent", function () {
      return FermoManagementComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Guid", function () {
      return Guid;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_fermi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/fermi.service */
    "./src/app/services/fermi.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_assets_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/assets/_alert */
    "./src/assets/_alert/index.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");

    var FermoManagementComponent =
    /*#__PURE__*/
    function () {
      function FermoManagementComponent(routed, api, apiUser, alertService, loginService) {
        _classCallCheck(this, FermoManagementComponent);

        this.routed = routed;
        this.api = api;
        this.apiUser = apiUser;
        this.alertService = alertService;
        this.loginService = loginService;
        this.fermo = new src_app_services_fermi_service__WEBPACK_IMPORTED_MODULE_3__["Fermo"](); //https://stackblitz.com/edit/angular-7kzu8w?file=app%2Fapp.component.html

        this.lineas = [{
          id: 'BS2.MNSRT1.IN_01_1',
          name: 'BS2.MNSRT1.IN_01_1'
        }, {
          id: 'BS2.MNSRT1.IN_01_2',
          name: 'BS2.MNSRT1.IN_01_2'
        }, {
          id: 'BS2.MNSRT1.IN_01_3',
          name: 'BS2.MNSRT1.IN_01_3'
        }, {
          id: 'BS2.MNSRT1.IN_01_4',
          name: 'BS2.MNSRT1.IN_01_4'
        }, {
          id: 'BS2.MNSRT1.AL_01_1',
          name: 'BS2.MNSRT1.AL_01_1'
        }, {
          id: 'BS2.MNSRT1.AL_01_2',
          name: 'BS2.MNSRT1.AL_01_2'
        }, {
          id: 'BS2.MNSRT1.AL_01_3',
          name: 'BS2.MNSRT1.AL_01_3'
        }, {
          id: 'BS2.MNSRT1.TRA01_1',
          name: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: 'BS2.MNSRT1.SOR01_1',
          name: 'BS2.MNSRT1.SOR01_1'
        }];
        this.anomalias = [{
          id: 'Anomalia Fotocellule',
          name: 'Anomalia Fotocellule'
        }, {
          id: 'Arresto improvviso del sistema',
          name: 'Arresto improvviso del sistema'
        }, {
          id: 'Disguidi sistematici',
          name: 'Disguidi sistematici'
        }, {
          id: 'Elevato numero di prodotti in uscita Eccedenze e scarto meccanico',
          name: 'Elevato numero di prodotti in uscita Eccedenze e scarto meccanico'
        }, {
          id: 'Elevato numero di prodotti in uscita Fuori repertorio',
          name: 'Elevato numero di prodotti in uscita Fuori repertorio'
        }, {
          id: 'Elevato numero di prodotti in uscita ID non riconosciuto',
          name: 'Elevato numero di prodotti in uscita ID non riconosciuto'
        }, {
          id: 'Elevato numero di prodotti in uscita Timeout videocodifica',
          name: 'Elevato numero di prodotti in uscita Timeout videocodifica'
        }, {
          id: 'Emergenza',
          name: 'Emergenza'
        }, {
          id: 'Errato smistamento',
          name: 'Errato smistamento'
        }, {
          id: 'Errore di connessione tra il supervisore di impianto e i sistemi postali.',
          name: 'Errore di connessione tra il supervisore di impianto e i sistemi postali.'
        }, {
          id: 'Errore di connessione tra la macchina ed il supervisore di impianto',
          name: 'Errore di connessione tra la macchina ed il supervisore di impianto'
        }, {
          id: 'Impossibile ribaltare contenitori in ingresso',
          name: 'Impossibile ribaltare contenitori in ingresso'
        }, {
          id: 'Impossibilità di aprire/chiudere un turno',
          name: 'Impossibilità di aprire/chiudere un turno'
        }, {
          id: 'Impossibilità di attivare un programma di smistamento valido.',
          name: 'Impossibilità di attivare un programma di smistamento valido.'
        }, {
          id: 'Impossibilità di caricare un nuovo programma di smistamento.',
          name: 'Impossibilità di caricare un nuovo programma di smistamento.'
        }, {
          id: 'Indisponibilità del riconoscimento pacchi',
          name: 'Indisponibilità del riconoscimento pacchi'
        }, {
          id: 'Interlock contenitori non funzionante',
          name: 'Interlock contenitori non funzionante'
        }, {
          id: 'Mancanza di tensione',
          name: 'Mancanza di tensione'
        }, {
          id: 'Mancato avviamento',
          name: 'Mancato avviamento'
        }, {
          id: 'Mancato smistamento meccanico',
          name: 'Mancato smistamento meccanico'
        }, {
          id: 'Messaggio di errore',
          name: 'Messaggio di errore'
        }, {
          id: 'Rumorosità anomala',
          name: 'Rumorosità anomala'
        }];
        this.grados = [{
          id: 'Bloccante',
          name: 'Bloccante'
        }, {
          id: 'Degrado',
          name: 'Degrado'
        }, {
          id: 'Minore',
          name: 'Minore'
        }];
        this.turnos = [{
          id: 'T1',
          name: 'T1'
        }, {
          id: 'T2',
          name: 'T2'
        }, {
          id: 'T3',
          name: 'T3'
        }];
        this.tipoTurnos = [{
          id: 'Produzione',
          name: 'Produzione'
        }, {
          id: 'Manutenzione',
          name: 'Manutenzione'
        }, {
          id: 'Chiusura',
          name: 'Chiusura'
        }];
        this.operatorePostes = [{
          id: 'Operatore poste 1',
          name: 'Operatore poste 1'
        }, {
          id: 'Operatore poste 2',
          name: 'Operatore poste 2'
        }];
        this.imputabilitas = [{
          id: 'Poste italiane',
          name: 'Poste italiane'
        }, {
          id: 'Sitma',
          name: 'Sitma'
        }];
        this.soluziones = [{
          id: 'INGOR / RIMOSSI INGORGHI',
          name: 'INGOR / RIMOSSI INGORGHI'
        }, {
          id: 'LUBRI / LUBRIFICAZIONE',
          name: 'LUBRI / LUBRIFICAZIONE'
        }, {
          id: 'PULIZ / PULIZIA',
          name: 'PULIZ / PULIZIA'
        }, {
          id: 'RIMON / RIPRISTINO/RIMONTAGGIO',
          name: 'RIMON / RIPRISTINO/RIMONTAGGIO'
        }, {
          id: 'RIPAR / RIPARAZIONE',
          name: 'RIPAR / RIPARAZIONE'
        }, {
          id: 'RIPRI / RIPRISTINO MATERIALE DI CONSUMO (INCHIOSTRO, FILM)',
          name: 'RIPRI / RIPRISTINO MATERIALE DI CONSUMO (INCHIOSTRO, FILM)'
        }, {
          id: 'SOSTI / SOSTITUZIONE',
          name: 'SOSTI / SOSTITUZIONE'
        }, {
          id: 'SWIMM / SALVATA IMMAGINE',
          name: 'SWIMM / SALVATA IMMAGINE'
        }, {
          id: 'SWINS / (RE)INSTALLAZIONE SOFTWARE',
          name: 'SWINS / (RE)INSTALLAZIONE SOFTWARE'
        }, {
          id: 'SWLOC / LETTURA LOCAZIONE',
          name: 'SWLOC / LETTURA LOCAZIONE'
        }, {
          id: 'SWLOG / SALVATO FILE DI LOG',
          name: 'SWLOG / SALVATO FILE DI LOG'
        }, {
          id: 'SWRES / RIAVVIO/REBOOT',
          name: 'SWRES / RIAVVIO/REBOOT'
        }, {
          id: 'TARAT / TARATURA/REGOLAZIONE',
          name: 'TARAT / TARATURA/REGOLAZIONE'
        }];
        this.modulos = [{
          id: '58500251 - Ribaltatore',
          name: '58500251 - Ribaltatore',
          parent: 'BS2.MNSRT1.IN_01_1'
        }, {
          id: '_58500253___Nastro_X_O',
          name: '_58500253___Nastro_X_O',
          parent: 'BS2.MNSRT1.IN_01_1'
        }, {
          id: '58500263 - Curva SX 45°',
          name: '58500263 - Curva SX 45°',
          parent: 'BS2.MNSRT1.IN_01_1'
        }, {
          id: '58500264 - Nastro',
          name: '58500264 - Nastro',
          parent: 'BS2.MNSRT1.IN_01_1'
        }, {
          id: '58500265 - Curva DX 45°',
          name: '58500265 - Curva DX 45°',
          parent: 'BS2.MNSRT1.IN_01_1'
        }, {
          id: '58500252 - Ribaltatore',
          name: '58500252 - Ribaltatore',
          parent: 'BS2.MNSRT1.IN_01_2'
        }, {
          id: '_58500254___Nastro_X_O',
          name: '_58500254___Nastro_X_O',
          parent: 'BS2.MNSRT1.IN_01_2'
        }, {
          id: '58500266 - Nastro intermedio',
          name: '58500266 - Nastro intermedio',
          parent: 'BS2.MNSRT1.IN_01_2'
        }, {
          id: '58500260 - Ribaltatore',
          name: '58500260 - Ribaltatore',
          parent: 'BS2.MNSRT1.IN_01_3'
        }, {
          id: '_58500261___Nastro_X_O',
          name: '_58500261___Nastro_X_O',
          parent: 'BS2.MNSRT1.IN_01_3'
        }, {
          id: '58500256 - Curva DX 90°',
          name: '58500256 - Curva DX 90°',
          parent: 'BS2.MNSRT1.IN_01_3'
        }, {
          id: '58500259 - Ribaltatore',
          name: '58500259 - Ribaltatore',
          parent: 'BS2.MNSRT1.IN_01_4'
        }, {
          id: '_58500262___Nastro_X_O',
          name: '_58500262___Nastro_X_O',
          parent: 'BS2.MNSRT1.IN_01_4'
        }, {
          id: '58500255 - Curva DX 90°',
          name: '58500255 - Curva DX 90°',
          parent: 'BS2.MNSRT1.IN_01_4'
        }, {
          id: '58500257 - Nastro',
          name: '58500257 - Nastro',
          parent: 'BS2.MNSRT1.IN_01_4'
        }, {
          id: '_58500258___Sistema_21',
          name: '_58500258___Sistema_21',
          parent: 'BS2.MNSRT1. AL_01_1'
        }, {
          id: '58500268 - Curva SX 45°',
          name: '58500268 - Curva SX 45°',
          parent: 'BS2.MNSRT1. AL_01_1'
        }, {
          id: '58500269 - Nastro intermedio',
          name: '58500269 - Nastro intermedio',
          parent: 'BS2.MNSRT1. AL_01_1'
        }, {
          id: '58500270 - Curva DX 45°',
          name: '58500270 - Curva DX 45°',
          parent: 'BS2.MNSRT1. AL_01_1'
        }, {
          id: '_58500267___Sistema_21',
          name: '_58500267___Sistema_21',
          parent: 'BS2.MNSRT1. AL_01_2'
        }, {
          id: '58500271 - Nastro intermedio',
          name: '58500271 - Nastro intermedio',
          parent: 'BS2.MNSRT1. AL_01_2'
        }, {
          id: '_58500343___Sistema_21',
          name: '_58500343___Sistema_21',
          parent: 'BS2.MNSRT1. AL_01_3'
        }, {
          id: '2104769 - Sistema bilancia',
          name: '2104769 - Sistema bilancia',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500273 - Nastro',
          name: '58500273 - Nastro',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '- Cabina di visione',
          name: '- Cabina di visione',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500276 - Nastro',
          name: '58500276 - Nastro',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500334 - Nastro',
          name: '58500334 - Nastro',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500278 - Curva DX 45°',
          name: '58500278 - Curva DX 45°',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500279 - Nastro',
          name: '58500279 - Nastro',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500280 - Curva DX 45°',
          name: '58500280 - Curva DX 45°',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500281 - Nastro',
          name: '58500281 - Nastro',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500282 - Curva DX 90°',
          name: '58500282 - Curva DX 90°',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500283 - Nastro',
          name: '58500283 - Nastro',
          parent: 'BS2.MNSRT1.TRA01_1'
        }, {
          id: '58500286 - Quaterna di nastri fasatori e lancio',
          name: '58500286 - Quaterna di nastri fasatori e lancio',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500287___MODULO_DI_TENSIONE_L_2600_PASSO_500',
          name: '_58500287___MODULO_DI_TENSIONE_L_2600_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500288___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500288___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500289___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500289___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500290___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500290___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500291___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500291___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500292___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500292___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500293___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500293___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500294___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500294___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500295___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500295___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500296___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500296___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500297___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500297___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500298___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500298___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500299___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500299___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500300___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500300___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500301___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500301___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500302___MODULO_INTERMEDIO_L_3400_PASSO_500',
          name: '_58500302___MODULO_INTERMEDIO_L_3400_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '_58500303___MODULO_DI_COMANDO_L_1450_PASSO_500',
          name: '_58500303___MODULO_DI_COMANDO_L_1450_PASSO_500',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '58500326 - TRASP.X TAKE AWAY L=6800 W=750',
          name: '58500326 - TRASP.X TAKE AWAY L=6800 W=750',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '58500327 - TRASP.X TAKE AWAY L=6800 W=750',
          name: '58500327 - TRASP.X TAKE AWAY L=6800 W=750',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '58500328 - TRASP.X TAKE AWAY L=6800 W=750',
          name: '58500328 - TRASP.X TAKE AWAY L=6800 W=750',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '58500329 - TRASP.X TAKE AWAY L=6800 W=750',
          name: '58500329 - TRASP.X TAKE AWAY L=6800 W=750',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '58500330 - TRASP.X TAKE AWAY L=6800 W=750',
          name: '58500330 - TRASP.X TAKE AWAY L=6800 W=750',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '58500331 - TRASP.X TAKE AWAY L=6800 W=750',
          name: '58500331 - TRASP.X TAKE AWAY L=6800 W=750',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '58500332 - TRASP.X TAKE AWAY L=6800 W=750',
          name: '58500332 - TRASP.X TAKE AWAY L=6800 W=750',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '58500332 - TRASP.X TAKE AWAY L=6800 W=750',
          name: '58500332 - TRASP.X TAKE AWAY L=6800 W=750',
          parent: 'BS2.MNSRT1.SOR01_1'
        }, {
          id: '58501047 - NASTRO ELEVATORE A CATENA MODULARE',
          name: '58501047 - NASTRO ELEVATORE A CATENA MODULARE',
          parent: 'BS2.MNSRT1.SOR01_1'
        }];
        this.sottoassiemes = [{
          id: 'Portale controllo dimensioni pacco',
          name: 'Portale controllo dimensioni pacco',
          parent: '_58500253___Nastro_X_O'
        }, {
          id: 'Portale controllo dimensioni pacco',
          name: 'Portale controllo dimensioni pacco',
          parent: '_58500254___Nastro_X_O'
        }, {
          id: 'Portale controllo dimensioni pacco',
          name: 'Portale controllo dimensioni pacco',
          parent: '_58500261___Nastro_X_O'
        }, {
          id: 'Portale controllo dimensioni pacco',
          name: 'Portale controllo dimensioni pacco',
          parent: '_58500262___Nastro_X_O'
        }, {
          id: 'Terna nastri fasatori DX',
          name: 'Terna nastri fasatori DX',
          parent: '_58500258___Sistema_21'
        }, {
          id: 'Terna nastri fasatori SX',
          name: 'Terna nastri fasatori SX',
          parent: '_58500258___Sistema_21'
        }, {
          id: 'Allineatore con tappeto a sfere',
          name: 'Allineatore con tappeto a sfere',
          parent: '_58500258___Sistema_21'
        }, {
          id: 'Nastro fasatore uscita',
          name: 'Nastro fasatore uscita',
          parent: '_58500258___Sistema_21'
        }, {
          id: 'Terna nastri fasatori DX',
          name: 'Terna nastri fasatori DX',
          parent: '_58500267___Sistema_21'
        }, {
          id: 'Terna nastri fasatori SX',
          name: 'Terna nastri fasatori SX',
          parent: '_58500267___Sistema_21'
        }, {
          id: 'Allineatore con tappeto a sfere',
          name: 'Allineatore con tappeto a sfere',
          parent: '_58500267___Sistema_21'
        }, {
          id: 'Nastro fasatore uscita',
          name: 'Nastro fasatore uscita',
          parent: '_58500267___Sistema_21'
        }, {
          id: 'Terna nastri fasatori DX',
          name: 'Terna nastri fasatori DX',
          parent: '_58500343___Sistema_21'
        }, {
          id: 'Terna nastri fasatori SX',
          name: 'Terna nastri fasatori SX',
          parent: '_58500343___Sistema_21'
        }, {
          id: 'Allineatore con tappeto a sfere',
          name: 'Allineatore con tappeto a sfere',
          parent: '_58500343___Sistema_21'
        }, {
          id: 'Nastro fasatore uscita',
          name: 'Nastro fasatore uscita',
          parent: '_58500343___Sistema_21'
        }, {
          id: 'Albero e Pignone di rinvio catena',
          name: 'Albero e Pignone di rinvio catena',
          parent: '_58500287___MODULO_DI_TENSIONE_L_2600_PASSO_500'
        }, {
          id: 'Sistema di tensionamento catena',
          name: 'Sistema di tensionamento catena',
          parent: '_58500287___MODULO_DI_TENSIONE_L_2600_PASSO_500'
        }, {
          id: 'Sistema di lubrificazione catena',
          name: 'Sistema di lubrificazione catena',
          parent: '_58500287___MODULO_DI_TENSIONE_L_2600_PASSO_500'
        }, {
          id: 'Protezioni modulo di rinvio sorter',
          name: 'Protezioni modulo di rinvio sorter',
          parent: '_58500287___MODULO_DI_TENSIONE_L_2600_PASSO_500'
        }, {
          id: 'Quadro elettrico del sorter / PLC',
          name: 'Quadro elettrico del sorter / PLC',
          parent: '_58500287___MODULO_DI_TENSIONE_L_2600_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500288___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500288___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500288___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500288___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500288___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500289___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500289___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500289___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500289___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500289___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500290___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500290___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500290___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500290___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500290___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500291___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500291___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500291___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500291___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500291___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500292___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500292___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500292___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500292___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500292___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500293___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500293___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500293___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500293___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500293___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500294___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500294___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500294___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500294___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500294___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500295___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500295___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500295___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500295___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500295___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500296___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500296___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500296___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500296___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500296___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500297___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500297___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500297___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500297___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500297___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500298___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500298___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500298___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500298___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500298___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500299___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500299___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500299___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500299___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500299___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500300___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500300___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500300___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500300___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500300___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500301___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500301___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500301___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500301___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500301___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Catena di traino tray',
          name: 'Catena di traino tray',
          parent: '_58500302___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Carrello completo di tray',
          name: 'Carrello completo di tray',
          parent: '_58500302___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Scambio completo di tilting dei tray',
          name: 'Scambio completo di tilting dei tray',
          parent: '_58500302___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Uscita fisica con buffer, display, livello, presenza carrello',
          name: 'Uscita fisica con buffer, display, livello, presenza carrello',
          parent: '_58500302___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'ARRESTO CARRELLO A TERRA',
          name: 'ARRESTO CARRELLO A TERRA',
          parent: '_58500302___MODULO_INTERMEDIO_L_3400_PASSO_500'
        }, {
          id: 'Motoriduttore di traino tray e catena',
          name: 'Motoriduttore di traino tray e catena',
          parent: '_58500303___MODULO_DI_COMANDO_L_1450_PASSO_500'
        }, {
          id: 'Albero e Pignone di traino catena',
          name: 'Albero e Pignone di traino catena',
          parent: '_58500303___MODULO_DI_COMANDO_L_1450_PASSO_500'
        }, {
          id: 'Protezioni modulo di traino sorter',
          name: 'Protezioni modulo di traino sorter',
          parent: '_58500303___MODULO_DI_COMANDO_L_1450_PASSO_500'
        }];
        this.utentiPoste = [];
        this.utentiSitma = [];
        this.options = {
          autoClose: true,
          keepAfterRouteChange: false
        };
        this.currentUserLoggedIn = JSON.parse(localStorage.getItem('currentUser')); //this.isLoggedIn = loginService.isLoggedIn();
      }

      _createClass(FermoManagementComponent, [{
        key: "onSave",
        value: function onSave($event) {
          var _this4 = this;

          console.log("Save button is clicked!", $event);
          this.api.postFermo(this.fermo).subscribe(function (res) {
            console.log(res);

            _this4.alertService.success('Dati inseriti correttamente', _this4.options);
          }, function (err) {
            console.log(err);

            _this4.alertService.error('Errore nel salvataggio', _this4.options);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.routed.queryParams.subscribe(function (params) {
            console.log(params);
            _this5.action = params.action;
            _this5.idFermo = params.idfermo;

            switch (_this5.action) {
              case "edit":
                _this5.editFermo();

                break;

              case "view":
                _this5.viewFermo();

                break;

              default:
                _this5.createFermo();

            }
          });
        }
      }, {
        key: "editFermo",
        value: function editFermo() {
          this.loadPage('edit');
        }
      }, {
        key: "viewFermo",
        value: function viewFermo() {
          this.loadPage('view');
        }
      }, {
        key: "loadPage",
        value: function loadPage(action) {
          var _this6 = this;

          if (this.idFermo) {
            var onSuccess = function onSuccess(res) {
              console.log(res);
              _this6.fermo = res;

              _this6.FilterModulo(_this6.fermo.linea);

              _this6.FilterSottoassieme(_this6.fermo.modulo);

              _this6.DisablePage(action);
            };

            var onError = function onError(err) {
              console.log(err);
            };

            this.api.getFermo(this.idFermo).subscribe(onSuccess, onError);
          }

          this.loadUtenti();
        }
      }, {
        key: "DisablePage",
        value: function DisablePage(action) {
          if (action == 'edit') {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.currentUserLoggedIn.utenteRuolo[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var idUtenteRuolo = _step2.value;

                if (idUtenteRuolo.idRuoloNavigation.nomeRuolo == 'OPERATORE POSTE') {
                  this.fieldsetPosteDisabled = false;
                  this.fieldsetSitmaDisabled = true;
                }

                if (idUtenteRuolo.idRuoloNavigation.nomeRuolo == 'TECNICO SITMA') {
                  this.fieldsetPosteDisabled = true;
                  this.fieldsetSitmaDisabled = false;
                }

                if (idUtenteRuolo.idRuoloNavigation.nomeRuolo == 'AMMINISTRATORE') {
                  this.fieldsetPosteDisabled = false;
                  this.fieldsetSitmaDisabled = false;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            if (this.fermo.grado != 'Degrado') this.disabled = true;else this.disabled = false;
            this.fieldsetDisabled = false;
          }

          if (action == 'view') {
            this.fieldsetDisabled = true;
            this.fieldsetPosteDisabled = true;
            this.fieldsetSitmaDisabled = true;
            this.disabled = true;
          }
        }
      }, {
        key: "createFermo",
        value: function createFermo() {
          this.disabled = true;
          this.fermo = new src_app_services_fermi_service__WEBPACK_IMPORTED_MODULE_3__["Fermo"]();
          this.fermo.idFermo = Guid.newGuid();
          this.fermo.linea = '';
          this.fermo.idUtenteSitma = null;
          this.fermo.idUtentePoste = '';
          this.fermo.anomalia = '';
          this.fermo.grado = '';
          this.fermo.dataInizio = new Date();
          this.fermo.turno = '';
          this.fermo.tipoTurno = '';
          this.fermo.modulo = '';
          this.fermo.sottoassieme = '';
          this.fermo.dataFine = new Date();
          this.fermo.impattoDegrado = '';
          this.fermo.impactFactor = '';
          this.fermo.durataReale = '';
          this.fermo.durata = 0;
          this.fermo.classeGuasto = '';
          this.fermo.tipoGuasto = '';
          this.fermo.causaGuasto = '';
          this.fermo.imputabilita = '';
          this.fermo.soluzione = '';
          this.fermo.descrSoluzione = '';
          this.fermo.dataValidazione = new Date();
          this.fermo.refPoste = '';
          this.fermo.refAssistenza = '';
          this.fermo.deleted = false;
          this.fermo.closed = false;
          this.fermo.idUtentePosteNavigation = '';
          this.fermo.idUtenteSitmaNavigation = '';
          this.loadUtenti();
        }
      }, {
        key: "loadUtenti",
        value: function loadUtenti() {
          var _this7 = this;

          var onSuccess = function onSuccess(res) {
            console.log(res);
            _this7.utenti = res;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = _this7.utenti[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var u = _step3.value;
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                  for (var _iterator4 = u.utenteRuolo[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var idUtenteRuolo = _step4.value;
                    console.log(idUtenteRuolo.idRuoloNavigation.nomeRuolo);
                    if (idUtenteRuolo.idRuoloNavigation.nomeRuolo == 'OPERATORE POSTE') _this7.utentiPoste.push(u);
                    if (idUtenteRuolo.idRuoloNavigation.nomeRuolo == 'TECNICO SITMA') _this7.utentiSitma.push(u);
                  }
                } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                      _iterator4.return();
                    }
                  } finally {
                    if (_didIteratorError4) {
                      throw _iteratorError4;
                    }
                  }
                }
              }
              /*
              let obj1 = this.utenti.filter(m => m.utente == selectedValue);
              this.utentiPoste = obj1;
              
                
              let obj2 = this.utenti.filter(m => m.parent == selectedValue);
              this.utentiSitma = obj2;  */

            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          };

          var onError = function onError(err) {
            console.log(err);
          };

          this.apiUser.getUtenti().subscribe(onSuccess, onError);
        } //filter product details on name and return productDetails object.

      }, {
        key: "FilterModulo",
        value: function FilterModulo(selectedValue) {
          var obj = this.modulos.filter(function (m) {
            return m.parent == selectedValue;
          });
          this.modulosFiltered = obj;
          return this.modulosFiltered;
        }
      }, {
        key: "FilterSottoassieme",
        value: function FilterSottoassieme(selectedValue) {
          var obj = this.sottoassiemes.filter(function (m) {
            return m.parent == selectedValue;
          });
          this.sottoassiemesFiltered = obj;
          return this.sottoassiemesFiltered;
        }
      }, {
        key: "SetImpactForm",
        value: function SetImpactForm(selectedValue) {
          this.disabled = true;

          if (selectedValue == 'Bloccante') {
            this.fermo.impattoDegrado = '';
            this.fermo.impactFactor = '100';
            this.fermo.durataReale = this.getDateDiff();
            this.fermo.durata = Number(this.getDateDiff());
          }

          if (selectedValue == 'Degrado') {
            this.disabled = false;
            this.fermo.impactFactor = '';
            this.fermo.durataReale = this.getDateDiff();
            this.fermo.durata = this.setDurataForImpactFactor();
          }

          if (selectedValue == 'Minore') {
            this.fermo.impattoDegrado = '';
            this.fermo.impactFactor = '';
            this.fermo.durataReale = this.getDateDiff();
            this.fermo.durata = 0;
          }

          return;
        }
      }, {
        key: "getDateDiff",
        value: function getDateDiff() {
          if (this.fermo.dataInizio != new Date() && this.fermo.dataFine != new Date()) {
            var difference = new Date(this.fermo.dataFine).getTime() - new Date(this.fermo.dataInizio).getTime(); // This will give difference in milliseconds

            var resultInMinutes = Math.round(difference / 60000);
          }

          return resultInMinutes.toString();
        }
      }, {
        key: "setDurataForImpactFactor",
        value: function setDurataForImpactFactor() {
          var value;
          value = Number(this.fermo.impattoDegrado) * 60 / 9000;
          this.fermo.durata = Math.round(value * 10) / 10;
          return this.fermo.durata;
        }
      }]);

      return FermoManagementComponent;
    }();

    FermoManagementComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_fermi_service__WEBPACK_IMPORTED_MODULE_3__["FermiService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_assets_alert__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }];
    };

    FermoManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fermo-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fermo-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fermo-management/fermo-management.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fermo-management.component.css */
      "./src/app/components/fermo-management/fermo-management.component.css")).default]
    })], FermoManagementComponent);

    var Guid =
    /*#__PURE__*/
    function () {
      function Guid() {
        _classCallCheck(this, Guid);
      }

      _createClass(Guid, null, [{
        key: "newGuid",
        value: function newGuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }]);

      return Guid;
    }();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.loading = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /*
    Path: /src/app/home/home.component.ts
    The home component defines an angular 8 component that gets all users from the user service and makes them available to the template via a users array property.
    */

    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.card-header {\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    background-color: red;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n    color: white;\r\n}\r\n\r\n.card{\r\n    border-color: red;\r\n}\r\n\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color:red;\r\n    border-color: red;\r\n}\r\n\r\n.centrabottone{\r\n    display: -webkit-box;\r\n    display: flex;\r\n     -webkit-box-pack: center;\r\n             justify-content: center;\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLDZDQUE2QztJQUM3QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7S0FDWix3QkFBdUI7YUFBdkIsdUJBQXVCOztBQUU1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmNlbnRyYWJvdHRvbmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, loginService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.loginService = loginService;
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      } // convenience getter for easy access to form fields


      _createClass(LoginComponent, [{
        key: "doLogin",
        value: function doLogin(username, password) {
          var _this8 = this;

          delete this.error;

          if (!username || !password) {
            this.error = true;
            this.errorMsg = " Per favore inserisci uno username e una password validi";
            return false;
          } else {
            var loginResultHandler = function loginResultHandler(result) {
              if (result.success) {
                _this8.router.navigateByUrl("fermo-list");
              } else {
                _this8.error = true;
                _this8.errorMsg = " Username e/o password  non validi";
              }
            };

            this.loginService.login(username, password, loginResultHandler); //this.login.emit({username, password})
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LoginComponent.prototype, "login", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/menu/menu.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-dark {\r\n    background-color: lightgray !important;\r\n    \r\n}\r\n\r\n.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .nav-link.active {\r\n    color:black;\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color:black;\r\n}\r\n\r\n.navbar-dark .navbar-nav > li > a:hover, .navbar-dark .navbar-nav > li > a:focus {\r\n       color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNDQUFzQzs7QUFFMUM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7T0FDTyxZQUFZO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAuc2hvdyA+IC5uYXYtbGluaywgLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5hY3RpdmUgPiAubmF2LWxpbmssIC5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuc2hvdywgLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciwgLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzIHtcclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(router, loginService) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
        this.loginService = loginService;
        this.isLoggedIn = loginService.isLoggedIn();
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.loginService.logout(); // {3}

          this.router.navigateByUrl("login");
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/components/menu/menu.component.css")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/services/fermi.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/fermi.service.ts ***!
    \*******************************************/

  /*! exports provided: Fermo, FermiService */

  /***/
  function srcAppServicesFermiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fermo", function () {
      return Fermo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FermiService", function () {
      return FermiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var Fermo = function Fermo() {
      _classCallCheck(this, Fermo);
    };

    var FermiService =
    /*#__PURE__*/
    function () {
      function FermiService(http) {
        _classCallCheck(this, FermiService);

        this.http = http;
      }

      _createClass(FermiService, [{
        key: "getFermi",
        value: function getFermi() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "fermi/GetFermo");
        }
      }, {
        key: "getFermo",
        value: function getFermo(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "fermi/GetFermo/" + id);
          ;
        }
      }, {
        key: "deleteFermo",
        value: function deleteFermo(id) {
          return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "fermi/DeleteFermo/" + id);
          ;
        }
      }, {
        key: "postFermo",
        value: function postFermo(fermo) {
          var bodyString = JSON.stringify(fermo);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/JSON'
          });
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "fermi/PostFermo/", bodyString, {
            headers: headers
          });
        }
      }]);

      return FermiService;
    }();

    FermiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FermiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FermiService);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "utenti/GetToken";
        this.TOKEN_KEY = "TOKEN_KEY"; //può essere qualunque stringa

        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false); //private isLoggedIn$ = this.loggedIn.asObservable();

        this.isLoginSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(email, password, handler) {
          var _this9 = this;

          /***********prova
          var myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6IndvcmxkIn0.lnneNaoem98xYFES3mi2CJJjnMONuWAu-FTWB3XJN14";
                localStorage.setItem(this.TOKEN_KEY, myToken)
                  handler({success: true, error: false, token: myToken})
                this.isLoginSubject.next(true);
                /******** fine prova */
          var bodyString = JSON.stringify({
            Email: email,
            Password: password
          });
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/JSON'
          });
          this.http.post(this.loginUrl, bodyString, {
            headers: headers
          }).subscribe(function (res) {
            if (res.token) {
              console.log(res);
              console.log(res.token);
              localStorage.setItem(_this9.TOKEN_KEY, res.token);
              localStorage.setItem('currentUser', JSON.stringify(res));

              _this9.isLoginSubject.next(true);
            }

            handler({
              success: true,
              error: false,
              token: res.token
            });
          }, function (err) {
            console.log(err);

            _this9.isLoginSubject.next(false);

            handler({
              success: false,
              error: true
            });
          });
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          var token = localStorage.getItem(this.TOKEN_KEY);

          if (!token) {
            this.isLoginSubject.next(false);
            return false;
          } else {
            this.isLoginSubject.next(true);
            var secondToExpire = (this.tokenData.exp - new Date().getTime()) * 1000;
            return secondToExpire > 1;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isLoginSubject.next(false);
          localStorage.removeItem(this.TOKEN_KEY);
          localStorage.removeItem("currentUser");
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          this.isLogged();
          return this.isLoginSubject.asObservable();
        }
      }, {
        key: "tokenData",
        get: function get() {
          var token = localStorage.getItem(this.TOKEN_KEY);

          if (token) {
            return JSON.parse(atob(token.split(".")[1]));
          }

          return {};
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }
      /*
      getAll() {
          return this.http.get<Utente[]>(`${environment.apiUrl}/users`);
      }*/


      _createClass(UserService, [{
        key: "getUtenti",
        value: function getUtenti() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "utenti/GetUtente");
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/string-filter-pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/string-filter-pipe.ts ***!
    \***************************************/

  /*! exports provided: StringFilterPipe */

  /***/
  function srcAppStringFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StringFilterPipe", function () {
      return StringFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * A simple string filter, since ng2 does not yet have a filter pipe built in.
     */


    var StringFilterPipe =
    /*#__PURE__*/
    function () {
      function StringFilterPipe() {
        _classCallCheck(this, StringFilterPipe);
      }

      _createClass(StringFilterPipe, [{
        key: "transform",
        value: function transform(items, searchText, fieldName) {
          // return empty array if array is falsy
          if (!items) {
            return [];
          } // return the original array if search text is empty


          if (!searchText) {
            return items;
          } // convert the searchText to lower case


          searchText = searchText.toLowerCase(); // retrun the filtered array

          return items.filter(function (item) {
            if (item && item[fieldName]) {
              return item[fieldName].toLowerCase().includes(searchText);
            }

            return false;
          });
        }
      }]);

      return StringFilterPipe;
    }();

    StringFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'stringFilter'
    })], StringFilterPipe);
    /***/
  },

  /***/
  "./src/assets/_alert/alert.component.ts":
  /*!**********************************************!*\
    !*** ./src/assets/_alert/alert.component.ts ***!
    \**********************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAssets_alertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert.model */
    "./src/assets/_alert/alert.model.ts");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./alert.service */
    "./src/assets/_alert/alert.service.ts");

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent(router, alertService) {
        _classCallCheck(this, AlertComponent);

        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          // subscribe to new alert notifications
          this.alertSubscription = this.alertService.onAlert(this.id).subscribe(function (alert) {
            // clear alerts when an empty alert is received
            if (!alert.message) {
              // filter out alerts without 'keepAfterRouteChange' flag
              _this10.alerts = _this10.alerts.filter(function (x) {
                return x.keepAfterRouteChange;
              }); // remove 'keepAfterRouteChange' flag on the rest

              _this10.alerts.forEach(function (x) {
                return delete x.keepAfterRouteChange;
              });

              return;
            } // add alert to array


            _this10.alerts.push(alert); // auto close alert if required


            if (alert.autoClose) {
              setTimeout(function () {
                return _this10.removeAlert(alert);
              }, 3000);
            }
          }); // clear alerts on location change

          this.routeSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this10.alertService.clear(_this10.id);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe to avoid memory leaks
          this.alertSubscription.unsubscribe();
          this.routeSubscription.unsubscribe();
        }
      }, {
        key: "removeAlert",
        value: function removeAlert(alert) {
          var _this11 = this;

          if (this.fade) {
            // fade out alert
            this.alerts.find(function (x) {
              return x === alert;
            }).fade = true; // remove alert after faded out

            setTimeout(function () {
              _this11.alerts = _this11.alerts.filter(function (x) {
                return x !== alert;
              });
            }, 250);
          } else {
            // remove alert
            this.alerts = this.alerts.filter(function (x) {
              return x !== alert;
            });
          }
        }
      }, {
        key: "cssClass",
        value: function cssClass(alert) {
          var _alertTypeClass;

          if (!alert) return;
          var classes = ['alert', 'alert-dismissable'];
          var alertTypeClass = (_alertTypeClass = {}, _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, 'alert alert-success'), _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, 'alert alert-danger'), _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, 'alert alert-info'), _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, 'alert alert-warning'), _alertTypeClass);
          classes.push(alertTypeClass[alert.type]);

          if (alert.fade) {
            classes.push('fade');
          }

          return classes.join(' ');
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AlertComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AlertComponent.prototype, "fade", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/assets/_alert/alert.component.html")).default
    })], AlertComponent);
    /***/
  },

  /***/
  "./src/assets/_alert/alert.model.ts":
  /*!******************************************!*\
    !*** ./src/assets/_alert/alert.model.ts ***!
    \******************************************/

  /*! exports provided: Alert, AlertType */

  /***/
  function srcAssets_alertAlertModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return Alert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertType", function () {
      return AlertType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Alert = function Alert(init) {
      _classCallCheck(this, Alert);

      Object.assign(this, init);
    };

    var AlertType;

    (function (AlertType) {
      AlertType[AlertType["Success"] = 0] = "Success";
      AlertType[AlertType["Error"] = 1] = "Error";
      AlertType[AlertType["Info"] = 2] = "Info";
      AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    /***/

  },

  /***/
  "./src/assets/_alert/alert.module.ts":
  /*!*******************************************!*\
    !*** ./src/assets/_alert/alert.module.ts ***!
    \*******************************************/

  /*! exports provided: AlertModule */

  /***/
  function srcAssets_alertAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return AlertModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert.component */
    "./src/assets/_alert/alert.component.ts");

    var AlertModule = function AlertModule() {
      _classCallCheck(this, AlertModule);
    };

    AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
      exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })], AlertModule);
    /***/
  },

  /***/
  "./src/assets/_alert/alert.service.ts":
  /*!********************************************!*\
    !*** ./src/assets/_alert/alert.service.ts ***!
    \********************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAssets_alertAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./alert.model */
    "./src/assets/_alert/alert.model.ts");

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService() {
        _classCallCheck(this, AlertService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
      } // enable subscribing to alerts observable


      _createClass(AlertService, [{
        key: "onAlert",
        value: function onAlert() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
          return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) {
            return x && x.id === id;
          }));
        } // convenience methods

      }, {
        key: "success",
        value: function success(message, options) {
          this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, {
            type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success,
            message: message
          })));
        }
      }, {
        key: "error",
        value: function error(message, options) {
          this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, {
            type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error,
            message: message
          })));
        }
      }, {
        key: "info",
        value: function info(message, options) {
          this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, {
            type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info,
            message: message
          })));
        }
      }, {
        key: "warn",
        value: function warn(message, options) {
          this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, {
            type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning,
            message: message
          })));
        } // main alert method    

      }, {
        key: "alert",
        value: function alert(_alert) {
          _alert.id = _alert.id || this.defaultId;
          this.subject.next(_alert);
        } // clear alerts

      }, {
        key: "clear",
        value: function clear() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
          this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"]({
            id: id
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/assets/_alert/index.ts":
  /*!************************************!*\
    !*** ./src/assets/_alert/index.ts ***!
    \************************************/

  /*! exports provided: AlertModule, AlertService, Alert, AlertType */

  /***/
  function srcAssets_alertIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alert_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert.module */
    "./src/assets/_alert/alert.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
      return _alert_module__WEBPACK_IMPORTED_MODULE_1__["AlertModule"];
    });
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alert.service */
    "./src/assets/_alert/alert.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"];
    });
    /* harmony import */


    var _alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert.model */
    "./src/assets/_alert/alert.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertType", function () {
      return _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"];
    });
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'https://easysortgestionefermiwebapi.azurewebsites.net/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    }); //  Path: /src/main.ts
    //The main file is the entry point used by angular to launch and bootstrap the application.

    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\dcarafoli\source\repos\EasySortGestioneFermiWebApi\EasySortGestioneFermi\EasySortGestioneFermi\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map