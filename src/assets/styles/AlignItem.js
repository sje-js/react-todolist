import styled from "styled-components";

const AlignItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${(props) => (props.direction ? props.direction : "row")};
`;

export default AlignItem;
