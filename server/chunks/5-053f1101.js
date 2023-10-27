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
      await locals.pb.collection("api_users").create(data);
    } catch (e) {
      console.error(e);
      throw e;
    }
    throw redirect(303, "/login");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-b74c4606.js')).default;
const server_id = "src/routes/register/+page.server.js";
const imports = ["_app/immutable/nodes/5.04cbd49f.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c8bb605f.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-053f1101.js.map
