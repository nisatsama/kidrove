import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ REAL API CALL INSIDE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const res = await fetch("http://localhost:5000/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (data.success) {
        alert("Registration successful 🚀");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Workshop Registration 📩
        </h2>
      </div>

      <div className="bg-white shadow-lg border rounded-2xl p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-xl"
            required
          />

          {/* Email */}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-xl"
            required
          />

          {/* Phone */}
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-3 border rounded-xl"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full py-3 rounded-xl text-white bg-blue-600"
          >
            {submitted ? "Submitting..." : "Register Now 🚀"}
          </button>
        </form>
      </div>
    </div>
  );
}
