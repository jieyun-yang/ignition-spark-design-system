import { jsxs as v, jsx as c } from "react/jsx-runtime";
import F, { useState as C, useMemo as S, useRef as I, useEffect as B } from "react";
import { c as x } from "./clsx-OuTLNxxd.js";
import { I as Y } from "./Icon-Cb8rh0Cw.js";
const P = "_calendar_18hel_7", $ = "_header_18hel_17", E = "_monthYear_18hel_25", T = "_navigation_18hel_33", A = "_navButton_18hel_38", O = "_weekdays_18hel_63", R = "_weekday_18hel_63", L = "_days_18hel_82", J = "_day_18hel_82", V = "_otherMonth_18hel_111", j = "_today_18hel_116", H = "_selected_18hel_123", r = {
  calendar: P,
  header: $,
  monthYear: E,
  navigation: T,
  navButton: A,
  weekdays: O,
  weekday: R,
  days: L,
  day: J,
  otherMonth: V,
  today: j,
  selected: H
}, W = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], K = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], q = ({ selectedDate: a, onSelectDate: o, onClose: d }) => {
  const [t, f] = C(a || /* @__PURE__ */ new Date()), y = S(() => {
    const e = /* @__PURE__ */ new Date();
    return e.setHours(0, 0, 0, 0), e;
  }, []), b = S(() => {
    const e = t.getFullYear(), n = t.getMonth(), g = new Date(e, n, 1), M = new Date(e, n + 1, 0);
    let D = g.getDay();
    D = D === 0 ? 6 : D - 1;
    const _ = [];
    for (let s = D - 1; s >= 0; s--) {
      const p = new Date(e, n, -s);
      _.push({ date: p, isCurrentMonth: !1 });
    }
    for (let s = 1; s <= M.getDate(); s++) {
      const p = new Date(e, n, s);
      _.push({ date: p, isCurrentMonth: !0 });
    }
    const N = 42 - _.length;
    for (let s = 1; s <= N; s++) {
      const p = new Date(e, n + 1, s);
      _.push({ date: p, isCurrentMonth: !1 });
    }
    return _;
  }, [t]), k = () => {
    f(new Date(t.getFullYear(), t.getMonth() - 1, 1));
  }, i = () => {
    f(new Date(t.getFullYear(), t.getMonth() + 1, 1));
  }, h = (e) => {
    o(e), d();
  }, w = (e, n) => n ? e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear() : !1;
  return /* @__PURE__ */ v("div", { className: r.calendar, children: [
    /* @__PURE__ */ v("div", { className: r.header, children: [
      /* @__PURE__ */ v("div", { className: r.monthYear, children: [
        W[t.getMonth()],
        " ",
        t.getFullYear()
      ] }),
      /* @__PURE__ */ v("div", { className: r.navigation, children: [
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            className: r.navButton,
            onClick: k,
            "aria-label": "Previous month",
            children: /* @__PURE__ */ c(Y, { name: "angle-left", variant: "solid" })
          }
        ),
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            className: r.navButton,
            onClick: i,
            "aria-label": "Next month",
            children: /* @__PURE__ */ c(Y, { name: "angle-right", variant: "solid" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: r.weekdays, children: K.map((e) => /* @__PURE__ */ c("div", { className: r.weekday, children: e }, e)) }),
    /* @__PURE__ */ c("div", { className: r.days, children: b.map((e, n) => {
      const g = w(e.date, a), M = w(e.date, y);
      return /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          className: `${r.day} ${e.isCurrentMonth ? "" : r.otherMonth} ${g ? r.selected : ""} ${M ? r.today : ""}`,
          onClick: () => h(e.date),
          children: e.date.getDate()
        },
        n
      );
    }) })
  ] });
}, z = "_wrapper_ub094_9", G = "_datePicker_ub094_15", Q = "_input_ub094_30", U = "_iconButton_ub094_49", X = "_icon_ub094_49", Z = "_disabled_ub094_76", ee = "_open_ub094_81", te = "_popover_ub094_109", u = {
  wrapper: z,
  datePicker: G,
  input: Q,
  iconButton: U,
  icon: X,
  disabled: Z,
  open: ee,
  popover: te
}, ne = (a) => {
  if (!a) return null;
  const o = a.split("/");
  if (o.length !== 3) return null;
  const d = parseInt(o[0], 10), t = parseInt(o[1], 10) - 1, f = parseInt(o[2], 10), y = new Date(f, t, d);
  return isNaN(y.getTime()) ? null : y;
}, ae = (a) => {
  const o = String(a.getDate()).padStart(2, "0"), d = String(a.getMonth() + 1).padStart(2, "0"), t = a.getFullYear();
  return `${o}/${d}/${t}`;
}, oe = F.forwardRef(
  ({
    value: a = "",
    onChange: o,
    placeholder: d = "DD/MM/YYYY",
    disabled: t = !1,
    className: f,
    name: y,
    "aria-label": b
  }, k) => {
    const [i, h] = C(!1), [w, e] = C(a), n = I(null), g = I(null);
    B(() => {
      e(a);
    }, [a]), B(() => {
      const l = (m) => {
        n.current && !n.current.contains(m.target) && h(!1);
      };
      return i && document.addEventListener("mousedown", l), () => {
        document.removeEventListener("mousedown", l);
      };
    }, [i]);
    const M = (l) => {
      const m = l.target.value;
      e(m), o && !t && o(m);
    }, D = () => {
      t || h(!i);
    }, _ = () => {
      var l;
      t || (h(!i), (l = g.current) == null || l.focus());
    }, N = (l) => {
      const m = ae(l);
      e(m), o && o(m), h(!1);
    }, s = x(
      u.datePicker,
      t && u.disabled,
      i && u.open,
      f
    ), p = ne(w);
    return /* @__PURE__ */ v("div", { ref: n, className: u.wrapper, children: [
      /* @__PURE__ */ v("div", { ref: k, className: s, children: [
        /* @__PURE__ */ c(
          "input",
          {
            ref: g,
            type: "text",
            className: u.input,
            value: w,
            onChange: M,
            onClick: D,
            placeholder: d,
            disabled: t,
            name: y,
            "aria-label": b || "Date picker",
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            className: u.iconButton,
            onClick: _,
            disabled: t,
            "aria-label": "Toggle calendar",
            tabIndex: -1,
            children: /* @__PURE__ */ c(Y, { name: "calendar", variant: "solid", className: u.icon })
          }
        )
      ] }),
      i && !t && /* @__PURE__ */ c("div", { className: u.popover, children: /* @__PURE__ */ c(
        q,
        {
          selectedDate: p,
          onSelectDate: N,
          onClose: () => h(!1)
        }
      ) })
    ] });
  }
);
oe.displayName = "DatePicker";
export {
  oe as D
};
//# sourceMappingURL=DatePicker-B70zVz98.js.map
