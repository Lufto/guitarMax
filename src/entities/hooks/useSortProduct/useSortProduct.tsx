import { useSelector } from 'react-redux';
import { ISortProduct } from './ISortProduct';
import { SortProductSelector } from './sortProductSelector';

const useSortProduct = (): ISortProduct => {
	const { filteredProducts, cutList } = useSelector(SortProductSelector);

	return { filteredProducts, cutList };
};

export default useSortProduct;
