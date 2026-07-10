//#region src/lib/db.js
var SUPABASE_URL = "https://ofmcgyftrqehucmjecuq.supabase.co";
var SUPABASE_KEY = "sb_publishable_veXOpd8BBVWnSaMNHzwqSg_IoyS1GYR";
var REST_URL = `${SUPABASE_URL}/rest/v1`;
var headers = {
	"apikey": SUPABASE_KEY,
	"Authorization": `Bearer ${SUPABASE_KEY}`,
	"Content-Type": "application/json",
	"Prefer": "return=representation"
};
var supabase = { from(table) {
	const baseUrl = `${REST_URL}/${table}`;
	return {
		select(columns = "*") {
			return {
				_columns: columns,
				_filters: [],
				_order: null,
				_single: false,
				eq(column, value) {
					this._filters.push(`${column}=eq.${value}`);
					return this;
				},
				order(column, { ascending = true } = {}) {
					this._order = `${column}.${ascending ? "asc" : "desc"}`;
					return this;
				},
				single() {
					this._single = true;
					return this._execute();
				},
				then(resolve, reject) {
					return this._execute().then(resolve, reject);
				},
				async _execute() {
					try {
						const params = new URLSearchParams();
						params.set("select", this._columns);
						for (const f of this._filters) {
							const [key, ...rest] = f.split("=");
							params.append(key, rest.join("="));
						}
						if (this._order) params.set("order", this._order);
						const res = await fetch(`${baseUrl}?${params.toString()}`, { headers });
						if (!res.ok) return {
							data: null,
							error: {
								message: (await res.json().catch(() => ({}))).message || res.statusText,
								status: res.status
							}
						};
						let data = await res.json();
						if (this._single) {
							data = data.length > 0 ? data[0] : null;
							if (!data) return {
								data: null,
								error: {
									message: "Row not found",
									status: 404
								}
							};
						}
						return {
							data,
							error: null
						};
					} catch (err) {
						return {
							data: null,
							error: { message: err.message }
						};
					}
				}
			};
		},
		async insert(rows) {
			try {
				const res = await fetch(baseUrl, {
					method: "POST",
					headers,
					body: JSON.stringify(Array.isArray(rows) ? rows : [rows])
				});
				if (!res.ok) return {
					data: null,
					error: {
						message: (await res.json().catch(() => ({}))).message || res.statusText,
						status: res.status
					}
				};
				return {
					data: await res.json(),
					error: null
				};
			} catch (err) {
				return {
					data: null,
					error: { message: err.message }
				};
			}
		},
		update(values) {
			const filters = [];
			return {
				eq(column, value) {
					filters.push(`${column}=eq.${value}`);
					return this;
				},
				async then(resolve, reject) {
					try {
						const params = new URLSearchParams();
						for (const f of filters) {
							const [key, ...rest] = f.split("=");
							params.append(key, rest.join("="));
						}
						const res = await fetch(`${baseUrl}?${params.toString()}`, {
							method: "PATCH",
							headers,
							body: JSON.stringify(values)
						});
						if (!res.ok) {
							resolve({
								data: null,
								error: {
									message: (await res.json().catch(() => ({}))).message || res.statusText,
									status: res.status
								}
							});
							return;
						}
						resolve({
							data: await res.json(),
							error: null
						});
					} catch (err) {
						resolve({
							data: null,
							error: { message: err.message }
						});
					}
				}
			};
		},
		delete() {
			const filters = [];
			return {
				eq(column, value) {
					filters.push(`${column}=eq.${value}`);
					return this;
				},
				async then(resolve, reject) {
					try {
						const params = new URLSearchParams();
						for (const f of filters) {
							const [key, ...rest] = f.split("=");
							params.append(key, rest.join("="));
						}
						const res = await fetch(`${baseUrl}?${params.toString()}`, {
							method: "DELETE",
							headers
						});
						if (!res.ok) {
							resolve({
								data: null,
								error: {
									message: (await res.json().catch(() => ({}))).message || res.statusText,
									status: res.status
								}
							});
							return;
						}
						resolve({
							data: null,
							error: null
						});
					} catch (err) {
						resolve({
							data: null,
							error: { message: err.message }
						});
					}
				}
			};
		}
	};
} };
//#endregion
export { supabase as t };
