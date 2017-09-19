PRICE_PER_BOOK = 800;

Potter = {
    of: function(cart) {
        let total = 0;
        for (let i=1; ; i++) {
            let collection = this._extractCollection(cart, i);
            if (collection.length === 0)
                break;
            total += this._priceCollection(collection);
        }
        return total;
    },

    _extractCollection: function(cart, i) {
        let collection = [];
        Object.keys(cart).forEach((title) => {
            if (cart[title] >= i)
                collection.push(cart[title]);
        }, this);
        return collection;
    },

    _priceCollection: function(collection) {
        return Math.ceil(this._fullPrice(collection) * (1 - this._calcDiscount(collection)));
    },

    _fullPrice: function(collection) {
        return collection.length * PRICE_PER_BOOK;
    },

    _calcDiscount: function(collection) {
        if (collection.length <= 1)
            return 0;
        return (collection.length - 1) * 0.05;
    }
};