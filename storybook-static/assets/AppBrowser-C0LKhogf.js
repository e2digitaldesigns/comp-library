import{j as i}from"./jsx-runtime-j_jdvEMj.js";import{t as g,d as c}from"./theme-B6mc_J8A.js";import{R as x,r as b}from"./index-B-o1Wr-g.js";import{g as V}from"./_commonjsHelpers-Cpj98o6Y.js";const O=(e,r)=>{switch(r){case"primary":return`
          background-color: ${e.colors.primary};
          color: ${e.colors.white};
        `;case"secondary":return`
          background-color: ${e.colors.secondary};
          color: ${e.colors.white};
        `;case"success":return`
          background-color: ${e.colors.success};
          color: ${e.colors.white};
        `;case"danger":return`
          background-color: ${e.colors.danger};
          color: ${e.colors.white};
        `;case"warning":return`
          background-color: ${e.colors.warning};
          color: ${e.colors.dark};
        `;case"info":return`
          background-color: ${e.colors.info};
          color: ${e.colors.dark};
        `;case"light":return`
          background-color: ${e.colors.light};
          color: ${e.colors.dark};
        `;case"dark":return`
          background-color: ${e.colors.dark};
          color: ${e.colors.light};
        `;case"link":return`
          background-color: transparent;
          color: ${e.colors.primary};
        `;default:return""}},U={primary:{primary:g.colors.primary,secondary:g.colors.white},secondary:{primary:g.colors.secondary,secondary:g.colors.white},success:{primary:g.colors.success,secondary:g.colors.white},danger:{primary:g.colors.danger,secondary:g.colors.white},warning:{primary:g.colors.warning,secondary:g.colors.dark},info:{primary:g.colors.info,secondary:g.colors.dark},light:{primary:g.colors.light,secondary:g.colors.dark},dark:{primary:g.colors.dark,secondary:g.colors.light},link:{primary:"transparent",secondary:g.colors.primary}},G=(e,r)=>e?U[e][r]:g.colors.primary,H=c.button`
  align-items: center;
  border-radius: ${e=>e.roundedCorners?".25rem":"0"};
  border: 0.0625rem solid transparent;
  cursor: pointer;
  display: inline-flex;
  font-weight:400;
  height: 2.25rem;
  justify-content: center;
  outline: none;
  padding:0 1rem;
  transition: filter 0.3s;
  white-space: nowrap;

  ${e=>O(e.theme,e.variant)}
  ${e=>`background-color: ${e.backgroundColor&&e.backgroundColor};`};

  &:hover{
    filter: brightness(1.1);
  }
  `,X=({backgroundColor:e,children:r,roundedCorners:n=!1,variant:t})=>i.jsx(H,{backgroundColor:e,roundedCorners:n,variant:t,children:r});X.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},roundedCorners:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"string"},description:""}}};const Y=c.div`
  display: inline-flex;
  border-radius: 1.125rem;
  height: 2.25rem;
  padding:0 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  transition: filter 0.3s;

  ${e=>O(e.theme,e.variant)}
  ${e=>`background-color: ${e.backgroundColor&&e.backgroundColor};`};

  &:hover{
    filter: brightness(1.1);
  }
  `,K=({backgroundColor:e,children:r,variant:n})=>i.jsx(Y,{variant:n,backgroundColor:e,children:r});K.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "success"\r
| "danger"\r
| "warning"\r
| "info"\r
| "light"\r
| "dark"\r
| "link"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"link"'}]},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const J=c.div`
  display: inline-flex;
  border-radius: 1.125rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  ${e=>O(e.theme,e.variant)}
  background-color: transparent;

> div{
  border-radius: 0;
}`,Q=({backgroundColor:e,children:r,variant:n})=>i.jsx(J,{variant:n,backgroundColor:e,children:r});Q.__docgenInfo={description:"",methods:[],displayName:"PillGroup",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "success"\r
| "danger"\r
| "warning"\r
| "info"\r
| "light"\r
| "dark"\r
| "link"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"link"'}]},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Z=c.div`
  width: 100%;

  input[type="range"] {
    -webkit-appearance: none;
    background: ${e=>T(e.backgroundColor,e.variant,"primary")};
    border-radius: .25rem;  
    display: block;
    height: ${e=>e.roundThumb?"4px":"12px"};
    opacity: 0.7;
    outline: none;
    transition: opacity .2s;
    width: 100%;
    /* background-image:  ${e=>`linear-gradient( to right, violet ${e.value}%, indigo ${e.value}%)`}; */

      &:hover {
        opacity: 1; /* Fully shown on mouse-over */
      }


      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        background: ${e=>T(e.thumbColor,e.variant,"secondary")};
        border-radius: ${e=>e.roundThumb?"50%":"0"};
        cursor: pointer;
        height: ${e=>e.roundThumb?"1rem":"100%"};
        width: 1rem;
      }


      &::-moz-range-thumb {
        background: ${e=>T(e.thumbColor,e.variant,"secondary")};
        border-radius: ${e=>e.roundThumb?"50%":"0"};
        cursor: pointer;
        height: ${e=>e.roundThumb?"1.5rem":"100%"};
        width: 1.5rem;
    }
  }
