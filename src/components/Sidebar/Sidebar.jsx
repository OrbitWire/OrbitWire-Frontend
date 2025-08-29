"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PanelRightClose } from "lucide-react";
import { ShimmeringText } from "../ui/shadcn-io/shimmering-text";
import { Button } from "../ui/button";

const Sidebar = () => {
    const path = usePathname();
    const theme = useTheme();
    const sidebarRef = useRef(null);

    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const [categories, setCategories] = useState([]);

    const getCategories = (path) => {
        switch (path) {
            case "/":
                setCategories([
                    "Featured",
                    "Trending",
                    "Latest",
                    "Reviews",
                    "Guides",
                ]);
                break;
            case "/gaming":
                setCategories([
                    "Hub",
                    "PC",
                    "Mobile",
                    "Console",
                    "GTA News",
                    "Minecraft",
                    "Indie Games",
                    "Discounts and Offers",
                ]);
                break;
            case "/esports":
                setCategories([
                    "Valorant",
                    "Counter-Strike",
                    "PUBG",
                    "BGMI",
                    "League of Legends",
                    "Dota 2",
                    "Tournaments",
                ]);
                break;
            case "/sports":
                setCategories([
                    "Cricket",
                    "Football",
                    "Formula 1",
                    "Tennis",
                    "Basketball",
                    "Kabaddi",
                ]);
                break;
            case "/technology":
                setCategories([
                    "Gadgets",
                    "AI",
                    "Smartphones",
                    "Laptops",
                    "Science",
                    "Apps & Software",
                    "Reviews",
                ]);
                break;
            default:
                setCategories([]);
                break;
        }
    };

    //determin categories
    useEffect(() => {
        getCategories(path);
    }, [path]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setIsPanelOpen(false);
            }
        };

        if (isPanelOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isPanelOpen]);

    return (
        <aside
            ref={sidebarRef}
            className={`h-[91.5vh] fixed left-0 top-[8.5vh] border-r border-r-secondary/30 [backdrop-filter:blur(3px)] bg-muted/10 
      transition-all duration-300 ease-in z-40 ${
          isPanelOpen
              ? "w-[50%] sm:w-[30%] md:w-[20%] lg:w-[15%]"
              : "w-[10%] sm:w-[3rem]"
      }`}
            onClick={() => setIsPanelOpen(true)}
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
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsPanelOpen(!isPanelOpen);
                    }}
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
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-sm sm:text-[0.9rem] [letter-spacing:1px] font-thin text-muted-foreground transition-opacity duration-200 cursor-default ${
                    isPanelOpen
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                }`}
            />

            {/* Links */}
            <div className="w-full h-full p-1.5 flex flex-col gap-1">
                {categories.map((cat, i) => (
                    <Button
                        key={cat}
                        variant={"link"}
                        className={`text-secondary transition-all duration-300 text-left flex items-center justify-start rounded hover:bg-muted hover:text-muted-foreground ${
                            isPanelOpen
                                ? "gap-2 px-3 py-2 opacity-100"
                                : "opacity-0 pointer-events-none"
                        }`}
                        asChild
                    >
                        <Link href="#">{cat}</Link>
                    </Button>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
