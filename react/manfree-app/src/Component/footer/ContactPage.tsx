import { NavLink } from "react-router-dom";
import { contactInfo } from "../../Context/GlobalStore";
const con = contactInfo;
const ContactPage = () => {
  return (
    <section className="contact-container  course-list-parent">
      <h3 className="contact-header">{"Contact Us"}</h3>
      <ul className="contact-address">
        <li>{con.location.land}</li>
        <li>{con.location.road}</li>
        <li>{con.location.area}</li>
        <li>{con.location.city}</li>
        <li>{con.email}</li>
        <li>
          <NavLink to={"/contact"}>{con.phone}</NavLink>
        </li>
      </ul>
      <div className="empty"></div>
    </section>
  );
};

export default ContactPage;
