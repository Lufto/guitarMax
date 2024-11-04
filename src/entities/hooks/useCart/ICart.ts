import { TCartItem } from '../../../features/slice/cartSlice/ICartSlice';
import { TProduct } from '../../../features/slice/productSlice/IProductSlice';

export interface ICartFunction {
	handleAddToCart?: (data: TProduct) => void;
	handleDeleteToCart?: (id: number | string) => void;
	handlePutToCart?: (data: TCartItem, current: number) => void;
}

export interface ICart extends ICartFunction {
	allCurrentItem: number;
	sumOrder: number;
	cartItem: TCartItem[];
}
