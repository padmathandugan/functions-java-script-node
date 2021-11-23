const add = require('./add');
const max = require('./max');
const min = require('./min');
const head = require('./headOfArray');
const tail = require('./tailOfArray');
const map = require('./map');

describe('Add', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(add(1, 0)).toEqual(1);
    });

});

describe('Max', () => {
    it('Max of [1,2,3,4] should be 4', () => {
    expect(max([1,2,3,4])).toEqual(4);
     });
 
 });

 describe('Min', () => {
    it('Min of [1,2,3,4] should be 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
     });
 
 });

 describe('Head', () => {
    it('Head of [1,2,3] should be 1', () => {
        expect(head([1,2,3])).toEqual(1);
     });

     it('Head of [] should be undefined', () => {
        expect(head([])).toEqual(undefined);
     });
 
 });

 describe('Tail', () => {
    it('Tail of [1,2,3] should be [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
     });

     it('Tail of [] should be undefined', () => {
        expect(tail([])).toEqual([]);
     });
 
 });

/*describe('Map', () => {
    it('Map of [] cube should be []', () => {
        expect(map([], map.cubeRoot)).toEqual(undefined);
     });

     it('Map of [{x:10}] addition should be 11', () => {
        expect(map([{x:10}], map.mapAddition)).toEqual(11);
     });

     it('Map of [1,2,3] cube should be [1, 8, 27]', () => {
        expect(map([1,2,3], map.cubeRoot)).toEqual([1, 8, 27]);
     });
});*/
