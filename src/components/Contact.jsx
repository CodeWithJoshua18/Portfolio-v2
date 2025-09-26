import { CONTACT } from "../constants";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get In Touch</h1>

      <div className="text-center tracking-tighter">
        <p className="my-4">
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="hover:text-blue-400 transition-colors"
          >
            {CONTACT.phoneNo}
          </a>
        </p>
        <p className="my-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-green-400 "
          >
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
