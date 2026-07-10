import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent } from "./server_DqMh0nkK.mjs";
import { t as getRelativeLocaleUrl } from "./i18n_BK61tNnA.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths } from "./utils_qogIoZEK.mjs";
import { t as $$Layout } from "./Layout_zUB5F-3O.mjs";
import { t as supabase } from "./db_DIMXPWFB.mjs";
//#region src/pages/[...lang]/blog.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Blog,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Blog = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Blog;
	const currentLocale = Astro2.currentLocale || "en";
	const basePath = "/blast".replace(/\/$/, "");
	const formatDate = (value) => {
		if (!value) return "-";
		const date = new Date(value);
		if (Number.isNaN(date.getTime())) return value;
		return date.toLocaleDateString("id-ID", {
			day: "2-digit",
			month: "short",
			year: "numeric"
		});
	};
	let posts = [];
	try {
		const { data, error } = await supabase.from("posts").select("*").order("id", { ascending: false });
		if (error) throw error;
		posts = data;
	} catch (error) {
		console.error("Gagal memuat daftar blog:", error);
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": "Kumpulan inspirasi dan tips souvenir kantor untuk acara perusahaan Anda.",
		"title": "Inspirasi & Tips Souvenir Kantor"
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><div class="mb-10 text-center"><p class="text-sm font-semibold uppercase tracking-[0.32em] text-sky-600">Blog & Tips</p><h1 class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">Inspirasi & Tips Souvenir Kantor</h1><p class="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">Jelajahi artikel terbaru seputar merchandise perusahaan, ide souvenir event, dan cara memilih cenderamata kantor yang berkesan.</p></div><div class="grid grid-cols-1 gap-6 md:grid-cols-3">${posts.length === 0 ? renderTemplate`<div class="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"><p class="text-lg font-semibold">Belum ada artikel blog.</p><p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Silakan kembali lagi nanti untuk melihat konten terbaru.</p></div>` : posts.map((post) => renderTemplate`<article class="flex flex-col h-full min-h-[450px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"><div class="flex-grow"><div class="aspect-[4/3] overflow-hidden bg-slate-100"><img${addAttribute(post.image_url ?? `${basePath}/placeholder.jpg`, "src")}${addAttribute(post.title ?? "Artikel blog", "alt")} class="h-full w-full object-cover"></div><div class="space-y-4 p-6"><div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400"><span>${formatDate(post.published_at ?? post.created_at)}</span><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">Blog</span></div><div><h2 class="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">${post.title ?? "Tanpa Judul"}</h2><p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 line-clamp-3 text-ellipsis">${post.content ? post.content.slice(0, 140).trim() + (post.content.length > 140 ? "..." : "") : "Tidak ada ringkasan tersedia."}</p></div></div></div><div class="p-6"><a${addAttribute(`${getRelativeLocaleUrl(currentLocale, "/blog-detail")}?slug=${encodeURIComponent(post.slug ?? "")}`, "href")} class="mt-auto inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">Baca Selengkapnya</a></div></article>`)}</div></section>` })}`;
}, "D:/blast-main/src/pages/[...lang]/blog.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/blog.astro";
var $$url = "/blast/[...lang]/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/blog@_@astro
var page = () => blog_exports;
//#endregion
export { page };
