import { jsxs as s, jsx as n } from "react/jsx-runtime";
import { c as o } from "../clsx-OuTLNxxd.js";
const r = "_layout_5x0av_7", d = "_mainContent_5x0av_14", l = "_contentWrapper_5x0av_21", _ = "_pageHeader_5x0av_26", p = "_pageTitle_5x0av_33", m = "_headerActions_5x0av_42", v = "_sectionHeader_5x0av_47", h = "_sectionMeta_5x0av_54", x = "_sectionActions_5x0av_60", e = {
  layout: r,
  mainContent: d,
  contentWrapper: l,
  pageHeader: _,
  pageTitle: p,
  headerActions: m,
  sectionHeader: v,
  sectionMeta: h,
  sectionActions: x
};
function i({ sideNav: t, children: a, className: c }) {
  return /* @__PURE__ */ s("div", { className: o(e.layout, c), children: [
    t,
    /* @__PURE__ */ n("div", { className: e.mainContent, children: /* @__PURE__ */ n("div", { className: e.contentWrapper, children: a }) })
  ] });
}
function H({ title: t, actions: a, className: c }) {
  return /* @__PURE__ */ s("div", { className: o(e.pageHeader, c), children: [
    /* @__PURE__ */ n("h2", { className: e.pageTitle, children: t }),
    a && /* @__PURE__ */ n("div", { className: e.headerActions, children: a })
  ] });
}
function u({ meta: t, actions: a, className: c }) {
  return /* @__PURE__ */ s("div", { className: o(e.sectionHeader, c), children: [
    t && /* @__PURE__ */ n("div", { className: e.sectionMeta, children: t }),
    a && /* @__PURE__ */ n("div", { className: e.sectionActions, children: a })
  ] });
}
i.PageHeader = H;
i.SectionHeader = u;
export {
  i as TemplateLayout
};
//# sourceMappingURL=TemplateLayout.js.map
