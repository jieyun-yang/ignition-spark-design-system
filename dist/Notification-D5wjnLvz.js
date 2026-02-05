import { jsxs as e, jsx as i } from "react/jsx-runtime";
import { c as m } from "./clsx-OuTLNxxd.js";
import { A as p } from "./Avatar-Dnk7MVjK.js";
const u = "_notification_urdl5_6", v = "_clickable_urdl5_19", N = "_content_urdl5_28", f = "_avatarWrapper_urdl5_36", x = "_textContent_urdl5_40", b = "_title_urdl5_48", h = "_description_urdl5_59", W = "_meta_urdl5_73", j = "_timestamp_urdl5_80", k = "_indicator_urdl5_91", t = {
  notification: u,
  clickable: v,
  content: N,
  avatarWrapper: f,
  textContent: x,
  title: b,
  description: h,
  meta: W,
  timestamp: j,
  indicator: k
};
function g({
  avatar: n,
  avatarInitials: c,
  title: s,
  description: r,
  timestamp: o,
  unread: l = !1,
  indicatorColor: d = "#5a51e7",
  onClick: a,
  className: _
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: m(
        t.notification,
        a && t.clickable,
        _
      ),
      onClick: a,
      role: a ? "button" : void 0,
      tabIndex: a ? 0 : void 0,
      children: [
        /* @__PURE__ */ e("div", { className: t.content, children: [
          (n || c) && /* @__PURE__ */ i("div", { className: t.avatarWrapper, children: n || /* @__PURE__ */ i(p, { size: "small", initials: c }) }),
          /* @__PURE__ */ e("div", { className: t.textContent, children: [
            /* @__PURE__ */ i("div", { className: t.title, children: s }),
            r && /* @__PURE__ */ i("div", { className: t.description, children: r })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: t.meta, children: [
          /* @__PURE__ */ i("div", { className: t.timestamp, children: o }),
          l && /* @__PURE__ */ i(
            "div",
            {
              className: t.indicator,
              style: { backgroundColor: d },
              "aria-label": "Unread"
            }
          )
        ] })
      ]
    }
  );
}
export {
  g as N
};
//# sourceMappingURL=Notification-D5wjnLvz.js.map
