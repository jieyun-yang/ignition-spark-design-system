import { jsxs as _, jsx as a } from "react/jsx-runtime";
import { useState as u } from "react";
import { c as s } from "./clsx-OuTLNxxd.js";
const m = "_container_ucizx_3", x = "_tooltip_ucizx_8", o = {
  container: m,
  tooltip: x,
  "position-top": "_position-top_ucizx_25",
  "position-bottom": "_position-bottom_ucizx_31",
  "position-left": "_position-left_ucizx_37",
  "position-right": "_position-right_ucizx_43"
}, z = ({
  content: t,
  children: e,
  position: n = "top",
  className: c
}) => {
  const [p, i] = u(!1), l = () => {
    i(!0);
  }, r = () => {
    i(!1);
  };
  return /* @__PURE__ */ _(
    "div",
    {
      className: s(o.container, c),
      onMouseEnter: l,
      onMouseLeave: r,
      children: [
        e,
        p && t && /* @__PURE__ */ a(
          "div",
          {
            className: s(
              o.tooltip,
              o[`position-${n}`]
            ),
            role: "tooltip",
            children: t
          }
        )
      ]
    }
  );
};
export {
  z as T
};
//# sourceMappingURL=Tooltip-NI0uKTv6.js.map
