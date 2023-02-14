import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

const config = { resize: "none" };

const useScrollbar = (root) => {
    useEffect(() => {
        let scrollbars;
        if (root.current) {
            scrollbars = OverlayScrollbars(root.current, config);
        }

        return () => {
            if (scrollbars) {
                scrollbars.destroy();
            }
        };
    }, [root]);
};

export { useScrollbar };
