(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"154b":function(t,e,n){"use strict";(function(t){n("d6d2");r(n("66fd"));var e=r(n("4cab"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},2130:function(t,e,n){},"24b4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),c=n("26cb");function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,c,o,a){try{var i=t[o](a),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(r,c)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,c){var o=t.apply(e,n);function i(t){a(o,r,c,i,u,"next",t)}function u(t){a(o,r,c,i,u,"throw",t)}i(void 0)}))}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){n.e("pages/index/components/actions/actions").then(function(){return resolve(n("47e7"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("pages/index/components/cartbar/cartbar").then(function(){return resolve(n("1d23"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("pages/index/components/product-modal/product-modal").then(function(){return resolve(n("12ff"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("pages/index/components/cart-popup/cart-popup").then(function(){return resolve(n("7887"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("pages/index/components/search/search").then(function(){return resolve(n("1c96"))}.bind(null,n)).catch(n.oe)},b={components:{Actions:l,CartBar:f,ProductModal:p,cartPopup:h,Search:g},data:function(){return{categories:[],cart:[],product:{},currentCategoryId:0,notices:[],ads1:["https://go.cdn.heytea.com/storage/ad/2020/05/28/752a5519e89541bd8417614c599cf8c3.jpg","https://go.cdn.heytea.com/storage/ad/2020/05/24/38b7f686cf10449c85b0f5489d5d958e.jpg","https://go.cdn.heytea.com/storage/ad/2020/05/21/2315beb5105944e8b795c5c0084ec99f.jpg","https://go.cdn.heytea.com/storage/ad/2020/05/21/b88c6780a73249b0b0166784917a5046.jpg"],ads2:["https://go.cdn.heytea.com/storage/ad/2020/05/21/acfc6504f3074cf6b730f516adc558f6.jpg","https://go.cdn.heytea.com/storage/ad/2020/04/26/2373600789c64752b2415293877ead40.jpg","https://go.cdn.heytea.com/storage/ad/2020/04/22/515df8c726e740089ae4c55582b4ce09.jpg","https://go.cdn.heytea.com/storage/ad/2020/04/14/d0e51cb22c0a437293c0e6a879b59c7d.jpg"],productModalVisible:!1,cartPopupShow:!1,productsScrollTop:0,showSearch:!1}},computed:s(s({},(0,c.mapState)(["orderType","address"])),{},{productCartNum:function(){var t=this;return function(e){return t.cart.reduce((function(t,n){return n.id===e?t+n.number:t}),0)}}}),onLoad:function(){var t=this;return i(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api("notices");case 2:return t.notices=e.sent,e.next=5,t.$api("categories");case 5:t.categories=e.sent,t.currentCategoryId=t.categories.length&&t.categories[0].id,t.$nextTick((function(){return t.calcSize()}));case 8:case"end":return e.stop()}}),e)})))()},methods:s(s({},(0,c.mapMutations)(["SET_ORDER_TYPE"])),{},{switchOrderType:function(){"takein"===this.orderType?t.navigateTo({url:"/pages/addresses/addresses"}):this.SET_ORDER_TYPE("takein")},handleAddToCart:function(t){var e=this.cart.findIndex((function(e){return t.is_single?e.id===t.id:e.id==t.id&&e.materials_text==t.materials_text}));e>-1?this.cart[e].number+=t.number||1:this.cart.push({id:t.id,cate_id:t.category_id,name:t.name,price:t.price,number:t.number||1,image:t.images[0].url,is_single:t.is_single,materials_text:t.materials_text||""})},handleMinusFromCart:function(t){var e;e=t.is_single?this.cart.findIndex((function(e){return e.id==t.id})):this.cart.findIndex((function(e){return e.id==t.id&&e.materials_text==t.materials_text})),this.cart[e].number-=1,this.cart[e].number<=0&&this.cart.splice(e,1)},showProductDetailModal:function(t){this.product=t,this.productModalVisible=!0},handleAddToCartInModal:function(t){this.handleAddToCart(t),this.closeProductDetailModal()},closeProductDetailModal:function(){this.productModalVisible=!1,this.product={}},openCartDetailsPopup:function(){this.$refs["cartPopup"].open()},clearCart:function(){this.cart=[]},handleMenuSelected:function(t){var e=this;this.productsScrollTop=this.categories.find((function(e){return e.id==t})).top,this.$nextTick((function(){return e.currentCategoryId=t}))},productsScroll:function(t){var e=t.detail,n=e.scrollTop,r=this.categories.filter((function(t){return t.top<=n})).reverse();r.length>0&&(this.currentCategoryId=r[0].id)},calcSize:function(){var e=0,n=t.createSelectorQuery().select("#ads");n.fields({size:!0},(function(t){e+=Math.floor(t.height)})).exec(),this.categories.forEach((function(n){var r=t.createSelectorQuery().select("#products-".concat(n.id));r.fields({size:!0},(function(t){n.top=e,e+=Math.floor(t.height),n.bottom=e})).exec()}))},pay:function(){t.setStorageSync("cart",this.cart),t.navigateTo({url:"/pages/pay/pay"})}})};e.default=b}).call(this,n("543d")["default"])},"4cab":function(t,e,n){"use strict";n.r(e);var r=n("d713"),c=n("e956");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("88ae");var a,i=n("f0c5"),u=Object(i["a"])(c["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},"88ae":function(t,e,n){"use strict";var r=n("2130"),c=n.n(r);c.a},d713:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var c=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.categories,(function(e,n){var r=t.__get_orig(e),c=t.__map(e.products,(function(e,n){var r=t.__get_orig(e),c=t.__map(e.labels,(function(e,n){var r=t.__get_orig(e),c=t.$util.hexToRgba(e.label_color,.2);return{$orig:r,g0:c}})),o=t.productCartNum(e.id);return{$orig:r,l0:c,m0:o}}));return{$orig:r,l1:c}})));t._isMounted||(t.e0=function(e){t.showSearch=!0},t.e1=function(e){t.showSearch=!1}),t.$mp.data=Object.assign({},{$root:{l2:n}})},o=[]},e956:function(t,e,n){"use strict";n.r(e);var r=n("24b4"),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=c.a}},[["154b","common/runtime","common/vendor"]]]);