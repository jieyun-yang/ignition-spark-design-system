import { jsxs as l, jsx as s } from "react/jsx-runtime";
import { c } from "./clsx-OuTLNxxd.js";
const i = "_progressStatus_15anw_6", d = "_counter_15anw_13", w = "_label_15anw_18", m = "_progressWrapper_15anw_28", u = "_progressTrack_15anw_35", h = "_progressFill_15anw_45", r = {
  progressStatus: i,
  counter: d,
  label: w,
  progressWrapper: m,
  progressTrack: u,
  progressFill: h,
  "color-yellow": "_color-yellow_15anw_51",
  "color-green": "_color-green_15anw_55",
  "color-red": "_color-red_15anw_59"
};
function x({
  label: n,
  current: e,
  total: o,
  color: a = "none",
  showCounter: p = !1,
  className: t
}) {
  const _ = o > 0 ? e / o * 100 : 0, g = `${e}/${o}`;
  return /* @__PURE__ */ l("div", { className: c(r.progressStatus, t), children: [
    /* @__PURE__ */ s("div", { className: r.label, children: n }),
    /* @__PURE__ */ l("div", { className: r.progressWrapper, children: [
      /* @__PURE__ */ s("div", { className: r.progressTrack, children: e > 0 && /* @__PURE__ */ s(
        "div",
        {
          className: c(
            r.progressFill,
            a !== "none" && r[`color-${a}`]
          ),
          style: { width: `${_}%` }
        }
      ) }),
      p && /* @__PURE__ */ s("div", { className: r.counter, children: g })
    ] })
  ] });
}
export {
  x as P
};
//# sourceMappingURL=ProgressStatus-DlCN8vfH.js.map
