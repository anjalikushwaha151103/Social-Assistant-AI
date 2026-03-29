import React, { useState } from 'react';

const OutputCard = ({ variation, platform, onCopy }) => {
  const { hook, content, hashtags, engagementScore } = variation;
  const [copiedType, setCopiedType] = useState(null);

  const handleCopyFull = () => {
    const fullText = `${hook}\n\n${content}\n\n${hashtags}`;
    navigator.clipboard.writeText(fullText);
    onCopy('Full post copied!');
    setCopiedType('full');
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleCopyTags = () => {
    navigator.clipboard.writeText(hashtags);
    onCopy('Hashtags copied!');
    setCopiedType('tags');
    setTimeout(() => setCopiedType(null), 2000);
  };

  const getPlatformIcon = () => {
    if (platform === 'Instagram') return '📸';
    if (platform === 'LinkedIn') return '💼';
    return '🐦';
  };

  return (
    <div className="output-card glass">
      <div className="card-header">
        <span className="platform-badge">{getPlatformIcon()} {platform}</span>
        <div className="engagement-score">
          <span style={{ opacity: 0.6, fontSize: '0.7rem' }}>ENGAGEMENT</span>
          <span>{engagementScore}/10</span>
        </div>
      </div>

      <h3 className="output-hook">{hook}</h3>
      <p className="output-content">{content}</p>
      {hashtags && (
        <div className="output-hashtags">
          {hashtags.split(' ').map((tag, i) => (
            <span key={i} className="hashtag">{tag}</span>
          ))}
        </div>
      )}

      <div className="card-actions">
        <button className="copy-btn" onClick={handleCopyFull}>
          {copiedType === 'full' ? 'Copied!' : '📋 Copy Full Post'}
        </button>
        {hashtags && (
          <button className="copy-btn secondary" onClick={handleCopyTags}>
            {copiedType === 'tags' ? '🏷️ Tags Copied!' : '🏷️ Copy Hashtags'}
          </button>
        )}
      </div>
    </div>
  );
};

export default OutputCard;
