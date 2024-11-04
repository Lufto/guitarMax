import { TProduct } from '../productSlice/IProductSlice';

export interface TCartItem extends TProduct {
	id: number | string;
	id_products: number | string;
	ordered_quantity: number;
}

export interface ICartSlice {
	cartItem: TCartItem[];
}
