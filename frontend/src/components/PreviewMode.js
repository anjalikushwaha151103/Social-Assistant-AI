import React from 'react';

const PreviewMode = ({ variation, platform }) => {
  if (platform === 'LinkedIn') return null; // Previews for IG and Twitter focus

  return (
    <div className="preview-container" style={{ marginTop: '1rem', padding: '1.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '1rem' }}>
      <label style={{ fontSize: '0.7rem' }}>Live Preview Mockup</label>
      
      {platform === 'Instagram' ? (
        <div style={{ background: '#fff', color: '#000', borderRadius: '8px', padding: '1rem', maxWidth: '350px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ddd' }}></div>
            <span style={{ fontWeight: 'bold', fontSize: '14px' }}>your_profile</span>
          </div>
          <div style={{ background: '#f0f0f0', aspectRatio: '1', borderRadius: '4px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#aaa' }}>[ Image Preview ]</span>
          </div>
          <div style={{ fontSize: '14px' }}>
            <span style={{ fontWeight: 'bold', marginRight: '5px' }}>your_profile</span>
            {variation.hook} {variation.content.slice(0, 50)}...
          </div>
        </div>
      ) : (
        <div style={{ background: '#000', color: '#fff', borderRadius: '12px', padding: '1rem', border: '1px solid #333', maxWidth: '400px', margin: '0 auto' }}>
           <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333' }}></div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '5px', fontSize: '14px' }}>
                <span style={{ fontWeight: 'bold' }}>User Name</span>
                <span style={{ color: '#71767b' }}>@handle</span>
              </div>
              <p style={{ fontSize: '15px', marginTop: '5px' }}>{variation.hook}</p>
              <p style={{ fontSize: '15px', color: '#1d9bf0', marginTop: '5px' }}>1/ {variation.content.split('\n')[0].slice(0, 100)}...</p>
            </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default PreviewMode;
