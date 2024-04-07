import React, { useState } from "react";
import axios from 'axios';
import './OpenAI.css'; 

export default function OpenAI() {
    const [question, setQuestion] = useState('');
    const [conversation, setConversation] = useState([]);

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const askQuestion = async () => {
        if (!question.trim()) return;
        try {
            const response = await axios.post('http://localhost:5555/bot/ask', { question });
            setConversation([...conversation, { role: 'user', content: question }, { role: 'assistant', content: response.data.answer }]);
            setQuestion(''); 
        } catch (error) {
            console.error('Error fetching the answer:', error);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                <div className="chat-header">
                    Ask Me Anything!
                </div>
                <div className="chat-body">
                    {conversation.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.role}`}>
                            <div className="message-content">{msg.content}</div>
                        </div>
                    ))}
                </div>
                <div className="chat-footer">
                    <input
                        type="text"
                        value={question}
                        onChange={handleQuestionChange}
                        onKeyDown={event => event.key === 'Enter' && askQuestion()}
                        placeholder="Type your message..."
                        className="message-input"
                    />
                    <button onClick={askQuestion} className="send-button">Send</button>
                </div>
            </div>
        </div>
    );
}
