import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button as CoreButton } from "antd";

import { baseline, breakpoints } from "../../theme/themeFunctions";

const Root = styled(CoreButton)`
	border-radius: 0;
	border: 1px solid #ffce1f;
	background-color: #b78c25;
	padding: ${baseline(1)} ${baseline(3)};
	height: ${baseline(4)};
	line-height: 1.5;
	color: #d2d2d2;
	text-transform: uppercase;
	font-weight: 600;
	transition: none;
	margin: ${baseline(1)} 0;

	:active,
	:focus,
	:hover {
		background-color: #b78c25;
		color: #d2d2d2;
		border-color: #fefefe;
	}

	@media ${breakpoints.medium} {
		margin: 0;

		:not(:first-of-type) {
			margin-left: ${baseline(1)};
		}
	}
`;

const Button = props => {
	const { children, to, onClick } = props;

	return (
		<Root onClick={onClick}>
			<Link href={to}>{children}</Link>
		</Root>
	);
};

export default Button;