import { jsxs as _, jsx as c } from "react/jsx-runtime";
import { c as o } from "./clsx-OuTLNxxd.js";
const h = "_container_a2dsa_3", p = "_disabled_a2dsa_11", m = "_input_a2dsa_16", b = "_checked_a2dsa_41", u = "_slider_a2dsa_49", w = "_label_a2dsa_65", a = {
  container: h,
  disabled: p,
  input: m,
  switch: "_switch_a2dsa_23",
  checked: b,
  slider: u,
  label: w
}, y = ({
  checked: s,
  onChange: t,
  label: i,
  disabled: e = !1,
  className: r
}) => {
  const l = () => {
    !e && t && t(!s);
  }, d = (n) => {
    (n.key === " " || n.key === "Enter") && (n.preventDefault(), l());
  };
  return /* @__PURE__ */ _("label", { className: o(a.container, e && a.disabled, r), children: [
    /* @__PURE__ */ c(
      "input",
      {
        type: "checkbox",
        className: a.input,
        checked: s,
        onChange: l,
        disabled: e,
        "aria-checked": s
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: o(a.switch, s && a.checked),
        role: "switch",
        "aria-checked": s,
        "aria-disabled": e,
        tabIndex: e ? -1 : 0,
        onKeyDown: d,
        children: /* @__PURE__ */ c("div", { className: a.slider })
      }
    ),
    i && /* @__PURE__ */ c("span", { className: a.label, children: i })
  ] });
};
export {
  y as S
};
//# sourceMappingURL=Switch-BVVX9ZFy.js.map
