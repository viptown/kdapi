import { r as redirect } from './index-0087e825.js';

async function load({ locals }) {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, "/");
  }
}
const actions = {
  default: async ({ locals, request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await locals.pb.collection("api_users").authWithPassword(data.email, data.password);
    } catch (e) {
      console.error(e);
      throw e;
    }
    throw redirect(303, "/");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-931fbf09.js')).default;
const server_id = "src/routes/login/+page.server.js";
const imports = ["_app/immutable/nodes/3.52a83e0a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c8bb605f.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-78e1ae60.js.map
