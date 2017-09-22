describe('Longest.of(list, k)', () => {
    it('should return "" given empty list', () => {
        expect(Longest.of([], 1)).toEqual('');
    });
    it('should return "" given k > list.length', () => {
        expect(Longest.of(['a'], 20)).toEqual("");
    });
    it('should return "" given k <= 0', () => {
        expect(Longest.of(['a'], -1)).toEqual("");
    });
    it('should return splice of whole list given list.length == k', () => {
        expect(Longest.of(['a'], 1)).toEqual('a');
        expect(Longest.of(['a', 'bc'], 2)).toEqual('abc');
        expect(Longest.of(['a', 'bc', 'def'], 3)).toEqual('abcdef');
        expect(Longest.of(['a', 'bc', 'd'], 3)).toEqual('abcd');
    });
    it('should return splice of first k elements if sorted in reverse ', () => {
        expect(Longest.of(['abc', 'de', 'f'], 2)).toEqual('abcde');
        expect(Longest.of(['abc', 'de', 'fg', 'h'], 2)).toEqual('abcde');
        expect(Longest.of(['abc', 'def', 'gh', 'i'], 2)).toEqual('abcdef');
    });
    it('should return splice of last k elements if sorted', () => {
        expect(Longest.of(['a', 'bc', 'def'], 2)).toEqual('bcdef');
    });
});