"use client";

import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";

import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="w-full h-[5rem] border-b border-b-border flex items-center justify-evenly fixed top-0">
            <div className="w-[5rem] h-full rounded-full overflow-hidden relative">
                {/* logo */}
                <Image
                    src={"/OrbitWire-logo.png"}
                    alt="logo"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex items-center justify-center gap-10">
                <NavigationMenu>
                    <NavigationMenuLink asChild>
                        <Link
                            href={"/"}
                            className={`px-3.5 py-1.5 rounded-md transition-colors focus:bg-primary ${
                                pathname === "/"
                                    ? "bg-primary text-primary-foreground  hover:bg-primary"
                                    : "text-foreground hover:bg-accent "
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

            <div className="absolute right-10">
                <ModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
