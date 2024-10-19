"use strict";(self.webpackChunkgoit_expense_tracker=self.webpackChunkgoit_expense_tracker||[]).push([[973],{2749:(e,t,r)=>{r.d(t,{A:()=>o});r(5043);const o=r.p+"static/media/Sprite.2377869f6a2c2a8fc2a38386d04f0816.svg"},6755:(e,t,r)=>{r.d(t,{FB:()=>o});const o=e=>e.transaction.transactions},9164:(e,t,r)=>{r.d(t,{A:()=>be});var o=r(5043),i=r(3216),n=r(9456),a=r(4858),d=(r(5015),r(899));const l=d.Ik().shape({category:d.gl().required("Category is required"),sum:d.ai().required("Sum is required"),comment:d.Yj().min(3,"Too short").max(48,"Too long")});var s=r(8403),c=r(607);const p=(e,t,r,o,i,n,a)=>{let d=e;if(d.type=t,n?(d.category=n.category._id,d._id=n._id):d.category=r,d.time=e.time.slice(0,5),n)n.date===a?d.date=n.date:d.date=function(e){const t=e.split("/"),r=t[0].padStart(2,"0"),o=t[1].toString().padStart(2,"0");return`${t[2]}-${o}-${r}`}(a);else if(""===a){const e=new Date,t=`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`;d.date=t}else{let[e,t,r]=a.split("/");e=e.padStart(2,"0"),t=t.toString().padStart(2,"0"),console.log(e),console.log(t);const o=`${r}-${t}-${e}`;d.date=o}if(""===e.time||"00:00"===e.time){const e=new Date,t=`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`;d.time=t}n?(o((0,c._g)(d)),i()):(o((0,c.nr)(d)),i())},x=e=>{switch(e){case"expenses":default:return"expenses";case"incomes":return"incomes"}};var g=r(1529);const m=g.Ay.div`
  display: flex;
  flex-direction: row;

  gap: 20px;
`,h=g.Ay.div`
  display: flex;
  gap: 8px;

  align-items: center;
`,u=g.Ay.label`
  color: #FAFAFA;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;

  display: inline-block;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,y=g.Ay.input`
  appearance: none;
  border-radius: 10px;
  width: 19px;
  height: 19px;
  outline: 2px solid rgba(250, 250, 250, 0.20);

  transition: border 350ms, outline 350ms, background-color 350ms ease-in-out;

  &:checked {
    border: 3px solid #171719;
    outline: 2px solid #4DC274;
    background-color: #4DC274;
  }
`;var b=r(579);const f=e=>{let{control:t,editData:r}=e;const[n,d]=(0,o.useState)(),{transactionsType:l}=(0,i.g)(),s=(0,i.Zp)();(0,o.useEffect)((()=>{null!==r&&void 0!==r&&r.type?d(x(null===r||void 0===r?void 0:r.type)):(d(x(l)),s(`/transactions/${x(l)}`))}),[null===r||void 0===r?void 0:r.type,s,l]);const c=e=>{s(`/transactions/${e}`)};return(0,b.jsxs)(m,{children:[(0,b.jsx)(a.xI,{name:"type",control:t,defaultValue:"incomes",render:()=>(0,b.jsxs)(h,{children:[(0,b.jsx)(y,{id:"income",type:"radio",value:"incomes",onChange:()=>{r||c("incomes")},checked:"incomes"===n}),(0,b.jsx)(u,{htmlFor:"income",children:"Income"})]})}),(0,b.jsx)(a.xI,{name:"type",control:t,defaultValue:"",render:()=>(0,b.jsxs)(h,{children:[(0,b.jsx)(y,{id:"expense",type:"radio",value:"expenses",onChange:()=>{r||c("expenses")},checked:"expenses"===n}),(0,b.jsx)(u,{htmlFor:"expense",children:"Expense"})]})})]})};var w=r(1899),v=r.n(w);const k=g.Ay.svg`
position: absolute;
width: 20px;
height: 20px;
bottom: 13px;
right: 14px;
stroke: #FAFAFA;
fill: #171719;

  @media only screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    bottom: 14px;
    right: 18px;
  }
`,j=g.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 14px;

  @media only screen and (min-width: 768px) {
    gap: 20px;
    height: 75px;
  }
`,_=g.Ay.label`
  color: #FAFAFA;
  
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  display: inline-block;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  `,A=(0,g.Ay)(v())`
  width: 140px;
  height: 42px;
  padding: 12px 35px 12px 12px;
      
  border: 1px solid rgba(250, 250, 250, 0.20);
  border-radius: 12px;
  
  background-color: transparent;
  color: rgba(250, 250, 250, 0.40);
  
  outline: none;
  box-sizing: border-box;
  
  transition: border-color 250ms ease-in-out;
  
  &:focus {
    border-color: #0EF387;
  }

  @media only screen and (min-width: 768px ) {
    width: 232px;
    height: 48px;
    padding: 12px 45px 12px 12px;
  }
  `,F=g.Ay.input`
  width: 140px;
  height: 42px;
  padding: 12px 35px 12px 12px;
  
  border: 1px solid rgba(250, 250, 250, 0.20);
  border-radius: 12px;
  
  background-color: transparent;
  color: rgba(250, 250, 250, 0.40);
  
  outline: none;
  box-sizing: border-box;
  
  transition: border-color 250ms ease-in-out;
  
  &:focus {
    border-color: #0EF387;
  }
  
  &[type='time']::-webkit-calendar-picker-indicator {
    display: none;
  }

    @media only screen and (min-width: 768px) {
    width: 232px;
    height: 48px;
    padding: 12px 45px 12px 12px;
  }
  `,z=g.Ay.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    position: relative;
    width: 140px;
  
    @media only screen and (min-width: 768px) {
    gap: 8px;
    width: 235px;
  }
  
    /* date-picker */

    .react-datepicker-wrapper {
      position: absolute;
      bottom: 0;
    }
  
    .react-datepicker {
      width: 222px;
  
      padding: 0 14px;
      padding-bottom: 14px;
      box-sizing: border-box;
  
      border: none;
      background-color: #0EF387;
    }
  
    
    .react-datepicker__month-container {
      width: 194px;
      box-sizing: border-box;
    }
    
    .react-datepicker__month {
      margin: 0;
    }
    
    .react-datepicker__navigation {
      overflow: visible;
    }
    
    .react-datepicker__header {
      background-color: #0EF387;
      /* width: 222px; */
      padding: 14px 0;
      
      box-sizing: border-box;
      margin-bottom: 39px;
      border-color: rgba(12, 13, 13, 0.50);
    }
    
    .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
      color: #0C0D0D;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: -0.32px;
    }
  
    .react-datepicker__navigation, .react-datepicker__navigation--next {
      width: 4px;
      height: 8px;
      border-color: #0C0D0D;
    }
    
    
    .react-datepicker__navigation--next {
      right: 14px;
      top: 19px;
    }
    
    .react-datepicker__navigation--previous {
      left: 14px;
      top: 19px;
    }
    
    .react-datepicker__day-names {
      display: flex;
      gap: 11px;
      
      position: absolute;
      top: 55px;
      
      color: rgba(12, 13, 13, 0.50);
    }
    
    .react-datepicker__week {
      display: flex;
      gap: 12px;
      
      justify-content: center;
    }
    
    .react-datepicker__month {
      display: flex;
      flex-direction: column;
      gap: 11px;
    }
    
    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
      width: 18px;
      max-height: 20px;
      margin: 0;
      
      color: inherit;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.02em;
      transition: transform 250ms ease-in-out;
  
      &:hover {
        background-color: #0EF387;
        transform: scale(2);
      }
    }
  
    .react-datepicker__day-name:hover {
      transform: scale(1);
      /* pointer-events: ; */
    }
  
    /* selected day */
    .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
      background-color: #0EF387;
      border-radius: 0;
      border-bottom: 2px solid #0C0D0D;
    }
  
    /* actual day */
    .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
      background-color: #0EF387;
      border-bottom: 2px solid #0C0D0D;
      border-radius: 0;
    }
  
    /* nav arrow */
    .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
      border-color: #0C0D0D;
      width: 6px;
      height: 6px;
    }
    
    
    /* from input to form arrow */
    .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {
      border-top-color: #0EF387;
    }
    
    .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
      border-bottom-color: #0EF387;
    }
    
    `;var C=r(2749);const $=e=>{let{editData:t,control:r,datePiker:i}=e;const[n,d]=(0,o.useState)("");function l(e){const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}return(0,o.useEffect)((()=>{null!==t&&void 0!==t&&t.date&&d(l(null===t||void 0===t?void 0:t.date))}),[t]),(0,b.jsxs)(j,{children:[(0,b.jsx)(a.xI,{name:"date",control:r,render:e=>{let{field:t}=e;return(0,b.jsxs)(z,{children:[(0,b.jsxs)(_,{htmlFor:"date",children:["Date",(0,b.jsx)(k,{width:16,height:16,children:(0,b.jsx)("use",{href:C.A+"#icon-calendar"})})]}),(0,b.jsx)(A,{id:"date",selected:t.value,onChange:e=>{d(l(e)),i(l(e))},dateFormat:"dd/MM/yyyy",placeholderText:"dd/mm/yyyy",value:n})]})}}),(0,b.jsx)(a.xI,{name:"time",control:r,render:e=>{let{field:t}=e;return(0,b.jsxs)(z,{children:[(0,b.jsxs)(_,{htmlFor:"time",children:["Time",(0,b.jsx)(k,{children:(0,b.jsx)("use",{href:C.A+"#icon-clock"})})]}),(0,b.jsx)(F,{id:"time",type:"time",step:1,...t})]})}})]})};var S=r(4449),E=r(3752);const D=g.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media only screen and (min-width: 768px) {
    gap: 8px;
  }
`,N=g.Ay.label`
  color: #FAFAFA;
  
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  
  display: inline-block;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,I=g.Ay.input`
  height: 42px;
  padding: 12px 14px;

  border: 1px solid rgba(250, 250, 250, 0.20);
  border-radius: 12px;

  background-color: transparent;
  color: rgba(250, 250, 250, 0.40);

  outline: none;
  box-sizing: border-box;

  transition: border-color 250ms ease-in-out;
  
  &:focus {
    border-color: #0EF387;
  }

  @media only screen and (min-width: 768px) {
    padding: 12px 18px;
    height: 48px;
  }
