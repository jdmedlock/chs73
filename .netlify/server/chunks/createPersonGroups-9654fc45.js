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
  c: () => createPersonGroups
});
module.exports = __toCommonJS(stdin_exports);
function formatName(firstName, lastName, marriedLastName) {
  const formattedName = marriedLastName !== "" && marriedLastName !== void 0 ? firstName.concat(" (", lastName, ") ", marriedLastName) : firstName.concat(" ", lastName);
  return formattedName;
}
function createPersonGroups(persons) {
  const photoPlaceholder = "chs_photo_placeholder_otiogp.png";
  const personsGrouping1Lth = Math.floor(persons.length / 2);
  let personsGrouping1 = [];
  for (let i = 0; i < personsGrouping1Lth; i++) {
    personsGrouping1.push({
      firstName: persons[i].firstName,
      lastName: persons[i].lastName,
      name: formatName(persons[i].firstName, persons[i].lastName, persons[i].marriedLastName),
      cloudinaryId: persons[i].cloudinaryId === "" ? photoPlaceholder : persons[i].cloudinaryId,
      deceased: persons[i].deceased,
      confirmed: persons[i].confirmed,
      department: persons[i].department ? persons[i].department : "",
      position: persons[i].position ? persons[i].position : ""
    });
  }
  let personsGrouping2 = [];
  for (let i = personsGrouping1Lth; i < persons.length; i++) {
    personsGrouping2.push({
      firstName: persons[i].firstName,
      lastName: persons[i].lastName,
      name: formatName(persons[i].firstName, persons[i].lastName, persons[i].marriedLastName),
      cloudinaryId: persons[i].cloudinaryId === "" ? photoPlaceholder : persons[i].cloudinaryId,
      deceased: persons[i].deceased,
      confirmed: persons[i].confirmed,
      department: persons[i].department ? persons[i].department : "",
      position: persons[i].position ? persons[i].position : ""
    });
  }
  return [personsGrouping1, personsGrouping2];
}
