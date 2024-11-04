import { useEffect } from 'react';
import {
	setAllCurrentPage,
	setPageActive,
} from '../../../features/slice/pageSlice/pageSlice';
import { useAppDispatch, useAppSelector } from '../ReduxHooks/reduxHooks';
import useSortProduct from '../useSortProduct/useSortProduct';
import { IPage } from './IPage';

const usePage = (): IPage => {
	const dispatch = useAppDispatch();
	const { allCurrentPage, pageActive } = useAppSelector(state => ({
		allCurrentPage: state.page.allCurrentPage,
		pageActive: state.page.pageActive,
	}));

	const { filteredProducts } = useSortProduct();

	useEffect(() => {
		dispatch(
			setAllCurrentPage(
				filteredProducts && filteredProducts.length
					? Math.ceil(filteredProducts.length / 9)
					: 0
			)
		);
		dispatch(
			setPageActive(
				pageActive > allCurrentPage && allCurrentPage !== 0
					? allCurrentPage
					: pageActive
			)
		);
	}, [dispatch, filteredProducts]);

	const updatePageActive = (page: number) => {
		dispatch(setPageActive(page));
	};

	return {
		pageActive,
		setPageActive: updatePageActive,
		allCurrentPage,
	};
};

export default usePage;
