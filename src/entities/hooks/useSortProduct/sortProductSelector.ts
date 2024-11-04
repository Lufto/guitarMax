import { createSelector } from '@reduxjs/toolkit';
import { TProduct } from '../../../features/slice/productSlice/IProductSlice';

export const SortProductSelector = createSelector(
	state => state.product.products,
	state => state.page.pageActive,
	state => state.paramsSort.search,
	state => state.paramsSort.typesFilter,
	state => state.paramsSort.sort,
	state => state.paramsSort.absence,
	state => state.paramsSort.bestseller,
	state => state.paramsSort.fromPrise,
	state => state.paramsSort.upPrise,
	(
		products: TProduct[],
		pageActive: number,
		search: string,
		typesFilter: string[],
		sort: string,
		absence: boolean,
		bestseller: boolean,
		fromPrise: number,
		upPrise: number
	) => {
		let filteredProducts = [...products];

		filteredProducts = filteredProducts.filter(product => {
			return product.price >= fromPrise && product.price <= upPrise;
		});

		if (typesFilter.length !== 0) {
			filteredProducts = filteredProducts.filter(product => {
				return typesFilter.some((filter: string) => filter === product.type);
			});
		}

		if (absence) {
			filteredProducts = filteredProducts.filter(product => {
				return product.stock_quantity > 0;
			});
		}

		if (bestseller) {
			filteredProducts = filteredProducts.filter(product => {
				return product.is_bestseller;
			});
		}

		if (search.trim()) {
			const searchRegex = new RegExp(search.trim(), 'i');
			filteredProducts = filteredProducts.filter(product => {
				return searchRegex.test(product.name);
			});
		}

		if (filteredProducts) {
			if (sort === 'По рейтингу') {
				filteredProducts.sort(
					(a: TProduct, b: TProduct) => a.rating - b.rating
				);
			}
			if (sort === 'По цене') {
				filteredProducts.sort((a: TProduct, b: TProduct) => a.price - b.price);
			}
		}

		const cutList = filteredProducts.slice(
			9 * (pageActive - 1),
			9 * pageActive
		);

		return { filteredProducts, cutList };
	}
);
