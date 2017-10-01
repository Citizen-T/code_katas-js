describe('Strings', () => {
    let Strings = compress.Strings;
    describe('compress()', () => {
        it('"" -> ""', () => {
            expect(Strings.compress('')).toEqual('');
        });
        it('"a" -> "a"', () => {
            expect(Strings.compress('a')).toEqual('a');
        });
        it('"aa" -> "aa"', () => {
            expect(Strings.compress('aa')).toEqual('aa');
        });
        it('"aaa" -> "a3"', () => {
            expect(Strings.compress('aaa')).toEqual('a3');
        });
        it('"aabb" -> "a2b2"', () => {
            expect(Strings.compress('aabb')).toEqual('a2b2');
        });
        it('"aaabbcddddeffghijjkllll" -> "a3b2cd4ef2ghij2kl4"', () => {
            expect(Strings.compress('aaabbcddddeffghijjkllll')).toEqual('a3b2cd4ef2ghij2kl4');
        });
    });
});