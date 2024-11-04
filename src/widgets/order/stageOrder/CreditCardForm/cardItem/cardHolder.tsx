import '../CreditCardForm.scss';

export const CardHolder: React.FC<{ name: string }> = ({ name }) => (
	<div className="card__front__bottom-row__card-holder">
		<div className="card__front__bottom-row__card-holder__label">
			Card Holder
		</div>
		<div className="card__front__bottom-row__card-holder__value">{name}</div>
	</div>
);
