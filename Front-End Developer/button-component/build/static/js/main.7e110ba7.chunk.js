(this["webpackJsonpbutton-component"]=this["webpackJsonpbutton-component"]||[]).push([[0],{56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),o=c(18),i=c.n(o),a=function(e){return e.children},l=c(19),r=c(20),d=c(51),j=c(50),b=(c(56),c(8)),u=c(4),h=c(2),x=(c(57),c(58),c(0)),O=[{id:1,type:"default",text:"Default Button"},{id:2,type:"outline",text:"Outline Button"},{id:3,type:"text",text:"Text Button"},{id:4,type:"left-icon",text:"Left Icon Button"},{id:5,type:"right-icon",text:"Right Icon Button"},{id:6,type:"primary",text:"Primary Button"},{id:7,type:"secondary",text:"Secondary Button"},{id:8,type:"danger",text:"Danger Button"}],p=function(e){var t=Object(n.useState)(O),c=Object(h.a)(t,2),s=c[0],o=(c[1],Object(n.useState)(1)),i=Object(h.a)(o,2),a=i[0],l=i[1];return Object(x.jsx)("ul",{className:"ButtonStories",children:s.map((function(t){return Object(x.jsxs)("li",{id:a===t.id?"highlighted":null,onClick:function(){return c=t.id,l(c),O.forEach((function(t){t.id===c&&("left-icon"===t.type||"right-icon"===t.type?(e.posClicked(t.type),e.typeClicked("icon-btn")):(e.posClicked(""),e.typeClicked(t.type)))}));var c},children:[Object(x.jsx)("span",{className:"material-icons md-18 add-icon",style:{color:a===t.id?"#fff":"#f7542e"},children:"bookmark_border"}),t.text]},t.id)}))})},f=["Colors","Typography","Spaces","Buttons","Inputs","Grid"],C=function(e){var t=Object(n.useState)(!1),c=Object(h.a)(t,2),s=c[0],o=c[1],i=Object(n.useState)({0:"add_box",1:"add_box",2:"add_box",3:"add_box",4:"add_box",5:"add_box"}),l=Object(h.a)(i,2),r=l[0],d=l[1],j=s?Object(x.jsx)(p,{typeClicked:e.typeClicked,posClicked:e.posClicked}):null,O=e.menu?"slide-right":null;return Object(x.jsxs)("div",{className:"Sidebar",id:O,children:[Object(x.jsxs)("div",{className:"sidebar-title",children:[Object(x.jsx)("span",{className:"dev",children:Object(x.jsx)("b",{children:"Dev"})}),Object(x.jsx)("span",{className:"challenges",children:Object(x.jsx)("b",{children:"challenges.io"})})]}),Object(x.jsx)("nav",{children:Object(x.jsx)("ul",{className:"main-nav",children:f.map((function(t,c){return Object(x.jsxs)(a,{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{onClick:function(){return t=c,void f.forEach((function(c,n){n===t&&"add_box"===r[t]?("Buttons"===c&&(o(!s),e.typeClicked("default")),d((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t,"remove"))}))):n===t&&"remove"===r[t]&&("Buttons"===c&&(o(!s),e.typeClicked("")),d((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t,"add_box"))})))}));var t},className:"material-icons md-18 add-icon",children:r[c]}),t]}),"Buttons"===t?j:null]},c)}))})})]})},m=(c(60),c(61),c(49)),v=(c(62),Object(m.a)((function(e){var t,c,n=null,s={backgroundColor:e.backgroundColor,color:e.textColor},o=e.position?Object(x.jsx)("span",{className:"material-icons md-24",id:e.position,children:e.btnIcon}):null;e.isShadowed&&(t={boxShadow:"none"}),e.shadowColor&&(c={boxShadow:"0 0 4px ".concat(e.shadowColor)}),e.hoverColor&&(n={":hover":{border:"4px solid ".concat(e.hoverColor)}});var i=e.type?Object(x.jsxs)("button",{style:Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({},t),c),n),s),className:"btn ".concat(e.type," ").concat(e.btnSize),id:e.type,disabled:e.isDisabled,children:[o,e.text]}):null;return Object(x.jsx)(a,{children:i})}))),y=function(e){return Object(x.jsxs)("div",{className:"Buttons",children:[Object(x.jsx)("h2",{children:"Buttons"}),Object(x.jsx)(v,{type:e.type,position:e.position,show:e.show,isDisabled:e.isDisabled,isShadowed:e.isShadowed,btnIcon:e.btnIcon,btnSize:e.btnSize,backgroundColor:e.backgroundColor,text:e.text,textColor:e.textColor,shadowColor:e.shadowColor,hoverColor:e.hoverColor,children:e.text})]})},g=(c(74),function(e){return Object(x.jsxs)("div",{className:"Panel",children:[Object(x.jsx)("div",{className:"tab",children:Object(x.jsx)("span",{children:"Controls"})}),Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Name"}),Object(x.jsx)("th",{children:"Control"})]})}),Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Text"})}),Object(x.jsx)("td",{children:Object(x.jsx)("textarea",{onChange:e.changeText,defaultValue:"Default"})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Color"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("div",{id:"td-container",children:[Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Text"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.selectTextColor})]})}),Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Background"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.selectBgColor})]})}),Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Shadow"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.selectShadowColor})]})}),Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Border Hover"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.selectHoverColor})]})})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Button"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectDisable,className:"disabled",children:[Object(x.jsx)("option",{children:"Enabled"}),Object(x.jsx)("option",{children:"Disabled"})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Box-shadow"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectShadow,children:[Object(x.jsx)("option",{children:"Enabled"}),Object(x.jsx)("option",{children:"Disabled"})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Change Icon"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectIcon,children:[Object(x.jsx)("option",{children:"face"}),Object(x.jsx)("option",{children:"heart"}),Object(x.jsx)("option",{children:"leaf"}),Object(x.jsx)("option",{children:"tool"}),Object(x.jsx)("option",{children:"star"})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Change Size"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectSize,children:[Object(x.jsx)("option",{children:"small"}),Object(x.jsx)("option",{children:"medium"}),Object(x.jsx)("option",{children:"large"})]})})]})]})]})]})}),S=function(e){var t=Object(n.useState)(!1),c=Object(h.a)(t,2),s=c[0],o=c[1],i=Object(n.useState)(!1),a=Object(h.a)(i,2),l=a[0],r=a[1],d=Object(n.useState)("Default"),j=Object(h.a)(d,2),b=j[0],u=j[1],O=Object(n.useState)("face"),p=Object(h.a)(O,2),f=p[0],C=p[1],m=Object(n.useState)("small"),v=Object(h.a)(m,2),S=v[0],k=v[1],w=Object(n.useState)(""),B=Object(h.a)(w,2),N=B[0],T=B[1],D=Object(n.useState)(""),I=Object(h.a)(D,2),M=I[0],P=I[1],_=Object(n.useState)(""),z=Object(h.a)(_,2),E=z[0],V=z[1],F=Object(n.useState)(""),L=Object(h.a)(F,2),H=L[0],J=L[1];return Object(x.jsxs)("div",{className:"Canvas",children:[Object(x.jsx)(y,{type:e.type,position:e.position,show:e.show,isDisabled:s,isShadowed:l,text:b,btnIcon:f,btnSize:S,backgroundColor:N,textColor:M,shadowColor:E,hoverColor:H}),Object(x.jsx)(g,{selectDisable:function(){return o(!s)},selectShadow:function(){return r(!l)},changeText:function(e){return u(e.target.value)},selectIcon:function(e){switch(e.target.value){case"face":C("face");break;case"heart":C("favorite");break;case"leaf":C("eco");break;case"tool":C("build");break;case"star":C("grade")}},selectSize:function(e){return k(e.target.value)},selectBgColor:function(e){return T(e.target.value)},selectTextColor:function(e){return P(e.target.value)},selectShadowColor:function(e){return V(e.target.value)},selectHoverColor:function(e){return J(e.target.value)}})]})},k=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).handleBtnTypeClicked=function(e){return n.setState({btnType:e})},n.handleIconPosClicked=function(e){return n.setState({iconPosition:e})},n.handleMenuClicked=function(){n.setState((function(e){return{slideMenu:!e.slideMenu}})),"menu"===n.state.iconMenu?n.setState({iconMenu:"close"}):n.setState({iconMenu:"menu"})},n.state={btnType:"",iconPosition:"",showButton:!1,slideMenu:!1,iconMenu:"menu"},n}return Object(r.a)(c,[{key:"render",value:function(){return Object(x.jsxs)(a,{children:[Object(x.jsx)("span",{className:"material-icons md-36 icon-menu",id:this.state.iconMenu,onClick:this.handleMenuClicked,children:this.state.iconMenu}),Object(x.jsxs)("div",{className:"Layout",children:[Object(x.jsx)(C,{menu:this.state.slideMenu,typeClicked:this.handleBtnTypeClicked,posClicked:this.handleIconPosClicked}),Object(x.jsx)(S,{type:this.state.btnType,position:this.state.iconPosition,show:this.state.showButton})]})]})}}]),c}(n.Component),w=function(){return Object(x.jsx)(a,{children:Object(x.jsx)(k,{})})},B=(c(75),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),o(e),i(e)}))});i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),B()}},[[76,1,2]]]);
//# sourceMappingURL=main.7e110ba7.chunk.js.map