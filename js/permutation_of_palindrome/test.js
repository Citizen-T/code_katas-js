describe('Strings', () => {
    describe('isPermutationOfPalindrome()', () => {
        it('"" -> true', () => {
            expect(Strings.isPermutationOfPalindrome('')).toEqual(true);
        });
        it('"a" -> true', () => {
            expect(Strings.isPermutationOfPalindrome('a')).toEqual(true);
        });
        it('"ab" -> false', () => {
            expect(Strings.isPermutationOfPalindrome('ab')).toEqual(false);
        });
        it('"aba" -> true', () => {
            expect(Strings.isPermutationOfPalindrome('aba')).toEqual(true);
        });
        it('"aab" -> true', () => {
            expect(Strings.isPermutationOfPalindrome('aab')).toEqual(true);
        });
        it('"aedcfebdabc" -> true', () => {
            expect(Strings.isPermutationOfPalindrome('aedcfebdabc')).toEqual(true);
        });
    });
});