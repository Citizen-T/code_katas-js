describe('PrimeFactors', () => {
    it('of 1 are []', () => {
        expect(PrimeFactors.of(1)).toEqual([]);
    });
    it('of 2 are [2]', () => {
        expect(PrimeFactors.of(2)).toEqual([2]);
    });
    it('of 3 are [3]', () => {
        expect(PrimeFactors.of(3)).toEqual([3]);
    });
    it('of 4 are [2, 2]', () => {
        expect(PrimeFactors.of(4)).toEqual([2, 2]);
    });
    it('of 5 are [5]', () => {
        expect(PrimeFactors.of(5)).toEqual([5]);
    });
    it('of 6 are [2, 3]', () => {
        expect(PrimeFactors.of(6)).toEqual([2, 3]);
    });
    it('of 7 are [7]', () => {
        expect(PrimeFactors.of(7)).toEqual([7]);
    });
    it('of 8 are [2, 2, 2]', () => {
        expect(PrimeFactors.of(8)).toEqual([2, 2, 2]);
    });
    it('of 9 are [3, 3]', () => {
        expect(PrimeFactors.of(9)).toEqual([3, 3]);
    });
    it('acceptance test', () => {
        expect(PrimeFactors.of(2*2*2*3*3*5*7*11*11)).toEqual([2, 2, 2, 3, 3, 5, 7, 11, 11]);
    });
});