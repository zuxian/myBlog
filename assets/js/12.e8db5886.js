(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{509:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("目录")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#总结"}},[t._v("总结")])]),a("li",[a("a",{attrs:{href:"#_1-父-子-props"}},[t._v("1，父  ==> 子（props）")])]),a("li",[a("a",{attrs:{href:"#_2-子-父-emit自定义事件"}},[t._v("2，子  ==> 父（emit自定义事件）")])]),a("li",[a("a",{attrs:{href:"#_3-非父子组件通信-eventbus-emit、-on-、-off"}},[t._v("3，非父子组件通信(EventBus) ---$emit、 $on 、$off")])]),a("li",[a("a",{attrs:{href:"#_4-ref"}},[t._v("4，$ref")])]),a("li",[a("a",{attrs:{href:"#_5-祖-孙-provide-inject"}},[t._v("5，祖 ==>  孙（provide/inject）")])]),a("li",[a("a",{attrs:{href:"#_6-跨级组件-attrs与-listeners"}},[t._v("6，跨级组件 $attrs与$listeners")])]),a("li",[a("a",{attrs:{href:"#_7-vuex"}},[t._v("7，vuex")])])])]),a("p"),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("父子通信：")])]),t._v(" "),a("p",[t._v("父向子传递数据是通过"),a("code",[t._v("props")]),t._v("，子向父是通过 "),a("code",[t._v("events（$emit）")]),t._v("；\n通过父链 / 子链也可以通信"),a("code",[t._v("（$parent / $children）")]),t._v("；\n"),a("code",[t._v("$ref")]),t._v("也可以访问组件实例；\n"),a("code",[t._v("provide / inject API")]),t._v("；\n"),a("code",[t._v("$attrs/$listeners")])]),t._v(" "),a("ul",[a("li",[t._v("兄弟通信：")])]),t._v(" "),a("p",[a("code",[t._v("Bus；Vuex")])]),t._v(" "),a("ul",[a("li",[t._v("跨级通信：")])]),t._v(" "),a("p",[a("code",[t._v("Bus；Vuex；provide / inject API、$attrs/$listeners")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_1-父-子-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-父-子-props"}},[t._v("#")]),t._v(" 1，父  ==> 子（props）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404161421863.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404161437833.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_2-子-父-emit自定义事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-子-父-emit自定义事件"}},[t._v("#")]),t._v(" 2，子  ==> 父（emit自定义事件）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404164717733.gif#pic_center",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404164126292.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404164347154.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_3-非父子组件通信-eventbus-emit、-on-、-off"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-非父子组件通信-eventbus-emit、-on-、-off"}},[t._v("#")]),t._v(" 3，非父子组件通信(EventBus) ---"),a("code",[t._v("$emit、 $on 、$off")])]),t._v(" "),a("p",[t._v("组件APP.vue （同时引入Hello.vue组件和World.vue组件）")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendParam")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getParam'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getParam'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("param")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeDestroy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$off")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getParam'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404183913398.gif#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("ul",[a("li",[t._v("bus.js")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" bus\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("组件Hello.vue\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404182922263.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("组件World.vue\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404183206705.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("组件APP.vue （同时引入Hello.vue组件和World.vue组件）\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404183251829.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_4-ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-ref"}},[t._v("#")]),t._v(" 4，$ref")]),t._v(" "),a("ul",[a("li",[t._v("ref：\n如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；\n如果用在子组件上，引用就指向组件实例")])]),t._v(" "),a("p",[t._v("compA.vue")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200405092748665.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\nAPP.vue\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200405092558522.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200405093031185.gif#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_5-祖-孙-provide-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-祖-孙-provide-inject"}},[t._v("#")]),t._v(" 5，祖 ==>  孙（provide/inject）")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000021216039",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考11"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("vue提供了provide和inject帮助我们解决多层次嵌套嵌套通信问题。\n在provide中指定要传递给子孙组件的数据，子孙组件通过inject注入祖父组件传递过来的数据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404195616574.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200404195029311.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020040419570933.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_6-跨级组件-attrs与-listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-跨级组件-attrs与-listeners"}},[t._v("#")]),t._v(" 6，跨级组件 "),a("code",[t._v("$attrs与$listeners")])]),t._v(" "),a("ul",[a("li",[a("ul",[a("li",[a("code",[t._v("$attrs")]),t._v('：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。')])])]),t._v(" "),a("li",[a("ul",[a("li",[a("code",[t._v("$listeners")]),t._v('：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件')])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("inheritAttrs：默认值true,继承所有的父组件属性（除props的特定绑定）作为普通的HTML特性应用在子组件的根元素上，如果你不希望组件的根元素继承特性设置inheritAttrs: false,但是class属性会继承（简单的说，inheritAttrs：true 继承除props之外的所有属性；inheritAttrs：false 只继承class属性）")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("APP.vue\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200405112940707.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("Child1.vue\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200405113454238.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("Child2.vue")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020040511371935.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("ul",[a("li",[t._v("结果：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200405113901135.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_7-vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-vuex"}},[t._v("#")]),t._v(" 7，vuex")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200405114427463.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ltYWdlX2Z6eA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);