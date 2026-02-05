import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { useState as f } from "react";
import { I as r } from "./Icon-Cb8rh0Cw.js";
import { c as h } from "./clsx-OuTLNxxd.js";
const I = "_container_pnd5p_3", x = "_disabled_pnd5p_17", b = "_focused_pnd5p_21", B = "_searchIcon_pnd5p_31", N = "_input_pnd5p_37", S = "_clearButton_pnd5p_59", s = {
  container: I,
  disabled: x,
  focused: b,
  searchIcon: B,
  input: N,
  clearButton: S
}, v = ({
  value: n = "",
  onChange: e,
  placeholder: i = "Search...",
  disabled: c = !1,
  className: l,
  onClear: a
}) => {
  const [p, o] = f(!1), u = (_) => {
    e && e(_.target.value);
  }, d = () => {
    e && e(""), a && a();
  };
  return /* @__PURE__ */ m(
    "div",
    {
      className: h(
        s.container,
        p && s.focused,
        c && s.disabled,
        l
      ),
      children: [
        /* @__PURE__ */ t(r, { name: "search", className: s.searchIcon }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            className: s.input,
            value: n,
            onChange: u,
            onFocus: () => o(!0),
            onBlur: () => o(!1),
            placeholder: i,
            disabled: c
          }
        ),
        n && !c && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: s.clearButton,
            onClick: d,
            "aria-label": "Clear search",
            children: /* @__PURE__ */ t(r, { name: "xmark" })
          }
        )
      ]
    }
  );
};
export {
  v as S
};
//# sourceMappingURL=Search-D60Pejw6.js.map
