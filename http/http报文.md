# HTTP报文

Http协议有三大部分组成：

- 其中请求行和头部字段统称为**Header**；

- 消息正文也叫实体，成为body；
- 协议规定每次发送的报文必须要有Header，但是可以没有body；
- Header与body直接需要一个空行（CRLF）隔开；**为什么呢？？**

## 请求行（star line）

**描述请求或响应的基本信息**。请求行由三个字段组成：`请求方法`+ `URL ` +`HTTP版本`；

#### 请求方法

[请求方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods)

`HEAD`: 该方法返回不具备body，且该方法返回的标头为GET；（作用）也用返回获取返回的头部信息，确认 URI 的有效性及资源更新的日期时间等；

`CONNECT`: 

该**HTTP `CONNECT`方法**开始与所请求的资源双向通信。它可以用来打开隧道。

应用场景：（！浏览器不会为302根据Location做重定向，而是直接像是报错）

- 浏览器配置为代理服务器时；代理服务器自身无法读取通信内容，只传输数据包；

`TRACE`:  下次下次再说！！！！TODO

#### 请求URL

`协议`+`主机`+`端口`+`路径`+查询+片段

#### HTTP版本



## 头部字段 （header）

使用ke y-value的形式详细的说明报文的信息

[头部内容](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)

#### General Headers

#### Request Headers

#### Response Headers

#### Entity Headers



信息头也可以根据其代理对其的处理方法分类：端到端消息头，逐级信息头





## 消息正文（entity）



## Code

- 301 永久重定向
- 308 永久重定向 保留http方法不变**只不过是针对POST方法的请求不允许更改方法**
- 302 临时重定向 （不建议使用、有可能为搜索引擎误判为干扰排名）
- 307 临时重定向 保留http方法不变**只不过是针对POST方法的请求不允许更改方法**

