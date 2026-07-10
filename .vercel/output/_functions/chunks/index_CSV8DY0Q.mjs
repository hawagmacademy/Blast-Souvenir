import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, w as createComponent } from "./server_DqMh0nkK.mjs";
import "./compiler_CqZWJY3r.mjs";
import "./_...lang__DdZtAD4f.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Index;
	const base = "/blast";
	const target = `${base.endsWith("/") ? base : "/blast/"}en`.replace(/\/+/g, "/");
	return Astro2.redirect(target);
}, "D:/blast-main/src/pages/index.astro", void 0);
var $$file = "D:/blast-main/src/pages/index.astro";
var $$url = "/blast";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
