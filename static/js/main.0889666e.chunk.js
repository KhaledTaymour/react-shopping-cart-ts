(this["webpackJsonpreact-shopping-cart-ts"]=this["webpackJsonpreact-shopping-cart-ts"]||[]).push([[0],{105:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,s=t(0),d=t(10),j=t.n(d),u=t(54),l=t(29),b=t(58),x=t(57),p=t.n(x),h=t(70),m=t(40),O=t(142),f=t(139),v=t(141),g=t(78),C=t.n(g),y=t(140),w=t(135),k=t(22),T=t(23),A=T.a.div(r||(r=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  border: 1px solid lightblue;\n  border-radius: 20px;\n  height: 100%;\n\n  button {\n    border-radius: 0 0 20px 20px;\n  }\n\n  img {\n    max-height: 250px;\n    object-fit: cover;\n    border-radius: 20px 20px 0 0;\n  }\n\n  div {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 1rem;\n    height: 100%;\n  }\n"]))),F=t(4),S=function(n){var e=n.item,t=n.handleAddToCart;return Object(F.jsxs)(A,{children:[Object(F.jsx)("img",{src:e.image,alt:e.description}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h3",{children:e.title}),Object(F.jsx)("p",{children:e.description}),Object(F.jsxs)("h3",{children:["$",e.price]})]}),Object(F.jsx)(w.a,{onClick:function(){return t(e)},children:"Add to cart"})]})},$=T.a.div(i||(i=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  border-bottom: 1px solid lightblue;\n  padding-bottom: 20px;\n\n  div {\n    flex: 1;\n  }\n\n  .information,\n  .buttons {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  img {\n    max-width: 80px;\n    object-fit: cover;\n    margin-left: 40px;\n  }\n"]))),z=function(n){var e=n.item,t=n.addToCart,r=n.removeFromCart;return Object(F.jsxs)($,{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("h3",{children:e.title}),Object(F.jsxs)("div",{className:"information",children:[Object(F.jsxs)("p",{children:[" Price: $",e.price]}),Object(F.jsxs)("p",{children:["Total: $",(e.amount*e.price).toFixed(2)," "]})]}),Object(F.jsxs)("div",{className:"buttons",children:[Object(F.jsx)(w.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return r(e.id)},children:"-"}),Object(F.jsx)("p",{children:e.amount}),Object(F.jsx)(w.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return t(e)},children:"+"})]})]}),Object(F.jsx)("img",{src:e.image,alt:e.title})]})},E=T.a.aside(c||(c=Object(k.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  width: 500px;\n  padding: 20px;\n"]))),H=function(n){var e,t=n.cartItems,r=n.addToCart,i=n.removeFromCart;return Object(F.jsxs)(E,{children:[Object(F.jsx)("h2",{children:"Your Shopping Cart"}),0===t.length?Object(F.jsx)("p",{children:"No items yet"}):null,t.map((function(n){return Object(F.jsx)(z,{item:n,addToCart:r,removeFromCart:i},n.id)})),Object(F.jsxs)("h2",{children:["Total: $",(e=t,e.reduce((function(n,e){return n+e.amount*e.price}),0)).toFixed(2)]})]})},I=t(138),N=T.a.div(a||(a=Object(k.a)(["\n  margin: 40px;\n"]))),Q=Object(T.a)(I.a)(o||(o=Object(k.a)(["\n  position: fixed;\n  z-index: 100;\n  right: 20px;\n  top: 20px;\n"]))),J=function(){var n=Object(h.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();var P=function(){var n=Object(s.useState)(!1),e=Object(b.a)(n,2),t=e[0],r=e[1],i=Object(s.useState)([]),c=Object(b.a)(i,2),a=c[0],o=c[1],d=Object(m.useQuery)("products",J),j=d.data,x=d.isLoading,p=d.error;console.log(j);var h,g=function(n){o((function(e){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(l.a)(Object(l.a)({},e),{},{amount:e.amount+1}):e})):[].concat(Object(u.a)(e),[Object(l.a)(Object(l.a)({},n),{},{amount:1})])}))};return x?Object(F.jsx)(f.a,{}):p?Object(F.jsx)("div",{children:"Something went wrong..."}):Object(F.jsxs)(N,{children:[Object(F.jsx)(O.a,{anchor:"right",open:t,onClose:function(){return r(!1)},children:Object(F.jsx)(H,{cartItems:a,addToCart:g,removeFromCart:function(n){o((function(e){return e.reduce((function(e,t){return t.id===n?1===t.amount?e:[].concat(Object(u.a)(e),[Object(l.a)(Object(l.a)({},t),{},{amount:t.amount-1})]):[].concat(Object(u.a)(e),[t])}),[])}))}})}),Object(F.jsx)(Q,{onClick:function(){return r(!0)},children:Object(F.jsx)(y.a,{badgeContent:(h=a,h.reduce((function(n,e){return n+e.amount}),0)),color:"error",children:Object(F.jsx)(C.a,{})})}),Object(F.jsx)(v.a,{container:!0,spacing:3,children:null===j||void 0===j?void 0:j.map((function(n){return Object(F.jsx)(v.a,{item:!0,xs:12,sm:4,children:Object(F.jsx)(S,{item:n,handleAddToCart:g},n.id)},n.id)}))})]})},B=new m.QueryClient;j.a.render(Object(F.jsx)(m.QueryClientProvider,{client:B,children:Object(F.jsx)(P,{})}),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.0889666e.chunk.js.map