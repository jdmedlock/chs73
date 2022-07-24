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
  B: () => BackToTop,
  L: () => LetterIndex,
  c: () => createNameIndex
});
module.exports = __toCommonJS(stdin_exports);
var import_index_635fbd41 = require("./index-635fbd41.js");
function createNameIndex(persons) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letterIndex = [];
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet.charAt(i);
    const firstMatch = persons.find((person) => {
      return person.lastName.charAt(0) == letter ? true : false;
    });
    if (firstMatch !== void 0) {
      letterIndex.push({
        letter,
        name: `#${firstMatch.lastName.toLowerCase().replace(/\s+/g, "")}`
      });
    } else {
      if (letter !== "A") {
        letterIndex.push({
          letter,
          name: letterIndex[i - 1].lastName
        });
      }
    }
  }
  return letterIndex;
}
const BackToTop = (0, import_index_635fbd41.c)(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  let { back } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  if ($$props.back === void 0 && $$bindings.back && back !== void 0)
    $$bindings.back(back);
  return `

<a href="${(0, import_index_635fbd41.e)(back) + "/#top"}" class="${[
    "fixed visible z-50 bottom-8 place-self-center bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-300 ease-in-out hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110",
    "hidden"
  ].join(" ").trim()}">Back to top
</a>`;
});
const LetterIndex = (0, import_index_635fbd41.c)(($$result, $$props, $$bindings, slots) => {
  let { pageName } = $$props;
  let { letterIndex } = $$props;
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  if ($$props.letterIndex === void 0 && $$bindings.letterIndex && letterIndex !== void 0)
    $$bindings.letterIndex(letterIndex);
  return `<div class="${"flex flex-col w-full place-items-center"}"><div class="${"flex flex-wrap bg-gray-300 mb-2"}">${(0, import_index_635fbd41.d)(letterIndex || [], (indexLetter) => {
    return `<a class="${"mr-0.5 md:ml-2 lg:ml-3 text-base md:text-xl"}" href="${(0, import_index_635fbd41.e)(pageName) + "/" + (0, import_index_635fbd41.e)(indexLetter.name)}">${(0, import_index_635fbd41.e)(indexLetter.letter)}</a>`;
  })}</div></div>`;
});
