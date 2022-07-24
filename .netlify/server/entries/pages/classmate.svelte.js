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
  default: () => Classmate,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_635fbd41 = require("../../chunks/index-635fbd41.js");
var import_getCloudinaryPhoto_398b4ab6 = require("../../chunks/getCloudinaryPhoto-398b4ab6.js");
var import_url_gen = require("@cloudinary/url-gen");
var import_resize = require("@cloudinary/url-gen/actions/resize");
var import_roundCorners = require("@cloudinary/url-gen/actions/roundCorners");
var import_gravity = require("@cloudinary/url-gen/qualifiers/gravity");
var import_focusOn = require("@cloudinary/url-gen/qualifiers/focusOn");
async function load(params) {
  return {
    props: {
      params: {
        back: params.url.searchParams.get("back") || "",
        firstName: params.url.searchParams.get("firstName"),
        lastName: params.url.searchParams.get("lastName") || "",
        name: params.url.searchParams.get("name") || "",
        cloudinaryId: params.url.searchParams.get("photoId") || "",
        deceased: params.url.searchParams.get("deceased") || "",
        confirmed: params.url.searchParams.get("confirmed") || ""
      }
    }
  };
}
const Classmate = (0, import_index_635fbd41.c)(($$result, $$props, $$bindings, slots) => {
  let { params } = $$props;
  let { back, firstName, lastName, name, cloudinaryId, deceased, confirmed } = params;
  let backPage = back === "classmate" ? "classmates" : back;
  const classmateImage = (0, import_getCloudinaryPhoto_398b4ab6.g)(cloudinaryId);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  return `<section class="${"flex flex-wrap place-content-center w-full"}"><div class="${"flex flex-wrap place-content-center ml-0 md:ml-8 mt-20"}">${cloudinaryId !== "" ? `<img class="${"scale-75 md:transform-none"}"${(0, import_index_635fbd41.b)("src", classmateImage, 0)} alt="${"Classmate"}">` : ``}
    <div class="${"flex flex-col w-full text-3xl md:text-6xl font-semibold"}"><p class="${"text-center font-semibold w-full mt-2 text-2xl md:text-4xl"}">${(0, import_index_635fbd41.e)(name)}</p>
      ${deceased === "TRUE" ? `<p class="${"text-center w-full text-xl mt-0 md:text-2xl font-normal"}">(Deceased)</p>` : ``}</div></div>
  <div class="${"flex flex-wrap place-content-center w-full ml-0 md:ml-8 mt-1 md:mt-2"}"><div class="${"flex place-content-center text-center w-full"}"><a href="${"/" + (0, import_index_635fbd41.e)(backPage) + "/#" + (0, import_index_635fbd41.e)(lastName.toLowerCase().replace(/\s+/g, ""))}" class="${"flex bg-orange-500 text-white active:bg-gray-700 font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none h-12 m-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base transition duration-300 ease-in-out hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110"}"><div class="${"flex place-self-center"}">Back
        </div></a>
      ${confirmed === "FALSE" ? `<div class="${"flex flex-col ml-2"}"><div class="${"bg-orange-500 text-white active:bg-gray-700 font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none h-12 m-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base transition duration-300 ease-in-out hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110"}"><div class="${"flex flex-wrap place-self-center w-full m-0"}"><img src="${"chs_tiger_36.png"}" alt="${"CHS Tiger"}">
              <div class="${"ml-2 self-center"}">Tiger Hunt
              </div></div></div></div>` : ``}</div>
    ${confirmed === "FALSE" ? `<div class="${"text-sm md:text-lg mt-4 ml-3 justify-self-end"}">Do you know how to contact ${(0, import_index_635fbd41.e)(name)}? Click on Tiger Hunt!
      </div>` : ``}</div></section>`;
});
