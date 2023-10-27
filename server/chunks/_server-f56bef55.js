import { r as redirect } from './index-0087e825.js';

async function POST({ locals }) {
  locals.pb.authStore.clear();
  locals.user = null;
  throw redirect(303, "/login");
}

export { POST };
//# sourceMappingURL=_server-f56bef55.js.map
