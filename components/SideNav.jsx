"use client";

import { faGear , faBook ,faFolderPlus , faFolder , faUser ,faUsers} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation';
import React, { useState, useMemo } from "react";
import classNames from "classnames";
import Link from "next/link";


const SideNav = () => {
    const pathName = usePathname();
    console.log(pathName);
    const menuItems = [
        { id: 1, label: "Rede social1", icon: faUsers, link: "/test1" , activeLinks:["/test1"]},
        { id: 2, label: "Rede social", icon: faUser, link: "/test" , activeLinks:["/test"]},
        { id: 3, label: "Collection", icon: faFolder, link: "/collection" , activeLinks:["/collection"]},
        { id: 4, label: "Create Collection", icon: faFolderPlus, link: "/collection/create-collection", activeLinks:["/collection/create-collection","/collection/update-collection"]},
        { id: 5, label: "Settings", icon: faGear, link: "/settings", activeLinks:["/settings"] },
    ];

    const activeMenu = useMemo(
        () => menuItems.find((menu) => pathName.includes(menu.activeLinks)),
        [pathName]
    );
    const wrapperClasses = classNames(
        "h-screen w-[5rem] px-4 pt-8 pb-4 mr-20 bg-light flex justify-between flex-col",
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
        <>
            {activeMenu && (<section className= {wrapperClasses}>
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
                            {
                            /*<span
                                className={classNames(
                                "text-md font-medium text-text-light"
                                )}
                            >
                                {menu.label}
                            </span>*/
                            }
                        </div>
                        </Link>
                    </div>
                    );
                })}
                </div>
            </section>)}
        </>
  );
};

export default SideNav;
