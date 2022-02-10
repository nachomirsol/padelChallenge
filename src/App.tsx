/** Libraries */
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
/** Redux */
import { configureStore } from 'store/store';
/** Routes */
import { AppRoutes } from './routes';

export const App = () => {
	return (
		<Provider store={configureStore}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);
};
