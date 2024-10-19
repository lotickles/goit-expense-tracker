"use strict";(self.webpackChunkgoit_expense_tracker=self.webpackChunkgoit_expense_tracker||[]).push([[9],{1009:(e,i,n)=>{n.r(i),n.d(i,{default:()=>S});var t=n(5043),a=n(5237),o=n(9456),d=n(3078),r=n(3054),l=n(9164),p=n(6058),x=n(461),s=n(4080),c=n.n(s),h=n(6755),m=n(1529);const g=m.Ay.div`
  width: 335px;
  height: 471px;
  padding: 28px 22px 0 21px;
  border-radius: 30px;
  background: #171719;
  color: rgba(250, 250, 250, 0.5);

  @media only screen and ((min-width: 768px) and (max-width:1439.98px)) {
    width: 704px;
    height: 302px;
    display: flex;
    flex-direction: column;
    gap: 37px;
  }

  @media only screen and (min-width: 1440px) {
    width: 630px;
    height: 302px;
    display: flex;
    flex-direction: column;
    gap: 37px;
    padding: 40px 40px 0 40px;
  }
`,f=(m.Ay.p`
  margin-bottom: 55px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    color: rgba(250, 250, 250, 0.5);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,m.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media only screen and ((min-width: 768px) and (max-width:1439.98px)) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 40px;
  }
`),w=m.Ay.div`
  width: 292px;
  height: 142px;
`,u=m.Ay.div`
  width: 292px;
  max-height: 126px;

  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-color: #444446 #0c0d0d;

  & ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 64px;
    border-radius: 12px;
    background-color: #0c0d0d;
  }
  & ::-webkit-scrollbar-track {
    width: 6px;
    height: 126px;
    border-radius: 12px;
    background-color: #444446;
  }

  @media only screen and (min-width: 1440px) {
    width: 217px;
  }
`,y=m.Ay.ul`
  width: 230px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  list-style-type: none;
  padding-left: 20px;
  padding-right: 20px;
`,j=m.Ay.li`
  width: 269px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 8px;

  & ::before {
    content: '•';
    color: ${e=>e.color||"black"};
    font-size: 30px;
    position: absolute;
    top: -10px;
    left: -10px;
  }

  & p {
    color: rgba(250, 250, 250, 0.5);
    font-family: Suisse Intl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & p:last-child {
    margin-right: 20px;
    margin-left: auto;
    color: #fafafa;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media only screen and ((min-width: 768px) and (max-width:1439.98px)) {
    width: 269px;
  }

  @media only screen and (min-width: 1440px) {
    width: 191px;
  }
`,v=m.Ay.p`
  font-size: 16px;
  margin-top: 140px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 40px;
  }
`;var b=n(579);x.t1.register(x.Bs,x.m_,x.s$);const A=()=>{const e=(0,t.useRef)(null),i=(0,o.d4)(h.FB),n=(0,o.wA)(),[a,d]=(0,t.useState)(0),[r,l]=(0,t.useState)(null);(0,t.useEffect)((()=>{!function(e){if(e){const i={};e.forEach((n=>{var t;const a=null===(t=n.category)||void 0===t?void 0:t.categoryName;a&&(i[a]?i[a]+=n.sum:i[a]=n.sum);const o=e.reduce(((e,i)=>e+i.sum),0),r=Object.keys(i).map((e=>({category:{categoryName:e},sum:i[e],percentage:(i[e]/o*100).toFixed(2),color:c()()})));l(r),d(o)}))}}(i)}),[n,i]);return(0,b.jsxs)(g,{children:[(0,b.jsx)("h2",{children:"Expenses categories"}),!(null!==r&&void 0!==r&&r.length)&&(0,b.jsx)(v,{children:'Add at least 1 expense to see "doughnut" chart here\ud83d\udcca'}),(0,b.jsxs)(f,{children:[(0,b.jsx)(w,{children:(0,b.jsx)(p.nu,{data:{labels:[],datasets:[{data:null===r||void 0===r?void 0:r.map((e=>e.sum)),backgroundColor:null===r||void 0===r?void 0:r.map((e=>e.color)),borderWidth:0}]},options:{hoverOffset:[20],rotation:[-90],circumference:[180],maintainAspectRatio:!1,width:[280],height:[140],onHover:(i,n)=>(i=>{if(i.length>0){const n=i[0].index;if(e.current){const i=e.current.querySelector(`[data-id="${n}"]`);i&&i.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}})(n)}})}),(0,b.jsx)(u,{ref:e,children:(0,b.jsx)(y,{children:null===r||void 0===r?void 0:r.map(((e,i)=>{var n;return(0,b.jsxs)(j,{"data-id":i,color:e.color,children:[(0,b.jsx)("p",{children:null===(n=e.category)||void 0===n?void 0:n.categoryName}),(0,b.jsx)("p",{children:`${(e.sum/a*100).toFixed(2)}%`})]},i)}))})})]})]})},k=m.Ay.section`
  width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 80px;
  margin-right: auto;
  margin-left: auto;

  margin-top: 66px;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 80px;
    margin-top: 59px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;

    display: flex;
    gap: 44px;
    margin-top: 59px;
  }
`,z=m.Ay.div`
  width: 335px;
  margin-bottom: 40px;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 500px;
  }

  @media only screen and (min-width: 1440px) {
    width: 630px;
  }
`,$=m.Ay.h1`
  margin-bottom: 20px;

  color: #fafafa;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -0.02em;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    margin-bottom: 15px;

    font-size: 38px;
  }
`,C=m.Ay.p`
  color: rgba(250, 250, 250, 0.4);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02em;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1440px) {
    width: 570px;
  }
`,E=m.Ay.ul`
  width: 335px;
  padding: 0;

  display: flex;
  gap: 12px;
  flex-direction: column;

  list-style: none;

  margin-bottom: 40px;

  @media only screen and ((min-width: 768px) and ( max-width: 1439.98px)) {
    width: 701px;

    flex-direction: row;

    gap: 0;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1440px) {
    width: 630px;

    gap: 24px;
    flex-direction: row;
  }
`,F=m.Ay.main`
  width: 630px;
  width: 335px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: flex-end;

    gap: 0px;
  }
`,Y=m.Ay.div`
  width: 630px;
`;var D=n(607),N=n(3216),_=n(9008);const S=()=>{const e=(0,a.useMediaQuery)({query:"(max-width: 1439.98px"}),i=(0,a.useMediaQuery)({query:"(min-width: 1440px)"}),n=(0,o.d4)(d.Ep),p=(0,o.wA)();return(0,t.useEffect)((()=>{n&&p((0,D.CD)({type:"expenses"}))}),[p,n]),n?(0,b.jsxs)(k,{children:[e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_.Y,{$variant:"mainTransactionsHeaderNotDesktop",children:(0,b.jsxs)(z,{children:[(0,b.jsx)($,{children:"Expense log"}),(0,b.jsx)(C,{children:"Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips."})]})}),(0,b.jsx)(_.Y,{$variant:"mainTransactionsListNotDesktop",children:(0,b.jsxs)(E,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(r.W,{})}),(0,b.jsx)("li",{children:(0,b.jsx)(r.h,{})})]})}),(0,b.jsx)(_.Y,{$variant:"operationForm",children:(0,b.jsx)(l.A,{editData:null})}),(0,b.jsx)(_.Y,{$variant:"doughnut",children:(0,b.jsx)(F,{children:(0,b.jsx)(A,{})})})]}),i&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_.Y,{$variant:"mainTransactionsInfoDesktop",children:(0,b.jsxs)(Y,{children:[(0,b.jsxs)(z,{children:[(0,b.jsx)($,{children:"Expense log"}),(0,b.jsx)(C,{children:"Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips."})]}),(0,b.jsxs)(E,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(r.W,{})}),(0,b.jsx)("li",{children:(0,b.jsx)(r.h,{})})]}),(0,b.jsx)(F,{children:(0,b.jsx)(A,{})})]})}),(0,b.jsx)(_.Y,{$variant:"operationForm",children:(0,b.jsx)(l.A,{})})]})]}):(0,b.jsx)(N.C5,{to:"/login"})}}}]);
//# sourceMappingURL=9.aab435eb.chunk.js.map