import { jsx as a, jsxs as _ } from "react/jsx-runtime";
import { c as i } from "./clsx-OuTLNxxd.js";
const b = "_tabs_xro10_6", c = "_tabsSegment_xro10_14", r = "_tab_xro10_6", m = "_disabled_xro10_33", g = "_label_xro10_33", h = "_active_xro10_52", x = "_highlight_xro10_58", S = "_tabSegment_xro10_77", s = {
  tabs: b,
  tabsSegment: c,
  tab: r,
  disabled: m,
  label: g,
  active: h,
  highlight: x,
  tabSegment: S
}, N = ({
  tabs: n,
  activeTab: t,
  onTabChange: d,
  variant: l = "underline",
  className: o
}) => /* @__PURE__ */ a("div", { className: i(
  l === "underline" ? s.tabs : s.tabsSegment,
  o
), children: n.map((e) => /* @__PURE__ */ _(
  "button",
  {
    type: "button",
    className: i(
      l === "underline" ? s.tab : s.tabSegment,
      t === e.id && s.active,
      e.disabled && s.disabled
    ),
    onClick: () => !e.disabled && d(e.id),
    disabled: e.disabled,
    "aria-selected": t === e.id,
    role: "tab",
    children: [
      /* @__PURE__ */ a("span", { className: s.label, children: e.label }),
      l === "underline" && t === e.id && /* @__PURE__ */ a("span", { className: s.highlight })
    ]
  },
  e.id
)) });
export {
  N as T
};
//# sourceMappingURL=Tabs-CwaA9YsE.js.map
