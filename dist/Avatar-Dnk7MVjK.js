import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { c as l } from "./clsx-OuTLNxxd.js";
const d = "_avatar_1vwaq_10", f = "_initials_1vwaq_43", q = "_image_1vwaq_51", w = "_profile_1vwaq_58", p = "_info_1vwaq_64", g = "_name_1vwaq_70", h = "_email_1vwaq_78", a = {
  avatar: d,
  "size-small": "_size-small_1vwaq_24",
  "size-medium": "_size-medium_1vwaq_30",
  "size-large": "_size-large_1vwaq_36",
  initials: f,
  image: q,
  profile: w,
  info: p,
  name: g,
  email: h
}, u = ({
  initials: c,
  src: n,
  alt: o,
  size: t = "medium",
  showProfile: v = !1,
  name: s,
  email: e,
  className: _
}) => {
  const r = n ? /* @__PURE__ */ i("img", { src: n, alt: o || "Avatar", className: a.image }) : /* @__PURE__ */ i("span", { className: a.initials, children: c || "?" });
  return v ? /* @__PURE__ */ m("div", { className: l(a.profile, _), children: [
    /* @__PURE__ */ i("div", { className: l(a.avatar, a[`size-${t}`]), children: r }),
    (s || e) && /* @__PURE__ */ m("div", { className: a.info, children: [
      s && /* @__PURE__ */ i("div", { className: a.name, children: s }),
      e && /* @__PURE__ */ i("div", { className: a.email, children: e })
    ] })
  ] }) : /* @__PURE__ */ i("div", { className: l(a.avatar, a[`size-${t}`], _), children: r });
};
export {
  u as A
};
//# sourceMappingURL=Avatar-Dnk7MVjK.js.map
