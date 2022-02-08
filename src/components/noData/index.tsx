/** Types */
import { NoDataTypes } from './types';
/** Styles */
import './styles/noData.scss';

export const NoData = ({ label = 'No Data' }: NoDataTypes) => {
	return <div className='noData'>{label}</div>;
};
