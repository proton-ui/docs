(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Button.vue?vue&type=template&id=45870e9c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Button.vue?vue&type=template&id=45870e9c& ***!
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
  return _c(
    "article",
    [
      _c("h2", [_vm._v("Example")]),
      _vm._v(" "),
      _c(
        "example",
        [
          _c("p-button", [_vm._v("Default")]),
          _vm._v(" "),
          _c("p-button", { attrs: { theme: "primary" } }, [_vm._v("Primary")]),
          _vm._v(" "),
          _c("p-button", { attrs: { theme: "secondary" } }, [
            _vm._v("Secondary")
          ]),
          _vm._v(" "),
          _c("p-button", { attrs: { theme: "success" } }, [_vm._v("Success")]),
          _vm._v(" "),
          _c("p-button", { attrs: { theme: "danger" } }, [_vm._v("Danger")]),
          _vm._v(" "),
          _c("p-button", { attrs: { theme: "warning" } }, [_vm._v("Warning")]),
          _vm._v(" "),
          _c("p-button", { attrs: { theme: "info" } }, [_vm._v("Info")]),
          _vm._v(" "),
          _c("template", { slot: "code" }, [
            _c(
              "textarea",
              {
                pre: true,
                attrs: {
                  class: "w-full h-auto font-mono bg-gray-100",
                  readonly: ""
                }
              },
              [
                _vm._v(
                  '                <p-button>Default</p-button>\n                <p-button theme="primary">Primary</p-button>\n                <p-button theme="secondary">Secondary</p-button>\n                <p-button theme="success">Success</p-button>\n                <p-button theme="danger">Danger</p-button>\n                <p-button theme="warning">Warning</p-button>\n                <p-button theme="info">Info</p-button>\n            '
                )
              ]
            )
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c("h2", [_vm._v("Size")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "example",
        [
          _c("p-button", { attrs: { size: "large" } }, [
            _vm._v("Large Button")
          ]),
          _vm._v(" "),
          _c("p-button", { attrs: { size: "large", theme: "secondary" } }, [
            _vm._v("Large Button")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "example",
        [
          _c("p-button", { attrs: { size: "small" } }, [
            _vm._v("Small Button")
          ]),
          _vm._v(" "),
          _c("p-button", { attrs: { size: "small", theme: "secondary" } }, [
            _vm._v("Small Button")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("h2", [_vm._v("Props")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("h2", [_vm._v("Slots")]),
      _vm._v(" "),
      _vm._m(2)
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
      _vm._v("Define the size of the button with the "),
      _c("code", [_vm._v("size")]),
      _vm._v(" property.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", [_vm._v("Type")]),
          _vm._v(" "),
          _c("th", [_vm._v("Description")]),
          _vm._v(" "),
          _c("th", [_vm._v("Options")]),
          _vm._v(" "),
          _c("th", [_vm._v("Default")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_c("code", [_vm._v("size")])]),
          _vm._v(" "),
          _c("td", [_c("code", [_vm._v("String")])]),
          _vm._v(" "),
          _c("td", [_vm._v("Define the size of the button.")]),
          _vm._v(" "),
          _c("td", [_vm._v("normal, small, large")]),
          _vm._v(" "),
          _c("td", [_vm._v("normal")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_c("code", [_vm._v("theme")])]),
          _vm._v(" "),
          _c("td", [_c("code", [_vm._v("String")])]),
          _vm._v(" "),
          _c("td", [_vm._v("Define the theme of the button.")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "default, primary, secondary, info, success, warning, danger, dark"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("default")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_c("code", [_vm._v("disabled")])]),
          _vm._v(" "),
          _c("td", [_c("code", [_vm._v("Boolean")])]),
          _vm._v(" "),
          _c("td", [_vm._v("If the button should be disabled or not.")]),
          _vm._v(" "),
          _c("td", [_vm._v("true, false")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", [_vm._v("Description")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_c("code", [_vm._v("default")])]),
          _vm._v(" "),
          _c("td", [_vm._v("Main text of the button.")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Components/Button.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/Components/Button.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_45870e9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=45870e9c& */ "./resources/js/pages/Components/Button.vue?vue&type=template&id=45870e9c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Button_vue_vue_type_template_id_45870e9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Button_vue_vue_type_template_id_45870e9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Components/Button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Components/Button.vue?vue&type=template&id=45870e9c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Components/Button.vue?vue&type=template&id=45870e9c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_45870e9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=template&id=45870e9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Button.vue?vue&type=template&id=45870e9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_45870e9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_45870e9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);