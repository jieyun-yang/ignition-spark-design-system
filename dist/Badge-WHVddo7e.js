import { jsx as _ } from "react/jsx-runtime";
import { c as i } from "./clsx-OuTLNxxd.js";
const t = "_badge_ugsn6_10", a = {
  badge: t,
  "size-tiny": "_size-tiny_ugsn6_21",
  "size-small": "_size-small_ugsn6_27",
  "size-large": "_size-large_ugsn6_33",
  "variant-green": "_variant-green_ugsn6_42",
  "variant-red": "_variant-red_ugsn6_48",
  "variant-grey": "_variant-grey_ugsn6_54",
  "variant-yellow": "_variant-yellow_ugsn6_60",
  "variant-blue": "_variant-blue_ugsn6_66"
}, u = ({
  children: e,
  variant: n = "grey",
  size: s = "tiny",
  className: r
}) => /* @__PURE__ */ _(
  "span",
  {
    className: i(
      a.badge,
      a[`variant-${n}`],
      a[`size-${s}`],
      r
    ),
    children: e
  }
);
export {
  u as B
};
//# sourceMappingURL=Badge-WHVddo7e.js.map
