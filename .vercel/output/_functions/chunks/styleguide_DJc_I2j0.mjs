import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent } from "./server_DqMh0nkK.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths, t as getLabels } from "./utils_qogIoZEK.mjs";
import { t as $$Layout } from "./Layout_zUB5F-3O.mjs";
//#region src/pages/[...lang]/styleguide.astro
var styleguide_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Styleguide,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Styleguide = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Styleguide;
	const base = "/blast";
	const labels = getLabels(Astro2.currentLocale, "styleguide");
	const colors = [
		{
			name: "white",
			value: "bg-white"
		},
		{
			name: "50",
			value: "bg-primary-50"
		},
		{
			name: "100",
			value: "bg-primary-100"
		},
		{
			name: "200",
			value: "bg-primary-200"
		},
		{
			name: "300",
			value: "bg-primary-300"
		},
		{
			name: "400",
			value: "bg-primary-400"
		},
		{
			name: "500",
			value: "bg-primary-500"
		},
		{
			name: "600",
			value: "bg-primary-600"
		},
		{
			name: "700",
			value: "bg-primary-700"
		},
		{
			name: "800",
			value: "bg-primary-800"
		},
		{
			name: "900",
			value: "bg-primary-900"
		},
		{
			name: "950",
			value: "bg-primary-950"
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": labels.description,
		"title": labels.title,
		"noindex": true
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<header class="py-16 lg:py-20"><div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">${labels.heading}</h1><p class="text-muted mx-auto max-w-sm text-lg sm:text-xl">${labels.description}</p></div></div></header><section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-16"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.logoDesc}</h2><div class="flex items-center gap-1"><img width="50" height="50"${addAttribute(`${base}/logo.svg`, "src")}${addAttribute(labels.companyName, "alt")}><span class="text-3xl font-bold">${labels.companyName}</span></div></div></div></section><section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-16"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.colorsDesc}</h2><div class="grid grid-cols-2 gap-12 sm:grid-cols-6">${colors.map((color) => renderTemplate`<div class="relative flex"><div class="flex flex-col gap-2"><div${addAttribute(`border-subtle h-16 w-16 rounded-md border ${color.value}`, "class")}></div><div class="text-sm font-medium">${color.name}</div></div></div>`)}</div></div></div></section><section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-16"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.typoDesc}</h2><div class="flex flex-col gap-16 sm:flex-row"><div class="flex flex-col gap-8"><div class="bg-surface flex w-64 flex-col items-center gap-3 rounded-md p-6"><p class="text-5xl">Aa</p><p class="text-muted text-base">Inter</p></div><div class="bg-surface flex w-64 flex-col items-center gap-3 rounded-md p-6"><p class="text-5xl font-medium">Aa</p><p class="text-muted text-base">Inter Medium</p></div></div><div class="flex flex-col gap-4"><p class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">${labels.h1Demo}</p><p class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.h2Demo}</p><p class="text-xl font-medium sm:text-2xl">${labels.h3Demo}</p><p class="text-lg sm:text-xl">${labels.subtitleDemo}</p><p class="text-base font-medium">${labels.boldDemo}</p><p class="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate.</p></div></div></div></div></section>` })}`;
}, "D:/blast-main/src/pages/[...lang]/styleguide.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/styleguide.astro";
var $$url = "/blast/[...lang]/styleguide";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/styleguide@_@astro
var page = () => styleguide_exports;
//#endregion
export { page };
