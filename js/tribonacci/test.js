describe('Tribonacci', () => {
    it('should return empty list given n=0)', () => {
        expect(Tribonacci.of([0,0,1], 0)).toEqual([]);
    });
    it('should return the input when n <= size of input', () => {
        expect(Tribonacci.of([0,0,1], 1)).toEqual([0]);
        expect(Tribonacci.of([0,0,1], 2)).toEqual([0, 0]);
        expect(Tribonacci.of([0,0,1], 3)).toEqual([0, 0, 1]);
    });
    it('should add the signature elements together to get the first generated element', () => {
        expect(Tribonacci.of([0,0,1], 4)).toEqual([0,0,1,1]);
        expect(Tribonacci.of([0,1,1], 4)).toEqual([0,1,1,2]);
    });
    it('should work for larger values of n', () => {
        expect(Tribonacci.of([3,2,1], 10)).toEqual([3,2,1,6,9,16,31,56,103,190]);
    });
});