`;var T=r(2145),M=r(566);const q=e=>e.categories.categories;var H=r(3078);const B=g.Ay.div`
  @media (max-width: 767px) {
    max-width: 335px;
    max-height: 400px;
  }

  width: 500px;
  max-height: 461px;
  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  background: #171719;
  padding: 40px 0;
  position: relative;
`,R=g.Ay.h2`
  text-transform: capitalize;
  @media (max-width: 767px) {
    font-size: 24px;
    margin-left: 20px;
  }

  color: #fafafa;
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  margin-left: 40px;
`,V=g.Ay.p`
  @media (max-width: 767px) {
    font-size: 12px;
    margin-left: 20px;
  }

  color: rgba(250, 250, 250, 0.4);
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  margin-bottom: 10px;
  margin-left: 40px;
`,O=g.Ay.ul`
  max-height: 150px;
  overflow-y: auto;
  margin-bottom: 28px;

  &::-webkit-scrollbar {
    height: 131px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444446;
    border-radius: 12px;
  }
`,Y=g.Ay.p`
  color: rgba(250, 250, 250, 0.4);
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  text-align: center;
`,P=g.Ay.form`
  @media (max-width: 767px) {
    margin: 0px 20px;
  }

  margin: 0px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 420px;
  position: relative;
  margin-bottom: 10px;
