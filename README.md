#  AI Social Media Assistant 

Transform your ideas into high-engagement social media content across Instagram, LinkedIn, and Twitter in seconds. Powered by **Google Gemini AI**.

---

##  Key Features

- ** Platform-Specific Intelligence**: Automatically adjusts tone, hashtags, and formatting for Instagram, LinkedIn, and Twitter (X).
- ** Smart Mode Toggle**: Switch between **Generate** (create from scratch) and **Rewrite** (polish existing drafts).
- ** Customizable Tone & Style**: Choose from Professional, Casual, Motivational, Funny, or Educational styles.
- ** Real-time Previews**: Interactive glassmorphism UI with live mockups for different platforms.
- ** AI-Powered Efficiency**: Powered by Gemini 1.5 Flash for lightning-fast, high-quality content generation.

---

##  Technology Stack

- **Frontend**: React.js, Vanilla CSS (Premium Glassmorphism Design), Axios.
- **Backend**: Node.js, Express.js.
- **AI Engine**: Google Generative AI (Gemini Flash).
- **Tooling**: Concurrently (multi-run), Dotenv (security).

---

##  Quick Start

### 1. Prerequisites
- Node.js installed on your machine.
- A **Google Gemini API Key** (Get one for free at [Google AI Studio](https://aistudio.google.com/app/apikey)).

### 2. Environment Setup
Clone the repository and create your secret environment file in the `backend` directory:

```bash
cd backend
cp .env.example .env
```

Edit the `.env` file and add your API key:
```env
GEMINI_API_KEY=your_actual_key_here
PORT=5000
```

### 3. One-Click Installation & Run
From the root directory, simply run:

```bash
npm run install-all  # Installs both frontend & backend dependencies
npm start            # Launches both servers concurrently
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:5000](http://localhost:5000)

---

##  Project Structure

```text
├── backend/
│   ├── services/
│   │   ├── geminiService.js   # Gemini AI integration logic
│   │   └── promptBuilder.js   # Multi-platform prompt engineering
│   ├── routes/
│   │   └── contentRoute.js    # API Endpoints & input validation
│   └── server.js              # Express server entry
├── frontend/src/
│   ├── components/            # UI components (Form, Preview, etc.)
│   ├── App.js                 # Main React logic
│   └── App.css                # Premium Glassmorphism styling
└── package.json               # Root manager for concurrent execution
```

---

##  Security & Best Practices

- **Hidden Secrets**: The `.env` file is excluded from Git via `.gitignore`.
- **Template System**: Use `.env.example` as a template for other developers.
- **Production Safety**: When deploying, always use environment variable secrets (e.g., GitHub Secrets) instead of committing environment files.

---

##  Troubleshooting

- **404 Not Found**: Ensure you are using a supported model name (e.g., `gemini-1.5-flash`). Note: Some API keys may have different model availability.
- **503 Service Unavailable**: This usually means the Google AI free tier is under high demand. Wait a few seconds and try again.
- **429 Too Many Requests**: You have hit the rate limit for your current tier.

---

##  License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
