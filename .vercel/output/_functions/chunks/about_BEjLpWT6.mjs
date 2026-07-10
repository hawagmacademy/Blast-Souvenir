import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent, x as unescapeHTML } from "./server_DqMh0nkK.mjs";
import { i as $$Image } from "./_astro_assets_DEI_O1pM.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths, t as getLabels } from "./utils_qogIoZEK.mjs";
import { r as createSvgComponent, t as $$Layout } from "./Layout_zUB5F-3O.mjs";
//#region src/components/about/Heading.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Heading = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Heading;
	const labels = getLabels(Astro.currentLocale, "aboutHeading");
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">${labels.title}</h1><p class="text-muted mx-auto max-w-sm text-lg sm:max-w-lg sm:text-xl">${labels.description}</p></div></div></section>`;
}, "D:/blast-main/src/components/about/Heading.astro", void 0);
//#endregion
//#region src/assets/about.webp
var about_default = new Proxy({
	"src": "/blast/_astro/about.Dg_ZYL3X.webp",
	"width": 1195,
	"height": 896,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/blast-main/src/assets/about.webp";
	return target[name];
} });
//#endregion
//#region src/assets/icons/crosshair-2-line.svg
var crosshair_2_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/crosshair-2-line.BTU0P8AL.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M11 5.07089C7.93431 5.5094 5.5094 7.93431 5.07089 11H7V13H5.07089C5.5094 16.0657 7.93431 18.4906 11 18.9291V17H13V18.9291C16.0657 18.4906 18.4906 16.0657 18.9291 13H17V11H18.9291C18.4906 7.93431 16.0657 5.5094 13 5.07089V7H11V5.07089ZM3.05493 11C3.51608 6.82838 6.82838 3.51608 11 3.05493V1H13V3.05493C17.1716 3.51608 20.4839 6.82838 20.9451 11H23V13H20.9451C20.4839 17.1716 17.1716 20.4839 13 20.9451V23H11V20.9451C6.82838 20.4839 3.51608 17.1716 3.05493 13H1V11H3.05493ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/about/Mission.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Mission = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Mission;
	const labels = getLabels(Astro.currentLocale, "aboutMission");
	const stats = labels.stats;
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="grid gap-16 lg:grid-cols-2 lg:gap-24">${renderComponent($$result, "Image", $$Image, {
		"class": "mx-auto h-auto w-full max-w-xl rounded-3xl",
		"src": about_default,
		"alt": labels.aboutImgAlt,
		"priority": true
	})}<div class="flex flex-col gap-10"><!-- Mission description --><div class="space-y-8 sm:space-y-12"><div class="flex gap-4">${renderComponent($$result, "CrosshairIcon", crosshair_2_line_default, {
		"class": "fill-primary-500 h-8 w-8 shrink-0 sm:h-10 sm:w-10",
		"aria-hidden": "true"
	})}<h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2></div><div class="space-y-6"><p class="text-muted text-base sm:text-lg">${unescapeHTML(labels.p1)}</p><p class="text-muted text-base sm:text-lg">${labels.p2}</p><p class="text-muted text-base sm:text-lg">${labels.p3}</p></div></div><!-- Stats --><dl class="grid grid-cols-1 gap-6 sm:grid-cols-1">${stats.map((stat) => renderTemplate`<div class="border-subtle rounded-3xl border p-6"><dt class="text-base">${stat.name}</dt><dd class="text-3xl font-medium tracking-tight">${stat.value}</dd></div>`)}</dl></div></div></div></section>`;
}, "D:/blast-main/src/components/about/Mission.astro", void 0);
//#endregion
//#region src/assets/icons/group-line.svg
var group_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/group-line.CXc92RpC.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z\"></path>",
	"styles": []
});
//#endregion
//#region src/utils/image.ts
function getGlobImage(images, key) {
	const loader = images[key];
	if (!loader) throw new Error(`Missing image: ${key}. Available: ${Object.keys(images).join(", ")}`);
	return loader();
}
//#endregion
//#region src/components/about/Team.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Team = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Team;
	const labels = getLabels(Astro.currentLocale, "aboutTeam");
	const members = labels.members;
	const images = /* #__PURE__ */ Object.assign({
		"/src/assets/team-1.webp": () => import("./team-1_DG0Oi4w_.mjs"),
		"/src/assets/team-2.webp": () => import("./team-2_CTSnrLhv.mjs"),
		"/src/assets/team-3.webp": () => import("./team-3_DjceesEr.mjs")
	});
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="space-y-8 sm:space-y-12"><div class="flex gap-4">${renderComponent($$result, "GroupIcon", group_line_default, {
		"class": "fill-primary-500 h-8 w-8 shrink-0 sm:h-10 sm:w-10",
		"aria-hidden": "true"
	})}<h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2></div><ul role="list" class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">${members.map((member, index) => renderTemplate`<li class="border-subtle rounded-3xl border px-6 py-8"><div class="space-y-6">${renderComponent($$result, "Image", $$Image, {
		"class": "mx-auto h-40 w-40 rounded-full",
		"src": getGlobImage(images, `/src/assets/team-${index + 1}.webp`),
		"alt": member.name
	})}<div class="text-center"><h3 class="text-lg font-medium">${member.name}</h3><p class="text-muted text-base">${member.job}</p></div></div></li>`)}</ul></div></div></section>`;
}, "D:/blast-main/src/components/about/Team.astro", void 0);
//#endregion
//#region src/assets/icons/trophy-line.svg
var trophy_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/trophy-line.cGaBFdv_.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M13.0049 16.9409V19.0027H18.0049V21.0027H6.00488V19.0027H11.0049V16.9409C7.05857 16.4488 4.00488 13.0824 4.00488 9.00275V3.00275H20.0049V9.00275C20.0049 13.0824 16.9512 16.4488 13.0049 16.9409ZM6.00488 5.00275V9.00275C6.00488 12.3165 8.69117 15.0027 12.0049 15.0027C15.3186 15.0027 18.0049 12.3165 18.0049 9.00275V5.00275H6.00488ZM1.00488 5.00275H3.00488V9.00275H1.00488V5.00275ZM21.0049 5.00275H23.0049V9.00275H21.0049V5.00275Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/about/Values.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Values = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Values;
	const labels = getLabels(Astro.currentLocale, "aboutValues");
	const values = labels.values;
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-8 lg:gap-12"><div class="flex gap-4">${renderComponent($$result, "TrophyIcon", trophy_line_default, {
		"class": "fill-primary-500 h-8 w-8 shrink-0 sm:h-10 sm:w-10",
		"aria-hidden": "true"
	})}<h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2></div><div class="grid gap-8 lg:grid-cols-2">${values.map((column, index) => renderTemplate`<div${addAttribute(["space-y-8", index === 1 && "lg:mt-16"], "class:list")}>${column.map((value) => renderTemplate`<div class="bg-surface flex flex-col gap-12 rounded-3xl px-6 py-8"><p class="text-sm">${value.ref}</p><div class="flex flex-col gap-4"><h3 class="text-xl font-medium">${value.name}</h3><p class="text-muted text-base sm:text-lg">${value.description}</p></div></div>`)}</div>`)}</div></div></div></section>`;
}, "D:/blast-main/src/components/about/Values.astro", void 0);
//#endregion
//#region src/pages/[...lang]/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$About = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$About;
	const labels = getLabels(Astro.currentLocale, "about");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": labels.description,
		"title": labels.title
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Heading", $$Heading, {})}${renderComponent($$result, "Mission", $$Mission, {})}${renderComponent($$result, "Values", $$Values, {})}${renderComponent($$result, "Team", $$Team, {})}` })}`;
}, "D:/blast-main/src/pages/[...lang]/about.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/about.astro";
var $$url = "/blast/[...lang]/about";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/about@_@astro
var page = () => about_exports;
//#endregion
export { page };