`,X=g.Ay.input`
  @media (max-width: 767px) {
    font-size: 14px;
    padding-left: 14px;
  }

  box-sizing: border-box;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  border-radius: 12px;
  background: #171719;
  color: rgba(250, 250, 250, 0.4);
  font-size: 16px;
  font-style: normal;
  line-height: 1.5;
  border: 1px solid rgba(250, 250, 250, 0.2);

  &:focus {
    border: 1px solid #0ef387;
    ${e=>{let{$error:t}=e;return t&&g.AH`
        border: 1px solid red;
      `}}
  }
  &:focus:not(.focus-visible) {
    outline: none;
  }
`,Z=g.Ay.p`
  @media (max-width: 767px) {
    font-size: 14px;
  }

  color: #0ef387;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02em;
  ${e=>{let{$error:t}=e;return t&&g.AH`
      color: #e74a3b;
    `}}
`,W=g.Ay.button`
  @media (max-width: 767px) {
    font-size: 14px;
  }

  position: absolute;
  right: 0%;
  bottom: 0%;
  border-radius: 12px;
  background: #0ef387;
  padding: 15px 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c0d0d;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.02em;

  ${e=>{let{$error:t}=e;return t&&g.AH`
      background-color: #e74a3b;
    `}}

  &:hover,
  &:focus {
    background: #0ebb69;

    ${e=>{let{$error:t}=e;return t&&g.AH`
        background-color: #b83326;
      `}}
  }
