import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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
      {newsArticle("React new version launch", "Top news - over 15k readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 120k readers")}
      {newsArticle(
        "BlockChain side effects in new traders.",
        "Crypto - 23k readers"
      )}
      {newsArticle(
        "React-Native vs flutter",
        "Lets battle - 123 active readers"
      )}
      {newsArticle("React vs Angular vs Vue", "Top news - 5k readers")}
    </div>
  );
}

export default Widgets;
