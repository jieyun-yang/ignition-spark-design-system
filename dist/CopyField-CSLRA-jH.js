import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { useState as u } from "react";
import { c as a } from "./clsx-OuTLNxxd.js";
import { I as m } from "./Icon-Cb8rh0Cw.js";
const y = "_container_1g4or_9", x = "_disabled_1g4or_21", b = "_copyButton_1g4or_38", f = "_copied_1g4or_71", g = "_icon_1g4or_81", T = "_buttonText_1g4or_88", h = "_input_1g4or_93", t = {
  container: y,
  disabled: x,
  copyButton: b,
  copied: f,
  icon: g,
  buttonText: T,
  input: h
}, k = ({
  value: c,
  onCopy: n,
  disabled: o = !1,
  className: p,
  placeholder: l
}) => {
  const [e, r] = u(!1), _ = async () => {
    if (!(o || !c))
      try {
        await navigator.clipboard.writeText(c), r(!0), n == null || n(), setTimeout(() => {
          r(!1);
        }, 2e3);
      } catch (d) {
        console.error("Failed to copy text:", d);
      }
  };
  return /* @__PURE__ */ s("div", { className: a(t.container, o && t.disabled, p), children: [
    /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: a(t.copyButton, e && t.copied),
        onClick: _,
        disabled: o,
        "aria-label": e ? "Copied" : "Copy to clipboard",
        children: [
          /* @__PURE__ */ i(
            m,
            {
              name: e ? "check" : "copy",
              className: t.icon
            }
          ),
          /* @__PURE__ */ i("span", { className: t.buttonText, children: e ? "Copied" : "Copy" })
        ]
      }
    ),
    /* @__PURE__ */ i(
      "input",
      {
        type: "text",
        className: t.input,
        value: c,
        readOnly: !0,
        disabled: o,
        placeholder: l,
        "aria-label": "Text to copy"
      }
    )
  ] });
};
export {
  k as C
};
//# sourceMappingURL=CopyField-CSLRA-jH.js.map
