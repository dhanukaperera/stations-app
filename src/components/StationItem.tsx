import { Link } from "react-router-dom";
import { BTN_TEXT_DETAILS } from "../constants/constants";
import { routes } from "../constants/routes";
import { formatRoute } from "../utils/route.utils";

type StationItemProps = {
	name: string,
	tagline: string
	brandSlug: string,
	slug: string
}

const StationItem = (props: StationItemProps) => {
	const { name, tagline, brandSlug, slug } = props;
	return <>
		<h3>{name}</h3>
		<p>{tagline}</p>
		<Link to={formatRoute(routes.STATION_DETAILS, [brandSlug, slug])}  >
			<button>{BTN_TEXT_DETAILS}</button>
		</Link>
	</>

}

export default StationItem;
