(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{697:function(t,e,o){var i=o(698);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,o(13).default)("e44ee292",i,!0,{sourceMap:!1})},698:function(t,e,o){var i=o(12)(!1);i.push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-sheet.v-footer{border-radius:0}.v-sheet.v-footer:not(.v-sheet--outlined){box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12)}.v-sheet.v-footer.v-sheet--shaped{border-radius:24px 0}.v-footer{align-items:center;display:flex;flex:0 1 auto !important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.v-footer:not([data-booted=true]){transition:none !important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0px}",""]),t.exports=i},751:function(t,e,o){"use strict";o.r(e);var i=o(592),s=o(258),r=o(233),a=o(86),n=(o(10),o(9),o(7),o(3),o(14),o(11),o(15),o(1)),c=(o(20),o(163),o(697),o(70)),l=o(186),p=o(129),f=o(4),u=o(0);function h(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?h(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var b=Object(f.a)(c.a,Object(l.a)("footer",["height","inset"]),p.a).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return d(d({},c.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return d(d({},c.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(u.g)(t),left:Object(u.g)(this.computedLeft),right:Object(u.g)(this.computedRight),bottom:Object(u.g)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),v=o(586),g=o(155),x={data:function(){return{socials:[{icon:"mdi-whatsapp",color:"#25D366"},{icon:"mdi-facebook",color:"#1877F2"},{icon:"mdi-linkedin",color:"#0072b1"},{icon:"mdi-github",color:"#333"}]}}},m=o(27),y=Object(m.a)(x,(function(){var t=this,e=t._self._c;return e(b,{attrs:{color:"white"}},[e(r.a,{staticClass:"badge-with-shadow text-center mx-auto py-3",attrs:{flat:""}},[e(a.b,{staticClass:"v-badge-box-shadow"},[e("div",{staticClass:"card-badge"},[e(i.a,{attrs:{"offset-x":"10","offset-y":"12",left:"",color:"base lighten-3"}},[t._v("\n          .\n          "),e("span",{staticClass:"font-weight-black black--text text-h5"},[t._v("Store")])])],1),t._v(" "),e("div",{staticClass:"socials mt-4"},[t._l(t.socials,(function(o,i){return[e("span",{key:i},[e(v.a,{scopedSlots:t._u([{key:"default",fn:function(r){var a=r.hover;return[e(s.a,{class:{"ml-1":0!==i},attrs:{fab:"",small:"",text:!a,color:a?o.color:"",depressed:""}},[e(g.a,{attrs:{color:a?"white":""},domProps:{textContent:t._s(o.icon)}})],1)]}}],null,!0)})],1)]}))],2)])],1)],1)}),[],!1,null,"667a4761",null);e.default=y.exports}}]);