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



# 删除链表重复项（有序）

## 考察

链表的操作;时间复杂程度O(n) ，空间复杂程度O(1);

## step

```javascript
var deleteDuplicates = function(head) {
    var cur = head
    while(cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
};
```

# 删除排序数组中的重复项

在原有的数组上修改并返回长度

## Imp

双指针，其中i为慢指针，j为快指针，返回结果需要+1

## step

```javascript
var removeDuplicates = function(nums) {
    if (!nums || !nums.length) return 0
    var i = 0;
    var j = 1;
    while (j<nums.length) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]
        }
        j++
    }
    return i+1
};
```

# [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

## step

变量m+n的长度范围，剩下的num2数值全部拼接到num1；

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var lastIndex = m+n-1;
    m--;
    n--
    while(lastIndex>0) {
        nums1[lastIndex] = nums1[m] < nums2[n] ? nums2[n--] : nums1[m--]
        lastIndex--;
    }
    n++
    nums1.splice(0, n, ...nums2.slice(0, n))
};
```

