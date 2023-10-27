import PocketBase from 'pocketbase';

const PUBLIC_POCKETBASE_URL = "http://www.haihuozhan.com:8090";
const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
async function handle({ event, resolve }) {
  event.locals.pb = pb;
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  try {
    event.locals.pb.authStore.isValid && await event.locals.pb.collection("api_users").authRefresh();
  } catch (_) {
    event.locals.pb.authStore.clear();
  }
  event.locals.user = structuredClone(pb.authStore.model);
  const response = await resolve(event);
  response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie());
  return response;
}

export { handle };
//# sourceMappingURL=hooks.server-e7e018c2.js.map
