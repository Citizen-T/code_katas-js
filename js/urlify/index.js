const URLs = {
    escape: function(href) {
        href = href.split('');
        let back = 2*this._countSpaces(href) + href.length;
        for (let i=href.length-1; i >= 0; i--) {
            let char = href[i];
            if (char !== ' ') {
                href[--back] = char;
            } else {
                href[--back] = '0';
                href[--back] = '2';
                href[--back] = '%';
            }
        }
        return href.join('');
    },

    _countSpaces: function(s) {
        let count = 0;
        for (let i=0; i < s.length; i++) {
            if (s[i] === ' ')
                count++;
        }
        return count;
    }
}