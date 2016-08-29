(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    function add(one, two) {
        if (one.length !== two.length) {
            throw new RangeError('Matrix y dimensions do not match');
        }
        var result = [];
        for (var i = 0; i < one.length; i++) {
            var row = one[i];
            if (row.length !== two[i].length) {
                throw new RangeError("Matrix x dimensions do not match on row " + i);
            }
            result[i] = [];
            for (var j = 0; j < row.length; j++) {
                result[i][j] = row[j] + two[i][j];
            }
        }
        return result;
    }
    exports.add = add;
    function multiply(one, two) {
        if (one.length !== two.length) {
            throw new RangeError('Matrix y dimensions do not match');
        }
        var size = one[0].length;
        var result = [];
        for (var i = 0; i < two.length; i++) {
            result[i] = [];
            for (var j = 0; j < two[i].length; j++) {
                var s = size;
                var sum = 0;
                while (s--) {
                    sum += one[i][s] * two[s][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }
    exports.multiply = multiply;
    function flip(matrix) {
        var result = [[]];
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (result[j] === undefined) {
                    result[j] = [];
                }
                result[j][i] = matrix[i][j];
            }
        }
        return result;
    }
    exports.flip = flip;
    function to2d(matrix) {
        return [
            [matrix[0][0] || 1, matrix[0][1] || 0, matrix[0][3] || 0],
            [matrix[1][0] || 0, matrix[1][1] || 0, matrix[1][3] || 0]
        ];
    }
    exports.to2d = to2d;
    function to3d(matrix) {
        return [
            [matrix[0][0] || 1, matrix[0][1] || 0, 0, matrix[0][2] || 0],
            [matrix[1][0] || 0, matrix[1][1] || 1, 0, matrix[1][2] || 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ];
    }
    exports.to3d = to3d;
    function Identity() {
        return [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ];
    }
    exports.Identity = Identity;
});
