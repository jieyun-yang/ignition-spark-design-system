import { jsxs as n, jsx as c } from "react/jsx-runtime";
import { c as o } from "./clsx-OuTLNxxd.js";
const b = "_pageHeader_1a9qa_6", u = "_header_1a9qa_14", h = "_titleRow_1a9qa_21", m = "_title_1a9qa_21", q = "_titleIcon_1a9qa_39", N = "_actions_1a9qa_46", p = "_button_1a9qa_52", v = "_buttonIcon_1a9qa_69", I = "_primaryButton_1a9qa_75", B = "_secondaryButton_1a9qa_88", g = "_tabs_1a9qa_102", k = "_tab_1a9qa_102", C = "_tabActive_1a9qa_131", t = {
  pageHeader: b,
  header: u,
  titleRow: h,
  title: m,
  titleIcon: q,
  actions: N,
  button: p,
  buttonIcon: v,
  primaryButton: I,
  secondaryButton: B,
  tabs: g,
  tab: k,
  tabActive: C
};
function x({
  title: _,
  icon: i,
  tabs: s,
  primaryAction: a,
  secondaryAction: e,
  className: d
}) {
  return /* @__PURE__ */ n("div", { className: o(t.pageHeader, d), children: [
    /* @__PURE__ */ n("div", { className: t.header, children: [
      /* @__PURE__ */ c("div", { className: t.titleRow, children: /* @__PURE__ */ n("h1", { className: t.title, children: [
        _,
        i && /* @__PURE__ */ c("span", { className: t.titleIcon, children: i })
      ] }) }),
      (a || e) && /* @__PURE__ */ n("div", { className: t.actions, children: [
        e && /* @__PURE__ */ n(
          "button",
          {
            className: o(t.button, t.secondaryButton),
            onClick: e.onClick,
            children: [
              e.label,
              e.icon && /* @__PURE__ */ c("span", { className: t.buttonIcon, children: e.icon })
            ]
          }
        ),
        a && /* @__PURE__ */ n(
          "button",
          {
            className: o(t.button, t.primaryButton),
            onClick: a.onClick,
            children: [
              a.icon && /* @__PURE__ */ c("span", { className: t.buttonIcon, children: a.icon }),
              a.label
            ]
          }
        )
      ] })
    ] }),
    s && s.length > 0 && /* @__PURE__ */ c("div", { className: t.tabs, children: s.map((l, r) => /* @__PURE__ */ c(
      "button",
      {
        className: o(t.tab, l.active && t.tabActive),
        onClick: l.onClick,
        children: l.label
      },
      r
    )) })
  ] });
}
export {
  x as P
};
//# sourceMappingURL=PageHeader-CRYiDpi5.js.map
