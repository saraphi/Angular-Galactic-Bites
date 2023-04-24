export class ShoppingCart {
    public items: {};
    public totalPrice: number = 0;   
    
    constructor(items: {}) {
        this.items = items;
    } 
}