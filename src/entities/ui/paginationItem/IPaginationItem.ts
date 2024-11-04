import { ReactNode } from 'react';

export interface IPaginationItem {
	current: number | string | ReactNode;
	arrow?: boolean;
	active?: boolean;
	disable?: boolean;
	onClick?: () => void;
}
