import { jsxs as a, jsx as n } from "react/jsx-runtime";
import { useState as B } from "react";
import { c as i } from "./clsx-OuTLNxxd.js";
import { I as r } from "./Icon-Cb8rh0Cw.js";
const G = "_sideNav_itmzb_9", L = "_navContentWrapper_itmzb_20", S = "_navContent_itmzb_20", A = "_topGroup_itmzb_41", x = "_header_itmzb_51", W = "_headerContent_itmzb_62", k = "_logo_itmzb_70", y = "_headerIcons_itmzb_76", w = "_headerIcon_itmzb_76", E = "_gab_itmzb_97", M = "_createButton_itmzb_108", T = "_createIcon_itmzb_128", O = "_createChevron_itmzb_129", j = "_createLabel_itmzb_140", R = "_navGroup_itmzb_151", q = "_navGroupBottom_itmzb_158", D = "_navItemWrapper_itmzb_167", F = "_navItem_itmzb_167", H = "_navItemActive_itmzb_179", J = "_navButton_itmzb_184", K = "_navItemContent_itmzb_196", P = "_navIcon_itmzb_204", Q = "_navLabel_itmzb_220", U = "_navCaret_itmzb_237", V = "_subItems_itmzb_250", X = "_subItem_itmzb_250", Y = "_subItemActive_itmzb_277", Z = "_divider_itmzb_282", $ = "_dividerLine_itmzb_292", ee = "_bottomGroup_itmzb_300", ne = "_referSection_itmzb_310", te = "_referButton_itmzb_319", ae = "_referIcon_itmzb_339", re = "_referLabel_itmzb_350", ce = "_userAccount_itmzb_361", se = "_userButton_itmzb_373", oe = "_userContent_itmzb_382", ie = "_userIcon_itmzb_390", de = "_userText_itmzb_401", le = "_userName_itmzb_412", me = "_userCompany_itmzb_428", ve = "_userCaret_itmzb_444", _e = "_curvedEdge_itmzb_456", ue = "_curvedShape_itmzb_465", e = {
  sideNav: G,
  navContentWrapper: L,
  navContent: S,
  topGroup: A,
  header: x,
  headerContent: W,
  logo: k,
  headerIcons: y,
  headerIcon: w,
  gab: E,
  createButton: M,
  createIcon: T,
  createChevron: O,
  createLabel: j,
  navGroup: R,
  navGroupBottom: q,
  navItemWrapper: D,
  navItem: F,
  navItemActive: H,
  navButton: J,
  navItemContent: K,
  navIcon: P,
  navLabel: Q,
  navCaret: U,
  subItems: V,
  subItem: X,
  subItemActive: Y,
  divider: Z,
  dividerLine: $,
  bottomGroup: ee,
  referSection: ne,
  referButton: te,
  referIcon: ae,
  referLabel: re,
  userAccount: ce,
  userButton: se,
  userContent: oe,
  userIcon: ie,
  userText: de,
  userName: le,
  userCompany: me,
  userCaret: ve,
  curvedEdge: _e,
  curvedShape: ue
};
function Ie({
  logo: u,
  showSearch: p = !0,
  showNotification: N = !0,
  createButton: d,
  group1Items: b = [],
  group2Items: l = [],
  group3Items: m = [],
  showReferButton: I = !0,
  onReferClick: z,
  user: o,
  className: C
}) {
  const [h, f] = B(/* @__PURE__ */ new Set()), g = (t) => {
    const s = new Set(h);
    s.has(t) ? s.delete(t) : s.add(t), f(s);
  }, v = (t) => {
    const s = h.has(t.id), _ = t.subItems && t.subItems.length > 0;
    return /* @__PURE__ */ a("div", { className: e.navItemWrapper, children: [
      /* @__PURE__ */ n(
        "div",
        {
          className: i(
            e.navItem,
            t.active && e.navItemActive
          ),
          children: /* @__PURE__ */ n(
            "button",
            {
              className: e.navButton,
              onClick: () => {
                var c;
                _ ? g(t.id) : (c = t.onClick) == null || c.call(t);
              },
              children: /* @__PURE__ */ a("div", { className: e.navItemContent, children: [
                /* @__PURE__ */ n("div", { className: e.navIcon, children: t.icon }),
                /* @__PURE__ */ n("div", { className: e.navLabel, children: t.label }),
                _ && /* @__PURE__ */ n("div", { className: e.navCaret, children: /* @__PURE__ */ n(r, { name: "chevron-down", variant: "solid" }) })
              ] })
            }
          )
        }
      ),
      _ && s && /* @__PURE__ */ n("div", { className: e.subItems, children: t.subItems.map((c) => /* @__PURE__ */ n(
        "button",
        {
          className: i(
            e.subItem,
            c.active && e.subItemActive
          ),
          onClick: c.onClick,
          children: c.label
        },
        c.id
      )) })
    ] }, t.id);
  };
  return /* @__PURE__ */ a("div", { className: i(e.sideNav, C), children: [
    /* @__PURE__ */ n("div", { className: e.navContentWrapper, children: /* @__PURE__ */ a("div", { className: e.navContent, children: [
      /* @__PURE__ */ a("div", { className: e.topGroup, children: [
        /* @__PURE__ */ n("div", { className: e.header, children: /* @__PURE__ */ a("div", { className: e.headerContent, children: [
          u && /* @__PURE__ */ n("div", { className: e.logo, children: u }),
          /* @__PURE__ */ a("div", { className: e.headerIcons, children: [
            p && /* @__PURE__ */ n("div", { className: e.headerIcon, children: /* @__PURE__ */ n(r, { name: "search", variant: "regular" }) }),
            N && /* @__PURE__ */ n("div", { className: e.headerIcon, children: /* @__PURE__ */ n(r, { name: "bell", variant: "regular" }) })
          ] })
        ] }) }),
        d && /* @__PURE__ */ n("div", { className: e.gab, children: /* @__PURE__ */ a("button", { className: e.createButton, onClick: d.onClick, children: [
          /* @__PURE__ */ n("div", { className: e.createIcon, children: /* @__PURE__ */ n(r, { name: "plus", variant: "regular" }) }),
          /* @__PURE__ */ n("div", { className: e.createLabel, children: d.label }),
          /* @__PURE__ */ n("div", { className: e.createChevron, children: /* @__PURE__ */ n(r, { name: "chevron-down", variant: "solid" }) })
        ] }) })
      ] }),
      b.length > 0 && /* @__PURE__ */ n("div", { className: e.navGroup, children: b.map(v) }),
      l.length > 0 && /* @__PURE__ */ n("div", { className: e.divider, children: /* @__PURE__ */ n("div", { className: e.dividerLine }) }),
      l.length > 0 && /* @__PURE__ */ n("div", { className: e.navGroup, children: l.map(v) }),
      m.length > 0 && /* @__PURE__ */ n("div", { className: e.divider, children: /* @__PURE__ */ n("div", { className: e.dividerLine }) }),
      m.length > 0 && /* @__PURE__ */ n("div", { className: i(e.navGroup, e.navGroupBottom), children: m.map(v) }),
      /* @__PURE__ */ a("div", { className: e.bottomGroup, children: [
        I && /* @__PURE__ */ n("div", { className: e.referSection, children: /* @__PURE__ */ a("button", { className: e.referButton, onClick: z, children: [
          /* @__PURE__ */ n("div", { className: e.referIcon, children: /* @__PURE__ */ n(r, { name: "gift", variant: "light" }) }),
          /* @__PURE__ */ n("div", { className: e.referLabel, children: "Refer & earn" })
        ] }) }),
        o && /* @__PURE__ */ n("div", { className: e.userAccount, children: /* @__PURE__ */ n("button", { className: e.userButton, children: /* @__PURE__ */ a("div", { className: e.userContent, children: [
          /* @__PURE__ */ n("div", { className: e.userIcon, children: o.avatar || /* @__PURE__ */ n(r, { name: "circle-user", variant: "light" }) }),
          /* @__PURE__ */ a("div", { className: e.userText, children: [
            /* @__PURE__ */ n("div", { className: e.userName, children: o.name }),
            o.company && /* @__PURE__ */ n("div", { className: e.userCompany, children: o.company })
          ] }),
          /* @__PURE__ */ n("div", { className: e.userCaret, children: /* @__PURE__ */ n(r, { name: "chevron-down", variant: "solid" }) })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ n("div", { className: e.curvedEdge, children: /* @__PURE__ */ n("div", { className: e.curvedShape }) })
  ] });
}
export {
  Ie as S
};
//# sourceMappingURL=SideNav-De6rlSNh.js.map
