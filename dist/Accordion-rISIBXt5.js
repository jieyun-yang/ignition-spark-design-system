import { jsxs as r, jsx as s } from "react/jsx-runtime";
import { useState as N } from "react";
import { c as t } from "./clsx-OuTLNxxd.js";
const W = "_accordion_segff_7", u = "_disabled_segff_17", w = "_header_segff_23", k = "_stepper_segff_45", y = "_titleWrapper_segff_71", L = "_titleRow_segff_79", R = "_heading_segff_86", j = "_subheading_segff_104", z = "_badge_segff_114", E = "_iconWrapper_segff_138", A = "_chevron_segff_159", C = "_expanded_segff_163", $ = "_dividerWrapper_segff_168", B = "_divider_segff_168", I = "_body_segff_179", M = "_content_segff_183", e = {
  accordion: W,
  disabled: u,
  header: w,
  stepper: k,
  "size-small": "_size-small_segff_62",
  "size-large": "_size-large_segff_66",
  titleWrapper: y,
  titleRow: L,
  heading: R,
  subheading: j,
  badge: z,
  "badge-warning": "_badge-warning_segff_127",
  "badge-error": "_badge-error_segff_132",
  iconWrapper: E,
  chevron: A,
  expanded: C,
  dividerWrapper: $,
  divider: B,
  body: I,
  content: M
}, F = ({
  heading: p,
  subheading: o,
  size: d = "small",
  stepper: _,
  badge: n,
  defaultExpanded: g = !1,
  expanded: l,
  onToggle: i,
  disabled: c = !1,
  children: h,
  className: v
}) => {
  const [m, b] = N(g), a = l !== void 0 ? l : m, x = () => {
    if (c) return;
    const f = !a;
    b(f), i == null || i(f);
  };
  return /* @__PURE__ */ r("div", { className: t(
    e.accordion,
    e[`size-${d}`],
    c && e.disabled,
    v
  ), children: [
    /* @__PURE__ */ r(
      "button",
      {
        className: e.header,
        onClick: x,
        disabled: c,
        "aria-expanded": a,
        children: [
          _ && /* @__PURE__ */ s("div", { className: e.stepper, children: _ }),
          /* @__PURE__ */ r("div", { className: e.titleWrapper, children: [
            /* @__PURE__ */ r("div", { className: e.titleRow, children: [
              /* @__PURE__ */ s("h3", { className: e.heading, children: p }),
              n && /* @__PURE__ */ s("span", { className: t(e.badge, e[`badge-${n.variant || "warning"}`]), children: n.text })
            ] }),
            o && /* @__PURE__ */ s("p", { className: e.subheading, children: o })
          ] }),
          /* @__PURE__ */ s("div", { className: e.iconWrapper, children: /* @__PURE__ */ s(
            "svg",
            {
              width: d === "large" ? "24" : "16",
              height: d === "large" ? "24" : "16",
              viewBox: "0 0 16 16",
              fill: "none",
              className: t(e.chevron, a && e.expanded),
              children: /* @__PURE__ */ s(
                "path",
                {
                  d: "M4 6L8 10L12 6",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ s("div", { className: e.dividerWrapper, children: /* @__PURE__ */ s("div", { className: e.divider }) }),
    a && /* @__PURE__ */ s("div", { className: e.body, children: /* @__PURE__ */ s("div", { className: e.content, children: h }) })
  ] });
};
export {
  F as A
};
//# sourceMappingURL=Accordion-rISIBXt5.js.map
