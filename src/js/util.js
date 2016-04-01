/**
 * Created by user on 3/30/16.
 */
if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; ++i) {
            callback(this[i], i, this);
        }
    };
}

if (typeof Array.prototype.indexOf != 'function') {
    Array.prototype.indexOf = function (item) {
        var index = -1;
        for (var i = 0; i < this.length; ++i) {
            if (this[i] == item) {
                index = i;
                break;
            }
        }
        return index;
    };
}

if (typeof Array.prototype.map != 'function') {
    Array.prototype.map = function (callback) {
        var result=[];
        for (var i = 0; i < this.length; ++i) {
            result[i] = callback(this[i], i);
        }
        return result;
    };
}

if (typeof Array.prototype.filter != 'function') {
    Array.prototype.filter = function (callback) {
        var result = [];
        for (var i = 0; i < this.length; ++i) {
            if (callback(this[i], i)) {
                result.push(this[i]);
            }
        }
        return result;
    };
}