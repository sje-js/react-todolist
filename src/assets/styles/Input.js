import styled from "styled-components";

const Input = styled.input`
	width: 100%;
	outline: none;
	border: 2px solid #fafafa;
	background: #ecf0f1;
	padding: 0.6rem 1.2rem;
	color: #7f8c8d;
	font-weight: 500;
	font-size: 0.95rem;
	letter-spacing: 0.5px;
	border-radius: 25px;
	transition: 0.3s;

	::placeholder {
		color: #7f8c8d;
	}
`;
export default Input;
