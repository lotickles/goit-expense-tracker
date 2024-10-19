"use strict";(self.webpackChunkgoit_expense_tracker=self.webpackChunkgoit_expense_tracker||[]).push([[764],{3020:(e,i,t)=>{t.d(i,{d:()=>u});var r=t(5043),a=t(9456),n=(t(5015),t(9379)),d=t(9940),o=t(1529),p=t(1899),x=t.n(p);const l=(0,o.Ay)(x())`
  padding: 15px 30px;
  width: auto;

  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0.2);

  background-color: transparent;
  color: rgba(250, 250, 250, 0.4);

  outline: none;
  box-sizing: border-box;

  transition: border-color 250ms ease-in-out;

  &:hover {
    border-color: #0ef387;
  }
  &:focus {
    border-color: #0ef387;
  }
`,h=o.Ay.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin: 0 20px;
  margin-bottom: 20px;
  @media (max-width: 767.98px) {
    height: 110px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    margin-left: 32px;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    margin-left: 40px;
  }
`,c=o.Ay.input`
  display: inline-flex;
  width: 100%;
  padding: 15px 30px;
  align-items: center;
  gap: 71px;

  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0);
  background: #0c0d0d;

  color: rgba(250, 250, 250, 0.4);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  outline: none;
  transition: border-color 250ms ease-in-out;

  &:hover {
    border: 1px solid #0ef387;
  }
  &:focus {
    border: 1px solid #0ef387;
  }

  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 1440px) {
  }
`,s=o.Ay.form`
  position: relative;
`,m=o.Ay.svg`
  position: absolute;
  top: 15px;
  right: 30px;
  stroke: #0ef387;
  fill: none;
`,g=o.Ay.div`
  position: relative;
  .react-datepicker-wrapper {
    /* position: absolute;
    bottom: 0; */
    /* height: 36px; */
  }

  .react-datepicker {
    width: 222px;

    padding: 0 14px;
    padding-bottom: 14px;
    box-sizing: border-box;

    border: none;
    background-color: #0ef387;
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
    background-color: #0ef387;
    /* width: 222px; */
    padding: 14px 0;

    box-sizing: border-box;
    margin-bottom: 39px;
    border-color: rgba(12, 13, 13, 0.5);
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: #0c0d0d;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.32px;
  }

  .react-datepicker__navigation,
  .react-datepicker__navigation--next {
    width: 4px;
    height: 8px;
    border-color: #0c0d0d;
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

    color: rgba(12, 13, 13, 0.5);
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

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 18px;
    max-height: 20px;
    margin: 0;

    color: inherit;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.02em;
    transition: transform 250ms ease-in-out;

    &:hover {
      background-color: #0ef387;
      transform: scale(2);
    }
  }

  .react-datepicker__day-name:hover {
    transform: scale(1);
    /* pointer-events: ; */
  }

  /* selected day */
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: #0ef387;
    border-radius: 0;
    border-bottom: 2px solid #0c0d0d;
  }

  /* actual day */
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: #0ef387;
    border-bottom: 2px solid #0c0d0d;
    border-radius: 0;
  }

  /* nav arrow */
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: #0c0d0d;
    width: 6px;
    height: 6px;
  }

  /* from input to form arrow */
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::after {
    border-top-color: #0ef387;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border-bottom-color: #0ef387;
  }
`;var w=t(2749),f=t(579);const u=()=>{const e=(0,a.d4)(n.d),i=(0,a.d4)(n.L),t=(0,a.wA)(),[o,p]=(0,r.useState)(e),[x,u]=(0,r.useState)(new Date);return(0,f.jsxs)(h,{children:[(0,f.jsx)(s,{onSubmit:e=>{e.preventDefault(),t((0,d.R6)(o))},children:(0,f.jsxs)("label",{children:[(0,f.jsx)(c,{placeholder:"Search for anything..",type:"text",value:o,onChange:e=>{p(e.target.value)}}),(0,f.jsx)("button",{type:"submit",children:(0,f.jsx)(m,{width:20,height:20,children:(0,f.jsx)("use",{href:w.A+"#icon-search"})})})]})}),(0,f.jsxs)(g,{children:[(0,f.jsx)(l,{selected:x,value:i,onChange:e=>{if(u(e),e){const i=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();t((0,d.ZE)({year:i,month:r,day:a}))}},dateFormat:"dd/MM/yyyy",placeholderText:"dd/mm/yyyy"}),(0,f.jsx)(m,{width:20,height:20,children:(0,f.jsx)("use",{href:w.A+"#icon-calendar"})})]})]})}},6388:(e,i,t)=>{t.d(i,{W:()=>h});t(5043);var r=t(1529);const a=r.Ay.div`
  display: flex;

  margin-bottom: 32px;
  padding: 20px 0;

  background: rgba(0, 0, 0, 0.2);

  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
  }
`,n=r.Ay.p`
  width: 53px;
  margin: 0 20px 0 20px;
  @media (min-width: 768px) {
    width: auto;
    margin: 0 41px 0 32px;
  }
  @media (min-width: 1440px) {
    margin: 0 89px 0 40px;
  }
