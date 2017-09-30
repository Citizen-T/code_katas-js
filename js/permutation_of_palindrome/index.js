const Strings = {
    isPermutationOfPalindrome: function(s) {
        let counts = {};
        for (let i=0; i < s.length; i++) {
            let char = s[i];
            let count = counts[char];
            if (!count)
                count = 0;
            counts[char] = ++count;
        }
        return this._isPalindrome(counts);
    },

    _isPalindrome: function(counts) {
        let odds = 0;
        for (let char in counts) {
            let count = counts[char];
            if (count % 2 !== 0)
                odds++;
            if (odds > 1)
                return false;
        }
        return true;
    }
};