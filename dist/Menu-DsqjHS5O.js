import { jsx as c, jsxs as a } from "react/jsx-runtime";
import d from "react";
import { I as o } from "./Icon-Cb8rh0Cw.js";
import { c as r } from "./clsx-OuTLNxxd.js";
const p = "_menu_vu22f_3", N = "_option_vu22f_18", C = "_disabled_vu22f_29", I = "_selected_vu22f_33", x = "_destructive_vu22f_46", k = "_label_vu22f_46", y = "_icon_vu22f_50", D = "_simpleIcon_vu22f_54", E = "_prominent_vu22f_68", j = "_iconContainer_vu22f_72", w = "_content_vu22f_99", K = "_caption_vu22f_118", n = {
  menu: p,
  option: N,
  disabled: C,
  selected: I,
  destructive: x,
  label: k,
  icon: y,
  simpleIcon: D,
  prominent: E,
  iconContainer: j,
  content: w,
  caption: K
}, g = ({
  options: _,
  onSelect: m,
  selectedValue: u,
  selectedValues: i,
  variant: l = "simple",
  className: v
}) => {
  const f = (e) => i ? i.includes(e) : e === u, t = (e) => {
    e.disabled || (e.onClick && e.onClick(), m(e.value));
  }, b = (e, s) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(s));
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: r(
        n.menu,
        l === "prominent" && n.prominent,
        v
      ),
      role: "listbox",
      children: _.map((e) => {
        const s = f(e.value);
        return /* @__PURE__ */ a(
          "div",
          {
            className: r(
              n.option,
              s && n.selected,
              e.disabled && n.disabled,
              e.destructive && n.destructive
            ),
            onClick: () => t(e),
            onKeyDown: (h) => b(h, e),
            role: "option",
            "aria-selected": s,
            "aria-disabled": e.disabled,
            tabIndex: e.disabled ? -1 : 0,
            children: [
              e.icon && (l === "prominent" ? /* @__PURE__ */ c("div", { className: n.iconContainer, children: d.isValidElement(e.icon) ? e.icon : /* @__PURE__ */ c(o, { name: e.icon, className: n.icon }) }) : /* @__PURE__ */ c("div", { className: n.simpleIcon, children: d.isValidElement(e.icon) ? e.icon : /* @__PURE__ */ c(o, { name: e.icon }) })),
              /* @__PURE__ */ a("div", { className: n.content, children: [
                /* @__PURE__ */ c("div", { className: n.label, children: e.label }),
                e.caption && /* @__PURE__ */ c("div", { className: n.caption, children: e.caption })
              ] })
            ]
          },
          e.value
        );
      })
    }
  );
};
export {
  g as M
};
//# sourceMappingURL=Menu-DsqjHS5O.js.map
