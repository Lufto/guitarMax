import { FC } from 'react';
import { IButton } from './IButton';

import clsx from 'clsx';
import style from './button.module.scss';

export const Button: FC<IButton> = ({ className, mod, ...props }) => {
	return (
		<button
			{...props}
			className={clsx(
				className,
				style.button,
				{
					brawn: style.brawn,
					grey: style.grey,
					secondaryGray: style.secondaryGray,
				}[mod]
			)}
		/>
	);
};
