(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21,479,486,762],{LP5e:function(e,a,t){"use strict";t.r(a);t("+L6B");var n=t("2/Rp"),c=(t("14J3"),t("BMrR")),r=(t("T2oS"),t("W9HT")),i=(t("jCWc"),t("kPKH")),l=(t("y8nQ"),t("Vl3Y")),s=(t("5NDa"),t("5rEg")),o=t("k1fw"),m=(t("miYZ"),t("tsqr")),u=t("WmNS"),f=t.n(u),d=t("9og8"),p=t("tJVT"),g=(t("Znn+"),t("ZTPi")),h=t("R+Pm"),b=t("cJ7L"),E=t("MGYb"),v=t("cGnJ"),y=t("q1tI"),O=t.n(y),j=t("9kvl"),_=t("cI/L"),w=t.n(_),z=t("anxO"),x=t("+n12"),I=g["a"].TabPane,L=Object(h["a"])({scriptUrl:"//at.alicdn.com/t/font_1873282_onfaq4da0nb.js"}),k=function(e){var a=e.userLogin,t=void 0===a?{}:a,u=(e.submitting,Object(y["useState"])(!1)),h=Object(p["a"])(u,2),j=h[0],_=h[1],k=(t.status,t.type,t.errors),V=Object(y["useState"])(!0),N=Object(p["a"])(V,2),S=(N[0],N[1],Object(y["useState"])("key")),T=Object(p["a"])(S,2),C=T[0],M=T[1],P=Object(y["useState"])(null),q=Object(p["a"])(P,2),B=q[0],J=q[1],R=Object(y["useState"])(!0),H=Object(p["a"])(R,2),A=H[0],F=H[1],G=Object(y["useRef"])(),Y=Object(y["useRef"])();Object(y["useCallback"])(function(){var a=Object(d["a"])(f.a.mark((function a(t){var n;return f.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=e.onGetEmail,n(t),_(!0);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),[]);Object(y["useEffect"])((function(){Z()}),[k]);var Z=function(){Object(z["c"])().then((function(e){J(e&&e.image_url),M(e&&e.key),F(!1)})).catch((function(e){}))},W=function(e){Object(z["d"])(e).then((function(e){m["b"].success("Send successfully! Please check.")})).catch((function(e){Object(x["m"])(e,Y)}))},K=function(a){var t=e.dispatch,n=t({type:"login/login",payload:Object(o["a"])(Object(o["a"])({},a),{},{type:"account",key:C})});n.then((function(e){e.data&&e.data instanceof Object&&"fields_errors"in e.data&&Object(x["m"])(e,G)}))},D=function(a){var t=e.dispatch,n=t({type:"login/login",payload:Object(o["a"])(Object(o["a"])({},a),{},{type:"email",key:C})});n.then((function(e){e.data&&e.data instanceof Object&&"fields_errors"in e.data&&Object(x["m"])(e,Y)}))};return O.a.createElement("div",{className:w.a.main},O.a.createElement(g["a"],{defaultActiveKey:"account"},O.a.createElement(I,{key:"account",tab:"Account Login"},O.a.createElement(l["a"],{ref:G,onFinish:K},O.a.createElement(l["a"].Item,{style:{marginBottom:24},name:"userName",placeholder:"username",rules:[{required:!0,message:"Please enter username!"}]},O.a.createElement(s["a"],{size:"large",placeholder:"Enter username",prefix:O.a.createElement(b["default"],{style:{color:"#1890ff"},className:w.a.prefixIcon})})),O.a.createElement(l["a"].Item,{style:{marginBottom:24},name:"password",placeholder:"password",rules:[{required:!0,message:"Please enter password\uff01"}]},O.a.createElement(s["a"].Password,{size:"large",placeholder:"Enter password",prefix:O.a.createElement(E["default"],{className:w.a.prefixIcon})})),O.a.createElement(c["a"],{gutter:8},O.a.createElement(i["a"],{span:16},O.a.createElement(l["a"].Item,{name:"pic_captcha",placeholder:"verification code",rules:[{required:!0,message:"Please enter verification code\uff01"}]},O.a.createElement(s["a"],{size:"large",placeholder:"Enter verification code",prefix:O.a.createElement(L,{type:"iconyanzhengma",className:w.a.prefixIcon})}))),O.a.createElement(i["a"],{span:8},O.a.createElement(r["a"],{spinning:A},O.a.createElement("img",{alt:"Captcha",style:{width:"100%",height:35,marginTop:2.5,marginLeft:10},src:B,onClick:Z})))),O.a.createElement(l["a"].Item,null,O.a.createElement(n["a"],{size:"large",type:"primary",className:w.a.submit,htmlType:"submit"},"Login")))),O.a.createElement(I,{key:"email",tab:"Email Login"},O.a.createElement(l["a"],{ref:Y,onFinish:D},O.a.createElement(l["a"].Item,{name:"email",placeholder:"email",rules:[{required:!0,message:"Please enter email address\uff01"},{pattern:/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/,message:"Wrong email address form\uff01"}]},O.a.createElement(s["a"],{size:"large",placeholder:"Enter email address",prefix:O.a.createElement(v["default"],{className:w.a.prefixIcon})})),O.a.createElement(c["a"],{gutter:8},O.a.createElement(i["a"],{span:16},O.a.createElement(l["a"].Item,{name:"captcha",placeholder:"verification code",countDown:120,getCaptchaButtonText:"",getCaptchaSecondText:"\u79d2",rules:[{required:!0,message:"Please enter verification code\uff01"}]},O.a.createElement(s["a"],{size:"large",placeholder:"Enter verification code",prefix:O.a.createElement(L,{type:"iconyanzhengma",className:w.a.prefixIcon})}))),O.a.createElement(i["a"],{span:8},O.a.createElement(n["a"],{disabled:j,className:w.a.getCaptcha,size:"large",onClick:function(){var e=Y.current.getFieldValue("email");if(e){var a=Y.current.getFieldError("email");0!==a.length?m["b"].error("Wrong email address! Enter again."):W(e)}else m["b"].error("Please enter email address first!")}},j?"".concat(count," \u79d2"):"Send email"))),O.a.createElement(l["a"].Item,null,O.a.createElement(n["a"],{size:"large",type:"primary",className:w.a.submit,htmlType:"submit"},"Login"))))))};a["default"]=Object(j["b"])((function(e){var a=e.login,t=e.loading;return{userLogin:a,submitting:t.effects["login/login"],codeLoading:t.effects["login/getcode"]}}))(k)},MGYb:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),c={icon:function(e,a){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304z",fill:e}},{tag:"path",attrs:{d:"M232 840h560V536H232v304zm280-226a48.01 48.01 0 0128 87v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 0128-87z",fill:a}},{tag:"path",attrs:{d:"M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z",fill:e}}]}},name:"lock",theme:"twotone"},r=c,i=t("6VBw"),l=function(e,a){return n["createElement"](i["a"],Object.assign({},e,{ref:a,icon:r}))};l.displayName="LockTwoTone";a["default"]=n["forwardRef"](l)},cGnJ:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),c={icon:function(e,a){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M477.5 536.3L135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 01-68.7 0z",fill:a}},{tag:"path",attrs:{d:"M876.3 198.8l39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z",fill:a}},{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z",fill:e}}]}},name:"mail",theme:"twotone"},r=c,i=t("6VBw"),l=function(e,a){return n["createElement"](i["a"],Object.assign({},e,{ref:a,icon:r}))};l.displayName="MailTwoTone";a["default"]=n["forwardRef"](l)},"cI/L":function(e,a,t){e.exports={main:"main___59Cjf",icon:"icon___2lY_p",other:"other___1X1EK",register:"register___3JzFy",getCaptcha:"getCaptcha___3FRz_",prefixIcon:"prefixIcon___1AOG1",submit:"submit___eY0XO"}},cJ7L:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},r=c,i=t("6VBw"),l=function(e,a){return n["createElement"](i["a"],Object.assign({},e,{ref:a,icon:r}))};l.displayName="UserOutlined";a["default"]=n["forwardRef"](l)}}]);