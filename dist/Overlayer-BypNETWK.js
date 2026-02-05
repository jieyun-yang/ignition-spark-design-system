import { jsx as l } from "react/jsx-runtime";
import { c as s } from "./clsx-OuTLNxxd.js";
const t = "_overlayer_1l3oa_6", n = {
  overlayer: t
};
function c({
  visible: e = !1,
  onClick: r,
  className: o,
  zIndex: a = 1e3
}) {
  return e ? /* @__PURE__ */ l(
    "div",
    {
      className: s(n.overlayer, o),
      onClick: r,
      style: { zIndex: a },
      role: "presentation",
      "aria-hidden": "true"
    }
  ) : null;
}
export {
  c as O
};
//# sourceMappingURL=Overlayer-BypNETWK.js.map
