let menu = {
    _meal: '',
    _price: 0,
    /**
     * @param {string} meal
     */
    set mealToCheck(meal) {
        if (typeof meal === 'string') {
            this._meal = meal;
        }
    },
    /**
     * @param {number} price
     */
    set priceToCheck(price) {
        if (typeof price === 'number') {
            this._price = price;
        }
    },
    get todaysSpecial() {
        if (this._meal === null && this._price === null) {
            return 'Meal or price was not set correctly!';
        } else {
            return `Today's Special is ${this._meal} for $${this._price}!`;
        }
    }
}

menu.mealToCheck = 'Chicken';
menu.priceToCheck = 5;

console.log(menu.todaysSpecial);