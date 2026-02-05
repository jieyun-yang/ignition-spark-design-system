import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { useState as l, useRef as y, useEffect as A } from "react";
import { c as I } from "./clsx-OuTLNxxd.js";
import { I as N } from "./Icon-Cb8rh0Cw.js";
const E = "_filterWrapper_jc9i3_7", G = "_filterContainer_jc9i3_13", O = "_filter_jc9i3_7", W = "_hasValue_jc9i3_36", R = "_hovered_jc9i3_40", F = "_filterContent_jc9i3_54", H = "_labelGroup_jc9i3_62", M = "_subLabel_jc9i3_69", S = "_label_jc9i3_62", z = "_value_jc9i3_101", D = "_dropdownIcon_jc9i3_113", P = "_removeButton_jc9i3_133", T = "_popover_jc9i3_159", $ = "_popoverContent_jc9i3_172", q = "_optionsList_jc9i3_178", J = "_optionItem_jc9i3_186", K = "_radio_jc9i3_203", Q = "_optionLabel_jc9i3_211", U = "_customInput_jc9i3_217", X = "_textInput_jc9i3_222", Y = "_popoverActions_jc9i3_245", Z = "_doneButton_jc9i3_253", e = {
  filterWrapper: E,
  filterContainer: G,
  filter: O,
  hasValue: W,
  hovered: R,
  filterContent: F,
  labelGroup: H,
  subLabel: M,
  label: S,
  value: z,
  dropdownIcon: D,
  removeButton: P,
  popover: T,
  popoverContent: $,
  optionsList: q,
  optionItem: J,
  radio: K,
  optionLabel: Q,
  customInput: U,
  textInput: X,
  popoverActions: Y,
  doneButton: Z
};
function se({
  label: r,
  subLabel: p,
  value: a,
  options: C = [],
  allowCustomInput: d = !1,
  inputPlaceholder: L = "Enter value...",
  onApply: u,
  onRemove: _,
  className: x
}) {
  const [s, c] = l(!1), [m, B] = l(a || ""), [v, g] = l(""), [f, h] = l(!1), i = y(null), b = C.map(
    (t) => typeof t == "string" ? { label: t, value: t } : t
  );
  A(() => {
    function t(k) {
      i.current && !i.current.contains(k.target) && c(!1);
    }
    if (s)
      return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, [s]);
  const w = () => {
    const t = d ? v : m;
    t && u && u(t), c(!1);
  }, V = (t) => {
    t.stopPropagation(), _ && _();
  }, j = !!a;
  return /* @__PURE__ */ n("div", { className: I(e.filterWrapper, x), ref: i, children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: e.filterContainer,
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
          /* @__PURE__ */ n(
            "button",
            {
              className: I(
                e.filter,
                j && e.hasValue,
                f && e.hovered
              ),
              onClick: () => c(!s),
              "aria-expanded": s,
              children: [
                /* @__PURE__ */ n("div", { className: e.filterContent, children: [
                  /* @__PURE__ */ n("div", { className: e.labelGroup, children: [
                    p && /* @__PURE__ */ o("span", { className: e.subLabel, children: p }),
                    /* @__PURE__ */ o("span", { className: e.label, children: r })
                  ] }),
                  a && /* @__PURE__ */ o("span", { className: e.value, children: a })
                ] }),
                /* @__PURE__ */ o("span", { className: e.dropdownIcon, children: /* @__PURE__ */ o(N, { name: "chevron-down", variant: "solid" }) })
              ]
            }
          ),
          j && f && /* @__PURE__ */ o(
            "button",
            {
              className: e.removeButton,
              onClick: V,
              "aria-label": "Remove filter",
              children: /* @__PURE__ */ o(N, { name: "xmark", variant: "solid" })
            }
          )
        ]
      }
    ),
    s && /* @__PURE__ */ o("div", { className: e.popover, children: /* @__PURE__ */ n("div", { className: e.popoverContent, children: [
      b.length > 0 && /* @__PURE__ */ o("div", { className: e.optionsList, children: b.map((t) => /* @__PURE__ */ n("label", { className: e.optionItem, children: [
        /* @__PURE__ */ o(
          "input",
          {
            type: "radio",
            name: `filter-${r}`,
            value: t.value,
            checked: m === t.value,
            onChange: () => B(t.value),
            className: e.radio
          }
        ),
        /* @__PURE__ */ o("span", { className: e.optionLabel, children: t.label })
      ] }, t.value)) }),
      d && /* @__PURE__ */ o("div", { className: e.customInput, children: /* @__PURE__ */ o(
        "input",
        {
          type: "text",
          value: v,
          onChange: (t) => g(t.target.value),
          placeholder: L,
          className: e.textInput
        }
      ) }),
      /* @__PURE__ */ o("div", { className: e.popoverActions, children: /* @__PURE__ */ o(
        "button",
        {
          className: e.doneButton,
          onClick: w,
          children: "Done"
        }
      ) })
    ] }) })
  ] });
}
export {
  se as F
};
//# sourceMappingURL=Filter-K3BpXqIg.js.map
