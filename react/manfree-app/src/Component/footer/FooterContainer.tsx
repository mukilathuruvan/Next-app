import React from "react";
import ContactPage from "./ContactPage";
import CourseList from "./CourseList";

const FooterContainer = () => {
  return (
    <div className="footer-container">
      <CourseList />
      <ContactPage />
    </div>
  );
};

export default FooterContainer;
