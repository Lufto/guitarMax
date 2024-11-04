import '../CreditCardForm.scss';

const CardNumber: React.FC<{ number: string }> = ({ number }) => {
	// Функция для обработки и маскирования номера карты
	const cardNumberHandler = (inboundNumber: string): string => {
		const hashes = '#### #### #### ####'.split('');

		for (let i = 0; i < inboundNumber.length; i++) {
			if (i > 4 && i < 15 && hashes[i] !== ' ') {
				hashes[i] = '*';
			} else {
				hashes[i] = inboundNumber[i];
			}
		}
		return hashes.join('');
	};

	return (
		<div className="card__front__number">
			{cardNumberHandler(number)
				.split(' ')
				.map((numGroup, groupIdx) => (
					<div
						key={groupIdx}
						className="card__front__number__group"
					>
						{numGroup.split('').map((digit, digitIdx) => (
							<div
								key={digitIdx}
								className="card__front__number__group__item"
							>
								{digit}
							</div>
						))}
					</div>
				))}
		</div>
	);
};

export default CardNumber;