`,U=g.Ay.button`
  @media (max-width: 767px) {
    font-size: 14px;
  }

  position: absolute;
  right: 0%;
  bottom: 75%;
  display: flex;
  background: transparent;
  justify-content: center;
  align-items: center;
  color: #e74a3b;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.02em;

  &::before {
    opacity: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: #e74a3b;
    transition: opacity 0.3s;
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 1;
    }
  }
`,G=g.Ay.p`
  color: #e74a3b;
  position: absolute;
  top: 114%;
  left: 30%;
  font-size: 12px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    left: 34%;
    font-size: 14px;
  }
`;var J=r(9008);const K=e=>{let{isEditing:t,currentCategory:r,handleSubmit:i,errors:n,onCancel:a,submit:d,register:l}=e;return(0,b.jsxs)(J.Y,{$variant:"categoryForm",children:[(0,b.jsxs)(P,{action:"",onSubmit:i(d),children:[(0,b.jsx)(Z,{$error:null===n||void 0===n?void 0:n.categoryName,children:t?"Edit category":"New category"}),(0,o.createElement)(X,{type:"text",placeholder:"Enter the text",...l("categoryName"),autoFocus:null!==r,key:null===r||void 0===r?void 0:r._id,$error:null===n||void 0===n?void 0:n.categoryName}),(0,b.jsx)(W,{$error:null===n||void 0===n?void 0:n.categoryName,children:t?"Edit":"Add"}),t&&(0,b.jsx)(U,{onClick:a,children:"Cancel"})]}),(null===n||void 0===n?void 0:n.categoryName)&&(0,b.jsx)(G,{children:n.categoryName.message})]})},L=g.Ay.li`
  @media (max-width: 767px) {
    padding-left: 20px;
  }

  position: relative;
  padding: 12px 0px;
  padding-left: 40px;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  p {
    @media (max-width: 767px) {
      font-size: 14px;
    }

    color: #fafafa;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* margin-right: 40px; */
  }

  div {
    opacity: 0;
    position: absolute;
    transition: opacity 0.3s ease;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    transition: opacity 0.3s ease;
  }

  &:hover div {
    opacity: 1;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
    @keyframes wiggle {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: rotateZ(10deg);
      }
      50% {
        transform: translateX(0);
      }
      75% {
        transform: rotateZ(-10deg);
      }
      100% {
        transform: translateX(0);
      }
    }
    &:hover {
      animation: wiggle 0.5s ease infinite;
    }
  }
