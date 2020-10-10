# Babel

## 介绍

功能众多的JS编译器，还有“众多模块”用于静态分析；

> 静态分析：在代码不需要执行对前提下对代码进行分析的过程；可以用语法检查、编译、代码高亮、代码转换、优化、压缩；

## 功能

是JavaScript的编译器，更确切的说是将源码转行成源码的编译器，通常叫做转换编译器（transliper）;

## [AST(Abstract Syntx Tree)](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91asts)

一个AST由成千上万的节点组成，描述了可以用于静态分析的程序语法；

每个节点都有如下所示接口

```typescript
interface Node {
	type: string;
}
//type：表示节点的类型（FunctionDeclaration, Indentifier, BinaryExpression）,没几点都定义了一些属性用来进一步描述该节点；
```

## 处理过程

babel的三个主要步骤分别是：`解析`、`转换`、`生成`

### 解析

### 词法分析

词法分析阶段把字符串形式的代码转换成“tokens”流

### 语法分析

语法分析阶段会把一个令牌流转换成 AST 的形式。 这个阶段会使用令牌中的信息把它们转换成一个 AST 的表述结构，这样更易于后续的操作。

### 转换

最为复杂的步骤，接受AST并对其遍历，过程中可对节点进行添加、修改、删除的操作；也是插件中介入的步骤；通常为在这里写一个插件：【antd、elemet-ui,怎么实现按需加载的过程，就在这这里通过转换语法】babel-plugin-import

### 生成

把AST转换成字符串形式的代码，同时还会创建源码映射（source map）

## 遍历

深度遍历

### 访问者Vistor

简单来说他是一个对象、定义获取具体节点的方法，获取节点有两次机会【entry、exit】

```javascript
const MyVisitor = {
  Identifier() {
    console.log("Called!");
  }
};
//默认是enter
const MyVisitor = {
  Identifier: {
    enter() {
      console.log("Entered!");
    },
    exit() {
      console.log("Exited!");
    }
  }
};
```

### 简约写法

```javascript
const MyVisitor = {
  "ExportNamedDeclaration|Flow"(path) {}
};
```

把方法名用`|`分割成`Idenfifier |MemberExpression`形式的字符串，把同一个函数应用到多种访问节点。.

### Alias

例如，

`Function` is an alias for `FunctionDeclaration`, `FunctionExpression`, `ArrowFunctionExpression`, `ObjectMethod` and `ClassMethod`.

```javascript
const MyVisitor = {
  Function(path) {}
};
```

## 开发插件

基本流程就是跟着开发文档走；

！！！不错babel-plugin开发时缓存贼严重：一定要开启[diable-cache](https://babeljs.io/docs/en/babel-register#babel_disable_cache)！！！

## [顺序](https://www.babeljs.cn/docs/plugins#%E6%8F%92%E4%BB%B6%E9%A1%BA%E5%BA%8F)

- preset 后加载、逆序　
- plugin 先加载、顺序

