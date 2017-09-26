const StringCalculator = {
    add: function(s) {
        if (!s)
            return 0;
        let answer = 0;
        let numbers = s.split(new RegExp(',|\\n'));
        numbers.forEach((n) => {
            answer += parseInt(n);
        }, this);
        return answer;
    }
};