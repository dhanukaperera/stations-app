import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";

type FormData = {
	name: string,
	tagline: string,
	streamUrl: string,
	logo: File | null | string
}

const CreateStationPage = () => {

	const [previewUrl, setPreviewUrl] = useState<string | undefined>();

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget);

		const data: FormData = {
			name: formData.get('name')?.toString() ?? '',
			tagline: formData.get('tagline')?.toString() ?? '',
			streamUrl: formData.get('streamUrl')?.toString() ?? '',
			logo: formData.get('logo') instanceof File ? formData.get('logo') : null,
		};
		console.log(data)
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


	return <>Create Station Page
		<form onSubmit={handleFormSubmit} >
			<label htmlFor="name">Station Name :<input id="name" type="text" name="name" /> </label>
			<label htmlFor="tagline">Tag Line :	<input id="tagline" type="text" name="tagline" /> </label>
			<label htmlFor="streamUrl" > Steaming URL :	<input id="streamUrl" type="url" name="streamUrl" />
			</label>
			<label htmlFor="logo" >Logo :<input id="logo" name="logo" type="file" accept="image/*" onChange={handleFileInputChange} />
			</label>
			<input type="submit" />
			<button type="reset" onClick={() => setPreviewUrl(undefined)} >Clear</button>
		</form>
		{previewUrl && <img src={previewUrl} width="400px" alt="Preview" />}
		<Link to={routes.HOME} >
			<button>Back</button>
		</Link>
	</>
}

export default CreateStationPage;