`;function T(e,r,n){return e||G(r,n)}const ee=({backgroundColor:e,max:r=100,min:n=0,roundThumb:t=!0,thumbColor:o="blue",value:a=25,variant:p})=>{const[k,y]=x.useState(a);return i.jsx(Z,{variant:p,backgroundColor:e,roundThumb:t,thumbColor:o,value:k,onChange:f=>y(parseInt(f.target.value)),children:i.jsx("input",{type:"range",min:n,max:r,value:k})})};ee.__docgenInfo={description:"",methods:[],displayName:"RangeSlider",props:{max:{defaultValue:{value:"100",computed:!1},required:!1},min:{defaultValue:{value:"0",computed:!1},required:!1},roundThumb:{defaultValue:{value:"true",computed:!1},required:!1},thumbColor:{defaultValue:{value:'"blue"',computed:!1},required:!1},value:{defaultValue:{value:"25",computed:!1},required:!1}}};const re=c.div`
height: 0;
width: 0;
overflow: hidden;
pointer-events: none;
    display: none;
    `,ne=c.div`
    align-items: center;
    border: 0.0625rem dashed ${e=>e.theme.colors.gray};
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    height: 10rem;
    justify-content: center;
    margin: 0.5rem 0;
    padding: 1rem;
    text-align: center;
    width: 400px;
    position: relative;
    `,te=c.button`
    background-color: blue;
    border: none;
    border-radius: 0.25rem;
    color: ${e=>e.theme.colors.white};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    `,oe=c.div`
display: flex;
flex-direction: column;
margin: 0.5rem 0;
border: 1px dashed #bbb;
padding: .5rem;

> div: nth-child(1) {
    font-family: inherit;
    font-size: 14px;
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
};

> div: nth-child(2) {
    font-size: 12px;
};

> div: nth-child(3) {
    font-size: 12px;
};
`;c.div`
width: 100%;
height: 60px;
overflow: hidden;


