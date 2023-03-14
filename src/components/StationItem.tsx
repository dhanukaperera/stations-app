import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../constants/routes";
import { formatRoute } from "../utils/route.utils";
import { FiRadio, } from 'react-icons/fi';
import { IoMdArrowRoundForward } from 'react-icons/Io';

type StationItemProps = {
	name: string,
	tagline: string
	brandSlug: string,
	slug: string
}

const StationItem = (props: StationItemProps) => {
	const { name, tagline, brandSlug, slug } = props;
	return <StationItemStyle>

		<h2> <FiRadio />  {name}</h2>
		<p>{tagline}</p>
		<Link to={formatRoute(routes.STATION_DETAILS, [brandSlug, slug])}  >
			<MoreButtonStyles>More <IoMdArrowRoundForward /> </MoreButtonStyles>
		</Link>

	</StationItemStyle>

}

export default StationItem;

const StationItemStyle = styled.div`
	padding: 16px 24px 24px;
	border:2px solid #006efa;
	margin:1rem;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
	border-radius:24px;

	a{
		text-decoration: none;
		width:fit-content;
	}
`

const MoreButtonStyles = styled.button`
	color: #006efa;
	border:none;
	background:#fff;
	font-weight:bold;
	display: flex;
    flex-direction: row;
    align-items: center;
	cursor:pointer
`
