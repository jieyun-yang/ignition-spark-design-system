import { jsx as o } from "react/jsx-runtime";
import { c } from "./clsx-OuTLNxxd.js";
import { B as e } from "./Button-CScANEIn.js";
const l = "_actionBar_h3dxd_10", _ = "_actions_h3dxd_19", a = {
  actionBar: l,
  actions: _,
  "position-left": "_position-left_h3dxd_26",
  "position-right": "_position-right_h3dxd_30",
  "variant-workflow": "_variant-workflow_h3dxd_41",
  "variant-equal-weight": "_variant-equal-weight_h3dxd_46",
  "variant-primary-action": "_variant-primary-action_h3dxd_51"
}, v = ({
  actions: r,
  variant: t = "workflow",
  position: n = "left",
  className: s
}) => /* @__PURE__ */ o(
  "div",
  {
    className: c(
      a.actionBar,
      a[`position-${n}`],
      a[`variant-${t}`],
      s
    ),
    children: /* @__PURE__ */ o("div", { className: a.actions, children: r.map((i, d) => /* @__PURE__ */ o(
      e,
      {
        hierarchy: i.hierarchy || "secondary",
        variant: i.variant || "solid",
        size: "medium",
        onClick: i.onClick,
        disabled: i.disabled,
        iconLeft: i.icon,
        children: i.label
      },
      d
    )) })
  }
);
export {
  v as A
};
//# sourceMappingURL=ActionBar-QkA4tyPb.js.map
