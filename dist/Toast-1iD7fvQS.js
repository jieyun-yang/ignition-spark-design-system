import { jsx as t, jsxs as r } from "react/jsx-runtime";
import p from "react";
import { c as f } from "./clsx-OuTLNxxd.js";
import { I as d } from "./Icon-Cb8rh0Cw.js";
const k = "_toast_19xj3_10", b = "_container_19xj3_23", v = "_icon_19xj3_31", y = "_iconSvg_19xj3_41", N = "_content_19xj3_47", w = "_heading_19xj3_57", B = "_body_19xj3_65", I = "_actions_19xj3_74", C = "_actionLink_19xj3_81", L = "_closeButton_19xj3_107", S = "_closeIcon_19xj3_126", n = {
  toast: k,
  container: b,
  icon: v,
  iconSvg: y,
  content: N,
  heading: w,
  body: B,
  actions: I,
  actionLink: C,
  closeButton: L,
  closeIcon: S,
  "status-info": "_status-info_19xj3_133",
  "status-success": "_status-success_19xj3_137",
  "status-warning": "_status-warning_19xj3_141",
  "status-error": "_status-error_19xj3_145",
  "status-waiting": "_status-waiting_19xj3_149",
  "status-premium": "_status-premium_19xj3_153"
}, T = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark",
  waiting: "spinner",
  premium: "lock"
}, R = p.forwardRef(
  ({
    children: e,
    status: c = "info",
    heading: m,
    actions: s,
    onClose: l,
    className: u,
    icon: x
  }, g) => {
    const a = !!e, i = !!(s && s.length > 0);
    let o = "heading";
    a && i ? o = "heading-body-link" : a ? o = "heading-body" : i && (o = "heading-link");
    const h = f(
      n.toast,
      n[`status-${c}`],
      n[`content-${o}`],
      u
    );
    return /* @__PURE__ */ t("div", { ref: g, className: h, role: "status", "aria-live": "polite", children: /* @__PURE__ */ r("div", { className: n.container, children: [
      /* @__PURE__ */ t("div", { className: n.icon, children: x || /* @__PURE__ */ t(
        d,
        {
          name: T[c],
          className: n.iconSvg,
          spin: c === "waiting"
        }
      ) }),
      /* @__PURE__ */ r("div", { className: n.content, children: [
        /* @__PURE__ */ t("div", { className: n.heading, children: m }),
        a && /* @__PURE__ */ t("div", { className: n.body, children: e }),
        i && s && /* @__PURE__ */ t("div", { className: n.actions, children: s.map((_, j) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: n.actionLink,
            onClick: _.onClick,
            children: _.label
          },
          j
        )) })
      ] }),
      l && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: n.closeButton,
          onClick: l,
          "aria-label": "Close notification",
          children: /* @__PURE__ */ t(d, { name: "xmark", className: n.closeIcon })
        }
      )
    ] }) });
  }
);
R.displayName = "Toast";
export {
  R as T
};
//# sourceMappingURL=Toast-1iD7fvQS.js.map
