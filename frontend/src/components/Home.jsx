import React, { useState } from 'react';

const Home = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch('http://127.0.0.1:8000/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await res.json();
            setMessage('');
            setResponse(data);
        } catch (error) {
            console.error('Error:', error.message);
            setResponse({ error: 'An error occurred' });
        }
    };

    return (
        <div className='p-2'>
            <h1>Home Page</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="message"
                        className="text-lg font-semibold"
                    >
                        Message:
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
            {response && (
                <div>
                    <h2>Response:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Home;