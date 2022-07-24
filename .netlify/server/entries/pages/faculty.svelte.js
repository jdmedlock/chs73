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
  default: () => Faculty
});
module.exports = __toCommonJS(stdin_exports);
var import_index_635fbd41 = require("../../chunks/index-635fbd41.js");
var import_faculty_d3d808b8 = require("../../chunks/faculty-d3d808b8.js");
var import_LetterIndex_81c1acab = require("../../chunks/LetterIndex-81c1acab.js");
var import_createPersonGroups_9654fc45 = require("../../chunks/createPersonGroups-9654fc45.js");
var import_index_b4c211e1 = require("../../chunks/index-b4c211e1.js");
const Faculty = (0, import_index_635fbd41.c)(($$result, $$props, $$bindings, slots) => {
  let $facultyStore, $$unsubscribe_facultyStore;
  $$unsubscribe_facultyStore = (0, import_index_635fbd41.a)(import_faculty_d3d808b8.f, (value) => $facultyStore = value);
  let letterIndex;
  let facultyColumn1;
  let facultyColumn2;
  if ($facultyStore.length > 0) {
    const facultyColumns = (0, import_createPersonGroups_9654fc45.c)($facultyStore);
    facultyColumn1 = facultyColumns[0];
    facultyColumn2 = facultyColumns[1];
    letterIndex = (0, import_LetterIndex_81c1acab.c)(facultyColumn1.concat(facultyColumn2));
  } else {
    console.log(`Error retrieving faculty`);
    throw new Error(`No faculty`);
  }
  $$unsubscribe_facultyStore();
  return `<section class="${"relative py-12 lg:py-20"}"><div class="${"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"}" style="${"height: 80px;"}"><svg class="${"absolute bottom-0 overflow-hidden"}" xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"none"}" version="${"1.1"}" viewBox="${"0 0 2560 100"}" x="${"0"}" y="${"0"}"><polygon class="${"text-white fill-current"}" points="${"2560 0 2560 100 0 100"}"></polygon></svg></div>

  <div class="${"container flex flex-wrap justify-center w-full lg:7/12 mx-auto lg:py-none px-4"}"><div class="${"flex w-full justify-center"}"><h1 class="${"my-12 text-3xl md:text-5xl font-semibold text-center"}">Faculty &amp; Staff of 1973</h1></div>

    <div class="${"flex justify-center w-full"}"><div class="${"flex max-w-full mb-4 content-start"}"><div class="${"flex flex-wrap w-full m-0 p-0 justify-center"}"><picture><img alt="${"Faculty"}" class="${"max-w-screen-sm lg:max-w-full h-20 md:h-28 lg:h-96 shadow-xl-orange lg:shadow-2xl-orange ml-0 md:ml-0 lg:ml-0 mb-12 md:mb-8 lg:mb-none transform scale-200 md:scale-150 lg:scale-100"}" src="${"chs_faculty_finley.jpeg"}"></picture></div></div></div>

    <div class="${"md:flex-row justify-center w-full lg:w-1/2 ml-1 p-4 border-gray-300 border-2 shadow-2xl"}"><div class="${"flex flex-wrap place-content-center w-full"}"><p><em>Click</em> on a name to see more.</p></div>
      
      ${(0, import_index_635fbd41.v)(import_LetterIndex_81c1acab.L, "LetterIndex").$$render($$result, { pageName: "faculty", letterIndex }, {}, {})}

      <div class="${"flex w-full justify-center"}"><ul class="${"text-lg text-gray-600 leading-tight"}">${(0, import_index_635fbd41.d)(facultyColumn1, (facultyMember) => {
    return `<li class="${"mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110"}"><a${(0, import_index_635fbd41.b)("id", facultyMember.lastName.toLowerCase().replace(/\s+/g, ""), 0)} href="${"facultymember?back=faculty&firstName=" + (0, import_index_635fbd41.e)(facultyMember.firstName) + "&lastName=" + (0, import_index_635fbd41.e)(facultyMember.lastName) + "&name=" + (0, import_index_635fbd41.e)(facultyMember.name) + "&photoId=" + (0, import_index_635fbd41.e)(facultyMember.cloudinaryId) + "&department=" + (0, import_index_635fbd41.e)(facultyMember.department) + "&position=" + (0, import_index_635fbd41.e)(facultyMember.position) + "&deceased=" + (0, import_index_635fbd41.e)(facultyMember.deceased) + "&confirmed=" + (0, import_index_635fbd41.e)(facultyMember.confirmed)}">${(0, import_index_635fbd41.e)(facultyMember.firstName)} ${(0, import_index_635fbd41.e)(facultyMember.lastName)}</a>
            </li>`;
  })}</ul>
        <ul class="${"ml-0 md:ml-6 text-lg text-gray-600 leading-tight"}">${(0, import_index_635fbd41.d)(facultyColumn2, (facultyMember) => {
    return `<li class="${"mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110"}"><a${(0, import_index_635fbd41.b)("id", facultyMember.lastName.toLowerCase().replace(/\s+/g, ""), 0)} href="${"facultymember?back=faculty&firstName=" + (0, import_index_635fbd41.e)(facultyMember.firstName) + "&lastName=" + (0, import_index_635fbd41.e)(facultyMember.lastName) + "&name=" + (0, import_index_635fbd41.e)(facultyMember.name) + "&photoId=" + (0, import_index_635fbd41.e)(facultyMember.cloudinaryId) + "&department=" + (0, import_index_635fbd41.e)(facultyMember.department) + "&position=" + (0, import_index_635fbd41.e)(facultyMember.position) + "&deceased=" + (0, import_index_635fbd41.e)(facultyMember.deceased) + "&confirmed=" + (0, import_index_635fbd41.e)(facultyMember.confirmed)}">${(0, import_index_635fbd41.e)(facultyMember.firstName)} ${(0, import_index_635fbd41.e)(facultyMember.lastName)}</a>
            </li>`;
  })}</ul>

        ${(0, import_index_635fbd41.v)(import_LetterIndex_81c1acab.B, "BackToTop").$$render($$result, { back: "faculty" }, {}, {})}</div></div></div></section>`;
});
