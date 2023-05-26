export type Product = {
    data: any;
    id:number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: object;
}

export type ProductArray = Product[]; // Array of Product objects