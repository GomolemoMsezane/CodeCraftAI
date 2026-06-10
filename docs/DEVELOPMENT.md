# Development Guide

## Getting Started

### Prerequisites
- Node.js >= 16.x
- Python >= 3.8
- MongoDB (local or Atlas)
- Git

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/GomolemoMsezane/CodeCraftAI.git
   cd CodeCraftAI
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual credentials
   ```

5. **Run MongoDB**
   ```bash
   mongod
   ```

6. **Start Backend** (Terminal 1)
   ```bash
   cd backend
   npm run dev
   ```

7. **Start Frontend** (Terminal 2)
   ```bash
   cd frontend
   npm start
   ```

## Project Structure

```
CodeCraftAI/
├── backend/
│   ├── routes/          # API routes
│   ├── models/          # Database models
│   ├── controllers/      # Business logic
│   ├── middleware/       # Express middleware
│   ├── services/         # AI/ML services
│   ├── index.js         # Entry point
│   └── package.json
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API service layer
│   │   ├── store/       # Zustand stores
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── docs/                # Documentation
├── .github/
│   └── workflows/       # CI/CD workflows
├── .gitignore
├── .env.example
└── README.md
```

## Coding Standards

### JavaScript/React
- Use ES6+ syntax
- Use functional components
- Add PropTypes for component props
- Write comments for complex logic
- Use meaningful variable names

### Python
- Follow PEP 8 style guide
- Use type hints where possible
- Write docstrings for functions
- Use meaningful variable names

## Testing

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## Debugging

### Backend
- Use `console.log()` for logging
- Set `NODE_ENV=development` for more verbose output
- Use VS Code debugger with launch config

### Frontend
- Use React DevTools browser extension
- Use VS Code debugger
- Check browser console for errors

## Git Workflow

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes and commit: `git commit -m "Description"`
3. Push to GitHub: `git push origin feature/feature-name`
4. Create Pull Request on GitHub
5. Wait for code review and CI checks
6. Merge to main after approval

## Contributing

See CONTRIBUTING.md for detailed contribution guidelines.
