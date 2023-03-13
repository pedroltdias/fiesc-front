import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Contas from './routes/Contas';
import Movimentacoes from './routes/Movimentacoes';
import Pessoas from './routes/Pessoas';
import AppNav from './components/AppNav';
import { Container } from 'react-bootstrap';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Pessoas />,

	},
	{
		path: "/contas",
		element: <Contas />,
	},
	{
		path: "/movimentacoes",
		element: <Movimentacoes />,
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppNav />
		<Container>
			<RouterProvider router={router} />
		</Container>
	</React.StrictMode>,
)
