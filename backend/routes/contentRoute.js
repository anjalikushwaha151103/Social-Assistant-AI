const express = require('express');
const router = express.Router();
const { promptBuilder } = require('../services/promptBuilder');
const { geminiService } = require('../services/geminiService');

/**
 * Validation Layer for AI response
 */
const validateResponse = (data) => {
  if (!Array.isArray(data) || data.length === 0) return false;
  return data.every(item => 
    item.hook && 
    item.content && 
    typeof item.engagementScore === 'number'
  );
};

router.post('/generate', async (req, res) => {
  let { input, platform, tone, style, mode } = req.body;

  // 1. Sanitize & Validate Input
  if (!input || typeof input !== 'string') {
    return res.status(400).json({ error: 'Input content is required.' });
  }

  input = input.trim();
  if (input.length > 500) {
    return res.status(400).json({ error: 'Input too long (max 500 characters).' });
  }

  // 2. Set Defaults
  platform = platform || 'Instagram';
  tone = tone || 'Casual';
  style = style || 'Educational';
  mode = mode || 'generate';

  try {
    // 3. Build Prompt & Call AI
    const prompt = promptBuilder({ input, platform, tone, style, mode });
    const rawResponse = await geminiService(prompt);

    // 4. Parse & Validate JSON
    let parsedData;
    try {
      // Small cleanup in case AI adds markdown code blocks
      const cleanResponse = rawResponse.replace(/```json|```/g, '').trim();
      parsedData = JSON.parse(cleanResponse);
    } catch (parseError) {
      console.error('JSON Parse Error:', rawResponse);
      return res.status(500).json({ error: 'Failed to parse AI response. Please try again.' });
    }

    if (!validateResponse(parsedData)) {
      return res.status(500).json({ error: 'AI returned invalid content structure. Please try again.' });
    }

    // 5. Success
    res.json({ variations: parsedData });

  } catch (error) {
    console.error('Content Generation Error:', error);
    res.status(500).json({ error: 'Service temporarily unavailable. Please try again later.' });
  }
});

module.exports = router;
