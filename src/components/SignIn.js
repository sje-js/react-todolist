import React from "react";
import "../assets/css/todolist.css";
import { LineGradientSvg } from "../constants";
import shape from "../assets/img/shape.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../constants/fontawesome";
import {
	AlignItem,
	Button,
	Container,
	ContainerPanel,
	ContainerPanelForm,
	ContainerPanelInfo,
	ContainerInput,
	Form,
	Input,
	SocialMediaIcon,
	SocialMediaIconItem,
	Text,
	Title,
} from "../assets/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import {
	faGooglePlusG,
	faFacebookF,
	faTwitter,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { createBrowserHistory } from "history";
let history = createBrowserHistory();

library.add(faCircle, faGooglePlusG, faFacebookF, faTwitter, faLinkedinIn);

const ButtonSecond = styled(Button)`
	background-color: #1abc9c;
	color: #fafafa;
	border: 1px solid #fafafa;
	margin-top: 20px;

	&:hover {
		background-color: #fafafa;
		color: #1abc9c;
		border: 1px solid #fafafa;
	}
`;
const ContainerSignInInfo = styled(ContainerPanelInfo)`
	&:before {
		content: "";
		position: absolute;
		width: 26px;
		height: 26px;
		background-color: #1abc9c;
		transform: rotate(45deg);
		top: 50px;
		left: -13px;
	}
`;
const SignIn = () => {
	const navigate = useNavigate();
	console.log(navigator);
	return (
		<Container>
			<span className="big-circle"></span>
			<img src={shape} className="square" alt="" />
			<ContainerPanel>
				<ContainerPanelForm>
					<AlignItem direction="column">
						<Title>Sign In</Title>
						<SocialMediaIcon>
							<SocialMediaIconItem>
								<FontAwesomeIcon icon={["fab", "google-plus-g"]} size="md" />
							</SocialMediaIconItem>
							<SocialMediaIconItem>
								<FontAwesomeIcon icon={["fab", "facebook-f"]} size="md" />
							</SocialMediaIconItem>
							<SocialMediaIconItem>
								<FontAwesomeIcon icon={["fab", "linkedin-in"]} size="md" />
							</SocialMediaIconItem>
						</SocialMediaIcon>
					</AlignItem>

					<Form autoComplete="off">
						<ContainerInput>
							<Input type="email" name="email" placeholder="Email" />
						</ContainerInput>
						<ContainerInput>
							<Input type="password" name="password" placeholder="Password" />
						</ContainerInput>
						<AlignItem>
							<Button type="submit">SIGN IN</Button>
						</AlignItem>
					</Form>

					<LineGradientSvg />
				</ContainerPanelForm>
				<ContainerSignInInfo>
					{/* conteudo */}
					<AlignItem direction="column">
						<Title color="#ffffff">Hello, Friend!</Title>
						<Text>Enter your personal details</Text>
						<Text>and start journey with us</Text>
						<ButtonSecond
							onClick={() => {
								navigate("/sign-up");
							}}
							id="signup"
						>
							SIGN UP
						</ButtonSecond>
					</AlignItem>
				</ContainerSignInInfo>
			</ContainerPanel>
		</Container>
	);
};

export default SignIn;
