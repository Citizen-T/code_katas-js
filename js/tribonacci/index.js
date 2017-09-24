Tribonacci = {
    of: function(signature, n) {
        let sequence = [];
        for (let i=0; i < n; i++) {
            let next = (i < signature.length)
                ? signature[i]
                : sequence[i-1] + sequence[i-2] + sequence[i-3];
            sequence.push(next);
        }
        return sequence;
    }
}