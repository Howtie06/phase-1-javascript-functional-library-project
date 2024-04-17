
const myEach = function(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            callback(collection[keys[i]]);
        }
    }
    return collection;
}


const myMap = function(collection, callback) {
    const result = [];
    myEach(collection, function(element) {
        result.push(callback(element));
    });
    return result;
}

const myReduce = function(collection, callback, acc) {
    let result = acc !== undefined ? acc : collection[0];
    let startIndex = acc !== undefined ? 0 : 1;

    if (Array.isArray(collection)) {
        for (let i = startIndex; i < collection.length; i++) {
            result = callback(result, collection[i], collection);
        }
    } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            result = callback(result, collection[key], key, collection);
        }
    }

    return result;
}

const myFind = function(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            return collection[i];
        }
    }
    return undefined;
}


const myFilter = function(collection, predicate) {
    const result = [];
    myEach(collection, function(element) {
        if (predicate(element)) {
            result.push(element);
        }
    });
    return result;
}


const mySize = function(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}


const myFirst = function(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}


const myLast = function(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}


const myKeys = function(object) {
    return Object.keys(object);
}


const myValues = function(object) {
    return Object.values(object);
}
