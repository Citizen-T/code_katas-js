const compress = {
    Strings: {
        compress: function(s) {
            if (s.length <= 2)
                return s;
            let compressed = s[0];
            let count = 1;
            for (let i=1; i < s.length; i++) {
                let char = compressed[compressed.length-1];
                if (s[i] === char) {
                    count++;
                } else {
                    if (count > 1)
                        compressed += count;
                    compressed += s[i];
                    count = 1;
                }
            }
            if (count > 1)
                compressed += count;
            return compressed;
        }
    }
};