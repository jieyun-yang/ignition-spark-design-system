import { jsxs as t, jsx as e, Fragment as N } from "react/jsx-runtime";
import { useState as k } from "react";
import { I as l } from "./Icon-Cb8rh0Cw.js";
import { c as m } from "./clsx-OuTLNxxd.js";
const L = "_tableHeader_rta27_10", v = "_leftSection_rta27_20", A = "_searchWrapper_rta27_28", B = "_searchIcon_rta27_41", S = "_searchInput_rta27_52", W = "_filtersButton_rta27_70", y = "_filterIcon_rta27_88", x = "_filtersLabel_rta27_98", H = "_summary_rta27_108", g = "_resultsCount_rta27_115", C = "_resultsLabel_rta27_123", j = "_separator_rta27_131", V = "_amountWrapper_rta27_139", q = "_amount_rta27_139", F = "_amountIcon_rta27_154", T = "_bulkActions_rta27_166", w = "_bulkActionButton_rta27_173", z = "_disabled_rta27_188", D = "_bulkActionIcon_rta27_197", E = "_bulkActionLabel_rta27_207", a = {
  tableHeader: L,
  leftSection: v,
  searchWrapper: A,
  searchIcon: B,
  searchInput: S,
  filtersButton: W,
  filterIcon: y,
  filtersLabel: x,
  summary: H,
  resultsCount: g,
  resultsLabel: C,
  separator: j,
  amountWrapper: V,
  amount: q,
  amountIcon: F,
  bulkActions: T,
  bulkActionButton: w,
  disabled: z,
  bulkActionIcon: D,
  bulkActionLabel: E
}, O = ({
  searchPlaceholder: d = "Search...",
  searchValue: b = "",
  onSearchChange: o,
  onFiltersClick: i,
  resultsCount: r,
  totalAmount: c,
  amountTooltip: _,
  bulkActions: u = [],
  className: p
}) => {
  const [h, I] = k(b), f = (s) => {
    const n = s.target.value;
    I(n), o && o(n);
  };
  return /* @__PURE__ */ t("div", { className: m(a.tableHeader, p), children: [
    /* @__PURE__ */ t("div", { className: a.leftSection, children: [
      /* @__PURE__ */ t("div", { className: a.searchWrapper, children: [
        /* @__PURE__ */ e(l, { name: "search", className: a.searchIcon }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: d,
            value: h,
            onChange: f,
            className: a.searchInput
          }
        )
      ] }),
      i && /* @__PURE__ */ t("button", { onClick: i, className: a.filtersButton, children: [
        /* @__PURE__ */ e(l, { name: "sliders", className: a.filterIcon }),
        /* @__PURE__ */ e("span", { className: a.filtersLabel, children: "Filters" })
      ] }),
      (r !== void 0 || c) && /* @__PURE__ */ t("div", { className: a.summary, children: [
        r !== void 0 && /* @__PURE__ */ t(N, { children: [
          /* @__PURE__ */ e("span", { className: a.resultsCount, children: r }),
          /* @__PURE__ */ e("span", { className: a.resultsLabel, children: " results" })
        ] }),
        r !== void 0 && c && /* @__PURE__ */ e("span", { className: a.separator, children: "•" }),
        c && /* @__PURE__ */ t("div", { className: a.amountWrapper, children: [
          /* @__PURE__ */ e("span", { className: a.amount, children: c }),
          _ && /* @__PURE__ */ e(
            l,
            {
              name: "circle-question",
              className: a.amountIcon,
              "aria-label": _
            }
          )
        ] })
      ] })
    ] }),
    u.length > 0 && /* @__PURE__ */ e("div", { className: a.bulkActions, children: u.map((s, n) => /* @__PURE__ */ t(
      "button",
      {
        onClick: s.onClick,
        disabled: s.disabled,
        className: m(
          a.bulkActionButton,
          s.disabled && a.disabled
        ),
        children: [
          s.icon && /* @__PURE__ */ e(l, { name: s.icon, className: a.bulkActionIcon }),
          /* @__PURE__ */ e("span", { className: a.bulkActionLabel, children: s.label })
        ]
      },
      n
    )) })
  ] });
};
export {
  O as T
};
//# sourceMappingURL=TableHeader-DvpEuJ4s.js.map
