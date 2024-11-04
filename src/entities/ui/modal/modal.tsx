import type { MouseEventHandler } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import close from '../../../assets/icons/close.svg';
import { TProduct } from '../../../features/slice/productSlice/IProductSlice';
import Portal, { createContainer } from '../../portal/portal';
import styles from './modal.module.scss';
import ModalCard from './modalChildren/modalCard';

const MODAL_CONTAINER_ID = 'modal-container-id';

type Props = {
	data: TProduct;
	onClose?: () => void;
	onAdd: () => void;
	currentCard?: boolean;
};

const Modal = (props: Props) => {
	const { data, onClose, onAdd, currentCard } = props;

	const rootRef = useRef<HTMLDivElement>(null);
	const [isMounted, setMounted] = useState(false);

	useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID });
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleWrapperClick = (event: MouseEvent) => {
			const { target } = event;

			if (target instanceof Node && rootRef.current === target) {
				onClose?.();
			}
		};
		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose?.();
			}
		};

		window.addEventListener('click', handleWrapperClick);
		window.addEventListener('keydown', handleEscapePress);

		return () => {
			window.removeEventListener('click', handleWrapperClick);
			window.removeEventListener('keydown', handleEscapePress);
		};
	}, [onClose]);

	const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
		useCallback(() => {
			onClose?.();
		}, [onClose]);

	return isMounted ? (
		<Portal id={MODAL_CONTAINER_ID}>
			<div
				className={styles.wrap}
				ref={rootRef}
				data-testid="wrap"
			>
				<div className={styles.content}>
					<button
						type="button"
						className={styles.closeButton}
						onClick={handleClose}
						data-testid="modal-close-button"
					>
						<img
							src={close}
							alt="Закрытие окна"
						/>
					</button>
					<ModalCard
						data={data}
						onAdd={onAdd}
						currentCard={currentCard}
					/>
				</div>
			</div>
		</Portal>
	) : null;
};

export default Modal;
