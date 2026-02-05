import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { I as t } from "./Icon-Cb8rh0Cw.js";
import { c as d } from "./clsx-OuTLNxxd.js";
const x = "_card_1naec_5", m = "_disabled_1naec_18", b = "_checked_1naec_28", v = "_invalid_1naec_37", N = "_header_1naec_42", f = "_iconWrapper_1naec_49", C = "_icon_1naec_49", W = "_checkboxWrapper_1naec_63", I = "_checkbox_1naec_63", y = "_checkboxChecked_1naec_85", D = "_checkIcon_1naec_90", j = "_content_1naec_96", u = "_title_1naec_103", w = "_description_1naec_111", c = {
  card: x,
  disabled: m,
  checked: b,
  invalid: v,
  header: N,
  iconWrapper: f,
  icon: C,
  checkboxWrapper: W,
  checkbox: I,
  checkboxChecked: y,
  checkIcon: D,
  content: j,
  title: u,
  description: w
}, z = ({
  icon: _,
  title: l,
  description: h,
  checked: n,
  onChange: s,
  disabled: a = !1,
  invalid: k = !1
}) => {
  const r = () => {
    !a && s && s(!n);
  }, p = (o) => {
    (o.key === " " || o.key === "Enter") && (o.preventDefault(), r());
  };
  return /* @__PURE__ */ i(
    "div",
    {
      className: d(
        c.card,
        n && c.checked,
        a && c.disabled,
        k && c.invalid
      ),
      onClick: r,
      onKeyDown: p,
      role: "checkbox",
      "aria-checked": n,
      "aria-disabled": a,
      tabIndex: a ? -1 : 0,
      children: [
        /* @__PURE__ */ i("div", { className: c.header, children: [
          /* @__PURE__ */ e("div", { className: c.iconWrapper, children: /* @__PURE__ */ e(t, { name: _, className: c.icon }) }),
          /* @__PURE__ */ e("div", { className: c.checkboxWrapper, children: /* @__PURE__ */ e("div", { className: d(c.checkbox, n && c.checkboxChecked), children: n && /* @__PURE__ */ e(t, { name: "check", variant: "solid", className: c.checkIcon }) }) })
        ] }),
        /* @__PURE__ */ i("div", { className: c.content, children: [
          /* @__PURE__ */ e("div", { className: c.title, children: l }),
          /* @__PURE__ */ e("div", { className: c.description, children: h })
        ] })
      ]
    }
  );
};
export {
  z as C
};
//# sourceMappingURL=CheckboxCard-C99BviyG.js.map
