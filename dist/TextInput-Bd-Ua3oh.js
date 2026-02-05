import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { useState as k } from "react";
import { c as _ } from "./clsx-OuTLNxxd.js";
const x = "_wrapper_1jkm5_3", b = "_label_1jkm5_10", N = "_required_1jkm5_18", v = "_input_1jkm5_23", T = "_focused_1jkm5_47", w = "_error_1jkm5_54", q = "_disabled_1jkm5_64", F = "_errorMessage_1jkm5_70", g = "_helperText_1jkm5_79", e = {
  wrapper: x,
  label: b,
  required: N,
  input: v,
  focused: T,
  error: w,
  disabled: q,
  errorMessage: F,
  helperText: g
}, C = ({
  value: d = "",
  onChange: a,
  label: t,
  placeholder: p,
  type: m = "text",
  disabled: l = !1,
  errorMessage: s,
  helperText: c,
  className: u,
  required: o = !1
}) => {
  const [f, n] = k(!1), j = (h) => {
    a && a(h.target.value);
  };
  return /* @__PURE__ */ i("div", { className: _(e.wrapper, u), children: [
    t && /* @__PURE__ */ i("label", { className: e.label, children: [
      t,
      o && /* @__PURE__ */ r("span", { className: e.required, children: "*" })
    ] }),
    /* @__PURE__ */ r(
      "input",
      {
        type: m,
        className: _(
          e.input,
          f && e.focused,
          s && e.error,
          l && e.disabled
        ),
        value: d,
        onChange: j,
        onFocus: () => n(!0),
        onBlur: () => n(!1),
        placeholder: p,
        disabled: l,
        required: o,
        "aria-invalid": !!s
      }
    ),
    s && /* @__PURE__ */ r("div", { className: e.errorMessage, children: s }),
    c && !s && /* @__PURE__ */ r("div", { className: e.helperText, children: c })
  ] });
};
export {
  C as T
};
//# sourceMappingURL=TextInput-Bd-Ua3oh.js.map
