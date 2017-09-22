describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = Stack.make(2);
    });

    it('should be empty just after it is created', () => {
        expect(stack.size).toBe(0);
    });

    it('should have size=1 after first push', () => {
        stack.push('a');
        expect(stack.size).toEqual(1);
    });

    it('should have size=0 after first push then pop', () => {
        stack.push('a');
        stack.pop();
        expect(stack.size).toEqual(0);
    });

    it('should throw Stack.UnderflowError when popping off of an empty stack', () => {
        let expected = Stack.UnderflowError.make();
        expect(() => stack.pop()).toThrow(expected);
    });

    it('should throw Stack.OverflowError when pushing onto stack that is at capacity', () => {
        stack.push('a');
        stack.push('b');
        expect(() => stack.push('c')).toThrow(Stack.OverflowError.make(2));
    });

    it('should pop the same element that was just pushed', () => {
        stack.push('a');
        expect(stack.pop()).toEqual('a');
    });

    it('should pop elements in reverse of the order that they were pushed', () => {
        stack.push('a');
        stack.push('b');
        expect(stack.pop()).toEqual('b');
        expect(stack.pop()).toEqual('a');
    });
});