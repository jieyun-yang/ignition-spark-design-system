import { jsxs as s, jsx as a } from "react/jsx-runtime";
import { c as y } from "./clsx-OuTLNxxd.js";
import { B as k } from "./Badge-WHVddo7e.js";
import { I as w } from "./Icon-Cb8rh0Cw.js";
const N = "_appCard_1wuy2_7", h = "_locked_1wuy2_20", W = "_clickable_1wuy2_25", I = "_selected_1wuy2_37", b = "_disabled_1wuy2_48", g = "_premiumBanner_1wuy2_54", v = "_premiumText_1wuy2_64", f = "_content_1wuy2_75", x = "_logoWrapper_1wuy2_86", B = "_details_1wuy2_94", C = "_appName_1wuy2_104", T = "_description_1wuy2_119", j = "_badgeWrapper_1wuy2_134", A = "_lockedIconWrapper_1wuy2_142", M = "_lockedIcon_1wuy2_142", e = {
  appCard: N,
  locked: h,
  clickable: W,
  selected: I,
  disabled: b,
  premiumBanner: g,
  premiumText: v,
  content: f,
  logoWrapper: x,
  details: B,
  appName: C,
  description: T,
  badgeWrapper: j,
  lockedIconWrapper: A,
  lockedIcon: M
}, U = ({
  logo: p,
  appName: d,
  description: i,
  badge: n,
  badgeVariant: t = "green",
  premium: _ = !1,
  selected: l = !1,
  disabled: c = !1,
  locked: o = !1,
  onClick: r,
  className: m
}) => {
  const u = () => {
    !c && r && r();
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: y(
        e.appCard,
        r && !c && e.clickable,
        l && e.selected,
        c && e.disabled,
        o && e.locked,
        m
      ),
      onClick: u,
      "aria-disabled": c,
      "aria-selected": l,
      children: [
        _ && /* @__PURE__ */ a("div", { className: e.premiumBanner, children: /* @__PURE__ */ a("span", { className: e.premiumText, children: "PREMIUM" }) }),
        /* @__PURE__ */ s("div", { className: e.content, children: [
          /* @__PURE__ */ a("div", { className: e.logoWrapper, children: p }),
          /* @__PURE__ */ s("div", { className: e.details, children: [
            /* @__PURE__ */ a("h3", { className: e.appName, children: d }),
            /* @__PURE__ */ a("p", { className: e.description, children: i })
          ] }),
          n && /* @__PURE__ */ a("div", { className: e.badgeWrapper, children: /* @__PURE__ */ a(k, { variant: t, size: "large", children: n }) })
        ] }),
        o && /* @__PURE__ */ a("div", { className: e.lockedIconWrapper, children: /* @__PURE__ */ a("div", { className: e.lockedIcon, children: /* @__PURE__ */ a(w, { name: "ban", variant: "solid" }) }) })
      ]
    }
  );
};
export {
  U as A
};
//# sourceMappingURL=AppCard-BQ97fmHT.js.map
