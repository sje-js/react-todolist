import React from "react";
import "../assets/css/todolist.css";
import { LineGradientSvg } from "../constants";
import shape from "../assets/img/shape.png";
import styled from "styled-components";
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
const ContainerSignUpForm = styled(ContainerPanelForm)`
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
const SignUp = () => {
	return (
		<Container>
			<span className="big-circle"></span>
			<img src={shape} className="square" alt="" />
			<ContainerPanel>
				<ContainerPanelInfo>
					{/* conteudo */}
					<AlignItem direction="column">
						<Title color="#ffffff">Hello, Friend!</Title>
						<Text>Enter your personal details</Text>
						<Text>and start journey with us</Text>
						<ButtonSecond id="signup">SIGN UP</ButtonSecond>
					</AlignItem>
				</ContainerPanelInfo>

				<ContainerSignUpForm>
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
				</ContainerSignUpForm>
			</ContainerPanel>
		</Container>
	);
};

export default SignUp;
