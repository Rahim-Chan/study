# EventLoop

## 关于JavaScript

js是一门**单线程**语言，在最新的HTML5中的Web-Worke，在JS版本中的“多线程”也是单线程模拟出来的；

## 宏任务Task

- setTimeout
- setInterval
- setImmediate (Node独有)
- requestAnimationFrame (浏览器独有)
- I/O
- UI rendering (浏览器独有)

## 微队列，microtask，也叫jobs

 另一些异步任务的回调会依次进入micro task queue，等待后续被调用，这些异步任务包括：

- process.nextTick (Node独有)
- Promise
- Object.observe
- MutationObserver

（注：这里只针对浏览器和NodeJS）

## 步骤

1. 执行全局Script同步代码，这些同步代码有一些是同步语句，有一些是异步语句（比如setTimeout等）；

2. 全局Script代码执行完毕后，调用栈Stack会清空；

3. 从微队列microtask queue中取出位于队首的回调任务，放入调用栈Stack中执行，执行完后microtask queue长度减1；

4. 继续取出位于队首的任务，放入调用栈Stack中执行，以此类推，直到直到把microtask queue中的所有任务都执行完毕。**注意，如果在执行microtask的过程中，又产生了microtask，那么会加入到队列的末尾，也会在这个周期被调用执行**；

5. microtask queue中的所有任务都执行完毕，此时microtask queue为空队列，调用栈Stack也为空；

6. 取出宏队列macrotask queue中位于队首的任务，放入Stack中执行；

7. 执行完毕后，调用栈Stack为空；

重复第3-7个步骤；

- requestAnimationFrame 在所有microtask之后，下一个task之前；




