---
title: CSS 的常用属性速查表
date: 2020-10-15
categories:
  - Css
tags:
  - css
---

# CSS 的常用属性速查表

> 要想写出优美的 CSS 作品，想象力固然很重要，然而基础也是不可忽略的。

- 常用分类：
  > **选择-定位-布局-盒模型-字体-背景-动画-其他**

## Selectors

### Type

元素本身，`p`

### Class

类，`p.class`

### ID

id，`p#id`

### Descendant

后代，`ul li`

### Attribute

属性，`input[type="checkbox"]`

### Sibling

相邻元素，`input ~ label`

### Univarsal

全选，`*`

### Pseudo-class

伪类，用于选择特定状态下的元素

#### :hover

鼠标悬浮状态

#### :focus

元素本身获得焦点

#### :focus-within

元素本身及子元素获得焦点

#### :nth-child

第 n 个子元素

#### :not

不处于某个状态

#### :target

URL 的锚点

#### :checked

单/复选框开关`on`的状态

#### :disabled

禁用状态

#### :valid

校验通过状

#### :invalid

校验不通过状态

#### :placeholder-shown

输入框有占位符时的情况（也就是用户还未输入时的情况）

#### :empty

空标签元素

常用场景：字段缺失、ajax 加载数据为空

### Pseudo-element

伪元素，在原先的元素基础上插入额外的元素，并且它不充当 HTML 的标签

#### ::before | ::after

标签的额外 2 个可绘制的元素

#### ::selection

被用户选中的部分

#### ::placeholder

输入框的占位符文本

## Positioning

### position

- relative：相对定位，元素占据文档位置，可以有偏移
- absolute：绝对定位，元素不占位置，相对于父元素定位
- fixed：固定在视窗某一位置
- sticky：“粘”在视窗某一位置

### top | left | bottom | right

上下左右的偏移距离

### z-index

层叠关系

## Display

### display

- block：块级元素
- inline：内联元素
- flex：弹性盒子布局
- grid：网格布局
- contents：充当遮罩的元素（比如给`img`套上`a`并能使其不影响布局）

## Box Model

拿水果举例子：果核是`content`，果肉是`padding`，果皮是`border`，外界是`margin`

### width | height

宽高

### padding | margin

内外边距

### overflow

- visible：超出部分可见
- hidden：超出部分不可见
- scroll：超出部分以滚动条形式显示

## Fonts

常用简写：`<'font-weight'> || <'font-size'> [ / <'line-height'>] || <'font-family'>`

### font-weight

字体粗细

### font-size

字体大小

### font-family

字体种类

### line-height

字体行高

## Text

### text-align

文本对齐

### text-overflow

文本超出部分截断

常用片段：

```css
.text-clamp {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
复制代码
```

### text-shadow

文本阴影

### text-transform

文本大小写

### text-decoration

文本装饰样式

### -webkit-text-stroke

文本描边

### white-space

空格处理

- nowrap：使文本永不换行
- pre：保留空格和换行符，但无法自动换行
- pre-wrap：保留空格和换行符，且可以自动换行

## Color

### color

文本颜色

### opacity

颜色透明度

### transparent

透明色

### currentColor

当前元素`color`的值

# Backgrounds & Borders

背景常用缩写：`<'background-image'> || <'background-position'> [/ <'background-size'> <'background-repeat'>]`

边框常用缩写：`<'border-width'> || <'border-style'> || <'border-color'>`

### background-color

背景颜色

### background-image

背景图片

### background-size

背景大小

### background-position

背景定位

### background-repeat

背景是否重复

### background-clip

背景裁剪

### border-width

边框宽度

### border-style

边框样式

### border-color

边框颜色

### border-radius

边框圆角

### box-shadow

阴影：`offset-x | offset-y | blur-radius | spread-radius | color`

## Images

### linear-gradient

线性渐变

常见用途：背景色、模拟光、条纹背景等

### radial-gradient

径向渐变

