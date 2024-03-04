import { useState, useEffect } from "react";

type ScrollDirectionType = "up" | "down";

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirectionType>("up");

    useEffect(() => {
        let previousScrollYPosition = window.scrollY;

        function updateScrollDirection() {
            const currentScrollYPosition = window.scrollY;
            const newScrollDirection = currentScrollYPosition < previousScrollYPosition ? "up" : "down";
            setScrollDirection(newScrollDirection);
            previousScrollYPosition = currentScrollYPosition > 0 ? currentScrollYPosition : 0;
        }

        const onScroll = function () {
            return window.requestAnimationFrame(updateScrollDirection);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return scrollDirection;
}

export { useScrollDirection };
