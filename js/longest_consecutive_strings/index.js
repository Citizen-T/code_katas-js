Longest = {
    of: function(list, k) {
        if (k < 0)
            return '';
        let largest = '';
        for (let i=0; i+k <= list.length; i++) {
            let s = list.slice(i, i+k).join('');
            if (s.length > largest.length)
                largest = s;
        }
        return largest;
    }
};