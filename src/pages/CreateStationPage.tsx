import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoPreview from "../components/LogoPreview";
import { API_CREATE_STATION_ENDPOINT } from "../constants/constants";
import { routes } from "../constants/routes";

type FormData = {
	name: string,
	tagline: string,
	streamUrl: string,
	logo: File | null | string
}

const CreateStationPage = () => {

	const [previewUrl, setPreviewUrl] = useState<string | undefined>();

	const mutation = useMutation((requestParams: FormData) => {
		return axios.post(API_CREATE_STATION_ENDPOINT, requestParams);
	});

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget);

		const data: FormData = {
			name: formData.get('name')?.toString() ?? '',
			tagline: formData.get('tagline')?.toString() ?? '',
			streamUrl: formData.get('streamUrl')?.toString() ?? '',
			logo: formData.get('logo') instanceof File ? formData.get('logo') : null,
		};
		mutation.mutate(data)
	}

	function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const fileList = event.target.files;

		if (fileList && fileList.length > 0) {
			const fileReader = new FileReader();

			fileReader.onload = function () {
				setPreviewUrl(fileReader.result as string);
			};
			fileReader.readAsDataURL(fileList[0]);
		}
	}

	return <CreateStationPageStyles>
		<h1>Create Station</h1>
		<FormWrapContainer>
			<FormStyles onSubmit={handleFormSubmit} >
				<label htmlFor="name">  Name :<input id="name" type="text" name="name" /></label>
				<label htmlFor="tagline">Tag Line :	<input id="tagline" type="text" name="tagline" /> </label>
				<label htmlFor="streamUrl" >  URL :	<input id="streamUrl" type="url" name="streamUrl" />
				</label>
				<label htmlFor="logo" >Logo :<input id="logo" name="logo" type="file" accept="image/*" onChange={handleFileInputChange} />
				</label>
				<div>
					<input type="submit" />
				</div>
				<BackButtonStyles type="reset" onClick={() => setPreviewUrl(undefined)} >Clear</BackButtonStyles>
			</FormStyles>
			{previewUrl && <LogoPreview previewUrl={previewUrl} />}
		</FormWrapContainer>

		<Link to={routes.HOME} >
			<BackButtonStyles>Back</BackButtonStyles>
		</Link>
	</CreateStationPageStyles>
}

export default CreateStationPage;

const CreateStationPageStyles = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	padding:2rem;
	width:70%;
	margin:1rem auto;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);

	h1{
		margin-bottom:1rem;
		text-align:center;
	}
`

const FormStyles = styled.form`
	display:flex;
	flex-direction:column;
	padding:0 1rem;
	width:100%;

	label {
		width:100px;
	}

	input {
		width:400px;
		padding:0.5rem;
		border-radius:0.5rem;
		border:2px solid #006efa;
		margin:0.5rem 0;
	}

	input[type=submit] {
		border:2px solid #006efa;
		padding:0.5rem 2rem;
		background-color:#006efa;
		border-radius:25px;
		text-transform:uppercase;
		font-weight:bold;
		color:#fff;
		cursor:pointer;
	}
`

const FormWrapContainer = styled.div`
	display:flex;
	align-items:center;
`

const BackButtonStyles = styled.button`
	border:2px solid #006efa;
	padding:0.5rem 2rem;
	background-color:#fff;
	border-radius:25px;
	text-transform:uppercase;
	font-weight:bold;
	color:#006efa;
	cursor:pointer;
	margin:0.5rem 0;
`