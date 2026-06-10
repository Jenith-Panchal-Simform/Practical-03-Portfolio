import { useState } from "react";
import emailjs from "@emailjs/browser";

type formData = {
  name: string;
  email: string;
  contact: string;
  message: string;
};
export const ContactForm = () => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [error, setError] = useState<string>("");

  const mobileRegex = /^[6-9]\d{9}$/;

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      contact: value,
    }));

    if (value.length === 0) {
      setError("");
    } else if (value.length < 10) {
      setError("Mobile number must be 10 digits");
    } else if (value.length > 10) {
      setError("Mobile number cannot exceed 10 digits");
    } else if (!mobileRegex.test(value)) {
      setError("Invalid mobile number");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.name.trim() == "" ||
      formData.email.trim() == "" ||
      formData.message.trim() == ""
    ) {
      setError("Field can not be empty");
      return;
    }
    if (error) {
      return;
    }
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Email sent!");

      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <label
          htmlFor="name"
          className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Name
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="contact"
          id="contact"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          value={formData.contact}
          onChange={handleContactChange}
          required
        />
        <label
          htmlFor="contact"
          className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Contact no.
        </label>
        <span className="text-red-500">{error ? error : ""}</span>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="message"
          id="message"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer resize-none"
          rows={5}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        <label
          htmlFor="message"
          className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          message
        </label>
      </div>
      <button
        type="submit"
        className="underline cursor-pointer text-white bg-brand box-border border border-transparent hover:font-semibold font-medium leading-5 rounded-base text-sm  py-4 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};
