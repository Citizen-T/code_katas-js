describe('Strings', () => {
    let Strings = one_edit.Strings;
    describe('offByOne()', () => {
        it('should return true when strings are equal', () => {
            expect(Strings.offByOne('', '')).toBe(true);
            expect(Strings.offByOne('a', 'a')).toBe(true);
            expect(Strings.offByOne('abc', 'abc')).toBe(true);
        });
        it('should return true on insertion', () => {
            expect(Strings.offByOne('', 'a')).toBe(true);
            expect(Strings.offByOne('a', 'ab')).toBe(true);
            expect(Strings.offByOne('a', 'ba')).toBe(true);
        });
        it('should return false on double insertion', () => {
            expect(Strings.offByOne('', 'ab')).toBe(false);
        });
        it('should return true on removal', () => {
            expect(Strings.offByOne('a', '')).toBe(true);
            expect(Strings.offByOne('ab', 'a')).toBe(true);
            expect(Strings.offByOne('ab', 'b')).toBe(true);
        });
        it('should return false on double removal', () => {
            expect(Strings.offByOne('ab', '')).toBe(false);
        });
        it('should return true on replace', () => {
            expect(Strings.offByOne('a', 'b')).toBe(true);
            expect(Strings.offByOne('ab', 'ac')).toBe(true);
            expect(Strings.offByOne('ab', 'cb')).toBe(true);
        });
        it('should return false on double replace', () => {
            expect(Strings.offByOne('ab', 'cd')).toBe(false);
        });
        it('should return false on insertion + replace', () => {
            expect(Strings.offByOne('abc', 'ab5d')).toBe(false);
        });
    });
});