import { jsx as e } from "react/jsx-runtime";
import { c as l } from "./clsx-OuTLNxxd.js";
const v = "_link_9e0ot_6", t = {
  link: v,
  "variant-body": "_variant-body_9e0ot_27",
  "variant-body-medium": "_variant-body-medium_9e0ot_33",
  "variant-small": "_variant-small_9e0ot_40",
  "variant-small-medium": "_variant-small-medium_9e0ot_46",
  "variant-extra-small": "_variant-extra-small_9e0ot_52",
  "variant-h1": "_variant-h1_9e0ot_59",
  "variant-h2": "_variant-h2_9e0ot_65",
  "variant-h3": "_variant-h3_9e0ot_71",
  "variant-h4": "_variant-h4_9e0ot_77"
}, d = ({
  children: r,
  href: i,
  variant: n = "body",
  external: a = !1,
  className: _,
  onClick: o
}) => /* @__PURE__ */ e(
  "a",
  {
    href: i,
    className: l(t.link, t[`variant-${n}`], _),
    target: a ? "_blank" : void 0,
    rel: a ? "noopener noreferrer" : void 0,
    onClick: o,
    children: r
  }
);
export {
  d as L
};
//# sourceMappingURL=Link-DFtMc4JP.js.map
