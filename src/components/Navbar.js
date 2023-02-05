import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav className="navbar is-light has-shadow">
      <div className="navbar-brand is-align-items-center">
        <Link href="/" className="navbar-item">
          <Image
            src="/logo.png"
            width={128}
            height={77}
            style={{ maxHeight: "none" }}
            alt="logo"
          />
        </Link>
        <div
          className={"navbar-burger " + active}
          onClick={() => (active ? setActive("") : setActive("is-active"))}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={"navbar-menu " + active}>
        <div className="navbar-end">
          <Link className="navbar-item" href="/about">
            About
          </Link>
          <Link className="navbar-item" href="/ninjas">
            Ninja Listing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
