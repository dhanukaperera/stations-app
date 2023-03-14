import { Link } from "react-router-dom";

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
		<Link to={`details/${brandSlug}/${slug}`}  >
			<button>Details</button>
		</Link>
	</>

}

export default StationItem;
