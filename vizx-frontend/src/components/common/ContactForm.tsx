import React, { useState, ChangeEvent, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        industry: "",
        services: {
            recruitment: false,
            qualityControl: false,
            staffing: false,
            payroll: false,
        },
        message: "",
        consent: false,
        botcheck: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checkbox = e.target as HTMLInputElement;
            if (name in formData.services) {
                setFormData(prev => ({
                    ...prev,
                    services: {
                        ...prev.services,
                        [name]: checkbox.checked,
                    }
                }));
            } else {
                setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage("");

        if (formData.botcheck) {
            setResponseMessage("Bot detected. Submission rejected.");
            setIsSubmitting(false);
            return;
        }

        if (!formData.consent) {
            setResponseMessage("You must consent to communications to submit the form.");
            setIsSubmitting(false);
            return;
        }

        if (!recaptchaToken) {
            setResponseMessage("Please verify that you are not a robot.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('https://vizx-backend.vercel.app/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, recaptchaToken }),
            });

            setIsSubmitting(false);
            const result = await response.json();

            if (response.ok) {
                setResponseMessage(result.message || "Form submitted successfully!");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    company: "",
                    industry: "",
                    services: {
                        recruitment: false,
                        qualityControl: false,
                        staffing: false,
                        payroll: false,
                    },
                    message: "",
                    consent: false,
                    botcheck: ""
                });
                setRecaptchaToken(null);
            } else {
                setResponseMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setIsSubmitting(false);
            console.error("Submission error:", error);
            setResponseMessage("An error occurred while submitting the form. Please try again.");
        }
    };

    return (
        <section className="w-full flex justify-center items-center py-16 px-4 bg-black">
            <div className="max-w-3xl w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">
                    REQUEST A <span className="text-orange-500">CALLBACK</span>
                </h2>
                <p className="text-center text-gray-400 mb-6">
                    Leave us your details, we will get back to you in 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="botcheck"
                        value={formData.botcheck}
                        onChange={handleChange}
                        className="hidden"
                        autoComplete="off"
                        tabIndex={-1}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block font-semibold text-white">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full border px-4 py-2 rounded-md text-black"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block font-semibold text-white">Your Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Tel."
                                className="w-full border px-4 py-2 rounded-md text-black"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block font-semibold text-white">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border px-4 py-2 rounded-md text-black"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block font-semibold text-white">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Company LLC"
                                className="w-full border px-4 py-2 rounded-md text-black"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="industry" className="block font-semibold text-white">Your Industry</label>
                        <input
                            type="text"
                            id="industry"
                            name="industry"
                            placeholder="Hospitality, Travel, etc"
                            className="w-full border px-4 py-2 rounded-md text-black"
                            value={formData.industry}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-white">Which service are you interested in?</label>
                        <div className="flex flex-col space-y-2 text-gray-400 mt-2">
                            <label className="flex items-center"><input type="checkbox" name="contact-center" checked={formData.services.recruitment} onChange={handleChange} className="mr-2 leading-tight" /> CX Solutions</label>
                            <label className="flex items-center"><input type="checkbox" name="merchant-services" checked={formData.services.qualityControl} onChange={handleChange} className="mr-2 leading-tight" /> Merchant Services</label>
                            <label className="flex items-center"><input type="checkbox" name="rpo" checked={formData.services.staffing} onChange={handleChange} className="mr-2 leading-tight" /> RPO Solutions</label>
                            <label className="flex items-center"><input type="checkbox" name="back-office" checked={formData.services.payroll} onChange={handleChange} className="mr-2 leading-tight" /> Back Office</label>
                            <label className="flex items-center"><input type="checkbox" name="real-estate" checked={formData.services.payroll} onChange={handleChange} className="mr-2 leading-tight" /> Real Estate Solutions</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block font-semibold text-white">Which kind of help are you looking for?</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="We would like to know more to tailor our solutions for you."
                            className="w-full border px-4 py-2 rounded-md h-24 text-black"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="flex items-center text-gray-400">
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                className="mr-2 leading-tight"
                                required
                            />
                            By checking this box, you consent to receive email and SMS communications from VIZX Global regarding updates, promotions, and important notifications. Standard messaging rates may apply.
                        </label>
                    </div>

                    {/* reCAPTCHA Widget */}
                    <div className="flex justify-center">
                        <ReCAPTCHA
                            sitekey="6LeFOmwrAAAAAOqoGtvyXlo_-gMIcpXucogKREfp"
                            onChange={(token) => setRecaptchaToken(token)}
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-6 py-3 rounded-md w-full hover:bg-black transition disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "SUBMIT"}
                        </button>
                    </div>
                    {responseMessage && (
                        <p className={`text-center mt-4 ${responseMessage.includes("successfully") || responseMessage.includes("Form submitted successfully!") ? "text-green-500" : "text-red-500"}`}>
                            {responseMessage}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
