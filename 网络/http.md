# HTTP1.1（文本格式传输）

1. 对头阻塞问题，没有解决（保持连接）

2. 文本传输效率问题，而且不安全

3. header中每次都传输类似头，增加了传输成本

4. 慢启动是 TCP 为了减少网络拥塞的一种策略，我们是没有办法改变的（资源多的时候会卡顿）。
5. 多个TCP竞争带宽
6. 不够安全

http/1.1中的一个tcp链接同时只能发起一个http请求！

# HTTP2（流的）

- stream
- message http的消息，响应，请求，由一个或多个帧组成；
- frame【http2最小单位】 每个帧包含帧首部，至少会标识出当前帧所属的流（流标识），承载特定类型的数据；HTTP头部，payload；可以乱序发送，根据帧首部的流标识可以重装；
- 一个域名只维护一个TCP持久连接（减少带宽占用）；
- 可以设置请求的优先级
- 头部压缩
  

# HTTP3

- upd+quic
- 实现了类似 TCP 的流量控制、传输可靠性的功能。
- 集成了 TLS 加密功能。
- 实现了 HTTP/2 中的多路复用功能。
- 实现了快速握手功能


# TLS 三次握手

- `client hello`带上TLS版本、密码组合、client random
- `server hello`发送证书、server random；选择密码组合
- 使用RSA算法生成`premaster secret`+公钥 加密
- 服务端使用私钥揭秘得出`premaster secret`
- 服务端跟客户的同时使用`client random` `server random` `premaster secret` 生成共享密钥
- **客户端就绪：** 客户端发送经过共享密钥 **KEY**加密过的"finished"信号。
- **服务器就绪：** 服务器发送经过共享密钥 **KEY**加密过的"finished"信号。
- **达成安全通信：** 握手完成，双方使用对称加密进行安全通信。

# TCP 与UDP区别

https://zhuanlan.zhihu.com/p/24860273

