(this["webpackJsonpbutton-component"]=this["webpackJsonpbutton-component"]||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(20),i=n.n(r),l=function(e){return e.children},s=n(21),a=n(22),b=n(52),d=n(51),j=(n(57),n(9)),u=n(2),h=n(5),x=(n(58),n(59),n(0)),O=function(e){var t=Object(o.useState)(1),n=Object(h.a)(t,2),c=n[0],r=n[1];return Object(x.jsx)("ul",{className:"ComponentStates",children:e.list.map((function(t){return Object(x.jsxs)("li",{id:c===t.id?"highlighted":null,onClick:function(){return n=t.id,r(n),e.list.forEach((function(t){t.id===n&&("btn-left--icon"===t.type||"btn-right--icon"===t.type?(e.posClicked(t.type),e.typeClicked("btn-icon")):"input-left--icon"===t.type?(e.posClicked(t.type),e.typeClicked("input-icon-left")):"input-right--icon"===t.type?(e.posClicked(t.type),e.typeClicked("input-icon-right")):(e.posClicked(""),e.typeClicked(t.type)))}));var n},children:[Object(x.jsx)("span",{className:"material-icons md-18 add-icon",style:{color:c===t.id?"#fff":"#f7542e"},children:"bookmark_border"}),t.text]},t.id)}))})},p={Colors:[],Typography:[],Spaces:[],Buttons:[{id:1,type:"btn-default",text:"Default Button"},{id:2,type:"btn-outline",text:"Outline Button"},{id:3,type:"btn-text",text:"Text Button"},{id:4,type:"btn-left--icon",text:"Left Icon Button"},{id:5,type:"btn-right--icon",text:"Right Icon Button"},{id:6,type:"btn-primary",text:"Primary Button"},{id:7,type:"btn-secondary",text:"Secondary Button"},{id:8,type:"btn-danger",text:"Danger Button"}],Inputs:[{id:1,type:"input-default",text:"Default Input"},{id:2,type:"input-error",text:"Error Input"},{id:3,type:"input-validation",text:"Validation Input"},{id:4,type:"input-left--icon",text:"Left Icon Input"},{id:5,type:"input-right--icon",text:"Right Icon Input"},{id:6,type:"input-multiline",text:"Multiline Input"}],Grid:[]},C=function(e){var t=Object(o.useState)({Colors:"add_box",Typography:"add_box",Spaces:"add_box",Buttons:"add_box",Inputs:"add_box",Grid:"add_box"}),n=Object(h.a)(t,2),c=n[0],r=n[1],i=Object(o.useState)(""),s=Object(h.a)(i,2),a=s[0],b=s[1],d=e.menu?"slide-right":null;return Object(x.jsxs)("div",{className:"Sidebar",id:d,children:[Object(x.jsxs)("div",{className:"sidebar-title",children:[Object(x.jsx)("span",{className:"dev",children:Object(x.jsx)("b",{children:"Dev"})}),Object(x.jsx)("span",{className:"challenges",children:Object(x.jsx)("b",{children:"challenges.io"})})]}),Object(x.jsx)("nav",{children:Object(x.jsx)("ul",{className:"main-nav",children:Object.keys(p).map((function(t,n){return Object(x.jsxs)(l,{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{onClick:function(){return t=n,void Object.keys(p).forEach((function(n,o){o===t&&"add_box"===c[n]?(b(n),e.setComponent(n),r((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,"remove"))})),void 0!==p[n][0]?(e.typeClicked(p[n][0].type),e.posClicked("")):e.typeClicked("progress")):o===t&&"remove"===c[n]&&(b(""),e.typeClicked(""),e.setComponent(null),r((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,"add_box"))}))),o!==t&&"remove"===c[n]&&r((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,"add_box"))}))}));var t},className:"material-icons md-18 add-icon",children:c[t]}),t]}),t===a?Object(x.jsx)(O,{typeClicked:e.typeClicked,posClicked:e.posClicked,list:p[t]}):null]},n)}))})})]})},f=n(3),m=(n(61),n(62),n(13)),g=(n(63),Object(m.a)((function(e){var t,n,o=null,c={backgroundColor:e.btnBgColor,color:e.btnTextColor},r=e.position?Object(x.jsx)("span",{className:"material-icons md-24 ".concat(e.position),children:e.setIcon}):null;e.btnDisableShadow&&(t={boxShadow:"none"}),e.btnBoxShadowColor&&(n={boxShadow:"0 0 4px ".concat(e.btnBoxShadowColor)}),e.btnHoverColor&&(o={":hover":{border:"4px solid ".concat(e.btnHoverColor)}});var i,s=e.componentState?Object(x.jsxs)("button",{style:Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({},t),n),o),c),className:"btn ".concat((i=e.setSize,"small"===i?i="btn-small":"medium"===i?i="btn-medium":"large"===i&&(i="btn-large"),i)),id:e.componentState,disabled:e.isDisabled,children:[r,e.btnText]}):null;return Object(x.jsx)(l,{children:s})}))),v=(n(75),Object(m.a)((function(e){var t,n=null,o={color:e.inputTextColor,borderColor:e.inputBorderColor};e.inputHoverColor&&(t={":hover":{borderColor:e.inputHoverColor}}),e.inputFocusColor&&(n={":focus":{borderColor:e.inputFocusColor}});var c,r=e.position?Object(x.jsx)("span",{className:"material-icons md-28 ".concat(e.position),children:e.setIcon}):null,i="input-validation"===e.componentState?Object(x.jsx)("p",{id:"helper-text",children:"Some interesting text"}):null,s=Object(x.jsxs)("div",{className:"input-container",children:[r,Object(x.jsx)("input",{type:"text",style:Object(u.a)(Object(u.a)(Object(u.a)({},t),n),o),className:"input ".concat((c=e.setSize,"small"===c?c="input-small":"medium"===c?c="input-medium":"large"===c&&(c="input-large"),c)),id:e.componentState,placeholder:"Placeholder",disabled:e.isDisabled}),i]}),a=Object(x.jsx)("textarea",{rows:"6",cols:"20",style:Object(u.a)(Object(u.a)(Object(u.a)({},t),n),o),id:e.componentState,placeholder:"Placeholder",disabled:e.isDisabled});return Object(x.jsx)(l,{children:"input-multiline"===e.componentState?a:s})}))),S=function(e){return Object(x.jsxs)("div",{className:"Display",children:[Object(x.jsx)("h2",{children:"progress"===e.componentState?"In Progress":e.component}),function(t){switch(t){case"Buttons":return Object(x.jsx)(g,{componentState:e.componentState,position:e.position,isDisabled:e.isDisabled,setIcon:e.setIcon,setSize:e.setSize,btnText:e.btnText,btnTextColor:e.btnTextColor,btnBgColor:e.btnBgColor,btnBoxShadowColor:e.btnBoxShadowColor,btnHoverColor:e.btnHoverColor,btnDisableShadow:e.btnDisableShadow,children:e.text});case"Inputs":return Object(x.jsx)(v,{componentState:e.componentState,position:e.position,setIcon:e.setIcon,setSize:e.setSize,inputTextColor:e.inputTextColor,inputBorderColor:e.inputBorderColor,inputHoverColor:e.inputHoverColor,inputFocusColor:e.inputFocusColor,isDisabled:e.isDisabled});default:return null}}(e.component)]})},y=(n(76),n(77),function(e){return Object(x.jsx)(l,{children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Text"})}),Object(x.jsx)("td",{children:Object(x.jsx)("textarea",{className:"panel-textarea",onChange:e.btnTextChange,defaultValue:"Default"})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Color"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("div",{id:"td-container",children:[Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Text"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.btnTextColorChange})]})}),Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Background"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.btnBgColorChange})]})}),Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Shadow"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.btnShadowColorChange})]})}),Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Border Hover"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.btnHoverColorChange})]})})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Button"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectDisable,className:"disabled",children:[Object(x.jsx)("option",{children:"Enabled"}),Object(x.jsx)("option",{children:"Disabled"})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Box-shadow"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.btnShadowChange,children:[Object(x.jsx)("option",{children:"Enabled"}),Object(x.jsx)("option",{children:"Disabled"})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Change Icon"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectIcon,children:[Object(x.jsx)("option",{children:"face"}),Object(x.jsx)("option",{children:"heart"}),Object(x.jsx)("option",{children:"leaf"}),Object(x.jsx)("option",{children:"tool"}),Object(x.jsx)("option",{children:"star"})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Change Size"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectSize,children:[Object(x.jsx)("option",{children:"small"}),Object(x.jsx)("option",{children:"medium"}),Object(x.jsx)("option",{children:"large"})]})})]})]})})}),B=(n(78),function(e){return Object(x.jsx)(l,{children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Color"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("div",{id:"td-container",children:[Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Text"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.inputTextColorChange})]})}),Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Border"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.inputBorderColorChange})]})}),Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Hover"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.inputHoverColorChange})]})}),Object(x.jsx)("div",{className:"td-boxes",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("span",{children:"Focus"}),Object(x.jsx)("input",{type:"color",defaultValue:"#efefef",onChange:e.inputFocusColorChange})]})})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Input"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectDisable,className:"disabled",children:[Object(x.jsx)("option",{children:"Enabled"}),Object(x.jsx)("option",{children:"Disabled"})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Change Icon"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectIcon,children:[Object(x.jsx)("option",{children:"face"}),Object(x.jsx)("option",{children:"heart"}),Object(x.jsx)("option",{children:"leaf"}),Object(x.jsx)("option",{children:"tool"}),Object(x.jsx)("option",{children:"star"})]})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:"Change Size"})}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{onChange:e.selectSize,children:[Object(x.jsx)("option",{children:"small"}),Object(x.jsx)("option",{children:"medium"}),Object(x.jsx)("option",{children:"large"})]})})]})]})})}),k=function(e){var t;return Object(x.jsxs)("div",{className:"Panel",children:[Object(x.jsx)("div",{className:"tab",children:Object(x.jsx)("span",{children:"Controls"})}),Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Name"}),Object(x.jsx)("th",{children:"Control"})]})}),(t=e.component,"Buttons"===t?Object(x.jsx)(y,{selectDisable:e.selectDisable,selectSize:e.selectSize,selectIcon:e.selectIcon,btnTextChange:e.btnTextChange,btnTextColorChange:e.btnTextColorChange,btnBgColorChange:e.btnBgColorChange,btnShadowColorChange:e.btnShadowColorChange,btnHoverColorChange:e.btnHoverColorChange,btnShadowChange:e.btnShadowChange}):"Inputs"===t?Object(x.jsx)(B,{inputTextColorChange:e.inputTextColorChange,inputBorderColorChange:e.inputBorderColorChange,inputHoverColorChange:e.inputHoverColorChange,inputFocusColorChange:e.inputFocusColorChange,selectDisable:e.selectDisable,selectIcon:e.selectIcon,selectSize:e.selectSize}):void 0)]})]})},N=function(e){var t=Object(o.useState)({disabled:!1,icon:"face",size:"small"}),n=Object(h.a)(t,2),c=n[0],r=n[1],i=Object(o.useState)({btnText:"Default",textColor:"",bgColor:"",boxShadowColor:"",borderHoverColor:"",disableShadow:!1}),l=Object(h.a)(i,2),s=l[0],a=l[1],b=Object(o.useState)({textColor:"",borderColor:"",hoverColor:"",focusColor:""}),d=Object(h.a)(b,2),j=d[0],O=d[1];return Object(x.jsxs)("div",{className:"Canvas",children:[Object(x.jsx)(S,{component:e.component,componentState:e.componentState,position:e.position,isDisabled:c.disabled,setSize:c.size,setIcon:c.icon,btnText:s.btnText,btnTextColor:s.textColor,btnBgColor:s.bgColor,btnBoxShadowColor:s.boxShadowColor,btnHoverColor:s.borderHoverColor,btnDisableShadow:s.disableShadow,inputTextColor:j.textColor,inputBorderColor:j.borderColor,inputHoverColor:j.hoverColor,inputFocusColor:j.focusColor}),Object(x.jsx)(k,{component:e.component,selectDisable:function(){return r((function(e){var t=e.disabled,n=Object(f.a)(e,["disabled"]);return Object(u.a)(Object(u.a)({},n),{},{disabled:!t})}))},selectSize:function(e){return r((function(t){return Object(u.a)(Object(u.a)({},t),{},{size:e.target.value})}))},selectIcon:function(e){switch(e.target.value){case"heart":r((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"favorite"})}));break;case"leaf":r((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"eco"})}));break;case"tool":r((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"build"})}));break;case"star":r((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"grade"})}));break;default:r((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"face"})}))}},btnTextChange:function(e){return a((function(t){t.btnText;var n=Object(f.a)(t,["btnText"]);return Object(u.a)(Object(u.a)({},n),{},{btnText:e.target.value})}))},btnTextColorChange:function(e){return a((function(t){t.textColor;var n=Object(f.a)(t,["textColor"]);return Object(u.a)(Object(u.a)({},n),{},{textColor:e.target.value})}))},btnBgColorChange:function(e){return a((function(t){t.bgColor;var n=Object(f.a)(t,["bgColor"]);return Object(u.a)(Object(u.a)({},n),{},{bgColor:e.target.value})}))},btnShadowColorChange:function(e){return a((function(t){t.boxShadowColor;var n=Object(f.a)(t,["boxShadowColor"]);return Object(u.a)(Object(u.a)({},n),{},{boxShadowColor:e.target.value})}))},btnHoverColorChange:function(e){return a((function(t){t.borderHoverColor;var n=Object(f.a)(t,["borderHoverColor"]);return Object(u.a)(Object(u.a)({},n),{},{borderHoverColor:e.target.value})}))},btnShadowChange:function(){return a((function(e){var t=e.disableShadow,n=Object(f.a)(e,["disableShadow"]);return Object(u.a)(Object(u.a)({},n),{},{disableShadow:!t})}))},inputTextColorChange:function(e){return O((function(t){t.textColor;var n=Object(f.a)(t,["textColor"]);return Object(u.a)(Object(u.a)({},n),{},{textColor:e.target.value})}))},inputBorderColorChange:function(e){return O((function(t){t.borderColor;var n=Object(f.a)(t,["borderColor"]);return Object(u.a)(Object(u.a)({},n),{},{borderColor:e.target.value})}))},inputHoverColorChange:function(e){return O((function(t){t.hoverColor;var n=Object(f.a)(t,["hoverColor"]);return Object(u.a)(Object(u.a)({},n),{},{hoverColor:e.target.value})}))},inputFocusColorChange:function(e){return O((function(t){t.focusColor;var n=Object(f.a)(t,["focusColor"]);return Object(u.a)(Object(u.a)({},n),{},{focusColor:e.target.value})}))}})]})},T=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).getComponent=function(e){return o.setState({component:e})},o.handleBtnTypeClicked=function(e){return o.setState({componentState:e})},o.handleIconPosClicked=function(e){return o.setState({iconPosition:e})},o.handleMenuClicked=function(){o.setState((function(e){return{slideMenu:!e.slideMenu}})),"menu"===o.state.iconMenu?o.setState({iconMenu:"close"}):o.setState({iconMenu:"menu"})},o.state={component:null,componentState:"",iconPosition:"",slideMenu:!1,iconMenu:"menu"},o}return Object(a.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(l,{children:[Object(x.jsx)("span",{className:"material-icons md-36 icon-menu",id:this.state.iconMenu,onClick:this.handleMenuClicked,children:this.state.iconMenu}),Object(x.jsxs)("div",{className:"Layout",children:[Object(x.jsx)(C,{menu:this.state.slideMenu,setComponent:this.getComponent,typeClicked:this.handleBtnTypeClicked,posClicked:this.handleIconPosClicked}),Object(x.jsx)(N,{component:this.state.component,componentState:this.state.componentState,position:this.state.iconPosition})]})]})}}]),n}(o.Component),w=function(){return Object(x.jsx)(l,{children:Object(x.jsx)(T,{})})},I=(n(79),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))});i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),I()}},[[80,1,2]]]);
//# sourceMappingURL=main.5bed9303.chunk.js.map