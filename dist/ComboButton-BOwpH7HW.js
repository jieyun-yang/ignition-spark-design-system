import { jsxs as D, jsx as n } from "react/jsx-runtime";
import g from "react";
import { c as t } from "./clsx-OuTLNxxd.js";
import { I as C } from "./Icon-Cb8rh0Cw.js";
const N = "_comboButton_156tg_10", x = "_mainButton_156tg_18", v = "_label_156tg_34", j = "_menuButton_156tg_39", k = "_icon_156tg_52", w = "_mainDisabled_156tg_77", I = "_menuDisabled_156tg_102", a = {
  comboButton: N,
  mainButton: x,
  label: v,
  menuButton: j,
  icon: k,
  "hierarchy-primary": "_hierarchy-primary_156tg_58",
  mainDisabled: w,
  menuDisabled: I,
  "hierarchy-secondary": "_hierarchy-secondary_156tg_109"
}, M = g.forwardRef(
  ({
    children: i,
    hierarchy: l = "primary",
    onMainClick: c,
    onMenuClick: m,
    mainDisabled: r = !1,
    menuDisabled: u = !1,
    disabled: o = !1,
    type: b = "button",
    className: _,
    "aria-label": d,
    "aria-label-menu": B
  }, h) => {
    const e = o || r, s = o || u, p = t(
      a.comboButton,
      a[`hierarchy-${l}`],
      _
    ), y = t(
      a.mainButton,
      e && a.mainDisabled
    ), f = t(
      a.menuButton,
      s && a.menuDisabled
    );
    return /* @__PURE__ */ D("div", { ref: h, className: p, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: b,
          className: y,
          onClick: c,
          disabled: e,
          "aria-label": d,
          children: /* @__PURE__ */ n("span", { className: a.label, children: i })
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: f,
          onClick: m,
          disabled: s,
          "aria-label": B || "Open menu",
          "aria-haspopup": "true",
          children: /* @__PURE__ */ n(C, { name: "chevron-down", variant: "solid", className: a.icon })
        }
      )
    ] });
  }
);
M.displayName = "ComboButton";
export {
  M as C
};
//# sourceMappingURL=ComboButton-BOwpH7HW.js.map
