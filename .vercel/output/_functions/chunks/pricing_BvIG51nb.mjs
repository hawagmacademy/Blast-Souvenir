import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent, x as unescapeHTML } from "./server_DqMh0nkK.mjs";
import { t as getRelativeLocaleUrl } from "./i18n_BK61tNnA.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths, t as getLabels } from "./utils_qogIoZEK.mjs";
import { r as createSvgComponent, t as $$Layout } from "./Layout_zUB5F-3O.mjs";
import { t as supabase } from "./db_DIMXPWFB.mjs";
import { t as $$AccordionItem } from "./AccordionItem_CsyxViET.mjs";
//#region src/components/pricing/Cta.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Cta = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Cta;
	const labels = getLabels(Astro.currentLocale, "pricingCta");
	const currentLocale = Astro.currentLocale || "en";
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="bg-surface flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10"><div class="flex flex-col gap-4 sm:gap-6"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2><p class="text-muted mx-auto max-w-2xl text-lg">${labels.description}</p></div><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href")} class="btn-primary">${labels.action}</a></div></div></section>`;
}, "D:/blast-main/src/components/pricing/Cta.astro", void 0);
//#endregion
//#region src/assets/icons/questionnaire-line.svg
var questionnaire_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/questionnaire-line.avEJ2yb0.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14H13V16H11V14ZM8.56731 8.81346C8.88637 7.20919 10.302 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13H11V11H12C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.2723 8 10.6656 8.51823 10.5288 9.20577L8.56731 8.81346Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/pricing/Faq.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Faq = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Faq;
	const labels = getLabels(Astro.currentLocale, "pricingFaq");
	const questions = labels.questions;
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="grid gap-12 lg:grid-cols-3 lg:gap-8"><div class="flex gap-4">${renderComponent($$result, "QuestionnaireIcon", questionnaire_line_default, {
		"class": "fill-primary-500 h-8 w-8 shrink-0 sm:h-10 sm:w-10",
		"aria-hidden": "true"
	})}<h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2></div><div class="lg:col-span-2"><dl class="-mt-3" x-data="accordion">${questions.map((question, index) => renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, {
		"id": question.id,
		"index": index
	}, {
		"header": ($$result) => renderTemplate`<span class="font-medium">${question.title}</span>`,
		"body": ($$result) => renderTemplate`<div class="pr-6 pb-6"><p class="text-muted text-base">${unescapeHTML(question.answer)}</p></div>`
	})}`)}</dl></div></div></div></section>`;
}, "D:/blast-main/src/components/pricing/Faq.astro", void 0);
//#endregion
//#region src/components/pricing/Heading.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Heading = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Heading;
	const labels = getLabels(Astro.currentLocale, "pricingHeading");
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">${labels.title}</h1><p class="text-muted mx-auto max-w-sm text-lg sm:max-w-md sm:text-xl">${labels.description}</p></div></div></section>`;
}, "D:/blast-main/src/components/pricing/Heading.astro", void 0);
//#endregion
//#region src/pages/[...lang]/pricing.astro
var pricing_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Pricing,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pricing;
	const { lang } = Astro.params;
	const labels = getLabels(Astro.currentLocale, "pricing");
	let daftarSouvenir = [];
	try {
		const { data, error } = await supabase.from("souvenirs").select("*");
		if (error) throw error;
		daftarSouvenir = data;
	} catch (error) {
		console.error("Gagal memuat souvenir:", error);
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": labels.description,
		"title": labels.title,
		"data-astro-cid-lrfxphbn": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "data-astro-cid-lrfxphbn": true })}${maybeRenderHead($$result)}<div class="grid-souvenir" data-astro-cid-lrfxphbn>${daftarSouvenir.map((produk) => renderTemplate`<div class="card-produk bg-white dark:bg-[#1e293b] border-slate-200 dark:border-slate-700 transition-colors" data-astro-cid-lrfxphbn><img${addAttribute(produk.foto, "src")}${addAttribute(produk.nama, "alt")} data-astro-cid-lrfxphbn><div class="konten-produk" data-astro-cid-lrfxphbn><h3 class="text-[#1a202c] dark:text-white transition-colors" data-astro-cid-lrfxphbn>${produk.nama}</h3><p class="harga text-[#3182ce] dark:text-blue-400 transition-colors" data-astro-cid-lrfxphbn>Harga: Rp ${produk.harga.toLocaleString("id-ID")} / pcs</p><p class="min-order text-[#718096] dark:text-slate-400 transition-colors" data-astro-cid-lrfxphbn>Min. Order: ${produk.min_order} pcs</p><a${addAttribute(`/${lang || Astro.currentLocale}/contact?produk=${produk.id}`, "href")} class="btn-pesan" data-astro-cid-lrfxphbn>Pesan Sekarang</a></div></div>`)}</div>${renderComponent($$result, "Faq", $$Faq, { "data-astro-cid-lrfxphbn": true })}${renderComponent($$result, "Cta", $$Cta, { "data-astro-cid-lrfxphbn": true })}` })}`;
}, "D:/blast-main/src/pages/[...lang]/pricing.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/pricing.astro";
var $$url = "/blast/[...lang]/pricing";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/pricing@_@astro
var page = () => pricing_exports;
//#endregion
export { page };
