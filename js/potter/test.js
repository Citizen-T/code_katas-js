describe('Potter', () => {
    it('should return $0.00 for empty cart', () => {
        let cart = {};
        expect(Potter.of(cart)).toBe(0);
    });
    it('should return $8.00 given any one title', () => {
        let cart = {
            book_1: 1
        };
        expect(Potter.of(cart)).toBe(800);
    });
    it('should return $15.20 given any two titles', () => {
        let cart = {
            book_1: 1,
            book_2: 1
        };
        expect(Potter.of(cart)).toBe(1520);
    });
    it('should return $21.60 given any three titles', () => {
        let cart = {
            book_1: 1,
            book_2: 1,
            book_3: 1
        };
        expect(Potter.of(cart)).toBe(2160);
    });
    it('should return $27.20 given any three titles', () => {
        let cart = {
            book_1: 1,
            book_2: 1,
            book_3: 1,
            book_4: 1
        };
        expect(Potter.of(cart)).toBe(2720);
    });
    it('should return $32.00 given any three titles', () => {
        let cart = {
            book_1: 1,
            book_2: 1,
            book_3: 1,
            book_4: 1,
            book_5: 1
        };
        expect(Potter.of(cart)).toBe(3200);
    });
    it('should return $36.00 given any three titles', () => {
        let cart = {
            book_1: 1,
            book_2: 1,
            book_3: 1,
            book_4: 1,
            book_5: 1,
            book_6: 1
        };
        expect(Potter.of(cart)).toBe(3600);
    });
    it('should return $39.20 given any three titles', () => {
        let cart = {
            book_1: 1,
            book_2: 1,
            book_3: 1,
            book_4: 1,
            book_5: 1,
            book_6: 1,
            book_7: 1
        };
        expect(Potter.of(cart)).toBe(3920);
    });
    it('should return $16.00 given two copies of the same title', () => {
        let cart = {
            book_1: 2
        };
        expect(Potter.of(cart)).toBe(1600);
    });
    it('acceptance test', () => {
        let cart = {
            book_1: 1,
            book_2: 2,
            book_3: 3,
            book_4: 4,
            book_5: 5,
            book_6: 6,
            book_7: 7
        };
        expect(Potter.of(cart)).toBe(3920+3600+3200+2720+2160+1520+800);
    });
});