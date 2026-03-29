import React, { useState, useRef } from 'react';
import axios from 'axios';
import ContentForm from './components/ContentForm';
import OutputCard from './components/OutputCard';
import PreviewMode from './components/PreviewMode';
import Loader from './components/Loader';
import Toast from './components/Toast';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [tone, setTone] = useState('Casual');
  const [style, setStyle] = useState('Educational');
  const [mode, setMode] = useState('generate');
  
  const [loading, setLoading] = useState(false);
  const [variations, setVariations] = useState([]);
  const [toast, setToast] = useState(null);
  
  const resultsRef = useRef(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setVariations([]);
    
    try {
      const res = await axios.post('http://localhost:5000/api/content/generate', {
        input, platform, tone, style, mode
      });
      
      setVariations(res.data.variations);
      
      // Auto-scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
    } catch (err) {
      const message = err.response?.data?.error || "Failed to generate content. Please try again.";
      setToast({ message, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message) => {
    setToast({ message, type: 'success' });
  };

  return (
    <div className="app-container">
      <header>
        <h1>Social Assistant AI</h1>
        <p>Your production-ready content generator for the modern web.</p>
      </header>

      <main>
        <ContentForm 
          input={input} setInput={setInput}
          platform={platform} setPlatform={setPlatform}
          tone={tone} setTone={setTone}
          style={style} setStyle={setStyle}
          mode={mode} setMode={setMode}
          onGenerate={handleGenerate}
          loading={loading}
        />

        {loading && <Loader />}

        <div ref={resultsRef} className="results-section">
          {!loading && variations.length === 0 && !toast && (
            <div style={{ textAlign: 'center', opacity: 0.5, padding: '3rem' }}>
              <h2>Start by entering your idea above</h2>
            </div>
          )}

          {variations.map((v, i) => (
            <div key={i}>
              <OutputCard 
                variation={v} 
                platform={platform} 
                onCopy={showToast}
              />
              <PreviewMode variation={v} platform={platform} />
            </div>
          ))}
        </div>
      </main>

      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
}

export default App;
