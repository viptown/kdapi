import { r as redirect, f as fail } from './index-0087e825.js';

async function load({ locals }) {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/");
  }
  const supplier_id = locals.user.supplier_id;
  const query_string = `supplier_id = "${supplier_id}"`;
  const records = await locals.pb.collection("suppliers_order").getList(1, 50, {
    filter: query_string,
    sort: "-created"
  });
  return {
    orders: records.items
  };
}
const actions = {
  default: async ({ locals, request }) => {
    const formData = await request.formData();
    const startDate = formData.get("start");
    const endDate = formData.get("end");
    const selMode = formData.get("selMode");
    const keyword = formData.get("keyword");
    const supplier_id = locals.user.supplier_id;
    let query_string = "";
    if (startDate)
      query_string += `indate >= "${startDate} 00:00:01"`;
    if (endDate)
      query_string += ` && indate <= "${endDate} 12:59:59"`;
    if (selMode && keyword) {
      if (selMode == "KD") {
        if (query_string)
          query_string += ` && kd_bl = "${keyword}"`;
        else
          query_string += ` kd_bl = "${keyword}"`;
      }
      if (selMode == "SP") {
        if (query_string)
          query_string += ` && sup_bl = "${keyword}"`;
        else
          query_string += ` sup_bl = "${keyword}"`;
      }
      if (selMode == "CON") {
        if (query_string)
          query_string += ` && consignee = "${keyword}"`;
        else
          query_string += ` consignee = "${keyword}"`;
      }
    }
    if (!query_string) {
      return fail(400, { status: "검색 조건을 입력 하시면 정확한 데이터 조회 할 수 있습니다." });
    }
    query_string += ` && supplier_id = "${supplier_id}"`;
    const resultList = await locals.pb.collection("suppliers_order").getList(1, 100, {
      filter: query_string
    });
    return {
      orders: resultList
    };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-06a2552b.js')).default;
const server_id = "src/routes/order/+page.server.js";
const imports = ["_app/immutable/nodes/4.aa27198b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c8bb605f.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-b92114fd.js.map
