import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { I as b } from "./Icon-Cb8rh0Cw.js";
import { c as s } from "./clsx-OuTLNxxd.js";
const f = "_pagination_1k9xc_6", k = "_navButton_1k9xc_13", x = "_disabled_1k9xc_29", y = "_pageButton_1k9xc_40", B = "_active_1k9xc_59", t = {
  pagination: f,
  navButton: k,
  disabled: x,
  pageButton: y,
  active: B
}, F = ({
  currentPage: n,
  totalPages: o,
  onPageChange: l,
  className: _,
  maxPageButtons: e = 10
}) => {
  const r = n === 1, d = n === o, m = (() => {
    if (o <= e)
      return Array.from({ length: o }, (u, p) => p + 1);
    const i = Math.floor(e / 2);
    let c = Math.max(1, n - i), v = Math.min(o, c + e - 1);
    return v - c + 1 < e && (c = Math.max(1, v - e + 1)), Array.from({ length: v - c + 1 }, (u, p) => c + p);
  })();
  return /* @__PURE__ */ h("div", { className: s(t.pagination, _), children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: s(t.navButton, r && t.disabled),
        onClick: () => l(1),
        disabled: r,
        "aria-label": "First page",
        children: /* @__PURE__ */ a(b, { name: "angles-left", variant: "solid" })
      }
    ),
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: s(t.navButton, r && t.disabled),
        onClick: () => l(n - 1),
        disabled: r,
        "aria-label": "Previous page",
        children: /* @__PURE__ */ a(b, { name: "chevron-left", variant: "solid" })
      }
    ),
    m.map((i) => /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: s(
          t.pageButton,
          n === i && t.active
        ),
        onClick: () => l(i),
        "aria-label": `Page ${i}`,
        "aria-current": n === i ? "page" : void 0,
        children: i
      },
      i
    )),
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: s(t.navButton, d && t.disabled),
        onClick: () => l(n + 1),
        disabled: d,
        "aria-label": "Next page",
        children: /* @__PURE__ */ a(b, { name: "chevron-right", variant: "solid" })
      }
    ),
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: s(t.navButton, d && t.disabled),
        onClick: () => l(o),
        disabled: d,
        "aria-label": "Last page",
        children: /* @__PURE__ */ a(b, { name: "angles-right", variant: "solid" })
      }
    )
  ] });
};
export {
  F as P
};
//# sourceMappingURL=Pagination-Bw59E8lJ.js.map
