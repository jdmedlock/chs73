var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_635fbd41 = require("../../chunks/index-635fbd41.js");
var app = "";
const getStores = () => {
  const stores = (0, import_index_635fbd41.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const PageScrollBar = (0, import_index_635fbd41.c)(($$result, $$props, $$bindings, slots) => {
  return `

<div class="${"w-full h-1 bg-gray-900"}"><div class="${"w-full h-1 bg-orange-400"}" id="${"myBar"}"></div></div>`;
});
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-edh60k{padding-right:0.25rem;font-weight:300;scroll-behavior:smooth\n}[aria-current].svelte-edh60k{position:relative;display:inline-block\n}[aria-current].svelte-edh60k::after{position:absolute;bottom:-0.25rem;display:block;height:0.125rem;width:100%;--tw-bg-opacity:1;background-color:rgb(255 64 0 / var(--tw-bg-opacity));content:''\n}a.svelte-edh60k{margin-right:1.5rem\n}",
  map: null
};
const Nav = (0, import_index_635fbd41.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_635fbd41.a)(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="${"fixed flex flex-col w-full z-10 top-0 bg-gray-900 text-white text-xl svelte-edh60k"}"><button id="${"menuBtn"}" class="${"block focus:outline-none"}" type="${"button"}" aria-label="${"Menu"}"><img class="${"md:hidden m-2 w-12 h-10"}" src="${"chs_tiger.png"}" alt="${"CHS Tiger"}"></button>
	<div id="${"menu"}" class="${"w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden m-3"}"><a${(0, import_index_635fbd41.b)("aria-current", $page.url.pathname.slice(1) === void 0 ? "page" : void 0, 0)} href="${"."}" class="${"svelte-edh60k"}">home</a>
		
		<a rel="${"prefetch"}"${(0, import_index_635fbd41.b)("aria-current", $page.url.pathname.slice(1) === "events" ? "page" : void 0, 0)} href="${"events"}" class="${"svelte-edh60k"}">events</a>
		<a${(0, import_index_635fbd41.b)("aria-current", $page.url.pathname.slice(1) === "classmates" ? "page" : void 0, 0)} href="${"classmates"}" class="${"svelte-edh60k"}">classmates</a>
		<a${(0, import_index_635fbd41.b)("aria-current", $page.url.pathname.slice(1) === "tigerhunt" ? "page" : void 0, 0)} href="${"tigerhunt"}" class="${"svelte-edh60k"}">tiger hunt</a>
		<a${(0, import_index_635fbd41.b)("aria-current", $page.url.pathname.slice(1) === "memoriam" ? "page" : void 0, 0)} href="${"memoriam"}" class="${"svelte-edh60k"}">memoriam</a>
		<a${(0, import_index_635fbd41.b)("aria-current", $page.url.pathname.slice(1) === "faculty" ? "page" : void 0, 0)} href="${"faculty"}" class="${"svelte-edh60k"}">faculty</a>
		<a href="${"/#contact"}" class="${"svelte-edh60k"}">contact</a></div>

	<div class="${"w-full h-2 m-0"}">${(0, import_index_635fbd41.v)(PageScrollBar, "PageScrollBar").$$render($$result, { class: "w-full h-4" }, {}, {})}</div></nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".flex-wrapper.svelte-4vzk26{display:flex;min-height:100vh;flex-direction:column;justify-content:space-between}",
  map: null
};
const _layout = (0, import_index_635fbd41.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_635fbd41.v)(Nav, "Nav").$$render($$result, {}, {}, {})}

<div class="${"flex-wrapper svelte-4vzk26"}"><main>${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"relative bg-gray-300 pt-8 pb-6"}"><div class="${"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"}" style="${"height: 80px;"}"><svg class="${"absolute bottom-0 overflow-hidden"}" xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"none"}" version="${"1.1"}" viewBox="${"0 0 2560 100"}" x="${"0"}" y="${"0"}"><polygon class="${"text-gray-300 fill-current"}" points="${"2560 0 2560 100 0 100"}"></polygon></svg></div>
		<div class="${"container mx-auto px-4"}"><div class="${"flex flex-wrap items-center md:justify-between justify-center"}"><div class="${"w-full md:w-4/12 px-4 mx-auto text-center"}"><div class="${"text-sm text-gray-600 font-semibold py-1"}">Copyright \xA9 2021, 2022 CHS &#39;73 Organizing Committee
					</div></div></div></div></footer></div>`;
});
