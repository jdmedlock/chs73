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
  default: () => Updatecontact,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_635fbd41 = require("../../chunks/index-635fbd41.js");
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
        confirmed: params.url.searchParams.get("confirmed") || "",
        type: params.url.searchParams.get("type") || "",
        department: params.url.searchParams.get("department") || "",
        position: params.url.searchParams.get("position") || ""
      }
    }
  };
}
const Updatecontact = (0, import_index_635fbd41.c)(($$result, $$props, $$bindings, slots) => {
  let { params } = $$props;
  console.log("updatecontact.svelte - params: ", params);
  let { back, firstName, lastName, name, cloudinaryId, deceased, confirmed, type, department, position } = params;
  let posterName = "";
  let posterEmail = "";
  let contactEmail = "";
  let isContactDeceased = deceased === "TRUE" ? true : false;
  let contactStreet = "";
  let contactCity = "";
  let contactState = "";
  let contactZipcode = "";
  let contactPhone = "";
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  return `<section class="${"flex flex-wrap place-content-center w-full pt-12 pb-0"}"><div class="${"relative block bg-gray-900 pt-24 pb-20 w-full"}"><div class="${"container w-full justify-center m-auto px-4"}"><div class="${"flex flex-wrap justify-center"}"><div class="${"lg:w-6/12 px-4"}"><div class="${"relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-gray-300"}"><div class="${"flex-auto m-auto p-5 lg:p-10"}"><h4 class="${"text-2xl font-semibold"}">Do you know how to contact ${(0, import_index_635fbd41.e)(name)}?</h4>
              <p class="${"leading-relaxed mt-1 mb-4 text-gray-600"}">Complete this form if you know more about this individual to
                help us keep everyone updated about our upcoming reunion!
              </p>

              ${``}

              <form method="${"post"}" enctype="${"application/json"}"><div class="${"relative w-full mt-8"}"><h2 class="${"text-white bg-gray-900 text-center"}">About You
                  </h2>
                  <div class="${"relative w-full mb-3 mt-1"}"><label class="${"block uppercase text-gray-700 text-xs font-bold mb-2"}" for="${"full-name"}">Full Name (required)
                    </label>
                    <input name="${"name"}" type="${"text"}" required aria-required="${"true"}" class="${"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}" placeholder="${"First Last"}" style="${"transition: all 0.15s ease 0s;"}"${(0, import_index_635fbd41.b)("value", posterName, 0)}></div>
                  ${``}

                  <div class="${"relative w-full mb-3"}"><label class="${"block uppercase text-gray-700 text-xs font-bold mb-2"}" for="${"email"}">Email (required)
                    </label>
                    <input name="${"from"}" type="${"text"}" required aria-required="${"true"}" class="${"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}" placeholder="${"jdoe@domain.com"}" style="${"transition: all 0.15s ease 0s;"}"${(0, import_index_635fbd41.b)("value", posterEmail, 0)}></div>
                  ${``}</div>

                <div class="${"relative w-full mb-3 mt-8"}"><h2 class="${"text-white bg-gray-900 text-center"}">About ${(0, import_index_635fbd41.e)(name)}</h2>

                  <div class="${"relative w-full mt-1 mb-3"}"><label class="${"block uppercase text-gray-700 text-xs font-bold mt-2 mb-2"}" for="${"email"}">Email
                    </label>
                    <input name="${"from"}" type="${"text"}" class="${"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}" placeholder="${"jdoe@domain.com"}" style="${"transition: all 0.15s ease 0s;"}"${(0, import_index_635fbd41.b)("value", contactEmail, 0)}></div>
                  ${``}

                  <div class="${"relative w-full mb-3"}"><label class="${"block uppercase text-gray-700 text-xs font-bold mb-3"}" for="${"street"}">Street 
                    </label>
                    <input name="${"from"}" type="${"text"}" class="${"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}" placeholder="${"1111 Any St."}" style="${"transition: all 0.15s ease 0s;"}"${(0, import_index_635fbd41.b)("value", contactStreet, 0)}></div>

                  <div class="${"flex flex-wrap relative w-full mb-1"}"><span class="${"relaive w-8/12 mb-3"}"><label class="${"block uppercase text-gray-700 text-xs font-bold mb-2"}" for="${"city"}">City 
                      </label>
                      <input name="${"from"}" type="${"text"}" class="${"w-full border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring"}" placeholder="${"Anytown"}" style="${"transition: all 0.15s ease 0s;"}"${(0, import_index_635fbd41.b)("value", contactCity, 0)}></span>
                    <span class="${"relative w-14 ml-4 mb-3"}"><label class="${"block uppercase text-gray-700 text-xs font-bold mb-2"}" for="${"state"}">State 
                      </label>
                      <input name="${"from"}" type="${"text"}" class="${"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}" placeholder="${"XX"}" style="${"transition: all 0.15s ease 0s;"}"${(0, import_index_635fbd41.b)("value", contactState, 0)}></span>
                    <span class="${"relative w-20 ml-0 md:ml-4 mb-3"}"><label class="${"block uppercase text-gray-700 text-xs font-bold mb-2"}" for="${"phone"}">Zipcode
                      </label>
                      <input name="${"from"}" type="${"text"}" class="${"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}" placeholder="${"00000"}" style="${"transition: all 0.15s ease 0s;"}"${(0, import_index_635fbd41.b)("value", contactZipcode, 0)}></span></div>
                  ${``}
                  ${``}

                  <div class="${"flex flex-wrap relative w-full mb-1"}"><span class="${"relative w-36 mb-3"}"><label class="${"block uppercase text-gray-700 text-xs font-bold mb-2"}" for="${"phone"}">Phone
                      </label>
                      <input name="${"from"}" type="${"tel"}" class="${"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}" placeholder="${"(999) 999-9999"}" style="${"transition: all 0.15s ease 0s;"}"${(0, import_index_635fbd41.b)("value", contactPhone, 0)}></span>
                    <span class="${"flex flex-col w-20 ml-6"}"><label for="${"deceased"}">Deceased
                      </label>
                      <input class="${"self-center w-full h-6 mt-2"}" name="${"deceased"}" type="${"checkbox"}"${(0, import_index_635fbd41.b)("checked", isContactDeceased, 1)}></span></div>        

                  <div class="${"relative w-full mb-3"}"><label class="${"block uppercase text-gray-700 text-xs font-bold mb-2"}" for="${"message"}">Info about this classmate
                    </label>
                    <textarea name="${"message"}" rows="${"4"}" cols="${"80"}" aria-required="${"false"}" class="${"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}" placeholder="${"Type a message..."}">${""}</textarea></div></div>
          
                <div class="${"text-center mt-6"}"><button type="${"submit"}" class="${"bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-300 ease-in-out hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110"}">Submit Info
                  </button></div></form></div></div></div></div></div></div>

  <div class="${"bottom-auto top-0 left-0 right-0 w-full relative pointer-events-none overflow-hidden -mt-20"}"><svg class="${"absolute bottom-0 overflow-hidden"}" xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"none"}" version="${"1.1"}" viewBox="${"0 0 2560 100"}" x="${"0"}" y="${"0"}"><polygon class="${"text-white fill-current"}" points="${"2560 0 2560 100 0 100"}"></polygon></svg></div></section>

<section class="${"flex flex-wrap place-content-center w-full h-48 ml-0 md:ml-8 -mt-8"}"><div class="${"flex place-content-center text-center w-full -mt-2"}"><button class="${"bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-300 ease-in-out hover:text-gray-700 hover:font-semibold transform hover:-translate-y-0 hover:scale-110"}">Back
    </button></div></section>`;
});
