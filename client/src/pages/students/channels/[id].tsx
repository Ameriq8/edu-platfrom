import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect, useRef } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<{ text: string; sender: string; date: string }[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user', date: getCurrentTime() }]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Sidebar />
        <h1 className="text-center p-4 bg-slate-100">قناة الاستاذ همام عباس</h1>

        <div className="flex-grow p-4 border-t border-gray-300 overflow-hidden">
          <div
            ref={messageContainerRef}
            className="overflow-y-auto h-full max-h-[calc(100vh-172px)]"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 rounded-lg w-2/6 ${
                  message.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'
                }`}
              >
                <div className="p-4">
                  <p className="break-words">{message.text}</p>
                  <p className="text-sm text-gray-500">{message.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-grow p-2 rounded-l-lg border border-gray-300"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover-bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex bg-gray-200 p-4">
        <button
          onClick={toggleSidebar}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`bg-gray-800 text-white h-screen w-56 fixed transition-transform transform ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-semibold">Sidebar</h1>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="p-4">
          <li className="py-2">Item 1</li>
          <li className="py-2">Item 2</li>
          <li className="py-2">Item 3</li>
        </ul>
      </div>
    </>
  );
};
