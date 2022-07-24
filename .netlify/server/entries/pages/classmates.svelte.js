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
  default: () => Classmates
});
module.exports = __toCommonJS(stdin_exports);
var import_index_635fbd41 = require("../../chunks/index-635fbd41.js");
var import_classmates_c469e2ba = require("../../chunks/classmates-c469e2ba.js");
var import_LetterIndex_81c1acab = require("../../chunks/LetterIndex-81c1acab.js");
var import_createPersonGroups_9654fc45 = require("../../chunks/createPersonGroups-9654fc45.js");
var import_index_b4c211e1 = require("../../chunks/index-b4c211e1.js");
const Classmates = (0, import_index_635fbd41.c)(($$result, $$props, $$bindings, slots) => {
  let $classmatesStore, $$unsubscribe_classmatesStore;
  $$unsubscribe_classmatesStore = (0, import_index_635fbd41.a)(import_classmates_c469e2ba.c, (value) => $classmatesStore = value);
  let letterIndex;
  let classmateColumn1;
  let classmateColumn2;
  if ($classmatesStore.length > 0) {
    const classmateColumns = (0, import_createPersonGroups_9654fc45.c)($classmatesStore);
    classmateColumn1 = classmateColumns[0];
    classmateColumn2 = classmateColumns[1];
    letterIndex = (0, import_LetterIndex_81c1acab.c)(classmateColumn1.concat(classmateColumn2));
  } else {
    console.log(`Error retrieving classmates`);
    throw new Error(`No classmates`);
  }
  $$unsubscribe_classmatesStore();
  return `<section class="${"relative py-12 lg:py-20"}"><div class="${"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"}" style="${"height: 80px;"}"><svg class="${"absolute bottom-0 overflow-hidden"}" xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"none"}" version="${"1.1"}" viewBox="${"0 0 2560 100"}" x="${"0"}" y="${"0"}"><polygon class="${"text-white fill-current"}" points="${"2560 0 2560 100 0 100"}"></polygon></svg></div>

  <div class="${"container flex flex-wrap justify-center w-full lg:7/12 mx-auto lg:py-none px-4"}"><div class="${"flex w-full justify-center"}"><h1 class="${"my-12 text-3xl md:text-5xl font-semibold text-center"}">Class of 1973
      </h1></div>

    <div class="${"flex justify-center w-full"}"><div class="${"flex max-w-full mb-4 content-start"}"><div class="${"flex flex-wrap w-full m-0 p-0 justify-center"}"><img alt="${"Homecoming"}" class="${"max-w-screen-sm lg:max-w-full h-20 md:h-28 lg:h-96 shadow-2xl ml-0 md:ml-0 lg:ml-0 mb-8 lg:mb-none transform scale-200 md:scale-150 lg:scale-100 border-0 shadow-xl-orange lg:shadow-2xl-orange"}" src="${"chs_homecoming_float.jpeg"}"></div></div></div>

    <div class="${"flex flex-col w-full mt-4 md:mt-0 mb-2 text-xl md:text-xl text-gray-500"}"><div class="${"flex flex-col flex-wrap w-3/4 justify-center m-auto"}"><div><div class="${"text-xl md:text-3xl font-bold md:font-extrabold underline italic text-center"}">3 Valuable Life Lessons Learned from a 50 Year Class Reunion
          </div>
          <div class="${"text-xl md:text-2xl text-center mb-4"}"><div>by Ken Hill - Motivational Speaker</div>
            
            (Click to display/hide)
          </div></div>

        ${``}</div></div>

    <div class="${"md:flex-row justify-center w-full lg:w-1/2 ml-1 py-2 border-gray-300 border-2 shadow-2xl mt-4"}"><div class="${"flex flex-wrap place-content-center w-full"}"><p><em>Click</em> on a name to see more.</p></div>

      ${(0, import_index_635fbd41.v)(import_LetterIndex_81c1acab.L, "LetterIndex").$$render($$result, { pageName: "classmates", letterIndex }, {}, {})}

      <div class="${"flex w-full justify-center"}"><ul class="${"ml-2 text-lg text-gray-600 leading-tight"}">${(0, import_index_635fbd41.d)(classmateColumn1 || [], (classmate) => {
    return `<li class="${"mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110"}"><a${(0, import_index_635fbd41.b)("id", classmate.lastName.toLowerCase().replace(/\s+/g, ""), 0)} href="${"classmate?back=classmates&firstName=" + (0, import_index_635fbd41.e)(classmate.firstName) + "&lastName=" + (0, import_index_635fbd41.e)(classmate.lastName) + "&name=" + (0, import_index_635fbd41.e)(classmate.name) + "&photoId=" + (0, import_index_635fbd41.e)(classmate.cloudinaryId) + "&deceased=" + (0, import_index_635fbd41.e)(classmate.deceased) + "&confirmed=" + (0, import_index_635fbd41.e)(classmate.confirmed) + "&"}">${(0, import_index_635fbd41.e)(classmate.name)}</a>
            </li>`;
  })}</ul>

        <ul class="${"ml-0 md:ml-6 text-lg text-gray-600 leading-tight"}">${(0, import_index_635fbd41.d)(classmateColumn2 || [], (classmate) => {
    return `<li class="${"mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110"}"><a${(0, import_index_635fbd41.b)("id", classmate.lastName.toLowerCase().replace(/\s+/g, ""), 0)} class="${""}" href="${"classmate?back=classmates&firstName=" + (0, import_index_635fbd41.e)(classmate.firstName) + "&lastName=" + (0, import_index_635fbd41.e)(classmate.lastName) + "&name=" + (0, import_index_635fbd41.e)(classmate.name) + "&photoId=" + (0, import_index_635fbd41.e)(classmate.cloudinaryId) + "&deceased=" + (0, import_index_635fbd41.e)(classmate.deceased) + "&confirmed=" + (0, import_index_635fbd41.e)(classmate.confirmed)}">${(0, import_index_635fbd41.e)(classmate.name)}</a>
            </li>`;
  })}</ul>

        ${(0, import_index_635fbd41.v)(import_LetterIndex_81c1acab.B, "BackToTop").$$render($$result, { back: "classmates" }, {}, {})}</div></div></div></section>`;
});
