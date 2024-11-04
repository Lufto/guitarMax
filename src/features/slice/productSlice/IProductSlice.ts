export interface TProduct {
	id: number | string;
	name: string;
	type: string;
	stock_quantity: number;
	is_bestseller: boolean;
	price: number;
	image: string;
	rating: number;
}

export interface IProductSlice {
	products: TProduct[];
	maxPrise: number;
}
