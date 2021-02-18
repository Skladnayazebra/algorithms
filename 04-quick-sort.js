// суммирует элементы массива
export const sum = (array) => {
    // base case
    if (array.length === 0) {
        return 0
    }
    if (array.length === 1) {
        return array[0]
    }
    // recursive case
    const reducedArray = array.slice(1)
    return array[0] + sum(reducedArray)
}



// считает элементы в массиве
export const count = (array) => {
    //base
    if (array.length === 0) {
        return 0
    }
    if (array.length === 1) {
        return 1
    }
    // recursive
    const reducedArray = array.slice(1)
    return 1 + count(reducedArray)
}

// находит максимальное значение в массиве
export const max = (array) => {
    // base
    if (array.length === 0) {
        return null
    }
    if (array.length === 1) {
        return array[0]
    }

    // recursive
    const reducedArray = array.slice(1)
    const maxOfRemaining = max(reducedArray)
    if (array[0] > maxOfRemaining) {
        return array[0]
    } else {
        return maxOfRemaining
    }
}

export const binarySearch = (array, item) => {
    // base
    if (array.length === 0) {
        return null;
    }
    if (array.length === 1 && item !== array[0]) {
        return null
    }
    if (array.length === 1 && item === array[0]) {
        return 0
    }

    // recursive
    const middleIndex = Math.floor(array.length / 2)
    const middleElement = array[middleIndex]


    if (middleElement === item) {
        return middleIndex
    }
    // если элемент в середине больше, чем искомый - ищем  в левой половине
    if (middleElement > item) {
        return binarySearch(array.slice(0, middleIndex), item)
    }
    // если элемент в середине меньше, чем искомый - ищем  в правой половине
    if (middleElement < item) {
        // если элемент в правом массиве найден, нам нужно сложить их индексы
        const foundIndex = binarySearch(array.slice(middleIndex + 1), item)

        if (foundIndex === null) {
            return null
        } else {
            return foundIndex + middleIndex + 1
        }
    }
}
