import { TProduct } from '../../../features/slice/productSlice/IProductSlice';

export interface ISortProduct {
	filteredProducts: TProduct[];
	cutList: TProduct[];
}
