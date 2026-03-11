# Angular 21 SAST/DAST Demo

This repository is a hands-on **Application Security (AppSec) demo** for:

- **Software developers** learning how to ship secure code in CI/CD
- **Cybersecurity specialists** validating security controls with automated pipelines

The front-end is now built with **Angular 21**, and the repository keeps both **SAST** and **DAST** workflows active.

## What this project demonstrates

- Angular 21 app development and production builds
- Security-focused CI/CD pipeline stages
- SAST checks (dependency scan, lint/static analysis, unit tests)
- DAST checks with OWASP ZAP against a running application

## Tech stack

- Angular 21 (`@angular/core` 21.x)
- TypeScript 5.9
- Jest for Node-side unit tests used in security pipeline demos
- GitHub Actions + Bitbucket Pipelines for CI/CD automation

## Getting started

### 1) Install dependencies

```bash
npm install --force
```

### 2) Run the Angular app locally

```bash
npm start
```

The app runs on `http://localhost:3000`.

### 3) Run tests

```bash
npm test
```

### 4) Build production artifacts

```bash
npm run build
```

Build output is written to `build/` for downstream deploy and scan steps.

## Security workflows

### SAST workflow

- **GitHub Actions:** `.github/workflows/sast-security-scan.yml`
  - Installs dependencies
  - Runs dependency vulnerability checks (`npm audit`)
  - Runs ESLint security rules
  - Runs Snyk scan (when token is configured)

- **Bitbucket custom pipeline:** `security-scan`
  - Runs tests/build
  - Runs `npm audit`

### DAST workflow

- **GitHub Actions:** `.github/workflows/dast-zap-scan.yml`
  - Installs dependencies
  - Starts Angular server (`npm start`)
  - Executes OWASP ZAP baseline scan against `http://localhost:3000`

- **Bitbucket custom pipeline:** `dast-zap-scan`
  - Starts local HTTP target
  - Runs OWASP ZAP baseline container

## Audience-specific usage

### For developers

- Use this repo to practice secure coding and CI gates before deploy.
- Modify the app and observe how SAST and DAST jobs respond.

### For cybersecurity specialists

- Use this repo to validate scanner integration and report quality.
- Tune risk thresholds and security gates to match policy requirements.

## Notes

- This is an educational demo and intentionally keeps workflows readable.
- You can extend the security stages with SBOM generation, SARIF upload, policy checks, and secrets scanning.
