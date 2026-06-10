import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section className="text-white flex-5 flex flex-col py-20 px-20 gap-20">
      {/* Contact Me */}
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#A6BBCC]">
          contact me
        </h1>
        <p className="text-xl mx-auto">How can I help?</p>
      </div>

      {/* contactme form */}
      <ContactForm />
    </section>
  );
};
