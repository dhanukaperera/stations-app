/**
 * Replaces the params(e.g., /:id) of a route with the specified value.
 *
 * @param {String} route - constant of a route
 * @param {String|Number|Array} param - a value the param should be replaced with. Can be just a string for just a single replace or array for multiple
 */

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
