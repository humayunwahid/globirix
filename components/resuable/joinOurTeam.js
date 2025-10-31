"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function JoinOurTeam() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const natureOfJob = watch("natureOfJob");
  const qualification = watch("qualificationDropdown");
  const country = watch("country");

  // Time options
  const timeOptions = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM",
    "10:00 PM", "11:00 PM", "12:00 AM"
  ];

  // Country options
  const countryOptions = [
    "United States", "Canada", "United Kingdom", "India", "Australia", "Other"
  ];

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const formData = new FormData();
      
      // Append all form fields
      Object.keys(data).forEach(key => {
        if (key === 'cv' || key === 'formalPicture') {
          if (data[key]?.[0]) {
            formData.append(key, data[key][0]);
          }
        } else {
          formData.append(key, data[key] || '');
        }
      });

      const response = await fetch('/api/forms/join', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      
      if (result.success) {
        setSent(true);
      } else {
        console.error('API Error:', result);
        alert(result.message || 'Something went wrong. Try again!');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Try again!');
    }
    setLoading(false);
  };

  // Helper: file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <section className="s-contact mt-5 mb-70">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-wrap">

              {/* LEFT TEXT */}
              <div className="content-left">
                <p className="s-sub-title mb-17">
                  <i className="icon-angles-right moveLeftToRight" />
                  Registration Form
                </p>
                <p className="s-title text-anime-wave-right">
                  Looking for <span>Job Opportunities?</span>
                </p>
                <p>
                  If you are an accountant seeking full-time, part-time, or project-based 
                  opportunities, register here. Applicants from other professions can also apply!
                </p>
              </div>

              {/* RIGHT FORM */}
              <div className="content-right">
                <p className="title mb-30 text-center font-main-2">Join Now</p>

                {sent ? (
                  <p className="text-green-600 text-center">✅ Your registration has been submitted successfully!</p>
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

                    {/* QUALIFICATION */}
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
                      {/* Show text field if "Other" selected */}
                      {qualification === "Other" && (
                        <fieldset>
                          <input
                            type="text"
                            placeholder="Other Qualification"
                            {...register("qualificationText", { required: "Please specify your qualification" })}
                          />
                          {errors.qualificationText && <span className="text-red-500">{errors.qualificationText.message}</span>}
                        </fieldset>
                      )}
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

                    {/* EXPERIENCE */}
                    <div className="cols mb-20">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Experience (e.g. 2 years in accounting)"
                          {...register("experience", { required: "Experience is required" })}
                        />
                        {errors.experience && <span className="text-red-500">{errors.experience.message}</span>}
                      </fieldset>
                    </div>

                    {/* UPLOAD CV */}
                    <div className="cols mb-20">
                      <fieldset>
                        <label htmlFor="cv" className="block text-gray-500 mb-2 cursor-pointer">
                          Upload Your CV
                        </label>
                        <input
                          id="cv"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          {...register("cv", { required: "CV is required" })}
                          className="block w-full text-sm text-gray-500
                                     file:mr-4 file:py-2 file:px-4
                                     file:rounded-full file:border-0
                                     file:text-sm file:font-semibold
                                     file:bg-blue-50 file:text-blue-700
                                     hover:file:bg-blue-100"
                        />
                        {errors.cv && <span className="text-red-500">{errors.cv.message}</span>}
                      </fieldset>
                    </div>

                    {/* COUNTRY */}
                    <div className="cols mb-20">
                      <fieldset>
                        <select {...register("country", { required: "Country is required" })}>
                          <option value="">Select Country</option>
                          {countryOptions.map((country, i) => (
                            <option key={i} value={country}>{country}</option>
                          ))}
                        </select>
                        {errors.country && <span className="text-red-500">{errors.country.message}</span>}
                      </fieldset>
                      {country === "Other" && (
                        <fieldset>
                          <input
                            type="text"
                            placeholder="Other Country"
                            {...register("otherCountry", { required: "Please specify your country" })}
                          />
                          {errors.otherCountry && <span className="text-red-500">{errors.otherCountry.message}</span>}
                        </fieldset>
                      )}
                    </div>

                    {/* FORMAL PICTURE */}
                    <div className="cols mb-20">
                      <fieldset>
                        <label htmlFor="formalPicture" className="block text-gray-500 mb-2 cursor-pointer">
                          Upload Formal Picture (Max Size: 2MB)
                        </label>
                        <input
                          id="formalPicture"
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          {...register("formalPicture", {
                            required: "Formal picture is required",
                            validate: {
                              maxSize: (value) => value[0]?.size <= 2 * 1024 * 1024 || "Max file size is 2MB"
                            }
                          })}
                          className="block w-full text-sm text-gray-500
                                     file:mr-4 file:py-2 file:px-4
                                     file:rounded-full file:border-0
                                     file:text-sm file:font-semibold
                                     file:bg-blue-50 file:text-blue-700
                                     hover:file:bg-blue-100"
                        />
                        {errors.formalPicture && <span className="text-red-500">{errors.formalPicture.message}</span>}
                      </fieldset>
                    </div>

                                      {/* SUBMIT */}
<button type="submit" className="tf-btn full" disabled={loading}>
  {loading ? "Sending..." : "Send"}
  <i className="icon-chevron-right" />
</button>

{/* SHOW AFTER SUBMIT */}
{sent && (
  <p className="text-center mt-3 text-sm text-gray-600">
    For inquiries regarding other Services,{" "}
    <a href="mailto:contact@Globirix.com" className="text-blue-600 underline">
      please email us at contact@Globirix.com
    </a>
  </p>
)}
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