`;var Q=r(4989);const ee=e=>{let{setCategoryId:t,closeModal:r,chooseCategories:o,_id:i,categoryName:n,deleteCategory:a,editCategory:d}=e;return(0,b.jsxs)(L,{children:[(0,b.jsx)("p",{children:n}),(0,b.jsxs)("div",{children:[(0,b.jsx)(Q.A,{}),(0,b.jsx)("button",{onClick:()=>{var e;e=i,o(n),t(e),r()},children:(0,b.jsx)("svg",{width:16,height:16,children:(0,b.jsx)("use",{xlinkHref:"#icon-check"})})}),(0,b.jsx)("button",{onClick:d,children:(0,b.jsx)("svg",{width:16,height:16,children:(0,b.jsx)("use",{xlinkHref:"#icon-edit-2"})})}),(0,b.jsx)("button",{type:"button",onClick:()=>a(i),children:(0,b.jsx)("svg",{width:16,height:16,children:(0,b.jsx)("use",{xlinkHref:"#icon-trash-2"})})})]})]})},te=d.Ik().shape({categoryName:d.Yj().trim().max(16,"Max length must be 16 symbols").required("Enter name for category")}),re=e=>{var t,r;let{type:i,chooseCategories:d,closeModal:l,setCategoryId:c}=e;const p=(0,n.d4)(q),x=(0,n.d4)(H.Ep),g=(0,n.wA)(),[m,h]=(0,o.useState)(null),[u,y]=(0,o.useState)(!1),[f,w]=(0,o.useState)([]),v=(0,o.useRef)(),{register:k,handleSubmit:j,reset:_,formState:{errors:A}}=(0,a.mN)({resolver:(0,s.t)(te)});(0,o.useEffect)((()=>{x&&g((0,M.N6)()).unwrap().catch((e=>{T.oR.error("Oops, something went wrong. Try to reload page")}))}),[g,x,i]),(0,o.useEffect)((()=>{p[i]&&w(p[i])}),[p,i]);return(0,b.jsxs)(B,{children:[(0,b.jsx)(R,{children:i}),(0,b.jsx)(V,{children:"All categories"}),(0,b.jsx)(O,{ref:v,children:null!==(t=p[i])&&void 0!==t&&t.length?null===(r=p[i])||void 0===r?void 0:r.map((e=>(0,b.jsx)(ee,{setCategoryId:c,closeModal:l,chooseCategories:d,...e,deleteCategory:()=>{return t=e._id,m&&m._id===t&&(_({categoryName:""}),h(null),y(!1)),void g((0,M.yv)(t)).unwrap().catch((e=>{T.oR.error("Oops, something went wrong. Try to reload page")}));var t},editCategory:()=>(e=>{h(e),_({categoryName:e.categoryName}),y(!0)})(e)},e._id))):(0,b.jsx)(Y,{children:"There are no categories yet\ud83d\ude2d"})}),(0,b.jsx)(K,{isEditing:u,currentCategory:m,handleSubmit:j,submit:e=>{let{categoryName:t}=e;const r={type:i,categoryName:t};f.find((e=>e.categoryName===t))?T.oR.warning("Category with this name already exists"):(m?(g((0,M.CI)({id:m._id,categoryName:t})).unwrap().catch((e=>{T.oR.error("Oops, something went wrong. Try to reload page")})),_({categoryName:""}),y(!1)):g((0,M.Bz)(r)).unwrap().then((()=>{v.current&&(v.current.scrollTop=v.current.scrollHeight)})).catch((e=>{T.oR.error("Oops, something went wrong. Try to reload page")})),_(),h(null))},register:k,errors:A,onCancel:()=>{_({categoryName:""}),h(null),y(!1)}})]})},oe=e=>{let{control:t,setValue:r,setCategoryId:o,type:n}=e;const{isOpened:d,openModal:l,closeModal:s}=(0,E.h)(),{transactionsType:c}=(0,i.g)(),p=e=>{o(e.id),r("category",e)};return(0,b.jsx)(a.xI,{name:"category",control:t,render:e=>{let{field:t}=e;return(0,b.jsxs)(D,{children:[(0,b.jsx)(N,{htmlFor:"category",children:"Category"}),(0,b.jsx)(I,{id:"category",type:"textarea",placeholder:"Different",...t,value:t.value,onClick:e=>{l(),e.target.blur()}}),d?(0,b.jsx)(S.A,{children:(0,b.jsx)(re,{type:n||c,chooseCategories:p,closeModal:s,setCategoryId:o}),closeModal:s}):null]})}})};var ie=r(4513);const ne=g.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media only screen and (min-width: 768px) {
    gap: 8px;
  }
`,ae=g.Ay.label`
  color: #FAFAFA;
  
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  
  display: inline-block;
`,de=g.Ay.input`
  /* width: 140px; */
  height: 42px;
  padding: 12px 14px;

  border: 1px solid rgba(250, 250, 250, 0.20);
  border-radius: 12px;

  background-color: transparent;
  color: rgba(250, 250, 250, 0.40);

  outline: none;
  box-sizing: border-box;

  transition: border-color 250ms ease-in-out;

  &:focus {
    border-color: #0EF387;
  }

  @media only screen and (min-width: 768px) {
    padding: 12px 18px;
    height: 48px;
  }

  /* removing time selector window */
  appearance: none;

  -moz-appearance: textfield;
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
`,le=g.Ay.p`
position: absolute;
right: 14px;
bottom: 12px;

font-size: 14px;
line-height: 1.2;
color: #FAFAFA66;
text-transform: uppercase;

@media only screen and (min-width: 768px) {
  font-size: 16px;
  right: 18px;
  bottom: 14px;
  }
`,se=e=>{let{control:t}=e,r=(0,n.d4)(ie.x2);return(0,b.jsx)(a.xI,{name:"sum",control:t,render:e=>{let{field:t}=e;return(0,b.jsxs)(ne,{children:[(0,b.jsxs)(ae,{htmlFor:"sum",children:["Sum",(0,b.jsx)(le,{children:r})]}),(0,b.jsx)(de,{id:"sum",type:"number",placeholder:"Enter the sum",...t})]})}})},ce=g.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media only screen and (min-width: 768px) {
    gap: 8px;
  }
