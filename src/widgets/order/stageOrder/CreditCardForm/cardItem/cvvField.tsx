import '../CreditCardForm.scss';

export const CvvField: React.FC<{ cvv: string }> = ({ cvv }) => (
	<div className="card__back__cvv">
		<div>CVV</div>
		<div className="card__back__cvv__field">{cvv.replace(/./g, '*')}</div>
	</div>
);
