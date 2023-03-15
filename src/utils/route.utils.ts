export const formatRoute = (route: string, params: any[] = []) => {
	if (typeof params === "string" || typeof params === "number")
		return route.replace(/:\w+/, params);

	return route
		.split("/")
		.map(route => {
			if (!route.includes(":")) return route;
			return route.replace(/:\w+/, params.shift());
		})
		.join("/");
};
