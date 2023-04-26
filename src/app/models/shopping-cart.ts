export class ShoppingCart {
    public items: Map<string, number>;
    private totalPrice: number = 0;   
    
    constructor(items: Map<string, number>) {
        this.items = items;
    } 

    getQuantity(itemId: string) {
        return this.items.get(itemId);
    }

    deleteItem(itemId: string) {
        this.items.delete(itemId);
    }

    addItem(itemId: string) {
        let quantity: number = 0;
        if (this.items.has(itemId)) quantity = this.items.get(itemId)!;
        this.items.set(itemId, quantity+1);
    }

    removeItem(itemId: string) {
        let quantity: number = 0;
        if (this.items.has(itemId)) quantity = this.items.get(itemId)!;
        if (quantity - 1 == 0) this.deleteItem(itemId);
        else this.items.set(itemId, quantity-1);
    }

    // NOT FINAL
    get getTotalPrice(): number {
        this.items.forEach((value: number, key: string) => {
            console.log('key:', key, '| value:', value);
            this.totalPrice += value;
        });

        return this.totalPrice;
    }
}