// components/Faq.tsx

"use client";

import React from "react";
import { renderRichText } from "@/lib/renderRichText";
export function Faq({ faq }: any) {

    function toggleFaq(
        event: React.MouseEvent<HTMLButtonElement>
    ) {
        const btn = event.currentTarget;

        const item = btn.closest(".faq-item");
        if (!item) return;

        const isOpen = item.classList.contains("open");

        document
            .querySelectorAll(".faq-item")
            .forEach((i) => i.classList.remove("open"));

        if (!isOpen) {
            item.classList.add("open");
        }
    }

    return (
        <>
            {faq?.map((item: any, index: number) => (
                <div className="faq-item fade-in" key={index}>
                    <button
                        onClick={toggleFaq}
                        className="faq-question"
                    >
                        {item.title || "Question goes here?"}

                        <span className="faq-icon">+</span>
                    </button>

                    <div className="faq-answer">
                        {renderRichText(item.content)}
                    </div>
                </div>
            ))}
        </>
    );
}