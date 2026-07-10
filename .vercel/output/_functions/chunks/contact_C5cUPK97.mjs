import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent } from "./server_DqMh0nkK.mjs";
import { t as getRelativeLocaleUrl } from "./i18n_BK61tNnA.mjs";
import "./compiler_CqZWJY3r.mjs";
import { t as getLabels } from "./utils_qogIoZEK.mjs";
import { n as external_link_line_default, r as createSvgComponent, t as $$Layout } from "./Layout_zUB5F-3O.mjs";
import { t as supabase } from "./db_DIMXPWFB.mjs";
//#region src/assets/icons/question-answer-line.svg
var question_answer_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/question-answer-line.CicvHJCP.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M5.45455 15L1 18.5V3C1 2.44772 1.44772 2 2 2H17C17.5523 2 18 2.44772 18 3V15H5.45455ZM4.76282 13H16V4H3V14.3851L4.76282 13ZM8 17H18.2372L20 18.3851V8H21C21.5523 8 22 8.44772 22 9V22.5L17.5455 19H9C8.44772 19 8 18.5523 8 18V17Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/contact/ContactForm.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$ContactForm = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$ContactForm;
	const labels = getLabels(Astro2.currentLocale, "contactForm");
	const currentLocale = Astro2.currentLocale || "en";
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"${addAttribute(`contactForm('undefined')`, "x-data")}><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="grid gap-12 lg:grid-cols-2 lg:gap-8"><div class="flex flex-col gap-4 sm:gap-6"><div class="flex gap-4">${renderComponent($$result, "QuestionAnswerIcon", question_answer_line_default, {
		"class": "fill-primary-500 h-8 w-8 shrink-0 sm:h-10 sm:w-10",
		"aria-hidden": "true"
	})}<h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${labels.title}</h2></div><p class="text-muted max-w-106 text-lg sm:max-w-118 sm:text-xl">${labels.description}</p><p class="text-muted max-w-106 text-base font-medium italic sm:max-w-118 sm:text-lg">${labels.responseTime}</p><p class="text-muted max-w-106 text-base sm:max-w-118">${labels.policyText}<a${addAttribute(getRelativeLocaleUrl(currentLocale, "/privacy"), "href")} class="text-link font-bold">${labels.policyLink}</a>.</p></div><form x-ref="form" method="POST" class="mt-3" x-show="status === 'idle' || status === 'submitting'"><div><label for="name" class="sr-only">${labels.form.name}</label><input type="text" name="nama" id="name" autocomplete="name" class="form-element"${addAttribute(labels.form.name, "placeholder")} required></div><div class="mt-6"><label for="perusahaan" class="sr-only">Nama Perusahaan</label><input type="text" name="perusahaan" id="perusahaan" class="form-element" placeholder="Nama Perusahaan / Kantor" required></div><div class="mt-6"><label for="email" class="sr-only">${labels.form.email}</label><input type="email" name="email" id="email" autocomplete="email" class="form-element"${addAttribute(labels.form.email, "placeholder")} required></div><div class="mt-6"><label for="message" class="sr-only">${labels.form.message}</label><textarea name="pesan" id="message" rows="3" class="form-element" placeholder="Detail souvenir yang diinginkan..." required></textarea></div><div class="mt-6" x-ref="turnstileContainer"></div><div class="mt-6 flex items-center gap-4"><button class="btn-primary" type="submit">Minta Penawaran Harga</button></div></form></div></div></section>`;
}, "D:/blast-main/src/components/contact/ContactForm.astro", void 0);
//#endregion
//#region src/assets/icons/github-fill.svg
var github_fill_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/github-fill.DD4CtOd3.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z\"></path>",
	"styles": []
});
//#endregion
//#region src/assets/icons/linkedin-box-fill.svg
var linkedin_box_fill_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/linkedin-box-fill.BBbznojc.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z\"></path>",
	"styles": []
});
//#endregion
//#region src/assets/icons/map-pin-2-line.svg
var map_pin_2_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/map-pin-2-line.HHKdNBqz.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/contact/ContactInfo.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ContactInfo;
	const labels = getLabels(Astro.currentLocale, "contactInfo");
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><dl class="grid gap-6 lg:grid-cols-3"><!-- Address --><div class="bg-surface rounded-3xl px-6 py-8"><dt class="sr-only">${labels.address}</dt><dd class="flex h-full flex-col justify-between gap-12">${renderComponent($$result, "MapPinIcon", map_pin_2_line_default, {
		"class": "icon-primary",
		"aria-hidden": "true"
	})}<div class="text-base font-medium"><p>${labels.location}</p></div></dd></div><!-- LinkedIn --><div class="bg-surface rounded-3xl px-6 py-8"><dt class="sr-only">LinkedIn</dt><dd class="flex h-full flex-col justify-between gap-12">${renderComponent($$result, "LinkedInIcon", linkedin_box_fill_default, {
		"class": "icon-primary",
		"aria-hidden": "true"
	})}<p class="text-base font-medium"><a${addAttribute(`https://${labels.linkedin}`, "href")} class="text-link" target="_blank" rel="noopener noreferrer">${labels.linkedin}${renderComponent($$result, "ExternalLinkIcon", external_link_line_default, {
		"class": "h-4 w-4",
		"aria-hidden": "true"
	})}</a></p></dd></div><!-- GitHub --><div class="bg-surface rounded-3xl px-6 py-8"><dt class="sr-only">GitHub</dt><dd class="flex h-full flex-col justify-between gap-12">${renderComponent($$result, "GitHubIcon", github_fill_default, {
		"class": "icon-primary",
		"aria-hidden": "true"
	})}<p class="text-base font-medium"><a${addAttribute(`https://${labels.github}`, "href")} class="text-link" target="_blank" rel="noopener noreferrer">${labels.github}${renderComponent($$result, "ExternalLinkIcon", external_link_line_default, {
		"class": "h-4 w-4",
		"aria-hidden": "true"
	})}</a></p></dd></div></dl></div></section>`;
}, "D:/blast-main/src/components/contact/ContactInfo.astro", void 0);
//#endregion
//#region src/pages/[...lang]/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Contact = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Contact;
	const labels = getLabels(Astro.currentLocale, "contact");
	let statusPesan = "";
	if (Astro.request.method === "POST") try {
		const formData = await Astro.request.formData();
		const nama = String(formData.get("nama") || "").trim();
		const perusahaan = String(formData.get("perusahaan") || "").trim();
		const email = String(formData.get("email") || "").trim();
		const pesan = String(formData.get("pesan") || "").trim();
		const { error: insertError } = await supabase.from("permintaan_souvenir").insert([{
			nama,
			perusahaan,
			email,
			pesan
		}]);
		if (insertError) throw insertError;
		statusPesan = "Sukses! Permintaan penawaran Anda telah dikirim.";
	} catch (error) {
		console.error("Detail Error DB:", error);
		statusPesan = "Gagal mengirim permintaan. Silakan coba lagi.";
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": labels.description,
		"title": labels.title,
		"data-astro-cid-zh4gkh43": true
	}, {
		"default": ($$result) => renderTemplate`${statusPesan && renderTemplate`${maybeRenderHead($$result)}<div class="notif-box" data-astro-cid-zh4gkh43><p data-astro-cid-zh4gkh43>${statusPesan}</p></div>`}${renderComponent($$result, "ContactInfo", $$ContactInfo, { "data-astro-cid-zh4gkh43": true })}${renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-zh4gkh43": true })}`,
		"head": ($$result) => renderTemplate`<script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad" async defer><\/script>`
	})}`;
}, "D:/blast-main/src/pages/[...lang]/contact.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/contact.astro";
var $$url = "/blast/[...lang]/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
