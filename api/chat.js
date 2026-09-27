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
    // Step 1: Auto-discover available models for this specific API key
    const listResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const listData = await listResponse.json();
    
    if (!listData.models) {
      return res.status(200).json({ reply: 'API Error: Could not load the model list. Check API key permissions.' });
    }

    // Find the first model that explicitly supports text generation (preferring 'flash' for speed)
    const validModel = listData.models.find(m => 
      m.supportedGenerationMethods?.includes('generateContent') && m.name.includes('flash')
    ) || listData.models.find(m => m.supportedGenerationMethods?.includes('generateContent'));

    if (!validModel) {
      return res.status(200).json({ reply: 'API Error: No supported text generation models found for this key.' });
    }

    // Step 2: Send the user's message to the dynamically discovered model
    const chatResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/${validModel.name}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      })
    });

    const chatData = await chatResponse.json();
    
    if (chatData.error) {
      return res.status(200).json({ reply: `Chat Error: ${chatData.error.message}` });
    }
    
    const reply = chatData.candidates[0].content.parts[0].text;
    res.status(200).json({ reply });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'Server Error: Could not parse AI response.' });
  }
}
