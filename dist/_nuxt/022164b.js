(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{673:function(t,e,n){var a=n(731);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(13).default)("9a89fcf2",a,!0,{sourceMap:!1})},730:function(t,e,n){"use strict";n(673)},731:function(t,e,n){var a=n(12)(!1);a.push([t.i,".custom-bg[data-v-050ea205]{background-image:linear-gradient(to right, #000, transparent) !important}",""]),t.exports=a},765:function(t,e,n){"use strict";n.r(e);var a=n(258),s=n(233),i=n(86),r=n(585),o=n(591),l=n(586),u=n(196),c=n(584),d=n(55),p=(n(49),n(7),n(3),n(30),n(28),n(75),n(595)),h={data:function(){return{products:p,isLoaded:!1}},computed:{C_products:function(){return this.products.filter((function(t){return"clothes"!==t.category.name.toLowerCase()})).slice(0,2)},C_title:function(){return function(t){return t.split(" ").reduce((function(t,e){return t.length+e.length<=16?t+" "+e:t}))}},C_img:function(){return this.$vuetify.breakpoint.lgAndUp?{width:575,height:360}:this.$vuetify.breakpoint.mdOnly?{width:430,height:325}:{width:575,height:360}}},mounted:function(){this.isLoaded=!0}},f=(n(730),n(27)),g=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"home-d-brutal-force"}},[e(o.a,[e(c.a,{attrs:{dense:""}},t._l(t.C_products,(function(n,o){return e(r.a,{key:o,attrs:{cols:"12",sm:"6"}},[e(l.a,{attrs:{"open-delay":100},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[e(u.a,{attrs:{src:n.images[0],"max-height":"360",width:t.C_img.width,height:t.C_img.height,position:"center"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("BaseSkeletonLoader",{attrs:{type:"image,image"}})]},proxy:!0}],null,!0)},[t._v(" "),t.isLoaded?e(d.f,[o||t.$vuetify.breakpoint.xsOnly?e(s.a,{staticClass:"custom-bg fill-height pl-3 pl-sm-5 pl-md-8 d-flex flex-column align-start justify-center",attrs:{flat:"",color:"transparent"}},[e("div",{staticClass:"text-h6 text-sm-h5 text-md-h4 mb-2 font-weight-bold white px-2"},[t._v("\n                  Brutal Sale!\n                ")]),t._v(" "),e("div",{staticClass:"text-h6 text-sm-h5 text-md-h4 font-weight-bold white--text base px-2"},[t._v("\n                  "+t._s(t.C_title(n.title))+"\n                ")]),t._v(" "),e(i.a,{staticClass:"mt-1 mt-sm-3"},[e(a.a,{staticClass:"px-sm-6 px-lg-8",attrs:{color:"surface darken-1",large:t.$vuetify.breakpoint.lgAndUp,dark:"",rounded:"",depressed:""}},[e("span",{staticClass:"text-capitalize"},[t._v("shop now")])])],1)],1):t._e()],1):t._e()],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"050ea205",null);e.default=g.exports;installComponents(g,{BaseSkeletonLoader:n(199).default})}}]);