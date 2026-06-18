"use client";

import { useEffect } from "react";

export default function Animation() {
    useEffect(() => {
        // Mobile menu
        const hamburger =
            document.getElementById("hamburger");

        const handleMenu = () => {
            document
                .getElementById("main-nav")
                ?.classList.toggle("open");
        };

        hamburger?.addEventListener(
            "click",
            handleMenu
        );

        // Scroll fade-in
        const observer =
            new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(
                                "visible"
                            );
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin:
                        "0px 0px -40px 0px",
                }
            );

        document
            .querySelectorAll(".fade-in")
            .forEach((el, i) => {
                (
                    el as HTMLElement
                ).style.transitionDelay =
                    (i % 4) * 0.1 + "s";

                observer.observe(el);
            });

        return () => {
            hamburger?.removeEventListener(
                "click",
                handleMenu
            );

            observer.disconnect();
        };
    }, []);

    return <></>;
}