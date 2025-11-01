import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  const features = [
    {
      icon: '💻',
      title: 'Multi-Language Support',
      description: 'Write code in Python, JavaScript, Java, C, C++, and Bash with full syntax highlighting and autocomplete.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Execution',
      description: 'Run your code instantly and see output in real-time without any setup or configuration.'
    },
    {
      icon: '☁️',
      title: 'Cloud-Based',
      description: 'Access your projects from anywhere, anytime. All your code is safely stored in the cloud.'
    },
    {
      icon: '🎨',
      title: 'Modern Editor',
      description: 'Powered by Monaco Editor, the same editor that powers VS Code, for a professional coding experience.'
    },
    {
      icon: '🚀',
      title: 'Fast & Efficient',
      description: 'Lightweight and optimized for speed. No heavy IDEs, just pure coding efficiency.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your code and projects are encrypted and securely stored with enterprise-grade security.'
    }
  ];

  const stats = [
    { number: '6+', label: 'Languages Supported' },
    { number: '1000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Available' }
  ];

  return (
    <>
      <Navbar />
      
      <div style={{
        minHeight: 'calc(100vh - 90px)',
        backgroundColor: '#0d1117',
        padding: '60px 80px'
      }}>
        {/* Hero Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 80px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(88, 166, 255, 0.1)',
            border: '1px solid rgba(88, 166, 255, 0.2)',
            borderRadius: '20px',
            padding: '6px 16px',
            marginBottom: '24px'
          }}>
            <span style={{
              color: '#58a6ff',
              fontSize: '13px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              About KodeBase
            </span>
          </div>

          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#c9d1d9',
            margin: '0 0 24px 0',
            lineHeight: '1.2'
          }}>
            Your Ultimate Online
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #58a6ff 0%, #1f6feb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Code Editor & Compiler
            </span>
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#8b949e',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            KodeBase is a modern, cloud-based integrated development environment that lets you write, 
            run, and share code in multiple programming languages - all from your browser.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#58a6ff',
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#8b949e',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 80px',
          backgroundColor: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '16px',
          padding: '48px',
          display: 'flex',
          alignItems: 'center',
          gap: '48px'
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #58a6ff 0%, #1f6feb 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              marginBottom: '24px'
            }}>
              🎯
            </div>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#c9d1d9',
              margin: '0 0 16px 0'
            }}>
              Our Mission
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#8b949e',
              lineHeight: '1.7',
              margin: 0
            }}>
              We believe that coding should be accessible to everyone, everywhere. Our mission is to 
              provide developers, students, and coding enthusiasts with a powerful, easy-to-use platform 
              that removes barriers to learning and creating. Whether you're a beginner taking your first 
              steps in programming or an experienced developer working on complex projects, KodeBase is 
              designed to make your coding journey smooth and enjoyable.
            </p>
          </div>
          <div style={{
            flex: 1,
            fontSize: '200px',
            textAlign: 'center',
            opacity: 0.8
          }}>
            🚀
          </div>
        </div>

        {/* Features Grid */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '600',
            color: '#c9d1d9',
            margin: '0 0 48px 0',
            textAlign: 'center'
          }}>
            Why Choose KodeBase?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '12px',
                  padding: '32px',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#58a6ff';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#30363d';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#c9d1d9',
                  margin: '0 0 12px 0'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#8b949e',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          maxWidth: '800px',
          margin: '80px auto 0',
          textAlign: 'center',
          backgroundColor: 'rgba(88, 166, 255, 0.05)',
          border: '1px solid rgba(88, 166, 255, 0.2)',
          borderRadius: '16px',
          padding: '48px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#c9d1d9',
            margin: '0 0 16px 0'
          }}>
            Ready to Start Coding?
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#8b949e',
            margin: '0 0 32px 0'
          }}>
            Join thousands of developers who trust KodeBase for their coding needs.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              backgroundColor: '#238636',
              color: '#ffffff',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2ea043'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#238636'}
          >
            Get Started Now →
          </button>
        </div>
      </div>
    </>
  );
};

export default About;