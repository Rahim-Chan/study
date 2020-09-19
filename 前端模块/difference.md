参考：

https://juejin.im/post/6844903961128861704#heading-7

模块化开发中，通常一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数，并且可以按需加载。

依赖自动加载，按需加载。

提高代码复用率，方便进行代码的管理，使得代码管理更加清晰、规范。

减少了命名冲突，消除全局变量。

目前流行的js模块化规范有CommonJS、AMD、CMD以及ES6的模块系统

# CommonJS(node.js)

# AMD (require.js)

# CMD(sea.js)

结合了 Common.js 和 AMD

# [ESMoulde](https://es6.ruanyifeng.com/#docs/module-loader)

`import xx from xxxx` 静态分析： 优于模块内的其他内容执行；所以导致无法在条件语句或拼接字符串模块；

**结论：**ES6是在预编译阶段去加载模块的，而CommondJS是在运行阶段去加载模块的；

**步骤：** JS引擎遇到关键词import，就会生成一个只读引用，等脚本真正执行时，再根据这个只读引用，到被加载的那个模块中取值。（换句话说：import的值会跟着变，不会缓存值） 



# UMD (Universal Module Definition)

- 先判断是否支持`Node.js`模块（export）是存在，则用require(xxx)
- 否则判断是否支持`AMD`（define是否存在），则用define(xxx)

