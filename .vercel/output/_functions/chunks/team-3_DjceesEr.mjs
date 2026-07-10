//#region src/assets/team-3.webp
var team_3_default = new Proxy({
	"src": "/blast/_astro/team-3.Dlznac6Y.webp",
	"width": 320,
	"height": 320,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/blast-main/src/assets/team-3.webp";
	return target[name];
} });
//#endregion
export { team_3_default as default };
