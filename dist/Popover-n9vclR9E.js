import { jsxs as z, jsx as h } from "react/jsx-runtime";
import L, { useRef as R, useEffect as v } from "react";
import { c as x } from "./clsx-OuTLNxxd.js";
const E = "_popover_aj9vp_6", y = "_content_aj9vp_32", P = "_arrow_aj9vp_41", m = {
  popover: E,
  "size-small": "_size-small_aj9vp_19",
  "size-medium": "_size-medium_aj9vp_23",
  "size-large": "_size-large_aj9vp_27",
  content: y,
  arrow: P,
  "placement-top": "_placement-top_aj9vp_59",
  "placement-bottom": "_placement-bottom_aj9vp_60",
  "placement-left": "_placement-left_aj9vp_61",
  "placement-right": "_placement-right_aj9vp_62",
  "placement-bottom-start": "_placement-bottom-start_aj9vp_63",
  "placement-bottom-end": "_placement-bottom-end_aj9vp_64"
};
function H({
  visible: c = !1,
  onClose: a,
  anchorEl: s,
  children: w,
  size: g = "medium",
  placement: d = "bottom",
  className: b,
  zIndex: j = 1001
}) {
  const p = R(null), [l, k] = L.useState({ top: 0, left: 0 });
  return v(() => {
    if (!c || !s || !p.current) return;
    const r = () => {
      const t = s.getBoundingClientRect(), e = p.current.getBoundingClientRect(), _ = window.innerWidth, f = window.innerHeight;
      let o = 0, n = 0;
      switch (d) {
        case "bottom":
          o = t.bottom + 8, n = t.left + t.width / 2 - e.width / 2;
          break;
        case "bottom-start":
          o = t.bottom + 8, n = t.left;
          break;
        case "bottom-end":
          o = t.bottom + 8, n = t.right - e.width;
          break;
        case "top":
          o = t.top - e.height - 8, n = t.left + t.width / 2 - e.width / 2;
          break;
        case "left":
          o = t.top + t.height / 2 - e.height / 2, n = t.left - e.width - 8;
          break;
        case "right":
          o = t.top + t.height / 2 - e.height / 2, n = t.right + 8;
          break;
      }
      const i = 8;
      if (n + e.width > _ - i && (n = _ - e.width - i), n < i && (n = i), o + e.height > f - i) {
        const u = t.top - e.height - 8;
        u >= i ? o = u : o = f - e.height - i;
      }
      o < i && (o = i), k({ top: o, left: n });
    };
    return r(), window.addEventListener("resize", r), window.addEventListener("scroll", r, !0), () => {
      window.removeEventListener("resize", r), window.removeEventListener("scroll", r, !0);
    };
  }, [c, s, d]), v(() => {
    if (!c) return;
    function r(e) {
      p.current && !p.current.contains(e.target) && s && !s.contains(e.target) && (a == null || a());
    }
    function t(e) {
      e.key === "Escape" && (a == null || a());
    }
    return document.addEventListener("mousedown", r), document.addEventListener("keydown", t), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("keydown", t);
    };
  }, [c, a, s]), c ? /* @__PURE__ */ z(
    "div",
    {
      ref: p,
      className: x(
        m.popover,
        m[`size-${g}`],
        m[`placement-${d}`],
        b
      ),
      style: {
        zIndex: j,
        top: `${l.top}px`,
        left: `${l.left}px`
      },
      role: "dialog",
      "aria-modal": "false",
      children: [
        /* @__PURE__ */ h("div", { className: m.content, children: w }),
        /* @__PURE__ */ h("div", { className: m.arrow })
      ]
    }
  ) : null;
}
export {
  H as P
};
//# sourceMappingURL=Popover-n9vclR9E.js.map
