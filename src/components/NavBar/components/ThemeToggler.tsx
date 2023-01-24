import React, { ReactElement } from "react";

import { FiMoon, FiSun } from "react-icons/fi";

import { useAppContext } from "~/store/useAppContext";

export const ThemeToggler = (): ReactElement => {
  const { isDarkMode, toggleDarkMode } = useAppContext();

  return (
    <div
      className="relative h-12 w-16 border-2 border-gray-700 dark:border-gray-300 rounded-[30px] flex justify-between  items-center px-[2px]"
      onClick={toggleDarkMode}
    >
      <div
        className={`absolute h-10 w-14 top-[2px]  ease-in duration-300 ${
          isDarkMode ? " left-[2px] " : " left-[18px] "
        } `}
      >
        <div
          className={`fixed w-10 h-10 bg-gray-700 dark:bg-gray-300 rounded-[20px] text-gray-900 flex justify-center items-center `}
        >
          <FiMoon
            className={`absolute text-gray-700 ${
              isDarkMode ? "scale-100" : "scale-0"
            }  ease-in duration-300`}
            size={30}
            strokeWidth={1.5}
          />
          <FiSun
            className={`absolute text-gray-300 ${
              !isDarkMode ? "scale-100" : "scale-0"
            }  ease-in duration-300`}
            size={30}
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  );
};
