import React, { useState } from 'react';
/** Assets */
import { HeartIcon } from 'assets/icons/heart';
/** Types */
import { CardType } from './types';
/** Styles */
import './styles/card.scss';
export const Card: React.FC = ({
	id,
	title,
	description,
	likes,
	imgUrl,
}: CardType) => {
	return (
		<div className='card'>
			<div className='card__image'>
				<img src={imgUrl} alt={description} />
			</div>
			<div className='card__footer'>
				<div className='card__footer-title'>{title}</div>
				<div className='card__footer-actions'>
					<HeartIcon />
					<span>{likes}</span>
				</div>
			</div>
		</div>
	);
};
