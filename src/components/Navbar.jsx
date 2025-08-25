"use client";

import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Gamepad2, House, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { MdOutlineSportsTennis } from "react-icons/md";
import { LiaTrophySolid } from "react-icons/lia";
import { GrTechnology } from "react-icons/gr";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";
import ThemeToggleButton from "./ui/theme-toggle-button";

const Navbar = () => {
    const pathname = usePathname();
    const { theme } = useTheme();
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <nav className="w-full h-[8.5vh] border-b border-b-border flex items-center justify-between fixed top-0 z-50 ">
            <div className="w-[10rem] h-full overflow-hidden relative">
                <Image
                    src="/logo-black.png"
                    alt="dark logo"
                    fill
                    className="absolute inset-0 object-cover dark:block hidden"
                />
                <Image
                    src="/OrbitWire-logo.png"
                    alt="light logo"
                    fill
                    className="absolute inset-0 object-cover dark:hidden block"
                />
            </div>

            {/* desktop navbar */}
            <div className="hidden md:block p-2 border border-border/50 rounded">
                <NavigationMenu
                    className={" md:flex items-center justify-center gap-2"}
                >
                    <NavigationMenuLink asChild>
                        <Link
                            href={"/"}
                            className={`px-3.5 py-1.5 rounded-md transition-colors focus:bg-primary  ${
                                pathname === "/"
                                    ? "bg-primary text-primary-foreground hover:bg-primary"
                                    : "text-foreground hover:bg-accent hover:outline"
                            }`}
                        >
                            Home
                        </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                        <Link
                            href={"/gaming"}
                            className={`px-3.5 py-1.5 rounded-md transition-colors focus:bg-primary ${
                                pathname === "/gaming"
                                    ? "bg-primary text-primary-foreground hover:bg-primary"
                                    : "text-foreground hover:bg-accent "
                            }`}
                        >
                            Gaming
                        </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                        <Link
                            href={"/esports"}
                            className={`px-3.5 py-1.5 rounded-lg transition-colors focus:bg-primary ${
                                pathname === "/esports"
                                    ? "bg-primary text-primary-foreground hover:bg-primary"
                                    : "text-foreground hover:bg-accent "
                            }`}
                        >
                            E-Sports
                        </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                        <Link
                            href={"/sports"}
                            className={`px-3.5 py-1.5 rounded-md transition-colors focus:bg-primary ${
                                pathname === "/sports"
                                    ? "bg-primary text-primary-foreground hover:bg-primary"
                                    : "text-foreground hover:bg-accent "
                            }`}
                        >
                            Sports
                        </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                        <Link
                            href={"/technology"}
                            className={`px-3.5 py-1.5 rounded-md transition-colors focus:bg-primary ${
                                pathname === "/technology"
                                    ? "bg-primary text-primary-foreground hover:bg-primary"
                                    : "text-foreground hover:bg-accent "
                            }`}
                        >
                            Technology
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenu>
            </div>

            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger>
                        <Menu size={23} className={`${open && "hidden"}`} />
                    </SheetTrigger>
                    <SheetContent side="right" className="p-3 sm:p-6 w-[50%]">
                        <SheetHeader>
                            <SheetTitle
                                className={
                                    "text-lg sm:text-xl sm:[letter-spacing:0.15rem]"
                                }
                            >
                                Navigation Menu
                            </SheetTitle>
                        </SheetHeader>

                        {/* Mobile Navigation */}

                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className={`px-3 py-2 rounded-md border border-border/50 flex items-center gap-1 space-x-1 text-sm sm:text-[16px] ${
                                    pathname === "/"
                                        ? "bg-primary text-primary-foreground"
                                        : "text-parimary-foreground hover:bg-accent/30"
                                }`}
                                onClick={handleLinkClick}
                            >
                                <House
                                    size={20}
                                    strokeWidth={2}
                                    className="inline"
                                />
                                <Separator
                                    orientation="vertical"
                                    className={"bg-secondary/50 mr-1"}
                                />
                                Home
                            </Link>

                            <Link
                                href="/gaming"
                                className={`px-3 py-2 rounded-md border border-border/50 flex items-center gap-1 space-x-1 text-sm sm:text-[16px] ${
                                    pathname === "/gaming"
                                        ? "bg-primary text-primary-foreground"
                                        : "text-parimary-foreground hover:bg-accent/30"
                                }`}
                                onClick={handleLinkClick}
                            >
                                <Gamepad2
                                    strokeWidth={2}
                                    size={20}
                                    className="inline"
                                />
                                <Separator
                                    orientation="vertical"
                                    className={"bg-secondary/50 mr-1"}
                                />
                                Gaming
                            </Link>
                            <Link
                                href="/esports"
                                className={`px-3 py-2 rounded-md border border-border/50 flex items-center gap-1  space-x-1 text-sm sm:text-[16px] ${
                                    pathname === "/esports"
                                        ? "bg-primary text-primary-foreground"
                                        : "text-parimary-foreground hover:bg-accent/30"
                                }`}
                                onClick={handleLinkClick}
                            >
                                <LiaTrophySolid className="inline text-xl" />
                                <Separator
                                    orientation="vertical"
                                    className={"bg-secondary/50 mr-1"}
                                />
                                E-Sports
                            </Link>
                            <Link
                                href="/sports"
                                className={`px-3 py-2 rounded-md flex border border-border/50 items-center gap-1 space-x-1 text-sm sm:text-[16px] ${
                                    pathname === "/sports"
                                        ? "bg-primary text-primary-foreground"
                                        : "text-parimary-foreground hover:bg-accent/30"
                                }`}
                                onClick={handleLinkClick}
                            >
                                <MdOutlineSportsTennis className="inline text-xl" />
                                <Separator
                                    orientation="vertical"
                                    className={"bg-secondary/50 mr-1"}
                                />
                                Sports
                            </Link>
                            <Link
                                href="/technology"
                                className={`px-3 py-2 rounded-md border border-border/50 flex items-center gap-1 space-x-1 text-sm sm:text-[16px] ${
                                    pathname === "/technology"
                                        ? "bg-primary text-primary-foreground"
                                        : "text-parimary-foreground hover:bg-accent/30"
                                }`}
                                onClick={handleLinkClick}
                            >
                                <GrTechnology className="inline text-xl " />
                                <Separator
                                    orientation="vertical"
                                    className={"bg-secondary/50 mr-1"}
                                />
                                Technology
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="absolute right-10">
                {/* <ModeToggle /> */}
                <ThemeToggleButton variant="circle" start="top-right" />
            </div>
        </nav>
    );
};

export default Navbar;
