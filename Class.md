# Class

## super

既可以当函数使用，也可以当对象使用。！使用super时，必须显式制定是作为<u>函数</u>，还是<u>对象</u>；

1. 作为函数

- 在构造函数中，super代表了父类的构造函数，但返回的是子类的实例，即super内部的this指向子类，相当于
  `A.prototypeof.constructor.call(this)`

2. 作为对象

- 在**普通方法中**，指向父类的原型对象；在**静态方法**中指向父类本身；

## `__proto__`

每个**对象**都有`_proto_`，指向构造函数的prototype属性。

### 有什么用
- `_proto`（隐式原型）：构成原型链；
- `prototype`（显式原型）：用来实现基于原型的继承与属性的共享；

### 类的继承

（1）子类的`__proto__`属性，表示构造函数的继承，总是指向父类。

（2）子类`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性。

##### 为什么

继承的实现

```javascript
Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```