`,d=r.Ay.p`
  width: 60px;

  margin-right: 10px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 46px;
  }
  @media (min-width: 1440px) {
    margin-right: 120px;
  }
`,o=r.Ay.p`
  width: 30px;
  margin-right: 36px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 65px;
  }
  @media (min-width: 1440px) {
    margin-right: 163px;
  }
`,p=r.Ay.p`
  width: 30px;
  margin-right: 20px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    margin-right: 99px;
  }
`,x=r.Ay.p`
  width: 30px;
  margin-right: 80px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 102px;
  }
  @media (min-width: 1440px) {
    margin-right: 154px;
  }
`;var l=t(579);const h=()=>(0,l.jsxs)(a,{children:[(0,l.jsx)(n,{children:"Category"}),(0,l.jsx)(d,{children:"Comment"}),(0,l.jsx)(o,{children:"Date"}),(0,l.jsx)(p,{children:"Time"}),(0,l.jsx)(x,{children:"Sum"}),(0,l.jsx)("p",{children:"Actions"})]})},6764:(e,i,t)=>{t.r(i),t.d(i,{default:()=>k});var r=t(5043),a=t(9456),n=t(2145),d=t(3216),o=t(3020),p=t(9379),x=t(607),l=t(6755),h=t(6388),c=t(3054),s=t(3078),m=t(3377),g=t(2749),w=t(9008),f=t(4449),u=t(3752),b=t(9164),y=t(579);const k=()=>{const e=(0,a.wA)(),i=(0,a.d4)(p.d),{isOpened:t,openModal:k,closeModal:_}=(0,u.h)(),[v,j]=(0,r.useState)(""),A=(0,a.d4)(s.Ep),z=(0,a.d4)(l.FB),S=(0,a.d4)(p.L),C=`${S.year}-${String(S.month).padStart(2,"0")}-${String(S.day).padStart(2,"0")}`;(0,r.useEffect)((()=>{e((0,x.CD)({type:"expenses",date:C}))}),[e,i,C,S]);const P=z.filter((e=>e.comment.toLowerCase().trim().includes(i.toLowerCase().trim())));if(!A)return(0,y.jsx)(d.C5,{to:"/login"});return(0,y.jsxs)(m.jn,{children:[(0,y.jsxs)(m.lg,{children:[(0,y.jsxs)(m.qM,{children:[(0,y.jsx)(m.H2,{children:"All Expense"}),(0,y.jsx)(m.PH,{children:"View and manage every transaction seamlessly! Your entire financial landscape, all in one place."})]}),(0,y.jsxs)(m.Av,{children:[(0,y.jsx)(m.LI,{children:(0,y.jsx)(c.W,{})}),(0,y.jsx)(m.LI,{children:(0,y.jsx)(c.h,{})})]})]}),(0,y.jsx)(w.Y,{$variant:"allExpensesList",children:(0,y.jsxs)(m.az,{children:[(0,y.jsx)(o.d,{}),(0,y.jsxs)(m.tc,{children:[(0,y.jsx)(h.W,{}),null!==P&&void 0!==P&&P.length?(0,y.jsx)(m.xL,{children:null===P||void 0===P?void 0:P.map((i=>{var t,r;return(0,y.jsxs)(m.q0,{children:[(0,y.jsx)(m.P1,{children:(r=null===(t=i.category)||void 0===t?void 0:t.categoryName,r||"Deleted Category")}),(0,y.jsx)(m.P2,{children:i.comment}),(0,y.jsx)(m.P3,{children:i.date}),(0,y.jsx)(m.P4,{children:i.time}),(0,y.jsx)(m.P5,{children:i.sum}),(0,y.jsxs)(m.Xi,{onClick:()=>{j(i),k()},children:[(0,y.jsx)("svg",{width:16,height:16,children:(0,y.jsx)("use",{href:g.A+"#icon-edit-2"})}),(0,y.jsx)("span",{children:"Edit"})]}),(0,y.jsxs)(m.Wx,{onClick:()=>{return t=i._id,r=i.comment,e((0,x.SP)(t)),void n.oR.success(`Transaction ${r} was deleted`);var t,r},children:[(0,y.jsx)("svg",{width:16,height:16,children:(0,y.jsx)("use",{href:g.A+"#icon-trash-2"})}),(0,y.jsx)("span",{children:"Delete"})]})]},i._id)}))}):null,i.trim().length>0&&!P.length&&(0,y.jsx)(m.ED,{children:"We couldn't find any transactions matching your request."})]})]})}),t?(0,y.jsx)(f.A,{children:(0,y.jsx)(b.A,{editData:v,closeModal:_}),closeModal:_}):null]})}},3377:(e,i,t)=>{t.d(i,{Av:()=>d,ED:()=>b,H2:()=>x,LI:()=>o,P1:()=>m,P2:()=>g,P3:()=>w,P4:()=>f,P5:()=>u,PH:()=>l,Wx:()=>k,Xi:()=>y,az:()=>c,jn:()=>a,lg:()=>p,q0:()=>s,qM:()=>n,tc:()=>h,xL:()=>_});var r=t(1529);const a=r.Ay.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 80px;
  width: 375px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) and (max-width: 1439.8px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`,n=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 335px;

  @media (min-width: 768px) {
    gap: 15px;
    width: 532px;
  }
  @media (min-width: 1440px) {
    width: 516px;
  }
