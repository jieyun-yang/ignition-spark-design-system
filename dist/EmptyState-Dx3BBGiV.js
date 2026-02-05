import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { c as i } from "./clsx-OuTLNxxd.js";
import { I as d } from "./Illustration-BFeff8GD.js";
const u = "_emptyState_6ome7_6", p = "_illustration_6ome7_32", h = "_content_6ome7_44", b = "_heading_6ome7_63", y = "_description_6ome7_85", N = "_actions_6ome7_106", g = "_button_6ome7_112", z = "_primaryButton_6ome7_129", B = "_secondaryButton_6ome7_142", t = {
  emptyState: u,
  "size-large": "_size-large_6ome7_16",
  "size-medium": "_size-medium_6ome7_21",
  "size-small": "_size-small_6ome7_26",
  illustration: p,
  content: h,
  heading: b,
  description: y,
  actions: N,
  button: g,
  primaryButton: z,
  secondaryButton: B
};
function v({
  illustration: n,
  heading: m,
  description: l,
  size: c = "large",
  primaryAction: o,
  secondaryAction: s,
  className: _
}) {
  const r = typeof n == "string";
  return /* @__PURE__ */ a("div", { className: i(t.emptyState, t[`size-${c}`], _), children: [
    n && /* @__PURE__ */ e("div", { className: t.illustration, children: r ? /* @__PURE__ */ e(
      d,
      {
        name: n,
        size: "small"
      }
    ) : n }),
    /* @__PURE__ */ a("div", { className: t.content, children: [
      /* @__PURE__ */ e("h3", { className: t.heading, children: m }),
      l && /* @__PURE__ */ e("p", { className: t.description, children: l })
    ] }),
    (o || s) && /* @__PURE__ */ a("div", { className: t.actions, children: [
      s && /* @__PURE__ */ e(
        "button",
        {
          className: i(t.button, t.secondaryButton),
          onClick: s.onClick,
          children: s.label
        }
      ),
      o && /* @__PURE__ */ e(
        "button",
        {
          className: i(t.button, t.primaryButton),
          onClick: o.onClick,
          children: o.label
        }
      )
    ] })
  ] });
}
export {
  v as E
};
//# sourceMappingURL=EmptyState-Dx3BBGiV.js.map
