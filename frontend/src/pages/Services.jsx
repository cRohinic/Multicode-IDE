import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const mainServices = [
    {
      icon: '💻',
      title: 'Online Code Editor',
      description: 'Write, edit, and manage your code with our powerful Monaco-based editor',
      details: [
        'Syntax highlighting for 6+ languages',
        'IntelliSense & auto-completion',
        'Code folding & minimap',
        'Customizable themes',
        'Multi-cursor editing',
        'Search & replace functionality'
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'editor'
    },
    {
      icon: '⚡',
      title: 'Real-Time Code Execution',
      description: 'Execute your code instantly and see results in milliseconds',
      details: [
        'Lightning-fast compilation',
        'Real-time output streaming',
        'Error detection & stack traces',
        'Resource usage monitoring',
        'Multiple runtime versions',
        'Concurrent execution support'
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: 'execution'
    },
    {
      icon: '☁️',
      title: 'Cloud Project Storage',
      description: 'Store unlimited projects securely in the cloud with automatic syncing',
      details: [
        'Unlimited storage capacity',
        'Auto-save every 30 seconds',
        'Version control integration',
        'Cross-device synchronization',
        'Backup & recovery options',
        'Export to GitHub'
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      category: 'storage'
    },
    {
      icon: '🎨',
      title: 'Advanced Code Features',
      description: 'Professional-grade features to enhance your coding productivity',
      details: [
        'Smart indentation',
        'Bracket matching',
        'Code snippets library',
        'Keyboard shortcuts',
        'Split view editing',
        'Regex search support'
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      category: 'editor'
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Optimized infrastructure for the fastest coding experience',
      details: [
        'CDN-powered asset delivery',
        'Lazy loading for speed',
        'Caching mechanisms',
        'Minimal latency execution',
        '99.9% uptime guarantee',
        'Global server network'
      ],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      category: 'performance'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security to protect your code and data',
      details: [
        'End-to-end encryption',
        'Secure authentication (JWT)',
        'Regular security audits',
        'GDPR compliant',
        'Private by default',
        'Two-factor authentication ready'
      ],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      category: 'security'
    }
  ];

  const languages = [
    { 
      name: 'Python', 
      icon: '🐍', 
      color: '#3776ab',
      version: '3.10.0',
      description: 'High-level programming for AI, data science, and web development'
    },
    { 
      name: 'JavaScript', 
      icon: '⚡', 
      color: '#f7df1e',
      version: 'Node 18.x',
      description: 'Modern web development with ES6+ features'
    },
    { 
      name: 'Java', 
      icon: '☕', 
      color: '#007396',
      version: 'JDK 17',
      description: 'Enterprise applications and Android development'
    },
    { 
      name: 'C', 
      icon: '📘', 
      color: '#a8b9cc',
      version: 'GCC 11.2',
      description: 'System programming and embedded systems'
    },
    { 
      name: 'C++', 
      icon: '⚙️', 
      color: '#00599c',
      version: 'G++ 11.2',
      description: 'Game development and high-performance applications'
    },
    { 
      name: 'Bash', 
      icon: '🖥️', 
      color: '#4eaa25',
      version: '5.1.0',
      description: 'Shell scripting and automation'
    }
  ];

  const plans = [
    {
      name: 'Free Plan',
      price: '$0',
      period: 'Forever',
      description: 'Perfect for students and hobbyists',
      features: [
        'Unlimited projects',
        'All 6 programming languages',
        'Cloud storage',
        'Real-time execution',
        'Auto-save functionality',
        'Community support'
      ],
      highlighted: false,
      buttonText: 'Get Started Free',
      buttonAction: () => navigate('/signUp')
    },
    {
      name: 'Pro Plan',
      price: '$9',
      period: 'per month',
      description: 'For professional developers',
      features: [
        'Everything in Free',
        'Priority execution queue',
        'Advanced debugging tools',
        'Team collaboration (5 members)',
        'Private projects',
        'Priority support',
        'Custom themes',
        'API access'
      ],
      highlighted: true,
      buttonText: 'Coming Soon',
      buttonAction: () => {}
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      description: 'For organizations and teams',
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Dedicated infrastructure',
        'SLA guarantee',
        'Custom integrations',
        'Advanced security',
        'Training & onboarding',
        '24/7 premium support'
      ],
      highlighted: false,
      buttonText: 'Contact Sales',
      buttonAction: () => navigate('/contact')
    }
  ];

  const stats = [
    { number: '10K+', label: 'Lines of Code Executed', icon: '📝' },
    { number: '1000+', label: 'Active Users', icon: '👥' },
    { number: '99.9%', label: 'Uptime SLA', icon: '⚡' },
    { number: '< 100ms', label: 'Avg Response Time', icon: '🚀' }
  ];

  const filteredServices = activeTab === 'all' 
    ? mainServices 
    : mainServices.filter(service => service.category === activeTab);

  return (
    <>
      <Navbar />
      
      <div style={{
        minHeight: 'calc(100vh - 90px)',
        backgroundColor: '#0d1117'
      }}>
        {/* Hero Section with Animated Background */}
        <div style={{
          position: 'relative',
          padding: '80px 80px 60px',
          background: 'linear-gradient(180deg, #161b22 0%, #0d1117 100%)',
          borderBottom: '1px solid #30363d',
          overflow: 'hidden'
        }}>
          {/* Animated Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(88, 166, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(88, 166, 255, 0.03) 0%, transparent 50%)',
            opacity: 0.5
          }}></div>

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(88, 166, 255, 0.1)',
              border: '1px solid rgba(88, 166, 255, 0.3)',
              borderRadius: '24px',
              padding: '8px 20px',
              marginBottom: '32px'
            }}>
              <span style={{ fontSize: '16px' }}>✨</span>
              <span style={{
                color: '#58a6ff',
                fontSize: '13px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Premium Services
              </span>
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: '64px',
              fontWeight: '800',
              color: '#c9d1d9',
              margin: '0 0 24px 0',
              lineHeight: '1.1',
              letterSpacing: '-2px'
            }}>
              Professional Tools for
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #58a6ff 0%, #1f6feb 50%, #58a6ff 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Modern Developers
              </span>
            </h1>

            <p style={{
              fontSize: '20px',
              color: '#8b949e',
              maxWidth: '700px',
              margin: '0 0 40px 0',
              lineHeight: '1.6'
            }}>
              Experience the most advanced online code editor with enterprise-grade features, 
              lightning-fast execution, and seamless cloud integration.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center'
            }}>
              <button
                onClick={() => navigate('/')}
                style={{
                  background: 'linear-gradient(135deg, #238636 0%, #2ea043 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(35, 134, 54, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(35, 134, 54, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(35, 134, 54, 0.3)';
                }}
              >
                🚀 Start Coding Now
              </button>
              <button
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                style={{
                  backgroundColor: 'transparent',
                  color: '#58a6ff',
                  border: '2px solid #30363d',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#1f6feb';
                  e.target.style.color = '#ffffff';
                  e.target.style.borderColor = '#1f6feb';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#58a6ff';
                  e.target.style.borderColor = '#30363d';
                }}
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          padding: '60px 80px',
          backgroundColor: '#0d1117',
          borderBottom: '1px solid #30363d'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '12px',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#58a6ff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#30363d';
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{stat.icon}</div>
                <div style={{
                  fontSize: '36px',
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

        {/* Services Section */}
        <div style={{
          padding: '80px 80px',
          backgroundColor: '#0d1117'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#c9d1d9',
                margin: '0 0 16px 0'
              }}>
                Powerful Features
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#8b949e',
                maxWidth: '600px',
                margin: '0 auto 40px'
              }}>
                Everything you need to write, compile, and manage code efficiently
              </p>

              {/* Filter Tabs */}
              <div style={{
                display: 'inline-flex',
                gap: '8px',
                padding: '6px',
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '10px'
              }}>
                {['all', 'editor', 'execution', 'storage', 'performance', 'security'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      backgroundColor: activeTab === tab ? '#1f6feb' : 'transparent',
                      color: activeTab === tab ? '#ffffff' : '#8b949e',
                      border: 'none',
                      padding: '8px 20px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textTransform: 'capitalize'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px'
            }}>
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: '16px',
                    padding: '40px',
                    transition: 'all 0.4s',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                    e.currentTarget.style.borderColor = '#58a6ff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#30363d';
                  }}
                >
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: service.gradient
                  }}></div>

                  {/* Icon */}
                  <div style={{
                    fontSize: '56px',
                    marginBottom: '24px'
                  }}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 style={{
                    fontSize: '26px',
                    fontWeight: '600',
                    color: '#c9d1d9',
                    margin: '0 0 12px 0'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: '#8b949e',
                    margin: '0 0 24px 0',
                    lineHeight: '1.6'
                  }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {service.details.map((detail, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '14px',
                          color: '#8b949e',
                          marginBottom: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <span style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: service.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          flexShrink: 0
                        }}>
                          ✓
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div style={{
          padding: '80px 80px',
          backgroundColor: '#161b22',
          borderTop: '1px solid #30363d',
          borderBottom: '1px solid #30363d'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#c9d1d9',
                margin: '0 0 16px 0'
              }}>
                Supported Languages
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#8b949e'
              }}>
                Code in your favorite programming language with full support
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}>
              {languages.map((lang, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#0d1117',
                    border: '1px solid #30363d',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = lang.color;
                    e.currentTarget.style.backgroundColor = `${lang.color}10`;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#30363d';
                    e.currentTarget.style.backgroundColor = '#0d1117';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      fontSize: '48px'
                    }}>
                      {lang.icon}
                    </div>
                    <div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#c9d1d9',
                        marginBottom: '4px'
                      }}>
                        {lang.name}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#8b949e',
                        fontFamily: 'monospace',
                        backgroundColor: '#161b22',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        display: 'inline-block'
                      }}>
                        {lang.version}
                      </div>
                    </div>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#8b949e',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {lang.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" style={{
          padding: '80px 80px',
          backgroundColor: '#0d1117'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#c9d1d9',
                margin: '0 0 16px 0'
              }}>
                Simple, Transparent Pricing
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#8b949e'
              }}>
                Choose the plan that fits your needs
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: plan.highlighted ? '#161b22' : '#0d1117',
                    border: plan.highlighted ? '2px solid #58a6ff' : '1px solid #30363d',
                    borderRadius: '16px',
                    padding: '40px',
                    position: 'relative',
                    transition: 'all 0.3s',
                    transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)'
                  }}
                  onMouseOver={(e) => {
                    if (!plan.highlighted) {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.borderColor = '#58a6ff';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!plan.highlighted) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#30363d';
                    }
                  }}
                >
                  {plan.highlighted && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#1f6feb',
                      color: '#ffffff',
                      padding: '4px 16px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Most Popular
                    </div>
                  )}

                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#8b949e',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {plan.name}
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <span style={{
                      fontSize: '48px',
                      fontWeight: '700',
                      color: '#c9d1d9'
                    }}>
                      {plan.price}
                    </span>
                    <span style={{
                      fontSize: '16px',
                      color: '#8b949e',
                      marginLeft: '8px'
                    }}>
                      {plan.period}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '14px',
                    color: '#8b949e',
                    margin: '0 0 24px 0'
                  }}>
                    {plan.description}
                  </p>

                  <button
                    onClick={plan.buttonAction}
                    style={{
                      width: '100%',
                      backgroundColor: plan.highlighted ? '#238636' : 'transparent',
                      color: plan.highlighted ? '#ffffff' : '#58a6ff',
                      border: plan.highlighted ? 'none' : '1px solid #30363d',
                      padding: '14px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      marginBottom: '24px'
                    }}
                    onMouseOver={(e) => {
                      if (plan.highlighted) {
                        e.target.style.backgroundColor = '#2ea043';
                      } else {
                        e.target.style.backgroundColor = '#1f6feb';
                        e.target.style.color = '#ffffff';
                        e.target.style.borderColor = '#1f6feb';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (plan.highlighted) {
                        e.target.style.backgroundColor = '#238636';
                      } else {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#58a6ff';
                        e.target.style.borderColor = '#30363d';
                      }
                    }}
                  >
                    {plan.buttonText}
                  </button>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '14px',
                          color: '#8b949e',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <span style={{
                          color: '#7ee787',
                          fontSize: '16px'
                        }}>
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          padding: '80px 80px',
          background: 'linear-gradient(135deg, #1f6feb 0%, #58a6ff 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0 0 24px 0'
            }}>
              Ready to Transform Your Coding Experience?
            </h2>
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 40px 0',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Join thousands of developers who are already coding smarter with KodeBase
            </p>
            <button
              onClick={() => navigate('/signUp')}
              style={{
                backgroundColor: '#ffffff',
                color: '#1f6feb',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '10px',
                fontSize: '18px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
              }}
            >
              🚀 Start Your Free Trial
            </button>
          </div>

          {/* Background Decoration */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(60px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(60px)'
          }}></div>
        </div>
      </div>
    </>
  );
};

export default Services;