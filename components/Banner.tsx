// components/HeroSection.tsx
import React from 'react';

// Định nghĩa kiểu dữ liệu (TypeScript) - Nếu dùng JS bạn có thể bỏ qua phần interface này
interface HeroProps {
    data: {
        heading?: {
            subtitle?: string;
            title?: string;
            text?: string;
        };
        button?: Array<{
            link?: string;
            name?: string;
            style?: string;
        }>;
        list_item?: Array<{
            title?: string;
            description?: string;
        }>;
    };
}

export default function Banner({ data }: HeroProps) {
    // Nếu không có dữ liệu thì không render gì cả
    if (!data) return null;

    return (
        <section id="hero">
            <div className="hero-content">
                <div className="hero-tag">
                    {data?.heading?.subtitle || "Music Education Since 2015"}
                </div>

                <h1
                    className="hero-title hightline"
                    dangerouslySetInnerHTML={{
                        __html: data?.heading?.title || "Learn Music<br />the <em>Right Way</em> —<br />From Day One"
                    }}
                />

                <p className="hero-sub">{data?.heading?.text}</p>

                <div className="hero-ctas">
                    {data?.button?.map((btn: any, index: number) => (
                        <a
                            key={index}
                            href={btn.link || "#"}
                            className={btn.style}
                        >
                            {btn.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-card">
                    <span className="hero-card-note">𝄞</span>
                    <div className="hero-stats">
                        {data?.list_item?.map((item: any, index: number) => (
                            <div className="stat" key={index}>
                                <span className="stat-num">{item.title}</span>
                                <span className="stat-label">{item.description}</span>
                            </div>
                        ))}
                    </div>

                    <div className="hero-instruments">
                        <span className="instrument-tag">🎹 Piano</span>
                        <span className="instrument-tag">🎸 Guitar</span>
                        <span className="instrument-tag">🎻 Violin</span>
                        <span className="instrument-tag">🎤 Vocals</span>
                        <span className="instrument-tag">🎼 Theory</span>
                    </div>
                </div>
            </div>
        </section>
    );
}