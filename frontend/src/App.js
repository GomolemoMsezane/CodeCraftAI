import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import './App.css';

const API = 'https://supreme-carnival-v6w5wp9j6p5vc6966-5000.app.github.dev/api';

function App() {
  const [code, setCode] = useState('// Write your code here\nconsole.log("Hello, CodeCraftAI!");');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('editor');

  const generateCode = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const res = await axios.post(`${API}/ai/generate-code`, { description: prompt, language });
      setCode(res.data.code);
      setOutput('Code generated successfully!');
    } catch (err) {
      setOutput('Error: ' + err.message);
    }
    setLoading(false);
  };

  const optimizeCode = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/ai/optimize-code`, { code, language });
      setCode(res.data.code);
      setOutput('Code optimized!');
    } catch (err) {
      setOutput('Error: ' + err.message);
    }
    setLoading(false);
  };

  const analyzeCode = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/ai/analyze-code`, { code, language });
      setOutput(res.data.analysis);
    } catch (err) {
      setOutput('Error: ' + err.message);
    }
    setLoading(false);
  };

  const generateDocs = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/ai/generate-docs`, { code, language });
      setOutput(res.data.docs);
    } catch (err) {
      setOutput('Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>⚡ CodeCraftAI</h1>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="typescript">TypeScript</option>
        </select>
      </header>

      <div className="prompt-bar">
        <input
          placeholder="Describe what code you want to generate..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button onClick={generateCode} disabled={loading}>
          {loading ? '...' : '✨ Generate'}
        </button>
      </div>

      <div className="tabs">
        <button className={activeTab === 'editor' ? 'active' : ''} onClick={() => setActiveTab('editor')}>Editor</button>
        <button className={activeTab === 'output' ? 'active' : ''} onClick={() => setActiveTab('output')}>Output</button>
      </div>

      <div className="main">
        {activeTab === 'editor' && (
          <Editor
            height="50vh"
            language={language}
            value={code}
            onChange={val => setCode(val)}
            theme="vs-dark"
          />
        )}
        {activeTab === 'output' && (
          <div className="output-panel">
            <pre>{output || 'Output will appear here...'}</pre>
          </div>
        )}
      </div>

      <div className="actions">
        <button onClick={optimizeCode} disabled={loading}>🚀 Optimize</button>
        <button onClick={analyzeCode} disabled={loading}>🔍 Analyze</button>
        <button onClick={generateDocs} disabled={loading}>📄 Generate Docs</button>
      </div>
    </div>
  );
}

export default App;
