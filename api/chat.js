export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.body;
  
  // Adding .trim() automatically removes any invisible spaces copied by mistake
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    return res.status(500).json({ reply: 'Vercel Error: API key is missing.' });
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {


      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      })
    });

    const data = await response.json();
    
    // If Gemini rejects the request, send the exact reason to the chat bubble
    if (data.error) {
      return res.status(200).json({ reply: `Gemini API Error: ${data.error.message}` });
    }
    
    // Otherwise, send the AI's reply
    const reply = data.candidates[0].content.parts[0].text;
    res.status(200).json({ reply });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'Server Error: Could not parse AI response.' });
  }
}
