---
title: Css 常用样式
date: 2019-12-03
tags:
 - Css
categories:
 - css
---

##   pc-reset PC样式初始化
```css
/* normalize.css */

html {
  line-height: 1.15;
  /* 1 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

body {
  margin: 0;
}

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

figcaption,
figure,
main {
  /* 1 */
  display: block;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
}

pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

a {
  background-color: transparent;
  /* 1 */
  -webkit-text-decoration-skip: objects;
  /* 2 */
}

abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */
}

b,
strong {
  font-weight: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

dfn {
  font-style: italic;
}

mark {
  background-color: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

img {
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */
}

button,
input {
  /* 1 */
  overflow: visible;
}

button,
select {
  /* 1 */
  text-transform: none;
}

button,
html [type="button"],

/* 1 */

[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  /* 2 */
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */
}

progress {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

 ::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

details,

/* 1 */

menu {
  display: block;
}

summary {
  display: list-item;
}

canvas {
  display: inline-block;
}

template {
  display: none;
}

[hidden] {
  display: none;
}


/* reset */

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
dl,
dt,
dd,
ul,
ol,
li,
p,
blockquote,
pre,
hr,
figure,
table,
caption,
th,
td,
form,
fieldset,
legend,
input,
button,
textarea,
menu {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
## :bookmark:Phone-reset
```css
/* normalize.css */

html {
  line-height: 1.15;
  /* 1 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

body {
  margin: 0;
}

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

figcaption,
figure,
main {
  /* 1 */
  display: block;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
}

pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

a {
  background-color: transparent;
  /* 1 */
  -webkit-text-decoration-skip: objects;
  /* 2 */
}

abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */
}

b,
strong {
  font-weight: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

dfn {
  font-style: italic;
}

mark {
  background-color: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

img {
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */
}

button,
input {
  /* 1 */
  overflow: visible;
}

button,
select {
  /* 1 */
  text-transform: none;
}

button,
html [type="button"],

/* 1 */

[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  /* 2 */
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */
}

progress {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

 ::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

details,

/* 1 */

menu {
  display: block;
}

summary {
  display: list-item;
}

canvas {
  display: inline-block;
}

template {
  display: none;
}

[hidden] {
  display: none;
}


/* reset */

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
dl,
dt,
dd,
ul,
ol,
li,
p,
blockquote,
pre,
hr,
figure,
table,
caption,
th,
td,
form,
fieldset,
legend,
input,
button,
textarea,
menu {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  /* 禁止选中文本 */
  -webkit-user-select: none;
  user-select: none;
  font: Oswald, 'Open Sans', Helvetica, Arial, sans-serif
}


/* 禁止长按链接与图片弹出菜单 */

a,
img {
  -webkit-touch-callout: none;
}


/*ios android去除自带阴影的样式*/

a,
input {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

input[type="text"] {
  -webkit-appearance: none;
}
```
##  公共样式提取
```css
/* 禁止选中文本 */
.usn{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    -o-user-select:none;
    user-select:none;
}
/* 浮动 */
.fl { float: left; }
.fr { float: right; }
.cf { zoom: 1; }
.cf:after {
    content:".";
    display:block;
    clear:both;
    visibility:hidden;
    height:0;
    overflow:hidden;
}

/* 元素类型 */
.db { display: block; }
.dn { display: none; }
.di { display: inline }
.dib {display: inline-block;}
.transparent { opacity: 0 }


/*文字排版、颜色*/
.f12 { font-size:12px }
.f14 { font-size:14px }
.f16 { font-size:16px }
.f18 { font-size:18px }
.f20 { font-size:20px }
.fb { font-weight:bold }
.fn { font-weight:normal }
.t2 { text-indent:2em }
.red,a.red { color:#cc0031 }
.darkblue,a.darkblue { color:#039 }
.gray,a.gray { color:#878787 }
.lh150 { line-height:150% }
.lh180 { line-height:180% }
.lh200 { line-height:200% }
.unl { text-decoration:underline; }
.no_unl { text-decoration:none; }
.tl { text-align: left; }
.tc { text-align: center; }
.tr { text-align: right; }
.tj { text-align: justify; text-justify: inter-ideograph; }
.wn { /* 强制不换行 */
    word-wrap:normal;
    white-space:nowrap;
}
.wb { /* 强制换行 */
    white-space:normal;
    word-wrap:break-word;
    word-break:break-all;
}
.wp { /* 保持空白序列*/
    overflow:hidden;text-align:left;white-space:pre-wrap;word-wrap:break-word;word-break:break-all;
}
.wes { /* 多出部分用省略号表示 , 用于一行 */
    overflow:hidden;
    word-wrap:normal;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.wes-2 { /* 适用于webkit内核和移动端 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
} 
.wes-3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.wes-4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
}

/* 溢出样式 */
.ofh { overflow: hidden; }
.ofs {overflow: scroll; }
.ofa {overflow: auto; }
.ofv {overflow: visible; }

/* 定位方式 */
.ps {position: static; }
.pr {position: relative;zoom:1; }
.pa {position: absolute; }
.pf {position: fixed; }


/* 垂直对齐方式 */
.vt {vertical-align: top; }
.vm {vertical-align: middle; }
.vb {vertical-align: bottom; }


/* 鼠标样式 */
.csd {cursor: default; }
.csp {cursor: pointer; }
.csh {cursor: help; }
.csm {cursor: move; }

/* flex布局 */
.df-sb {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.df-sa {
    display:flex;
    align-items: center;
    justify-content: space-around;
}

/* 垂直居中 */
.df-c {
    display: flex;
    align-items: center;
    justify-content: center;
}
.tb-c {
    text-align:center;
    display:table-cell;
    vertical-align:middle;
}
.ts-c {
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
}
.ts-mc {
    position: absolute;
    left: 0;right: 0;
    bottom: 0; top: 0;
    margin: auto;
}

/* 辅助 */
.mask-fixed-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;top:0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 999;
}
.bg-cover {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.bg-cover-all {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
}
```

## 常用样式块
```html
<style>
    cursor: pointer;
</style>
```
::: tip STOP
以上都是经常用到一些CSS的代码块
:::   

