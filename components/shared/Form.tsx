"use client";
import Image from "next/image";
import { RenderHeading } from "@/components/shared/heading";
import { getStrapiMedia } from "@/lib/api";
import { validateContactForm, ContactFormData } from "@/utils/contactValidation";

import { useState } from "react";
interface Heading {
    title: string;
    subtitle?: string;
    text?: string;
}

interface BookOption {
    label: string;
    value: string;
}

interface BookField {
    idField: string;
    label: string;
    placeholder?: string;
    type:
    | "input"
    | "number"
    | "phone"
    | "email"
    | "textarea"
    | "select";
    options?: BookOption[];
}

interface Media {
    url: string;
    caption?: string;
}

interface BookInfo {
    title: string;
    description: string;
    icon?: Media;
}

export interface BookBlock {
    heading: Heading;
    info?: BookInfo[];
    fields?: BookField[];
}

interface BookSectionProps {
    data: BookBlock;
}

export default function BookSection({
    data,
}: BookSectionProps) {
    if (!data) return null;
    const initialFormState: ContactFormData =
        data.fields?.reduce((acc, field) => {
            acc[field.idField] = "";
            return acc;
        }, {} as ContactFormData) || {};


    const [formData, setFormData] = useState<ContactFormData>(initialFormState);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    const handleChange = (id: string, value: any) => {
        const updated = {
            ...formData,
            [id]: value,
        };
        setFormData(updated);
        // console.log("CHANGE FIELD:", id, value);
        // console.log("UPDATED FORM:", updated);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validation = validateContactForm(formData);

        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        try {
            setLoading(true);
            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                instrument: formData.instrument,
                age: formData.age,
            };

            const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-submit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            console.log("API RESPONSE:", data);
            if (!res.ok) throw new Error(data?.error?.message || "Submit failed");


            setErrors({});
            setFormData(initialFormState);
            alert("Submit success!");
        } catch (err) {
            console.error(err);
            alert("Submit failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact">
            <div className="fade-in">
                <RenderHeading heading={data.heading} />

                <div style={{ marginTop: "3rem" }}>
                    {data.info?.map(
                        (item, index) => (
                            <div
                                className="contact-detail"
                                key={`${item.title}-${index}`}
                            >
                                <div className="contact-icon">
                                    {item.icon?.url ? (
                                        <Image
                                            src={
                                                getStrapiMedia(
                                                    item.icon.url
                                                ) || ""
                                            }
                                            alt={
                                                item.icon
                                                    .caption ||
                                                item.title
                                            }
                                            width={24}
                                            height={24}
                                        />
                                    ) : (
                                        "📞"
                                    )}
                                </div>

                                <div>
                                    <h4> {item.title} </h4>

                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

            <div className="fade-in">
                <form className="contact-form" onSubmit={handleSubmit}>
                    {data.fields?.map(
                        (field) => (
                            <div
                                key={field.idField}
                                className={
                                    field.type === "input" || field.type === "select" ? "col-md-6 form-group" : "col-md-12 form-group"
                                }
                            >
                                <label htmlFor={field.idField}  >
                                    {field.label}
                                </label>

                                {[
                                    "input",
                                    "number",
                                    "phone",
                                    "email",
                                ].includes(
                                    field.type
                                ) && (
                                        <>
                                            <input
                                                id={field.idField}
                                                type={field.type === "phone" ? "tel" : field.type === "input" ? "text" : field.type}
                                                value={formData[field.idField] || ""}
                                                onChange={(e) =>
                                                    handleChange(
                                                        field.idField,
                                                        e.target.value
                                                    )
                                                }
                                                placeholder={
                                                    field.placeholder
                                                }
                                            />
                                            {errors[field.idField] && (
                                                <p
                                                    style={{
                                                        color: "red",
                                                        fontSize: "12px",
                                                        marginTop: "4px",
                                                    }}
                                                >
                                                    {errors[field.idField]}
                                                </p>
                                            )}
                                        </>

                                    )}

                                {field.type ===
                                    "textarea" && (
                                        <textarea
                                            id={
                                                field.idField
                                            }
                                            value={formData[field.idField] || ""}
                                            onChange={(e) =>
                                                handleChange(
                                                    field.idField,
                                                    e.target.value
                                                )
                                            }
                                            placeholder={
                                                field.placeholder
                                            }
                                        />
                                    )}

                                {field.type === "select" && (
                                    <>
                                        <select
                                            id={field.idField}
                                            value={formData[field.idField] || ""}
                                            onChange={(e) =>
                                                handleChange(
                                                    field.idField,
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">Select...</option>

                                            {field.options?.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>

                                        {errors[field.idField] && (
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontSize: "12px",
                                                    marginTop: "4px",
                                                }}
                                            >
                                                {errors[field.idField]}
                                            </p>
                                        )}
                                    </>
                                )}
                            </div>
                        )
                    )}

                    <button type="submit"
                        className="btn_primary"
                        disabled={loading}
                        style={{
                            border: "none",
                            cursor: "pointer",
                            justifyContent: "center",
                        }}
                    >
                        {loading
                            ? "Submitting..."
                            : "Book My Free Trial Lesson →"}
                    </button>

                    <p
                        style={{
                            fontSize: "0.8rem",
                            color: "var(--text-muted)",
                            textAlign: "center",
                        }}
                    >
                        We'll respond within 24 hours. No commitment required.
                    </p>
                </form>
            </div>
        </section>
    );
}

