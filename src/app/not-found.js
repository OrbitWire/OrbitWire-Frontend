import React from "react";

const NotFound = () => {
    return (
        <main className="w-full min-h-screen flex items-center justify-center overflow-hidden">
            <h1 className="p-2 text-lg font-thin  flex items-center justify-center ">
                <span className="px-3.5 py-0.45 mr-3 bg-primary/30 border border-primary text-muted-foreground rounded-lg text-lg font-semibold">
                    404
                </span>
                <span className="border-l border-l-secondary pl-3 pr-5 relative font-thin">
                    The page you are looking for does not exist
                    <span className="absolute right-0 top-[25%] bg-primary animate-ping size-2 rounded-full"></span>
                </span>
            </h1>
        </main>
    );
};

export default NotFound;