> img {
    width: 100%;
    object-fit: cover
}
`;const ae=c.div`
width: 100%;
height: 5px;
background-color: #ddd;
margin-top: 5px;
overflow: hidden;
border: 1px solid #ddd;
> div {
    width: ${e=>e.$progress}%;
    height: 100%;
    background-color: blue;
    transition: width 0.3s ease;
}
`,ie=({allowTypes:e=["image/png","image/webp","image/jpeg"],fileSizeLimit:r=25e6,multiple:n=!0})=>{const t=b.useRef(null),o=b.useRef(null),[a,p]=b.useState([]);b.useEffect(()=>{const l=o.current;l&&(l.addEventListener("dragover",u=>{u.preventDefault(),l.style.border="0.0625rem dashed blue"}),l.addEventListener("dragleave",()=>{l.style.border="0.0625rem dashed gray"}),l.addEventListener("drop",u=>{var d;u.preventDefault(),l.style.border="0.0625rem dashed gray",y((d=u.dataTransfer)==null?void 0:d.files)}))},[]);const k=l=>{y(l.target.files||void 0)},y=async l=>{if(!l)return;const u=n?Array.from(l):[l[0]],w=Array.from(u).map(s=>({_id:le(),completed:!1,progress:0,file:s})).filter(s=>e&&!e.includes(s.file.type)?(console.error("Invalid file type"),!1):s.file.size>r*1024?(console.error("File size too large"),!1):a.some(h=>h.file.name===s.file.name)?(console.error("File already added"),!1):!0);p([...a,...w])};x.useEffect(()=>{console.log(91),f()},[a]);const f=()=>{console.log(92);const l=new FormData,u=a.filter(d=>d.progress===0);u.forEach(d=>l.append("files",d.file)),u.forEach(d=>$(l,d))},$=(l,u)=>{const d=new XMLHttpRequest;d.open("POST","http://localhost:8008/api/v1/fileUploading",!0),d.upload.addEventListener("progress",w=>{if(w.lengthComputable){const s=w.loaded/w.total*100;console.log(`Progress for ${u.file.name}: ${s.toFixed(2)}%`),p(h=>h.map(j=>j._id===u._id?{...j,progress:s}:j)),s>=100&&p(h=>h.map(j=>j._id===u._id?{...j,completed:!0}:j))}}),d.onload=()=>{d.status===200?console.log(`File ${u.file.name} uploaded successfully`):console.error(`Error uploading ${u.file.name}: ${d.statusText}`)},d.onerror=()=>{console.error("Upload failed. Please try again.")},d.send(l)};return i.jsxs(i.Fragment,{children:[i.jsx(re,{children:i.jsx("input",{accept:e.join(","),multiple:n,onChange:k,ref:t,type:"file"})}),i.jsx(ne,{ref:o,onClick:()=>{var l;return(l=t.current)==null?void 0:l.click()},children:"Upload"}),i.jsx(te,{onClick:()=>{var l;return(l=t.current)==null?void 0:l.click()},children:"Choose File"}),a.map(l=>i.jsxs(oe,{children:[i.jsx("div",{children:l.file.name}),i.jsx("div",{children:se(l.file.size)}),i.jsx("div",{children:"Ready to upload"}),i.jsx(ae,{$progress:l.progress,children:i.jsx("div",{})})]},l.file.name))]})};function se(e){const r=["Bytes","KB","MB","GB","TB"];if(e===0)return"0 Bytes";const n=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,n)).toFixed(2)} ${r[n]}`}function le(){return Math.random().toString(36).substr(2,9)}ie.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{allowTypes:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:'["image/png", "image/webp", "image/jpeg"]',computed:!1}},fileSizeLimit:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"25000000",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const B="#cfcfcf",de=c.div`
     padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 640px;
    border: 1px solid ${B};
    border-radius: .5rem;
    backdrop-filter: blur(14px);
    background-color: rgba(200, 200, 200, 0.2);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    overflow: hidden;
    box-sizing: border-box;


    * {
        box-sizing: border-box;
    }
`,ce=c.div`
    background-color: #fff;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: 2.5rem;
    margin: 0 2rem;
    position: relative;
    width: calc(100% - 5rem);
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, 
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border: 1px solid #ddd;

    >div:first-of-type {
        align-items: center;
        display: flex;
        font-size: 1.25rem;
        height: 2.5rem;
        justify-content: center;
        position: absolute;
        width: 2.5rem;
        margin-left: 0.5rem;

        > svg{
        height: 1rem;
        width: 1rem;
       }
    }

    >input{
        border: none;
        outline: none;
        background-color: transparent;
        height: 100%;
        padding: .125rem 0 0 3rem;
        width: calc(100% - 2.5rem);
    }
`,pe=c.div`
    width:calc(100% - 4rem);
    position: absolute;
    top: 2.5rem;
    left: 2rem;
    z-index: 10;
`,ue=c.div`
    display: flex;
    gap: .25rem;
    padding: .5rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    gap: 1rem;

    &:hover {
        background-color: #f3f3f3;
    }

    >div:first-of-type {
        height: 1.25rem;
        width: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
            width: 100%;
        }
    },

    >div:last-of-type {
        font-size: .75rem;
        display: flex;
        align-items: center;
    }
`,me=c.div`
    display: grid;
    flex-direction: column;
    height: 280px;
    margin: 0 2rem;
    padding: .5rem;
    width: calc(100% - 4rem);
    grid-template-rows: 2rem 1fr 1.5rem;
    `,ge=c.div`
    display: flex;
    align-items: center;
    margin: 0 1rem;
    gap: .75rem;
`,fe=c.button`
    cursor: pointer;
    font-size: .75rem;
    text-align: center;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    outline: none;
    padding: 0 .25rem;

    font-weight: ${({$isActive:e})=>e?"bold":"normal"};

    &:focus {
        border-bottom: 2px solid rgb(0, 0, 0, 0.15);
    }
`,he=c.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 100px;
    grid-gap: .5rem;
    height: 100%;
    overflow: hidden;
    padding: 1rem;
`,be=c.button`
    background-color: rgb(225,225,225,20%);
    border: 1px dashed transparent;
    outline: none;
    border-radius: 0.25rem;
    display: grid;
    gap: .25rem;
    grid-template-rows: 2.5rem 1fr;
    justify-content: center;
    align-items: center;
    height: 85px;
    width: 100%;
    cursor: pointer;    
    padding: .5rem;

    &:hover {
        background-color: #fff; 
    },

    &:focus {
        border: 1px dashed rgb(0, 0, 0, 0.15);
    }

    >div:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        img {
            height: 2.5rem;
            width: 2.5rem;
        }
    }

    >div:last-of-type {
        height: 100%;
        font-size: .675rem;
        text-align: center;
        line-height: .875rem;
    }
