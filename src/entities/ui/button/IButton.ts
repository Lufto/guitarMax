import { ButtonHTMLAttributes } from 'react';

export type ButtonPropsMod = 'brawn' | 'grey' | 'secondaryGray';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	mod: ButtonPropsMod;
}
