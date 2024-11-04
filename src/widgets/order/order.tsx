import { FC, useState } from 'react';
import style from './order.module.scss';
import AddressForm from './stageOrder/addressForm/addressForm';
import CreditCardForm from './stageOrder/CreditCardForm/creditCardForm';
import Formalization from './stageOrder/formalization/formalization';

const Order: FC = function Order() {
	const [stage, setStage] = useState('formalization');
	return (
		<section className={style.section}>
			<div className={style.container}>
				{stage === 'formalization' && <Formalization setStage={setStage} />}
				{stage === 'card' && <CreditCardForm setStage={setStage} />}
				{stage === 'address' && <AddressForm setStage={setStage} />}
			</div>
		</section>
	);
};

export default Order;
