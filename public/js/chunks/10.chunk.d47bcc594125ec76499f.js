(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Chart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Chart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _examples_Chart_Visitors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/Chart/Visitors */ "./resources/js/examples/Chart/Visitors.vue");
/* harmony import */ var _raw_loader_examples_Chart_Visitors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!../../examples/Chart/Visitors */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Chart/Visitors.vue");
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      Visitors: _examples_Chart_Visitors__WEBPACK_IMPORTED_MODULE_0__["default"],
      VisitorsCode: _raw_loader_examples_Chart_Visitors__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Chart/Visitors.vue":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Chart/Visitors.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n    <section>\n        <div class=\"card\">\n            <div class=\"card__body\">\n                <h2>Visitors</h2>\n            </div>\n\n            <p-chart\n                name=\"stats-visitors\"\n                :labels=\"[\n                    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'\n                ]\"\n                type=\"axis-mixed\"\n                :height=\"350\"\n                :colors=\"['#4DD0E1', '#FF5722']\"\n                :line-options=\"{\n                    dotSize: 6,\n                    hideLine: 0,\n                    hideDots: 0,\n                    heatline: 0,\n                    regionFill: 1\n                }\"\n                :y-markers=\"[\n                    {\n                        label: 'Top Visitors Last Week',\n                        value: 47,\n                        options: { labelPos: 'left' }\n                    }\n                ]\"\n                :data-sets=\"[\n                    {\n                        name: 'Last Week',\n                        chartType: 'line',\n                        values: [12, 14, 11, 24, 19, 32, 47]\n                    },\n                    {\n                        name: 'This Week',\n                        chartType: 'line',\n                        values: [58, 110, 76, 240, 100, 180, 220]\n                    },\n                ]\">\n            </p-chart>\n        </div>\n    </section>\n</template>\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/examples/Chart/Visitors.vue?vue&type=template&id=06d32b8e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/examples/Chart/Visitors.vue?vue&type=template&id=06d32b8e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("section", [
    _c(
      "div",
      { staticClass: "card" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("p-chart", {
          attrs: {
            name: "stats-visitors",
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            type: "axis-mixed",
            height: 350,
            colors: ["#4DD0E1", "#FF5722"],
            "line-options": {
              dotSize: 6,
              hideLine: 0,
              hideDots: 0,
              heatline: 0,
              regionFill: 1
            },
            "y-markers": [
              {
                label: "Top Visitors Last Week",
                value: 47,
                options: { labelPos: "left" }
              }
            ],
            "data-sets": [
              {
                name: "Last Week",
                chartType: "line",
                values: [12, 14, 11, 24, 19, 32, 47]
              },
              {
                name: "This Week",
                chartType: "line",
                values: [58, 110, 76, 240, 100, 180, 220]
              }
            ]
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card__body" }, [
      _c("h2", [_vm._v("Visitors")])
    ])
  }
]
render._withStripped = true



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
      _c("h2", [_vm._v("Example")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("example", {
        attrs: { component: _vm.Visitors, code: _vm.VisitorsCode }
      }),
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
      _vm._v(" library.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/examples/Chart/Visitors.vue":
/*!**************************************************!*\
  !*** ./resources/js/examples/Chart/Visitors.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Visitors_vue_vue_type_template_id_06d32b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Visitors.vue?vue&type=template&id=06d32b8e& */ "./resources/js/examples/Chart/Visitors.vue?vue&type=template&id=06d32b8e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Visitors_vue_vue_type_template_id_06d32b8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Visitors_vue_vue_type_template_id_06d32b8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/examples/Chart/Visitors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/examples/Chart/Visitors.vue?vue&type=template&id=06d32b8e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/examples/Chart/Visitors.vue?vue&type=template&id=06d32b8e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visitors_vue_vue_type_template_id_06d32b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Visitors.vue?vue&type=template&id=06d32b8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/examples/Chart/Visitors.vue?vue&type=template&id=06d32b8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visitors_vue_vue_type_template_id_06d32b8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visitors_vue_vue_type_template_id_06d32b8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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