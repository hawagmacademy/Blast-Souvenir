//#region src/assets/team-1.webp
var team_1_default = new Proxy({
	"src": "/blast/_astro/team-1.BWW_VNON.webp",
	"width": 320,
	"height": 320,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/blast-main/src/assets/team-1.webp";
	return target[name];
} });
//#endregion
export { team_1_default as default };
