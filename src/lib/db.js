const SUPABASE_URL = import.meta.env.SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY || process.env.SUPABASE_KEY;
const REST_URL = `${SUPABASE_URL}/rest/v1`;

const headers = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation',
};

/**
 * Supabase REST API wrapper (tanpa perlu install package tambahan).
 * Menggunakan fetch() bawaan JavaScript.
 */
export const supabase = {
  from(table) {
    const baseUrl = `${REST_URL}/${table}`;
    
    return {
      // SELECT
      select(columns = '*') {
        const builder = {
          _columns: columns,
          _filters: [],
          _order: null,
          _single: false,

          eq(column, value) {
            this._filters.push(`${column}=eq.${value}`);
            return this;
          },
          order(column, { ascending = true } = {}) {
            this._order = `${column}.${ascending ? 'asc' : 'desc'}`;
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
              params.set('select', this._columns);
              for (const f of this._filters) {
                const [key, ...rest] = f.split('=');
                params.append(key, rest.join('='));
              }
              if (this._order) params.set('order', this._order);

              const res = await fetch(`${baseUrl}?${params.toString()}`, { headers });
              if (!res.ok) {
                const errBody = await res.json().catch(() => ({}));
                return { data: null, error: { message: errBody.message || res.statusText, status: res.status } };
              }
              let data = await res.json();
              if (this._single) {
                data = data.length > 0 ? data[0] : null;
                if (!data) return { data: null, error: { message: 'Row not found', status: 404 } };
              }
              return { data, error: null };
            } catch (err) {
              return { data: null, error: { message: err.message } };
            }
          },
        };
        return builder;
      },

      // INSERT
      async insert(rows) {
        try {
          const res = await fetch(baseUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(Array.isArray(rows) ? rows : [rows]),
          });
          if (!res.ok) {
            const errBody = await res.json().catch(() => ({}));
            return { data: null, error: { message: errBody.message || res.statusText, status: res.status } };
          }
          const data = await res.json();
          return { data, error: null };
        } catch (err) {
          return { data: null, error: { message: err.message } };
        }
      },

      // UPDATE
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
                const [key, ...rest] = f.split('=');
                params.append(key, rest.join('='));
              }
              const res = await fetch(`${baseUrl}?${params.toString()}`, {
                method: 'PATCH',
                headers,
                body: JSON.stringify(values),
              });
              if (!res.ok) {
                const errBody = await res.json().catch(() => ({}));
                resolve({ data: null, error: { message: errBody.message || res.statusText, status: res.status } });
                return;
              }
              const data = await res.json();
              resolve({ data, error: null });
            } catch (err) {
              resolve({ data: null, error: { message: err.message } });
            }
          },
        };
      },

      // DELETE
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
                const [key, ...rest] = f.split('=');
                params.append(key, rest.join('='));
              }
              const res = await fetch(`${baseUrl}?${params.toString()}`, {
                method: 'DELETE',
                headers,
              });
              if (!res.ok) {
                const errBody = await res.json().catch(() => ({}));
                resolve({ data: null, error: { message: errBody.message || res.statusText, status: res.status } });
                return;
              }
              resolve({ data: null, error: null });
            } catch (err) {
              resolve({ data: null, error: { message: err.message } });
            }
          },
        };
      },
    };
  },
};