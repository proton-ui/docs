(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Tab.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Tab.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _examples_Sortable_Simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/Sortable/Simple */ "./resources/js/examples/Sortable/Simple.vue");
/* harmony import */ var _raw_loader_examples_Sortable_Simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!../../examples/Sortable/Simple */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Sortable/Simple.vue");
/* harmony import */ var _examples_Sortable_vModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../examples/Sortable/vModel */ "./resources/js/examples/Sortable/vModel.vue");
/* harmony import */ var _raw_loader_examples_Sortable_vModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !raw-loader!../../examples/Sortable/vModel */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Sortable/vModel.vue");
//
//
//
//
//
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
      Simple: _examples_Sortable_Simple__WEBPACK_IMPORTED_MODULE_0__["default"],
      SimpleCode: _raw_loader_examples_Sortable_Simple__WEBPACK_IMPORTED_MODULE_1__["default"],
      vModel: _examples_Sortable_vModel__WEBPACK_IMPORTED_MODULE_2__["default"],
      vModelCode: _raw_loader_examples_Sortable_vModel__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Tab.vue?vue&type=template&id=642d60c5&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Components/Tab.vue?vue&type=template&id=642d60c5& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("Value")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Your original set of data will be kept in sync with sort changes. This allows you to watch your original set of data to perform any necessary API calls to update your database/storage."
        )
      ]),
      _vm._v(" "),
      _c("example", { attrs: { component: _vm.vModel, code: _vm.vModelCode } })
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
      _vm._v("Proton's Sortables are powered by "),
      _c(
        "a",
        {
          attrs: {
            href: "https://shopify.github.io/draggable/",
            target: "_blank"
          }
        },
        [_vm._v("draggable")]
      ),
      _vm._v(
        ". Sort DOM nodes with style. Drag items in a collection from one spot to another and watch everything snap into place."
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Components/Tab.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/Components/Tab.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab_vue_vue_type_template_id_642d60c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab.vue?vue&type=template&id=642d60c5& */ "./resources/js/pages/Components/Tab.vue?vue&type=template&id=642d60c5&");
/* harmony import */ var _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab.vue?vue&type=script&lang=js& */ "./resources/js/pages/Components/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tab_vue_vue_type_template_id_642d60c5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tab_vue_vue_type_template_id_642d60c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Components/Tab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Components/Tab.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Components/Tab.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Components/Tab.vue?vue&type=template&id=642d60c5&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Components/Tab.vue?vue&type=template&id=642d60c5& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_642d60c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=template&id=642d60c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Components/Tab.vue?vue&type=template&id=642d60c5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_642d60c5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_642d60c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);