"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[236],{8236:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});n(2791);var o=n(4554),t=n(3044),a=n(890),i=n(1889),s=n(85),c=n(3736),l=n(533),u=n(5705),d=n(1465),m=n(9434),f=n(2056),p=n(8007),v=n(184),h=p.Ry({name:p.Z_().required("Name is required").min(3,"Name should be at least 3 characters").max(30,"Name should not exceed 30 characters"),email:p.Z_().required("Email is required").email("Invalid email address"),password:p.Z_().required("Password is required").min(7,"Password should be at least 7 characters").test("no-password",'Password cannot contain the word "password"',(function(e){return!e.toLowerCase().includes("password")}))}),x=function(){var e=(0,m.I0)();return(0,v.jsx)(o.Z,{sx:{minHeight:"100%",component:"main"},children:(0,v.jsx)(u.J9,{initialValues:{name:"",email:"",password:""},validationSchema:h,onSubmit:function(r,n){var o=n.resetForm;e((0,f.z2)(r)),o()},children:(0,v.jsx)(o.Z,{sx:{margin:"0 auto",width:500,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10"},children:(0,v.jsxs)(u.l0,{children:[(0,v.jsxs)(o.Z,{sx:{marginTop:8,marginBottom:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,v.jsx)(t.Z,{sx:{m:1,bgcolor:"rgb(41, 132, 132)"},children:(0,v.jsx)(d.Z,{})}),(0,v.jsx)(a.Z,{component:"h2",variant:"h5",children:"Sign up"})]}),(0,v.jsxs)(i.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,v.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,v.jsx)(u.gN,{as:s.Z,label:"Username",variant:"outlined",fullWidth:!0,required:!0,name:"name"}),(0,v.jsx)(u.Bc,{name:"name",component:"div",className:"error",style:{color:"red",fontSize:"14px"}})]}),(0,v.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,v.jsx)(u.gN,{as:s.Z,label:"Email",variant:"outlined",fullWidth:!0,required:!0,name:"email",type:"email"}),(0,v.jsx)(u.Bc,{name:"email",component:"div",className:"error",style:{color:"red",fontSize:"14px"}})]}),(0,v.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,v.jsx)(u.gN,{as:s.Z,label:"Password",variant:"outlined",fullWidth:!0,required:!0,name:"password",type:"password"}),(0,v.jsx)(u.Bc,{name:"password",component:"div",className:"error",style:{color:"red",fontSize:"14px"}})]}),(0,v.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,v.jsx)(c.Z,{type:"submit",variant:"contained",fullWidth:!0,sx:{backgroundColor:"#38d2d2",marginBottom:"20px","&:hover":{backgroundColor:"rgb(41, 132, 132)"}},children:"Register"}),(0,v.jsxs)(o.Z,{display:"flex",justifyContent:"center",gap:"5px",alignItems:"center",children:[(0,v.jsx)(a.Z,{component:"span",children:"Already have an account?"}),(0,v.jsx)(l.Z,{href:"/goit-react-hw-08-phonebook/login",variant:"body2",color:"rgb(41, 132, 132)",fontSize:"16px",children:"Log In"})]})]})]})]})})})})},g=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(x,{})})}},1465:function(e,r,n){var o=n(4836);r.Z=void 0;var t=o(n(5649)),a=n(184),i=(0,t.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOpenOutlined");r.Z=i},3044:function(e,r,n){n.d(r,{Z:function(){return y}});var o=n(9439),t=n(3366),a=n(7462),i=n(2791),s=n(8182),c=n(4419),l=n(7630),u=n(1046),d=n(9201),m=n(184),f=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=n(5878),v=n(1217);function h(e){return(0,v.Z)("MuiAvatar",e)}(0,p.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var x=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r[n.variant],n.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,n=e.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&(0,a.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),Z=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,l.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var y=i.forwardRef((function(e,r){var n=(0,u.Z)({props:e,name:"MuiAvatar"}),l=n.alt,d=n.children,f=n.className,p=n.component,v=void 0===p?"div":p,y=n.imgProps,w=n.sizes,j=n.src,S=n.srcSet,k=n.variant,P=void 0===k?"circular":k,C=(0,t.Z)(n,x),N=null,D=function(e){var r=e.crossOrigin,n=e.referrerPolicy,t=e.src,a=e.srcSet,s=i.useState(!1),c=(0,o.Z)(s,2),l=c[0],u=c[1];return i.useEffect((function(){if(t||a){u(!1);var e=!0,o=new Image;return o.onload=function(){e&&u("loaded")},o.onerror=function(){e&&u("error")},o.crossOrigin=r,o.referrerPolicy=n,o.src=t,a&&(o.srcset=a),function(){e=!1}}}),[r,n,t,a]),l}((0,a.Z)({},y,{src:j,srcSet:S})),R=j||S,z=R&&"error"!==D,A=(0,a.Z)({},n,{colorDefault:!z,component:v,variant:P}),M=function(e){var r=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(n,h,r)}(A);return N=z?(0,m.jsx)(Z,(0,a.Z)({alt:l,src:j,srcSet:S,sizes:w,ownerState:A,className:M.img},y)):null!=d?d:R&&l?l[0]:(0,m.jsx)(b,{ownerState:A,className:M.fallback}),(0,m.jsx)(g,(0,a.Z)({as:v,ownerState:A,className:(0,s.Z)(M.root,f),ref:r},C,{children:N}))}))},533:function(e,r,n){n.d(r,{Z:function(){return N}});var o=n(3433),t=n(9439),a=n(4942),i=n(3366),s=n(7462),c=n(2791),l=n(8182),u=n(4419),d=n(4036),m=n(7630),f=n(1046),p=n(3031),v=n(2071),h=n(890),x=n(5878),g=n(1217);function Z(e){return(0,g.Z)("MuiLink",e)}var b=(0,x.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(8529),w=n(2065),j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=function(e){var r=e.theme,n=e.ownerState,o=function(e){return j[e]||e}(n.color),t=(0,y.DW)(r,"palette.".concat(o),!1)||n.color,a=(0,y.DW)(r,"palette.".concat(o,"Channel"));return"vars"in r&&a?"rgba(".concat(a," / 0.4)"):(0,w.Fq)(t,.4)},k=n(184),P=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,m.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r["underline".concat((0,d.Z)(n.underline))],"button"===n.component&&r.button]}})((function(e){var r=e.theme,n=e.ownerState;return(0,s.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:S({theme:r,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),N=c.forwardRef((function(e,r){var n=(0,f.Z)({props:e,name:"MuiLink"}),a=n.className,m=n.color,h=void 0===m?"primary":m,x=n.component,g=void 0===x?"a":x,b=n.onBlur,y=n.onFocus,w=n.TypographyClasses,S=n.underline,N=void 0===S?"always":S,D=n.variant,R=void 0===D?"inherit":D,z=n.sx,A=(0,i.Z)(n,P),M=(0,p.Z)(),q=M.isFocusVisibleRef,F=M.onBlur,_=M.onFocus,B=M.ref,I=c.useState(!1),V=(0,t.Z)(I,2),W=V[0],L=V[1],H=(0,v.Z)(r,B),O=(0,s.Z)({},n,{color:h,component:g,focusVisible:W,underline:N,variant:R}),T=function(e){var r=e.classes,n=e.component,o=e.focusVisible,t=e.underline,a={root:["root","underline".concat((0,d.Z)(t)),"button"===n&&"button",o&&"focusVisible"]};return(0,u.Z)(a,Z,r)}(O);return(0,k.jsx)(C,(0,s.Z)({color:h,className:(0,l.Z)(T.root,a),classes:w,component:g,onBlur:function(e){F(e),!1===q.current&&L(!1),b&&b(e)},onFocus:function(e){_(e),!0===q.current&&L(!0),y&&y(e)},ref:H,ownerState:O,variant:R,sx:[].concat((0,o.Z)(Object.keys(j).includes(h)?[]:[{color:h}]),(0,o.Z)(Array.isArray(z)?z:[z]))},A))}))}}]);
//# sourceMappingURL=236.4fb9d78d.chunk.js.map