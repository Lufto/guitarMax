import { FC } from 'react';
import PaginationItem from '../../../entities/ui/paginationItem/paginationItem';
import { IPage } from '../../../entities/hooks/usePage/IPage';

const PaginationList: FC<IPage> = function PaginationList({
	pageActive,
	allCurrentPage,
	setPageActive,
}) {
	const createPaginationItem = (page: number | string, disable = false) => (
		<PaginationItem
			key={page === '...' ? Math.random() : page}
			current={page}
			active={page === pageActive}
			disable={disable}
			onClick={() => typeof page === 'number' && setPageActive(page)}
		/>
	);

	const paginationItems = [];

	paginationItems.push(createPaginationItem(1));

	if (pageActive > 3) paginationItems.push(createPaginationItem('...', true));

	for (
		let i = Math.max(2, pageActive - 1);
		i <= Math.min(allCurrentPage - 1, pageActive + 1);
		i += 1
	) {
		paginationItems.push(createPaginationItem(i));
	}

	if (pageActive < allCurrentPage - 2)
		paginationItems.push(createPaginationItem('...', true));

	paginationItems.push(createPaginationItem(allCurrentPage));

	return paginationItems;
};

export default PaginationList;
