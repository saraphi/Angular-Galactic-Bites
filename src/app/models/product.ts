export interface Product {
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    category: Category;
}

/*
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
*/