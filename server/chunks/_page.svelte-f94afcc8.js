import { c as create_ssr_component, e as escape } from './ssr-a320d867.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Welcome ${escape(data.profile?.name || "")}</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f94afcc8.js.map
