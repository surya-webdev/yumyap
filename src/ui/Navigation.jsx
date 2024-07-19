import { NavLink } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useCurrAuth } from "../service/useCurrAuth";
import { useState } from "react";
import { signOut } from "../service/dataApi";
import useSignOut from "../service/useSignOut";

function Navigation() {
  const links = [
    { link: "/", title: "Home" },
    { link: "/cart", title: "Cart" },
    { link: "/orders", title: "Orders" },
  ];
  const { mutate, isLoading } = useSignOut();

  const { isCurrUser = {} } = useCurrAuth();
  const { fullName = "" } = isCurrUser.user_metadata;

  const [isOpen, setIsopen] = useState(false);

  return (
    <header className="relative">
      <nav className="mx-auto flex items-center justify-between">
        <img
          className="h-10 w-[6.2rem] md:h-20 md:w-[10rem]"
          src="logo.png"
          alt="logo "
        />
        <ul className="mx-2 hidden items-center justify-center gap-4 text-xl sm:flex">
          {links.map((items) => (
            <li key={items.link}>
              <NavLink
                to={items.link}
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                {items.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mx-2 hidden items-center justify-center gap-4 text-xl text-primary sm:flex">
          <p>{fullName}</p>
          <img
            className="h-10 w-10"
            src="./default-user.jpg"
            alt="default user"
          />
        </div>
        {/* Mobile navigation */}
        <div className="m-2 flex gap-2 sm:hidden">
          <p className="flex items-center gap-2 text-xl text-primary">
            {fullName}
          </p>
          <img className="h-8 w-8" src="./default-user.jpg" />
          <button
            className="z-20 text-4xl"
            onClick={() => setIsopen((s) => !s)}
          >
            {isOpen ? <MdClose /> : <MdRestaurantMenu />}
          </button>
          {isOpen && (
            <ul className="fixed right-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-4 bg-white text-2xl">
              {links.map((items) => (
                <li key={items.link}>
                  <NavLink
                    onClick={() => setIsopen((s) => !s)}
                    to={items.link}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    {items.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
