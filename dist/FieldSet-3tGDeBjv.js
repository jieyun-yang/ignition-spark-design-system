import { jsx as t, jsxs as n } from "react/jsx-runtime";
const h = "_fieldSet_hh1g6_3", a = "_container_hh1g6_11", o = "_header_hh1g6_19", r = "_headerContent_hh1g6_25", l = "_icon_hh1g6_31", _ = "_title_hh1g6_39", v = "_divider_hh1g6_47", m = "_content_hh1g6_57", e = {
  fieldSet: h,
  container: a,
  header: o,
  headerContent: r,
  icon: l,
  title: _,
  divider: v,
  content: m
}, N = ({
  title: c,
  icon: i,
  children: d,
  className: s
}) => /* @__PURE__ */ t("div", { className: `${e.fieldSet} ${s || ""}`, children: /* @__PURE__ */ n("div", { className: e.container, children: [
  /* @__PURE__ */ n("div", { className: e.header, children: [
    /* @__PURE__ */ n("div", { className: e.headerContent, children: [
      i && /* @__PURE__ */ t("div", { className: e.icon, children: i }),
      /* @__PURE__ */ t("div", { className: e.title, children: c })
    ] }),
    /* @__PURE__ */ t("div", { className: e.divider })
  ] }),
  /* @__PURE__ */ t("div", { className: e.content, children: d })
] }) });
export {
  N as F
};
//# sourceMappingURL=FieldSet-3tGDeBjv.js.map
