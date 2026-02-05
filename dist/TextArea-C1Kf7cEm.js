import { jsx as f } from "react/jsx-runtime";
import { c as g } from "./clsx-OuTLNxxd.js";
const m = "_textarea_1oage_3", v = "_disabled_1oage_32", z = "_invalid_1oage_38", R = "_noResize_1oage_47", e = {
  textarea: m,
  disabled: v,
  invalid: z,
  noResize: R
}, u = ({
  value: o,
  onChange: a,
  placeholder: i = "",
  rows: n = 3,
  disabled: t = !1,
  invalid: s = !1,
  readOnly: r = !1,
  resizable: l = !0,
  className: _,
  maxLength: d
}) => {
  const c = (x) => {
    a && a(x.target.value);
  };
  return /* @__PURE__ */ f(
    "textarea",
    {
      className: g(
        e.textarea,
        t && e.disabled,
        s && e.invalid,
        !l && e.noResize,
        _
      ),
      value: o,
      onChange: c,
      placeholder: i,
      rows: n,
      disabled: t,
      readOnly: r,
      maxLength: d,
      "aria-invalid": s
    }
  );
};
export {
  u as T
};
//# sourceMappingURL=TextArea-C1Kf7cEm.js.map
