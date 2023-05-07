import { Category } from 'src/app/models/category';

export interface Product {
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    category: string;
    hasPoints: boolean;
}
