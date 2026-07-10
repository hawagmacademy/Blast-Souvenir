import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent, x as unescapeHTML } from "./server_DqMh0nkK.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths } from "./utils_qogIoZEK.mjs";
import { t as $$Layout } from "./Layout_zUB5F-3O.mjs";
import { t as supabase } from "./db_DIMXPWFB.mjs";
import { marked } from "marked";
//#region src/pages/[...lang]/blog-detail.astro
var blog_detail_exports = /* @__PURE__ */ __exportAll({
	default: () => $$BlogDetail,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$BlogDetail = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$BlogDetail;
	const currentLocale = Astro2.currentLocale || "en";
	const basePath = "/blast".replace(/\/$/, "");
	const slug = String(Astro2.url.searchParams.get("slug") || "").trim();
	let post = null;
	if (slug) {
		const { data, error } = await supabase.from("posts").select("*").eq("slug", slug).single();
		if (!error && data) post = data;
	}
	const formatDate = (value) => {
		if (!value) return "-";
		const date = new Date(value);
		if (Number.isNaN(date.getTime())) return value;
		return date.toLocaleDateString("id-ID", {
			day: "2-digit",
			month: "long",
			year: "numeric"
		});
	};
	marked.setOptions({
		breaks: true,
		gfm: true
	});
	function smartFormat(text) {
		if (!text) return "";
		let str = text;
		if (!str.includes("\n") || str.split("\n").length <= 3) {
			str = str.replace(/(?:^|[\.\?]\s+)([A-Z][^\.]+?\?)(?=\s+[A-Z])/g, (match, p1) => {
				return `

## ${p1}

`;
			});
			str = str.replace(/(?:^|[\.\?]\s+)([A-Z][a-zA-Z\s\(\)]+:)\s+(?=[A-Z])/g, (match, p1) => {
				return `

### ${p1.replace(":", "")}

`;
			});
			str = str.replace(/(?:^|[\.\?]\s+)(\d+\.\s+[A-Z])/g, (match, p1) => {
				return `
${p1}`;
			});
			[
				"Brand Awareness",
				"Top of mind",
				"Welcome kit",
				"Employee Engagement"
			].forEach((word) => {
				const regex = new RegExp(`\\b(${word})\\b`, "gi");
				str = str.replace(regex, "**$1**");
			});
		}
		return str.replace(/\r\n/g, "\n").split("\n").map((line) => {
			const t = line.trim();
			if (t.match(/^(#|\d+\.|-|\*)/)) return t;
			return t ? `${t}
` : "";
		}).join("\n").replace(/\n{3,}/g, "\n\n");
	}
	const formattedText = smartFormat(post ? post.content || "" : "");
	const parsedContent = await marked.parse(formattedText);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": post?.title ?? "Detail artikel blog",
		"title": post?.title ?? "Blog Detail"
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section class="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:px-8"><a${addAttribute(`${basePath}/${currentLocale}/blog`, "href")} class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900">&lt; Kembali ke Blog</a>${post ? renderTemplate`<article class="mt-10 space-y-8"><div class="overflow-hidden rounded-xl bg-slate-100 shadow-sm"><img${addAttribute(post.image_url ?? `${basePath}/placeholder.jpg`, "src")}${addAttribute(post.title ?? "Artikel blog", "alt")} class="w-full object-cover"></div><div class="space-y-4"><div class="text-sm font-medium uppercase tracking-[0.25em] text-sky-600">Blog</div><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100">${post.title ?? "Tanpa Judul"}</h1><div class="text-sm text-slate-500 dark:text-slate-400">${formatDate(post.published_at ?? post.created_at)}</div><div class="whitespace-pre-line leading-relaxed text-gray-300 text-base max-w-none 
                      prose prose-invert 
                      prose-headings:text-white prose-headings:font-bold 
                      prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 
                      prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2 
                      prose-p:mb-6">${unescapeHTML(parsedContent)}</div></div></article>` : renderTemplate`<div class="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"><h2 class="text-2xl font-semibold">Artikel tidak ditemukan</h2><p class="mt-4 text-sm text-slate-600 dark:text-slate-400">Slug artikel tidak valid atau artikel belum tersedia.</p></div>`}</section>` })}`;
}, "D:/blast-main/src/pages/[...lang]/blog-detail.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/blog-detail.astro";
var $$url = "/blast/[...lang]/blog-detail";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/blog-detail@_@astro
var page = () => blog_detail_exports;
//#endregion
export { page };
