(this["webpackJsonpecommerce-logistic"]=this["webpackJsonpecommerce-logistic"]||[]).push([[25],{313:function(e,t,n){"use strict";var i=n(75),a=n.n(i),r=("production"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STAGE?{apiUrl:"http://3.109.60.131:3007/api/"}:(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STAGE,{apiUrl:"http://3.109.60.131:3007/api/",aadharTestRequest:"https://test.zoop.one/in/identity/okyc/otp/request",aadharLiveRequest:"https://live.zoop.one/in/identity/okyc/otp/request",aadharOtpVerifyRequest:"https://test.zoop.one/in/identity/okyc/otp/verify"})).apiUrl,c={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},s={register:function(e){return a.a.post("".concat(r,"vendorLogReg/signup"),e)},vendorLogin:function(e){return a.a.post("".concat(r,"vendorLogReg/login"),e)},vendorForgotPassword:function(e){return a.a.post("".concat(r,"vendorLogReg/forgot-password"),e)},setNewPassword:function(e){return a.a.post("".concat(r,"vendorLogReg/set-password"),e)},getVendorProfileDetail:function(){return a.a.get("".concat(r,"vendorLogReg/loggedVendor"))},vendorProfileUpdate:function(e){return a.a.put("".concat(r,"vendors/editVendorProfile"),e)},getAllShippingOrderData:function(){return a.a.get("".concat(r,"shippingOrders/all"))},getshippingOrderViewDetails:function(e){return a.a.get("".concat(r,"shippingOrders/getShippingOrderById/").concat(e))},checkPinCodes:function(e){return a.a.get("https://api.postalpincode.in/pincode/".concat(e),{headers:c})},createShippingOrder:function(e){return a.a.post("".concat(r,"shippingOrders/new"),e)},cloneShippingOrder:function(e){return a.a.put("".concat(r,"shippingOrders/cloneShippingOrder/").concat(e))},cancelShippingOrder:function(e){return a.a.put("".concat(r,"shippingOrders/cancelShippingOrder/").concat(e))},updateShippingOrder:function(e,t){return a.a.put("".concat(r,"shippingOrders/editShippingOrder/").concat(e),t)}};t.a=s},570:function(e,t,n){"use strict";n.r(t);var i=n(4),a=n(11),r=n(91),c=n(13),s=n(64),o=n.n(s),l=n(0),d=n(18),u=n(90),p=n(22),j=n(290),b=n(296),h=n(272),O=n(283),g=n(87),f=n(297),m=n(352),v=n(545),x=n(546),S=n(547),A=n(548),_=n(549),y=n(373),P=n(550),k=n(284),C=n(374),w=n(309),D=n(287),T=n(280),N=n(281),E=n(229),R=n(313),I=n(320),H=n.n(I),W=n(123),L=n(579),F=n(581),G=n(580),z=n(559),B=n(326),U=n.n(B),K=n(325),q=n.n(K),M=n(551),V=n(544),Y=n(1);t.default=function(){var e=Object(p.a)(),t=Object(d.g)(),n=Object(l.useState)([]),s=Object(c.a)(n,2),I=s[0],B=s[1],K=Object(l.useState)([]),X=Object(c.a)(K,2),J=X[0],Q=X[1],Z=Object(l.useState)([]),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ne=Object(l.useState)([]),ie=Object(c.a)(ne,2),ae=ie[0],re=ie[1],ce=Object(l.useState)([]),se=Object(c.a)(ce,2),oe=se[0],le=se[1],de=Object(l.useState)([]),ue=Object(c.a)(de,2),pe=(ue[0],ue[1]),je=Object(l.useState)(!1),be=Object(c.a)(je,2),he=be[0],Oe=be[1],ge=Object(l.useState)([null,null]),fe=Object(c.a)(ge,2),me=fe[0],ve=fe[1],xe=Object(l.useState)(),Se=Object(c.a)(xe,2),Ae=Se[0],_e=Se[1],ye=Object(l.useState)(),Pe=Object(c.a)(ye,2),ke=Pe[0],Ce=Pe[1],we=Object(l.useState)(),De=Object(c.a)(we,2),Te=De[0],Ne=De[1],Ee=Object(l.useState)(),Re=Object(c.a)(Ee,2),Ie=Re[0],He=Re[1],We=Object(l.useState)("All"),Le=Object(c.a)(We,2),Fe=Le[0],Ge=Le[1],ze=Object(l.useState)("All"),Be=Object(c.a)(ze,2),Ue=Be[0],Ke=Be[1],qe=Object(l.useState)("All"),Me=Object(c.a)(qe,2),Ve=Me[0],Ye=Me[1],Xe=Object(l.useState)("All"),Je=Object(c.a)(Xe,2),Qe=Je[0],Ze=Je[1],$e=Object(l.useState)("All"),et=Object(c.a)($e,2),tt=et[0],nt=et[1],it=Object(l.useState)(),at=Object(c.a)(it,2),rt=at[0],ct=at[1],st=Object(l.useState)(!1),ot=Object(c.a)(st,2),lt=ot[0],dt=ot[1];Object(h.a)(e.breakpoints.down("md"));Object(l.useEffect)((function(){ut()}),[]);var ut=function(){var e=Object(r.a)(o.a.mark((function e(){var t,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.getAllShippingOrderData();case 3:t=e.sent,n=[],i=[],te(t.data),t.data.forEach((function(e){var t,a,r,c,s,o,l=[],d=0;e.orderProducts.forEach((function(e){l.push(e.product),i.push(e.quantity*Number(e.amount)),d=i.reduce((function(e,t){return e+t}),0)})),n.push({channel:null!==e&&void 0!==e&&e.channel?null===e||void 0===e?void 0:e.channel:"custom",orderId:null===e||void 0===e?void 0:e.orderId,date:H()(null===e||void 0===e?void 0:e.createdAt).format("MMM D, YYYY"),product:l.join(", "),payment:d,method:null===e||void 0===e?void 0:e.orderType,customer:null!==e&&void 0!==e&&e.shippingAddress?(null===e||void 0===e||null===(t=e.shippingAddress)||void 0===t?void 0:t.firstName)+(null===e||void 0===e||null===(a=e.shippingAddress)||void 0===a?void 0:a.lastName):(null===e||void 0===e||null===(r=e.shippingAddress)||void 0===r?void 0:r.firstName)+(null===e||void 0===e||null===(c=e.shippingAddress)||void 0===c?void 0:c.lastName),zipcode:null!==e&&void 0!==e&&e.shippingAddress?null===e||void 0===e||null===(s=e.shippingAddress)||void 0===s?void 0:s.pincode:null===e||void 0===e||null===(o=e.shippingAddress)||void 0===o?void 0:o.pincode,weight:null===e||void 0===e?void 0:e.weightFd,ivrStatus:null===e||void 0===e?void 0:e.ivr_status,tags:null===e||void 0===e?void 0:e.tags,status:null===e||void 0===e?void 0:e.status,_id:null===e||void 0===e?void 0:e._id})})),B(n),Q(n),pe(n),pt(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0),Object(W.notifier)({type:"error",message:e.t0.error,autoDismissTimeout:5e3});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),pt=function(e){var t=[];t.all=e.length,t.booked=e.filter((function(e){return"Booked"===e.status})).length,t.ship=e.filter((function(e){return"Ship"===e.status})).length,t.pendingpickup=e.filter((function(e){return"pendingpickup"===e.status})).length,t.intransit=e.filter((function(e){return"intransit"===e.status})).length,t.outfordelivery=e.filter((function(e){return"outfordelivery"===e.status})).length,t.Delivered=e.filter((function(e){return"Delivered"===e.status})).length,t.Cancelled=e.filter((function(e){return"Cancelled"===e.status})).length,re(t)},jt=function(e){"all"===e?(B(J),pe(J)):(B(J.filter((function(t){return t.status===e}))),pe(J.filter((function(t){return t.status===e}))))},bt=Object(l.useState)(!1),ht=Object(c.a)(bt,2),Ot=ht[0],gt=ht[1],ft=Object(l.useState)("paper"),mt=Object(c.a)(ft,2),vt=mt[0],xt=mt[1],St=Object(l.useState)(""),At=Object(c.a)(St,2),_t=At[0],yt=At[1],Pt=[{id:"1",name:"Nayan Patil",isDefault:!0},{id:"2",name:"Nitin Patil",isDefault:!1}],kt=[{id:"1",name:"Nayan Patil",isDefault:!0},{id:"2",name:"Nitin Patil",isDefault:!1}],Ct=Object(l.useState)({orderId:"",wareHousePickupAddress:"",rtoWareHouseAddress:"",essentialItem:!1,dangerousGood:!1,courierPartner:""}),wt=Object(c.a)(Ct,2),Dt=wt[0],Tt=wt[1],Nt=Dt.wareHousePickupAddress,Et=Dt.rtoWareHouseAddress,Rt=Dt.essentialItem,It=Dt.dangerousGood,Ht=Dt.courierPartner,Wt=function(){var e=Pt.filter((function(e){return!0===e.isDefault})),t=kt.filter((function(e){return!0===e.isDefault}));Tt(Object(a.a)(Object(a.a)({},Dt),{},{wareHousePickupAddress:e[0].id,rtoWareHouseAddress:t[0].id}))},Lt=[{id:"1",name:"DTDC Air (\u20b9117)"},{id:"2",name:"DTDC Premium (\u20b9108.2)"},{id:"3",name:"Xpressbees Surface (\u20b9108.74)"},{id:"4",name:"Xpressbees 1 K.G (\u20b9131)"}],Ft=function(e){e.target.checked&&"essentialItem"===e.target.name&&Tt(Object(a.a)(Object(a.a)({},Dt),{},Object(i.a)({},e.target.name,!0))),e.target.checked&&"dangerousGood"===e.target.name&&Tt(Object(a.a)(Object(a.a)({},Dt),{},Object(i.a)({},e.target.name,!0)))};return Object(Y.jsxs)(u.a,{title:"Manage Catalogus",children:[Object(Y.jsxs)(j.a,{sx:{width:"100%"},children:[Object(Y.jsx)("div",{style:{marginBottom:16,float:"right"},children:Object(Y.jsx)(b.a,{variant:"outlined",onClick:function(){dt(!lt)},children:lt?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(q.a,{})," Close"]}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(U.a,{})," Filter"]})})}),Object(Y.jsx)("br",{}),Object(Y.jsx)("br",{}),lt?Object(Y.jsxs)(O.a,{container:!0,spacing:2,children:[Object(Y.jsx)(O.a,{item:!0,xs:12,children:Object(Y.jsx)(g.a,{children:"Search by Product name or SKU Details:"})}),Object(Y.jsx)(O.a,{item:!0,xs:4,children:Object(Y.jsx)(f.a,{id:"outlined-orderid-basic",size:"small",name:"productName",placeholder:"Search by product name or SKU",value:Ie,onChange:function(e){return He(e.target.value)},fullWidth:!0,variant:"outlined"})}),Object(Y.jsxs)(O.a,{item:!0,xs:2,children:[Object(Y.jsx)(b.a,{variant:"contained",color:"success",onClick:function(){console.log("Hello1",me,Ae,ke,Te,Ie,Fe,Ve,Qe,Ue,tt,rt)},size:"small",style:{marginRight:"5px"},children:"Apply"}),Object(Y.jsx)(b.a,{variant:"contained",color:"error",onClick:function(){console.log("clear"),ve(""),_e(""),Ce(""),Ne(""),He(""),Ge("All"),Ye("All"),Ze("All"),Ke("All"),nt("All"),ct("")},size:"small",children:"Clear"})]})]}):"",Object(Y.jsx)("br",{}),Object(Y.jsx)("hr",{}),Object(Y.jsx)("br",{}),Object(Y.jsx)("div",{style:{marginBottom:16},children:Object(Y.jsxs)(m.a,{variant:"outlined","aria-label":"outlined primary button group",children:[Object(Y.jsxs)(b.a,{onClick:function(){return jt("all")},children:["All(",ae.all,")"]}),Object(Y.jsxs)(b.a,{onClick:function(){return jt("Booked")},children:["Requested (",ae.booked,")"]}),Object(Y.jsxs)(b.a,{onClick:function(){return jt("pendingpickup")},children:["Accepted(",ae.pendingpickup,")"]}),Object(Y.jsxs)(b.a,{onClick:function(){return jt("intransit")},children:["Rejected(",ae.intransit,")"]})]})}),Object(Y.jsx)(v.a,{children:Object(Y.jsxs)(x.a,{"aria-label":"customized table",children:[Object(Y.jsx)(S.a,{children:Object(Y.jsxs)(A.a,{children:[Object(Y.jsx)(_.a,{align:"center",children:Object(Y.jsx)(y.a,{indeterminate:oe.length>0&&oe.length<I.length,checked:I.length>0&&oe.length===I.length,onChange:function(e){if(e.target.checked){var t=I.map((function(e){return e._id}));le(t)}else le([])},inputProps:{"aria-label":"select all desserts"}})}),Object(Y.jsx)(_.a,{align:"center",children:"Product"}),Object(Y.jsx)(_.a,{align:"center",children:"SKU"}),Object(Y.jsx)(_.a,{align:"center",children:"DIMENSIONS (LBH) IN CM"}),Object(Y.jsx)(_.a,{align:"center",children:"WEIGHT (GM)"}),Object(Y.jsx)(_.a,{align:"center",children:"GST %"}),Object(Y.jsx)(_.a,{align:"center",children:"HSN"}),Object(Y.jsx)(_.a,{align:"center",children:"WEIGHT APPLY"}),Object(Y.jsx)(_.a,{align:"center",children:"Status"}),Object(Y.jsx)(_.a,{align:"center",children:"ACTION"})]})}),Object(Y.jsx)(P.a,{children:I.map((function(e,n){var i,a=(i=e._id,-1!==oe.indexOf(i)),r="enhanced-table-checkbox-".concat(n);return Object(Y.jsxs)(A.a,{onClick:function(){return function(e){var t=oe.indexOf(e),n=[];-1===t?n=n.concat(oe,e):0===t?n=n.concat(oe.slice(1)):t===oe.length-1?n=n.concat(oe.slice(0,-1)):t>0&&(n=n.concat(oe.slice(0,t),oe.slice(t+1))),le(n)}(e._id)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(Y.jsx)(_.a,{align:"center",children:"Cancelled"!==e.status&&"Booked"!==e.status&&Object(Y.jsx)(y.a,{checked:a,inputProps:{"aria-labelledby":r}})}),Object(Y.jsx)(_.a,{component:"th",scope:"row",align:"center",children:e.channel}),Object(Y.jsx)(_.a,{align:"center",children:e.orderId?Object(Y.jsx)(b.a,{onClick:function(){return function(e){t("/order-details/".concat(e))}(e._id)},children:e.orderId}):"-"}),Object(Y.jsx)(_.a,{align:"center",children:e.date}),Object(Y.jsx)(_.a,{align:"center",children:e.product?e.product:"-"}),Object(Y.jsx)(_.a,{align:"center",children:e.payment}),Object(Y.jsx)(_.a,{align:"center",children:e.method}),Object(Y.jsx)(_.a,{align:"center",children:e.customer}),Object(Y.jsx)(_.a,{align:"center",children:e.zipcode}),Object(Y.jsx)(_.a,{align:"center",children:"Cancelled"===e.status?Object(Y.jsx)(k.a,{label:e.status,color:"primary",variant:"outlined"}):Object(Y.jsx)(k.a,{label:e.status,color:"primary",variant:"outlined",onClick:function(){return function(e,t){yt(t),gt(!0),xt("paper"),Wt()}(0,e._id)}})})]},e._id)}))}),Object(Y.jsx)(M.a,{children:Object(Y.jsx)(A.a,{children:Object(Y.jsx)(V.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:12,count:50,rowsPerPage:10,page:0,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0}})})})]})})]}),Object(Y.jsx)(j.a,{children:Object(Y.jsxs)(L.a,{open:Ot,onClose:function(){return gt(!1)},scroll:vt,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[Object(Y.jsx)(z.a,{id:"scroll-dialog-title",style:{fontSize:"1.5em"},children:"Ship Your Package Now"}),Object(Y.jsxs)(G.a,{dividers:"paper"===vt,children:[Object(Y.jsxs)(O.a,{style:{display:"flex",marginTop:"5%",marginBottom:"5%",width:500},children:[Object(Y.jsxs)(O.a,{item:!0,xs:6,style:{marginRight:20},children:[Object(Y.jsx)(g.a,{variant:"h5",children:"Pickup Warehouse"}),Object(Y.jsx)(f.a,{id:"outlined-select-ordertype",select:!0,label:"Pickup Warehouse Address",name:"wareHousePickupAddress",value:Nt,onChange:function(e){return Tt(Object(a.a)(Object(a.a)({},Dt),{},Object(i.a)({},e.target.name,e.target.value)))},fullWidth:!0,size:"small",margin:"normal",variant:"outlined",children:null===Pt||void 0===Pt?void 0:Pt.map((function(e,t){return Object(Y.jsxs)(C.a,{value:e.id,children:[e.name," ",!0===e.isDefault?"(Default)":""]},t+1)}))}),Object(Y.jsx)(w.a,{control:Object(Y.jsx)(y.a,{name:"essentialItem",checked:Rt,onChange:function(e){return Ft(e)}}),label:"Is essential item ?"})]}),Object(Y.jsxs)(O.a,{item:!0,xs:6,children:[Object(Y.jsx)(g.a,{variant:"h5",children:"RTO Warehouse"}),Object(Y.jsx)(f.a,{id:"outlined-select-ordertype",select:!0,label:"RTO Warehouse",name:"rtoWareHouseAddress",value:Et,onChange:function(e){return Tt(Object(a.a)(Object(a.a)({},Dt),{},Object(i.a)({},e.target.name,e.target.value)))},fullWidth:!0,size:"small",margin:"normal",variant:"outlined",children:null===kt||void 0===kt?void 0:kt.map((function(e,t){return Object(Y.jsxs)(C.a,{value:e.id,children:[e.name," ",!0===e.isDefault?"(Default)":""]},t+1)}))}),Object(Y.jsx)(w.a,{control:Object(Y.jsx)(y.a,{name:"dangerousGood",checked:It,onChange:function(e){return Ft(e)}}),label:"Is dangerous good ?"})]})]}),Object(Y.jsx)("hr",{}),Object(Y.jsx)(O.a,{style:{display:"flex",marginTop:"5%",marginBottom:"5%",width:500},children:Object(Y.jsx)(D.a,{row:!0,"aria-label":"courier-partner",value:Ht,name:"courierPartner",onChange:function(e){return Tt(Object(a.a)(Object(a.a)({},Dt),{},Object(i.a)({},e.target.name,e.target.value)))},children:null===Lt||void 0===Lt?void 0:Lt.map((function(e,t){return Object(Y.jsx)(O.a,{item:!0,xs:6,children:Object(Y.jsx)(w.a,{value:e.id,control:Object(Y.jsx)(T.a,{}),label:e.name})},t+1)}))})})]}),Object(Y.jsxs)(F.a,{children:[Object(Y.jsx)(b.a,{variant:"contained",color:"error",onClick:function(){return gt(!1)},children:"Close"}),Object(Y.jsx)(b.a,{variant:"contained",disabled:!Ht,color:"primary",onClick:function(){Dt.orderId=_t;var e=0,t=[];console.log(Dt.courierPartner,"shipProcessFormdddd");var n=ee.filter((function(e){return e._id===_t}));n[0].orderProducts.forEach((function(n){t.push(n.quantity*Number(n.amount)),e=t.reduce((function(e,t){return e+t}),0)}));var i={consignments:[{customer_code:"GL112",reference_number:n[0].orderId,service_type_id:"GROUND EXPRESS",load_type:"NON-DOCUMENT",description:"sample",cod_favor_of:"In Favour of",cod_collection_mode:"cash",consignment_type:"Forward",dimension_unit:"cm",length:n[0].dimension1,width:n[0].dimension2,height:n[0].dimension3,weight_unit:"kg",weight:n[0].weightFd/1e3,declared_value:"2299",cod_amount:e,num_pieces:n[0].orderProducts.length,commodity_id:"Others",customer_reference_number:n[0].customOrderId,is_risk_surcharge_applicable:!1,origin_details:{name:n[0].shippingAddress.firstName+n[0].shippingAddress.lastName,phone:n[0].shippingAddress.phoneno,alternate_phone:n[0].shippingAddress.phoneno,address_line_1:n[0].shippingAddress.address,address_line_2:n[0].shippingAddress.addressOptional,pincode:n[0].shippingAddress.pincode,city:n[0].shippingAddress.city,state:n[0].shippingAddress.state},destination_details:{name:n[0].billingAddress.bfirstName+n[0].billingAddress.blastName,phone:n[0].billingAddress.bphoneno,alternate_phone:n[0].billingAddress.bphoneno,address_line_1:n[0].billingAddress.baddress,address_line_2:n[0].billingAddress.baddressOptional,pincode:n[0].billingAddress.bpincode,city:n[0].billingAddress.bcity,state:n[0].billingAddress.bstate},pieces_detail:[{description:"WESTERN DIGITAL 1 TB EXTERNAL HDD",declared_value:"2299",weight:"0.15",height:"8",length:"8",width:"10"}]}]};console.log(i,"obj");try{var a={method:"POST",headers:{"Content-Type":"application/json","api-key":"a50283ab7acb25f2301d520a9a589c"},body:JSON.stringify(i)};fetch("https://demodashboardapi.shipsy.in/api/customer/integration/consignment/softdata",a).then((function(e){return e.json()})).then((function(e){console.log(e,"data")}))}catch(r){console.error(r)}},children:"Ship"})]})]})}),Object(Y.jsx)(N.a,{open:he,onClose:function(){Oe(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",style:{borderRadius:"5px"},children:Object(Y.jsxs)(j.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"40%",height:"50%",bgcolor:"background.paper",textAlign:"left",borderRadius:"5px"},children:[Object(Y.jsx)(g.a,{style:{padding:"20px 10px 1px 20px",fontSize:"22px"},children:"How to Raise a Weight Dispute on NimbusPost Seller Panel?"}),Object(Y.jsx)(E.a,{style:{flex:"1 0 auto"},children:Object(Y.jsx)("iframe",{id:"video",width:"100%",heigh:"100%",src:"https://www.youtube.com/embed/sHHbDN8064E",frameBorder:"0",allow:"accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"video"})})]})})]})}}}]);
//# sourceMappingURL=25.f3245c83.chunk.js.map