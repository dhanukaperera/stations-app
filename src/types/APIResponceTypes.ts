export interface Station {
	brand:Brand,
	gduid:string,
	heraldId:number,
	id:string
	name:string,
	slug:string,
	streamUrl:string,
	tagline:string
}

interface Brand {
	id:string,
	slug:string
}

export interface StationDetails {

	brandLogo:string,
	brandName:string,
	legacyStationPrefix:string,
	obit_enabled:string,

	brandId:string,
	brandSlug:string,

	gduid:string,
	heraldId:string,
	id:string,
	name:string,
	slug:string
	streamUrl:string
	tagline:string
}