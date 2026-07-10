import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent, x as unescapeHTML } from "./server_DqMh0nkK.mjs";
import { t as getRelativeLocaleUrl } from "./i18n_BK61tNnA.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths, t as getLabels } from "./utils_qogIoZEK.mjs";
import { t as $$Layout } from "./Layout_zUB5F-3O.mjs";
//#region src/pages/[...lang]/legal.astro
var legal_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Legal,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Legal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Legal;
	const labels = getLabels(Astro.currentLocale, "legal");
	const currentLocale = Astro.currentLocale || "en";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": labels.description,
		"title": labels.title
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div class="flex flex-col gap-4 pb-16 text-center sm:pb-20"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl">${labels.heading}</h1><p class="text-muted text-base">${labels.lastUpdated}</p></div><div><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.publisherHeading}</h2><p class="mb-4"><span>${unescapeHTML(labels.publisherText)}</span><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href")} class="text-link font-bold">${labels.contactFormLink}</a></p><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.hostingHeading}</h2><p class="mb-4">${unescapeHTML(labels.hostingText)}</p><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.intellectualPropertyHeading}</h2><p class="mb-4">${labels.openSourceCreditsText}<a href="https://github.com/cjoyau/blast/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" class="text-link">${labels.licenseLink}</a>${labels.openSourceCreditsEnd}</p><p class="mb-4">${unescapeHTML(labels.contentOwnershipText)}</p><p class="mb-4">${labels.reproductionProhibitedText}</p><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.personalDataHeading}</h2><p class="mb-4">${labels.personalDataIntro}</p><ul class="mb-4 ml-6 list-outside list-disc space-y-2"><li>${unescapeHTML(labels.dataCollectionItem)}</li><li>${unescapeHTML(labels.dataProcessorsItem)}</li><li>${unescapeHTML(labels.userRightsItem)}</li><li><span>${unescapeHTML(labels.contactRightsText)}</span><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href")} class="text-link font-bold">${labels.contactFormLink}</a></li><li>${unescapeHTML(labels.cnilComplaintItem)}</li></ul><p class="mb-4">${labels.privacyPolicyPromptText}<a${addAttribute(getRelativeLocaleUrl(currentLocale, "/privacy"), "href")} class="text-link font-bold">${labels.privacyPolicyLink}</a></p><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.cookiesHeading}</h2><p class="mb-4">${labels.cookiesText}</p></div></section>` })}`;
}, "D:/blast-main/src/pages/[...lang]/legal.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/legal.astro";
var $$url = "/blast/[...lang]/legal";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/legal@_@astro
var page = () => legal_exports;
//#endregion
export { page };