`,ye=c.div`
    margin: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
`,ve=c.button`
width: .625rem;
height: .625rem;
border-radius: 2px;
background-color: ${({$isActive:e})=>"#bbb"};
border: none;
cursor: pointer;
outline: none;
`,xe=c.div`
   border-top: 1px solid ${B};
   height:4rem;
   background-color: #ededed;
`,we=c.div`
   display:flex;
   margin: .5rem 2rem;
   padding: .5rem;
   justify-content: space-between;
`,ke=c.button`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    border-radius: .25rem;
    outline: none;
    border: 1px dashed transparent;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s;
    padding: .25rem .5rem;
    gap: .5rem;
    font-size: .75rem;
    &:focus {
        border: 1px dashed rgb(0, 0, 0, 0.15);
    }


    &:hover {
        background-color: #e3e3e3;
    }

    > div:nth-of-type(1) {

    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;

    > svg{
        height: 1rem;
        width: 1rem;
    }

    }
`,je=c.button`
    border: 1px dashed transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: .25rem;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s;

    &:hover {
        background-color: #e3e3e3;
    }

    &:focus {
        border: 1px dashed rgb(0, 0, 0, 0.15);
    }
   
    > svg{
        height: 1rem;
        width: 1rem;
    }

    `,m="https://icon-codes.s3.us-east-1.amazonaws.com/app-browser/",$e=[{name:"C#",image:m+"c-sharp.png",internal:!0,pinned:!1},{name:"Gaming",image:m+"game-folder.png",internal:!0,pinned:!1},{name:"MS 365",image:m+"365.png",internal:!1,pinned:!1},{name:"MS Excel",image:m+"excel.png",internal:!1,pinned:!0},{name:"MS Power Point",image:m+"power-point.png",internal:!1,pinned:!1},{name:"MS Word",image:m+"word.png",internal:!1,pinned:!0},{name:"Norton",image:m+"virus.png",internal:!0,pinned:!1},{name:"Permissions",image:m+"secure-wifi.png",internal:!0,pinned:!1},{name:"Programming",image:m+"programming.png",internal:!0,pinned:!0},{name:"_C#",image:m+"c-sharp.png",internal:!0,pinned:!1},{name:"_Gaming",image:m+"game-folder.png",internal:!0,pinned:!1},{name:"_MS 365",image:m+"365.png",internal:!1,pinned:!1},{name:"_MS Excel",image:m+"excel.png",internal:!1,pinned:!0},{name:"_MS Power Point",image:m+"power-point.png",internal:!1,pinned:!1},{name:"_MS Word",image:m+"word.png",internal:!1,pinned:!0},{name:"_Norton",image:m+"virus.png",internal:!0,pinned:!1},{name:"_Permissions",image:m+"secure-wifi.png",internal:!0,pinned:!1},{name:"_Programming",image:m+"programming.png",internal:!0,pinned:!0}];var q={exports:{}},Pe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Te=Pe,_e=Te;function M(){}function N(){}N.resetWarningCache=M;var Se=function(){function e(t,o,a,p,k,y){if(y!==_e){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:N,resetWarningCache:M};return n.PropTypes=n,n};q.exports=Se();var Ce=q.exports;const v=V(Ce);function S(){return S=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},S.apply(this,arguments)}function Re(e,r){if(e==null)return{};var n=Oe(e,r),t,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function Oe(e,r){if(e==null)return{};var n={},t=Object.keys(e),o,a;for(a=0;a<t.length;a++)o=t[a],!(r.indexOf(o)>=0)&&(n[o]=e[o]);return n}var z=b.forwardRef(function(e,r){var n=e.color,t=n===void 0?"currentColor":n,o=e.size,a=o===void 0?24:o,p=Re(e,["color","size"]);return x.createElement("svg",S({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),x.createElement("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),x.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"12"}))});z.propTypes={color:v.string,size:v.oneOfType([v.string,v.number])};z.displayName="Power";function C(){return C=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},C.apply(this,arguments)}function ze(e,r){if(e==null)return{};var n=Ee(e,r),t,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function Ee(e,r){if(e==null)return{};var n={},t=Object.keys(e),o,a;for(a=0;a<t.length;a++)o=t[a],!(r.indexOf(o)>=0)&&(n[o]=e[o]);return n}var E=b.forwardRef(function(e,r){var n=e.color,t=n===void 0?"currentColor":n,o=e.size,a=o===void 0?24:o,p=ze(e,["color","size"]);return x.createElement("svg",C({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),x.createElement("circle",{cx:"11",cy:"11",r:"8"}),x.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});E.propTypes={color:v.string,size:v.oneOfType([v.string,v.number])};E.displayName="Search";function R(){return R=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},R.apply(this,arguments)}function Fe(e,r){if(e==null)return{};var n=Le(e,r),t,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function Le(e,r){if(e==null)return{};var n={},t=Object.keys(e),o,a;for(a=0;a<t.length;a++)o=t[a],!(r.indexOf(o)>=0)&&(n[o]=e[o]);return n}var F=b.forwardRef(function(e,r){var n=e.color,t=n===void 0?"currentColor":n,o=e.size,a=o===void 0?24:o,p=Fe(e,["color","size"]);return x.createElement("svg",R({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),x.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),x.createElement("circle",{cx:"12",cy:"7",r:"4"}))});F.propTypes={color:v.string,size:v.oneOfType([v.string,v.number])};F.displayName="User";const _=12,I=5,Ae=(e,r,n,t,o)=>b.useMemo(()=>{const a=n.toLowerCase(),p=[...e].sort((d,w)=>d.name.localeCompare(w.name)),y=(r==="Pinned"?p.filter(d=>d.pinned):r==="All"?p:p.filter(d=>d.internal===(r==="Internal"))).filter(d=>d.name.toLowerCase().includes(a)),f=Math.ceil(y.length/_),$=y.slice((t-1)*_,t*_),l=o>I?I:o,u=n?y.slice(0,l):[];return{filteredResults:$,totalPages:f,typeAheadData:u}},[e,r,n,t,o]);var D=(e=>(e.Pinned="Pinned",e.Internal="Internal",e.External="External",e.All="All",e))(D||{});const We=({typeAheadResults:e=3})=>{const[r,n]=b.useState(""),[t,o]=b.useState("All"),[a,p]=b.useState(1),[k,y]=b.useState(!1),f=b.useRef(null);b.useEffect(()=>{var L,A,W;const s=P=>{P.preventDefault(),y(!0)},h=P=>{P.preventDefault(),y(!1)};Array.from(((L=f.current)==null?void 0:L.childNodes)||[]).push(f.current),(A=f.current)==null||A.addEventListener("focus",s),(W=f.current)==null||W.addEventListener("blur",h)},[]);const{filteredResults:$,typeAheadData:l,totalPages:u}=Ae($e,t,r,a,e),d=s=>{p(1),n(s)},w=s=>{o(s)};return i.jsxs(de,{children:[i.jsxs(ce,{children:[i.jsx("div",{children:i.jsx(E,{})}),i.jsx("input",{"aria-label":"Search for apps",type:"text",placeholder:"Search for apps",onChange:s=>d(s.target.value),ref:f}),i.jsx(pe,{children:k&&l.map(s=>i.jsxs(ue,{"aria-label":`Choose app: ${s.image}`,children:[i.jsx("div",{children:i.jsx("img",{src:s.image,alt:s.name})}),i.jsx("div",{children:s.name})]},s.name))})]}),i.jsxs(me,{children:[i.jsx(ge,{children:Object.values(D).map(s=>i.jsx(fe,{"aria-label":`Filter apps by ${s}`,$isActive:t===s,onClick:()=>w(s),children:s},s))}),i.jsx(he,{children:$.map((s,h)=>i.jsxs(be,{"aria-label":`Choose app: ${s.image}`,children:[i.jsx("div",{children:i.jsx("img",{src:s.image,alt:s.name})}),i.jsx("div",{children:s.name})]},h))}),i.jsx(ye,{children:Array.from({length:u}).map((s,h)=>i.jsx(ve,{"aria-label":`Go to page ${h+1}`,$isActive:h===0,onClick:()=>p(h+1)},h))})]}),i.jsx(xe,{children:i.jsxs(we,{children:[i.jsxs(ke,{"aria-label":"Open user profile",children:[i.jsx("div",{children:i.jsx(F,{})}),i.jsx("div",{children:"Casana Bey"})]}),i.jsx(je,{"aria-label":"Logout",children:i.jsx(z,{})})]})})]})};We.__docgenInfo={description:"",methods:[],displayName:"AppBrowser",props:{typeAheadResults:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}};export{We as A,X as B,ie as F,Q as P,ee as R,K as a};
