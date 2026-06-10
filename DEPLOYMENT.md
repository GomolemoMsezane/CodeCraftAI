# CodeCraftAI - Deployment Configuration Guide

This document outlines the deployment infrastructure and how to set up CI/CD for CodeCraftAI.

## CI/CD Workflows

### 1. Node.js Backend Testing (`.github/workflows/ci-nodejs.yml`)
- **Triggers:** Push/PR on `main` or `develop` branches (changes in `backend/` or `package*.json`)
- **Tests:** Runs on Node.js 16.x and 18.x
- **Steps:**
  - Install dependencies
  - Run linter
  - Run tests
  - Build project
  - Security audit

### 2. Python AI/ML Testing (`.github/workflows/ci-python.yml`)
- **Triggers:** Push/PR on `main` or `develop` branches (changes in `ai/` or `ml/`)
- **Tests:** Runs on Python 3.8, 3.9, 3.10
- **Steps:**
  - Install dependencies
  - Lint with flake8
  - Run pytest with coverage
  - Upload to Codecov

### 3. CodeQL Security Analysis (`.github/workflows/codeql.yml`)
- **Triggers:** On push, PR, and weekly schedule
- **Scans:** JavaScript and Python code for security vulnerabilities
- **Reports:** Results visible in GitHub Security tab

### 4. PR Validation (`.github/workflows/pr-checks.yml`)
- **Triggers:** On all pull requests
- **Checks:** Conventional commits, file size validation

## Deployment Workflows

### Frontend Deployment (`.github/workflows/deploy-frontend.yml`)
- **Triggers:** Push to `main` branch (changes in `frontend/`)
- **Platform:** Vercel
- **Required Secrets:**
  - `VERCEL_TOKEN` - Vercel API token
  - `VERCEL_PROJECT_ID` - Vercel project ID
  - `VERCEL_ORG_ID` - Vercel organization ID

**Setup Instructions:**
1. Connect Vercel project at https://vercel.com
2. Generate API token at https://vercel.com/account/tokens
3. Add secrets to GitHub (Settings → Secrets and variables → Actions)

### Backend Deployment (`.github/workflows/deploy-backend.yml`)
- **Triggers:** Push to `main` branch (changes in `backend/`)
- **Platforms Supported:** Heroku & AWS

#### Heroku Deployment
**Required Secrets:**
- `HEROKU_API_KEY` - Heroku API key
- `HEROKU_APP_NAME` - Your Heroku app name

**Setup Instructions:**
1. Create Heroku app: `heroku apps:create your-app-name`
2. Generate API key: https://dashboard.heroku.com/account/applications/authorizations/new
3. Add secrets to GitHub

#### AWS Deployment
**Required Secrets:**
- `AWS_ACCESS_KEY_ID` - AWS access key
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `AWS_REGION` - AWS region (e.g., us-east-1)

**Setup Instructions:**
1. Create IAM user with appropriate permissions
2. Generate access keys in AWS console
3. Add secrets to GitHub

## Setting Up GitHub Secrets

1. Go to your repository settings: `Settings → Secrets and variables → Actions`
2. Click "New repository secret"
3. Add each required secret for your deployment platform

Example secrets to add:
```
VERCEL_TOKEN=your_vercel_token
VERCEL_PROJECT_ID=your_project_id
VERCEL_ORG_ID=your_org_id
HEROKU_API_KEY=your_heroku_key
HEROKU_APP_NAME=your-app-name
AWS_ACCESS_KEY_ID=your_aws_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
```

## Deployment Flow

```
Code Push to main
    ↓
Run CI Tests (Node.js + Python)
    ↓
Run Security Scans (CodeQL)
    ↓
If all pass → Deploy to Production
    ├── Frontend → Vercel
    └── Backend → Heroku/AWS
```

## Monitoring Deployments

- **GitHub Actions:** View workflow runs at `Actions` tab
- **Logs:** Click on workflow run to see detailed logs
- **Vercel:** Monitor at https://vercel.com/dashboard
- **Heroku:** Monitor at https://dashboard.heroku.com
- **AWS:** Monitor at https://console.aws.amazon.com

## Troubleshooting

### Workflow Won't Run
- Check branch name matches workflow trigger (`main` vs `master`)
- Verify file paths match workflow path filters
- Check GitHub Actions is enabled: `Settings → Actions`

### Deployment Fails
- Verify secrets are correctly set in GitHub
- Check logs in GitHub Actions for error messages
- Ensure platform credentials are valid and have required permissions

### Tests Failing
- Review test output in GitHub Actions logs
- Run tests locally: `npm test` or `pytest`
- Update `.github/workflows/` if test commands differ

## Next Steps

1. ✅ Merge this branch into `main`
2. ✅ Add deployment platform credentials as GitHub secrets
3. ✅ Test workflows by creating a test PR
4. ✅ Monitor first production deployment
