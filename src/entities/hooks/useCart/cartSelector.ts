import { createSelector } from '@reduxjs/toolkit';

export const CartSelector = createSelector(
	state => state.cart.cartItem,
	cartItem => {
		const cartItemCopy = [...cartItem];

		const allCurrentItem = cartItemCopy.reduce(
			(accumulator, value) => accumulator + value.ordered_quantity,
			0
		);

		const sumOrder = cartItemCopy.reduce(
			(accumulator, value) =>
				accumulator + value.price * value.ordered_quantity,
			0
		);

		return { allCurrentItem, sumOrder, cartItem };
	}
);
