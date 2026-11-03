import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Globe, 
  ArrowLeft, 
  LogOut, 
  Save, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { AdminSEOManager } from './AdminSEOManager';

export const AdminLayout = () => {
  const { 
    setCurrentView, 
    authSession,
    logoutAdmin,
    addToast
  } = useApp();

  const handleSaveNotification = () => {
    addToast('SEO Saved', 'All page titles, meta descriptions, and keywords are live across the site.', 'success');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#040812', display: 'flex', flexDirection: 'column' }}>
      
      {/* Clean, Focused Admin Header */}
      <header style={{
        height: '66px',
        background: 'rgba(9, 16, 30, 0.96)',
        borderBottom: '1px solid var(--border-glass-strong)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.75rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        {/* Left: Return to Public Website & Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button
            onClick={() => setCurrentView('home')}
            className="btn btn-secondary btn-sm"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.45rem', 
              padding: '0.45rem 0.85rem',
              fontWeight: 600,
              fontSize: '0.82rem'
            }}
            title="Return to Public Website"
          >
            <ArrowLeft size={16} />
            <span>← Back to Public Site</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #00f0ff 0%, #0072ff 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)'
            }}>
              <Globe size={20} color="#040914" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: '#ffffff', lineHeight: 1.2 }}>
                ATPL SEO & KEYWORDS MANAGER
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--cyan-primary)', letterSpacing: '0.06em' }}>
                ADMIN METADATA & KEYWORDS EDITOR
              </div>
            </div>
          </div>
        </div>

        {/* Right: Actions & User Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '20px',
            padding: '0.3rem 0.8rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#34d399'
          }} className="admin-status-pill">
            <style>{`
              @media (min-width: 768px) {
                .admin-status-pill { display: flex !important; }
              }
            `}</style>
            <span className="pulse-dot"></span>
            <span>LIVE SYNC ACTIVE</span>
          </div>

          <button
            onClick={handleSaveNotification}
            className="btn btn-cyan btn-sm"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.45rem', 
              fontWeight: 700,
              padding: '0.45rem 0.9rem',
              fontSize: '0.82rem'
            }}
            title="Publish current SEO changes"
          >
            <Save size={15} />
            <span>Save All</span>
          </button>

          {/* User / Sign Out */}
          <button
            onClick={logoutAdmin}
            className="btn btn-secondary btn-sm"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              color: '#94a3b8',
              padding: '0.45rem 0.75rem',
              fontSize: '0.82rem'
            }}
            title="Log out of Admin"
          >
            <LogOut size={14} />
            <span>Exit</span>
          </button>

        </div>
      </header>

      {/* Main Dedicated SEO Manager Workspace (100% Full-Width Focus) */}
      <main style={{ 
        flex: 1, 
        padding: '1.75rem 2rem', 
        overflowY: 'auto',
        maxWidth: '1600px',
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box'
      }}>
        <AdminSEOManager />
      </main>

    </div>
  );
};
