import { jsxs as n, jsx as s } from "react/jsx-runtime";
import { useState as l } from "react";
import { I as v } from "./Icon-Cb8rh0Cw.js";
import { c as i } from "./clsx-OuTLNxxd.js";
const f = "_wrapper_x5xkv_3", h = "_container_x5xkv_10", k = "_disabled_x5xkv_23", I = "_focused_x5xkv_27", N = "_error_x5xkv_32", b = "_input_x5xkv_45", y = "_toggleButton_x5xkv_67", B = "_toggleText_x5xkv_83", P = "_toggleIcon_x5xkv_92", S = "_errorMessage_x5xkv_97", e = {
  wrapper: f,
  container: h,
  disabled: k,
  focused: I,
  error: N,
  input: b,
  toggleButton: y,
  toggleText: B,
  toggleIcon: P,
  errorMessage: S
}, H = ({
  value: d = "",
  onChange: a,
  placeholder: g = "Enter password",
  disabled: t = !1,
  errorMessage: r,
  className: _
}) => {
  const [o, x] = l(!1), [p, c] = l(!1), u = (m) => {
    a && a(m.target.value);
  }, w = () => {
    x(!o);
  };
  return /* @__PURE__ */ n("div", { className: i(e.wrapper, _), children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: i(
          e.container,
          p && e.focused,
          r && e.error,
          t && e.disabled
        ),
        children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: o ? "text" : "password",
              className: e.input,
              value: d,
              onChange: u,
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              placeholder: g,
              disabled: t
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: e.toggleButton,
              onClick: w,
              disabled: t,
              "aria-label": o ? "Hide password" : "Show password",
              children: [
                /* @__PURE__ */ s("span", { className: e.toggleText, children: o ? "Hide" : "Show" }),
                /* @__PURE__ */ s(
                  v,
                  {
                    name: o ? "eye-slash" : "eye",
                    variant: "solid",
                    className: e.toggleIcon
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    r && /* @__PURE__ */ s("div", { className: e.errorMessage, children: r })
  ] });
};
export {
  H as P
};
//# sourceMappingURL=PasswordInput-Uw386DQd.js.map
