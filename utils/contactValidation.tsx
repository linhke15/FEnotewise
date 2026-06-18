export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    instrument: string;
    age: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
}

export const validateContactForm = (
    data: ContactFormData
): ValidationResult => {
    const errors: Record<string, string> = {};

    if (!data.firstName?.trim()) {
        errors.firstName = "First name is required";
    }

    if (!data.lastName?.trim()) {
        errors.lastName = "Last name is required";
    }

    if (!data.email?.trim()) {
        errors.email = "Email is required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
    ) {
        errors.email = "Please enter a valid email";
    }

    if (!data.phone?.trim()) {
        errors.phone = "Phone number is required";
    } else if (
        !/^[0-9+\-\s()]{8,20}$/.test(data.phone)
    ) {
        errors.phone = "Please enter a valid phone number";
    }

    if (!data.instrument) {
        errors.instrument = "Please select an instrument";
    }

    if (!data.age) {
        errors.age = "Please select an age group";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};