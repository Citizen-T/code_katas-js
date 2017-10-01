const one_edit = {};
one_edit.Strings = {
    offByOne: function(s1, s2) {
        if (s1 === s2)
            return true;
        if (Math.abs(s1.length - s2.length) > 1)
            return false;
        let edits = 0;
        for (let i=0, j=0; i < s1.length && j < s2.length; ) {
            if (s1[i] === s2[j]) {
                i++;
                j++;
            } else if (s1.length < s2.length) {
                j++;
                edits++;
            } else if (s1.length > s2.length) {
                i++;
                edits++;
            } else {
                i++;
                j++;
                edits++;
            }
            if (edits > 1)
                return false;

        }
        return true;
    }
};