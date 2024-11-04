import { CardProps } from '../ICard';

import '../CreditCardForm.scss';
import { CardHolder } from './cardHolder';
import CardNumber from './cardNumber';
import { CvvField } from './cvvField';

export const CreditCard: React.FC<CardProps> = ({
	status,
	number,
	name,
	expirationMonth,
	expirationYear,
	cvv,
}) => (
	<div className={`card ${status}`}>
		<div className="card__front">
			<div className="card__front__top-row">
				<div className="card__front__top-row__chip"></div>
				<div className="card__front__top-row__type"></div>
			</div>
			<CardNumber number={number} />
			<div className="card__front__bottom-row">
				<CardHolder name={name} />
				<div className="card__front__bottom-row__expires-date">
					<div className="card__front__bottom-row__expires-date__label">
						Expires
					</div>
					<div className="card__front__bottom-row__expires-date__value">
						<div className="expires-date-item">{expirationMonth}</div>/
						<div className="expires-date-item">{expirationYear}</div>
					</div>
				</div>
			</div>
		</div>
		<div className="card__back">
			<div className="card__back__black-line"></div>
			<CvvField cvv={cvv} />
			<div className="card__back__card-type"></div>
		</div>
	</div>
);
