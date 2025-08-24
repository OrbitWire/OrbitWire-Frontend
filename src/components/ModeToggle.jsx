"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [hovering, setHovering] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Render nothing on SSR to prevent mismatch
        return null;
    }

    const isDark = theme === "dark";
    const toggleTheme = () => setTheme(isDark ? "light" : "dark");

    return (
        <Button
            variant="secondary"
            size="icon"
            onClick={toggleTheme}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => {
                setHovering(false);
            }}
            aria-label="Toggle theme"
            className="relative rounded-full bg-secondary/75"
        >
            <Sun
                strokeWidth={2.5}
                className={
                    "absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 " +
                    (isDark ? "scale-0 rotate-90" : "scale-100 rotate-0")
                }
            />
            <Moon
                className={
                    "absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 " +
                    (isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90")
                }
            />

            <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-[-70%] px-1.75 py-0.75 rounded-md bg-secondary text-secondary-foreground text-sm transition-all       duration-300 ${
                    hovering
                        ? "opacity-100 translate-y-2"
                        : "opacity-0 translate-y-0"
                } text-xs`}
            >
                {isDark ? "Light Mode" : "Dark Mode"}

                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 size-2 bg-secondary rotate-45 transition-all duration-300"></span>
            </span>
        </Button>
    );
}
