import { Product } from "./product.model";

export interface Menu {
    id: string;
    image: string;
    name: string;
    description: string;
    products: Product[];
    price: number;
    discount: number;
}