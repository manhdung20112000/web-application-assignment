function makeMultiFilter(originalArray) {
    //trong doc thay ghi la MakeMultiFilter a :((
    let currentArray = [...originalArray]
    return function arrayFilterer(filterCriteria, callback) {
        if (filterCriteria instanceof Function) {
            currentArray = currentArray.filter(element => filterCriteria(element));
        }
        else {
            return currentArray;
        }

        if (callback instanceof Function) {
            callback.call(originalArray, currentArray);
        }
        return arrayFilterer;
    }
}