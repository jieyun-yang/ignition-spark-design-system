import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { useState as k, useRef as D, useEffect as U } from "react";
import { createPortal as V } from "react-dom";
import { c as d } from "./clsx-OuTLNxxd.js";
import { I as P } from "./Icon-Cb8rh0Cw.js";
import { C as $ } from "./Checkbox-apGzaK5F.js";
import { M as X } from "./Menu-DsqjHS5O.js";
const Y = "_tableContainer_1yn8m_6", Z = "_table_1yn8m_6", K = "_thead_1yn8m_22", ee = "_th_1yn8m_22", te = "_sortable_1yn8m_42", ne = "_headerContent_1yn8m_51", le = "_sortIcon_1yn8m_57", oe = "_tbody_1yn8m_68", se = "_tr_1yn8m_72", ce = "_td_1yn8m_76", ae = "_selected_1yn8m_84", ie = "_clickable_1yn8m_92", re = "_checkboxCell_1yn8m_109", de = "_actionsCell_1yn8m_115", he = "_actionButton_1yn8m_120", me = "_portalMenu_1yn8m_151", ue = "_emptyCell_1yn8m_160", t = {
  tableContainer: Y,
  table: Z,
  thead: K,
  th: ee,
  sortable: te,
  headerContent: ne,
  sortIcon: le,
  tbody: oe,
  tr: se,
  td: ce,
  selected: ae,
  clickable: ie,
  checkboxCell: re,
  actionsCell: de,
  actionButton: he,
  portalMenu: me,
  emptyCell: ue
};
function ke(j) {
  const {
    columns: p,
    data: r,
    selectable: S = !1,
    selectedRows: i = [],
    onSelectionChange: h,
    getRowKey: E = (e, n) => n.toString(),
    sortBy: N,
    sortDirection: v,
    onSortChange: I,
    showActions: M = !1,
    onActionClick: x,
    getActionMenuOptions: w,
    emptyMessage: T = "No data available",
    className: z,
    onRowClick: f
  } = j, [L, W] = k({
    key: N || "",
    direction: v || null
  }), [a, y] = k(null), [R, u] = k(null), [B, g] = k(null), _ = D(/* @__PURE__ */ new Map()), O = D(null), A = N !== void 0 ? N : L.key, C = v !== void 0 ? v : L.direction, q = (e) => {
    const n = p.find((c) => c.key === e);
    if (!(n != null && n.sortable)) return;
    let l = "asc";
    A === e && (C === "asc" ? l = "desc" : C === "desc" && (l = null)), I ? I(e, l) : W({ key: e, direction: l });
  }, F = () => {
    h && (i.length === r.length ? h([]) : h(r.map((e, n) => E(e, n))));
  }, G = (e) => {
    h && (i.includes(e) ? h(i.filter((n) => n !== e)) : h([...i, e]));
  }, H = (e, n, l, c) => {
    if (e.stopPropagation(), w)
      if (a === c)
        y(null), u(null), g(null);
      else {
        const s = _.current.get(c);
        if (s) {
          const b = s.getBoundingClientRect();
          u({
            top: b.bottom + 4,
            left: b.right
          });
        }
        y(c), g({ row: n, rowIndex: l });
      }
    else
      x == null || x(n, l);
  };
  U(() => {
    const e = (l) => {
      if (a) {
        const c = _.current.get(a), s = O.current, b = l.target;
        c && !c.contains(b) && s && !s.contains(b) && (y(null), u(null), g(null));
      }
    }, n = () => {
      if (a) {
        const l = _.current.get(a);
        if (l) {
          const c = l.getBoundingClientRect();
          u({
            top: c.bottom + 4,
            left: c.right
          });
        }
      }
    };
    if (a)
      return document.addEventListener("mousedown", e), window.addEventListener("scroll", n, !0), () => {
        document.removeEventListener("mousedown", e), window.removeEventListener("scroll", n, !0);
      };
  }, [a]);
  const J = r.length > 0 && i.length === r.length, Q = i.length > 0 && i.length < r.length;
  return /* @__PURE__ */ m("div", { className: d(t.tableContainer, z), children: [
    /* @__PURE__ */ m("table", { className: t.table, children: [
      /* @__PURE__ */ o("thead", { className: t.thead, children: /* @__PURE__ */ m("tr", { children: [
        S && /* @__PURE__ */ o("th", { className: d(t.th, t.checkboxCell), children: /* @__PURE__ */ o(
          $,
          {
            checked: J,
            indeterminate: Q,
            onChange: F,
            "aria-label": "Select all rows"
          }
        ) }),
        p.map((e) => /* @__PURE__ */ o(
          "th",
          {
            className: d(
              t.th,
              e.sortable && t.sortable
            ),
            style: { width: e.width, textAlign: e.align || "left" },
            onClick: () => e.sortable && q(e.key),
            children: /* @__PURE__ */ m("div", { className: t.headerContent, children: [
              /* @__PURE__ */ o("span", { children: e.label }),
              e.sortable && /* @__PURE__ */ m("span", { className: t.sortIcon, children: [
                A === e.key && C === "asc" && /* @__PURE__ */ o(P, { name: "chevron-up" }),
                A === e.key && C === "desc" && /* @__PURE__ */ o(P, { name: "chevron-down" })
              ] })
            ] })
          },
          e.key
        )),
        M && /* @__PURE__ */ o("th", { className: d(t.th, t.actionsCell) })
      ] }) }),
      /* @__PURE__ */ o("tbody", { className: t.tbody, children: r.length === 0 ? /* @__PURE__ */ o("tr", { children: /* @__PURE__ */ o(
        "td",
        {
          colSpan: p.length + (S ? 1 : 0) + (M ? 1 : 0),
          className: t.emptyCell,
          children: T
        }
      ) }) : r.map((e, n) => {
        const l = E(e, n), c = i.includes(l);
        return /* @__PURE__ */ m(
          "tr",
          {
            className: d(
              t.tr,
              c && t.selected,
              f && t.clickable
            ),
            onClick: () => f == null ? void 0 : f(e, n),
            children: [
              S && /* @__PURE__ */ o("td", { className: d(t.td, t.checkboxCell), children: /* @__PURE__ */ o(
                $,
                {
                  checked: c,
                  onChange: () => G(l),
                  "aria-label": `Select row ${n + 1}`
                }
              ) }),
              p.map((s) => /* @__PURE__ */ o(
                "td",
                {
                  className: t.td,
                  style: { textAlign: s.align || "left" },
                  children: s.render ? s.render(e, n) : e[s.key]
                },
                s.key
              )),
              M && /* @__PURE__ */ o("td", { className: d(t.td, t.actionsCell), children: /* @__PURE__ */ o(
                "button",
                {
                  ref: (s) => {
                    s ? _.current.set(l, s) : _.current.delete(l);
                  },
                  className: t.actionButton,
                  onClick: (s) => H(s, e, n, l),
                  "aria-label": "Row actions",
                  "aria-expanded": a === l,
                  children: /* @__PURE__ */ o(P, { name: "ellipsis-vertical" })
                }
              ) })
            ]
          },
          l
        );
      }) })
    ] }),
    a && R && B && w && V(
      /* @__PURE__ */ o(
        "div",
        {
          ref: O,
          style: {
            position: "fixed",
            top: `${R.top}px`,
            right: `${window.innerWidth - R.left + 4}px`,
            zIndex: 1e3
          },
          children: /* @__PURE__ */ o("div", { style: { position: "static" }, children: /* @__PURE__ */ o(
            X,
            {
              options: w(B.row, B.rowIndex),
              onSelect: () => {
                y(null), u(null), g(null);
              },
              className: t.portalMenu
            }
          ) })
        }
      ),
      document.body
    )
  ] });
}
export {
  ke as T
};
//# sourceMappingURL=Table-bjhS_cd6.js.map
