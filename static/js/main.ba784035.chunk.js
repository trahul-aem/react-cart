(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{16:function(t,e,c){},17:function(t,e,c){},21:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c(2),a=c.n(s),r=c(7),o=c.n(r),i=(c(16),c(10)),j=c(9),d=c(4);c(17);var l=function(t){var e=t.addToCart,c=Object(s.useState)([{name:"Tesla Model 3",cost:"$35,000",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-1605542727.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"},{name:"Tesla Model y",cost:"$55,000",image:"https://www.cstatic-images.com/car-pictures/xl/usd00tss021a021001.png"},{name:"Tesla Model X",cost:"$150,000",image:"https://95octane.com/wp-content/uploads/2020/10/2020_tesla_model_x_black_1.jpg"},{name:"Tesla Model S",cost:"$100,000",image:"https://www.ateq-tpms.com/wp-content/uploads/2019/06/Tesla-model-s-0.jpg"}]),a=Object(d.a)(c,1)[0];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Products"}),Object(n.jsx)("div",{className:"products",children:a.map((function(t,c){return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h4",{children:t.cost}),Object(n.jsx)("img",{src:t.image,alt:t.name}),Object(n.jsx)("button",{onClick:function(){return e(t)},children:"Add to cart"})]},c)}))})]})};var u=function(t){var e=t.cart,c=t.removeFromCart;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Cart"}),Object(n.jsx)("div",{className:"products",children:e.map((function(t,e){return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h4",{children:t.cost}),Object(n.jsx)("img",{src:t.image,alt:t.name}),Object(n.jsx)("button",{onClick:function(){return c(t)},children:"Remove Product "})]},e)}))})]})},m=c(23),h=(c(18),"products"),b="cart";var p=function(){var t=Object(s.useState)([]),e=Object(d.a)(t,2),c=e[0],a=e[1],r=Object(s.useState)("products"),o=Object(d.a)(r,2),p=o[0],O=o[1],x=function(t){O(t)};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{children:[Object(n.jsxs)(m.a,{onClick:function(){return x(b)},children:["Go To Cart (",c.length,")"]}),Object(n.jsx)(m.a,{onClick:function(){return x(h)},children:"View Products "})]}),p===h&&Object(n.jsx)(l,{addToCart:function(t){console.log("we are in add cart"),a([].concat(Object(j.a)(c),[Object(i.a)({},t)]))}}),p===b&&Object(n.jsx)(u,{cart:c,removeFromCart:function(t){a(c.filter((function(e){return e!==t})))}})]})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),a(t),r(t)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.ba784035.chunk.js.map