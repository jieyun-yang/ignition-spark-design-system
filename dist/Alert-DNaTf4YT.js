import { jsx as c, jsxs as m } from "react/jsx-runtime";
import y from "react";
import { c as h } from "./clsx-OuTLNxxd.js";
import { I as u } from "./Icon-Cb8rh0Cw.js";
const p = "_alert_13kxc_10", g = "_container_13kxc_20", B = "_icon_13kxc_34", N = "_iconSvg_13kxc_44", v = "_content_13kxc_29", C = "_title_13kxc_59", I = "_body_13kxc_67", w = "_actionButton_13kxc_76", A = "_closeButton_13kxc_105", S = "_closeIcon_13kxc_124", t = {
  alert: p,
  container: g,
  "content-body": "_content-body_13kxc_29",
  icon: B,
  iconSvg: N,
  content: v,
  title: C,
  body: I,
  actionButton: w,
  closeButton: A,
  closeIcon: S,
  "status-info": "_status-info_13kxc_131",
  "status-success": "_status-success_13kxc_139",
  "status-warning": "_status-warning_13kxc_147",
  "status-error": "_status-error_13kxc_155",
  "status-premium": "_status-premium_13kxc_163"
}, j = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark",
  premium: "lock"
}, R = y.forwardRef(
  ({
    children: a,
    status: l = "info",
    title: i,
    action: o,
    closeable: r = !1,
    onClose: d,
    className: k,
    icon: x
  }, f) => {
    const s = !!a, _ = !!o, n = !!i;
    let e = "body";
    n && s && _ ? e = "heading-body-cta" : n && s ? e = "heading-body" : n && (e = "heading");
    const b = h(
      t.alert,
      t[`status-${l}`],
      t[`content-${e}`],
      r && t.closeable,
      k
    );
    return /* @__PURE__ */ c("div", { ref: f, className: b, role: "alert", children: /* @__PURE__ */ m("div", { className: t.container, children: [
      /* @__PURE__ */ c("div", { className: t.icon, children: x || /* @__PURE__ */ c(u, { name: j[l], className: t.iconSvg }) }),
      /* @__PURE__ */ m("div", { className: t.content, children: [
        n && /* @__PURE__ */ c("div", { className: t.title, children: i }),
        s && /* @__PURE__ */ c("div", { className: t.body, children: a }),
        _ && o && /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            className: t.actionButton,
            onClick: o.onClick,
            children: o.label
          }
        )
      ] }),
      r && /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          className: t.closeButton,
          onClick: d,
          "aria-label": "Close alert",
          children: /* @__PURE__ */ c(u, { name: "xmark", className: t.closeIcon })
        }
      )
    ] }) });
  }
);
R.displayName = "Alert";
export {
  R as A
};
//# sourceMappingURL=Alert-DNaTf4YT.js.map
