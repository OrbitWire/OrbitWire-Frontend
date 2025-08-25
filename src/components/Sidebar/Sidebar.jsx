"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { NavigationMenu, NavigationMenuLink } from "../ui/navigation-menu";
import Link from "next/link";

const Sidebar = () => {
    const path = usePathname();
    const theme = useTheme();

    // useEffect(()=>{
    //     if(path === "/")
    //     // api call for home categories

    //     if(path === "/gaming")
    //     // api call for gaming categories
    // },[])

    const categories = ["Trending", "Latest"];

    return (
        <aside className="w-[12%] h-[91.5vh] fixed left-0 bottom-0 border-r border-r-secondary/30 [backdrop-filter:blur(10px)] bg-neutral-900/10">
            {/* <div className="w-[10rem] h-[5rem] overflow-hidden relative">
                <Image
                    src="/OrbitWire-logo.png"
                    alt="logo"
                    fill
                    className="object-cover"
                />
            </div> */}

            <h1 className=" text-xl py-5 border-b border-b-secondary/30 text-center bg-secondary/10">
                Categories
            </h1>

            <div className="w-full h-full p-1.5 flex flex-col gap-1">
                {categories.map((cat, i) => {
                    return (
                        <Link
                            href={`#`}
                            key={i}
                            className="px-1 py-1.5 text-lg hover:bg-muted hover:text-muted-foreground rounded"
                        >
                            {cat}
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;
