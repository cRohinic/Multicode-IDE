import React, { useState } from 'react';
import logo from "../../public/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api_base_url } from '../helper';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(api_base_url + "/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        pwd: pwd
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("isLoggedIn", true);
          toast.success("Login successful!");
          window.location.href = "/";
        } else {
          toast.error(data.msg);
        }
      })
      .catch(err => {
        console.error('Login error:', err);
        toast.error("Failed to login. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0d1117',
      padding: '20px'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(88, 166, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(88, 166, 255, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#161b22',
        borderRadius: '12px',
        border: '1px solid #30363d',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        padding: '40px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Logo and Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <img 
            src={logo} 
            alt="KodeBase Logo" 
            style={{
              width: '200px',
              height: 'auto',
              margin: '0 auto 24px',
              display: 'block'
            }}
          />
          <h1 style={{
            color: '#c9d1d9',
            fontSize: '24px',
            fontWeight: '600',
            margin: '0 0 8px 0'
          }}>
            Welcome back
          </h1>
          <p style={{
            color: '#8b949e',
            fontSize: '14px',
            margin: 0
          }}>
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={submitForm}>
          {/* Email Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: '#c9d1d9',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '6px',
                color: '#c9d1d9',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#58a6ff';
                e.target.style.boxShadow = '0 0 0 3px rgba(88, 166, 255, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#30363d';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: '#c9d1d9',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  paddingRight: '45px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#c9d1d9',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#58a6ff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(88, 166, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#30363d';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#8b949e',
                  cursor: 'pointer',
                  fontSize: '18px',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => e.target.style.color = '#c9d1d9'}
                onMouseOut={(e) => e.target.style.color = '#8b949e'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#238636',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              opacity: isLoading ? 0.6 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#2ea043';
              }
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#238636';
            }}
          >
            {isLoading ? (
              <>
                <span style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTop: '2px solid #ffffff',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }}></span>
                Signing in...
              </>
            ) : (
              <>
                🔐 Sign in
              </>
            )}
          </button>

          {/* Sign Up Link */}
          <div style={{
            marginTop: '24px',
            textAlign: 'center',
            paddingTop: '24px',
            borderTop: '1px solid #30363d'
          }}>
            <p style={{
              color: '#8b949e',
              fontSize: '14px',
              margin: 0
            }}>
              Don't have an account?{' '}
              <Link
                to="/signUp"
                style={{
                  color: '#58a6ff',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Login;