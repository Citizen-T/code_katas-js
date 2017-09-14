FizzBuzz = {
    of: function(n) {
        if (n === 0)
            return 0;
        return this._of(n);
    },

    _of: function(n) {
        let s = '';
        if (n % 3 === 0)
            s += "Fizz";
        if (n % 5 === 0)
            s += "Buzz";
        return s === '' ? n : s;
    }
};