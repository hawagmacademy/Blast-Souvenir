import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent } from "./server_DqMh0nkK.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths } from "./utils_qogIoZEK.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CBzI-w8L.mjs";
import { t as supabase } from "./db_DIMXPWFB.mjs";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";
import nodePath from "node:path";
//#region src/pages/[...lang]/admin/tambah.astro
var tambah_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tambah,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Tambah = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Tambah;
	const { lang } = Astro2.params;
	const currentLocale = lang || Astro2.currentLocale || "en";
	const dashboardUrl = `/blast/${currentLocale}/admin`;
	const url = new URL(Astro2.request.url);
	const idParam = Number(url.searchParams.get("id"));
	let souvenir = {
		foto: "",
		nama: "",
		harga: 0,
		min_order: 1
	};
	let statusMessage = "";
	let isEdit = false;
	const currentDir = nodePath.dirname(fileURLToPath(import.meta.url));
	const uploadsDir = nodePath.resolve(currentDir, "../../../../public/uploads");
	await fs.mkdir(uploadsDir, { recursive: true });
	if (idParam) {
		isEdit = true;
		try {
			const { data, error } = await supabase.from("souvenirs").select("*").eq("id", idParam).single();
			if (error) throw error;
			if (data) souvenir = data;
		} catch (error) {
			console.error("Gagal memuat souvenir untuk edit:", error);
			statusMessage = "Gagal memuat data souvenir.";
		}
	}
	if (Astro2.request.method === "POST") {
		const formData = await Astro2.request.formData();
		const action = formData.get("action");
		const nama = String(formData.get("nama") || "");
		const harga = Number(formData.get("harga") || 0);
		const min_order = Number(formData.get("min_order") || 1);
		let foto = souvenir.foto;
		const uploadedFile = formData.get("foto");
		if (uploadedFile instanceof File && uploadedFile.size > 0) {
			const safeName = String(uploadedFile.name).replace(/[^a-zA-Z0-9.\-_]/g, "_");
			const filename = `${Date.now()}-${safeName}`;
			const filePath = nodePath.join(uploadsDir, filename);
			const arrayBuffer = await uploadedFile.arrayBuffer();
			await fs.writeFile(filePath, Buffer.from(arrayBuffer));
			foto = `/blastuploads/${filename}`;
		}
		try {
			if (action === "save") if (idParam) {
				const { error: updateError } = await supabase.from("souvenirs").update({
					foto,
					nama,
					harga,
					min_order
				}).eq("id", idParam);
				if (updateError) throw updateError;
				statusMessage = "Souvenir berhasil diperbarui.";
			} else {
				const { error: insertError } = await supabase.from("souvenirs").insert([{
					foto,
					nama,
					harga,
					min_order
				}]);
				if (insertError) throw insertError;
				statusMessage = "Souvenir baru berhasil ditambahkan.";
				souvenir = {
					foto: "",
					nama: "",
					harga: 0,
					min_order: 1
				};
			}
		} catch (error) {
			console.error("Gagal menyimpan souvenir:", error);
			statusMessage = "Terjadi kesalahan saat menyimpan souvenir.";
		}
	}
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"currentLocale": currentLocale,
		"activeMenu": "tambah",
		"pageTitle": isEdit ? "Edit Souvenir" : "Tambah Souvenir"
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"><div><p class="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.2em] mb-1">${isEdit ? "Inventory Management" : "New Product"}</p><h1 class="text-3xl font-black text-slate-900 dark:text-slate-100 mb-2 tracking-tight">${isEdit ? "Edit Souvenir" : "Tambah Souvenir Baru"}</h1><p class="text-sm text-slate-500 dark:text-slate-400 font-medium">${isEdit ? "Perbarui detail informasi souvenir yang sudah ada di sistem." : "Masukkan souvenir baru ke dalam daftar inventaris."}</p></div><div class="flex gap-3"><a${addAttribute(dashboardUrl, "href")} class="px-5 py-2.5 bg-slate-200 dark:bg-[#1c2541] hover:bg-slate-300 dark:hover:bg-[#222c4a] border border-transparent dark:border-[#2a3454] text-slate-700 dark:text-slate-300 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>Kembali</a></div></header>${statusMessage ? renderTemplate`<div class="mb-8 p-4 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-xl flex items-center gap-3 text-sm font-bold shadow-lg transition-colors duration-300"><svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>${statusMessage}</div>` : null}<div class="max-w-3xl bg-white dark:bg-[#1c2541] rounded-2xl p-8 border border-slate-200 dark:border-[#2a3454] shadow-xl transition-colors duration-300"><form method="POST" enctype="multipart/form-data" class="space-y-6"><input type="hidden" name="action" value="save"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-2"><label class="block text-sm font-bold text-slate-700 dark:text-slate-300">Nama Souvenir <span class="text-red-500">*</span></label><input type="text" name="nama"${addAttribute(souvenir.nama, "value")} required class="w-full px-4 py-3 bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-[#2a3454] text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" placeholder="Masukkan nama produk..."></div><div class="space-y-2"><label class="block text-sm font-bold text-slate-700 dark:text-slate-300">Harga (IDR) <span class="text-red-500">*</span></label><div class="relative"><span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-semibold">Rp</span><input type="number" name="harga"${addAttribute(souvenir.harga, "value")} min="0" required class="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-[#2a3454] text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="0"></div></div></div><div class="space-y-2"><label class="block text-sm font-bold text-slate-700 dark:text-slate-300">Minimal Order <span class="text-red-500">*</span></label><div class="relative w-full md:w-1/2"><input type="number" name="min_order"${addAttribute(souvenir.min_order, "value")} min="1" required class="w-full pr-12 pl-4 py-3 bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-[#2a3454] text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"><span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-semibold text-sm">pcs</span></div></div><div class="space-y-2"><label class="block text-sm font-bold text-slate-700 dark:text-slate-300">Foto Souvenir</label><div class="w-full relative"><input type="file" name="foto" accept="image/*" class="w-full px-4 py-3 bg-slate-50 dark:bg-[#0b1329] border border-slate-300 dark:border-[#2a3454] text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-cyan-100 file:text-cyan-700 dark:file:bg-cyan-500/20 dark:file:text-cyan-400 hover:file:bg-cyan-200 dark:hover:file:bg-cyan-500/30 cursor-pointer"></div></div>${isEdit && souvenir.foto && renderTemplate`<div class="space-y-2 p-4 bg-slate-50 dark:bg-[#0b1329] rounded-xl border border-slate-200 dark:border-[#2a3454]"><p class="text-xs font-bold text-slate-500 uppercase tracking-widest">Preview Foto Saat Ini</p><img${addAttribute(souvenir.foto, "src")} alt="Preview foto souvenir" class="w-32 h-32 object-cover rounded-lg border border-slate-300 dark:border-[#2a3454] shadow-md"></div>`}<div class="pt-6 border-t border-slate-200 dark:border-[#2a3454] flex gap-4"><button type="submit" class="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>${isEdit ? "Simpan Perubahan" : "Simpan Souvenir"}</button></div></form></div>` })}`;
}, "D:/blast-main/src/pages/[...lang]/admin/tambah.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/admin/tambah.astro";
var $$url = "/blast/[...lang]/admin/tambah";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/admin/tambah@_@astro
var page = () => tambah_exports;
//#endregion
export { page };
