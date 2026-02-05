import { jsx as i } from "react/jsx-runtime";
import { c as o } from "./clsx-OuTLNxxd.js";
const l = "_skeleton_fx0y3_15", _ = "_shimmer_fx0y3_1", e = {
  skeleton: l,
  shimmer: _,
  "variant-text": "_variant-text_fx0y3_38",
  "variant-circular": "_variant-circular_fx0y3_44",
  "variant-rectangular": "_variant-rectangular_fx0y3_49"
};
function x({
  width: t,
  height: r,
  variant: n = "text",
  className: s
}) {
  const a = {};
  return t !== void 0 && (a.width = typeof t == "number" ? `${t}px` : t), r !== void 0 && (a.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ i(
    "div",
    {
      className: o(
        e.skeleton,
        e[`variant-${n}`],
        s
      ),
      style: a,
      "aria-busy": "true",
      "aria-live": "polite"
    }
  );
}
export {
  x as S
};
//# sourceMappingURL=Skeleton-BCt8pnGP.js.map
