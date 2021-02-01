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

