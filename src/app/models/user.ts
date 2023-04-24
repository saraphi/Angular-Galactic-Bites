import { ShoppingCart } from "./shopping-cart";

export class User {
    public id: string;
    public name: string;
    private email: string;
    private password: string;
    private phone: string;
    public points: number;
    private shoppingCart: ShoppingCart;

    constructor(id: string, name: string, email: string, password: string, phone: string, points: number, shoppingCart: ShoppingCart) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.points = points;
        this.shoppingCart = shoppingCart;
    }

    get getEmail() {
        return this.email;
    }

    get getPhone() {
        return this.phone;
    }

    get getShoppingCart() {
        return this.shoppingCart;
    }
}