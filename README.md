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
   ```

2. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Install frontend dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/codecraftai
   GITHUB_TOKEN=your_github_token
   OPENAI_API_KEY=your_openai_api_key
   PORT=5000
   ```

5. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

6. **Run the application**:
   ```bash
   # Terminal 1: Start backend
   cd backend
   npm start

   # Terminal 2: Start frontend
   cd frontend
   npm start
   ```

The application will be available at `http://localhost:3000`.

---

## Usage

### Basic Workflow

1. **Create a Project**: Start a new coding project with a name and description.
2. **Draft Code**: Use the Monaco Editor to write code with AI-powered autocompletion and suggestions.
3. **Generate Docs**: Automatically generate documentation from your code.
4. **Export as PDF**: Convert your project to a PDF report with code snippets and documentation.
5. **Collaborate**: Link your GitHub account and push changes directly to your repositories.

### Code Examples

#### Natural Language to Code
```javascript
// Input: "Create a function that validates email addresses"
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

#### PDF Generation
```python
from codecraft import PDFGenerator

generator = PDFGenerator()
generator.create_from_code(
  code_file="example.js",
  output_path="example.pdf",
  include_docs=True
)
```

#### GitHub Integration
```bash
# Sync with your GitHub repository
codecraft sync --repo owner/repo --branch main
```

---

## Advanced Features

### AI-Powered Code Optimization
CodeCraftAI analyzes your code and suggests optimizations for:
- Performance improvements
- Memory efficiency
- Code readability
- Security vulnerabilities

### Data Analysis & Visualization
- Import CSV/JSON datasets
- Generate charts and graphs
- Create automated reports
- Export analysis as PDF or PNG

### Machine Learning Integration
- Train simple classification/regression models
- Deploy models as REST APIs
- Generate model documentation
- Version control for ML artifacts

### Voice-to-Code Transcription
- Convert spoken instructions to code
- Supports multiple programming languages
- Real-time transcription feedback

### Batch Processing
- Process multiple files simultaneously
- Generate documentation for entire projects
- Bulk PDF export functionality

---

## Contributing

We welcome contributions! Here's how to get involved:

1. **Fork the repository** on GitHub
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your feature description"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** with a clear description of your changes

### Contribution Guidelines
- Follow the existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

### Reporting Issues
Found a bug? Please open an issue on GitHub with:
- A clear description of the problem
- Steps to reproduce
- Expected vs. actual behavior
- Your environment details

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

Have questions or suggestions? We'd love to hear from you!

- **Email**: [mokgatlegomolemo0@gmail.com](mailto:mokgatlegomolemo0@gmail.com)
- **GitHub**: [@GomolemoMsezane](https://github.com/GomolemoMsezane)
- **Issues**: [GitHub Issues](https://github.com/GomolemoMsezane/CodeCraftAI/issues)
- **Discussions**: [GitHub Discussions](https://github.com/GomolemoMsezane/CodeCraftAI/discussions)

---

**Made with ❤️ by the CodeCraftAI Team**
