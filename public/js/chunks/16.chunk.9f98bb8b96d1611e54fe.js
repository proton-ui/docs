(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Checkbox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Checkbox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _examples_Checkbox_Simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/Checkbox/Simple */ "./resources/js/examples/Checkbox/Simple.vue");
/* harmony import */ var _raw_loader_examples_Checkbox_Simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!../../examples/Checkbox/Simple */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Checkbox/Simple.vue");
/* harmony import */ var _examples_Checkbox_vModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../examples/Checkbox/vModel */ "./resources/js/examples/Checkbox/vModel.vue");
/* harmony import */ var _raw_loader_examples_Checkbox_vModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !raw-loader!../../examples/Checkbox/vModel */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Checkbox/vModel.vue");
/* harmony import */ var _examples_Checkbox_Grouped__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../examples/Checkbox/Grouped */ "./resources/js/examples/Checkbox/Grouped.vue");
/* harmony import */ var _raw_loader_examples_Checkbox_Grouped__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !raw-loader!../../examples/Checkbox/Grouped */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Checkbox/Grouped.vue");
/* harmony import */ var _examples_Checkbox_Inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../examples/Checkbox/Inline */ "./resources/js/examples/Checkbox/Inline.vue");
/* harmony import */ var _raw_loader_examples_Checkbox_Inline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !raw-loader!../../examples/Checkbox/Inline */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Checkbox/Inline.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      Simple: _examples_Checkbox_Simple__WEBPACK_IMPORTED_MODULE_0__["default"],
      SimpleCode: _raw_loader_examples_Checkbox_Simple__WEBPACK_IMPORTED_MODULE_1__["default"],
      vModel: _examples_Checkbox_vModel__WEBPACK_IMPORTED_MODULE_2__["default"],
      vModelCode: _raw_loader_examples_Checkbox_vModel__WEBPACK_IMPORTED_MODULE_3__["default"],
      Grouped: _examples_Checkbox_Grouped__WEBPACK_IMPORTED_MODULE_4__["default"],
      GroupedCode: _raw_loader_examples_Checkbox_Grouped__WEBPACK_IMPORTED_MODULE_5__["default"],
      Inline: _examples_Checkbox_Inline__WEBPACK_IMPORTED_MODULE_6__["default"],
      InlineCode: _raw_loader_examples_Checkbox_Inline__WEBPACK_IMPORTED_MODULE_7__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Checkbox.vue?vue&type=template&id=23d462c3&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Checkbox.vue?vue&type=template&id=23d462c3& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("example", { attrs: { component: _vm.Simple, code: _vm.SimpleCode } }),
      _vm._v(" "),
      _c("h2", [_vm._v("Checked State")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("callout", { attrs: { tip: "" } }, [
        _vm._v("\n        In this instance, the "),
        _c("code", [_vm._v("value")]),
        _vm._v(" prop does not translate to a "),
        _c("code", [_vm._v("v-model")]),
        _vm._v(" binding. The "),
        _c("code", [_vm._v("v-model")]),
        _vm._v(" instance is instead tied to a computed "),
        _c("code", [_vm._v("computedValue")]),
        _vm._v(" property to free up the use of the "),
        _c("code", [_vm._v("value")]),
        _vm._v(" prop for the true value of the checkbox element.\n    ")
      ]),
      _vm._v(" "),
      _c("example", { attrs: { component: _vm.vModel, code: _vm.vModelCode } }),
      _vm._v(" "),
      _c("h2", [_vm._v("Grouping")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "In most cases, checkboxes will be grouped together. You may wrap a set of checkbox components within a checkbox group, allowing you to define a label, help text, and error messaging."
        )
      ]),
      _vm._v(" "),
      _c("example", {
        attrs: { component: _vm.Grouped, code: _vm.GroupedCode }
      }),
      _vm._v(" "),
      _c("h3", [_vm._v("Inline Checkboxes")]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("example", { attrs: { component: _vm.Inline, code: _vm.InlineCode } }),
      _vm._v(" "),
      _c("api-reference", {
        attrs: {
          data: [
            {
              title: "Checkbox",
              props: [
                {
                  name: "<code>v-model</code>",
                  description: "The value to be bound by the checkbox(es)",
                  type: "<code>Binding</code>"
                },

                {
                  name: "<code>id</code>",
                  description: "The unique ID of the checkbox.",
                  type: "<code>String</code>"
                },

                {
                  name: "<code>name</code>",
                  description: "The name of the checkbox.",
                  type: "<code>String</code>"
                },

                {
                  name: "<code>native-value</code>",
                  description: "The native value associated with the checkbox.",
                  type: "<code>String</code>"
                },

                {
                  name: "<code>readonly</code>",
                  description: "If the checkbox should be read-only or not.",
                  type: "<code>Boolean</code>",
                  values: "true, false",
                  default: "false"
                },

                {
                  name: "<code>disabled</code>",
                  description: "If the checkbox should be disabled or not.",
                  type: "<code>Boolean</code>",
                  values: "true, false",
                  default: "false"
                }
              ]
            },

            {
              title: "Checkbox Group",
              props: [
                {
                  name: "<code>help</code>",
                  description:
                    "Help text to be displayed below the checkbox items.",
                  type: "<code>String</code>"
                },

                {
                  name: "<code>required</code>",
                  description: "If the checkbox group is required or not.",
                  type: "<code>Boolean</code>",
                  values: "true, false",
                  default: "false"
                },

                {
                  name: "<code>has-error</code>",
                  description: "If the checkbox has errors or not.",
                  type: "<code>Boolean</code>",
                  values: "true, false",
                  default: "false"
                },

                {
                  name: "<code>error-message</code>",
                  description:
                    "The message to be displayed when the checkbox group has an error.",
                  type: "<code>String</code>"
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
      _vm._v("To create a basic checkbox component, you must specify the "),
      _c("code", [_vm._v("name")]),
      _vm._v(", "),
      _c("code", [_vm._v("id")]),
      _vm._v(", and "),
      _c("code", [_vm._v("value")]),
      _vm._v(" properties.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("To bind the checked state, you may supply a "),
      _c("code", [_vm._v("v-model")]),
      _vm._v(" property.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "You may make your checkbox group become inline by specifying the "
      ),
      _c("code", [_vm._v("inline")]),
      _vm._v(" prop.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Components/Checkbox.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/Components/Checkbox.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox_vue_vue_type_template_id_23d462c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=template&id=23d462c3& */ "./resources/js/pages/Components/Checkbox.vue?vue&type=template&id=23d462c3&");
/* harmony import */ var _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=script&lang=js& */ "./resources/js/pages/Components/Checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkbox_vue_vue_type_template_id_23d462c3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkbox_vue_vue_type_template_id_23d462c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Components/Checkbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Components/Checkbox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Components/Checkbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Components/Checkbox.vue?vue&type=template&id=23d462c3&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Components/Checkbox.vue?vue&type=template&id=23d462c3& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_23d462c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkbox.vue?vue&type=template&id=23d462c3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Checkbox.vue?vue&type=template&id=23d462c3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_23d462c3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_23d462c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);