`,d=r.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
  @media (min-width: 1440px) {
  }
`,o=r.Ay.li`
  width: 335px;
  height: 81px;
  @media (min-width: 768px) {
    width: 340px;
    height: 121px;
  }
  @media (min-width: 1440px) {
    width: 303px;
    height: 121px;
  }
`,p=r.Ay.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
  margin-bottom: 40px;
  margin-top: 66px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    margin-top: 59px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
  }
`,x=r.Ay.h2`
  color: #fafafa;

  font-family: Suisse Intl;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media (min-width: 768px) {
    color: #fafafa;

    font-family: Suisse Intl;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.76px;
  }

  @media (min-width: 1440px) {
    color: #fafafa;

    font-family: Suisse Intl;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.76px;
  }
`,l=r.Ay.p`
  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  @media (min-width: 768px) {
    color: rgba(250, 250, 250, 0.4);

    font-family: Suisse Intl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  @media (min-width: 1440px) {
    color: rgba(250, 250, 250, 0.4);

    font-family: Suisse Intl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`,h=r.Ay.div`
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 767.98px) {
    width: 335px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 121px;

    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
    position: absolute;
    top: 20px;
  }
  &::-webkit-scrollbar-track {
    width: 8px;
    height: 295px;
    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
  }

  @media (min-width: 768px) {
    overflow-x: hidden;
  }
`,c=r.Ay.div`
  width: 335px;
  height: 516px;

  background: #171719;

  padding: 20px 0;
  flex-direction: column;
  border-radius: 30px;
  background: #171719;

  @media (min-width: 768px) {
    overflow-y: hidden;
    overflow-x: hidden;
    width: 704px;
    height: 544px;
    padding: 32px 0;
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    width: 1240px;
    height: 439px;
    padding: 20px 0;
  }
`,s=r.Ay.div`
  display: flex;

  margin-bottom: 14px;
  align-items: center;

  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
  }
`,m=r.Ay.p`
  width: 59px;
  margin: 0 14px 0 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 83px;
    margin: 0 31px 0 32px;
  }
  @media (min-width: 1440px) {
    width: 97px;
    margin: 0 60px 0 40px;
  }
`,g=r.Ay.p`
  width: 56px;
  margin-right: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 89px;
    margin-right: 26px;
  }
  @media (min-width: 1440px) {
    width: 120px;
    margin-right: 74px;
  }
`,w=r.Ay.p`
  width: 56px;
  margin-right: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 74px;
    margin-right: 26px;
  }
  @media (min-width: 1440px) {
    width: 130px;
    margin-right: 70px;
  }
`,f=r.Ay.p`
  width: 38px;
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 52px;
    margin-right: 25px;
  }
  @media (min-width: 1440px) {
    width: 54px;
    margin-right: 84px;
  }
`,u=r.Ay.p`
  width: 90px;
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 96px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    margin-right: 90px;
  }
`,b=r.Ay.p`
  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    font-size: 22px;
    width: auto;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
  }
`,y=r.Ay.button`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;

  background: #0c0d0d;

  border-radius: 40px;
  margin-right: 8px;
  transition: background-color 250ms ease-in-out;

  /* Скрыть текст при ширине экрана до 1440px */
  @media (max-width: 1440px) {
    span {
      display: none;
    }
  }

  stroke: white;
  fill: transparent;
  &:hover {
    stroke: black;
  }

  &:hover {
    background-color: #0ef387;
  }

  @media (min-width: 1440px) {
    padding: 14px 30px;
    gap: 10px;

    color: #fafafa;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;

    span {
      display: inline-block;
    }

    &:hover {
      color: #0c0d0d;
    }
  }
`,k=r.Ay.button`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;

  background: #0c0d0d;

  border-radius: 40px;
  transition: background-color 250ms ease-in-out;

  stroke: white;
  fill: transparent;
  &:hover {
    stroke: black;
  }

  @media (max-width: 1440px) {
    span {
      display: none;
    }
  }

  &:hover {
    background-color: #0ef387;
  }

  @media (min-width: 1440px) {
    padding: 14px 30px;
    gap: 10px;

    color: #fafafa;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    margin-right: 8px;

    span {
      display: inline-block;
    }

    &:hover {
      color: #0c0d0d;
    }
  }
`,_=r.Ay.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 245px;

  &::-webkit-scrollbar {
    width: 8px;
    margin-right: 20px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 150px;
    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    overflow-x: hidden;
    height: 230px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    height: 238px;
    width: 1240px;
    margin-right: 20px;
  }
`},9379:(e,i,t)=>{t.d(i,{L:()=>a,d:()=>r});const r=e=>e.filter.filter,a=e=>e.filter.startDate}}]);
//# sourceMappingURL=764.d9201a72.chunk.js.map