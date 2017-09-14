describe('FizzBuzz', () => {
    it('of 0 is 0', () => {
        expect(FizzBuzz.of(0)).toBe(0);
    });
    it('of 1 is 1', () => {
        expect(FizzBuzz.of(1)).toBe(1);
    });
    it('of 2 is 2', () => {
        expect(FizzBuzz.of(2)).toBe(2);
    });
    it('of 3 is "Fizz"', () => {
        expect(FizzBuzz.of(3)).toBe("Fizz");
    });
    it('of 5 is "Buzz"', () => {
        expect(FizzBuzz.of(5)).toBe("Buzz");
    });
    it('of 6 is "Fizz"', () => {
        expect(FizzBuzz.of(6)).toBe("Fizz");
    });
    it('of 10 is "Buzz"', () => {
        expect(FizzBuzz.of(10)).toBe("Buzz");
    });
    it('of 15 is "FizzBuzz', () => {
        expect(FizzBuzz.of(15)).toBe("FizzBuzz");
    });
});