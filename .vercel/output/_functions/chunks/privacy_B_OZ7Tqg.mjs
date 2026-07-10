import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent, x as unescapeHTML } from "./server_DqMh0nkK.mjs";
import { t as getRelativeLocaleUrl } from "./i18n_BK61tNnA.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as getStaticPaths, t as getLabels } from "./utils_qogIoZEK.mjs";
import { t as $$Layout } from "./Layout_zUB5F-3O.mjs";
//#region src/pages/[...lang]/privacy.astro
var privacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacy,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Privacy = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Privacy;
	const labels = getLabels(Astro.currentLocale, "privacy");
	const currentLocale = Astro.currentLocale || "en";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"description": labels.description,
		"title": labels.title
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div class="flex flex-col gap-4 pb-16 text-center sm:pb-20"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl">${labels.heading}</h1><p class="text-muted text-base">${labels.lastUpdated}</p></div><div><p class="mb-4">${labels.intro}</p><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.dataControllerHeading}</h2><p class="mb-4"><span>${unescapeHTML(labels.dataControllerText)}</span><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href")} class="text-link font-bold">${labels.contactFormLink}</a></p><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.collectedDataHeading}</h2><h3 class="mt-6 mb-6 text-lg font-medium sm:text-xl">${labels.contactFormHeading}</h3><p class="mb-4">${labels.contactFormIntro}</p><ul class="mb-4 ml-6 list-outside list-disc space-y-2"><li>${unescapeHTML(labels.identificationData)}</li><li>${unescapeHTML(labels.contactData)}</li><li>${unescapeHTML(labels.messageContent)}</li></ul><p class="mb-4">${unescapeHTML(labels.contactFormPurpose)}</p><h3 class="mt-6 mb-6 text-lg font-medium sm:text-xl">${labels.securityHeading}</h3><p class="mb-4">${unescapeHTML(labels.securityIntro)}</p><p class="mb-4">${unescapeHTML(labels.securityPurpose)}</p><h3 class="mt-6 mb-6 text-lg font-medium sm:text-xl">${labels.hostingHeading}</h3><p class="mb-4">${unescapeHTML(labels.hostingIntro)}</p><p class="mb-4">${labels.hostingLogsText}</p><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.dataRecipientsHeading}</h2><p class="mb-4">${labels.dataRecipientsIntro}</p><ul class="mb-4 ml-6 list-outside list-disc space-y-2"><li>${unescapeHTML(labels.githubRecipient)}</li><li>${unescapeHTML(labels.basinRecipient)}</li><li>${unescapeHTML(labels.cloudflareRecipient)}</li></ul><p class="mb-4">${labels.dataTransfersText}</p><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.retentionPeriodHeading}</h2><ul class="mb-4 ml-6 list-outside list-disc space-y-2"><li>${unescapeHTML(labels.contactRequestsRetention)}</li><li>${unescapeHTML(labels.technicalLogsRetention)}</li></ul><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.userRightsHeading}</h2><p class="mb-4">${labels.userRightsIntro}</p><ul class="mb-4 ml-6 list-outside list-disc space-y-2"><li>${unescapeHTML(labels.rightOfAccess)}</li><li>${unescapeHTML(labels.rightOfRectification)}</li><li>${unescapeHTML(labels.rightToErasure)}</li><li>${unescapeHTML(labels.rightToObjection)}</li><li>${unescapeHTML(labels.rightToPortability)}</li></ul><p class="mb-4">${labels.exerciseRightsPrompt}<a${addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href")} class="text-link font-bold">${labels.contactFormLink}</a><span>${unescapeHTML(labels.cnilComplaintText)}</span></p><h2 class="mt-12 mb-6 text-xl font-medium sm:text-2xl">${labels.cookiesHeading}</h2><p class="mb-4">${labels.cookiesText}</p></div></section>` })}`;
}, "D:/blast-main/src/pages/[...lang]/privacy.astro", void 0);
var $$file = "D:/blast-main/src/pages/[...lang]/privacy.astro";
var $$url = "/blast/[...lang]/privacy";
//#endregion
//#region \0virtual:astro:page:src/pages/[...lang]/privacy@_@astro
var page = () => privacy_exports;
//#endregion
export { page };
