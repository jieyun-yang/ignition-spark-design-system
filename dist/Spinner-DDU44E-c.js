import { jsx as s } from "react/jsx-runtime";
import { c as i } from "./clsx-OuTLNxxd.js";
const _ = "_spinner_18krh_6", l = "_rotate_18krh_1", a = "_svg_18krh_20", n = "_circle_18krh_26", t = "_dash_18krh_1", r = {
  spinner: _,
  rotate: l,
  svg: a,
  circle: n,
  dash: t,
  "size-small": "_size-small_18krh_49",
  "size-medium": "_size-medium_18krh_54",
  "size-large": "_size-large_18krh_59",
  "color-primary": "_color-primary_18krh_65",
  "color-secondary": "_color-secondary_18krh_69",
  "color-white": "_color-white_18krh_73"
}, d = ({
  size: e = "medium",
  color: o = "primary",
  className: c
}) => /* @__PURE__ */ s(
  "div",
  {
    className: i(
      r.spinner,
      r[`size-${e}`],
      r[`color-${o}`],
      c
    ),
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ s("svg", { viewBox: "0 0 50 50", className: r.svg, children: /* @__PURE__ */ s(
      "circle",
      {
        className: r.circle,
        cx: "25",
        cy: "25",
        r: "20",
        fill: "none",
        strokeWidth: "4"
      }
    ) })
  }
);
export {
  d as S
};
//# sourceMappingURL=Spinner-DDU44E-c.js.map
