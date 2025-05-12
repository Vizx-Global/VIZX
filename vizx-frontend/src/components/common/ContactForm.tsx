import React from "react";

const ContactForm = () => {
    return (
        <section className="w-full flex justify-center items-center py-16 px-4 bg-black">
            <div className="max-w-3xl w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">
                    REQUEST A <span className="text-orange-500">CALLBACK</span>
                </h2>
                <p className="text-center text-gray-400 mb-6">
                    Leave us your details, we will get back to you in 24 hours.
                </p>

                <form className="space-y-4">
                    {/* Name and Phone Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold text-white">Your Name</label>
                            <input type="text" placeholder="Name" className="w-full border px-4 py-2 rounded-md" />
                        </div>
                        <div>
                            <label className="block font-semibold text-white">Your Phone Number</label>
                            <input type="tel" placeholder="Tel." className="w-full border px-4 py-2 rounded-md" />
                        </div>
                    </div>

                    {/* Email and Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold text-white">Your Email</label>
                            <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-md" />
                        </div>
                        <div>
                            <label className="block font-semibold text-white">Company Name</label>
                            <input type="text" placeholder="Company LLC" className="w-full border px-4 py-2 rounded-md" />
                        </div>
                    </div>

                    {/* Industry */}
                    <div>
                        <label className="block font-semibold text-white">Your Industry</label>
                        <input type="text" placeholder="Hospitality, Travel, etc" className="w-full border px-4 py-2 rounded-md" />
                    </div>

                    {/* RPO Service Selection */}
                    <div>
                        <label className="block font-semibold text-white">Which RPO service are you interested in?</label>
                        <div className="flex flex-col space-y-2 text-gray-400">
                            <label><input type="checkbox" className="mr-2" /> Recruitment</label>
                            <label><input type="checkbox" className="mr-2" /> Quality Control / Compliance</label>
                            <label><input type="checkbox" className="mr-2" /> Staffing</label>
                            <label><input type="checkbox" className="mr-2" /> Payroll</label>
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block font-semibold text-white">Which kind of help are you looking for?</label>
                        <textarea
                            placeholder="We would like to know more to tailor our solutions for you."
                            className="w-full border px-4 py-2 rounded-md h-24"
                        ></textarea>
                    </div>

                    {/* Consent Checkbox */}
                    <div>
                        <label className="flex items-center text-gray-400">
                            <input type="checkbox" className="mr-2" />
                            By checking this box, you consent to receive email and SMS communications from VIZX Global regarding updates, promotions, and important notifications. Standard messaging rates may apply.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button className="bg-orange-400 text-white px-6 py-3 rounded-md w-full hover:bg-black transition">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
