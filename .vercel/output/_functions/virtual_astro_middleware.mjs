import { m as defineMiddleware, p as sequence } from "./chunks/entrypoints_mtJSMMqt.mjs";
import { n as middleware } from "./chunks/i18n_BK61tNnA.mjs";
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(defineMiddleware((context, next) => {
	return middleware({
		prefixDefaultLocale: true,
		redirectToDefaultLocale: false
	})(context, next);
}));
//#endregion
export { onRequest };
