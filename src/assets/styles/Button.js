import styled from "styled-components";

const Button = styled.button`
	padding: 0.8rem 2.2rem;
	background-color: #1abc9c;
	border: 1px solid #fafafa;
	font-size: 0.7rem;
	color: #ffffff;
	line-height: 1;
	border-radius: 25px;
	outline: none;
	cursor: pointer;
	transition: 0.3s;
	margin: 0;
	&:hover {
		background-color: transparent;
		color: #1abc9c;
		border: 1px solid #1abc9c;
	}
`;
export default Button;
