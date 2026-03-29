import React from 'react';

const ContentForm = ({ 
  input, 
  setInput, 
  platform, 
  setPlatform, 
  tone, 
  setTone, 
  style, 
  setStyle, 
  mode, 
  setMode, 
  onGenerate, 
  loading 
}) => {
  const charLimit = 500;

  return (
    <div className="form-section glass">
      <div className="input-group">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <label>Your Idea / Content</label>
          <div className="mode-selector" style={{ 
            display: 'flex', 
            background: 'hsla(0, 0%, 0%, 0.3)', 
            padding: '0.25rem', 
            borderRadius: '0.75rem',
            border: '1px solid var(--glass-border)'
          }}>
            <span 
              onClick={() => setMode('generate')}
              style={{ 
                cursor: 'pointer', 
                padding: '0.4rem 0.8rem',
                borderRadius: '0.6rem',
                backgroundColor: mode === 'generate' ? 'var(--primary)' : 'transparent',
                color: mode === 'generate' ? '#fff' : 'var(--text-muted)', 
                fontSize: '0.7rem', 
                fontWeight: '800',
                transition: 'all 0.3s ease'
              }}
            >GENERATE</span>
            <span 
              onClick={() => setMode('rewrite')}
              style={{ 
                cursor: 'pointer', 
                padding: '0.4rem 0.8rem',
                borderRadius: '0.6rem',
                backgroundColor: mode === 'rewrite' ? 'var(--primary)' : 'transparent',
                color: mode === 'rewrite' ? '#fff' : 'var(--text-muted)', 
                fontSize: '0.7rem', 
                fontWeight: '800',
                transition: 'all 0.3s ease'
              }}
            >REWRITE</span>
          </div>
        </div>
        <textarea 
          placeholder={mode === 'generate' ? "What's on your mind? (e.g., 'Life lessons I learned at 25')" : "Paste the content you want to improve..."}
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, charLimit))}
        />
        <div className="char-counter">{input.length} / {charLimit}</div>
      </div>

      <div className="controls-grid">
        <div className="input-group">
          <label>Platform</label>
          <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Twitter (X)">Twitter (X)</option>
          </select>
        </div>
        
        <div className="input-group">
          <label>Tone</label>
          <select value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="Casual">Casual</option>
            <option value="Professional">Professional</option>
            <option value="Funny">Funny</option>
            <option value="Inspirational">Inspirational</option>
          </select>
        </div>

        <div className="input-group">
          <label>Style</label>
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
            <option value="Motivational">Motivational</option>
            <option value="Educational">Educational</option>
            <option value="Storytelling">Storytelling</option>
            <option value="Promotional">Promotional</option>
          </select>
        </div>
      </div>

      <button 
        className="generate-btn" 
        onClick={onGenerate}
        disabled={loading || !input.trim()}
      >
        {loading ? "Magic in progress..." : (mode === 'generate' ? "Create Content" : "Improve Content")}
      </button>
    </div>
  );
};

export default ContentForm;
