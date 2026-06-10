export const ContactForm = () => {
  return (
    <form className="w-2/3 mx-auto">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
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
          placeholder=" "
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
          type="contact"
          name="contact"
          id="contact"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="contact"
          className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:inset-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Contact no.
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="message"
          id="message"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer resize-none"
          rows={5}
          placeholder=" "
          required
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
