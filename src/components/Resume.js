import React from 'react';
import { firstCapitalLetter } from '../helper';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContainerResume = styled.div`
	padding: 1rem;
	text-align: center;
	background-color: #00838f;
	color: #fff;
	margin-top: 1rem;
`;

const Resume = ({ data }) => {
	const { brand, year, plan } = data;

	if (brand === '' || year === '' || plan === '') return null;

	return (
		<ContainerResume>
			<h2> Quote Summary </h2>
			<ul>
				<li> Brand: {firstCapitalLetter(brand)} </li>
				<li> Year: {firstCapitalLetter(year)} </li>
				<li> Plan: {firstCapitalLetter(plan)} </li>
			</ul>
		</ContainerResume>
	);
};

Resume.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Resume;
