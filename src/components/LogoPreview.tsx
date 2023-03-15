import styled from "styled-components";

type LogoPreviewProps = {
	previewUrl: string
}

const LogoPreview = (props: LogoPreviewProps) => {
	const { previewUrl } = props;
	return <LogoPreviewStyles>
		<PreviewImageStyles src={previewUrl} alt="Preview" />
		<p>Logo Preview</p>
	</LogoPreviewStyles>
}

export default LogoPreview;

const LogoPreviewStyles = styled.div`
	display:flex;
	flex-direction:column;
	width:100%;
	justify-content:center;
	align-items:center;
	padding: 1rem;
	p {
		padding:1rem;
	}
`
const PreviewImageStyles = styled.img`
	border:4px solid #006efa;
	border-radius: 50%;
	width:250px;
	height:250px;
	object-fit:cover;
`