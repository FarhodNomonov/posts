import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppealsIcon,
  HelpIcon,
  OtherIcon,
  SettingsIcon,
  UserIcon,
} from "../assets/icon/icon";
import "./footer.css"

function Footer({ links = [] }) {
  const location = useLocation();

  const footerLinks = [
    {
      title: "Обращения",
      link: "/appeals",
      icon: <AppealsIcon />,
    },
    {
      title: "Визитки",
      link: "/visit",
      icon: <UserIcon />,
    },
    {
      title: "SOS",
      link: "/sos",
      icon: <HelpIcon />,
    },
    {
      title: "Лайон",
      link: "/settings",
      icon: <SettingsIcon />,
    },
    {
      title: "Больше",
      link: "/other",
      icon: <OtherIcon />,
    },
  ];
  return (
    <div className="footer">
      <div className="footer_content">
        {(links.length === 0 ? footerLinks : links).map((item, i) => {
          return (
            <Link
              className={item?.link === location.pathname ? "active" : ""}
              key={item?.title}
              to={item?.link}
            >
              <div>{item?.icon}</div>
              <p>{item?.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
