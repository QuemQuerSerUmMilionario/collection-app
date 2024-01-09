"use client";

import { faGear , faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation';
import React, { useState, useMemo } from "react";
import classNames from "classnames";
import Link from "next/link";


const SideNav = () => {
    const pathName = usePathname()
    const menuItems = [
        { id: 1, label: "Collection", icon: faBook, link: "/collection" },
        { id: 2, label: "Configuration", icon: faGear, link: "/config" },
    ];

    const activeMenu = useMemo(
        () => menuItems.find((menu) => pathName.includes(menu.link)),
        [pathName]
    );
    const wrapperClasses = classNames(
        "h-screen w-[27rem] px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
        {
            ["hidden"]:!activeMenu
        }
      );
    const getNavItemClasses = (menu) => {
        return classNames(
            "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
            {
                ["bg-stone-200"]: ( activeMenu?activeMenu.id === menu.id : "" ),
            }
        );
    };
   

    return (
        <section className= {wrapperClasses}>
            <div className="flex flex-col items-start">
            {menuItems.map(({ icon: Icon, ...menu } , index) => {
                const classes = getNavItemClasses(menu);
                return (
                <div className={classes} key={index}>
                    <Link href={menu.link}>
                    <div className="flex py-4 px-3 items-center w-full h-full">
                        <div style={{ width: "2.5rem" }}>
                            <FontAwesomeIcon icon={Icon} />
                        </div>
                        {(
                        <span
                            className={classNames(
                            "text-md font-medium text-text-light"
                            )}
                        >
                            {menu.label}
                        </span>
                        )}
                    </div>
                    </Link>
                </div>
                );
            })}
            </div>
        </section>
  );
};

export default SideNav;
