import styled from "styled-components";

const Title = styled.h3`
	color: ${(props) => (props.color ? props.color : "#1abc9c")};
	font-weight: bold;
	font-size: 1.9rem;
	line-height: 1;
	margin-bottom: 0.7rem;
`;

export default Title;
