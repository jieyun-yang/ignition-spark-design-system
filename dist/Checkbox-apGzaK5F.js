import { jsxs as _, jsx as s } from "react/jsx-runtime";
import n from "react";
import { c as k } from "./clsx-OuTLNxxd.js";
import { I as z } from "./Icon-Cb8rh0Cw.js";
const N = "_checkbox_akr4q_11", v = "_disabled_akr4q_22", C = "_hiddenInput_akr4q_27", g = "_checkboxInput_akr4q_36", R = "_checked_akr4q_51", y = "_checkIcon_akr4q_57", j = "_indeterminateIcon_akr4q_65", w = "_label_akr4q_79", E = "_invalid_akr4q_118", e = {
  checkbox: N,
  disabled: v,
  hiddenInput: C,
  checkboxInput: g,
  checked: R,
  checkIcon: y,
  indeterminateIcon: j,
  label: w,
  "size-sm": "_size-sm_akr4q_86",
  "size-md": "_size-md_akr4q_91",
  "size-lg": "_size-lg_akr4q_96",
  invalid: E
}, H = n.forwardRef(
  ({
    children: i,
    checked: o,
    indeterminate: c = !1,
    onChange: r,
    size: d = "md",
    invalid: h = !1,
    disabled: t = !1,
    className: m,
    name: p,
    value: b,
    "aria-label": u
  }, I) => {
    const l = n.useRef(null);
    n.useEffect(() => {
      const a = l.current;
      a && (a.indeterminate = c);
    }, [c]), n.useImperativeHandle(I, () => l.current);
    const f = (a) => {
      r && !t && r(a.target.checked);
    }, x = k(
      e.checkbox,
      e[`size-${d}`],
      h && e.invalid,
      t && e.disabled,
      m
    ), q = k(
      e.checkboxInput,
      (o || c) && e.checked
    );
    return /* @__PURE__ */ _("label", { className: x, children: [
      /* @__PURE__ */ s(
        "input",
        {
          ref: l,
          type: "checkbox",
          className: e.hiddenInput,
          checked: o,
          onChange: f,
          disabled: t,
          name: p,
          value: b,
          "aria-label": u
        }
      ),
      /* @__PURE__ */ _("span", { className: q, children: [
        o && !c && /* @__PURE__ */ s(z, { name: "check", variant: "solid", className: e.checkIcon }),
        c && /* @__PURE__ */ s("span", { className: e.indeterminateIcon, children: "−" })
      ] }),
      i && /* @__PURE__ */ s("span", { className: e.label, children: i })
    ] });
  }
);
H.displayName = "Checkbox";
export {
  H as C
};
//# sourceMappingURL=Checkbox-apGzaK5F.js.map