常见用途：背景色、斑点背景、卡片镂空、微粒效果等

### conic-gradient

圆锥渐变

常见用途：饼图、各种花纹的实现

### object-fit

处理替换元素（如`img`）的变形问题

## Filter

### filter

作用于元素本身的滤镜

常用滤镜：

- blur：高斯模糊
- contrast：对比度
- drop-shadow：投影，常用于给不规则形状进行
- greyscale：灰度
- hue-rotate：色调变换

### backdrop-filter

作用于元素背景的滤镜

## Blending

### mix-blend-mode

常用混合模式

- multiply：正片叠底
- screen：滤色
- difference：插值

## SVG

### clip-path

裁剪路径，用来裁剪出各种形状

### mask

蒙版，用于创建镂空效果

### letter-spacing

字母间距

### pointer-events

鼠标事件（通常都设为`none`，表示消除对象的鼠标事件）

## List

### list-style-type

列表的`marker`样式（通常都设为`none`，表示消除列表样式）

### counter-reset

重置某个计数器为某一值

### counter-increment

给某个计数器增加特定的值

# UI

### appearance

元素的默认样式（通常都设为`none`，表示消除默认外观）

### box-sizing

盒模型类型

- content-box：默认，标准盒模型
- border-box：IE 盒模型（将`border`和·`padding`一并算作长宽）

### cursor

光标类型，最常用的是`pointer`，也就是一只手

### outline

轮廓

### user-select

用户是否能选择文本（通常都设为`none`，表示用户无法选中此文本）

# Scroll

### scroll-behavior

- auto：默认滚动行为
- smooth：丝滑滚动行为

### scroll-snap-type

定义在滚动容器中的一个临时点（snap point）如何被严格的执行

### scroll-snap-align

控制将要聚焦的当前滚动子元素在滚动方向上相对于父容器的对齐方式

### -webkit-overflow-scrolling

设置为`touch`可以恢复移动端的弹性滚动

### overscroll-behavior

设置为`contain`可以禁止连锁滚动效果

## Writing Modes

### writing-mode

定义了文本水平或垂直排布以及在块级元素中文本的行进方向。

这里我们默认是 ltr 文本（左对齐文本）

- horizontal-tb：从左到右水平流动，是默认值
- vertical-lr：从上到下垂直流动，下一垂直行位于上一行右侧
- vertical-rl：从上到下垂直流动，下一垂直行位于上一行左侧

## Transforms

### transform

常见的几何变换：

- `translate`：平移
- `scale`：缩放
- `rotate`：旋转
- `skew`：斜切

### transform-origin

变换中心

### transform-style

- flat：默认
- preserve-3d：3d 场景

### perspective

透视距离

### backface-visibility

物体后方是否可视

## Animation

### transition

过渡

### transition-property

过渡属性名

### transition-duration

过渡时间

### transition-delay

过渡延迟

### transition-timing-function

过渡缓动函数，内置：`ease`、`linear`、`ease-in`、`ease-out`、`ease-in-out`、`steps()`

自定义缓动函数：`cubic-bezier()`

### animation

动画

### animation-name

动画名称

### animation-duration

动画时间

### animation-delay

动画延迟

### animation-timing-function

动画缓动函数

### animation-iteration-count

动画播放次数

### animation-fill-mode

动画填充模式

### animation-play-state

动画播放状态

### @keyframes

关键帧

## Motion Path

### offset-path

路径的定义

### offset-distance

对象在路径上的位置

## Others

### attr()

获取自定义属性的值作为`content`生成的内容

### var()

CSS 自定义变量

### calc()

计算值

### @media

媒体查询，用于适配不同设备

### -webkit-box-reflect

投影

### percentage

一些数值型单位具有百分比写法，那么这些百分比相对的对象是什么呢？有 2 种：父元素和自身。

相对父元素：`width`、`height`、`top`、`left`、`margin`、`padding`

相对自身：`translateX`、`translateY`
