/**
 * Service to build structured, platform-aware prompts for OpenAI.
 */
const promptBuilder = ({ input, platform, tone, style, mode }) => {
  const isRewrite = mode === 'rewrite';

  const platformRules = {
    Instagram: `
- Include relevant emojis.
- Add 8–15 relevant, high-traffic hashtags at the end.
- Use a friendly, engaging tone.`,
    LinkedIn: `
- Professional and authoritative tone.
- Use clear line breaks for readability.
- Minimal to no emojis.
- Focus on practical value and professional storytelling.`,
    'Twitter (X)': `
- Format as a thread (5–10 tweets).
- Number each tweet (e.g., 1/, 2/).
- Each tweet must be under 280 characters.
- Use punchy, short sentences.`
  };

  const baseInstructions = isRewrite
    ? `Improve and rewrite the following content for ${platform}. 
Make it more engaging, improve clarity and flow, and add a strong hook. 
Tone: ${tone}.`
    : `Create 3 high-quality, platform-specific social media variations.
Input: ${input}
Platform: ${platform}
Tone: ${tone}
Style: ${style}
Requirements:
- Start each variation with a powerful attention-grabbing hook.
- Each of the 3 variations must be significantly different in tone, structure, and wording.
- Avoid repeating phrases across variations.
- Format for real-world usage (not robotic).`;

  return `
${baseInstructions}

Platform-Specific Rules for ${platform}:
${platformRules[platform] || platformRules.Instagram}

ASSIGNMENT:
Return ONLY a valid JSON array of exactly 3 objects. Do not include any extra text, explanation, or markdown formatting outside the JSON code.

Expected JSON Structure:
[
  {
    "hook": "string",
    "content": "string",
    "hashtags": "string",
    "engagementScore": number (1-10 based on hook strength, clarity, and platform fit)
  }
]

Input Content:
${input}
`;
};

module.exports = { promptBuilder };
