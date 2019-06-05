(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Chart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Chart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Simple from '../../examples/Card/Simple'
// import SimpleCode from '!!raw-loader!../../examples/Card/Simple'
// import Theme from '../../examples/Card/Theme'
// import ThemeCode from '!!raw-loader!../../examples/Card/Theme'
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {// Simple,
      // SimpleCode,
      // Theme,
      // ThemeCode,
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Chart.vue?vue&type=template&id=4bdc468e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Chart.vue?vue&type=template&id=4bdc468e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "article",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("api-reference", {
        attrs: {
          data: [
            {
              props: [
                {
                  name: "<code>name</code>",
                  description:
                    "Required. Unique name value that is used to generate the wrapping elements div ID.",
                  type: "<code>String</code>",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>title</code>",
                  type: "<code>String</code>",
                  description: "Add a title to the Chart.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>type</code>",
                  type: "<code>String</code>",
                  description: "Let the chart know what type to render.",
                  values: "line, bar, axis-mixed, pie, percentage, heatmap",
                  default: "bar"
                },

                {
                  name: "<code>height</code>",
                  type: "<code>Number</code>",
                  description: "Set the height of the chart in pixels.",
                  values: "",
                  default: "300"
                },

                {
                  name: "<code>colors</code>",
                  type: "<code>Array</code>",
                  description:
                    "Set the colors to be used for each individual unit type, depending on the chart type.",
                  values: "",
                  default: "purple, #ffa3ef, light-blue"
                },

                {
                  name: "<code>dataSets</code>",
                  type: "<code>Array</code>",
                  description:
                    "An array of your dataset values you wish to display within your chart.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>labels</code>",
                  type: "<code>Array</code>",
                  description: "An array of labels used to label your dataset.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>dataPoints</code>",
                  type: "<code>Object</code>",
                  description:
                    "An object of your datapoint values you wish to display within heatmap-type charts.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>startDate</code>",
                  type: "<code>Date</code>",
                  description:
                    "JavaScript date object for when heatmap chart types should start.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>endDate</code>",
                  type: "<code>Date</code>",
                  description:
                    "JavaScript date object for when heatmap chart types should end.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>countLabel</code>",
                  type: "<code>String</code>",
                  description: "Count label used in heatmap chart types.",
                  values: "",
                  default: "Count"
                },

                {
                  name: "<code>discreteDomains</code>",
                  type: "<code>Boolean</code>",
                  description:
                    "Allow for a continous distribution of heat squares (as on GitHub), rather than showing the month-wise separation.",
                  values: "true, false",
                  default: "false"
                },

                {
                  name: "<code>yMarkers</code>",
                  type: "<code>Array</code>",
                  description:
                    "Highlight certain values on the Y axis, shown as dashed lines on the graph.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>yRegions</code>",
                  type: "<code>Array</code>",
                  description:
                    "2D counterparts to markers with start and end values, shown as a greyed-out area between the extremes.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>axisOptions</code>",
                  type: "<code>Object</code>",
                  description: "Customize axis options.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>lineOptions</code>",
                  type: "<code>Object</code>",
                  description:
                    "Can be used to set various properties on line plots, turn them into Area Charts and so on.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>tooltipOptions</code>",
                  type: "<code>Object</code>",
                  description:
                    "Customize the format of the label and value displayed in tooltips.",
                  values: "",
                  default: ""
                },

                {
                  name: "<code>valuesOverPoints</code>",
                  type: "<code>Boolean</code>",
                  description:
                    "Display data values over bars or dots in an axis graph.",
                  values: "true, false",
                  default: "false"
                },

                {
                  name: "<code>maxLegendPoints</code>",
                  type: "<code>Number</code>",
                  description: "Set the maximum number of legend points.",
                  values: "",
                  default: "20"
                },

                {
                  name: "<code>maxSlices</code>",
                  type: "<code>Number</code>",
                  description:
                    "Set the maximum number of slices shown in pie charts.",
                  values: "",
                  default: "20"
                },

                {
                  name: "<code>isNavigable</code>",
                  type: "<code>Boolean</code>",
                  description:
                    "Makes the chart interactive with arrow keys and highlights the current active data point.",
                  values: "true, false",
                  default: "false"
                }
              ]
            }
          ]
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Proton's charts are powered by the "),
      _c(
        "a",
        { attrs: { href: "https://frappe.io/charts", target: "_blank" } },
        [_vm._v("Frappe Charts")]
      ),
      _vm._v(
        " library. Frappe Charts is described as being a GitHub-inspired, simple, and modern SVG chart library with zero dependencies."
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Components/Chart.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/Components/Chart.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart_vue_vue_type_template_id_4bdc468e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart.vue?vue&type=template&id=4bdc468e& */ "./resources/js/pages/Components/Chart.vue?vue&type=template&id=4bdc468e&");
/* harmony import */ var _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart.vue?vue&type=script&lang=js& */ "./resources/js/pages/Components/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chart_vue_vue_type_template_id_4bdc468e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chart_vue_vue_type_template_id_4bdc468e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Components/Chart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Components/Chart.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Components/Chart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Components/Chart.vue?vue&type=template&id=4bdc468e&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Components/Chart.vue?vue&type=template&id=4bdc468e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_4bdc468e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=template&id=4bdc468e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Chart.vue?vue&type=template&id=4bdc468e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_4bdc468e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_4bdc468e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);