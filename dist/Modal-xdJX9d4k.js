import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { useEffect as b } from "react";
import { c as o } from "./clsx-OuTLNxxd.js";
const w = "_overlay_gl95p_7", B = "_modal_gl95p_19", W = "_header_gl95p_68", L = "_titleRow_gl95p_76", C = "_titleWrapper_gl95p_85", E = "_titleWithIcon_gl95p_94", F = "_headerIcon_gl95p_100", H = "_title_gl95p_76", M = "_closeButton_gl95p_124", R = "_divider_gl95p_143", j = "_caption_gl95p_151", $ = "_body_gl95p_161", T = "_footer_gl95p_186", q = "_actions_gl95p_193", D = "_actionButton_gl95p_200", G = "_actionIcon_gl95p_218", J = "_illustration_gl95p_270", K = "_hasIllustration_gl95p_282", P = "_overflow_gl95p_342", Q = "_stickyHeader_gl95p_351", S = "_stickyFooter_gl95p_360", e = {
  overlay: w,
  modal: B,
  "size-xxsmall": "_size-xxsmall_gl95p_32",
  "size-xsmall": "_size-xsmall_gl95p_37",
  "size-small": "_size-small_gl95p_42",
  "size-medium": "_size-medium_gl95p_47",
  "size-large": "_size-large_gl95p_52",
  "size-xlarge": "_size-xlarge_gl95p_57",
  "size-xxlarge": "_size-xxlarge_gl95p_62",
  header: W,
  titleRow: L,
  titleWrapper: C,
  titleWithIcon: E,
  headerIcon: F,
  title: H,
  closeButton: M,
  divider: R,
  caption: j,
  body: $,
  footer: T,
  actions: q,
  actionButton: D,
  actionIcon: G,
  "action-primary": "_action-primary_gl95p_228",
  "action-secondary": "_action-secondary_gl95p_242",
  "action-tertiary": "_action-tertiary_gl95p_256",
  illustration: J,
  hasIllustration: K,
  overflow: P,
  stickyHeader: Q,
  stickyFooter: S
}, Y = ({
  isOpen: i,
  onClose: a,
  title: f,
  caption: p,
  size: k = "medium",
  variant: r = "input",
  headerIcon: m,
  primaryAction: s,
  secondaryAction: n,
  additionalActions: g = [],
  children: x,
  className: I,
  disableOverlayClick: z = !1,
  illustration: h,
  overflow: _ = !1
}) => {
  if (b(() => {
    const l = (d) => {
      d.key === "Escape" && i && a();
    };
    return i && (document.addEventListener("keydown", l), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", l), document.body.style.overflow = "";
    };
  }, [i, a]), !i) return null;
  const N = (l) => {
    l.target === l.currentTarget && !z && a();
  }, u = r === "decision" ? [
    ...g,
    ...n ? [n] : [],
    ...s ? [s] : []
  ] : [
    ...n ? [n] : [],
    ...g,
    ...s ? [s] : []
  ], y = r === "confirmation", v = r === "feature-gating" && h;
  return /* @__PURE__ */ t("div", { className: e.overlay, onClick: N, children: /* @__PURE__ */ c(
    "div",
    {
      className: o(
        e.modal,
        e[`size-${k}`],
        _ && e.overflow,
        v && e.hasIllustration,
        I
      ),
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-title",
      children: [
        v && /* @__PURE__ */ t("div", { className: e.illustration, children: h }),
        /* @__PURE__ */ t("div", { className: o(e.header, _ && e.stickyHeader), children: /* @__PURE__ */ c("div", { className: e.titleRow, children: [
          /* @__PURE__ */ c("div", { className: o(e.titleWrapper, y && e.titleWithIcon), children: [
            y && m && /* @__PURE__ */ t("div", { className: e.headerIcon, children: m }),
            /* @__PURE__ */ t("h2", { id: "modal-title", className: e.title, children: f }),
            p && /* @__PURE__ */ t("p", { className: e.caption, children: p })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              className: e.closeButton,
              onClick: a,
              "aria-label": "Close modal",
              children: /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ t(
                "path",
                {
                  d: "M18 6L6 18M6 6L18 18",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ) })
            }
          )
        ] }) }),
        /* @__PURE__ */ t("div", { className: e.body, children: x }),
        u.length > 0 && /* @__PURE__ */ t("div", { className: o(e.footer, _ && e.stickyFooter), children: /* @__PURE__ */ t("div", { className: e.actions, children: u.map((l, d) => /* @__PURE__ */ c(
          "button",
          {
            className: o(
              e.actionButton,
              e[`action-${l.hierarchy || "secondary"}`]
            ),
            onClick: l.onClick,
            children: [
              l.icon && /* @__PURE__ */ t("span", { className: e.actionIcon, children: l.icon }),
              /* @__PURE__ */ t("span", { children: l.label })
            ]
          },
          d
        )) }) })
      ]
    }
  ) });
};
export {
  Y as M
};
//# sourceMappingURL=Modal-xdJX9d4k.js.map
