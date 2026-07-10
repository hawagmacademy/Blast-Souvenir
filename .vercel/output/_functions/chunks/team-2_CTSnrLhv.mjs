//#region src/assets/team-2.webp
var team_2_default = new Proxy({
	"src": "/blast/_astro/team-2.CFEjf97l.webp",
	"width": 320,
	"height": 320,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/blast-main/src/assets/team-2.webp";
	return target[name];
} });
//#endregion
export { team_2_default as default };
