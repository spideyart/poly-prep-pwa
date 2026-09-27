
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    return res.status(500).json({ reply: 'Vercel Error: API key is missing.' });
  }

  try {
    // Reverted to v1beta and added the -latest tag to the model name
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      return res.status(200).json({ reply: `API Error: ${data.error.message}` });
    }
    
    const reply = data.candidates[0].content.parts[0].text;
    res.status(200).json({ reply });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'Server Error: Could not parse AI response.' });
  }
}
