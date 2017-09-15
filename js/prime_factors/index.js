PrimeFactors = {
    of: function(n) {
        let factors = [];
        for (let divisor = 2; divisor <= n; divisor++)
            for (; n % divisor === 0; n /= divisor)
                factors.push(divisor);
        return factors;
    }
};