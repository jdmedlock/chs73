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
  g: () => getCloudinaryPhoto
});
module.exports = __toCommonJS(stdin_exports);
var import_url_gen = require("@cloudinary/url-gen");
var import_resize = require("@cloudinary/url-gen/actions/resize");
var import_roundCorners = require("@cloudinary/url-gen/actions/roundCorners");
var import_gravity = require("@cloudinary/url-gen/qualifiers/gravity");
var import_focusOn = require("@cloudinary/url-gen/qualifiers/focusOn");
function getCloudinaryPhoto(cloudinaryId) {
  const cld = new import_url_gen.Cloudinary({
    cloud: {
      cloudName: `${"dk0zvtfed"}`
    }
  });
  const myImage = cld.image(`${cloudinaryId}`);
  myImage.resize((0, import_resize.thumbnail)().width(400).height(400).gravity((0, import_gravity.focusOn)(import_focusOn.FocusOn.face()))).roundCorners((0, import_roundCorners.byRadius)(200));
  return myImage.toURL();
}
