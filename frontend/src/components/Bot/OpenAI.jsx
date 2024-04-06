import React, { useState } from "react";
import axios from 'axios';

export default function OpenAI() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const askQuestion = async () => {
        try {
          const response = await axios.post('/ask', { question });
          setAnswer(response.data.answer);
        } catch (error) {
          console.error('Error fetching the answer:', error);
          setAnswer('Failed to get an answer.');
        }
    };

    return (
        <div>
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Ask me anything..."
          />
          <button onClick={askQuestion}>Ask</button>
          <p>Answer: {answer}</p>
        </div>
      );

}