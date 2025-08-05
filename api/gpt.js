import dotenv from 'dotenv';
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const callOpenAIApi = async(userMessage) => {

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo', // or 'gpt-4' if your key has access
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7
    })
  });


  const data = await response.json();
  console.log('OpenAI response',data);
  return data?.choices?.[0]?.message?.content || 'No response';


}