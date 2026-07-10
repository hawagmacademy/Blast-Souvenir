import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, t as spreadAttributes, v as defineScriptVars, w as createComponent } from "./server_DqMh0nkK.mjs";
import { t as getRelativeLocaleUrl } from "./i18n_BK61tNnA.mjs";
import { i as $$Image } from "./_astro_assets_DEI_O1pM.mjs";
import "./compiler_CqZWJY3r.mjs";
import { i as locales, r as getStaticPaths, t as getLabels } from "./utils_qogIoZEK.mjs";
import { r as createSvgComponent, t as $$Layout } from "./Layout_zUB5F-3O.mjs";
import { t as $$AccordionItem } from "./AccordionItem_CsyxViET.mjs";
//#region src/assets/icons/info-card-line.svg
var info_card_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/info-card-line.DKV0eGPN.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 9H19V11H13V9ZM18 13H13V15H18V13ZM6 13H7V16H9V11H6V13ZM9 8H7V10H9V8Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/home/About.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$About = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$About;
	const labels = getLabels(Astro.currentLocale, "homeAbout");
	const currentLocale = Astro.currentLocale || "en";
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="grid gap-12 lg:grid-cols-3 lg:gap-8"><div class="flex gap-4">${renderComponent($$result, "InfoCardIcon", info_card_line_default, {
		"class": "fill-primary-500 h-8 w-8 shrink-0 sm:h-10 sm:w-10",
		"aria-hidden": "true"
	})}<h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2></div><div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2"><p class="text-muted text-base sm:text-lg">${labels.description}</p><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/about"), "href")} class="btn-primary">${labels.cta}</a></div></div></div></section>`;
}, "D:/blast-main/src/components/home/About.astro", void 0);
//#endregion
//#region src/assets/company-1.svg
var company_1_exports = /* @__PURE__ */ __exportAll({ default: () => company_1_default$1 });
var company_1_default$1 = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/company-1.CGNLVLDV.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "\n  <path d=\"M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z\"></path>\n",
	"styles": []
});
//#endregion
//#region src/assets/company-2.svg
var company_2_exports = /* @__PURE__ */ __exportAll({ default: () => company_2_default$1 });
var company_2_default$1 = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/company-2.DcbvrHO_.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "\n  <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"></path>\n",
	"styles": []
});
//#endregion
//#region src/assets/company-3.svg
var company_3_exports = /* @__PURE__ */ __exportAll({ default: () => company_3_default$1 });
var company_3_default$1 = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/company-3.DWSj3jm6.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "none",
		"stroke": "currentColor",
		"stroke-width": "2",
		"stroke-linecap": "round",
		"stroke-linejoin": "round"
	},
	"children": "\n  <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n  <path d=\"M8 12a4 4 0 0 1 8 0\"></path>\n",
	"styles": []
});
//#endregion
//#region src/assets/company-4.svg
var company_4_exports = /* @__PURE__ */ __exportAll({ default: () => company_4_default$1 });
var company_4_default$1 = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/company-4.DrJnBDjd.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "\n  <path d=\"M4 10h3v10H4zM10.5 10h3v10h-3zM17 10h3v10h-3zM10.5 4h3v3h-3zM17 4h3v3h-3zM4 4h3v3H4z\"></path>\n",
	"styles": []
});
//#endregion
//#region src/assets/company-5.svg
var company_5_exports = /* @__PURE__ */ __exportAll({ default: () => company_5_default$1 });
var company_5_default$1 = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/company-5.y8mOnGol.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "\n  <path d=\"M12 2C6.48 2 2 6.48 2 12c0 1.86.5 3.6 1.37 5.1L12 21.37l8.63-4.27A9.954 9.954 0 0 0 22 12c0-5.52-4.48-10-10-10zm0 3c3.86 0 7 3.14 7 7 0 .61-.09 1.19-.24 1.76L12 9.5l-6.76 4.26C5.09 13.19 5 12.61 5 12c0-3.86 3.14-7 7-7z\"></path>\n",
	"styles": []
});
//#endregion
//#region src/assets/company-6.svg
var company_6_exports = /* @__PURE__ */ __exportAll({ default: () => company_6_default$1 });
var company_6_default$1 = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/company-6.CAYcVlQW.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "\n  <path d=\"M21 3H3v18h18V3zM9 17H6v-5H4v-4h5v9zm8 0h-3v-5h-2v-4h5v9z\"></path>\n",
	"styles": []
});
//#endregion
//#region src/assets/company-1.svg?raw
var company_1_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n  <path d=\"M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z\"></path>\n</svg>\n";
//#endregion
//#region src/assets/company-2.svg?raw
var company_2_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n  <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"></path>\n</svg>\n";
//#endregion
//#region src/assets/company-3.svg?raw
var company_3_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n  <path d=\"M8 12a4 4 0 0 1 8 0\"></path>\n</svg>\n";
//#endregion
//#region src/assets/company-4.svg?raw
var company_4_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n  <path d=\"M4 10h3v10H4zM10.5 10h3v10h-3zM17 10h3v10h-3zM10.5 4h3v3h-3zM17 4h3v3h-3zM4 4h3v3H4z\"></path>\n</svg>\n";
//#endregion
//#region src/assets/company-5.svg?raw
var company_5_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n  <path d=\"M12 2C6.48 2 2 6.48 2 12c0 1.86.5 3.6 1.37 5.1L12 21.37l8.63-4.27A9.954 9.954 0 0 0 22 12c0-5.52-4.48-10-10-10zm0 3c3.86 0 7 3.14 7 7 0 .61-.09 1.19-.24 1.76L12 9.5l-6.76 4.26C5.09 13.19 5 12.61 5 12c0-3.86 3.14-7 7-7z\"></path>\n</svg>\n";
//#endregion
//#region src/assets/company-6.svg?raw
var company_6_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n  <path d=\"M21 3H3v18h18V3zM9 17H6v-5H4v-4h5v9zm8 0h-3v-5h-2v-4h5v9z\"></path>\n</svg>\n";
//#endregion
//#region src/assets/icons/thumb-up-line.svg
var thumb_up_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/thumb-up-line.DM_hT28S.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/home/Companies.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Companies = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Companies;
	const labels = getLabels(Astro.currentLocale, "homeCompanies");
	const companies = labels.companies;
	const icons = /* #__PURE__ */ Object.assign({
		"/src/assets/company-1.svg": company_1_exports,
		"/src/assets/company-2.svg": company_2_exports,
		"/src/assets/company-3.svg": company_3_exports,
		"/src/assets/company-4.svg": company_4_exports,
		"/src/assets/company-5.svg": company_5_exports,
		"/src/assets/company-6.svg": company_6_exports
	});
	const rawIcons = /* #__PURE__ */ Object.assign({
		"/src/assets/company-1.svg": company_1_default,
		"/src/assets/company-2.svg": company_2_default,
		"/src/assets/company-3.svg": company_3_default,
		"/src/assets/company-4.svg": company_4_default,
		"/src/assets/company-5.svg": company_5_default,
		"/src/assets/company-6.svg": company_6_default
	});
	const getViewBox = (id) => {
		const rawSvg = rawIcons[`/src/assets/${id}.svg`];
		if (!rawSvg) return "0 0 200 100";
		const match = typeof rawSvg === "string" ? rawSvg.match(/viewBox="([^"]+)"/) : "";
		return match ? match[1] : "0 0 200 100";
	};
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><svg class="hidden" aria-hidden="true"><defs>${companies.map((company) => {
		const Icon = icons[`/src/assets/${company.id}.svg`].default;
		return renderTemplate`${renderComponent($$result, "Icon", Icon, { "id": `icon-${company.id}` })}`;
	})}</defs></svg><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-12 sm:gap-16"><div class="flex justify-center gap-4">${renderComponent($$result, "ThumbUpIcon", thumb_up_line_default, {
		"class": "fill-primary-500 h-8 w-8 shrink-0 sm:h-10 sm:w-10",
		"aria-hidden": "true"
	})}<h2 class="text-center text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2></div><div class="group flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">${[0, 1].map((i) => renderTemplate`<div class="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 px-4 group-hover:[animation-play-state:paused]"${addAttribute(i === 1 ? "true" : void 0, "aria-hidden")}>${companies.map((company) => {
		return renderTemplate`<div class="bg-surface flex h-36 w-48 shrink-0 flex-col items-center justify-center gap-4 rounded-3xl p-6 transition-transform hover:scale-105"><svg class="icon-primary h-12 w-auto max-w-36"${addAttribute(getViewBox(company.id), "viewBox")} aria-hidden="true"><use${addAttribute(`#icon-${company.id}`, "href")}></use></svg><span class="text-muted text-center text-lg leading-tight">${company.name}</span></div>`;
	})}</div>`)}</div></div></div></section>`;
}, "D:/blast-main/src/components/home/Companies.astro", void 0);
//#endregion
//#region src/components/home/Cta.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Cta = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Cta;
	const labels = getLabels(Astro.currentLocale, "homeCta");
	const currentLocale = Astro.currentLocale || "en";
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="bg-surface flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10"><div class="flex flex-col gap-4 sm:gap-6"><h2 class="mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2><p class="text-muted mx-auto max-w-108 text-lg">${labels.description}</p></div><p><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href")} class="btn-primary">${labels.contact}</a><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/pricing"), "href")} class="btn-primary ml-8">${labels.pricing}</a></p></div></div></section>`;
}, "D:/blast-main/src/components/home/Cta.astro", void 0);
//#endregion
//#region src/assets/icons/target-fill.svg
var target_fill_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/target-fill._UJfQV5X.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M12 2C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 11.4477 20.4477 11 21 11C21.5523 11 22 11.4477 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6ZM18.5713 2.10059C18.8474 2.1006 19.0712 2.32449 19.0713 2.60059V4.42969C19.0716 4.70553 19.2954 4.92866 19.5713 4.92871H21.3994C21.6754 4.92871 21.8992 5.15275 21.8994 5.42871V6.34375L20.0107 8.23242C19.6358 8.60719 19.1268 8.81824 18.5967 8.81836H16.5967L12.707 12.707C12.3165 13.0974 11.6835 13.0975 11.293 12.707C10.9027 12.3165 10.9026 11.6834 11.293 11.293L15.1826 7.4043V5.4043C15.1826 4.87411 15.3928 4.36526 15.7676 3.99023L17.6572 2.10059H18.5713Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/home/Expertise.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Expertise = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Expertise;
	const labels = getLabels(Astro.currentLocale, "homeExpertise");
	const expertises = labels.expertises;
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="grid gap-12 lg:grid-cols-3 lg:gap-8"><div class="flex gap-4">${renderComponent($$result, "TargetIcon", target_fill_default, {
		"class": "fill-primary-500 h-8 w-8 shrink-0 sm:h-10 sm:w-10",
		"aria-hidden": "true"
	})}<h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2></div><div class="lg:col-span-2"><dl class="-mt-3" x-data="accordion">${expertises.map((expertise, index) => renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, {
		"id": expertise.id,
		"index": index
	}, {
		"header": ($$result) => renderTemplate`<span class="font-medium">${expertise.name}</span>`,
		"body": ($$result) => renderTemplate`<div class="pr-6 pb-6"><p class="text-muted text-base">${expertise.description}</p></div>`
	})}`)}</dl></div></div></div></section>`;
}, "D:/blast-main/src/components/home/Expertise.astro", void 0);
//#endregion
//#region src/assets/hero.webp
var hero_default = new Proxy({
	"src": "/blast/_astro/hero.DFc5VZqi.webp",
	"width": 1470,
	"height": 1070,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/blast-main/src/assets/hero.webp";
	return target[name];
} });
//#endregion
//#region src/components/home/Hero.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Hero;
	const labels = getLabels(Astro.currentLocale, "homeHero");
	const visibleLetters = labels.visibleLetters;
	const letters = labels.title.split("");
	const initial = 1e3;
	const interval = 100;
	const max = initial + (letters.length - visibleLetters.length) * interval;
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-16"><div class="flex flex-col items-start gap-8 sm:gap-10"><div class="flex max-w-2xl flex-col items-start gap-4 sm:gap-6"${addAttribute(`typewriter(${interval}, ${max})`, "x-data")} x-init="start()"><h1 class="relative text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">${letters.map((letter, index) => {
		const included = visibleLetters.filter((v) => v < index).length;
		return renderTemplate`<span${spreadAttributes(visibleLetters.includes(index) ? { "x-ignore": "" } : {
			"x-show": "i > " + (initial + (index - included) * interval),
			"x-cloak": ""
		})}>${letter}</span>`;
	})}<span class="from-primary-500/0 to-primary-500 block h-1 bg-linear-to-r sm:h-1.5 lg:h-2"></span></h1><p class="text-muted max-w-md text-lg sm:max-w-lg sm:text-xl">${labels.description}</p></div></div>${renderComponent($$result, "Image", $$Image, {
		"class": "h-auto w-full rounded-3xl",
		"src": hero_default,
		"alt": labels.heroImgAlt,
		"priority": true
	})}</div></div></section>`;
}, "D:/blast-main/src/components/home/Hero.astro", void 0);
//#endregion
//#region src/assets/icons/service-line.svg
var service_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/service-line.CkO4Svt1.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/home/Services.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Services = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Services;
	const labels = getLabels(Astro.currentLocale, "homeServices");
	const services = labels.services;
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden py-16 sm:py-20"><div class="pointer-events-none invisible absolute inset-0 top-50 sm:visible lg:top-40" aria-hidden="true"><canvas class="text-primary-600 dark:text-primary-400" x-data="dnaBackground" aria-hidden="true"></canvas></div><div class="relative mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-12 sm:gap-16"><div class="flex gap-4">${renderComponent($$result, "ServiceIcon", service_line_default, {
		"class": "fill-primary-500 h-8 w-8 shrink-0 sm:h-10 sm:w-10",
		"aria-hidden": "true"
	})}<h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2></div><div class="grid gap-8 lg:grid-cols-3">${services.map((service) => renderTemplate`<div class="bg-surface flex flex-col gap-12 rounded-3xl px-6 py-8 backdrop-blur-md"><p class="text-sm">${service.step}</p><div class="flex flex-col gap-4"><h3 class="text-xl font-medium">${service.name}</h3><p class="text-muted text-base sm:text-lg">${service.description}</p></div></div>`)}</div></div></div></section>`;
}, "D:/blast-main/src/components/home/Services.astro", void 0);
//#endregion
//#region src/pages/[...lang]/index.astro
var ____lang__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Index;
	const base = "/blast";
	const labels = getLabels(Astro2.currentLocale, "home");
	const currentLocale = Astro2.currentLocale || "en";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": labels.description,
		"title": labels.title
	}, {
		"default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Services", $$Services, {})}${renderComponent($$result2, "Expertise", $$Expertise, {})}${renderComponent($$result2, "About", $$About, {})}${renderComponent($$result2, "Companies", $$Companies, {})}${renderComponent($$result2, "Cta", $$Cta, {})}`,
		"head": ($$result2) => renderTemplate`<script>(function(){${defineScriptVars({
			base,
			currentLocale,
			locales,
			defaultLocale: "en",
			prefixDefaultLocale: true
		})}
    if (currentLocale === defaultLocale && !prefixDefaultLocale) {
      const preferred = localStorage.getItem('language') || navigator.language.split('-')[0];
      const lang = preferred && locales.includes(preferred) ? preferred : defaultLocale;
      lang !== currentLocale && location.replace(base + '/' + lang + '/');
    }
  })();<\/script>`
	})}`;
}, "D:/blast-main/src/pages/[...lang]/index.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/index.astro";
var $$url = "/blast/[...lang]";
//#endregion
export { ____lang__exports as n, $$Index as t };
