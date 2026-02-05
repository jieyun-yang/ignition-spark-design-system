import { jsx as t } from "react/jsx-runtime";
import { c as _ } from "./clsx-OuTLNxxd.js";
import { I as a } from "./Icon-Cb8rh0Cw.js";
const l = "_link_1co3q_6", p = "_text_1co3q_32", m = "_icon_1co3q_45", o = {
  link: l,
  "type-text": "_type-text_1co3q_26",
  text: p,
  "type-icon": "_type-icon_1co3q_37",
  icon: m
};
function q({
  href: c,
  type: e = "text",
  children: i,
  external: n = !1,
  className: r,
  onClick: s
}) {
  return /* @__PURE__ */ t(
    "a",
    {
      href: c,
      className: _(o.link, o[`type-${e}`], r),
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      onClick: s,
      children: e === "icon" ? /* @__PURE__ */ t(a, { name: "circle-question", className: o.icon }) : /* @__PURE__ */ t("span", { className: o.text, children: i || "Learn more" })
    }
  );
}
export {
  q as S
};
//# sourceMappingURL=SupportArticleLink-mYENIL_F.js.map
