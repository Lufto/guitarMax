import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
	fetchDELETECart,
	fetchGETCart,
	fetchPOSTCart,
	fetchPUTCart,
} from '../../../features/slice/cartSlice/cartSliceThunk';
import { TCartItem } from '../../../features/slice/cartSlice/ICartSlice';
import { TProduct } from '../../../features/slice/productSlice/IProductSlice';
import { useAppDispatch } from '../ReduxHooks/reduxHooks';
import { CartSelector } from './cartSelector';
import { ICart } from './ICart';

const useCart = (): ICart => {
	const { allCurrentItem, sumOrder, cartItem } = useSelector(CartSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchGETCart());
	}, [dispatch]);

	const createItem = (data: TProduct, current?: number) => {
		const newID = uuidv4();
		const cartItem = {
			id: newID,
			id_products: data.id,
			name: data.name,
			type: data.type,
			stock_quantity: data.stock_quantity,
			is_bestseller: data.is_bestseller,
			price: data.price,
			image: data.image,
			rating: data.rating,
			ordered_quantity: current || 1,
		};
		return cartItem;
	};

	const handleAddToCart = (data: TProduct) => {
		const item = createItem(data);
		dispatch(fetchPOSTCart(item));
	};

	const handlePutToCart = (data: TCartItem, current: number) => {
		data = { ...data, ordered_quantity: current };
		dispatch(fetchPUTCart(data)).then(() => dispatch(fetchGETCart()));
	};

	const handleDeleteToCart = (id: string | number) => {
		dispatch(fetchDELETECart(id)).then(() => dispatch(fetchGETCart()));
	};

	return {
		allCurrentItem,
		sumOrder,
		cartItem,
		handleAddToCart,
		handleDeleteToCart,
		handlePutToCart,
	};
};

export default useCart;
