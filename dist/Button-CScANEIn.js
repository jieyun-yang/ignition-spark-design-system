import { jsxs as q, jsx as s } from "react/jsx-runtime";
import p from "react";
import { c as v } from "./clsx-OuTLNxxd.js";
const f = "_button_1xq79_12", z = "_icon_1xq79_42", g = "_label_1xq79_49", N = "_disabled_1xq79_237", a = {
  button: f,
  icon: z,
  label: g,
  "size-small": "_size-small_1xq79_56",
  "icon-only": "_icon-only_1xq79_68",
  "size-medium": "_size-medium_1xq79_73",
  "size-large": "_size-large_1xq79_90",
  "size-xlarge": "_size-xlarge_1xq79_107",
  "hierarchy-primary": "_hierarchy-primary_1xq79_125",
  "variant-solid": "_variant-solid_1xq79_125",
  "hierarchy-secondary": "_hierarchy-secondary_1xq79_139",
  "hierarchy-tertiary": "_hierarchy-tertiary_1xq79_153",
  "variant-ghost": "_variant-ghost_1xq79_153",
  "hierarchy-destructive": "_hierarchy-destructive_1xq79_167",
  "variant-text": "_variant-text_1xq79_195",
  disabled: N
}, B = p.forwardRef(
  ({
    children: r,
    hierarchy: c = "primary",
    variant: h = "solid",
    icon: o = "none",
    iconLeft: t,
    iconRight: i,
    iconOnly: l,
    size: x = "medium",
    type: y = "button",
    disabled: _ = !1,
    onClick: m,
    className: d,
    "aria-label": n
  }, u) => {
    o === "only" && !n && !r && console.warn("Button: icon-only buttons should have an aria-label for accessibility");
    const e = l ? "only" : t ? "left" : i ? "right" : o, b = v(
      a.button,
      a[`hierarchy-${c}`],
      a[`variant-${h}`],
      a[`icon-${e}`],
      a[`size-${x}`],
      _ && a.disabled,
      d
    );
    return /* @__PURE__ */ q(
      "button",
      {
        ref: u,
        type: y,
        className: b,
        disabled: _,
        onClick: m,
        "aria-label": n,
        children: [
          e === "left" && t && /* @__PURE__ */ s("span", { className: a.icon, children: t }),
          e === "only" && l && /* @__PURE__ */ s("span", { className: a.icon, children: l }),
          e !== "only" && r && /* @__PURE__ */ s("span", { className: a.label, children: r }),
          e === "right" && i && /* @__PURE__ */ s("span", { className: a.icon, children: i })
        ]
      }
    );
  }
);
B.displayName = "Button";
export {
  B
};
//# sourceMappingURL=Button-CScANEIn.js.map
