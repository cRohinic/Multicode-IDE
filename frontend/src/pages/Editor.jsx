import React, { useEffect, useState, useCallback, useRef } from 'react';
import Navbar from '../components/Navbar';
import Editor2 from '@monaco-editor/react';
import { useParams } from 'react-router-dom';
import { api_base_url } from '../helper';
import { toast } from 'react-toastify';

const Editor = () => {
  const [code, setCode] = useState(""); 
  const { id } = useParams(); 
  const [output, setOutput] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const editorRef = useRef(null);

  // Fetch project data on mount
  useEffect(() => {
    fetch(`${api_base_url}/getProject`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
        projectId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const projectCode = data.project.code || "// Write your code here\n";
          setCode(projectCode); 
          setData(data.project);
        } else {
          toast.error(data.msg);
        }
      })
      .catch((err) => {
        console.error('Error fetching project:', err);
        toast.error('Failed to load project.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // Save project function
  const saveProject = useCallback(() => {
    const trimmedCode = code?.toString().trim(); 

    fetch(`${api_base_url}/saveProject`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
        projectId: id,
        code: trimmedCode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success('Code saved successfully!');
        } else {
          toast.error(data.msg);
        }
      })
      .catch((err) => {
        console.error('Error saving project:', err);
        toast.error('Failed to save the project.');
      });
  }, [code, id]);

  // Shortcut handler for saving with Ctrl+S
  useEffect(() => {
    const handleSaveShortcut = (e) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault(); 
        saveProject(); 
      }
    };

    window.addEventListener('keydown', handleSaveShortcut);
    return () => {
      window.removeEventListener('keydown', handleSaveShortcut);
    };
  }, [saveProject]);

  const runProject = () => {
    if (!data) {
      toast.error('Project data not loaded yet');
      return;
    }

    setIsRunning(true);
    setOutput("");

    const getExtension = (lang) => {
      const extensions = {
        python: '.py',
        java: '.java',
        javascript: '.js',
        c: '.c',
        cpp: '.cpp',
        bash: '.sh'
      };
      return extensions[lang] || '';
    };

    fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        language: data.projLanguage,
        version: data.version,
        files: [
          {
            filename: data.name + getExtension(data.projLanguage),
            content: code
          }
        ]
      })
    })
      .then(res => res.json())
      .then(data => {
        setOutput(data.run.output);
        setError(data.run.code === 1);
        setIsRunning(false);
      })
      .catch(err => {
        console.error('Error running project:', err);
        toast.error('Failed to run project');
        setIsRunning(false);
      });
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    
    setTimeout(() => {
      if (editorRef.current) {
        editorRef.current.layout();
      }
    }, 500);
  };

  useEffect(() => {
    const handleResize = () => {
      if (editorRef.current) {
        editorRef.current.layout();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 90px)',
          backgroundColor: '#0d1117'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              border: '4px solid #30363d',
              borderTop: '4px solid #58a6ff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px'
            }}></div>
            <p style={{ color: '#8b949e', fontSize: '16px' }}>Loading project...</p>
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
  }

  return (
    <>
      <Navbar />
      <div style={{
        display: 'flex',
        height: 'calc(100vh - 90px)',
        width: '100%',
        backgroundColor: '#0d1117'
      }}>
        {/* Left Side - Editor */}
        <div style={{ 
          width: '50%', 
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0d1117',
          borderRight: '1px solid #30363d'
        }}>
          {/* Editor Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            backgroundColor: '#161b22',
            borderBottom: '1px solid #30363d'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                color: '#8b949e',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {data?.name || 'Untitled'}
              </span>
              <span style={{
                backgroundColor: '#1f6feb',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '600',
                padding: '2px 8px',
                borderRadius: '12px',
                textTransform: 'uppercase'
              }}>
                {data?.projLanguage || 'code'}
              </span>
            </div>
            <button
              onClick={saveProject}
              style={{
                backgroundColor: 'transparent',
                color: '#58a6ff',
                border: '1px solid #30363d',
                padding: '6px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
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
              💾 Save (Ctrl+S)
            </button>
          </div>

          {/* Editor */}
          <div style={{ 
            flex: 1,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Editor2
              height="100%"
              width="100%"
              language={data?.projLanguage || "javascript"}
              value={code}
              theme="vs-dark"
              onChange={(newCode) => setCode(newCode || '')}
              onMount={handleEditorDidMount}
              options={{
                fontSize: 15,
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
                minimap: { enabled: true },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                wordWrap: 'off',
                lineNumbers: 'on',
                glyphMargin: true,
                folding: true,
                renderLineHighlight: 'all',
                padding: { top: 16, bottom: 16 },
                tabSize: 2,
                insertSpaces: true,
                readOnly: false,
                contextmenu: true,
                mouseWheelZoom: true,
                smoothScrolling: true,
                cursorBlinking: 'smooth',
                cursorSmoothCaretAnimation: true
              }}
            />
          </div>
        </div>

        {/* Right Side - Output */}
        <div style={{
          width: '50%',
          height: '100%',
          backgroundColor: '#0d1117',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Output Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            backgroundColor: '#161b22',
            borderBottom: '1px solid #30363d'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ 
                fontSize: '18px'
              }}>
                📟
              </span>
              <span style={{ 
                color: '#c9d1d9', 
                fontSize: '16px',
                fontWeight: '600'
              }}>
                Output
              </span>
            </div>
            <button
              onClick={runProject}
              disabled={isRunning}
              style={{
                backgroundColor: '#238636',
                color: '#ffffff',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: isRunning ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: isRunning ? 0.6 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                if (!isRunning) {
                  e.target.style.backgroundColor = '#2ea043';
                }
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#238636';
              }}
            >
              {isRunning ? (
                <>
                  <span style={{
                    width: '14px',
                    height: '14px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTop: '2px solid #ffffff',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                  }}></span>
                  Running...
                </>
              ) : (
                <>
                  ▶ Run Code
                </>
              )}
            </button>
          </div>

          {/* Output Content */}
          <div style={{
            flex: 1,
            overflow: 'auto',
            padding: '20px',
            backgroundColor: '#0d1117'
          }}>
            {output ? (
              <pre style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
                fontSize: '14px',
                lineHeight: '1.6',
                color: error ? '#f85149' : '#7ee787',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                margin: 0,
                padding: '16px',
                backgroundColor: '#161b22',
                borderRadius: '6px',
                border: `1px solid ${error ? '#da3633' : '#238636'}`
              }}>
                {output}
              </pre>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: '#8b949e',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                  opacity: 0.5
                }}>
                  📊
                </div>
                <p style={{
                  fontSize: '16px',
                  margin: '0 0 8px 0',
                  color: '#c9d1d9'
                }}>
                  No output yet
                </p>
                <p style={{
                  fontSize: '14px',
                  margin: 0,
                  color: '#8b949e'
                }}>
                  Click "Run Code" to execute your program
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0d1117;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #30363d;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #484f58;
        }
      `}</style>
    </>
  );
};

export default Editor;