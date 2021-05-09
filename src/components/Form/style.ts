import styled from 'styled-components';

export const Container = styled.form`
	display: grid;
	grid-template-columns: 1.6fr 1fr;
	grid-gap: 2rem;
	margin: 60px auto;

	@media screen and (max-width: 886px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 980px;
		margin: 10px 40px;
	}

	max-width: 1120px;
	width: 100%;
	padding: 1rem;
`;

interface INameContainer {
	isError: boolean;
}

export const NameContainer =
	styled.div <
	INameContainer >
	`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
	input {
		padding: 0.6rem;
		border: 1px solid grey;
		border-radius: 5px;
		border: ${(props) => (props.isError ? '2px solid red' : '')}
	}

	
`;

interface IEmailContainer {
	isError: boolean;
}

export const EmailContainer =
	styled.div <
	IEmailContainer >
	`
	display: flex;
	flex-direction: column;
	margin-bottom: 5rem;
	input {
		padding: 0.6rem;
		border: 1px solid grey;
		border-radius: 5px;
		border: ${(props) => (props.isError ? '2px solid red' : '')};
	}
`;

export const ContentContainer = styled.div`
	textarea {
		padding: 0.6rem;
		border: 1px solid grey;
		border-radius: 5px;
		height: 200px;
		width: 100%;
	}
`;

export const CheckContainer = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	height: 50px;
	margin-bottom: 1.3rem;

	div > input {
		margin-right: 5px;
		-ms-transform: scale(2);
		-moz-transform: scale(2);
		-webkit-transform: scale(1.5);
		border-radius: 0;
		border: 1px solid grey;
	}
`;

export const DropdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 0.6rem;

	select {
		height: 100%;
		border: 1px solid grey;
		background: transparent;
		border-radius: 5px;
		padding: 0.6rem;
	}
`;

export const OpetionContainer = styled.div`
	div {
		height: 100%;
		border: 1px solid grey;
		background: transparent;
		border-radius: 5px;
		padding: 0.6rem;
	}
`;

export const TagContainer = styled.div`
	margin-top: 2.5rem;
	button {
		padding: 10px;
		cursor: pointer;
	}
`;

export const TagArea = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-gap: 1rem;

	align-items: flex-end;

	button {
		height: 60px;
		width: 100%;
	}
`;

export const TagContent = styled.div``;

interface IPData {
	isActive: boolean;
}
export const Ptags =
	styled.p <
	IPData >
	`
	cursor: pointer;
	margin: 4px 1.3px;
	float: left;
	border: 1px solid grey;
	border-radius: 5px;
	padding: 5px;
	background: ${(props) => (props.isActive ? '#33FFFC' : '')}
`;
