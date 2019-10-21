(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Tabs.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Tabs.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _examples_Tabs_Simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/Tabs/Simple */ "./resources/js/examples/Tabs/Simple.vue");
/* harmony import */ var _raw_loader_examples_Tabs_Simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!../../examples/Tabs/Simple */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Tabs/Simple.vue");
/* harmony import */ var _examples_Tabs_Active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../examples/Tabs/Active */ "./resources/js/examples/Tabs/Active.vue");
/* harmony import */ var _raw_loader_examples_Tabs_Active__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !raw-loader!../../examples/Tabs/Active */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Tabs/Active.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      Simple: _examples_Tabs_Simple__WEBPACK_IMPORTED_MODULE_0__["default"],
      SimpleCode: _raw_loader_examples_Tabs_Simple__WEBPACK_IMPORTED_MODULE_1__["default"],
      Active: _examples_Tabs_Active__WEBPACK_IMPORTED_MODULE_2__["default"],
      ActiveCode: _raw_loader_examples_Tabs_Active__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Tabs.vue?vue&type=template&id=252a58fe&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Tabs.vue?vue&type=template&id=252a58fe& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c("example", { attrs: { component: _vm.Simple, code: _vm.SimpleCode } }),
      _vm._v(" "),
      _c("h2", [_vm._v("Set Active")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("example", { attrs: { component: _vm.Active, code: _vm.ActiveCode } }),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("api-reference", {
        attrs: {
          data: [
            {
              title: "Tabs",
              slots: [
                {
                  name: "<code>default</code>",
                  description: "Tab area body."
                }
              ]
            },

            {
              title: "Tab",
              props: [
                {
                  name: "<code>name</code>",
                  description: "The unique name of the tab.",
                  type: "<code>String</code>"
                },

                {
                  name: "<code>active</code>",
                  description: "Whether the tab is active by default.",
                  type: "<code>Boolean</code>"
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
      _vm._v("You may assign the default active tab by passing through the "),
      _c("code", [_vm._v("active")]),
      _vm._v(" prop.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-xs" }, [
      _vm._v("Snippets of story taken from "),
      _c(
        "a",
        {
          attrs: {
            href:
              "https://www.theverge.com/2019/1/23/18175285/cadwell-turnbull-sci-fi-story-common-ai-climate-change-better-worlds",
            target: "_blank"
          }
        },
        [_vm._v("Monsters Come Howling in Their Season")]
      ),
      _vm._v(
        ". A science fiction story about hope surrounding a friendly, open source AI and its aid in disaster."
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Components/Tabs.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/Components/Tabs.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_252a58fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=252a58fe& */ "./resources/js/pages/Components/Tabs.vue?vue&type=template&id=252a58fe&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/pages/Components/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_252a58fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tabs_vue_vue_type_template_id_252a58fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Components/Tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Components/Tabs.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Components/Tabs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Components/Tabs.vue?vue&type=template&id=252a58fe&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Components/Tabs.vue?vue&type=template&id=252a58fe& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_252a58fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=template&id=252a58fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Tabs.vue?vue&type=template&id=252a58fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_252a58fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_252a58fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);