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

// search in sorted array
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

    // element found!
    if (middleElement === item) {
        return middleIndex
    }
    // если элемент в середине больше, чем искомый - ищем  в левой половине
    if (middleElement > item) {
        return binarySearch(array.slice(0, middleIndex), item)
    }
    // если элемент в середине меньше, чем искомый - ищем  в правой половине
    if (middleElement < item) {
        // если элемент в правом массиве найден, нам нужно сложить индексы.
        // вот почему: [0,1,2,3,[0,1,2]] => [0,1,2,3,4,5,6]
        const foundIndex = binarySearch(array.slice(middleIndex + 1), item)

        if (foundIndex === null) {
            return null
        } else {
            return foundIndex + middleIndex + 1
        }
    }
}

// O(n * log n)
export const quickSort = (array) => {
    // base
    if (array.length < 2) {
        return array
    }
    // recursive
    const pivot = array[0]
    const lessArray = []
    const moreArray = []
    for (const item of array.slice(1)) {
        if (item <= pivot) {
            lessArray.push(item)
        } else {
            moreArray.push(item)
        }
    }
    return [...quickSort(lessArray), pivot, ...quickSort(moreArray)]
}
