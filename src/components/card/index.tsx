/** Assets */
import { HeartIcon } from 'assets/icons/heart';
/** Types */
import { CardType } from './types';
/** Styles */
import './styles/card.scss';

export const Card = ({
	id,
	title,
	description,
	likes,
	imgUrl,
	onClick,
}: CardType) => {
	return (
		<div className='card' role='card'>
			<div className='card__image'>
				<img src={imgUrl} alt={description} />
			</div>
			<div className='card__footer'>
				<div className='card__footer-title'>{title}</div>
				<div className='card__footer-actions'>
					<span onClick={() => onClick(id)} role='like'>
						<HeartIcon />
					</span>
					<span>{likes}</span>
				</div>
			</div>
		</div>
	);
};
