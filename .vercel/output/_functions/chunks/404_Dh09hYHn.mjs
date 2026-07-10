import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent } from "./server_DqMh0nkK.mjs";
import { t as getRelativeLocaleUrl } from "./i18n_BK61tNnA.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths, t as getLabels } from "./utils_qogIoZEK.mjs";
import { t as $$Layout } from "./Layout_zUB5F-3O.mjs";
//#region src/pages/[...lang]/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$404 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$404;
	const labels = getLabels(Astro.currentLocale, "404");
	const currentLocale = Astro.currentLocale || "en";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": labels.description,
		"title": labels.title
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col items-start gap-8 sm:gap-10"><div class="flex flex-col gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl"><div>404</div><div>${labels.heading}</div></h1><p class="text-muted text-lg sm:text-xl">${labels.message}</p></div><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/"), "href")} class="btn-primary">${labels.back}</a></div></div></section>` })}`;
}, "D:/blast-main/src/pages/[...lang]/404.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/404.astro";
var $$url = "/blast/[...lang]/404";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
