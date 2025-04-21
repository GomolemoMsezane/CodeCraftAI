# CodeCraftAI

![CodeCraftAI Logo](docs/logo.png)

**CodeCraftAI** is an AI-powered coding and document creation platform. It enables users to draft code, generate and parse PDF documents, and leverage advanced AI features like natural language to code, code optimization, and data analysis. Built with modern technologies and integrated with GitHub for seamless version control.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Advanced Features](#advanced-features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Code Drafting & Editing**: Write, edit, and debug code with AI-powered autocompletion (supports Python, JavaScript, etc.).
- **PDF Document Handling**:
  - Create PDFs from code or text (e.g., reports, documentation).
  - Upload and extract text or code from PDFs.
  - Export projects as PDFs.
- **Advanced AI Capabilities**:
  - Convert natural language to executable code.
  - Optimize code for performance and readability.
  - Generate API documentation and READMEs automatically.
  - Analyze datasets and visualize results (CSV, JSON).
  - Train and deploy simple ML models.
  - Voice-to-code transcription via speech-to-text.
- **GitHub Integration**: Manage repositories, collaborate, and automate workflows with GitHub Actions.

---

## Tech Stack

- **Frontend**: React.js, Monaco Editor (code editing), React Native (mobile, planned).
- **Backend**: Node.js, Express.js, Python (AI/ML tasks).
- **AI/ML**: Hugging Face Transformers, TensorFlow/PyTorch, OpenAI API (optional).
- **PDF Handling**: PDFKit (creation), pdf2json (parsing), PyPDF2 (extraction).
- **Database**: MongoDB, Firebase (real-time).
- **DevOps**: GitHub Actions (CI/CD), Vercel (frontend), AWS/Heroku (backend).

---

## Installation

### Prerequisites
- Node.js (>=16.x)
- Python (>=3.8)
- MongoDB (local or Atlas)
- Git
- API keys for optional services (e.g., OpenAI, Google Cloud Speech-to-Text)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/GomolemoMsezane/CodeCraftAI.git
   cd CodeCraftAI
