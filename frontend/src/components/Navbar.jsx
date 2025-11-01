import React, { useState } from 'react';
import logo from "../../public/logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90px',
        padding: '0 80px',
        backgroundColor: '#161b22',
        borderBottom: '1px solid #30363d',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)'
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img 
            src={logo} 
            alt="KodeBase Logo"
            style={{
              width: '170px',
              height: 'auto',
              objectFit: 'cover',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.8'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          />
        </Link>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          {/* Nav Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}>
            <Link
              to="/"
              style={{
                color: '#c9d1d9',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'color 0.2s',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#58a6ff';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#c9d1d9';
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                color: '#c9d1d9',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = '#58a6ff'}
              onMouseOut={(e) => e.target.style.color = '#c9d1d9'}
            >
              About
            </Link>
            <Link
              to="/services"
              style={{
                color: '#c9d1d9',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = '#58a6ff'}
              onMouseOut={(e) => e.target.style.color = '#c9d1d9'}
            >
              Services
            </Link>
            <Link
              to="/contact"
              style={{
                color: '#c9d1d9',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = '#58a6ff'}
              onMouseOut={(e) => e.target.style.color = '#c9d1d9'}
            >
              Contact
            </Link>
          </div>

          {/* Divider */}
          <div style={{
            width: '1px',
            height: '24px',
            backgroundColor: '#30363d'
          }}></div>

          {/* Logout Button */}
          <button
            onClick={() => setShowLogoutConfirm(true)}
            style={{
              backgroundColor: 'transparent',
              color: '#f85149',
              border: '1px solid #30363d',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#da3633';
              e.target.style.color = '#ffffff';
              e.target.style.borderColor = '#da3633';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#f85149';
              e.target.style.borderColor = '#30363d';
            }}
          >
            <span style={{ fontSize: '16px' }}>🚪</span>
            Logout
          </button>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowLogoutConfirm(false);
            }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '12px',
            padding: '32px',
            width: '90%',
            maxWidth: '400px',
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Icon */}
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(248, 81, 73, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '28px'
            }}>
              🚪
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#c9d1d9',
              margin: '0 0 12px 0',
              textAlign: 'center'
            }}>
              Logout from KodeBase?
            </h2>

            {/* Description */}
            <p style={{
              fontSize: '14px',
              color: '#8b949e',
              margin: '0 0 24px 0',
              textAlign: 'center',
              lineHeight: '1.5'
            }}>
              You will need to sign in again to access your projects and continue coding.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  color: '#c9d1d9',
                  border: '1px solid #30363d',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#30363d';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                style={{
                  flex: 1,
                  backgroundColor: '#da3633',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#b62324';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#da3633';
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;