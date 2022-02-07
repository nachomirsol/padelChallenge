/** Libraries */
import { useSelector } from 'react-redux';
/** Components */
import { Searchbar } from 'components/searchbar';
import { Button } from 'components/button';
/** Styles */
import './styles/dashboard.scss';

export const Dashboard = () => {
	const testSelector = useSelector((state) => state.user);
	console.log(testSelector);
	return (
		<div className='dashboard'>
			<div className='dashboard__filter'>
				<Searchbar
					type='password'
					placeholder={'Search...'}
					width={'30%'}
					name={'password'}
					onChange={() => ({})}
					value={''}
				/>
				<Button
					width={'100px'}
					label={'Filter'}
					height={'auto'}
					onClick={() => ({})}
				/>
			</div>

			<div className='dashboard__grid'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
					return <div className='dashboard__grid-item'>{item}</div>;
				})}
			</div>
		</div>
	);
};
