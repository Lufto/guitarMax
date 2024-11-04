import { TCartItem } from '../../../features/slice/cartSlice/ICartSlice';
import { TProduct } from '../../../features/slice/productSlice/IProductSlice';
import { CartListPropsMod } from '../../../shared/cartList/ICartList';
import { ICartFunction } from '../../hooks/useCart/ICart';

export type ICardMod = 'cart' | 'product';

export interface ICart extends ICartFunction {
	mod: ICardMod | CartListPropsMod;
	cartItem?: TCartItem[];
}

export interface ICardCart extends ICart {
	data: TCartItem;
}

export interface ICardProduct extends ICart {
	data: TProduct;
}

export const isCartItem = (item: TCartItem | TProduct): item is TCartItem => {
	return 'ordered_quantity' in item;
};
