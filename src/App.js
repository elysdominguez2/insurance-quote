import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';
import SpinnerIcon from './components/Spinner';

import styled from '@emotion/styled';

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const FormContainer = styled.div`
	background-color: #fff;
	padding: 3rem;
`;

function App() {
	const [resume, setResume] = useState({
		quote: 0,
		data: {
			brand: '',
			year: '',
			plan: '',
		},
	});

	const [loading, setLoading] = useState(false);

	const { quote, data } = resume;

	return (
		<Container>
			<Header title="Insurance quote" />
			<FormContainer>
				<Form setResume={setResume} setLoading={setLoading} />
				{loading ? <SpinnerIcon /> : null}
				<Resume data={data} />
				{!loading ? <Result quote={quote} /> : null}
			</FormContainer>
		</Container>
	);
}

export default App;
