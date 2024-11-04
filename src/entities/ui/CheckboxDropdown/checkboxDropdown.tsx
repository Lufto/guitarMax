import { FC, useState } from 'react';

import clsx from 'clsx';
import Checkbox from '../checkbox/checkbox';
import { ICheckboxDropdown } from './ICheckboxDropdown';
import style from './checkboxDropdown.module.scss';
const CheckboxDropdown: FC<ICheckboxDropdown> = function Select({
	data,
	name,
}) {
	const [active, setActive] = useState(false);

	return (
		<li>
			<div className={clsx(style.select, active ? style.active : '')}>
				<div
					className={style.NameFilter}
					onClick={() => setActive(!active)}
				>
					{name}
				</div>
				<ul className={style.listCheckbox}>
					{data.map(data => {
						return (
							<Checkbox
								data={data}
								key={data.id}
							/>
						);
					})}
				</ul>
			</div>
		</li>
	);
};

export default CheckboxDropdown;
