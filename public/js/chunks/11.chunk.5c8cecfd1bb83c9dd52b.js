(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{13:function(e,n,t){"use strict";t.r(n);var i={data:function(){return{selected:{},files:[{id:1,name:"Documents",isFolder:!0,children:[{id:2,name:"Hello.txt",file:!0},{id:3,name:"Universe.txt",file:!0}]}]}}},l=t(0),d=Object(l.a)(i,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p-treeview",{staticClass:"mb-10",attrs:{items:e.files},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),e._v(" "),e._m(0),e._v(" "),t("p",[t("code",[e._v(e._s(e.selected))])])],1)}),[function(){var e=this.$createElement,n=this._self._c||e;return n("p",{staticClass:"mb-2"},[n("strong",[this._v("Selected:")])])}],!1,null,null,null).exports,a={data:function(){return{selected:{},directories:[{id:1,name:"Folder 1",children:[{id:2,name:"hello",file:!0},{id:3,name:"wat",file:!0},{id:4,name:"child folder",isFolder:!0,children:[{id:5,name:"child folder",isFolder:!0,children:[{id:6,name:"hello",file:!0},{id:7,name:"wat",file:!0}]},{id:8,name:"hello",file:!0},{id:9,name:"wat",file:!0},{id:10,name:"child folder",isFolder:!0,children:[{id:11,name:"hello",file:!0},{id:12,name:"wat",file:!0}]}]}]},{id:13,name:"Folder 2",children:[{id:14,name:"hello",file:!0},{id:15,name:"wat",file:!0},{id:16,name:"child folder",isFolder:!0,children:[{id:17,name:"child folder",isFolder:!0,children:[{id:18,name:"hello",file:!0},{id:19,name:"wat",file:!0}]},{id:20,name:"hello",file:!0},{id:21,name:"wat",file:!0},{id:22,name:"child folder",isFolder:!0,children:[{id:23,name:"hello",file:!0},{id:24,name:"wat",file:!0}]}]}]}]}}},r=Object(l.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("p-treeview",{staticClass:"mb-10",attrs:{items:e.directories},scopedSlots:e._u([{key:"prepend",fn:function(e){var n=e.node,i=e.open;return[n.file?t("i",{staticClass:"fas fa-file-alt fa-fw mr-2"}):t("i",{staticClass:"fas fa-fw mr-2",class:{"fa-folder-open":i,"fa-folder":!i}})]}}]),model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),e._v(" "),e._m(0),e._v(" "),t("p",[t("code",[e._v(e._s(e.selected))])])],1)}),[function(){var e=this.$createElement,n=this._self._c||e;return n("p",{staticClass:"mb-2"},[n("strong",[this._v("Selected:")])])}],!1,null,null,null).exports,o={data:function(){return{Simple:d,SimpleCode:'<template>\n    <section>\n        <p-treeview :items="files" v-model="selected" class="mb-10"></p-treeview>\n\n        <p class="mb-2"><strong>Selected:</strong></p>\n        <p><code>{{ selected }}</code></p>\n    </section>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                selected: {},\n                files: [{\n                    id: 1,\n                    name: \'Documents\',\n                    isFolder: true,\n                    children: [\n                        { id: 2, name: \'Hello.txt\', file: true },\n                        { id: 3, name: \'Universe.txt\', file: true },\n                    ],\n                }],\n            }\n        }\n    }\n<\/script>\n',Advanced:r,AdvancedCode:"<template>\n    <section>\n        <p-treeview :items=\"directories\" v-model=\"selected\" class=\"mb-10\">\n            <template slot=\"prepend\" slot-scope=\"{ node, open }\">\n                <i class=\"fas fa-fw mr-2\" :class=\"{'fa-folder-open': open, 'fa-folder': ! open}\" v-if=\"! node.file\"></i>\n                <i class=\"fas fa-file-alt fa-fw mr-2\" v-else></i>\n            </template>\n        </p-treeview>\n\n        <p class=\"mb-2\"><strong>Selected:</strong></p>\n        <p><code>{{ selected }}</code></p>\n    </section>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                selected: {},\n                directories: [\n                    {\n                        id: 1,\n                        name: 'Folder 1',\n                        children: [\n                            { id: 2, name: 'hello', file: true },\n                            { id: 3, name: 'wat', file: true },\n                            {\n                                id: 4,\n                                name: 'child folder',\n                                isFolder: true,\n                                children: [\n                                    {\n                                        id: 5,\n                                        name: 'child folder',\n                                        isFolder: true,\n                                        children: [\n                                            { id: 6, name: 'hello', file: true },\n                                            { id: 7, name: 'wat', file: true }\n                                        ]\n                                    },\n                                    { id: 8, name: 'hello', file: true },\n                                    { id: 9, name: 'wat', file: true },\n                                    {\n                                        id: 10,\n                                        name: 'child folder',\n                                        isFolder: true,\n                                        children: [\n                                            { id: 11, name: 'hello', file: true },\n                                            { id: 12, name: 'wat', file: true }\n                                        ]\n                                    }\n                                ]\n                            }\n                        ]\n                    },\n                    {\n                        id: 13,\n                        name: 'Folder 2',\n                        children: [\n                            { id: 14, name: 'hello', file: true },\n                            { id: 15, name: 'wat', file: true },\n                            {\n                                id: 16,\n                                name: 'child folder',\n                                isFolder: true,\n                                children: [\n                                    {\n                                        id: 17,\n                                        name: 'child folder',\n                                        isFolder: true,\n                                        children: [\n                                            { id: 18, name: 'hello', file: true },\n                                            { id: 19, name: 'wat', file: true }\n                                        ]\n                                    },\n                                    { id: 20, name: 'hello', file: true },\n                                    { id: 21, name: 'wat', file: true },\n                                    {\n                                        id: 22,\n                                        name: 'child folder',\n                                        isFolder: true,\n                                        children: [\n                                            { id: 23, name: 'hello', file: true },\n                                            { id: 24, name: 'wat', file: true }\n                                        ]\n                                    }\n                                ]\n                            }\n                        ]\n                    }\n                ],\n            }\n        }\n    }\n<\/script>\n",ItemStructure:"\n            [{\n                name: 'Documents',\n                isFolder: true,\n                children: [\n                    { name: 'Hello.txt', file: true },\n                    { name: 'Universe.txt', file: true },\n                ],\n            }]"}}},s=Object(l.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("article",[t("h2",[e._v("Example")]),e._v(" "),t("example",{attrs:{component:e.Simple,code:e.SimpleCode}}),e._v(" "),t("h2",[e._v("Item Structure")]),e._v(" "),t("p",[e._v("When passing items to the treeview component, an array of objects is expected. There are two properties that will be taken into consideration: name and children. These can be nested indefinitely.")]),e._v(" "),t("code-reference",{attrs:{lang:"json",code:e._f("pre")(e.ItemStructure)}}),e._v(" "),t("p",[e._v("You may optionally pass any additional data along with your items. The additional data may be used within the provided scoped slots when customizing the look and feel of your treeview.")]),e._v(" "),t("h2",[e._v("Advanced Treeview")]),e._v(" "),e._m(0),e._v(" "),t("example",{attrs:{component:e.Advanced,code:e.AdvancedCode}}),e._v(" "),t("api-reference",{attrs:{data:[{slots:[{name:"<code>label</code>",description:"Label of each item.",scope:"item, open"},{name:"<code>prepend</code>",description:"Content prepending each label.",scope:"item, open"},{name:"<code>append</code>",description:"Content appending each label.",scope:"item, open"}]}]}})],1)}),[function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("When combined with additional data, you can easily customize the presentation of your items. The following example shows the use of the "),n("code",[this._v("prepend")]),this._v(" scoped slot to display a custom icon per item.")])}],!1,null,null,null);n.default=s.exports}}]);