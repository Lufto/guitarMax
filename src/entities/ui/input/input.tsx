import { forwardRef } from 'react';
import { IInput } from './IInput';

import style from './input.module.scss';

const Input = forwardRef<HTMLInputElement, IInput>(
	({ placeholder, type, ...props }, ref) => (
		<input
			ref={ref}
			className={style.input}
			placeholder={placeholder}
			type={type}
			{...props}
		/>
	)
);

Input.displayName = 'Input'; // Устанавливаем displayName для лучшей читаемости в отладке

export default Input;
