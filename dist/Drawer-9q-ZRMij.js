import { jsx as n, jsxs as o } from "react/jsx-runtime";
import { useState as E, useRef as D, useEffect as I } from "react";
import { c as w } from "./clsx-OuTLNxxd.js";
import { I as u } from "./Icon-Cb8rh0Cw.js";
import { B as R } from "./Badge-WHVddo7e.js";
import { T as C } from "./Tabs-CwaA9YsE.js";
const L = "_overlay_n52ak_8", M = "_drawer_n52ak_28", j = "_header_n52ak_48", z = "_headerContent_n52ak_55", O = "_headerContentNoTabs_n52ak_62", T = "_titleSection_n52ak_66", $ = "_titleRow_n52ak_74", q = "_title_n52ak_66", F = "_subtitle_n52ak_89", G = "_actions_n52ak_99", H = "_moreActionsWrapper_n52ak_106", J = "_moreActionsButton_n52ak_110", K = "_chevronIcon_n52ak_132", P = "_moreActionsDropdown_n52ak_137", Q = "_moreActionItem_n52ak_150", U = "_actionIcon_n52ak_171", X = "_primaryButton_n52ak_176", Y = "_buttonIcon_n52ak_202", Z = "_closeButton_n52ak_207", V = "_headerCustomContent_n52ak_228", ee = "_tabsWrapper_n52ak_233", ne = "_tabsSegmentInBody_n52ak_237", te = "_divider_n52ak_241", oe = "_body_n52ak_247", e = {
  overlay: L,
  drawer: M,
  header: j,
  headerContent: z,
  headerContentNoTabs: O,
  titleSection: T,
  titleRow: $,
  title: q,
  subtitle: F,
  actions: G,
  moreActionsWrapper: H,
  moreActionsButton: J,
  chevronIcon: K,
  moreActionsDropdown: P,
  moreActionItem: Q,
  actionIcon: U,
  primaryButton: X,
  buttonIcon: Y,
  closeButton: Z,
  headerCustomContent: V,
  tabsWrapper: ee,
  tabsSegmentInBody: ne,
  divider: te,
  body: oe
}, de = ({
  isOpen: i,
  onClose: l,
  title: b,
  subtitle: v,
  badge: N,
  badgeVariant: B = "green",
  headerContent: f,
  primaryAction: a,
  moreActions: y = [],
  tabs: r,
  activeTab: d,
  onTabChange: m,
  tabVariant: _ = "underline",
  children: A,
  className: g,
  disableOverlayClick: S = !1,
  width: h = 700
}) => {
  const [s, k] = E(!1), p = D(null);
  if (I(() => {
    const t = (c) => {
      c.key === "Escape" && i && l();
    };
    return i && (document.addEventListener("keydown", t), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", t), document.body.style.overflow = "";
    };
  }, [i, l]), I(() => {
    const t = (c) => {
      p.current && !p.current.contains(c.target) && k(!1);
    };
    if (s)
      return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, [s]), !i) return null;
  const W = (t) => {
    t.target === t.currentTarget && !S && l();
  }, x = (t) => {
    t.onClick(), k(!1);
  };
  return /* @__PURE__ */ n("div", { className: e.overlay, onClick: W, children: /* @__PURE__ */ o(
    "div",
    {
      className: w(e.drawer, g),
      style: { width: typeof h == "number" ? `${h}px` : h },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "drawer-title",
      children: [
        /* @__PURE__ */ o("div", { className: e.header, children: [
          /* @__PURE__ */ o("div", { className: w(
            e.headerContent,
            (!r || r.length === 0) && e.headerContentNoTabs
          ), children: [
            /* @__PURE__ */ o("div", { className: e.titleSection, children: [
              /* @__PURE__ */ o("div", { className: e.titleRow, children: [
                /* @__PURE__ */ n("h2", { id: "drawer-title", className: e.title, children: b }),
                N && /* @__PURE__ */ n(R, { variant: B, size: "small", children: N })
              ] }),
              v && /* @__PURE__ */ n("p", { className: e.subtitle, children: v })
            ] }),
            /* @__PURE__ */ o("div", { className: e.actions, children: [
              y.length > 0 && /* @__PURE__ */ o("div", { className: e.moreActionsWrapper, ref: p, children: [
                /* @__PURE__ */ o(
                  "button",
                  {
                    className: e.moreActionsButton,
                    onClick: () => k(!s),
                    "aria-expanded": s,
                    children: [
                      /* @__PURE__ */ n("span", { children: "More actions" }),
                      /* @__PURE__ */ n(u, { name: "chevron-down", variant: "solid", className: e.chevronIcon })
                    ]
                  }
                ),
                s && /* @__PURE__ */ n("div", { className: e.moreActionsDropdown, children: y.map((t, c) => /* @__PURE__ */ o(
                  "button",
                  {
                    className: e.moreActionItem,
                    onClick: () => x(t),
                    children: [
                      t.icon && /* @__PURE__ */ n(u, { name: t.icon, className: e.actionIcon }),
                      /* @__PURE__ */ n("span", { children: t.label })
                    ]
                  },
                  c
                )) })
              ] }),
              a && /* @__PURE__ */ o(
                "button",
                {
                  className: e.primaryButton,
                  onClick: a.onClick,
                  children: [
                    a.icon && /* @__PURE__ */ n(u, { name: a.icon, className: e.buttonIcon }),
                    /* @__PURE__ */ n("span", { children: a.label })
                  ]
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  className: e.closeButton,
                  onClick: l,
                  "aria-label": "Close drawer",
                  children: /* @__PURE__ */ n(u, { name: "xmark", variant: "solid" })
                }
              )
            ] })
          ] }),
          f && /* @__PURE__ */ n("div", { className: e.headerCustomContent, children: f }),
          r && r.length > 0 && d && m && _ === "underline" && /* @__PURE__ */ n(
            C,
            {
              tabs: r,
              activeTab: d,
              onTabChange: m,
              variant: _,
              className: e.tabsWrapper
            }
          ),
          /* @__PURE__ */ n("div", { className: e.divider })
        ] }),
        /* @__PURE__ */ o("div", { className: e.body, children: [
          r && r.length > 0 && d && m && _ === "segment" && /* @__PURE__ */ n(
            C,
            {
              tabs: r,
              activeTab: d,
              onTabChange: m,
              variant: _,
              className: e.tabsSegmentInBody
            }
          ),
          A
        ] })
      ]
    }
  ) });
};
export {
  de as D
};
//# sourceMappingURL=Drawer-9q-ZRMij.js.map
