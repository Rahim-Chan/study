# 二进制相加(输入为两个)

function(a,b)

## define

`res`: (type: string) = '';

`cache`：（type: 1|0）= 0;

## step

遍历a,b

1. res： 叠加后结果取2的余数 + 进位记录 ; (sum%2)+cache

​	取余数的目的： 1+1 => 0 , 1+0 => 1, 0+0 => 0，1+2 => 1 [剩余的值]

2. Cache： 总和处以2 向下取值，确定是否需要进位（Math.floor(sum/2)）

最后判断是否有cache 进位补上；

```javascript
var addBinary = function(a, b) {
    let res = ''
    let cache = 0
    for (let i=a.length-1,y=b.length-1;i>=0||y>=0;i--,y--) {
        let sum = cache;
        sum += i>= 0?parseInt(a[i]):0;
        sum += y>= 0?parseInt(b[y]):0;
        res += sum%2
        cache = Math.floor(sum/2)        
    }
    
    res += cache === 1 ? 1 : ''
    return res.split('').reverse().join('')
};
```



