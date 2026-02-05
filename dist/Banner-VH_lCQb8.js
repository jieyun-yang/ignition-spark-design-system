import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { c as s } from "./clsx-OuTLNxxd.js";
const u = "_banner_1y8wu_7", d = "_imageSection_1y8wu_19", m = "_contentSection_1y8wu_32", y = "_content_1y8wu_32", h = "_title_1y8wu_48", b = "_body_1y8wu_58", w = "_actions_1y8wu_74", B = "_actionButton_1y8wu_80", N = "_primary_1y8wu_97", k = "_secondary_1y8wu_110", v = "_closeButton_1y8wu_124", n = {
  banner: u,
  imageSection: d,
  contentSection: m,
  content: y,
  title: h,
  body: b,
  actions: w,
  actionButton: B,
  primary: N,
  secondary: k,
  closeButton: v
}, C = ({
  title: l,
  children: r,
  image: i,
  primaryAction: o,
  secondaryAction: e,
  onClose: a,
  className: _
}) => /* @__PURE__ */ c("div", { className: s(n.banner, _), children: [
  i && /* @__PURE__ */ t("div", { className: n.imageSection, children: i }),
  /* @__PURE__ */ t("div", { className: n.contentSection, children: /* @__PURE__ */ c("div", { className: n.content, children: [
    /* @__PURE__ */ t("h3", { className: n.title, children: l }),
    /* @__PURE__ */ t("div", { className: n.body, children: r }),
    (o || e) && /* @__PURE__ */ c("div", { className: n.actions, children: [
      o && /* @__PURE__ */ t(
        "button",
        {
          className: s(n.actionButton, n.primary),
          onClick: o.onClick,
          children: o.label
        }
      ),
      e && /* @__PURE__ */ t(
        "button",
        {
          className: s(n.actionButton, n.secondary),
          onClick: e.onClick,
          children: e.label
        }
      )
    ] })
  ] }) }),
  a && /* @__PURE__ */ t(
    "button",
    {
      className: n.closeButton,
      onClick: a,
      "aria-label": "Close banner",
      children: /* @__PURE__ */ t("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t(
        "path",
        {
          d: "M11 1L1 11M1 1L11 11",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ) })
    }
  )
] });
export {
  C as B
};
//# sourceMappingURL=Banner-VH_lCQb8.js.map
