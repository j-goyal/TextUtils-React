(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),o=a.n(c),r=(a(13),a(1));a(14);function d(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat("dark"===e.mode?"dark":"light"," bg-").concat("dark"===e.mode?"dark":"light")},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link home active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"me-3 custom-control custom-switch text-".concat("dark"===e.mode?"light":"dark"),id:"greenModeDiv"},l.a.createElement("input",{className:"custom-control-input me-1","aria-checked":"false",onChange:e.toggleGreenMode,type:"radio",id:"greenMode"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"flexSwitchCheckDefault"},"Green Mode")),l.a.createElement("div",{className:"me-3 custom-control custom-switch text-".concat("dark"===e.mode?"light":"dark"),id:"redModeDiv"},l.a.createElement("input",{className:"custom-control-input me-1","aria-checked":"false",onChange:e.toggleRedMode,type:"radio",id:"redMode"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"flexSwitchCheckDefault"},"Red Mode")),l.a.createElement("div",{className:"me-3 custom-control custom-switch text-".concat("dark"===e.mode?"light":"dark"),id:"blueModeDiv"},l.a.createElement("input",{className:"custom-control-input me-1","aria-checked":"false",onChange:e.toggleBlueMode,type:"radio",id:"blueMode"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"flexSwitchCheckDefault"},"Blue Mode")),l.a.createElement("div",{className:"custom-control custom-switch text-".concat("dark"===e.mode?"light":"dark"),id:"lightModeDiv"},l.a.createElement("input",{className:"custom-control-input me-1","aria-checked":"false",onChange:e.toggleLightMode,type:"radio",id:"lightMode"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"flexSwitchCheckDefault"},"Light Mode")))))}function m(e){var t=function(t){return""===o?(e.alertShow("Please enter text","warning"),!1):(e.alertShow(t,"success"),!0)},a=Object(n.useState)(""),c=Object(r.a)(a,2),o=c[0],d=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-3"},l.a.createElement("h4",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"#6c757dd1":"white",color:"dark"===e.mode?"white":"black"},value:o,id:"textBox1",onChange:function(e){d(e.target.value)},rows:"7"})),l.a.createElement("button",{type:"button",className:"btn btn-secondary mx-1 my-1",onClick:function(){t("Converted to Upper Case")&&d(o.toUpperCase())}},"UpperCase"),l.a.createElement("button",{type:"button",className:"btn btn-secondary mx-1 my-1",onClick:function(){t("Converted to Lower Case")&&d(o.toLowerCase())}},"LowerCase"),l.a.createElement("button",{type:"button",className:"btn btn-secondary mx-1 my-1",onClick:function(){t("Text copied")&&navigator.clipboard.writeText(o)}},"Copy Text"),l.a.createElement("button",{type:"button",className:"btn btn-secondary mx-1 my-1",onClick:function(){t("All spaces removed")&&d(o.replaceAll("\n","").replaceAll(" ",""))}},"Remove all Spaces"),l.a.createElement("button",{type:"button",className:"btn btn-secondary mx-1 my-1",onClick:function(){t("Number Extracted")&&(null===o.match(/\d+/g)?e.alertShow("No numbers to extract","warning"):d(o.match(/\d+/g).join(" ")))}},"Extract Numbers"),l.a.createElement("button",{type:"button",className:"btn btn-secondary mx-1 my-1",onClick:function(){t("Extra spaces removed")&&d(o.split(/[ ]+/).join(" ").split(/[\n]+/).join("\n"))}},"Remove Extra Spaces"),l.a.createElement("button",{type:"button",className:"btn btn-secondary mx-1 my-1",onClick:function(){t("Text cleared")&&d("")}},"Clear Text"),l.a.createElement("div",{className:"my-3"},l.a.createElement("hr",null),l.a.createElement("h5",null,"Your text Summary"),l.a.createElement("p",null,l.a.createElement("b",null,o.split(/\s+/).filter(function(e){return 0!==e.length}).length)," ",l.a.createElement("i",null,"words"),", ",l.a.createElement("b",null,o.length)," ",l.a.createElement("i",null,"chars"),", ",l.a.createElement("b",null,null===o.match(/[a,e,i,o,u]/g)?0:o.match(/[a,e,i,o,u]/g).length)," ",l.a.createElement("i",null,"vowels")),l.a.createElement("p",null,l.a.createElement("b",null,o.replaceAll("\n","").replaceAll(" ","").length/625)," ",l.a.createElement("i",null,"minutes"),", ",l.a.createElement("b",null,60*o.replaceAll("\n","").replaceAll(" ","").length/750)," ",l.a.createElement("i",null,"seconds")," to read"),l.a.createElement("hr",null),l.a.createElement("h5",null,"Preview"),l.a.createElement("p",{style:{textAlign:"justify"}},""===o?l.a.createElement("i",null,"Nothing to preview"):o))))}function u(e){return l.a.createElement("div",{style:{height:"30px"}},e.alert&&l.a.createElement("div",{style:{height:"40px",padding:"7px 17px"},className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," : "),e.alert.msg))}d.defaultProps={title:"DefaultTitle",aboutText:"DefaultAbout"};var i=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),i=Object(r.a)(o,2),s=i[0],g=i[1];return window.onload=function(){document.getElementById("lightMode").checked=!0},l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{title:"TextUtils",mode:a,toggleGreenMode:function(){document.getElementById("greenMode").checked=!0,document.getElementById("lightMode").checked=!1,document.getElementById("blueMode").checked=!1,document.getElementById("redMode").checked=!1,c("dark"),document.body.style.backgroundColor="#18402d",document.body.style.color="white"},toggleRedMode:function(){document.getElementById("greenMode").checked=!1,document.getElementById("lightMode").checked=!1,document.getElementById("blueMode").checked=!1,document.getElementById("redMode").checked=!0,c("dark"),document.body.style.backgroundColor="#761010",document.body.style.color="white"},toggleBlueMode:function(){document.getElementById("blueMode").checked=!0,document.getElementById("lightMode").checked=!1,document.getElementById("greenMode").checked=!1,document.getElementById("redMode").checked=!1,c("dark"),document.body.style.backgroundColor="#032352",document.body.style.color="white"},toggleLightMode:function(){document.getElementById("lightMode").checked=!0,document.getElementById("blueMode").checked=!1,document.getElementById("greenMode").checked=!1,document.getElementById("redMode").checked=!1,c("light"),document.body.style.backgroundColor="white",document.body.style.color="black"}}),l.a.createElement(u,{alert:s}),l.a.createElement(m,{heading:"Enter text to analyze",mode:a,alertShow:function(e,t){g({msg:e,type:t}),setTimeout(function(){g(null)},1800)}}))},s=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),s()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.9c5ff33c.chunk.js.map