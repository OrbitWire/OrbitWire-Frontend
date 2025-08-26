"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { PanelRightClose } from "lucide-react";
import { ShimmeringText } from "../ui/shadcn-io/shimmering-text";

const Sidebar = () => {
    const path = usePathname();
    const theme = useTheme();

    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const categories = ["Trending", "Latest", "Hot", "Cool", "Killer"];

    return (
        <aside
            className={`h-[91.5vh] fixed left-0 bottom-0 border-r border-r-secondary/30 [backdrop-filter:blur(10px)] bg-muted/10 
      transition-all duration-300 ease-in z-50 ${
          isPanelOpen
              ? "w-[50%] sm:w-[30%] md:w-[20%] lg:w-[15%]"
              : "w-[10%] sm:w-[3rem]"
      }`}
        >
            {/* Header */}
            <div className="relative flex items-center justify-center border-b border-b-secondary/30 h-13">
                <h1
                    className={`absolute left-3 text-lg font-semibold whitespace-nowrap transition-opacity duration-300 
                    ${isPanelOpen ? "opacity-100" : "opacity-0"}`}
                >
                    Categories
                </h1>

                <button
                    onClick={() => setIsPanelOpen(!isPanelOpen)}
                    className={`absolute ${
                        isPanelOpen ? "right-2" : "right-1"
                    } p-1 hover:bg-secondary/10  rounded transition `}
                >
                    <PanelRightClose
                        // size={25}
                        strokeWidth={1.5}
                        className={`transition-transform duration-300 text-secondary/80 ${
                            isPanelOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </div>

            <ShimmeringText
                text="Expand to see categories"
                duration={2}
                // shimmeringColor="hsl(var(--secondary))"
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-sm sm:text-[0.9rem] [letter-spacing:1px] font-thin text-muted-foreground transition-opacity duration-200 ${
                    isPanelOpen ? "opacity-0" : "opacity-100"
                }`}
            />

            {/* Links */}
            <div className="w-full h-full p-1.5 flex flex-col gap-1">
                {categories.map((cat, i) => (
                    <Link
                        href="#"
                        key={i}
                        className={`flex items-center rounded transition-all duration-300 
                        hover:bg-muted hover:text-muted-foreground
                        ${
                            isPanelOpen
                                ? "justify-start gap-2 px-3 py-2"
                                : "hidden"
                        }`}
                    >
                        <span
                            className={`transition-opacity duration-300 ${
                                isPanelOpen ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            {cat}
                        </span>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
