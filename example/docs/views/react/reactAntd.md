---
title: React之Antd,Less配置自定义主题色
date: 2020-10-19
categories:
  - React
tags:
  - react
---

# React之Antd,Less配置自定义主题色
>搭建React环境，创建入门demo，并配置Antd按需加载及使用less，自定义主题色

## 安装React
 ```
 yarn global add create-react-app
 #或
 npm install -g create-react-app 
```
## 创建应用react-study
```
create-react-app react-study
```
## 基础配置
###  安装常用依赖
```
yarn add react-router-dom axios less-loader less
```

###  暴露配置文件
```
yarn eject
```

![](https://img-blog.csdnimg.cn/img_convert/3237a73c3cf955728c145ab609637c3d.png)

### 配置less
在webpack.config.js配置lessless-loader less
- 修改一
```js
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
```
修改为：
```js
const cssRegex = /\.(css|less)$/;
const cssModuleRegex = /\.module\.(css|less)$/;
```
- 修改二
```js
 {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap,
              }),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
                        // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
            // using the extension .module.css
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 2,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              }),

            },
```
修改为：
```js
          {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 2,
                sourceMap: isEnvProduction && shouldUseSourceMap,
              },
                'less-loader'
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
            // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
            // using the extension .module.css
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 2,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              },
                  'less-loader'
              ),

            },
```

### 添加Ant Design依赖
```
yarn add antd
```

### 配置Antd的css按需加载
安装babel-plugin-import插件
```
yarn add babel-plugin-import 
```
#### 方式一
先安装`babel`插件，然后在项目的根目录下（就是和`package.json`相同的层级）新建文件`babel.config.js`，里面的内容如下
```
module.exports = {
  plugins: [
    ["import", { libraryName: "antd", style: true}] // `style: true` 会加载 less 文件
  ]
};
```
#### 方式二
在webpack.config.js中修改如下代码：
- 改动一：
```js
  //添加
  modifyVars: { '@primary-color': '#f9c700' },
  javascriptEnabled: true,
```
修改后：
```js
    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modifyVars: { '@primary-color': '#f9c700' },
            javascriptEnabled: true,
          },
        }
```	
- 改动二
```js
//添加
["import", { libraryName: "antd", style: true}]
```

```js
 {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve(
                  'babel-preset-react-app/webpack-overrides'
                ),

                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent:
                            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                        },
                      },
                    },
                  ],
                  ["import", { libraryName: "antd", style: true}]
                ],
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                // See #6846 for context on why cacheCompression is disabled
                cacheCompression: false,
                compact: isEnvProduction,
              },
            },
```
至此引入antd及按需加载，使用less作为业务代码的样式文件，并实现css模块化配置完成。

### 效果
![](https://img-blog.csdnimg.cn/20201019211341630.png#pic_center)

成功修改主题色为黄颜色
### 可能出现问题
#### 按需加载编译后报错.bezierEasingMixin()
>babel-plugin-import配置babel按需引入antd模块，编译后报错.bezierEasingMixin()

- 原因： 

	因为less版本过高不兼容问题
    [参考github解决办法链接](https://github.com/ant-design/ant-motion/issues/44)

- 解决方案：

	
打开项目package.json发现less版本是^3.x.x
,将less版本降到3.0以下 比如安装 2.7.3版本。

- 两种方式：

	- 安装低版本
    ```
    yarn add less@^2.7.3   
    ```

	- 打开项目的package.json 
    
    找到dependencies下面的less 将其版本改为 "2.7.3"   然后`yarn install`


####  引入antd报警告
>删除<React.StrictMode>标签解决引入antd控制台报警告

错误信息：
```
findDOMNode is deprecated in StrictMode xxx...
```


   ~~<React.StrictMode>~~
  
