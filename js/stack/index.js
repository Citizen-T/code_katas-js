Stack = {
    make: function(capacity) {
        if (!capacity)
            capacity = 0;
        return this._make(capacity);
    },

    _make: function(capacity) {
        return {
            elements: new Array(capacity),
            size: 0,

            push: function(element) {
                if (this.size === capacity)
                    throw Stack.OverflowError.make(capacity);
                this.elements[this.size++] = element;
            },

            pop: function() {
                if (this.size === 0)
                    throw Stack.UnderflowError.make();
                return this.elements[--this.size];
            }
        };
    },

    UnderflowError: {
        make: function() {
            return {};
        }
    },

    OverflowError: {
        make: function(capacity) {
            return {
                capacity: capacity
            };
        }
    }
};