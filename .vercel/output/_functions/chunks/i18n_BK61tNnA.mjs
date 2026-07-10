import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { Jt as AstroError, vt as IncorrectStrategyForI18n, xt as InvalidI18nMiddlewareConfiguration } from "./server_DqMh0nkK.mjs";
import { c as getLocaleRelativeUrl, d as redirectToFallback$1, f as requestHasLocale$1, i as toRoutingStrategy, l as notFound$1, r as toFallbackType, s as createMiddleware, u as redirectToDefaultLocale$1 } from "./entrypoints_mtJSMMqt.mjs";
//#region \0astro:config/client
var client_exports = /* @__PURE__ */ __exportAll({
	base: () => base$1,
	build: () => build$1,
	compressHTML: () => "jsx",
	i18n: () => i18n$1,
	image: () => image,
	site: () => site$1,
	trailingSlash: () => trailingSlash$1
});
var i18n$1 = {
	defaultLocale: "en",
	locales: ["en", "id"],
	routing: "manual",
	fallback: void 0,
	domains: void 0
};
var image = {
	objectFit: void 0,
	objectPosition: void 0,
	layout: void 0
};
var base$1 = "/blast";
var trailingSlash$1 = "ignore";
var site$1 = "https://blast-souvenir-tztr.vercel.app";
var build$1 = { format: "directory" };
//#endregion
//#region node_modules/astro/dist/virtual-modules/i18n.js
var { trailingSlash, site, i18n, build } = client_exports;
var { format } = build;
var { defaultLocale, locales, domains, fallback, routing } = i18n;
var base = "/blast";
var strategy = toRoutingStrategy(routing, domains);
var fallbackType = toFallbackType(routing);
var noop = (method) => function() {
	throw new AstroError({
		...IncorrectStrategyForI18n,
		message: IncorrectStrategyForI18n.message(method)
	});
};
var getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
	locale,
	path,
	base,
	trailingSlash,
	format,
	defaultLocale,
	locales,
	strategy,
	domains,
	...options
});
if (i18n?.routing === "manual") redirectToDefaultLocale$1({
	base,
	trailingSlash,
	format,
	defaultLocale,
	locales,
	strategy,
	domains,
	fallback,
	fallbackType
});
if (i18n?.routing === "manual") notFound$1({
	base,
	trailingSlash,
	format,
	defaultLocale,
	locales,
	strategy,
	domains,
	fallback,
	fallbackType
});
if (i18n?.routing === "manual") requestHasLocale$1(locales);
if (i18n?.routing === "manual") redirectToFallback$1({
	base,
	trailingSlash,
	format,
	defaultLocale,
	locales,
	strategy,
	domains,
	fallback,
	fallbackType
});
var middleware;
if (i18n?.routing === "manual") middleware = (customOptions) => {
	if (customOptions.prefixDefaultLocale === false && customOptions.redirectToDefaultLocale === true) throw new AstroError(InvalidI18nMiddlewareConfiguration);
	strategy = toRoutingStrategy(customOptions, {});
	fallbackType = toFallbackType(customOptions);
	return createMiddleware({
		...i18n,
		strategy,
		domainLookupTable: {},
		fallbackType,
		fallback: i18n.fallback,
		domains: i18n.domains
	}, base, trailingSlash, format);
};
else middleware = noop("middleware");
//#endregion
export { middleware as n, getRelativeLocaleUrl as t };
