# CodeCraftAI Architecture

## Overview

CodeCraftAI is a full-stack application with a modular architecture designed to scale and support various AI/ML features.

## System Architecture

```
┌──────────────────────────────┐
│   Frontend (React)           │
│  - Monaco Editor             │
│  - PDF Viewer                │
│  - Dashboard                 │
└──────────────────┬───────────┘
                   │ REST API
                   ▼
┌──────────────────────────────────────────────────┐
│   Backend (Node.js/Express)                      │
│  - API Routes                                    │
│  - Authentication                                │
│  - File Management                               │
└─���────────────────┬────────────────────────────────┘
                   │
     ┌─────────────┴──────────────┬──────────────────┬──────────────┐
     ▼             ▼              ▼                  ▼              ▼
  MongoDB    Python ML       PDF Kit            GitHub API    External APIs
  Database   Pipeline        Generator          Integration   (OpenAI, etc.)
```

## Components

### Frontend
- **React** - UI framework
- **Monaco Editor** - Code editing with syntax highlighting
- **React Router** - Client-side routing
- **Zustand** - State management

### Backend
- **Express.js** - REST API framework
- **MongoDB** - NoSQL database
- **Python** - AI/ML task execution
- **External APIs** - OpenAI, Hugging Face, Google Cloud

### Services
- **Code Analysis** - Parse and optimize code
- **PDF Generation** - Create documents from code
- **AI Processing** - NLP, code generation, optimization
- **GitHub Integration** - Repository management

## Data Flow

1. User uploads/drafts code via frontend
2. Frontend sends request to backend API
3. Backend processes request (stores in MongoDB, executes AI tasks)
4. Backend returns results to frontend
5. Frontend displays results and allows export

## Database Schema

### Projects
```json
{
  "_id": "ObjectId",
  "name": "string",
  "description": "string",
  "userId": "string",
  "files": ["string"],
  "createdAt": "date",
  "updatedAt": "date"
}
```

### Files
```json
{
  "_id": "ObjectId",
  "projectId": "ObjectId",
  "filename": "string",
  "content": "string",
  "language": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

## API Endpoints

### Projects
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Files
- `GET /api/files/:projectId` - List files in project
- `POST /api/files` - Create new file
- `GET /api/files/:id` - Get file content
- `PUT /api/files/:id` - Update file
- `DELETE /api/files/:id` - Delete file

### AI Features
- `POST /api/ai/generate-code` - Generate code from description
- `POST /api/ai/optimize-code` - Optimize code
- `POST /api/ai/analyze-code` - Analyze code for issues
- `POST /api/ai/generate-docs` - Generate documentation

### PDF
- `POST /api/pdf/generate` - Generate PDF from files
- `POST /api/pdf/parse` - Parse PDF and extract content

## Deployment

- **Frontend**: Vercel, Netlify, or AWS S3 + CloudFront
- **Backend**: Heroku, AWS EC2, DigitalOcean, or Railway
- **Database**: MongoDB Atlas
- **CI/CD**: GitHub Actions
