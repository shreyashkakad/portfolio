import Button from "../components/Button.jsx";
import { MailIcon } from "../components/Icons.jsx";
import { social } from "../data/socialLinks.js";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="label-hand">say hi!</p>
      <h2 className="contact__title">Open to backend roles.</h2>
      <p className="contact__text">Got a role, an internship, or a problem worth solving? Email me.</p>
      {social.email && (
        <Button href={social.email.href} icon={<MailIcon width={12} height={12} />}>
          shreyashvkakad@gmail.com
        </Button>
      )}
    </section>
  );
}
