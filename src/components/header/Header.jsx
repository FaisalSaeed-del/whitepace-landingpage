import React from "react";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="background1">
      <section className="container">
        <nav className="flex justify-around">
          <div className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" />
            <span className="text-text3xl text-text1 font-Inter font-bold">
              whitepace
            </span>
          </div>
          <div className="flex">
            <ul className="flex flex-wrap  items-center gap-12 text-lg font-Inter font-medium text-text1">
              <li>
                <a href="#">Produtcs</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="gap-6 flex flex-wrap">
            <button className="bg-background3 py-2 px-11 text-lg font-Inter font-medium text-text3 rounded-lg">
              Login
            </button>
            <button className="py-2 px-12 bg-background4 text-lg font-medium rounded-lg text-text4 tracking-tightest">
              {" "}
              Try Whitepace free
            </button>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
