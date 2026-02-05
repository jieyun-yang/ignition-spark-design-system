import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { c as d } from "./clsx-OuTLNxxd.js";
const _ = "_dataListContainer_1j7rv_10", v = "_large_1j7rv_16", m = "_header_1j7rv_16", p = "_small_1j7rv_26", h = "_dataList_1j7rv_10", j = "_dataPointWrapper_1j7rv_42", N = "_itemWrapper_1j7rv_48", u = "_separator_1j7rv_54", L = "_dataPoint_1j7rv_42", P = "_item_1j7rv_48", W = "_label_1j7rv_101", b = "_value_1j7rv_120", a = {
  dataListContainer: _,
  large: v,
  header: m,
  small: p,
  dataList: h,
  dataPointWrapper: j,
  itemWrapper: N,
  separator: u,
  dataPoint: L,
  item: P,
  label: W,
  value: b
}, C = ({
  items: s,
  variant: c = "data-list",
  size: l = "large",
  header: i,
  className: n
}) => {
  if (c === "data-point" && s.length > 0) {
    const e = s[0];
    return /* @__PURE__ */ r("div", { className: d(a.dataPointWrapper, a[l], n), children: [
      /* @__PURE__ */ t("div", { className: a.separator }),
      /* @__PURE__ */ r("div", { className: a.dataPoint, children: [
        /* @__PURE__ */ t("div", { className: a.label, children: e.label }),
        /* @__PURE__ */ t("div", { className: a.value, children: e.value })
      ] })
    ] });
  }
  return /* @__PURE__ */ r("div", { className: d(a.dataListContainer, a[l], n), children: [
    i && /* @__PURE__ */ t("div", { className: a.header, children: i }),
    /* @__PURE__ */ t("div", { className: a.dataList, children: s.map((e, o) => /* @__PURE__ */ r("div", { className: a.itemWrapper, children: [
      /* @__PURE__ */ t("div", { className: a.separator }),
      /* @__PURE__ */ r("div", { className: a.item, children: [
        /* @__PURE__ */ t("div", { className: a.label, children: e.label }),
        /* @__PURE__ */ t("div", { className: a.value, children: e.value })
      ] })
    ] }, o)) })
  ] });
};
export {
  C as D
};
//# sourceMappingURL=DataList-B0jLVsdk.js.map
