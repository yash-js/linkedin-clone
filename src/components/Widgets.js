import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("LinkedIn Clone", "This is LinkedIn Clone")}
      {newsArticle(
        "React",
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components"
      )}
      {newsArticle(
        "Redux",
        "Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test."
      )}
      {newsArticle(
        "Firebase",
        "Firebase is a platform developed by Google for creating mobile and web application"
      )}
      {newsArticle(
        "Material UI",
        "React components for faster and easier web development. Build your own design system, or start with Material Design."
      )}
      {newsArticle(
        "Material Icon",
        "1,100+ React Material icons ready to use from the official website."
      )}
      {newsArticle(
        "Netlify",
        "A powerful serverless platform with an intuitive git-based workflow. Automated deployments, shareable previews, and much more."
      )}
    </div>
  );
}

export default Widgets;
