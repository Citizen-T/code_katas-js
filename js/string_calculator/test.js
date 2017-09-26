describe('StringCalculator', () => {
    describe('add()', () => {
        it('should return 0 given no string', () => {
            expect(StringCalculator.add()).toEqual(0);
        });
        it('should return 0 given empty string', () => {
            expect(StringCalculator.add('')).toEqual(0);
        });
        it('should return 0 given two zeros', () => {
            expect(StringCalculator.add("0,0")).toEqual(0);
        });
        it('should return x given "0,x"', () => {
            expect(StringCalculator.add('0,1')).toEqual(1);
            expect(StringCalculator.add('0,2')).toEqual(2);
        });
        it('should return x+y given "x,y"', () => {
            expect(StringCalculator.add('1,2')).toEqual(3);
            expect(StringCalculator.add('2,3')).toEqual(5);
        });
        it('should return x+y+z given "x,y,z"', () => {
            expect(StringCalculator.add('1,2,3')).toEqual(6);
            expect(StringCalculator.add('5,10,15')).toEqual(30);
        });
        it('should return "x + y" given "x\\ny"', () => {
            expect(StringCalculator.add('1\n2')).toEqual(3);
            expect(StringCalculator.add('2\n5')).toEqual(7);
        });
    });
});