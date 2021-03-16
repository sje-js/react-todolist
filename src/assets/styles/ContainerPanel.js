import styled from "styled-components";

const ContainerPanel = styled.div`
	width: 100%;
	max-width: 820px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export default ContainerPanel;
