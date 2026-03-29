import React from 'react';

const PreviewMode = ({ variation, platform }) => {
  if (platform === 'LinkedIn') return null; // Previews for IG and Twitter focus

  return (
    <div className="preview-container glass" style={{ marginTop: '2rem', border: '1px dashed var(--glass-border)' }}>
      <label style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '1.5rem', display: 'block' }}>✨ PLATFORM PREVIEW MOCKUP</label>
      
      {platform === 'Instagram' ? (
        <div style={{ background: '#fff', color: '#000', borderRadius: '1.5rem', padding: '1.25rem', maxWidth: '350px', margin: '0 auto', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2397 75%, #ad38e7 100%)', padding: '2px' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff', border: '2px solid #fff' }}></div>
            </div>
            <span style={{ fontWeight: '700', fontSize: '14px' }}>your_profile</span>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', aspectRatio: '1', borderRadius: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee' }}>
            <span style={{ color: '#888', fontWeight: '600' }}>[ POST IMAGE ]</span>
          </div>
          <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
            <span style={{ fontWeight: '700', marginRight: '6px' }}>your_profile</span>
            <span style={{ color: '#262626' }}>{variation.hook} {variation.content.slice(0, 80)}...</span>
            <div style={{ color: '#00376b', marginTop: '4px' }}>#socialmedia #ai #content</div>
          </div>
        </div>
      ) : (
        <div style={{ background: '#000', color: '#fff', borderRadius: '1.5rem', padding: '1.5rem', border: '1px solid #333', maxWidth: '400px', margin: '0 auto', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
           <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#222' }}></div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '4px', fontSize: '14px', alignItems: 'center' }}>
                <span style={{ fontWeight: '800' }}>User Name</span>
                <span style={{ color: '#71767b' }}>@handle · 1m</span>
              </div>
              <p style={{ fontSize: '15px', marginTop: '4px', lineHeight: '1.4' }}>{variation.hook}</p>
              <p style={{ fontSize: '15px', color: '#1d9bf0', marginTop: '8px', fontWeight: '500' }}>
                1/ {variation.content.split('\n')[0].slice(0, 100)}...
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', color: '#71767b', maxWidth: '80%' }}>
                <span>💬 0</span>
                <span>🔄 0</span>
                <span>❤️ 0</span>
                <span>📊 0</span>
              </div>
            </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default PreviewMode;
