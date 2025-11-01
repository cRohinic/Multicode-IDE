import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);

    // TODO: Replace with actual API call
    // try {
    //   const response = await fetch(api_base_url + '/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   const data = await response.json();
    //   if (data.success) {
    //     toast.success('Message sent successfully!');
    //   }
    // } catch (error) {
    //   toast.error('Failed to send message');
    // }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'support@kodebase.com',
      link: 'mailto:support@kodebase.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      content: 'Available 24/7',
      link: '#'
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#'
    },
    {
      icon: '🕒',
      title: 'Response Time',
      content: 'Within 24 hours',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: 'How do I create a new project?',
      answer: 'Click the "Create New Project" button on your dashboard, select your programming language, and start coding!'
    },
    {
      question: 'Is KodeBase really free?',
      answer: 'Yes! All core features are completely free with unlimited projects and code execution.'
    },
    {
      question: 'Which languages are supported?',
      answer: 'We support Python, JavaScript, Java, C, C++, and Bash with more languages coming soon.'
    },
    {
      question: 'Can I share my projects?',
      answer: 'Yes, you can share project links with others or export your code to GitHub.'
    }
  ];

  return (
    <>
      <Navbar />
      
      <div style={{
        minHeight: 'calc(100vh - 90px)',
        backgroundColor: '#0d1117'
      }}>
        {/* Hero Section */}
        <div style={{
          padding: '80px 80px 60px',
          background: 'linear-gradient(180deg, #161b22 0%, #0d1117 100%)',
          borderBottom: '1px solid #30363d',
          position: 'relative',
          overflow: 'hidden'
        }}>
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
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: 'rgba(88, 166, 255, 0.1)',
              border: '1px solid rgba(88, 166, 255, 0.3)',
              borderRadius: '24px',
              padding: '8px 20px',
              marginBottom: '32px'
            }}>
              <span style={{
                color: '#58a6ff',
                fontSize: '13px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Get in Touch
              </span>
            </div>

            <h1 style={{
              fontSize: '56px',
              fontWeight: '800',
              color: '#c9d1d9',
              margin: '0 0 24px 0',
              lineHeight: '1.1',
              letterSpacing: '-1px'
            }}>
              We'd Love to
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #58a6ff 0%, #1f6feb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Hear From You
              </span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#8b949e',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Have questions, suggestions, or feedback? We're here to help and would love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div style={{
          padding: '60px 80px',
          backgroundColor: '#0d1117'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto 60px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px'
            }}>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  style={{
                    backgroundColor: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: '12px',
                    padding: '32px 24px',
                    textAlign: 'center',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    display: 'block'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#58a6ff';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.backgroundColor = '#1c2128';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#30363d';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = '#161b22';
                  }}
                >
                  <div style={{
                    fontSize: '40px',
                    marginBottom: '16px'
                  }}>
                    {info.icon}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#8b949e',
                    marginBottom: '8px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {info.title}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    color: '#c9d1d9',
                    fontWeight: '500'
                  }}>
                    {info.content}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form and FAQs */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px'
          }}>
            {/* Contact Form */}
            <div style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '16px',
              padding: '40px'
            }}>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '600',
                color: '#c9d1d9',
                margin: '0 0 24px 0'
              }}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: '#c9d1d9',
                    fontSize: '14px',
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
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

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: '#c9d1d9',
                    fontSize: '14px',
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: '#c9d1d9',
                    fontSize: '14px',
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
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

                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    color: '#c9d1d9',
                    fontSize: '14px',
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows="6"
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
                      boxSizing: 'border-box',
                      resize: 'vertical',
                      fontFamily: 'inherit'
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '14px',
                    backgroundColor: '#238636',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    opacity: isSubmitting ? 0.6 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#2ea043';
                    }
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#238636';
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTop: '2px solid #ffffff',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                      }}></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      📨 Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQs */}
            <div>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '600',
                color: '#c9d1d9',
                margin: '0 0 24px 0'
              }}>
                Frequently Asked Questions
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#161b22',
                      border: '1px solid #30363d',
                      borderRadius: '12px',
                      padding: '24px',
                      transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = '#58a6ff';
                      e.currentTarget.style.backgroundColor = '#1c2128';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = '#30363d';
                      e.currentTarget.style.backgroundColor = '#161b22';
                    }}
                  >
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#c9d1d9',
                      margin: '0 0 12px 0'
                    }}>
                      {faq.question}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#8b949e',
                      margin: 0,
                      lineHeight: '1.6'
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '24px',
                padding: '24px',
                backgroundColor: 'rgba(88, 166, 255, 0.05)',
                border: '1px solid rgba(88, 166, 255, 0.2)',
                borderRadius: '12px'
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#8b949e',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  💡 <strong style={{ color: '#c9d1d9' }}>Can't find your answer?</strong><br />
                  Fill out the contact form and we'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Contact;