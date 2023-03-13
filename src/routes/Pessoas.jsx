import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Pessoas = () => {
	return (
		<>
			<Form>
				<Form.Group className="mb-3" controlId="formPessoaNome">
					<Form.Label>Nome</Form.Label>
					<Form.Control type="text" placeholder="Nome..." />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPessoaCPF">
					<Form.Label>CPF</Form.Label>
					<Form.Control type="text" placeholder="CPF..." />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPessoaNome">
					<Form.Label>Nome</Form.Label>
					<Form.Control type="text" placeholder="Nome..." />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};

export default Pessoas;
