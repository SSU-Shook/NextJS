"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { handleLogout } from "@/lib/action";

const Links = ({ session }) => {
  const [open] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {session?.user ? (
          <>
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {open && <div className={styles.mobileLinks}></div>}
    </div>
  );
};

export default Links;
