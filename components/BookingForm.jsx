"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiHome, FiTruck } from "react-icons/fi";
import { lashServices, nailServices, packages, site, whatsappLink } from "@/data/site";

const times = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
];

export default function BookingForm({ initialService = "", initialMode = "Incall" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: initialService,
    mode: initialMode,
    date: "",
    time: "",
    location: "",
    notes: "",
  });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hello ${site.name}, I would like to book an appointment.`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Type: ${form.mode}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
    ];
    if (form.mode === "Outcall" && form.location) lines.push(`Location: ${form.location}`);
    if (form.notes) lines.push(`Notes: ${form.notes}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="mode-toggle" role="radiogroup" aria-label="Appointment type">
        {[
          { v: "Incall", icon: FiHome, t: "Incall", s: "Visit our Ruaka studio" },
          { v: "Outcall", icon: FiTruck, t: "Outcall", s: "We come to you" },
        ].map((m) => (
          <label key={m.v} className={`mode-toggle__opt ${form.mode === m.v ? "is-active" : ""}`}>
            <input type="radio" name="mode" value={m.v} checked={form.mode === m.v} onChange={set("mode")} />
            <m.icon />
            <span>
              <strong>{m.t}</strong>
              <small>{m.s}</small>
            </span>
          </label>
        ))}
      </div>

      <div className="form__row">
        <label className="field">
          <span>Full name</span>
          <input required value={form.name} onChange={set("name")} placeholder="Your name" />
        </label>
        <label className="field">
          <span>Phone number</span>
          <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="07XX XXX XXX" />
        </label>
      </div>

      <label className="field">
        <span>Service</span>
        <select required value={form.service} onChange={set("service")}>
          <option value="" disabled>Select a service</option>
          {form.service && ![...lashServices, ...nailServices, ...packages].some((s) => s.title === form.service) && (
            <option value={form.service}>{form.service}</option>
          )}
          <optgroup label="Lashes">
            {lashServices.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          </optgroup>
          <optgroup label="Nails">
            {nailServices.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          </optgroup>
          <optgroup label="Packages">
            {packages.map((p) => <option key={p.title} value={p.title}>{p.title}</option>)}
          </optgroup>
        </select>
      </label>

      <div className="form__row">
        <label className="field">
          <span>Preferred date</span>
          <input required type="date" min={today} value={form.date} onChange={set("date")} />
        </label>
        <label className="field">
          <span>Preferred time</span>
          <select required value={form.time} onChange={set("time")}>
            <option value="" disabled>Select time</option>
            {times.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>

      {form.mode === "Outcall" && (
        <label className="field">
          <span>Your location</span>
          <input required value={form.location} onChange={set("location")} placeholder="Estate, area or landmark" />
        </label>
      )}

      <label className="field">
        <span>Notes (optional)</span>
        <textarea rows={4} value={form.notes} onChange={set("notes")} placeholder="Lash style, nail design, number of people..." />
      </label>

      <button type="submit" className="btn btn--primary btn--block btn--lg">
        <FaWhatsapp /> Send Booking on WhatsApp
      </button>
    </form>
  );
}
