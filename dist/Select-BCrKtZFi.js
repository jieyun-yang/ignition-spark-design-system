import { jsxs as _, jsx as s } from "react/jsx-runtime";
import { useState as R, useRef as K, useEffect as P } from "react";
import { I as u } from "./Icon-Cb8rh0Cw.js";
import { c as v } from "./clsx-OuTLNxxd.js";
import { M as $ } from "./Menu-DsqjHS5O.js";
const q = "_wrapper_uw73g_3", z = "_container_uw73g_11", G = "_disabled_uw73g_26", H = "_focused_uw73g_30", J = "_open_uw73g_35", Q = "_error_uw73g_39", U = "_text_uw73g_53", W = "_placeholder_uw73g_66", X = "_tagsContainer_uw73g_71", Y = "_tag_uw73g_71", Z = "_tagLabel_uw73g_90", ee = "_tagRemove_uw73g_101", ne = "_tagRemoveIcon_uw73g_118", se = "_icons_uw73g_123", oe = "_clearButton_uw73g_131", ae = "_clearIcon_uw73g_147", te = "_spinner_uw73g_152", re = "_chevron_uw73g_158", ce = "_chevronOpen_uw73g_165", le = "_errorMessage_uw73g_169", n = {
  wrapper: q,
  container: z,
  disabled: G,
  focused: H,
  open: J,
  error: Q,
  text: U,
  placeholder: W,
  tagsContainer: X,
  tag: Y,
  tagLabel: Z,
  tagRemove: ee,
  tagRemoveIcon: ne,
  icons: se,
  clearButton: oe,
  clearIcon: ae,
  spinner: te,
  chevron: re,
  chevronOpen: ce,
  errorMessage: le
}, fe = ({
  value: o,
  onChange: c,
  options: d,
  placeholder: b = "Select...",
  disabled: l = !1,
  errorMessage: g,
  className: k,
  menuVariant: O = "simple",
  clearable: A = !1,
  loading: f = !1,
  onClear: x,
  multiple: a = !1
}) => {
  const [r, i] = R(!1), [B, y] = R(!1), m = K(null), p = a ? Array.isArray(o) ? o : [] : o ? [o] : [], w = a ? null : d.find((e) => e.value === o), L = w ? w.label : b;
  P(() => {
    const e = (t) => {
      m.current && !m.current.contains(t.target) && i(!1);
    };
    return r && document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, [r]);
  const S = () => {
    l || i(!r);
  }, V = (e) => {
    if (c)
      if (a) {
        const t = Array.isArray(o) ? o : [], I = t.includes(e) ? t.filter((h) => h !== e) : [...t, e];
        c(I);
      } else
        c(e), i(!1);
  }, C = (e, t) => {
    if (t.stopPropagation(), !c || !a) return;
    const h = (Array.isArray(o) ? o : []).filter((j) => j !== e);
    c(h);
  }, E = (e) => {
    l || (e.key === "Enter" || e.key === " " ? (e.preventDefault(), i(!r)) : e.key === "Escape" && i(!1));
  }, M = (e) => {
    e.stopPropagation(), x ? x() : c && c(a ? [] : "");
  }, D = a ? p.length > 0 : !!o, F = A && D && !l && !f, T = !f, N = a ? d.filter((e) => p.includes(e.value)) : [];
  return /* @__PURE__ */ _("div", { className: v(n.wrapper, k), ref: m, children: [
    /* @__PURE__ */ _(
      "div",
      {
        className: v(
          n.container,
          r && n.open,
          B && n.focused,
          g && n.error,
          l && n.disabled,
          !w && n.placeholder
        ),
        onClick: S,
        onFocus: () => y(!0),
        onBlur: () => y(!1),
        onKeyDown: E,
        tabIndex: l ? -1 : 0,
        role: "combobox",
        "aria-expanded": r,
        "aria-haspopup": "listbox",
        "aria-disabled": l,
        children: [
          a ? /* @__PURE__ */ s("div", { className: n.tagsContainer, children: N.length > 0 ? N.map((e) => /* @__PURE__ */ _("div", { className: n.tag, children: [
            /* @__PURE__ */ s("span", { className: n.tagLabel, children: e.label }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: n.tagRemove,
                onClick: (t) => C(e.value, t),
                "aria-label": `Remove ${e.label}`,
                children: /* @__PURE__ */ s(u, { name: "xmark", className: n.tagRemoveIcon })
              }
            )
          ] }, e.value)) : /* @__PURE__ */ s("span", { className: n.text, children: b }) }) : /* @__PURE__ */ s("span", { className: n.text, children: L }),
          /* @__PURE__ */ _("div", { className: n.icons, children: [
            F && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: n.clearButton,
                onClick: M,
                "aria-label": "Clear selection",
                children: /* @__PURE__ */ s(u, { name: "xmark", className: n.clearIcon })
              }
            ),
            f && /* @__PURE__ */ s(
              u,
              {
                name: "spinner",
                className: n.spinner,
                spin: !0
              }
            ),
            T && /* @__PURE__ */ s(
              u,
              {
                name: "chevron-down",
                variant: "solid",
                className: v(n.chevron, r && n.chevronOpen)
              }
            )
          ] })
        ]
      }
    ),
    r && !l && /* @__PURE__ */ s(
      $,
      {
        options: d,
        onSelect: V,
        selectedValue: a ? void 0 : o,
        selectedValues: a ? p : void 0,
        variant: O
      }
    ),
    g && /* @__PURE__ */ s("div", { className: n.errorMessage, children: g })
  ] });
};
export {
  fe as S
};
//# sourceMappingURL=Select-BCrKtZFi.js.map
