import { FC, useState } from 'react';
import { Button } from '../../../../entities/ui/button/button';
import { IOrder } from '../../IOrder';

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { YMapsApi } from '@pbe/react-yandex-maps/typings/util/typing';
import { Link } from 'react-router-dom';
import Input from '../../../../entities/ui/input/input';
import style from './addressForm.module.scss';

const AddressForm: FC<IOrder> = function Formalization({ setStage }) {
	const [coordinates, setCoordinates] = useState([55.751574, 37.573856]);
	const [addressDetails, setAddressDetails] = useState({
		city: '',
		street: '',
		house: '',
	});

	const getAddress = (coords: PlacemarkGeometry): void => {
		window.ymaps.geocode(coords).then((res: YMapsApi) => {
			const firstGeoObject = res.geoObjects.get(0);
			const city =
				firstGeoObject.getLocalities().join(', ') || 'Неизвестный город';
			const street = firstGeoObject.getThoroughfare() || 'Неизвестная улица';
			const house = firstGeoObject.getPremiseNumber() || 'Без номера дома';

			setAddressDetails({ city, street, house });
		});
	};

	const handleMapClick = event => {
		const coords = event.get('coords');
		setCoordinates(coords);
		getAddress(coords);
	};

	// Обработчик окончания перетаскивания метки
	const handleDragEnd = event => {
		const newCoords = event.get('target').geometry.getCoordinates();
		setCoordinates(newCoords);
		getAddress(newCoords);
	};

	return (
		<>
			<div className={style.address}>
				<YMaps query={{ load: 'geocode' }}>
					<Map
						defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
						width="100%"
						height="400px"
						onClick={handleMapClick}
					>
						<Placemark
							geometry={coordinates}
							options={{ draggable: true }}
							onDragEnd={handleDragEnd}
						/>
					</Map>
				</YMaps>
				<form action="">
					<Input
						name={'city'}
						placeholder={'Город'}
						type={'text'}
						value={addressDetails.city}
					/>
					<Input
						name={'street'}
						placeholder={'Улица'}
						type={'text'}
						value={addressDetails.street}
					/>
					<Input
						name={'house'}
						placeholder={'дом'}
						type={'text'}
						value={addressDetails.house}
					/>
				</form>
			</div>
			<div className="button_menu">
				<Button
					mod="secondaryGray"
					onClick={() => setStage('card')}
				>
					Назад
				</Button>
				<Link to="/">
					<Button mod="brawn">Продолжить</Button>
				</Link>
			</div>
		</>
	);
};

export default AddressForm;
