(this["webpackJsonpecommerce-logistic"]=this["webpackJsonpecommerce-logistic"]||[]).push([[18],{313:function(e,t,n){"use strict";var a=n(75),i=n.n(a),r=("production"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STAGE?{apiUrl:"https://ysosy-backend.herokuapp.com/api/"}:(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STAGE,{apiUrl:"https://ysosy-backend.herokuapp.com/api/",aadharTestRequest:"https://test.zoop.one/in/identity/okyc/otp/request",aadharLiveRequest:"https://live.zoop.one/in/identity/okyc/otp/request",aadharOtpVerifyRequest:"https://test.zoop.one/in/identity/okyc/otp/verify"})).apiUrl,o={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},c={register:function(e){return i.a.post("".concat(r,"vendorLogReg/signup"),e)},vendorLogin:function(e){return i.a.post("".concat(r,"vendorLogReg/login"),e)},vendorForgotPassword:function(e){return i.a.post("".concat(r,"vendorLogReg/forgot-password"),e)},setNewPassword:function(e){return i.a.post("".concat(r,"vendorLogReg/set-password"),e)},getVendorProfileDetail:function(){return i.a.get("".concat(r,"vendorLogReg/loggedVendor"))},vendorProfileUpdate:function(e){return i.a.put("".concat(r,"vendors/editVendorProfile"),e)},getAllShippingOrderData:function(){return i.a.get("".concat(r,"shippingOrders/all"))},getshippingOrderViewDetails:function(e){return i.a.get("".concat(r,"shippingOrders/getShippingOrderById/").concat(e))},checkPinCodes:function(e){return i.a.get("https://api.postalpincode.in/pincode/".concat(e),{headers:o})},createShippingOrder:function(e){return i.a.post("".concat(r,"shippingOrders/new"),e)},cloneShippingOrder:function(e){return i.a.put("".concat(r,"shippingOrders/cloneShippingOrder/").concat(e))},cancelShippingOrder:function(e){return i.a.put("".concat(r,"shippingOrders/cancelShippingOrder/").concat(e))},updateShippingOrder:function(e,t){return i.a.put("".concat(r,"shippingOrders/editShippingOrder/").concat(e),t)}};t.a=c},332:function(e,t,n){"use strict";var a=n(88);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(89)),r=n(1),o=(0,i.default)((0,r.jsx)("path",{d:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"}),"DownloadForOffline");t.default=o},352:function(e,t,n){"use strict";var a=n(4),i=n(6),r=n(2),o=n(0),c=n(7),l=n(86),d=n(85),s=n(8),u=n(5),b=n(9),j=n(63),p=n(74);function h(e){return Object(j.a)("MuiButtonGroup",e)}var O=Object(p.a)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),g=n(126),v=n(1),x=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],m=Object(u.a)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[Object(a.a)({},"& .".concat(O.grouped),t.grouped),Object(a.a)({},"& .".concat(O.grouped),t["grouped".concat(Object(s.a)(n.orientation))]),Object(a.a)({},"& .".concat(O.grouped),t["grouped".concat(Object(s.a)(n.variant))]),Object(a.a)({},"& .".concat(O.grouped),t["grouped".concat(Object(s.a)(n.variant)).concat(Object(s.a)(n.orientation))]),Object(a.a)({},"& .".concat(O.grouped),t["grouped".concat(Object(s.a)(n.variant)).concat(Object(s.a)(n.color))]),t.root,t[n.variant],!0===n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,"vertical"===n.orientation&&t.vertical]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({display:"inline-flex",borderRadius:t.shape.borderRadius},"contained"===n.variant&&{boxShadow:t.shadows[2]},n.disableElevation&&{boxShadow:"none"},n.fullWidth&&{width:"100%"},"vertical"===n.orientation&&{flexDirection:"column"},Object(a.a)({},"& .".concat(O.grouped),Object(r.a)({minWidth:40,"&:not(:first-of-type)":Object(r.a)({},"horizontal"===n.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===n.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===n.variant&&"horizontal"===n.orientation&&{marginLeft:-1},"outlined"===n.variant&&"vertical"===n.orientation&&{marginTop:-1}),"&:not(:last-of-type)":Object(r.a)({},"horizontal"===n.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===n.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===n.variant&&"horizontal"===n.orientation&&{borderRight:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===n.variant&&"vertical"===n.orientation&&{borderBottom:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===n.variant&&"inherit"!==n.color&&{borderColor:Object(d.a)(t.palette[n.color].main,.5)},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"transparent"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"transparent"},"contained"===n.variant&&"horizontal"===n.orientation&&Object(a.a)({borderRight:"1px solid ".concat(t.palette.grey[400])},"&.".concat(O.disabled),{borderRight:"1px solid ".concat(t.palette.action.disabled)}),"contained"===n.variant&&"vertical"===n.orientation&&Object(a.a)({borderBottom:"1px solid ".concat(t.palette.grey[400])},"&.".concat(O.disabled),{borderBottom:"1px solid ".concat(t.palette.action.disabled)}),"contained"===n.variant&&"inherit"!==n.color&&{borderColor:t.palette[n.color].dark},{"&:hover":Object(r.a)({},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"currentColor"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":Object(r.a)({},"contained"===n.variant&&{boxShadow:"none"})},"contained"===n.variant&&{boxShadow:"none"})))})),f=o.forwardRef((function(e,t){var n=Object(b.a)({props:e,name:"MuiButtonGroup"}),a=n.children,d=n.className,u=n.color,j=void 0===u?"primary":u,p=n.component,O=void 0===p?"div":p,f=n.disabled,y=void 0!==f&&f,A=n.disableElevation,C=void 0!==A&&A,S=n.disableFocusRipple,_=void 0!==S&&S,R=n.disableRipple,P=void 0!==R&&R,k=n.fullWidth,w=void 0!==k&&k,D=n.orientation,T=void 0===D?"horizontal":D,E=n.size,z=void 0===E?"medium":E,N=n.variant,W=void 0===N?"outlined":N,B=Object(i.a)(n,x),H=Object(r.a)({},n,{color:j,component:O,disabled:y,disableElevation:C,disableFocusRipple:_,disableRipple:P,fullWidth:w,orientation:T,size:z,variant:W}),I=function(e){var t=e.classes,n=e.color,a=e.disabled,i=e.disableElevation,r=e.fullWidth,o=e.orientation,c=e.variant,d={root:["root",c,"vertical"===o&&"vertical",r&&"fullWidth",i&&"disableElevation"],grouped:["grouped","grouped".concat(Object(s.a)(o)),"grouped".concat(Object(s.a)(c)),"grouped".concat(Object(s.a)(c)).concat(Object(s.a)(o)),"grouped".concat(Object(s.a)(c)).concat(Object(s.a)(n)),a&&"disabled"]};return Object(l.a)(d,h,t)}(H),L=o.useMemo((function(){return{className:I.grouped,color:j,disabled:y,disableElevation:C,disableFocusRipple:_,disableRipple:P,fullWidth:w,size:z,variant:W}}),[j,y,C,_,P,w,z,W,I.grouped]);return Object(v.jsx)(m,Object(r.a)({as:O,role:"group",className:Object(c.a)(I.root,d),ref:t,ownerState:H},B,{children:Object(v.jsx)(g.a.Provider,{value:L,children:a})}))}));t.a=f},436:function(e,t,n){"use strict";var a=n(88);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(89)),r=n(1),o=(0,i.default)((0,r.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile");t.default=o},568:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(11),r=n(91),o=n(13),c=n(64),l=n.n(c),d=n(0),s=n(18),u=n(90),b=n(22),j=n(290),p=n(296),h=n(272),O=n(283),g=n(297),v=n(374),x=n(352),m=n(545),f=n(546),y=n(547),A=n(548),C=n(549),S=n(373),_=n(550),R=n(284),P=n(87),k=n(309),w=n(287),D=n(280),T=n(281),E=n(293),z=n(313),N=n(320),W=n.n(N),B=n(123),H=n(579),I=n(581),L=n(580),F=n(559),V=n(332),M=n.n(V),G=n(326),U=n.n(G),q=n(325),K=n.n(q),Y=n(564),X=n(565),J=n(573),Q=n(551),Z=n(544),$=n(436),ee=n.n($),te=n(1);t.default=function(){var e=Object(b.a)(),t=Object(s.g)(),n=Object(d.useState)([]),c=Object(o.a)(n,2),N=c[0],V=c[1],G=Object(d.useState)([]),q=Object(o.a)(G,2),$=q[0],ne=q[1],ae=Object(d.useState)([]),ie=Object(o.a)(ae,2),re=ie[0],oe=ie[1],ce=Object(d.useState)([]),le=Object(o.a)(ce,2),de=le[0],se=le[1],ue=Object(d.useState)([]),be=Object(o.a)(ue,2),je=be[0],pe=be[1],he=Object(d.useState)([]),Oe=Object(o.a)(he,2),ge=(Oe[0],Oe[1]),ve=Object(d.useState)([null,null]),xe=Object(o.a)(ve,2),me=xe[0],fe=xe[1],ye=Object(d.useState)(),Ae=Object(o.a)(ye,2),Ce=Ae[0],Se=Ae[1],_e=Object(d.useState)(),Re=Object(o.a)(_e,2),Pe=Re[0],ke=Re[1],we=Object(d.useState)(),De=Object(o.a)(we,2),Te=De[0],Ee=De[1],ze=Object(d.useState)(),Ne=Object(o.a)(ze,2),We=Ne[0],Be=Ne[1],He=Object(d.useState)("All"),Ie=Object(o.a)(He,2),Le=Ie[0],Fe=Ie[1],Ve=Object(d.useState)("All"),Me=Object(o.a)(Ve,2),Ge=Me[0],Ue=Me[1],qe=Object(d.useState)("All"),Ke=Object(o.a)(qe,2),Ye=Ke[0],Xe=Ke[1],Je=Object(d.useState)("All"),Qe=Object(o.a)(Je,2),Ze=Qe[0],$e=Qe[1],et=Object(d.useState)("All"),tt=Object(o.a)(et,2),nt=tt[0],at=tt[1],it=Object(d.useState)(),rt=Object(o.a)(it,2),ot=rt[0],ct=rt[1],lt=Object(d.useState)(!1),dt=Object(o.a)(lt,2),st=dt[0],ut=dt[1],bt=Object(d.useState)(!1),jt=Object(o.a)(bt,2),pt=jt[0],ht=jt[1];Object(h.a)(e.breakpoints.down("md"));Object(d.useEffect)((function(){Ot()}),[]);var Ot=function(){var e=Object(r.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.getAllShippingOrderData();case 3:t=e.sent,n=[],a=[],oe(t.data),t.data.forEach((function(e){var t,i,r,o,c,l,d=[],s=0;e.orderProducts.forEach((function(e){d.push(e.product),a.push(e.quantity*Number(e.amount)),s=a.reduce((function(e,t){return e+t}),0)})),n.push({channel:null!==e&&void 0!==e&&e.channel?null===e||void 0===e?void 0:e.channel:"custom",orderId:null===e||void 0===e?void 0:e.orderId,date:W()(null===e||void 0===e?void 0:e.createdAt).format("MMM D, YYYY"),product:d.join(", "),payment:s,method:null===e||void 0===e?void 0:e.orderType,customer:null!==e&&void 0!==e&&e.shippingAddress?(null===e||void 0===e||null===(t=e.shippingAddress)||void 0===t?void 0:t.firstName)+(null===e||void 0===e||null===(i=e.shippingAddress)||void 0===i?void 0:i.lastName):(null===e||void 0===e||null===(r=e.shippingAddress)||void 0===r?void 0:r.firstName)+(null===e||void 0===e||null===(o=e.shippingAddress)||void 0===o?void 0:o.lastName),zipcode:null!==e&&void 0!==e&&e.shippingAddress?null===e||void 0===e||null===(c=e.shippingAddress)||void 0===c?void 0:c.pincode:null===e||void 0===e||null===(l=e.shippingAddress)||void 0===l?void 0:l.pincode,weight:null===e||void 0===e?void 0:e.weightFd,ivrStatus:null===e||void 0===e?void 0:e.ivr_status,tags:null===e||void 0===e?void 0:e.tags,status:null===e||void 0===e?void 0:e.status,_id:null===e||void 0===e?void 0:e._id})})),V(n),ne(n),ge(n),gt(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0),Object(B.notifier)({type:"error",message:e.t0.error,autoDismissTimeout:5e3});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),gt=function(e){var t=[];t.all=e.length,t.booked=e.filter((function(e){return"Booked"===e.status})).length,t.ship=e.filter((function(e){return"Ship"===e.status})).length,t.pendingpickup=e.filter((function(e){return"pendingpickup"===e.status})).length,t.intransit=e.filter((function(e){return"intransit"===e.status})).length,t.outfordelivery=e.filter((function(e){return"outfordelivery"===e.status})).length,t.Delivered=e.filter((function(e){return"Delivered"===e.status})).length,t.Cancelled=e.filter((function(e){return"Cancelled"===e.status})).length,se(t)},vt=function(e){"all"===e?(V($),ge($)):(V($.filter((function(t){return t.status===e}))),ge($.filter((function(t){return t.status===e}))))},xt=Object(d.useState)(!1),mt=Object(o.a)(xt,2),ft=mt[0],yt=mt[1],At=Object(d.useState)("paper"),Ct=Object(o.a)(At,2),St=Ct[0],_t=Ct[1],Rt=Object(d.useState)(""),Pt=Object(o.a)(Rt,2),kt=Pt[0],wt=Pt[1],Dt=[{id:"1",name:"Nayan Patil",isDefault:!0},{id:"2",name:"Nitin Patil",isDefault:!1}],Tt=[{id:"1",name:"Nayan Patil",isDefault:!0},{id:"2",name:"Nitin Patil",isDefault:!1}],Et=Object(d.useState)({orderId:"",wareHousePickupAddress:"",rtoWareHouseAddress:"",essentialItem:!1,dangerousGood:!1,courierPartner:""}),zt=Object(o.a)(Et,2),Nt=zt[0],Wt=zt[1],Bt=Nt.wareHousePickupAddress,Ht=Nt.rtoWareHouseAddress,It=Nt.essentialItem,Lt=Nt.dangerousGood,Ft=Nt.courierPartner,Vt=function(){var e=Dt.filter((function(e){return!0===e.isDefault})),t=Tt.filter((function(e){return!0===e.isDefault}));Wt(Object(i.a)(Object(i.a)({},Nt),{},{wareHousePickupAddress:e[0].id,rtoWareHouseAddress:t[0].id}))},Mt=[{id:"1",name:"DTDC Air (\u20b9117)"},{id:"2",name:"DTDC Premium (\u20b9108.2)"},{id:"3",name:"Xpressbees Surface (\u20b9108.74)"},{id:"4",name:"Xpressbees 1 K.G (\u20b9131)"}],Gt=function(e){e.target.checked&&"essentialItem"===e.target.name&&Wt(Object(i.a)(Object(i.a)({},Nt),{},Object(a.a)({},e.target.name,!0))),e.target.checked&&"dangerousGood"===e.target.name&&Wt(Object(i.a)(Object(i.a)({},Nt),{},Object(a.a)({},e.target.name,!0)))};return Object(te.jsxs)(u.a,{title:"Exception Lists",children:[Object(te.jsxs)(j.a,{sx:{width:"100%"},children:[Object(te.jsxs)("div",{style:{marginBottom:16,float:"right"},children:[Object(te.jsxs)(p.a,{variant:"outlined",onClick:function(){console.log("exportOrder")},children:[Object(te.jsx)(M.a,{})," Export"]}),Object(te.jsxs)(p.a,{variant:"outlined",onClick:function(){ut(!0)},children:[Object(te.jsx)(ee.a,{})," CSV Update"]}),Object(te.jsx)(p.a,{variant:"outlined",onClick:function(){ht(!pt)},children:pt?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(K.a,{})," Close"]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(U.a,{})," Filter"]})})]}),Object(te.jsx)("br",{}),Object(te.jsx)("br",{}),pt?Object(te.jsxs)(O.a,{container:!0,spacing:2,children:[Object(te.jsx)(O.a,{item:!0,xs:4,children:Object(te.jsx)(Y.a,{dateAdapter:J.a,children:Object(te.jsx)(j.a,{children:Object(te.jsx)(X.a,{startText:"From Date",endText:"End Date",value:me,onChange:function(e){fe(e)},renderInput:function(e,t){return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(g.a,Object(i.a)(Object(i.a)({},e),{},{size:"small"})),Object(te.jsx)(j.a,{sx:{mx:1},children:"to"}),Object(te.jsx)(g.a,Object(i.a)(Object(i.a)({},t),{},{size:"small"}))]})}})})})}),Object(te.jsx)(O.a,{item:!0,xs:2,children:Object(te.jsx)(g.a,{id:"outlined-orderid-basic",size:"small",name:"orderId",value:Ce,onChange:function(e){return Se(e.target.value)},fullWidth:!0,label:"Order Id",variant:"outlined"})}),Object(te.jsx)(O.a,{item:!0,xs:2,children:Object(te.jsx)(g.a,{id:"outlined-orderid-basic",size:"small",name:"awbNo",value:Te,onChange:function(e){return Ee(e.target.value)},fullWidth:!0,label:"awb No",variant:"outlined"})}),Object(te.jsx)(O.a,{item:!0,xs:2,children:Object(te.jsxs)(g.a,{id:"outlined-select-ordertype",select:!0,label:"Method",name:"method",value:Ge,onChange:function(e){return Ue(e.target.value)},fullWidth:!0,size:"small",variant:"outlined",children:[Object(te.jsx)(v.a,{value:"All",children:"All"}),Object(te.jsx)(v.a,{value:"cashOnDelivery",children:"Cash on Delivery"}),Object(te.jsx)(v.a,{value:"Prapaid",children:"Prepaid"})]})}),Object(te.jsx)(O.a,{item:!0,xs:2,children:Object(te.jsxs)(g.a,{id:"outlined-select-ordertype",select:!0,label:"Courier",name:"courier",value:Ze,onChange:function(e){return $e(e.target.value)},fullWidth:!0,size:"small",variant:"outlined",children:[Object(te.jsx)(v.a,{value:"All",children:"All"}),Object(te.jsx)(v.a,{value:"cashOnDelivery",children:"Cash on Delivery"}),Object(te.jsx)(v.a,{value:"Prapaid",children:"Prepaid"})]})}),Object(te.jsx)(O.a,{item:!0,xs:2,children:Object(te.jsxs)(g.a,{id:"outlined-select-ordertype",select:!0,label:"Attempts",name:"attempts",value:nt,onChange:function(e){return at(e.target.value)},fullWidth:!0,size:"small",variant:"outlined",children:[Object(te.jsx)(v.a,{value:"All",children:"All"}),Object(te.jsx)(v.a,{value:"cashOnDelivery",children:"Cash on Delivery"}),Object(te.jsx)(v.a,{value:"Prapaid",children:"Prepaid"})]})}),Object(te.jsx)(O.a,{item:!0,xs:2,children:Object(te.jsxs)(g.a,{id:"outlined-select-ordertype",select:!0,label:"Channel",name:"channel",value:Le,onChange:function(e){return Fe(e.target.value)},fullWidth:!0,size:"small",variant:"outlined",children:[Object(te.jsx)(v.a,{value:"All",children:"Select Channel"}),Object(te.jsx)(v.a,{value:"cashOnDelivery",children:"Cash on Delivery"}),Object(te.jsx)(v.a,{value:"Prapaid",children:"Prepaid"})]})}),Object(te.jsx)(O.a,{item:!0,xs:2,children:Object(te.jsx)(g.a,{id:"outlined-orderid-basic",size:"small",name:"tagName",value:ot,onChange:function(e){return ct(e.target.value)},fullWidth:!0,label:"TagName",variant:"outlined"})}),Object(te.jsxs)(O.a,{item:!0,xs:2,children:[Object(te.jsx)(p.a,{variant:"contained",color:"success",onClick:function(){console.log("Hello1",me,Ce,Pe,Te,We,Le,Ye,Ze,Ge,nt,ot)},size:"small",style:{marginRight:"5px"},children:"Apply"}),Object(te.jsx)(p.a,{variant:"contained",color:"error",onClick:function(){console.log("clear"),fe(""),Se(""),ke(""),Ee(""),Be(""),Fe("All"),Xe("All"),$e("All"),Ue("All"),at("All"),ct("")},size:"small",children:"Clear"})]})]}):"",Object(te.jsx)("br",{}),Object(te.jsx)("hr",{}),Object(te.jsx)("br",{}),Object(te.jsx)("div",{style:{marginBottom:16},children:Object(te.jsxs)(x.a,{variant:"outlined","aria-label":"outlined primary button group",children:[Object(te.jsxs)(p.a,{onClick:function(){return vt("all")},children:["Action Required(",de.all,")"]}),Object(te.jsxs)(p.a,{onClick:function(){return vt("Booked")},children:["Action Requested (",de.booked,")"]}),Object(te.jsxs)(p.a,{onClick:function(){return vt("pendingpickup")},children:["Delivered(",de.pendingpickup,")"]}),Object(te.jsxs)(p.a,{onClick:function(){return vt("intransit")},children:["RTO(",de.intransit,")"]})]})}),Object(te.jsx)(m.a,{children:Object(te.jsxs)(f.a,{"aria-label":"customized table",children:[Object(te.jsx)(y.a,{children:Object(te.jsxs)(A.a,{children:[Object(te.jsx)(C.a,{align:"center",children:Object(te.jsx)(S.a,{indeterminate:je.length>0&&je.length<N.length,checked:N.length>0&&je.length===N.length,onChange:function(e){if(e.target.checked){var t=N.map((function(e){return e._id}));pe(t)}else pe([])},inputProps:{"aria-label":"select all desserts"}})}),Object(te.jsx)(C.a,{align:"center",children:"Channel"}),Object(te.jsx)(C.a,{align:"center",children:"NDR Date"}),Object(te.jsx)(C.a,{align:"center",children:"Order"}),Object(te.jsx)(C.a,{align:"center",children:"Product"}),Object(te.jsx)(C.a,{align:"center",children:"Payment"}),Object(te.jsx)(C.a,{align:"center",children:"Customer"}),Object(te.jsx)(C.a,{align:"center",children:"Carrier"}),Object(te.jsx)(C.a,{align:"center",children:"Status"}),Object(te.jsx)(C.a,{align:"center",children:"Tags"}),Object(te.jsx)(C.a,{align:"center",children:"Exception Info"}),Object(te.jsx)(C.a,{align:"center",children:"Action"})]})}),Object(te.jsx)(_.a,{children:N.map((function(e,n){var a,i=(a=e._id,-1!==je.indexOf(a)),r="enhanced-table-checkbox-".concat(n);return Object(te.jsxs)(A.a,{onClick:function(){return function(e){var t=je.indexOf(e),n=[];-1===t?n=n.concat(je,e):0===t?n=n.concat(je.slice(1)):t===je.length-1?n=n.concat(je.slice(0,-1)):t>0&&(n=n.concat(je.slice(0,t),je.slice(t+1))),pe(n)}(e._id)},role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[Object(te.jsx)(C.a,{align:"center",children:"Cancelled"!==e.status&&"Booked"!==e.status&&Object(te.jsx)(S.a,{checked:i,inputProps:{"aria-labelledby":r}})}),Object(te.jsx)(C.a,{component:"th",scope:"row",align:"center",children:e.channel}),Object(te.jsx)(C.a,{align:"center",children:e.orderId?Object(te.jsx)(p.a,{onClick:function(){return function(e){t("/order-details/".concat(e))}(e._id)},children:e.orderId}):"-"}),Object(te.jsx)(C.a,{align:"center",children:e.date}),Object(te.jsx)(C.a,{align:"center",children:e.product?e.product:"-"}),Object(te.jsx)(C.a,{align:"center",children:e.payment}),Object(te.jsx)(C.a,{align:"center",children:e.method}),Object(te.jsx)(C.a,{align:"center",children:e.customer}),Object(te.jsx)(C.a,{align:"center",children:e.zipcode}),Object(te.jsx)(C.a,{align:"center",children:e.weight}),Object(te.jsx)(C.a,{align:"center",children:e.weight}),Object(te.jsx)(C.a,{align:"center",children:"Cancelled"===e.status?Object(te.jsx)(R.a,{label:e.status,color:"primary",variant:"outlined"}):Object(te.jsx)(R.a,{label:e.status,color:"primary",variant:"outlined",onClick:function(){return function(e,t){wt(t),yt(!0),_t("paper"),Vt()}(0,e._id)}})})]},e._id)}))}),Object(te.jsx)(Q.a,{children:Object(te.jsx)(A.a,{children:Object(te.jsx)(Z.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:12,count:50,rowsPerPage:10,page:0,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0}})})})]})})]}),Object(te.jsx)(j.a,{children:Object(te.jsxs)(H.a,{open:ft,onClose:function(){return yt(!1)},scroll:St,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[Object(te.jsx)(F.a,{id:"scroll-dialog-title",style:{fontSize:"1.5em"},children:"Ship Your Package Now"}),Object(te.jsxs)(L.a,{dividers:"paper"===St,children:[Object(te.jsxs)(O.a,{style:{display:"flex",marginTop:"5%",marginBottom:"5%",width:500},children:[Object(te.jsxs)(O.a,{item:!0,xs:6,style:{marginRight:20},children:[Object(te.jsx)(P.a,{variant:"h5",children:"Pickup Warehouse"}),Object(te.jsx)(g.a,{id:"outlined-select-ordertype",select:!0,label:"Pickup Warehouse Address",name:"wareHousePickupAddress",value:Bt,onChange:function(e){return Wt(Object(i.a)(Object(i.a)({},Nt),{},Object(a.a)({},e.target.name,e.target.value)))},fullWidth:!0,size:"small",margin:"normal",variant:"outlined",children:null===Dt||void 0===Dt?void 0:Dt.map((function(e,t){return Object(te.jsxs)(v.a,{value:e.id,children:[e.name," ",!0===e.isDefault?"(Default)":""]},t+1)}))}),Object(te.jsx)(k.a,{control:Object(te.jsx)(S.a,{name:"essentialItem",checked:It,onChange:function(e){return Gt(e)}}),label:"Is essential item ?"})]}),Object(te.jsxs)(O.a,{item:!0,xs:6,children:[Object(te.jsx)(P.a,{variant:"h5",children:"RTO Warehouse"}),Object(te.jsx)(g.a,{id:"outlined-select-ordertype",select:!0,label:"RTO Warehouse",name:"rtoWareHouseAddress",value:Ht,onChange:function(e){return Wt(Object(i.a)(Object(i.a)({},Nt),{},Object(a.a)({},e.target.name,e.target.value)))},fullWidth:!0,size:"small",margin:"normal",variant:"outlined",children:null===Tt||void 0===Tt?void 0:Tt.map((function(e,t){return Object(te.jsxs)(v.a,{value:e.id,children:[e.name," ",!0===e.isDefault?"(Default)":""]},t+1)}))}),Object(te.jsx)(k.a,{control:Object(te.jsx)(S.a,{name:"dangerousGood",checked:Lt,onChange:function(e){return Gt(e)}}),label:"Is dangerous good ?"})]})]}),Object(te.jsx)("hr",{}),Object(te.jsx)(O.a,{style:{display:"flex",marginTop:"5%",marginBottom:"5%",width:500},children:Object(te.jsx)(w.a,{row:!0,"aria-label":"courier-partner",value:Ft,name:"courierPartner",onChange:function(e){return Wt(Object(i.a)(Object(i.a)({},Nt),{},Object(a.a)({},e.target.name,e.target.value)))},children:null===Mt||void 0===Mt?void 0:Mt.map((function(e,t){return Object(te.jsx)(O.a,{item:!0,xs:6,children:Object(te.jsx)(k.a,{value:e.id,control:Object(te.jsx)(D.a,{}),label:e.name})},t+1)}))})})]}),Object(te.jsxs)(I.a,{children:[Object(te.jsx)(p.a,{variant:"contained",color:"error",onClick:function(){return yt(!1)},children:"Close"}),Object(te.jsx)(p.a,{variant:"contained",disabled:!Ft,color:"primary",onClick:function(){Nt.orderId=kt;var e=0,t=[];console.log(Nt.courierPartner,"shipProcessFormdddd");var n=re.filter((function(e){return e._id===kt}));n[0].orderProducts.forEach((function(n){t.push(n.quantity*Number(n.amount)),e=t.reduce((function(e,t){return e+t}),0)}));var a={consignments:[{customer_code:"GL112",reference_number:n[0].orderId,service_type_id:"GROUND EXPRESS",load_type:"NON-DOCUMENT",description:"sample",cod_favor_of:"In Favour of",cod_collection_mode:"cash",consignment_type:"Forward",dimension_unit:"cm",length:n[0].dimension1,width:n[0].dimension2,height:n[0].dimension3,weight_unit:"kg",weight:n[0].weightFd/1e3,declared_value:"2299",cod_amount:e,num_pieces:n[0].orderProducts.length,commodity_id:"Others",customer_reference_number:n[0].customOrderId,is_risk_surcharge_applicable:!1,origin_details:{name:n[0].shippingAddress.firstName+n[0].shippingAddress.lastName,phone:n[0].shippingAddress.phoneno,alternate_phone:n[0].shippingAddress.phoneno,address_line_1:n[0].shippingAddress.address,address_line_2:n[0].shippingAddress.addressOptional,pincode:n[0].shippingAddress.pincode,city:n[0].shippingAddress.city,state:n[0].shippingAddress.state},destination_details:{name:n[0].billingAddress.bfirstName+n[0].billingAddress.blastName,phone:n[0].billingAddress.bphoneno,alternate_phone:n[0].billingAddress.bphoneno,address_line_1:n[0].billingAddress.baddress,address_line_2:n[0].billingAddress.baddressOptional,pincode:n[0].billingAddress.bpincode,city:n[0].billingAddress.bcity,state:n[0].billingAddress.bstate},pieces_detail:[{description:"WESTERN DIGITAL 1 TB EXTERNAL HDD",declared_value:"2299",weight:"0.15",height:"8",length:"8",width:"10"}]}]};console.log(a,"obj");try{var i={method:"POST",headers:{"Content-Type":"application/json","api-key":"a50283ab7acb25f2301d520a9a589c"},body:JSON.stringify(a)};fetch("https://demodashboardapi.shipsy.in/api/customer/integration/consignment/softdata",i).then((function(e){return e.json()})).then((function(e){console.log(e,"data")}))}catch(r){console.error(r)}},children:"Ship"})]})]})}),Object(te.jsx)(T.a,{open:st,onClose:function(){ut(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",style:{borderRadius:"5px"},children:Object(te.jsx)(j.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"40%",bgcolor:"background.paper",textAlign:"center",borderRadius:"5px"},children:Object(te.jsxs)(u.a,{title:"Bulk NDR Update",style:{textAlign:"left"},children:[Object(te.jsx)(j.a,{sx:{textAlign:"center"},children:Object(te.jsx)(j.a,{sx:{backgroundColor:"#19B5FE",padding:"8px",color:"#ffffff",fontSize:"15px",lineHeight:"20px",marginBottom:"10px"},children:"NDR file format has been changed. Please follow the below given instruction."})}),Object(te.jsx)(j.a,{children:Object(te.jsx)("input",{type:"file",id:"file",style:{height:"200%",marginBottom:"10px"}})}),Object(te.jsxs)(j.a,{sx:{textAlign:"right",marginBottom:"10px"},children:[Object(te.jsx)(p.a,{variant:"contained",component:"label",children:"Upload"})," ",Object(te.jsx)(p.a,{variant:"contained",component:"label",children:"Cancle"})]}),Object(te.jsx)("hr",{}),Object(te.jsx)(j.a,{sx:{textAlign:"center"},children:"How to use"}),Object(te.jsx)(E.a,{sx:{display:"list-item"},children:"Export NDR using the export option given on this page."}),Object(te.jsxs)(E.a,{sx:{display:"list-item"},children:["Mention your NDR action in Seller Action. Valid Values for Seller Action are"," ",Object(te.jsx)("span",{style:{fontWeight:"bolder"},children:"Re-Attempt, Change Phone, Change Address, RTO"})]}),Object(te.jsx)(E.a,{sx:{display:"list-item"},children:"Depending on Seller action following fields are required:"}),Object(te.jsxs)(j.a,{style:{marginLeft:"30px",marginTop:"20px"},children:[Object(te.jsx)("span",{style:{fontWeight:"bolder"},children:"Change Phone:"}),Object(te.jsx)(E.a,{sx:{display:"list-item"},children:"Change Phone"}),Object(te.jsx)("span",{style:{fontWeight:"bolder",paddingTop:"10px"},children:"Change Address:"}),Object(te.jsx)(E.a,{sx:{display:"list-item",paddingBottom:"0px",paddingTop:"0px"},children:"Change Name"}),Object(te.jsx)(E.a,{sx:{display:"list-item",paddingBottom:"0px",paddingTop:"0px"},children:"Change Address 1"})]})]})})})]})}}}]);
//# sourceMappingURL=18.a5b704b4.chunk.js.map