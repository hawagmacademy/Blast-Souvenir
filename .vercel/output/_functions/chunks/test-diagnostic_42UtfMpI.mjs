import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as renderTemplate, g as renderHead, w as createComponent } from "./server_DqMh0nkK.mjs";
import "./compiler_CqZWJY3r.mjs";
//#region src/pages/test-diagnostic.astro
var test_diagnostic_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TestDiagnostic,
	file: () => $$file,
	url: () => $$url
});
var $$TestDiagnostic = createComponent(async ($$result, $$props, $$slots) => {
	const SUPABASE_URL = "https://ofmcgyftrqehucmjecuq.supabase.co";
	const SUPABASE_KEY = "sb_publishable_veXOpd8BBVWnSaMNHzwqSg_IoyS1GYR";
	const REST_URL = `${SUPABASE_URL}/rest/v1`;
	let envCheck = {
		urlFound: true,
		urlValue: SUPABASE_URL,
		keyFound: true,
		keyLength: 46,
		keyPrefix: SUPABASE_KEY.substring(0, 10) || "N/A"
	};
	let rawResponse = null;
	let rawError = null;
	try {
		const res = await fetch(`${REST_URL}/souvenirs?select=*`, { headers: {
			"apikey": SUPABASE_KEY,
			"Authorization": `Bearer ${SUPABASE_KEY}`
		} });
		rawResponse = {
			status: res.status,
			statusText: res.statusText,
			headers: Object.fromEntries(res.headers.entries()),
			body: await res.text()
		};
	} catch (e) {
		rawError = {
			message: e.message,
			stack: e.stack
		};
	}
	let insertResponse = null;
	let insertError = null;
	try {
		const res = await fetch(`${REST_URL}/souvenirs`, {
			method: "POST",
			headers: {
				"apikey": SUPABASE_KEY,
				"Authorization": `Bearer ${SUPABASE_KEY}`,
				"Content-Type": "application/json",
				"Prefer": "return=representation"
			},
			body: JSON.stringify([{
				foto: "https://placehold.co/100",
				nama: "Diagnostic Test",
				harga: 1e3,
				min_order: 1
			}])
		});
		insertResponse = {
			status: res.status,
			statusText: res.statusText,
			body: await res.text()
		};
	} catch (e) {
		insertError = {
			message: e.message,
			stack: e.stack
		};
	}
	return renderTemplate`<html><head><title>Full Diagnostic</title>${renderHead($$result)}</head><body style="font-family: monospace; padding: 20px; background: #0f172a; color: #f8fafc; font-size: 13px;"><h1 style="color: #38bdf8;">Supabase Full Diagnostic</h1><h2 style="color: #fbbf24;">1. Environment Variables</h2><pre style="background: #1e293b; padding: 15px; border-radius: 8px; overflow: auto; border: 1px solid #334155;">
${JSON.stringify(envCheck, null, 2)}
  </pre><h2 style="color: #fbbf24;">2. SELECT Test (Raw Fetch)</h2>${rawError ? renderTemplate`<pre style="background: #7f1d1d; padding: 15px; border-radius: 8px; overflow: auto;">
ERROR: ${JSON.stringify(rawError, null, 2)}
    </pre>` : renderTemplate`<pre style="background: #1e293b; padding: 15px; border-radius: 8px; overflow: auto; border: 1px solid #334155;">
Status: ${rawResponse?.status} ${rawResponse?.statusText}
Body: ${rawResponse?.body}
    </pre>`}<h2 style="color: #fbbf24;">3. INSERT Test (Raw Fetch)</h2>${insertError ? renderTemplate`<pre style="background: #7f1d1d; padding: 15px; border-radius: 8px; overflow: auto;">
ERROR: ${JSON.stringify(insertError, null, 2)}
    </pre>` : renderTemplate`<pre style="background: #1e293b; padding: 15px; border-radius: 8px; overflow: auto; border: 1px solid #334155;">
Status: ${insertResponse?.status} ${insertResponse?.statusText}
Body: ${insertResponse?.body}
    </pre>`}</body></html>`;
}, "D:/blast-main/src/pages/test-diagnostic.astro", void 0);
var $$file = "D:/blast-main/src/pages/test-diagnostic.astro";
var $$url = "/blast/test-diagnostic";
//#endregion
//#region \0virtual:astro:page:src/pages/test-diagnostic@_@astro
var page = () => test_diagnostic_exports;
//#endregion
export { page };
