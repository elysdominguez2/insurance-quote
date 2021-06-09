import React from 'react';
import styled from '@emotion/styled';

let Spinner = require('react-spinkit');

const Spin = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: center;
`;

const SpinnerIcon = () => {
	return (
		<Spin>
			<Spinner name="folding-cube" color="#1ab1c5" />
		</Spin>
	);
};

export default SpinnerIcon;
