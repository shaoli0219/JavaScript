# Node.js 

[TOC]

## 一、Node.js是什么

+ Node.js就是运行在服务端的JavaScript。
+ Node.js是一个基于 Chrome V8 引擎的 JavaScript 运行时建立的一个平台。
+ Node.js是一个事件驱动I/O服务端的JavaScript环境，基于Google的V8引擎，V8引擎执行JavaScript的速度非常快，性能非常好。

## 二、Node.js的背景

#### 1.ECMAScript标准的缺陷

+ 没有模块系统。
+ 标准库较少。
+ 没有标准接口。
+ 缺乏管理系统。

#### 2.模块化

+ 如果程序设计的规模到达了一定程度，则必须对其进行模块化。

+ 模块化可以有多种形式，但至少应该提供能够将代码分割为多个源文件的机制。

+ CommonJS的模块功能可以帮助我们解决该问题。

#### 3.CommonJS规范
+ CommonJS规范的提出，主要是为了弥补当前JavaScript没有标准的缺陷。
+ CommonJS规范为JS制定了一个美好的愿景，希望JS能在任何地方运行。
+ CommonJS对模块的定义十分简单：
	1. 模块引用
	2. 模块定义
	3. 模块标识

## 三、模块化



## 四、包简介

CommonJS的包规范允许我们将一组相关的模块组合到一起，形成一组完整的工具。

CommonJS的包规范有==包结构==和==包描述文件==两个部分组成。

#### 包结构

用于组织包中的各种文件。实际上就是一个压缩文件，解压以后还原为目录。符合规范的目录，有如下文件：

+ **package.json	描述文件（必有）**
+ bin	可执行二进制文件
+ lib	js代码
+ doc	文档
+ test    单元测试

#### 包描述文件（package.json）

描述包的相关信息，以供外部读取分析。

## 五、NPM(Node Package Manager)

#### NPM简介

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

+ 允许用户从NPM服务器下载别人编写的**第三方包到**本地使用。

+ 允许用户从NPM服务器下载并安装别人编写的**命令行程序**到本地使用。

+ 允许用户将自己编写的包或命令行程序**上传**到NPM服务器供别人使用。

#### NPM常用指令

1. npm -v 查看npm版本
2. npm version 查看所有模块版本
3. npm search 包名 搜索包
4. npm install/i 包名 安装包
5. npm remove/r 包名 删除包
6. npm install/i 包名 --save 安装包并添加到依赖中
7. npm install/i 下载当前项目所有依赖包
8. npm install/i 包名 -g 全局安装包（全局安装的包一般都是一些工具）