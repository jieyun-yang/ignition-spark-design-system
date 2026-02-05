import { jsxs as g, jsx as s } from "react/jsx-runtime";
import { c as p } from "./clsx-OuTLNxxd.js";
const v = "_container_19na6_3", h = "_disabled_19na6_11", O = "_input_19na6_16", m = "_radio_19na6_23", f = "_checked_19na6_45", y = "_invalid_19na6_50", D = "_dot_19na6_58", k = "_label_19na6_70", N = "_group_19na6_93", x = "_groupOption_19na6_98", I = "_groupOptionDisabled_19na6_132", A = "_groupOptionActive_19na6_132", w = "_groupInput_19na6_161", n = {
  container: v,
  disabled: h,
  input: O,
  radio: m,
  checked: f,
  invalid: y,
  dot: D,
  label: k,
  group: N,
  groupOption: x,
  groupOptionDisabled: I,
  groupOptionActive: A,
  groupInput: w
}, R = ({
  children: c,
  name: u,
  value: d,
  checked: t,
  onChange: l,
  disabled: i = !1,
  invalid: r = !1,
  className: _
}) => {
  const a = () => {
    !i && l && l(d);
  }, o = (e) => {
    (e.key === " " || e.key === "Enter") && (e.preventDefault(), a());
  };
  return /* @__PURE__ */ g(
    "label",
    {
      className: p(
        n.container,
        i && n.disabled,
        r && n.invalid,
        _
      ),
      children: [
        /* @__PURE__ */ s(
          "input",
          {
            type: "radio",
            name: u,
            value: d,
            checked: t,
            onChange: a,
            disabled: i,
            className: n.input,
            "aria-invalid": r
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            className: p(n.radio, t && n.checked),
            role: "radio",
            "aria-checked": t,
            "aria-disabled": i,
            tabIndex: i ? -1 : 0,
            onKeyDown: o,
            children: t && /* @__PURE__ */ s("div", { className: n.dot })
          }
        ),
        /* @__PURE__ */ s("span", { className: n.label, children: c })
      ]
    }
  );
}, j = ({
  name: c,
  options: u,
  value: d,
  onChange: t,
  disabled: l = !1,
  className: i
}) => {
  const r = (a, o) => {
    !l && !o && t(a);
  }, _ = (a, o, e) => {
    (a.key === " " || a.key === "Enter") && (a.preventDefault(), r(o, e));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: p(n.group, i),
      role: "radiogroup",
      "aria-label": c,
      children: u.map((a) => {
        const o = d === a.value, e = l || a.disabled;
        return /* @__PURE__ */ g(
          "label",
          {
            className: p(
              n.groupOption,
              o && n.groupOptionActive,
              e && n.groupOptionDisabled
            ),
            tabIndex: e ? -1 : 0,
            onKeyDown: (b) => _(b, a.value, a.disabled),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  type: "radio",
                  name: c,
                  value: a.value,
                  checked: o,
                  onChange: () => r(a.value, a.disabled),
                  disabled: e,
                  className: n.groupInput
                }
              ),
              a.label
            ]
          },
          a.value
        );
      })
    }
  );
};
export {
  R,
  j as a
};
//# sourceMappingURL=RadioButtonGroup-BK1M1DyA.js.map
