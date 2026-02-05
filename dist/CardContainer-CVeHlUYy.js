import { jsxs as o, jsx as n, Fragment as g } from "react/jsx-runtime";
import { c } from "./clsx-OuTLNxxd.js";
const v = "_cardContainer_1ggz5_6", p = "_header_1ggz5_18", m = "_headerContent_1ggz5_25", u = "_titleWrapper_1ggz5_30", N = "_heading_1ggz5_37", z = "_subheading_1ggz5_47", C = "_actionButton_1ggz5_57", b = "_actionIcon_1ggz5_85", W = "_actionLabel_1ggz5_94", B = "_chevronButton_1ggz5_99", f = "_chevron_1ggz5_99", L = "_collapsed_1ggz5_117", k = "_dividerWrapper_1ggz5_122", x = "_divider_1ggz5_122", y = "_body_1ggz5_133", I = "_footer_1ggz5_138", e = {
  cardContainer: v,
  header: p,
  headerContent: m,
  titleWrapper: u,
  heading: N,
  subheading: z,
  actionButton: C,
  actionIcon: b,
  actionLabel: W,
  chevronButton: B,
  chevron: f,
  collapsed: L,
  dividerWrapper: k,
  divider: x,
  body: y,
  footer: I
}, E = ({
  heading: d,
  subheading: i,
  action: a,
  footer: t,
  children: s,
  collapsible: l = !1,
  collapsed: r = !1,
  onToggleCollapse: _,
  className: h
}) => /* @__PURE__ */ o("div", { className: c(e.cardContainer, h), children: [
  /* @__PURE__ */ o("div", { className: e.header, children: [
    /* @__PURE__ */ n("div", { className: e.headerContent, children: /* @__PURE__ */ o("div", { className: e.titleWrapper, children: [
      /* @__PURE__ */ n("h3", { className: e.heading, children: d }),
      i && /* @__PURE__ */ n("p", { className: e.subheading, children: i })
    ] }) }),
    a && /* @__PURE__ */ o(
      "button",
      {
        className: e.actionButton,
        onClick: a.onClick,
        children: [
          a.icon && /* @__PURE__ */ n("span", { className: e.actionIcon, children: a.icon }),
          /* @__PURE__ */ n("span", { className: e.actionLabel, children: a.label })
        ]
      }
    ),
    l && /* @__PURE__ */ n(
      "button",
      {
        className: e.chevronButton,
        onClick: _,
        "aria-label": r ? "Expand" : "Collapse",
        children: /* @__PURE__ */ n(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            className: c(e.chevron, r && e.collapsed),
            children: /* @__PURE__ */ n(
              "path",
              {
                d: "M4 10L8 6L12 10",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ n("div", { className: e.dividerWrapper, children: /* @__PURE__ */ n("div", { className: e.divider }) }),
  !r && /* @__PURE__ */ n("div", { className: e.body, children: s }),
  t && !r && /* @__PURE__ */ o(g, { children: [
    /* @__PURE__ */ n("div", { className: e.dividerWrapper, children: /* @__PURE__ */ n("div", { className: e.divider }) }),
    /* @__PURE__ */ n("div", { className: e.footer, children: t })
  ] })
] });
export {
  E as C
};
//# sourceMappingURL=CardContainer-CVeHlUYy.js.map
