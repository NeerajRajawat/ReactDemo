import React from "react";

function Footer(props) {
  return (
    <>
      <nav className={ `navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} fixed-bottom`}>
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li className="nav-item"><a className="nav-link">copyright &copy;  2023</a></li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default Footer;
