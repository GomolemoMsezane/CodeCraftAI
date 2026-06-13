const express = require('express');
const router = express.Router();

async function callGroq(prompt) {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.GROQ_API_KEY
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  const data = await response.json();
  if (data.choices && data.choices[0]) {
    return data.choices[0].message.content;
  }
  throw new Error(data.error ? data.error.message : 'Unknown error');
}

router.post('/generate-code', async (req, res) => {
  try {
    const { description, language = 'javascript' } = req.body;
    const result = await callGroq(`Write ${language} code for: ${description}. Return only the code.`);
    res.json({ code: result });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/optimize-code', async (req, res) => {
  try {
    const { code, language = 'javascript' } = req.body;
    const result = await callGroq(`Optimize this ${language} code:\n\n${code}\n\nReturn only optimized code.`);
    res.json({ code: result });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/analyze-code', async (req, res) => {
  try {
    const { code, language = 'javascript' } = req.body;
    const result = await callGroq(`Analyze this ${language} code for bugs:\n\n${code}`);
    res.json({ analysis: result });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/generate-docs', async (req, res) => {
  try {
    const { code, language = 'javascript' } = req.body;
    const result = await callGroq(`Generate docs for this ${language} code:\n\n${code}`);
    res.json({ docs: result });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
