import { TProduct } from '../../../../features/slice/productSlice/IProductSlice';

export interface IModalCard {
	data: TProduct;
	onAdd: () => void;
	currentCard?: boolean;
}
