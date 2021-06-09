import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Text = styled.p`
	text-align: center;
	background-color: #d63012;
	color: #fff;
	padding: 1rem;
`;

const QuoteResult = styled.p`
	text-align: center;
	color: #fff;
	padding: 1rem;
	text-transform: uppercase;
`;
const TextResult = styled.div`
	border: 1px solid #26c6da;
	background-color: #1ab1c5;
	margin-top: 1rem;
	position: relative;
`;

const Result = ({ quote }) => {
	return quote === 0 ? (
		<Text>Choose Brand, Year and Plan</Text>
	) : (
		<TextResult>
			<QuoteResult>The quote is: ${quote}</QuoteResult>
		</TextResult>
	);
};

Result.propTypes = {
	quote: PropTypes.number.isRequired,
};

export default Result;
