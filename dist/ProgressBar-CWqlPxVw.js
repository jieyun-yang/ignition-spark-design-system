import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { c as n } from "./clsx-OuTLNxxd.js";
const v = "_progressBar_smno6_6", p = "_labelContainer_smno6_14", d = "_label_smno6_14", g = "_track_smno6_28", b = "_fill_smno6_49", a = {
  progressBar: v,
  labelContainer: p,
  label: d,
  track: g,
  "size-small": "_size-small_smno6_36",
  "size-medium": "_size-medium_smno6_40",
  "size-large": "_size-large_smno6_44",
  fill: b,
  "variant-primary": "_variant-primary_smno6_55",
  "variant-success": "_variant-success_smno6_59",
  "variant-warning": "_variant-warning_smno6_63",
  "variant-error": "_variant-error_smno6_67"
};
function h({
  value: s,
  max: e = 100,
  showLabel: i = !1,
  label: l,
  size: o = "medium",
  variant: _ = "primary",
  className: t
}) {
  const m = Math.min(Math.max(s / e * 100, 0), 100);
  return /* @__PURE__ */ c("div", { className: n(a.progressBar, t), children: [
    i && /* @__PURE__ */ r("div", { className: a.labelContainer, children: /* @__PURE__ */ r("span", { className: a.label, children: l || `${s}/${e}` }) }),
    /* @__PURE__ */ r(
      "div",
      {
        className: n(
          a.track,
          a[`size-${o}`]
        ),
        role: "progressbar",
        "aria-valuenow": s,
        "aria-valuemin": 0,
        "aria-valuemax": e,
        children: /* @__PURE__ */ r(
          "div",
          {
            className: n(a.fill, a[`variant-${_}`]),
            style: { width: `${m}%` }
          }
        )
      }
    )
  ] });
}
export {
  h as P
};
//# sourceMappingURL=ProgressBar-CWqlPxVw.js.map
