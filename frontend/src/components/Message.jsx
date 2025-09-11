import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import echo from '../echo';

const Message = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log('Component mounted');

        // Set up real-time listener
        echo.channel('messages')
            .listen('MessageSentEvent', (e) => {
                console.log(e);

                setMessages(prevMessages => [...prevMessages, e.message]);
                toast.success(`New message: ${e.message.text}`);
            });

        return () => {
            // Clean up the listener on component unmount
            echo.leaveChannel('messages');
        };
    }, []);
    return (
        <div className='p-2'>
            <h1>Messages Page</h1>
            <div>
                <h2>Message List:</h2>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg.text}</li>
                    ))}
                </ul>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Message;