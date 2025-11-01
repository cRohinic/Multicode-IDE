import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Select from 'react-select';
import { api_base_url } from '../helper';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);
  const [languageOptions, setLanguageOptions] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isEditModelShow, setIsEditModelShow] = useState(false);
  const [name, setName] = useState("");
  const [projects, setProjects] = useState(null);
  const [editProjId, setEditProjId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#0d1117',
      borderColor: '#30363d',
      color: '#c9d1d9',
      padding: '6px',
      borderRadius: '6px',
      '&:hover': {
        borderColor: '#58a6ff'
      }
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#161b22',
      color: '#c9d1d9',
      border: '1px solid #30363d',
      borderRadius: '6px',
      marginTop: '4px'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#1f6feb' : '#161b22',
      color: '#c9d1d9',
      cursor: 'pointer',
      padding: '10px 12px',
      '&:hover': {
        backgroundColor: '#1f6feb'
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#c9d1d9',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#8b949e',
    }),
  };

  const getRunTimes = async () => {
    try {
      let res = await fetch("https://emkc.org/api/v2/piston/runtimes");
      let data = await res.json();

      const filteredLanguages = ["python", "javascript", "c", "c++", "java", "bash"];

      const options = data
        .filter(runtime => filteredLanguages.includes(runtime.language))
        .map(runtime => ({
          label: `${runtime.language} (${runtime.version})`,
          value: runtime.language === "c++" ? "cpp" : runtime.language,
          version: runtime.version,
        }));

      setLanguageOptions(options);
    } catch (error) {
      console.error('Error fetching runtimes:', error);
      toast.error('Failed to load languages');
    }
  };

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  const getProjects = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(api_base_url + "/getProjects", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: localStorage.getItem("token")
        })
      });
      const data = await res.json();
      
      if (data.success) {
        setProjects(data.projects);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to load projects');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
    getRunTimes();
  }, []);

  const createProj = async () => {
    if (!name.trim()) {
      toast.error('Please enter a project name');
      return;
    }
    if (!selectedLanguage) {
      toast.error('Please select a language');
      return;
    }

    try {
      const res = await fetch(api_base_url + "/createProj", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          projLanguage: selectedLanguage.value,
          token: localStorage.getItem("token"),
          version: selectedLanguage.version
        })
      });
      const data = await res.json();
      
      if (data.success) {
        toast.success('Project created successfully!');
        setName("");
        setSelectedLanguage(null);
        setIsCreateModelShow(false);
        navigate("/editior/" + data.projectId);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.error('Error creating project:', error);
      toast.error('Failed to create project');
    }
  };

  const deleteProject = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const res = await fetch(api_base_url + "/deleteProject", {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            projectId: id,
            token: localStorage.getItem("token")
          })
        });
        const data = await res.json();
        
        if (data.success) {
          toast.success('Project deleted successfully!');
          getProjects();
        } else {
          toast.error(data.msg);
        }
      } catch (error) {
        console.error('Error deleting project:', error);
        toast.error('Failed to delete project');
      }
    }
  };

  const updateProj = async () => {
    if (!name.trim()) {
      toast.error('Please enter a project name');
      return;
    }

    try {
      const res = await fetch(api_base_url + "/editProject", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          projectId: editProjId,
          token: localStorage.getItem("token"),
          name: name,
        })
      });
      const data = await res.json();
      
      if (data.success) {
        toast.success('Project updated successfully!');
        setIsEditModelShow(false);
        setName("");
        setEditProjId("");
        getProjects();
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.error('Error updating project:', error);
      toast.error('Failed to update project');
    }
  };

  const getLanguageIcon = (language) => {
    const icons = {
      python: "🐍",
      javascript: "⚡",
      cpp: "⚙️",
      c: "📘",
      java: "☕",
      bash: "🖥️"
    };
    return icons[language] || "📄";
  };

  const getLanguageColor = (language) => {
    const colors = {
      python: "#3776ab",
      javascript: "#f7df1e",
      cpp: "#00599c",
      c: "#a8b9cc",
      java: "#007396",
      bash: "#4eaa25"
    };
    return colors[language] || "#8b949e";
  };

  return (
    <>
      <Navbar />
      
      <div style={{
        minHeight: 'calc(100vh - 90px)',
        backgroundColor: '#0d1117',
        padding: '40px 80px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '40px'
        }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#c9d1d9',
              margin: '0 0 8px 0'
            }}>
              👋 Welcome back!
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#8b949e',
              margin: 0
            }}>
              Manage your coding projects
            </p>
          </div>
          <button
            onClick={() => setIsCreateModelShow(true)}
            style={{
              backgroundColor: '#238636',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2ea043'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#238636'}
          >
            ➕ Create New Project
          </button>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              border: '4px solid #30363d',
              borderTop: '4px solid #58a6ff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        ) : projects && projects.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '20px'
          }}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
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
                {/* Language Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: getLanguageColor(project.projLanguage),
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  {getLanguageIcon(project.projLanguage)}
                  {project.projLanguage}
                </div>

                {/* Project Content */}
                <div
                  onClick={() => navigate("/editior/" + project._id)}
                  style={{
                    marginBottom: '16px',
                    paddingRight: '100px'
                  }}
                >
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#c9d1d9',
                    margin: '0 0 8px 0',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {project.name}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#8b949e',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    📅 {new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid #30363d'
                }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditModelShow(true);
                      setEditProjId(project._id);
                      setName(project.name);
                    }}
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      color: '#58a6ff',
                      border: '1px solid #30363d',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
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
                    ✏️ Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteProject(project._id);
                    }}
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      color: '#f85149',
                      border: '1px solid #30363d',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
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
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '64px',
              marginBottom: '20px',
              opacity: 0.5
            }}>
              📂
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#c9d1d9',
              margin: '0 0 12px 0'
            }}>
              No projects yet
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#8b949e',
              margin: '0 0 24px 0'
            }}>
              Create your first project to get started
            </p>
            <button
              onClick={() => setIsCreateModelShow(true)}
              style={{
                backgroundColor: '#238636',
                color: '#ffffff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2ea043'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#238636'}
            >
              ➕ Create Project
            </button>
          </div>
        )}
      </div>

      {/* Create Project Modal */}
      {isCreateModelShow && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsCreateModelShow(false);
              setName("");
              setSelectedLanguage(null);
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
            maxWidth: '500px',
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.5)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#c9d1d9',
              margin: '0 0 24px 0'
            }}>
              Create New Project
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: '#c9d1d9',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                Project Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="My Awesome Project"
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
                Programming Language
              </label>
              <Select
                placeholder="Select a language..."
                options={languageOptions}
                styles={customStyles}
                onChange={handleLanguageChange}
                value={selectedLanguage}
              />
            </div>

            {selectedLanguage && (
              <div style={{
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '6px',
                padding: '12px',
                marginBottom: '24px'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: '#7ee787',
                  margin: 0
                }}>
                  ✓ Selected: {selectedLanguage.label}
                </p>
              </div>
            )}

            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end'
            }}>
              <button
                onClick={() => {
                  setIsCreateModelShow(false);
                  setName("");
                  setSelectedLanguage(null);
                }}
                style={{
                  backgroundColor: 'transparent',
                  color: '#8b949e',
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
                  e.target.style.color = '#c9d1d9';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#8b949e';
                }}
              >
                Cancel
              </button>
              <button
                onClick={createProj}
                disabled={!name.trim() || !selectedLanguage}
                style={{
                  backgroundColor: name.trim() && selectedLanguage ? '#238636' : '#30363d',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: name.trim() && selectedLanguage ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s',
                  opacity: name.trim() && selectedLanguage ? 1 : 0.5
                }}
                onMouseOver={(e) => {
                  if (name.trim() && selectedLanguage) {
                    e.target.style.backgroundColor = '#2ea043';
                  }
                }}
                onMouseOut={(e) => {
                  if (name.trim() && selectedLanguage) {
                    e.target.style.backgroundColor = '#238636';
                  }
                }}
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Project Modal */}
      {isEditModelShow && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsEditModelShow(false);
              setName("");
              setEditProjId("");
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
            maxWidth: '500px',
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.5)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#c9d1d9',
              margin: '0 0 24px 0'
            }}>
              Edit Project
            </h2>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                color: '#c9d1d9',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                Project Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="My Awesome Project"
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

            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end'
            }}>
              <button
                onClick={() => {
                  setIsEditModelShow(false);
                  setName("");
                  setEditProjId("");
                }}
                style={{
                  backgroundColor: 'transparent',
                  color: '#8b949e',
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
                  e.target.style.color = '#c9d1d9';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#8b949e';
                }}
              >
                Cancel
              </button>
              <button
                onClick={updateProj}
                disabled={!name.trim()}
                style={{
                  backgroundColor: name.trim() ? '#238636' : '#30363d',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: name.trim() ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s',
                  opacity: name.trim() ? 1 : 0.5
                }}
                onMouseOver={(e) => {
                  if (name.trim()) {
                    e.target.style.backgroundColor = '#2ea043';
                  }
                }}
                onMouseOut={(e) => {
                  if (name.trim()) {
                    e.target.style.backgroundColor = '#238636';
                  }
                }}
              >
                Update Project
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Home;