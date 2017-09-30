describe('URLs', () => {
    describe('escape()', () => {
        it('"" -> ""', () => {
            expect(URLs.escape('')).toEqual('');
        });
        it('" " -> "%20"', () => {
            expect(URLs.escape(' ')).toEqual('%20');
        });
        it('"a" -> "a"', () => {
            expect(URLs.escape('a')).toEqual('a');
        });
        it('"ab" -> "ab"', () => {
            expect(URLs.escape("ab")).toEqual("ab");
        });
        it('"a b" -> "a%20b"', () => {
            expect(URLs.escape('a b')).toEqual('a%20b');
        });
        it('" a b  cd " -> "%20a%20b%20%20cd%20"', () => {
            expect(URLs.escape(' a b  cd ')).toEqual('%20a%20b%20%20cd%20');
        });
    });
});