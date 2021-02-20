import { sum, count, max, binarySearch, quickSort } from "./04-quick-sort.js";

describe('recursively get array elements sum', () => {
    test('sum([]) === 0', () => {
        expect(sum([])).toBe(0);
    });
    test('sum([4]) === 4', () => {
        expect(sum([4])).toBe(4);
    });
    test('sum([1,2,3,7]) === 13', () => {
        expect(sum([1,2,3,7])).toBe(13);
    });
})

describe('recursively count array elements', () => {
    test('count([]) === 0', () => {
        expect(count([])).toBe(0)
    })
    test('count([4]) === 1', () => {
        expect(count([4])).toBe(1)
    })
    test('count([1,4,5,6]) === 4', () => {
        expect(count([1,4,5,6])).toBe(4)
    })
})

describe('recursively finds max value in array', () => {
    test('max([]) === null', () => {
        expect(max([])).toBe(null)
    })
    test('max([4]) === 4', () => {
        expect(max([4])).toBe(4)
    })
    test('max([4,6,3,8,12]) === 12', () => {
        expect(max([4,6,3,8,12])).toBe(12)
    })
})

describe('finds element in sorted array via binary search and returns its index', () => {
    test('can`t find 4 in empty array', () => {
        expect(binarySearch([], 4)).toBe(null)
    })
    test('can`t find 2 in [5]', () => {
        expect(binarySearch([5], 2)).toBe(null)
    })
    test('find 4 in [4]', () => {
        expect(binarySearch([4], 4)).toBe(0)
    })
    test('can`t find 6 in [1,2,4,5,7]', () => {
        expect(binarySearch([1,2,4,5,7], 6)).toBe(null)
    })
    test('can`t find 12 in [1,2,4,5,7,8]', () => {
        expect(binarySearch([1,2,4,5,7,8], 12)).toBe(null)
    })
    test('find 2 in [1,2,4,5,7]', () => {
        expect(binarySearch([1,2,4,5,7], 2)).toBe(1)
    })
    test('find 7 in [1,2,4,5,7,8]', () => {
        expect(binarySearch([1,2,4,5,7,8], 7)).toBe(4)
    })
    test('find 20 in [1,2,4,5,7,8,9,10,11,12,15,20,45,60]', () => {
        expect(binarySearch([1,2,4,5,7,8,9,10,11,12,15,20,45,60], 15)).toBe(10)
    })
    test('find 5 in [1,2,4,5,7,8,9,10,11,12,15,20,45,60]', () => {
        expect(binarySearch([1,2,4,5,7,8,9,10,11,12,15,20,45,60], 5)).toBe(3)
    })
})

describe('sorts given array', () => {
    test('[] => []', () => {
        expect(quickSort([])).toStrictEqual([])
    })
    test('[4] => [4]', () => {
        expect(quickSort([4])).toStrictEqual([4])
    })
    test('[7,4] => [4,7]', () => {
        expect(quickSort([7,4])).toStrictEqual([4,7])
    })
    test('[7,4,8,4,9,4,3,1] => [1,3,4,4,4,7,8,9]', () => {
        expect(quickSort([7,4,8,4,9,4,3,1])).toStrictEqual([1,3,4,4,4,7,8,9])
    })
    test('[9,8,6,2,4,3,1] => [1,2,3,4,6,8,9]', () => {
        expect(quickSort([9,8,6,2,4,3,1])).toStrictEqual([1,2,3,4,6,8,9])
    })
})