/** Libraries */
import { useSelector } from 'react-redux';
/** Styles */
import './styles/dashboard.scss';

export const Dashboard = () => {
	const testSelector = useSelector((state) => state.user);
	console.log(testSelector);
	return <div className='dashboard'>Dashboard Page</div>;
};
