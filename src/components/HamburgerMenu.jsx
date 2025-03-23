import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icons } from "../components/ui/Icons";

export default function HamburgerMenu({ NAVLINKS }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeAfterClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 700);
  };

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <section className="flex flex-col items-end justify-center gap-8 text-black">
      <div className="md:hidden text-black flex">
        <button onClick={toggleNavbar}>
          {isOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <ul className="sticky z-50 flex flex-col items-end justify-center gap-8 text-black">
              {NAVLINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={closeAfterClick}
                    className="underline-animation"
                  >
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
