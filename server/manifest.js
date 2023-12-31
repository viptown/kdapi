const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.fe0251bf.js","app":"_app/immutable/entry/app.c8070dbe.js","imports":["_app/immutable/entry/start.fe0251bf.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.eea5b434.js","_app/immutable/entry/app.c8070dbe.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c8bb605f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-ebf4654c.js')),
			__memo(() => import('./chunks/1-47a85b61.js')),
			__memo(() => import('./chunks/2-6bcbfc9d.js')),
			__memo(() => import('./chunks/3-78e1ae60.js')),
			__memo(() => import('./chunks/4-2364ffec.js')),
			__memo(() => import('./chunks/5-053f1101.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f56bef55.js'))
			},
			{
				id: "/order",
				pattern: /^\/order\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
