export class Product {
    public id: string;
    public image: string;
    public name: string;
    public description: string;
    private price: number;
    public discount: number;

    constructor(id: string, image: string, name: string, description: string, price: number, discount: number) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
    }

    get getPrice(): number {
        return this.price - this.price*this.discount;
    }

    public isOnOffer(): boolean {
        return this.discount > 0;
    }
} 