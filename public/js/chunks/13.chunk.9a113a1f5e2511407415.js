(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/examples/Sortable/Simple.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/examples/Sortable/Simple.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      contacts: [{
        id: 1,
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Sophia Torres',
        email: 'sophia.torres44@example.com'
      }, {
        id: 2,
        avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
        name: 'Jack Byrd',
        email: 'jack.byrd71@example.com'
      }, {
        id: 3,
        avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
        name: 'Sonia Diaz',
        email: 'sonia.diaz11@example.com'
      }, {
        id: 4,
        avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
        name: 'Lucas Mitchell',
        email: 'lucas.mitchell19@example.com'
      }, {
        id: 5,
        avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
        name: 'Caroline Powell',
        email: 'caroline.powell34@example.com'
      }, {
        id: 6,
        avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
        name: 'Dennis Oliver',
        email: 'dennis.oliver21@example.com'
      }]
    };
  }
});

/***/ }),

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
      vModel: vModel,
      vModelCode: vModelCode
    };
  }
});

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Sortable/Simple.vue":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/examples/Sortable/Simple.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n    <section>\n        <p-sortable-list v-model=\"contacts\">\n            <ul class=\"list\" slot-scope=\"{ items: contacts }\">\n                <p-sortable-item v-for=\"contact in contacts\" :key=\"contact.id\">\n                    <li class=\"list--item flex justify-between items-center py-2 hover:bg-gray-100 rounded px-4\">\n                        <img :src=\"contact.avatar\" alt=\"avatar\" class=\"rounded-full w-12 mr-6\">\n                        \n                        <div class=\"flex-1\">\n                            <span class=\"block text-sm\">{{ contact.name }}</span>\n                            <span class=\"block text-xs text-grey\">{{ contact.email }}</span>\n                        </div>\n\n                        <p-sortable-handle class=\"cursor-move\">\n                            <svg class=\"handle\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z\"/></svg>\n                        </p-sortable-handle>\n                    </li>\n                </p-sortable-item>\n            </ul>\n        </p-sortable-list>\n    </section>\n</template>\n\n\n<script>\n    export default {\n        data() {\n            return {\n                contacts: [\n                    {\n                        id: 1,\n                        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',\n                        name: 'Sophia Torres',\n                        email: 'sophia.torres44@example.com',\n                    },\n\n                    {\n                        id: 2,\n                        avatar: 'https://randomuser.me/api/portraits/men/39.jpg',\n                        name: 'Jack Byrd',\n                        email: 'jack.byrd71@example.com',\n                    },\n\n                    {\n                        id: 3,\n                        avatar: 'https://randomuser.me/api/portraits/women/52.jpg',\n                        name: 'Sonia Diaz',\n                        email: 'sonia.diaz11@example.com',\n                    },\n\n                    {\n                        id: 4,\n                        avatar: 'https://randomuser.me/api/portraits/men/55.jpg',\n                        name: 'Lucas Mitchell',\n                        email: 'lucas.mitchell19@example.com',\n                    },\n\n                    {\n                        id: 5,\n                        avatar: 'https://randomuser.me/api/portraits/women/51.jpg',\n                        name: 'Caroline Powell',\n                        email: 'caroline.powell34@example.com',\n                    },\n\n                    {\n                        id: 6,\n                        avatar: 'https://randomuser.me/api/portraits/men/36.jpg',\n                        name: 'Dennis Oliver',\n                        email: 'dennis.oliver21@example.com',\n                    },\n                ],\n            }\n        }\n    }\n</script>\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/examples/Sortable/Simple.vue?vue&type=template&id=972e223e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/examples/Sortable/Simple.vue?vue&type=template&id=972e223e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("p-sortable-list", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var contacts = ref.items
              return _c(
                "ul",
                { staticClass: "list" },
                _vm._l(contacts, function(contact) {
                  return _c("p-sortable-item", { key: contact.id }, [
                    _c(
                      "li",
                      {
                        staticClass:
                          "list--item flex justify-between items-center py-2 hover:bg-gray-100 rounded px-4"
                      },
                      [
                        _c("img", {
                          staticClass: "rounded-full w-12 mr-6",
                          attrs: { src: contact.avatar, alt: "avatar" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-1" }, [
                          _c("span", { staticClass: "block text-sm" }, [
                            _vm._v(_vm._s(contact.name))
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "block text-xs text-grey" },
                            [_vm._v(_vm._s(contact.email))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "p-sortable-handle",
                          { staticClass: "cursor-move" },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "handle",
                                attrs: {
                                  width: "24",
                                  height: "24",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  fill: "currentColor"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "fill-rule": "evenodd",
                                    d:
                                      "M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                1
              )
            }
          }
        ]),
        model: {
          value: _vm.contacts,
          callback: function($$v) {
            _vm.contacts = $$v
          },
          expression: "contacts"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
      _c("example", { attrs: { component: _vm.Simple, code: _vm.SimpleCode } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/examples/Sortable/Simple.vue":
/*!***************************************************!*\
  !*** ./resources/js/examples/Sortable/Simple.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Simple_vue_vue_type_template_id_972e223e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Simple.vue?vue&type=template&id=972e223e& */ "./resources/js/examples/Sortable/Simple.vue?vue&type=template&id=972e223e&");
/* harmony import */ var _Simple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Simple.vue?vue&type=script&lang=js& */ "./resources/js/examples/Sortable/Simple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Simple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Simple_vue_vue_type_template_id_972e223e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Simple_vue_vue_type_template_id_972e223e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/examples/Sortable/Simple.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/examples/Sortable/Simple.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/examples/Sortable/Simple.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Simple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Simple.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/examples/Sortable/Simple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Simple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/examples/Sortable/Simple.vue?vue&type=template&id=972e223e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/examples/Sortable/Simple.vue?vue&type=template&id=972e223e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Simple_vue_vue_type_template_id_972e223e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Simple.vue?vue&type=template&id=972e223e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/examples/Sortable/Simple.vue?vue&type=template&id=972e223e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Simple_vue_vue_type_template_id_972e223e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Simple_vue_vue_type_template_id_972e223e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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