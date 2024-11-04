import clsx from 'clsx';
import { FC } from 'react';
import { IPaginationItem } from './IPaginationItem';

import style from './paginationItem.module.scss';

const PaginationItem: FC<IPaginationItem> = function PaginationItem({
	current,
	arrow,
	active,
	disable,
	onClick,
}) {
	return (
		<li>
			<button
				className={clsx({
					[style.arrow]: arrow,
					[style.active]: active,
					[style.disable]: disable,
					[style.pagination_item]: !disable && !arrow && !active,
				})}
				type="button"
				onClick={onClick}
			>
				{current}
			</button>
		</li>
	);
};

export default PaginationItem;
