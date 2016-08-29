export function add(one, two) {
    if (one.length !== two.length) {
        throw new RangeError('Matrix y dimensions do not match');
    }
    const result = [];
    for (let i = 0; i < one.length; i++) {
        const row = one[i];
        if (row.length !== two[i].length) {
            throw new RangeError(`Matrix x dimensions do not match on row ${i}`);
        }
        result[i] = [];
        for (let j = 0; j < row.length; j++) {
            result[i][j] = row[j] + two[i][j];
        }
    }
    return result;
}
export function multiply(one, two) {
    if (one.length !== two.length) {
        throw new RangeError('Matrix y dimensions do not match');
    }
    const size = one[0].length;
    const result = [];
    for (let i = 0; i < two.length; i++) {
        result[i] = [];
        for (let j = 0; j < two[i].length; j++) {
            let s = size;
            let sum = 0;
            while (s--) {
                sum += one[i][s] * two[s][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
export function flip(matrix) {
    const result = [[]];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (result[j] === undefined) {
                result[j] = [];
            }
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
export function to2d(matrix) {
    return [
        [matrix[0][0] || 1, matrix[0][1] || 0, matrix[0][3] || 0],
        [matrix[1][0] || 0, matrix[1][1] || 0, matrix[1][3] || 0]
    ];
}
export function to3d(matrix) {
    return [
        [matrix[0][0] || 1, matrix[0][1] || 0, 0, matrix[0][2] || 0],
        [matrix[1][0] || 0, matrix[1][1] || 1, 0, matrix[1][2] || 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];
}
export function Identity() {
    return [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];
}