`,pe=g.Ay.label`
  color: #FAFAFA;
  
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  
  display: inline-block;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,xe=g.Ay.textarea`
  padding: 12px 14px;
  resize: none;

  border: 1px solid rgba(250, 250, 250, 0.20);
  border-radius: 12px;

  background-color: transparent;
  color: rgba(250, 250, 250, 0.40);

  outline: none;
  box-sizing: border-box;

  transition: border-color 250ms ease-in-out;

  &:focus {
    border-color: #0EF387;
  }
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444446;
    border-radius: 12px;

    height: 15px;
  }

  @media only screen and (min-width: 768px) {
    padding: 12px 18px;
  }

`,ge=e=>{let{control:t}=e;return(0,b.jsx)(a.xI,{name:"comment",control:t,render:e=>{let{field:t}=e;return(0,b.jsxs)(ce,{children:[(0,b.jsx)(pe,{htmlFor:"comment",children:"Comment"}),(0,b.jsx)(xe,{id:"comment",type:"textarea",rows:"4",placeholder:"Enter the text",...t})]})}})},me=g.Ay.form`
  width: 335px;

  border-radius: 30px;
  background-color: #171719;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 28px 20px;

  margin-bottom: 40px;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 704px;
    padding: 40px 109px;
  }
  @media only screen and (min-width: 1440px) {
    width: 566px;
    padding: 40px;
    height: 600px;

    margin-bottom: 0;

  }

`,he=g.Ay.button`
text-align: center;
color: #0C0D0D;
font-size: 16px;
font-weight: 400;
letter-spacing: -0.02em;

margin-right: auto;
padding: 14px 44px;
border-radius: 40px;
border: none;

background-color: #0EF387;
transition: background-color 250ms ease-in-out;


&:hover {
  background-color: #0EBB69;
}
`,ue=g.Ay.div`
position: relative;
`,ye=g.Ay.p`
position: absolute;
left: 18px;

margin: 0;

font-size: 10px;
font-weight: 400;
color: #E74A3B;
`,be=e=>{var t;let{editData:r,closeModal:d}=e;const c=(0,n.wA)(),{transactionsType:g}=(0,i.g)(),[m,h]=(0,o.useState)(""),[u,y]=(0,o.useState)(r?r.date:""),{control:w,setValue:v,handleSubmit:k,reset:j,formState:{errors:_}}=(0,a.mN)({defaultValues:{type:(null===r||void 0===r?void 0:r.type)||"",time:(null===r||void 0===r?void 0:r.time)||"00:00:00",category:(null===r||void 0===r||null===(t=r.category)||void 0===t?void 0:t.categoryName)||"",sum:(null===r||void 0===r?void 0:r.sum)||"",comment:(null===r||void 0===r?void 0:r.comment)||""},resolver:(0,s.t)(l)}),A={padding:r?"40px":"",width:r?"100%":"",marginBottom:r?"0":""};return(0,b.jsxs)(me,{style:A,autoComplete:"off",onSubmit:k((e=>(e=>{r?(p(e,r.type,m,c,j,r,u),d()):p(e,x(g),m,c,j,void 0,u)})(e))),children:[(0,b.jsx)(f,{control:w,editData:r}),(0,b.jsx)($,{control:w,editData:r,datePiker:y}),(0,b.jsxs)(ue,{children:[(0,b.jsx)(oe,{control:w,setValue:v,setCategoryId:h,type:null===r||void 0===r?void 0:r.type}),_.category&&(0,b.jsx)(ye,{children:_.category.message})]}),(0,b.jsxs)(ue,{children:[(0,b.jsx)(se,{control:w,editData:r}),_.sum&&(0,b.jsx)(ye,{children:"Sum is required"})]}),(0,b.jsxs)(ue,{children:[(0,b.jsx)(ge,{control:w,editData:r}),_.comment&&(0,b.jsx)(ye,{children:_.comment.message})]}),(0,b.jsx)(he,{type:"submit",children:r?"Edit":"Add"})]})}},3054:(e,t,r)=>{r.d(t,{h:()=>h,W:()=>y});r(5043);var o=r(9456),i=r(4513),n=r(2749);const a=function(e){switch(e){case"uah":default:return"\u20b4";case"usd":return"$";case"eur":return"\u20ac"}};var d=r(1529);const l=d.Ay.div`
  background-color: #171719;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  gap: 12px;
  justify-content: left;
  align-items: center;

  @media only screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 23px;
    padding-right: 23px;
    border-radius: 30px;

    gap: 22px;
  }
  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 340px;
  }
  @media only screen and (min-width: 1440px) {
    width: 303px;
    height: 121px;
  }
`,s=d.Ay.div`
  background-color: #0EF387;
  border-radius: 10px;

  width: 36px;
  height: 36px;

  position: relative;

  @media only screen and (min-width: 768px) {
    width: 43px;
    height: 43px;

    border-radius: 13px;
  }
`,c=d.Ay.svg`
  position: absolute;
  top: 9px;
  left: 9px;

  @media only screen and (min-width: 768px) {
    top: 13px;
    left: 13px;
  }
`,p=d.Ay.div`
  height: 41px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* gap: 4px; */

  @media only screen and (min-width: 768px) {
    gap: 15px;
  }
`,x=d.Ay.p`
  color: rgba(250, 250, 250, 0.50);
  text-transform: capitalize;

  font-size: 12px;
  font-weight: 400;

  margin: 0;

    @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,g=d.Ay.p`
  color: #FAFAFA;

  font-size: 18px;
  font-weight: 700;

  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;var m=r(579);const h=()=>{var e;const t=(0,o.d4)(i.mB),r=null===t||void 0===t||null===(e=t.transactionsTotal)||void 0===e?void 0:e.expenses,d=a(t.currency);return(0,m.jsxs)(l,{children:[(0,m.jsx)(s,{children:(0,m.jsx)(c,{width:18,height:18,children:(0,m.jsx)("use",{href:n.A+"#icon-Arrow-DWN"})})}),(0,m.jsxs)(p,{children:[(0,m.jsx)(x,{children:"Total expense"}),(0,m.jsx)(g,{children:`${d}${(()=>{const e=null===r||void 0===r?void 0:r.toString();return(null===e||void 0===e?void 0:e.length)<4?e:null===e||void 0===e?void 0:e.replace(/(\d)(?=(\d{3})+$)/g,"$1.")})()}`})]})]})};var u=r(3078);const y=()=>{var e;const t=(0,o.d4)(i.mB),r=(0,o.d4)(u.Ep);let d=null===t||void 0===t||null===(e=t.transactionsTotal)||void 0===e?void 0:e.incomes,h=a(t.currency);const y={backgroundColor:r?"#171719":"#FAFAFA"},b={color:r?"#FAFAFA80":"#11101C80"},f={color:r?"#FAFAFA":"#11101C"};return(0,m.jsxs)(l,{style:y,children:[(0,m.jsx)(s,{children:(0,m.jsx)(c,{width:18,height:18,children:(0,m.jsx)("use",{href:n.A+"#icon-Arrow-UP"})})}),(0,m.jsxs)(p,{children:[(0,m.jsx)(x,{style:b,children:"Total income"}),(0,m.jsx)(g,{style:f,children:r?`${h}${(()=>{var e;const t=null===(e=d)||void 0===e?void 0:e.toString();return(null===t||void 0===t?void 0:t.length)<4?t:null===t||void 0===t?void 0:t.replace(/(\d)(?=(\d{3})+$)/g,"$1.")})()}`:(r||(h="$",d="12.000"),`${h}${d}`)})]})]})}}}]);
//# sourceMappingURL=973.4f2c91f3.chunk.js.map