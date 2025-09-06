"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function RentAccountantForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const natureOfJob = watch("natureOfJob");

  // Time options
  const timeOptions = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"
  ];

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        "your_service_id",      // 👉 replace with your EmailJS service ID
        "your_template_id",     // 👉 replace with your EmailJS template ID
        data,
        "your_user_public_key"  // 👉 replace with your EmailJS public key
      );
      setSent(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Try again!");
    }
    setLoading(false);
  };

  return (
    <section className="s-contact mt-5 mb-70">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-wrap">
              
              {/* LEFT SIDE */}
              <div className="content-left">
                <p className="s-sub-title mb-17">
                  <i className="icon-angles-right moveLeftToRight" />
                  Rent an Accountant
                </p>
                <p className="s-title text-anime-wave-right">
                  Hire Professional <span>Accountants</span> as per your need.
                </p>
                <p>
                 Whether you need an accountant on a full-time, part-time, or project basis, we can provide the right resource. Alternatively, our team can deliver complete accounting and financial services — from bookkeeping and reporting to compliance — tailored to your business needs.
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="content-right">
                <p className="title mb-30 text-center font-main-2">Request a Resource</p>

                {sent ? (
                  <p className="text-green-600 text-center">✅ Your request has been sent successfully!</p>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="form-contact style-3">

                    {/* NAME */}
                    <div className="cols mb-20">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Full Name"
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                      </fieldset>
                    </div>

                    {/* EMAIL */}
                    <div className="cols mb-20">
                      <fieldset>
                        <input
                          type="email"
                          placeholder="Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                          })}
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                      </fieldset>
                    </div>

                    {/* NATURE OF JOB */}
                    <div className="cols mb-20">
                      <fieldset>
                        <select {...register("natureOfJob", { required: "Nature of Job is required" })}>
                          <option value="">Select Nature of Job</option>
                          <option value="Full Time">Full Time</option>
                          <option value="Part Time">Part Time</option>
                          <option value="Project Based">Project Based</option>
                        </select>
                        {errors.natureOfJob && <span className="text-red-500">{errors.natureOfJob.message}</span>}
                      </fieldset>
                    </div>

                    {/* PART-TIME TIMINGS */}
                    {natureOfJob === "Part Time" && (
                      <div className="cols mb-20">
                        <fieldset>
                          <label className="block mb-1">From</label>
                          <select {...register("availabilityFrom", { required: "From time is required" })}>
                            <option value="">Select Time</option>
                            {timeOptions.map((time, i) => (
                              <option key={i} value={time}>{time}</option>
                            ))}
                          </select>
                          {errors.availabilityFrom && <span className="text-red-500">{errors.availabilityFrom.message}</span>}
                        </fieldset>

                        <fieldset>
                          <label className="block mb-1">To</label>
                          <select {...register("availabilityTo", { required: "To time is required" })}>
                            <option value="">Select Time</option>
                            {timeOptions.map((time, i) => (
                              <option key={i} value={time}>{time}</option>
                            ))}
                          </select>
                          {errors.availabilityTo && <span className="text-red-500">{errors.availabilityTo.message}</span>}
                        </fieldset>
                      </div>
                    )}

                    {/* QUALIFICATION (DROPDOWN ONLY) */}
                    <div className="cols mb-20">
                      <fieldset>
                        <select {...register("qualificationDropdown", { required: "Qualification is required" })}>
                          <option value="">Select Qualification</option>
                          <option value="B.Com">B.Com</option>
                          <option value="M.Com">M.Com</option>
                          <option value="ACCA">ACCA</option>
                          <option value="CA">CA</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.qualificationDropdown && <span className="text-red-500">{errors.qualificationDropdown.message}</span>}
                      </fieldset>
                    </div>

                    {/* CONTACT */}
                    <div className="cols mb-20">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Contact No"
                          {...register("contact", {
                            required: "Contact number is required",
                            pattern: { value: /^[0-9+\-\s]+$/, message: "Invalid phone number" }
                          })}
                        />
                        {errors.contact && <span className="text-red-500">{errors.contact.message}</span>}
                      </fieldset>
                    </div>

                    {/* REQUIREMENTS */}
                    <div className="cols mb-20">
                      <fieldset>
                        <textarea
                          className="h-100px"
                          placeholder="Write your requirements"
                          {...register("requirements", { required: "Requirements are required" })}
                        />
                        {errors.requirements && <span className="text-red-500">{errors.requirements.message}</span>}
                      </fieldset>
                    </div>

                    {/* SUBMIT */}
                    <button type="submit" className="tf-btn full" disabled={loading}>
                      {loading ? "Sending..." : "Send"}
                      <i className="icon-chevron-right" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
