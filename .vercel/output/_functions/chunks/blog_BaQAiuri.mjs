import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent } from "./server_DqMh0nkK.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths } from "./utils_qogIoZEK.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CBzI-w8L.mjs";
import { t as supabase } from "./db_DIMXPWFB.mjs";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";
import nodePath from "node:path";
//#region src/pages/[...lang]/admin/blog.astro
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
	const { lang } = Astro2.params;
	const currentLocale = lang || Astro2.currentLocale || "en";
	"/blast".replace(/\/$/, "");
	`${currentLocale}`;
	`${currentLocale}`;
	`${currentLocale}`;
	let posts = [];
	let statusMessage = "";
	let isEdit = false;
	let editingPost = null;
	let formTitle = "";
	let formImageUrl = "";
	let formContent = "";
	const currentDir = nodePath.dirname(fileURLToPath(import.meta.url));
	const uploadsDir = nodePath.resolve(currentDir, "../../../../public/uploads");
	await fs.mkdir(uploadsDir, { recursive: true });
	const makeSlug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
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
	try {
		const { data, error } = await supabase.from("posts").select("*").order("id", { ascending: false });
		if (error) throw error;
		posts = data;
	} catch (error) {
		console.error("Gagal memuat data blog:", error);
	}
	if (Astro2.request.method === "POST") {
		const formData = await Astro2.request.formData();
		const action = String(formData.get("action") || "");
		const id = Number(formData.get("id") || 0);
		const title = String(formData.get("title") || "").trim();
		const content = String(formData.get("content") || "").trim();
		let imageUrl = String(formData.get("existing_image_url") || "").trim();
		const uploadedFile = formData.get("image_file");
		if (uploadedFile instanceof File && uploadedFile.size > 0) {
			const safeName = String(uploadedFile.name).replace(/[^a-zA-Z0-9.\-_]/g, "_");
			const filename = `${Date.now()}-${safeName}`;
			const filePath = nodePath.join(uploadsDir, filename);
			const arrayBuffer = await uploadedFile.arrayBuffer();
			await fs.writeFile(filePath, Buffer.from(arrayBuffer));
			imageUrl = `${"/blast".replace(/\/$/, "")}/uploads/${filename}`;
		}
		try {
			if (action === "save" && title) {
				const slug = makeSlug(title);
				if (id) {
					const { error: updateError } = await supabase.from("posts").update({
						title,
						slug,
						image_url: imageUrl,
						content
					}).eq("id", id);
					if (updateError) throw updateError;
					statusMessage = "Artikel berhasil diperbarui.";
				} else {
					const { error: insertError } = await supabase.from("posts").insert([{
						title,
						slug,
						image_url: imageUrl,
						content
					}]);
					if (insertError) throw insertError;
					statusMessage = "Artikel berhasil ditambahkan.";
				}
				const { data: refreshData, error: refreshError } = await supabase.from("posts").select("*").order("id", { ascending: false });
				if (!refreshError) posts = refreshData;
				if (!id) {
					formTitle = "";
					formContent = "";
					formImageUrl = "";
				}
			} else if (action === "delete" && id) {
				const { error: deleteError } = await supabase.from("posts").delete().eq("id", id);
				if (deleteError) throw deleteError;
				statusMessage = "Artikel berhasil dihapus.";
				const { data: refreshData, error: refreshError } = await supabase.from("posts").select("*").order("id", { ascending: false });
				if (!refreshError) posts = refreshData;
			} else if (action === "edit" && id) {
				const { data: editData, error: editError } = await supabase.from("posts").select("*").eq("id", id).single();
				if (!editError && editData) {
					editingPost = editData;
					isEdit = true;
					formTitle = editingPost.title || "";
					formImageUrl = editingPost.image_url || "";
					formContent = editingPost.content || "";
				}
			}
		} catch (error) {
			console.error("Gagal memproses artikel blog:", error);
			statusMessage = "Terjadi kesalahan saat memproses artikel.";
		}
	}
	if (Astro2.request.method === "GET") {
		const url = new URL(Astro2.request.url);
		const editId = Number(url.searchParams.get("edit") || 0);
		if (editId) try {
			const { data: editData, error: editError } = await supabase.from("posts").select("*").eq("id", editId).single();
			if (!editError && editData) {
				editingPost = editData;
				isEdit = true;
				formTitle = editingPost.title || "";
				formImageUrl = editingPost.image_url || "";
				formContent = editingPost.content || "";
			}
		} catch (error) {
			console.error("Gagal memuat artikel untuk edit:", error);
		}
	}
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"currentLocale": currentLocale,
		"activeMenu": "blog",
		"pageTitle": "Blog Admin",
		"data-astro-cid-ninl2nka": true
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4" data-astro-cid-ninl2nka><div data-astro-cid-ninl2nka><p class="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-[0.2em] mb-1" data-astro-cid-ninl2nka>Content Studio</p><h1 class="text-3xl font-black text-slate-900 dark:text-slate-100 mb-2 tracking-tight" data-astro-cid-ninl2nka>Kelola Artikel Blog</h1><p class="text-sm text-slate-500 dark:text-slate-400 font-medium" data-astro-cid-ninl2nka>Buat dan kelola konten edukasi seputar souvenir untuk pengunjung website Anda.</p></div></header>${statusMessage ? renderTemplate`<div class="mb-8 p-4 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-xl flex items-center gap-3 text-sm font-bold shadow-lg transition-colors duration-300" data-astro-cid-ninl2nka><svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ninl2nka><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ninl2nka></path></svg>${statusMessage}</div>` : null}<div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-ninl2nka><!-- Form Content Section (Left) --><div class="lg:col-span-1" data-astro-cid-ninl2nka><div class="bg-white dark:bg-[#1c2541] rounded-2xl p-6 border border-slate-200 dark:border-[#2a3454] shadow-xl transition-colors duration-300 sticky top-6" data-astro-cid-ninl2nka><div class="mb-6 border-b border-slate-200 dark:border-[#2a3454] pb-4" data-astro-cid-ninl2nka><h2 class="text-lg font-black text-slate-800 dark:text-white" data-astro-cid-ninl2nka>${isEdit ? "Edit Artikel" : "Tulis Artikel Baru"}</h2><p class="text-xs text-slate-500 dark:text-slate-400 mt-1" data-astro-cid-ninl2nka>${isEdit ? "Ubah konten artikel di bawah." : "Publikasikan artikel baru."}</p></div><form method="POST" enctype="multipart/form-data" class="space-y-5" data-astro-cid-ninl2nka><input type="hidden" name="action" value="save" data-astro-cid-ninl2nka>${editingPost ? renderTemplate`<input type="hidden" name="id"${addAttribute(editingPost.id, "value")} data-astro-cid-ninl2nka>` : null}${isEdit && formImageUrl ? renderTemplate`<input type="hidden" name="existing_image_url"${addAttribute(formImageUrl, "value")} data-astro-cid-ninl2nka>` : null}<div class="space-y-2" data-astro-cid-ninl2nka><label class="block text-sm font-bold text-slate-700 dark:text-slate-300" data-astro-cid-ninl2nka>Judul Artikel <span class="text-red-500" data-astro-cid-ninl2nka>*</span></label><input type="text" name="title"${addAttribute(formTitle, "value")} required class="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-[#2a3454] text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all text-sm" placeholder="Judul menarik..." data-astro-cid-ninl2nka></div><div class="space-y-2" data-astro-cid-ninl2nka><label class="block text-sm font-bold text-slate-700 dark:text-slate-300" data-astro-cid-ninl2nka>Cover Artikel</label><input type="file" name="image_file" accept="image/*" class="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-[#2a3454] text-slate-900 dark:text-white rounded-lg outline-none text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-bold file:bg-purple-100 file:text-purple-700 dark:file:bg-purple-500/20 dark:file:text-purple-400 hover:file:bg-purple-200 dark:hover:file:bg-purple-500/30 cursor-pointer" data-astro-cid-ninl2nka>${isEdit && formImageUrl && renderTemplate`<div class="mt-3 p-2 bg-slate-50 dark:bg-[#0b1329] rounded border border-slate-200 dark:border-[#2a3454]" data-astro-cid-ninl2nka><p class="text-[10px] font-bold text-slate-500 uppercase mb-2" data-astro-cid-ninl2nka>Cover Saat Ini</p><img${addAttribute(formImageUrl, "src")}${addAttribute(formTitle, "alt")} class="w-full h-32 object-cover rounded shadow-sm border border-slate-300 dark:border-[#2a3454]" data-astro-cid-ninl2nka></div>`}</div><div class="space-y-2" data-astro-cid-ninl2nka><label class="block text-sm font-bold text-slate-700 dark:text-slate-300" data-astro-cid-ninl2nka>Isi Konten <span class="text-red-500" data-astro-cid-ninl2nka>*</span></label><div class="text-[11px] bg-purple-50 dark:bg-purple-500/10 text-slate-700 dark:text-slate-300 p-3 rounded-lg border border-purple-200 dark:border-purple-500/20 space-y-2 mb-2 leading-relaxed" data-astro-cid-ninl2nka><p data-astro-cid-ninl2nka><strong class="text-purple-700 dark:text-purple-400" data-astro-cid-ninl2nka>Optimasi AI Overview:</strong> 3 kalimat pertama pada paragraf pembuka HARUS secara langsung, lugas, dan komprehensif menjawab pertanyaan utama (Main Questions Answered).</p><p data-astro-cid-ninl2nka><strong class="text-purple-700 dark:text-purple-400" data-astro-cid-ninl2nka>Gaya Penulisan:</strong> Terapkan teknik 'Piramida Terbalik'. Tempatkan informasi paling krusial (5W+1H) di paragraf awal, detail pendukung di bagian tengah, dan informasi tambahan di akhir.</p><p data-astro-cid-ninl2nka><strong class="text-purple-700 dark:text-purple-400" data-astro-cid-ninl2nka>Panjang Kata:</strong> Artikel harus berjumlah ketat antara 700 hingga 900 kata.</p><p data-astro-cid-ninl2nka><strong class="text-purple-700 dark:text-purple-400" data-astro-cid-ninl2nka>Struktur Heading (H2 & H3):</strong> Artikel wajib menggunakan hierarki heading yang logis. Gunakan H2 untuk membagi poin utama atau sub-topik besar, dan gunakan H3 untuk memecah H2 menjadi detail yang lebih spesifik. Pastikan heading mengandung variasi keyword yang relevan secara natural.</p></div><textarea name="content" rows="8" required class="w-full px-4 py-3 bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-[#2a3454] text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all text-sm leading-relaxed resize-none custom-scrollbar" placeholder="Tulis artikel di sini..." data-astro-cid-ninl2nka>${formContent}</textarea></div><div class="pt-4 border-t border-slate-200 dark:border-[#2a3454] flex gap-3" data-astro-cid-ninl2nka><button type="submit" class="flex-1 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all" data-astro-cid-ninl2nka>${isEdit ? "Simpan" : "Publish"}</button>${isEdit && renderTemplate`<a${addAttribute(`/blast/${currentLocale}/admin/blog`, "href")} class="px-4 py-2.5 bg-slate-200 dark:bg-[#2a3454] hover:bg-slate-300 dark:hover:bg-[#3a4773] text-slate-700 dark:text-slate-200 text-sm font-bold rounded-lg transition-all text-center" data-astro-cid-ninl2nka>Batal</a>`}</div></form></div></div><!-- Article List (Right) --><div class="lg:col-span-2" data-astro-cid-ninl2nka>${posts.length === 0 ? renderTemplate`<div class="bg-white dark:bg-[#1c2541] rounded-2xl p-10 border border-slate-200 dark:border-[#2a3454] text-center shadow-xl" data-astro-cid-ninl2nka><svg class="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ninl2nka><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-ninl2nka></path></svg><h3 class="text-lg font-bold text-slate-700 dark:text-slate-300 mb-1" data-astro-cid-ninl2nka>Belum ada artikel</h3><p class="text-sm text-slate-500 dark:text-slate-400" data-astro-cid-ninl2nka>Gunakan form di sebelah kiri untuk menulis artikel pertama Anda.</p></div>` : renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-astro-cid-ninl2nka>${posts.map((post) => renderTemplate`<div class="group bg-white dark:bg-[#1c2541] rounded-xl border border-slate-200 dark:border-[#2a3454] shadow-md hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/40 overflow-hidden flex flex-col transition-all duration-300 relative" data-astro-cid-ninl2nka><!-- Cover Image --><div class="relative h-40 bg-slate-100 dark:bg-[#0b1329] overflow-hidden border-b border-slate-200 dark:border-[#2a3454]" data-astro-cid-ninl2nka>${post.image_url ? renderTemplate`<img${addAttribute(post.image_url, "src")}${addAttribute(post.title || "Cover", "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-astro-cid-ninl2nka>` : renderTemplate`<div class="w-full h-full flex items-center justify-center" data-astro-cid-ninl2nka><svg class="w-10 h-10 text-slate-300 dark:text-slate-700" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ninl2nka><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" data-astro-cid-ninl2nka></path></svg></div>`}<div class="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300" data-astro-cid-ninl2nka><!-- Edit Icon Button --><a${addAttribute(`/blast/${currentLocale}/admin/blog?edit=${post.id}`, "href")} class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 hover:scale-110 transition-all" title="Edit Artikel" data-astro-cid-ninl2nka><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ninl2nka><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" data-astro-cid-ninl2nka></path></svg></a><!-- Delete Icon Button --><form method="POST" class="m-0" onsubmit="return confirm('Hapus artikel ini?')" data-astro-cid-ninl2nka><input type="hidden" name="action" value="delete" data-astro-cid-ninl2nka><input type="hidden" name="id"${addAttribute(post.id, "value")} data-astro-cid-ninl2nka><button type="submit" class="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 hover:scale-110 transition-all" title="Hapus Artikel" data-astro-cid-ninl2nka><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ninl2nka><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-ninl2nka></path></svg></button></form></div></div><!-- Content Details --><div class="p-5 flex-1 flex flex-col" data-astro-cid-ninl2nka><div class="flex items-center gap-2 mb-2" data-astro-cid-ninl2nka><span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 rounded uppercase tracking-wider" data-astro-cid-ninl2nka>${formatDate(post.published_at || post.created_at)}</span></div><h3 class="text-base font-bold text-slate-900 dark:text-white leading-tight mb-2 line-clamp-2" data-astro-cid-ninl2nka>${post.title || "Tanpa Judul"}</h3><p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mt-auto" data-astro-cid-ninl2nka>${post.content || "..."}</p></div></div>`)}</div>`}</div></div>` })}`;
}, "D:/blast-main/src/pages/[...lang]/admin/blog.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/admin/blog.astro";
var $$url = "/blast/[...lang]/admin/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/admin/blog@_@astro
var page = () => blog_exports;
//#endregion
export { page };
