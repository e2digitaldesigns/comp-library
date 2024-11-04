import{j as t}from"./jsx-runtime-j_jdvEMj.js";import{f as e,o as s,t as r}from"./theme-B6mc_J8A.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i=e`
  /* Reset some basic styles */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Set body defaults */
  body {
    font-family: ${({theme:o})=>o.fonts.body};
    background-color: ${({theme:o})=>o.colors.background};
    color: ${({theme:o})=>o.colors.text};
    line-height: 1.6;
    font-size: ${({theme:o})=>o.fontSizes.medium};
  }

  /* Global link styles */
  a {
    text-decoration: none;
  }


`,a=o=>t.jsxs(s,{theme:r,children:[t.jsx(i,{}),t.jsx("div",{style:{width:"800px"},children:t.jsx(o,{})})]}),m={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[a]};export{m as default};
