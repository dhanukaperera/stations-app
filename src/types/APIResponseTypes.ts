interface StationCore {
	gduid:string,
	heraldId:string,
	id:string,
	name:string,
	slug:string
	streamUrl:string
	tagline:string
}

interface Brand {
	id:string,
	slug:string
}

export interface Station extends StationCore {
	brand:Brand,
}

export interface StationDetails extends StationCore  {
	brandLogo:string,
	brandName:string,
	legacyStationPrefix:string,
	obit_enabled:string,
	brandId:string,
	brandSlug:string,
}