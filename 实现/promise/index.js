var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function Promise(fn) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    var that = this;

    function resolve(value) {
        if (that.status !== PENDING) return;
        that.value = value;
        that.status = FULFILLED;
        that.onFulfilledCallbacks.forEach(function (callback) {
            callback(value)
        })
    }

    function reject(reason) {
        if (that.status !== PENDING) return;
        that.status = REJECTED;
        that.reason = reason;
        that.onRejectedCallbacks.forEach(function (callback) {
            callback(reason)
        })
    }

    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if (x === promise) {
        reject(new TypeError(x + promise + 'can not be the same value'))
    }
    if (x instanceof Promise) {
        x.then(function (y) {
            resolvePromise(promise, y, resolve, reject)
        }, reject)
    } else if (typeof x === 'object' || typeof x === 'function') {
        if (x === null) {
            resolve(x)
        }
        try {
            var then = x.then;
        } catch (e) {
            reject(e)
        }
        if (typeof then === 'function') {
            var called = false;
            try {
                then.call(x,function (y) {
                    if (called) return;
                    called = true;
                    resolvePromise(promise, y, resolve, reject)
                }, function(r) {
                    if (called) return
                    called = true;
                    reject(r)
                })
            } catch (e) {
                if (called) return
                reject(e)
            }
        } else {
            resolve(x)
        }
    } else {
        resolve(x)
    }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
    var that = this;
    if (this.status === PENDING) {
        var promise2 = new Promise(function (resolve, reject) {
            that.onFulfilledCallbacks.push(function() {
                setTimeout(function() {
                    try {
                        if (typeof onFulfilled !== 'function') {
                            resolve(that.value)
                        }  else {
                            var x = onFulfilled(that.value)
                            resolvePromise(promise2, x, resolve, reject);
                        }
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            })
            that.onRejectedCallbacks.push(function() {
                setTimeout(function() {
                    try {
                        if (typeof onRejected !== 'function') {
                            reject(that.reason)
                        }  else {
                            var x = onRejected(that.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        }
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            })
        });
        return promise2
    }

    if (this.status === FULFILLED) {
        var promise2 = new Promise(function (resolve, reject) {
            setTimeout(function() {
                try {
                    if (typeof onFulfilled !== 'function') {
                        resolve(that.value)
                    }  else {
                        var x = onFulfilled(that.value);
                        resolvePromise(promise2, x, resolve, reject);
                    }
                } catch (e) {
                    reject(e)
                }
            }, 0)
        });
        return promise2
    }

    if (this.status === REJECTED) {
        var promise2 = new Promise(function (resolve, reject) {
            setTimeout(function() {
                try {
                    if (typeof onRejected !== 'function') {
                        reject(that.reason)
                    }  else {
                        var x = onRejected(that.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    }
                } catch (e) {
                    reject(e)
                }
            }, 0)
        });
        return promise2
    }
}

Promise.deferred = function () {
    var result = {}
    result.promise = new Promise(function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
    })

    return result
}

module.exports = Promise;
