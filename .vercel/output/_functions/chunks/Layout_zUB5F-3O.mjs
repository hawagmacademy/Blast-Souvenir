import { C as createAstro, _ as addAttribute, a as renderComponent, c as renderSlot, d as renderTemplate, g as renderHead, h as maybeRenderHead, m as generateCspDigest, n as renderScript, t as spreadAttributes, w as createComponent, x as unescapeHTML } from "./server_DqMh0nkK.mjs";
import { t as getRelativeLocaleUrl } from "./i18n_BK61tNnA.mjs";
import { r as $$Font, t as getImage } from "./_astro_assets_DEI_O1pM.mjs";
import "./compiler_CqZWJY3r.mjs";
import { a as ogLocales, i as locales, n as getRelativePath, t as getLabels } from "./utils_qogIoZEK.mjs";
//#region src/assets/og-image.webp
var og_image_default = new Proxy({
	"src": "/blast/_astro/og-image.Bo0m6gZz.webp",
	"width": 1200,
	"height": 630,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/blast-main/src/assets/og-image.webp";
	return target[name];
} });
//#endregion
//#region node_modules/astro/components/ClientRouter.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/blast-main/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/blast-main/node_modules/astro/components/ClientRouter.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
//#endregion
//#region src/assets/icons/external-link-line.svg
var external_link_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/external-link-line.BsFN94r7.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/layout/Footer.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Footer;
	const base = "/blast";
	const labels = getLabels(Astro2.currentLocale, "layoutFooter");
	const currentLocale = Astro2.currentLocale || "en";
	const bottomLinks = [
		{
			header: labels.followUs,
			links: [{
				name: "LinkedIn",
				href: "https://" + labels.linkedin,
				isExternal: true
			}, {
				name: "GitHub",
				href: "https://" + labels.github,
				isExternal: true
			}]
		},
		{
			header: labels.company,
			links: [
				{
					name: labels.links.home,
					href: getRelativeLocaleUrl(currentLocale, "/"),
					isExternal: false
				},
				{
					name: labels.links.about,
					href: getRelativeLocaleUrl(currentLocale, "/about"),
					isExternal: false
				},
				{
					name: labels.links.pricing,
					href: getRelativeLocaleUrl(currentLocale, "/pricing"),
					isExternal: false
				},
				{
					name: labels.links.contact,
					href: getRelativeLocaleUrl(currentLocale, "/contact"),
					isExternal: false
				}
			]
		},
		{
			header: labels.regulatory,
			links: [
				{
					name: labels.links.legal,
					href: getRelativeLocaleUrl(currentLocale, "/legal"),
					isExternal: false
				},
				{
					name: labels.links.privacy,
					href: getRelativeLocaleUrl(currentLocale, "/privacy"),
					isExternal: false
				},
				{
					name: labels.links.styleguide,
					href: getRelativeLocaleUrl(currentLocale, "/styleguide"),
					isExternal: false
				}
			]
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-surface mt-16 py-16 lg:mt-20 lg:py-20" aria-labelledby="footer-heading"><h2 id="footer-heading" class="sr-only">${labels.title}</h2><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row"><div class="flex max-w-100 flex-col items-start gap-6 sm:gap-8"><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/"), "href")} class="group-focus-outline rounded-md"><img class="mr-1 inline" width="32" height="32"${addAttribute(`${base}/logo.svg`, "src")}${addAttribute(labels.companyName, "alt")}><span class="text-muted align-middle text-xl font-bold">${labels.companyName}</span></a><p class="text-muted text-base">${labels.description}</p><p class="text-muted text-sm">${labels.copyright}</p></div><!-- Bottom links --><div class="grid max-w-xl flex-1 grid-cols-1 gap-8 sm:grid-cols-3">${bottomLinks.map((group) => renderTemplate`<div class="flex flex-col gap-4"><p class="text-base font-medium">${group.header}</p><ul role="list" class="flex flex-col gap-3">${group.links.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")} class="text-link"${addAttribute(link.isExternal ? "_blank" : void 0, "target")}${addAttribute(link.isExternal ? "noopener noreferrer" : void 0, "rel")}>${link.name}${link.isExternal && renderTemplate`${renderComponent($$result, "ExternalLinkIcon", external_link_line_default, {
		"class": "h-4 w-4",
		"aria-hidden": "true"
	})}`}</a></li>`)}</ul></div>`)}</div></div></div></footer>`;
}, "D:/blast-main/src/components/layout/Footer.astro", void 0);
//#endregion
//#region src/assets/icons/arrow-right-up-line.svg
var arrow_right_up_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/arrow-right-up-line.B8Il0ak6.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z\"></path>",
	"styles": []
});
//#endregion
//#region src/assets/icons/close-line.svg
var close_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/close-line.DpRyTVIK.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z\"></path>",
	"styles": []
});
//#endregion
//#region src/assets/icons/equal-line.svg
var equal_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/equal-line.B4xVj_EQ.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M19 8H5V10H19V8ZM19 14H5V16H19V14Z\"></path>",
	"styles": []
});
//#endregion
//#region src/assets/icons/moon-clear-line.svg
var moon_clear_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/moon-clear-line.CkV-0inM.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M10 6C10 10.4183 13.5817 14 18 14C19.4386 14 20.7885 13.6203 21.9549 12.9556C21.4738 18.0302 17.2005 22 12 22C6.47715 22 2 17.5228 2 12C2 6.79948 5.9698 2.52616 11.0444 2.04507C10.3797 3.21152 10 4.56142 10 6ZM4 12C4 16.4183 7.58172 20 12 20C14.9654 20 17.5757 18.3788 18.9571 15.9546C18.6407 15.9848 18.3214 16 18 16C12.4772 16 8 11.5228 8 6C8 5.67863 8.01524 5.35933 8.04536 5.04293C5.62119 6.42426 4 9.03458 4 12ZM18.1642 2.29104L19 2.5V3.5L18.1642 3.70896C17.4476 3.8881 16.8881 4.4476 16.709 5.16417L16.5 6H15.5L15.291 5.16417C15.1119 4.4476 14.5524 3.8881 13.8358 3.70896L13 3.5V2.5L13.8358 2.29104C14.5524 2.1119 15.1119 1.5524 15.291 0.835829L15.5 0H16.5L16.709 0.835829C16.8881 1.5524 17.4476 2.1119 18.1642 2.29104ZM23.1642 7.29104L24 7.5V8.5L23.1642 8.70896C22.4476 8.8881 21.8881 9.4476 21.709 10.1642L21.5 11H20.5L20.291 10.1642C20.1119 9.4476 19.5524 8.8881 18.8358 8.70896L18 8.5V7.5L18.8358 7.29104C19.5524 7.1119 20.1119 6.5524 20.291 5.83583L20.5 5H21.5L21.709 5.83583C21.8881 6.5524 22.4476 7.1119 23.1642 7.29104Z\"></path>",
	"styles": []
});
//#endregion
//#region src/assets/icons/sun-line.svg
var sun_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/sun-line.D9mcSwdm.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/layout/Header.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Header;
	const base = "/blast";
	const labels = getLabels(Astro2.currentLocale, "layoutHeader");
	const currentLocale = Astro2.currentLocale || "en";
	const targetLocale = locales[(locales.indexOf(currentLocale) + 1) % locales.length];
	const relativePath = getRelativePath(Astro2.url.pathname, currentLocale);
	const localeLabels = {
		en: "ENG",
		id: "IDN"
	};
	const links = [
		{
			ref: "01",
			name: labels.home,
			href: getRelativeLocaleUrl(currentLocale, "/")
		},
		{
			ref: "02",
			name: labels.about,
			href: getRelativeLocaleUrl(currentLocale, "/about")
		},
		{
			ref: "03",
			name: labels.blog,
			href: getRelativeLocaleUrl(currentLocale, "/blog")
		},
		{
			ref: "04",
			name: labels.pricing,
			href: getRelativeLocaleUrl(currentLocale, "/pricing")
		},
		{
			ref: "04",
			name: labels.contact,
			href: getRelativeLocaleUrl(currentLocale, "/contact")
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<header x-data="{ open: false }" class="bg-surface transition"><div class="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8"><!-- Brand logo --><div class="flex"><a${addAttribute(getRelativeLocaleUrl(currentLocale, "/"), "href")} class="group-focus-outline rounded-md"><img class="mr-1 inline" width="32" height="32"${addAttribute(`${base}/logo.svg`, "src")}${addAttribute(labels.companyName, "alt")}><span class="align-middle text-xl font-bold">${labels.companyName}</span></a></div><!-- Actions --><div class="-mr-2 flex items-center space-x-2 sm:space-x-3"><!-- Language switch --><a${addAttribute(getRelativeLocaleUrl(targetLocale, relativePath), "href")} class="header-action font-medium" x-data${addAttribute(`$store.language.setLang('${targetLocale}')`, "@click")}><span class="sr-only">${labels.toggleLanguage}</span>${localeLabels[targetLocale] ?? targetLocale.toUpperCase()}</a><!-- Toggle theme mode --><button type="button" class="header-action" x-data @click="$store.theme.toggle()"><span class="sr-only">${labels.toggleTheme}</span>${renderComponent($$result, "SunIcon", sun_line_default, {
		"class": "hidden h-6 w-6 dark:block",
		"aria-hidden": "true"
	})}${renderComponent($$result, "MoonIcon", moon_clear_line_default, {
		"class": "block h-6 w-6 dark:hidden",
		"aria-hidden": "true"
	})}</button><!-- Toggle menu --><button type="button" class="header-action" @click="open = !open" @mousedown="open &amp;&amp; $event.preventDefault()" aria-controls="website-menu" aria-expanded="false" :aria-expanded="open.toString()"><span class="sr-only">${labels.toggleMenu}</span>${renderComponent($$result, "EqualIcon", equal_line_default, {
		"x-show": "!open",
		"class": "h-8 w-8",
		"aria-hidden": "true"
	})}${renderComponent($$result, "CloseIcon", close_line_default, {
		"x-show": "open",
		"x-cloak": true,
		"class": "h-8 w-8",
		"aria-hidden": "true"
	})}</button></div></div><!-- Menu content --><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8" id="website-menu" x-show="open" x-cloak x-collapse x-collapse.duration.500ms><div class="grid grid-cols-1 gap-16 pt-6 pb-24 lg:grid-cols-2 lg:pt-12"><div class="bg-surface hidden items-center justify-center rounded-3xl px-6 py-8 lg:flex"><p class="text-muted max-w-sm text-xl leading-loose italic">${unescapeHTML(labels.description)}</p></div><!-- Navigation --><nav class="divide-subtle flex flex-col gap-1 divide-y">${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="group inline-flex py-6 text-3xl font-medium tracking-tight transition focus-visible:outline-hidden sm:py-8 sm:text-4xl"${addAttribute(Astro2.url.pathname === link.href ? "page" : void 0, "aria-current")}><div class="group-focus-outline flex flex-1 items-center justify-between rounded-3xl"><div class="flex items-center gap-6"><span class="text-xs">${link.ref}</span><span class="group-hover:underline">${link.name}</span></div>${renderComponent($$result, "ArrowRightUpIcon", arrow_right_up_line_default, {
		"class": "icon-primary sm:h-8 sm:w-8",
		"aria-hidden": "true"
	})}</div></a>`)}</nav></div></div></header>`;
}, "D:/blast-main/src/components/layout/Header.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$Layout = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Layout;
	const { description, title, noindex } = Astro2.props;
	const base = "/blast";
	const labels = getLabels(Astro2.currentLocale, "layoutHeader");
	const currentLocale = Astro2.currentLocale || "en";
	const relativePath = getRelativePath(Astro2.url.pathname, currentLocale);
	const ogImage = await getImage({ src: og_image_default });
	return renderTemplate`<html${addAttribute(currentLocale, "lang")}><head>${renderSlot($$result, $$slots["head"])}<script>
      ;(() => {
        const setTheme = () => {
          if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        };
        
        setTheme();
        document.addEventListener('astro:after-swap', setTheme);
      })();
    <\/script><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(`${base}/apple-touch-icon.png`, "href")}><link rel="icon" type="image/png" sizes="32x32"${addAttribute(`${base}/favicon-32x32.png`, "href")}><link rel="icon" type="image/png" sizes="16x16"${addAttribute(`${base}/favicon-16x16.png`, "href")}><link rel="manifest"${addAttribute(`${base}/site.webmanifest`, "href")} crossorigin="use-credentials"><link rel="sitemap"${addAttribute(`${base}/sitemap-index.xml`, "href")}><link rel="canonical"${addAttribute(new URL(Astro2.url.pathname, Astro2.site), "href")}><link rel="alternate" hreflang="x-default"${addAttribute(new URL(getRelativeLocaleUrl("en", relativePath), Astro2.site), "href")}>${locales.map((lang) => renderTemplate`<link rel="alternate"${addAttribute(lang, "hreflang")}${addAttribute(new URL(getRelativeLocaleUrl(lang, relativePath), Astro2.site), "href")}>`)}<meta name="generator"${addAttribute(Astro2.generator, "content")}>${noindex && renderTemplate`<meta name="robots" content="noindex">`}<meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:site_name" content="Blast"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:locale"${addAttribute(ogLocales[currentLocale] || currentLocale, "content")}><meta property="og:image"${addAttribute(new URL(ogImage.src, Astro2.site), "content")}><meta property="og:image:alt" content="Blast"><title>${title}</title>${renderComponent($$result, "Font", $$Font, {
		"cssVariable": "--font-inter",
		"preload": true
	})}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead($$result)}</head><body class="bg-white text-slate-900 antialiased transition-all duration-300 dark:bg-slate-950 dark:text-slate-50"><a href="#main-content" class="sr-only focus:not-sr-only focus:m-4 text-slate-900/90 dark:text-slate-100/90">${labels.skipToContent}</a>${renderComponent($$result, "Header", $$Header, {})}<main id="main-content" class="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "D:/blast-main/src/layouts/Layout.astro", void 0);
//#endregion
export { external_link_line_default as n, createSvgComponent as r, $$Layout as t };
