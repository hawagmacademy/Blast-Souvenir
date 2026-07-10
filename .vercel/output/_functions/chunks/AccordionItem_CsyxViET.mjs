import { C as createAstro, _ as addAttribute, a as renderComponent, c as renderSlot, d as renderTemplate, h as maybeRenderHead, w as createComponent } from "./server_DqMh0nkK.mjs";
import "./compiler_CqZWJY3r.mjs";
import { r as createSvgComponent } from "./Layout_zUB5F-3O.mjs";
//#region src/assets/icons/arrow-down-s-line.svg
var arrow_down_s_line_default = createSvgComponent({
	"meta": {
		"src": "/blast/_astro/arrow-down-s-line.C4R9Le1k.svg",
		"width": 24,
		"height": 24,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 24 24",
		"fill": "currentColor"
	},
	"children": "<path d=\"M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z\"></path>",
	"styles": []
});
//#endregion
//#region src/components/common/AccordionItem.astro
createAstro("https://blast-souvenir-tztr.vercel.app");
var $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AccordionItem;
	const { id, index } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="rounded-3xl px-4 transition"${addAttribute(`accordionItem(${index})`, "x-data")} x-bind:class="{ 'bg-surface': isOpen() }"><dt class="border-b text-lg transition" x-bind:class="{ 'border-transparent': isOpen() || isNextOpen(), 'border-subtle': !(isOpen() || isNextOpen()) }"><button type="button" class="group block w-full py-6 text-left transition focus-visible:outline-hidden"${addAttribute(id, "aria-controls")} x-on:click="toggle(id)" x-bind:aria-expanded="isOpen().toString()"><div class="group-focus-outline flex items-center justify-between rounded-3xl">${renderSlot($$result, $$slots["header"])}<span class="ml-6 flex h-7 items-center">${renderComponent($$result, "ArrowDownIcon", arrow_down_s_line_default, {
		"class": "icon-primary rotate-0 transform transition duration-200 ease-in-out",
		"x-bind:class": "{ '-rotate-180': isOpen(), 'rotate-0': !isOpen() }",
		"aria-hidden": "true"
	})}</span></div></button></dt><dd${addAttribute(id, "id")} x-show="isOpen()" x-cloak x-collapse>${renderSlot($$result, $$slots["body"])}</dd></div>`;
}, "D:/blast-main/src/components/common/AccordionItem.astro", void 0);
//#endregion
export { $$AccordionItem as t };
