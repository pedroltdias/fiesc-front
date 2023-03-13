import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const AppNav = () => {
	return (
		<>
			<Navbar bg="light" variant="light">
				<Container>
					<Navbar.Brand href="/">FIESC</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Pessoas</Nav.Link>
						<Nav.Link href="/contas">Contas</Nav.Link>
						<Nav.Link href="/movimentacoes">Movimentações</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default AppNav;
