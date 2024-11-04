import { FC } from 'react';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import PaginationItem from '../../entities/ui/paginationItem/paginationItem';
import PaginationList from './PaginationList/paginationList';

import usePage from '../../entities/hooks/usePage/usePage';
import style from './pagination.module.scss';

const Pagination: FC = function Pagination() {
	const { pageActive, setPageActive, allCurrentPage } = usePage();

	const handlePageClick = (page: number) => {
		if (page >= 1 && page <= allCurrentPage) {
			setPageActive(page);
		}
	};

	if (!allCurrentPage || allCurrentPage === 1) {
		return null;
	}

	return (
		<nav className={style.navigate}>
			<PaginationItem
				current={
					<img
						src={arrowLeft}
						alt="Стрелка влево"
					/>
				}
				arrow={pageActive !== 1}
				disable={pageActive === 1}
				onClick={() => handlePageClick(pageActive - 1)}
			/>

			<ul className={style.navigate_list}>
				<PaginationList
					allCurrentPage={allCurrentPage}
					pageActive={pageActive}
					setPageActive={setPageActive}
				/>
			</ul>

			<PaginationItem
				current={
					<img
						src={arrowRight}
						alt="Стрелка вправо"
					/>
				}
				arrow={pageActive !== allCurrentPage}
				disable={pageActive === allCurrentPage}
				onClick={() => handlePageClick(pageActive + 1)}
			/>
		</nav>
	);
};

export default Pagination;
