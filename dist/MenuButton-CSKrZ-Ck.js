import { jsxs as u, jsx as o } from "react/jsx-runtime";
import i from "react";
import { c as _ } from "./clsx-OuTLNxxd.js";
import { I as b } from "./Icon-Cb8rh0Cw.js";
const d = "_menuButton_1lmzc_9", p = "_label_1lmzc_29", f = "_icon_1lmzc_33", B = "_disabled_1lmzc_53", a = {
  menuButton: d,
  label: p,
  icon: f,
  disabled: B
}, x = i.forwardRef(
  ({
    children: n,
    onClick: s,
    disabled: t = !1,
    type: e = "button",
    className: l,
    "aria-label": c
  }, m) => {
    const r = _(
      a.menuButton,
      t && a.disabled,
      l
    );
    return /* @__PURE__ */ u(
      "button",
      {
        ref: m,
        type: e,
        className: r,
        onClick: s,
        disabled: t,
        "aria-label": c,
        "aria-haspopup": "true",
        children: [
          /* @__PURE__ */ o("span", { className: a.label, children: n }),
          /* @__PURE__ */ o(b, { name: "chevron-down", variant: "solid", className: a.icon })
        ]
      }
    );
  }
);
x.displayName = "MenuButton";
export {
  x as M
};
//# sourceMappingURL=MenuButton-CSKrZ-Ck.js.map
