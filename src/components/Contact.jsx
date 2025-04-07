import React from 'react';
``
const Contact = () => {
    return (
        <section className=" p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;