# SAST/DAST Security Analysis Pipeline Project Structure Guide

## Overview
This project demonstrates a complete **security testing CI/CD pipeline** using both **SAST (Static Application Security Testing)** and **DAST (Dynamic Application Security Testing)** methodologies. It's designed to help students understand how modern development teams integrate comprehensive security testing into their automated software delivery process.

### What is SAST vs DAST?

**SAST (Static Application Security Testing)**
- Analyzes source code **without executing it**
- Finds vulnerabilities in code, dependencies, and configurations
- Works like a "code review" looking for security patterns
- Fast, runs during the build process (seconds to minutes)
- Examples: Finding SQL injection patterns in code, detecting insecure dependencies
- **Tools used in this project:** npm audit, ESLint Security, Snyk

**DAST (Dynamic Application Security Testing)**
- Tests the **running application** from the outside
- Simulates real-world attacks against the live app
- Works like a "penetration test" or "ethical hacking"
- Slower, runs against deployed applications (minutes)
- Examples: Trying to inject malicious scripts, testing for XSS vulnerabilities
- **Tools used in this project:** OWASP ZAP

**This project demonstrates BOTH approaches for comprehensive security coverage!**

## Project Structure

```
sast-test-proj/
├── 📄 index.html              # Security-focused educational web page with interactive demo
├── 🎨 style.css               # Dynamic CSS with animations and security-themed styling
├── 📜 script.js               # Interactive security scan simulator
├── 📦 package.json            # Node.js dependencies and build scripts
├── ⚙️ webpack.config.js       # Webpack build configuration
├── 🚀 bitbucket-pipelines.yml # Build/test/deploy pipeline (educational SAST demo)
├── 📁 .github/
│   └── workflows/
│       ├── sast-security-scan.yml  # REAL SAST: npm audit + ESLint + Snyk
│       └── dast-zap-scan.yml       # REAL DAST: OWASP ZAP security scanning
├── 📁 build/                  # Generated build artifacts (created by pipeline)
├── 📁 node_modules/           # Node.js dependencies (installed by npm)
├── 📁 images/                 # Security diagrams and visual assets
│   └── sast-diagram.svg       # Interactive security pipeline visualization
│
├── 🔧 Core Application Files
├── app.js                     # Security analysis module with vulnerability detection
├── sum.js                     # Simple utility function for testing
│
├── 🧪 Test Files
├── sum.test.js                # Unit tests for sum function
├── taskManager.test.js        # Integration tests for security analysis
│
└── 📚 Documentation
    ├── README.md              # Project documentation
    ├── LICENSE                # Project license
    └── PROJECT_STRUCTURE.md   # This file
```

## File Descriptions

### 🌐 Frontend Files

#### `index.html`
- **Purpose**: SAST-focused educational web page with interactive security demo
- **Content**: Explains SAST concepts, security benefits, and CI/CD integration
- **Features**: 
  - Dynamic, security-themed design with animations
  - Interactive SAST security scan simulator
  - Educational content about security testing
  - Visual SAST pipeline diagram
  - Floating security icons and dynamic elements

#### `style.css`
- **Purpose**: Dynamic, security-themed styling with animations
- **Features**:
  - Gradient backgrounds with animated effects
  - Security-themed color schemes (blues, reds, greens)
  - Animated floating icons and hover effects
  - Glass-morphism design elements
  - Responsive layout with modern animations
  - Security badge styling with glow effects

#### `script.js`
- **Purpose**: Interactive SAST security scan simulator
- **Features**:
  - Simulated security vulnerability scanning
  - Dynamic scan results with animations
  - Interactive security analysis demonstration
  - Real-time status updates and progress indicators
  - Educational security check simulations

### 🔧 Backend/Module Files

#### `app.js`
- **Purpose**: SAST security analysis module with vulnerability detection
- **Dependencies**: jQuery
- **Exports**: `createTaskItem`, `createSecurityIssue`, `performSecurityScan`, `generateSecurityReport`
- **Features**:
  - Simulates security vulnerability scanning
  - Creates security issue reports with severity levels
  - Generates comprehensive security analysis reports
  - Supports various vulnerability types (SQL injection, XSS, etc.)
  - Educational security testing functionality

#### `sum.js`
- **Purpose**: Simple utility function
- **Exports**: `sum` function
- **Features**:
  - Basic mathematical operation
  - Used for unit testing demonstration

### 🧪 Testing Files

#### `sum.test.js`
- **Purpose**: Unit tests for the sum function
- **Test Framework**: Jest
- **Test Cases**:
  - Basic addition (1 + 2 = 3)
  - Negative numbers (-1 + 2 = 1)
  - Zero values (0 + 0 = 0)
  - Decimal numbers (1.5 + 2.3 ≈ 3.8)

#### `taskManager.test.js`
- **Purpose**: Integration tests for task management
- **Test Framework**: Jest
- **Dependencies**: jQuery, app.js
- **Test Cases**:
  - Task item creation with correct text and button
  - Remove button functionality
  - DOM manipulation verification

### 🖼️ Visual Assets

#### `images/sast-diagram.svg`
- **Purpose**: Interactive SAST pipeline visualization
- **Features**:
  - SVG-based security pipeline diagram
  - Color-coded security check types
  - Animated workflow representation
  - Educational security process visualization

### ⚙️ Configuration Files

#### `package.json`
- **Purpose**: Node.js project configuration
- **Scripts**:
  - `test`: Runs Jest tests
  - `build`: Executes Webpack build process
  - `minify`: Additional minification step
- **Dependencies**:
  - **Production**: jQuery
  - **Development**: Jest, Webpack, Babel, UglifyJS

#### `webpack.config.js`
- **Purpose**: Webpack build configuration
- **Features**:
  - Entry point: `app.js`
  - Output: `build/bundle.min.js`
  - Babel transpilation (ES6+ → ES5)
  - CSS extraction and minification
  - JavaScript minification with Terser

#### `bitbucket-pipelines.yml`
- **Purpose**: Build/test/deploy CI/CD pipeline with educational SAST simulation
- **Pipeline Types**:
  - **Automatic Pipeline** (triggered on push):
    1. **Install and Test**: Dependencies + unit tests
    2. **Build and Minify**: Webpack build process
    3. **Deploy to Staging**: Simulated staging deployment
    4. **Mock Release to Production**: Simulated production deployment
  - **Manual Pipelines** (custom triggers):
    - **security-scan**: Simulated SAST security analysis (educational echo statements)
    - **full-sast-pipeline**: Complete simulated SAST analysis + build + deploy

**Note:** The Bitbucket pipeline uses **simulated/educational SAST** (echo statements for teaching). For **real SAST scanning**, see the GitHub Actions workflows below.

#### `.github/workflows/sast-security-scan.yml`
- **Purpose**: Real SAST (Static Application Security Testing) with multiple industry-standard tools
- **Trigger**: Runs on push to main, pull requests, or manual dispatch
- **Security Tools Used:**
  1. **npm audit**: Built-in dependency vulnerability scanning
  2. **ESLint + Security Plugins**: Source code security analysis
  3. **Snyk**: Professional-grade vulnerability scanning
- **Jobs**:
  1. **sast-analysis**: 
     - Installs project dependencies
     - Runs npm audit for CVE detection in dependencies
     - Runs ESLint with security plugins for code analysis
     - Runs Snyk professional security scan
     - Generates comprehensive HTML report
     - Uploads all scan results as artifacts
     - Integrates with GitHub Security tab

**SAST Tools Breakdown:**

1. **npm audit** (Dependency Vulnerabilities)
   - **What it does**: Checks package.json dependencies against npm Security Advisory Database
   - **Finds**: Known CVEs in dependencies, outdated packages with security issues
   - **Speed**: Very fast (seconds)
   - **Educational value**: Shows importance of keeping dependencies updated

2. **ESLint Security Analysis** (Code Security)
   - **Plugins**: `eslint-plugin-security`, `eslint-plugin-no-unsanitized`
   - **What it finds**:
     - SQL injection patterns
     - Cross-Site Scripting (XSS) risks
     - Unsafe regular expressions (ReDoS)
     - Command injection vulnerabilities
     - eval() and unsafe code execution
     - Timing attack vulnerabilities
     - Object injection risks
   - **Speed**: Fast (seconds)
   - **Educational value**: Students can fix issues and re-run to see improvements

3. **Snyk Security Scan** (Professional Scanning)
   - **What it does**: Comprehensive vulnerability database scanning
   - **Finds**:
     - Known vulnerabilities (CVEs) in dependencies
     - License compliance issues
     - Code quality and security issues
     - Configuration problems
     - Recommended fixes and upgrade paths
   - **Speed**: Moderate (1-2 minutes)
   - **Educational value**: Industry-standard tool used in production environments
   - **Requirements**: Requires `SNYK_TOKEN` secret in GitHub

**Key Configuration:**
- Runs on Node.js 14 (matches project requirements)
- Uses caching for faster builds
- `continue-on-error: true` for Snyk (allows workflow to complete even if issues found)
- Generates both JSON and HTML reports
- Integrates with GitHub Security tab via SARIF format

#### `.github/workflows/dast-zap-scan.yml`
- **Purpose**: Real DAST (Dynamic Application Security Testing) with OWASP ZAP
- **Trigger**: Runs on push to main, pull requests, or manual dispatch
- **Security Tool**: OWASP ZAP (Zed Attack Proxy) - industry-standard security scanner
- **Jobs**:
  1. **zap_scan**: 
     - Starts local web server on port 3000
     - Runs OWASP ZAP baseline scan against live application
     - Generates HTML, JSON, and XML security reports
     - Uploads reports as GitHub artifacts
  2. **security_report**:
     - Downloads ZAP scan results
     - Creates comprehensive security analysis report
     - Uploads final report for review

**Key Configuration Details:**
- **Docker-based scanning**: Uses `ghcr.io/zaproxy/zaproxy:stable` container
- **Network mode**: `host` to access local web server
- **Report formats**: HTML (visual), JSON (machine-readable), XML (integration)
- **Warning handling**: `-I` flag allows warnings without failing the build (ideal for demos)
- **Permissions**: `chmod -R 777 .` ensures ZAP container can write reports
- **Exit codes**:
  - 0: Success (no issues or warnings ignored with `-I`)
  - 1: At least one FAIL found
  - 2: At least one WARN and no FAILs (suppressed by `-I` flag)
  - 3: Other failures (connection issues, etc.)

**Common Security Checks Performed:**
- Missing Anti-clickjacking Headers
- X-Content-Type-Options Header Missing
- Server Version Information Leaks
- Content Security Policy (CSP) Not Set
- Storable and Cacheable Content Issues
- Permissions Policy Header Missing
- Spectre Vulnerability Site Isolation
- Missing Sec-Fetch-Dest Headers
- SQL Injection vulnerabilities
- Cross-Site Scripting (XSS) vulnerabilities

## CI/CD Pipeline Workflow

### 🔄 Build Pipeline (Bitbucket)

1. **📦 Install and Test**
   ```yaml
   - Install dependencies with npm
   - Run unit tests with Jest
   - Cache node_modules for speed
   ```

2. **🔨 Build and Minify**
   ```yaml
   - Verify all dependencies
   - Run Webpack build process
   - Generate minified bundles
   ```

3. **🚀 Deploy to Staging**
   ```yaml
   - Copy build artifacts to staging
   - Simulate staging environment
   - Validate deployment
   ```

4. **🎯 Mock Release to Production**
   ```yaml
   - Copy build artifacts to production
   - Simulate production deployment
   - Complete the pipeline
   ```

### � SAST Pipeline (GitHub Actions - sast-security-scan.yml)

**Purpose:** Static analysis of code and dependencies WITHOUT running the application

1. **📦 Setup Environment**
   ```bash
   - Checkout code
   - Setup Node.js 14
   - Install dependencies
   ```

2. **🔍 Tool 1: npm audit (Dependency Scanning)**
   ```bash
   npm audit --json > npm-audit-results.json
   # Scans package.json for known CVEs
   # Checks against npm Security Advisory Database
   # Finds vulnerable dependencies
   ```
   - **Speed**: 5-10 seconds
   - **Finds**: CVE-2023-XXXX in dependencies
   - **Output**: npm-audit-results.json

3. **🔍 Tool 2: ESLint Security (Code Analysis)**
   ```bash
   # Install security plugins
   npm install --save-dev eslint eslint-plugin-security eslint-plugin-no-unsanitized
   
   # Run security-focused linting
   npx eslint . --ext .js --format json
   ```
   - **Speed**: 10-20 seconds
   - **Finds**: 
     - SQL injection patterns: `query = "SELECT * FROM users WHERE id = " + userId`
     - XSS risks: `innerHTML = userInput`
     - Unsafe regex: `new RegExp(userInput)`
     - eval() usage: `eval(userCode)`
   - **Output**: eslint-results.json

4. **🔍 Tool 3: Snyk (Professional Scanning)**
   ```bash
   # Run Snyk security scan
   snyk test --severity-threshold=low --json-file-output=snyk-results.json
   ```
   - **Speed**: 30-60 seconds
   - **Finds**: 
     - Comprehensive CVE database
     - License compliance issues
     - Upgrade recommendations
     - Fix suggestions with PR automation
   - **Output**: snyk-results.json, snyk.sarif
   - **Requires**: SNYK_TOKEN secret

5. **📊 Generate Reports**
   ```bash
   # Create comprehensive HTML report
   # Combines results from all three tools
   # Educational explanations for students
   ```

6. **📤 Upload Results**
   - All JSON reports as artifacts
   - HTML report for easy viewing
   - SARIF format to GitHub Security tab
   - Integration with GitHub Code Scanning

**Total Runtime:** ~2-3 minutes

### 🛡️ DAST Pipeline (GitHub Actions - dast-zap-scan.yml)

**Purpose:** Dynamic testing of the RUNNING application (black-box testing)

1. **🌐 Start Web Server**
   ```bash
   python3 -m http.server 3000 &
   # Starts simple HTTP server for testing
   # Application runs on http://localhost:3000
   ```

2. **� OWASP ZAP Baseline Scan**
   ```bash
   docker run --rm \
     -v $(pwd):/zap/wrk/:rw \
     --network="host" \
     ghcr.io/zaproxy/zaproxy:stable \
     zap-baseline.py -t http://localhost:3000 \
     -r zap-report.html -J zap-report.json -x zap-report.xml -I -a
   ```
   - **Speed**: 1-2 minutes
   - **What it does**:
     - Spiders the application (finds all pages)
     - Runs passive security checks
     - Tests for OWASP Top 10 vulnerabilities
     - Analyzes HTTP responses
     - Checks security headers
   - Mounts current directory to `/zap/wrk/` in container
   - Uses host network to access local web server
   - `-I` flag: Don't fail on warnings (educational mode)
   - `-a` flag: Include alpha passive scan rules

3. **📊 Generate Security Reports**
   ```bash
   # Download artifacts from ZAP scan
   # Create comprehensive HTML security report
   # Upload for easy access and review
   ```

4. **📤 Upload Artifacts**
   - ZAP HTML report (visual, detailed findings)
   - ZAP JSON report (machine-readable)
   - ZAP XML report (integration with other tools)
   - Security analysis summary report

**Total Runtime:** ~2-3 minutes

### 🛠️ Build Process

1. **Dependency Installation**
   - npm installs all required packages
   - Caching improves build speed

2. **Testing Phase**
   - Jest runs all unit tests
   - Tests must pass for pipeline to continue

3. **Build Phase**
   - Webpack bundles JavaScript and CSS
   - Babel transpiles modern JavaScript
   - Files are minified for production

4. **Deployment Phase**
   - Build artifacts are copied to target environments
   - Simulates real-world deployment process

## Key Learning Concepts

### 🎯 CI/CD Benefits
- **Automated Testing**: Catch bugs early
- **Consistent Builds**: Same process every time
- **Faster Deployments**: Reduce manual errors
- **Quality Assurance**: Tests run automatically
- **Security Integration**: Automated security scanning

### 🔒 Security Testing Benefits
- **SAST Benefits**:
  - ✅ Find vulnerabilities early (before code runs)
  - ✅ Fast feedback (runs in seconds to minutes)
  - ✅ Identifies root cause in source code
  - ✅ Can run on every commit
  - ✅ No need to deploy the application
  - ✅ Finds code-level issues (SQL injection patterns, XSS risks)
  - ✅ Dependency vulnerability detection (CVEs)
  
- **DAST Benefits**:
  - ✅ Tests running application (real-world scenarios)
  - ✅ Finds runtime vulnerabilities
  - ✅ Configuration and deployment issues
  - ✅ No false positives from actual attacks
  - ✅ Tests integrated components together
  - ✅ Finds issues SAST might miss (server configs, headers)

- **Combined Approach** (SAST + DAST):
  - ✅ **Comprehensive coverage** - catches more vulnerabilities
  - ✅ **Defense in depth** - multiple layers of security
  - ✅ **Complete picture** - code + runtime issues
  - ✅ **Industry best practice** - what professional teams use
  - ✅ **Educational value** - students understand both perspectives

### 🔧 Modern Development Tools
- **Jest**: JavaScript testing framework
- **Webpack**: Module bundler and build tool
- **Babel**: JavaScript transpiler
- **npm**: Package manager
- **npm audit**: Built-in dependency vulnerability scanner
- **ESLint**: Code quality and security linting
- **Snyk**: Professional vulnerability scanning platform
- **OWASP ZAP**: Dynamic security testing tool
- **Docker**: Containerization for consistent environments
- **GitHub Actions**: CI/CD automation platform

### 📚 Best Practices Demonstrated
- **Modular Code**: Separate concerns into different files
- **Comprehensive Testing**: Unit and integration tests
- **Build Optimization**: Minification and bundling
- **Pipeline Automation**: Automated quality checks
- **Security-First Development**: Security testing in every pipeline
- **Defense in Depth**: Multiple security testing approaches (SAST + DAST)
- **Shift Left Security**: SAST runs early in development
- **Continuous Security**: Automated scans on every commit
- **Multiple Tools**: Using best-of-breed tools for different purposes
- **Reporting**: Clear, actionable security reports

## How to Use This Project

### 🚀 Running Locally
```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build

# Start local server for DAST testing
python3 -m http.server 3000

# Open index.html in a browser
```

### 🔄 Triggering the Pipelines

**Bitbucket Pipeline (Build/Test/Deploy):**
1. Push code to Bitbucket repository
2. Pipeline automatically starts
3. Monitor progress in Bitbucket interface
4. Review build logs and test results

**GitHub Actions - SAST (Static Analysis):**
1. Push code to main branch, or
2. Create a pull request, or
3. Manually trigger via "Actions" tab → "SAST Security Analysis" → "Run workflow"
4. View scan results in artifacts
5. Check GitHub Security tab for vulnerability alerts
6. Download reports: npm-audit, ESLint, Snyk results

**GitHub Actions - DAST (Dynamic Testing):**
1. Push code to main branch, or
2. Create a pull request, or
3. Manually trigger via "Actions" tab → "DAST Security Analysis" → "Run workflow"
4. View ZAP scan results in artifacts
5. Download security reports for analysis

### 📊 Reviewing Security Reports

**SAST Reports (GitHub Actions):**
1. Go to Actions tab in GitHub
2. Click on "SAST Security Analysis" workflow run
3. Download "sast-security-reports" artifact
4. Review the reports:
   - **sast-security-report.html**: Comprehensive overview with educational content
   - **npm-audit-results.json**: Detailed dependency vulnerabilities
   - **eslint-results.json**: Code-level security issues with line numbers
   - **snyk-results.json**: Professional scan results with fix recommendations
5. Check GitHub Security tab for integrated vulnerability alerts

**Understanding SAST Results:**
- **npm audit**: Shows CVE numbers, severity, and affected packages
- **ESLint**: Shows exact file/line where security issue exists
- **Snyk**: Provides fix recommendations and upgrade paths

**DAST Reports (GitHub Actions):**
1. Go to Actions tab in GitHub
2. Click on "DAST Security Analysis" workflow run
3. Download "zap-reports" artifact
4. Open `zap-report.html` in browser
5. Review findings by severity level

**Understanding DAST Results:**
- **PASS**: No issues found (green)
- **WARN**: Potential issues to review (yellow/orange)
- **FAIL**: Confirmed vulnerabilities (red)
- **INFO**: Informational findings (blue)

## Educational Value

This project teaches students:
- How CI/CD pipelines work in practice
- Modern JavaScript development practices
- Automated testing strategies
- Build and deployment processes
- Real-world development workflows
- **Comprehensive security testing (SAST + DAST)**
- **The difference between static and dynamic security testing**
- **npm audit for dependency vulnerability scanning**
- **ESLint for code-level security analysis**
- **Snyk for professional security scanning**
- **OWASP ZAP for dynamic security testing**
- **Docker containerization for security tools**
- **GitHub Actions workflow automation**
- **Security report analysis and interpretation**
- **How to fix common security vulnerabilities**
- **Industry-standard security practices**

## Security Testing Deep Dive

### SAST Tools Explained

#### 1. npm audit (Dependency Scanner)
**What it is:** Built into npm, checks dependencies against vulnerability database

**How it works:**
```bash
npm audit
# Scans package.json and package-lock.json
# Compares against npm Security Advisory Database
# Reports known CVEs in your dependencies
```

**Example output:**
```
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Regular Expression Denial of Service                         │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ minimatch                                                    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in    │ >=3.0.5                                                      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://github.com/advisories/GHSA-xxxx-xxxx-xxxx           │
└───────────────┴──────────────────────────────────────────────────────────────┘
```

**Educational value:**
- Shows students the importance of keeping dependencies updated
- Teaches about supply chain security
- Real CVE numbers students can research

#### 2. ESLint Security (Code Analyzer)
**What it is:** Linter with security-focused rules

**How it works:**
```bash
# Analyzes your source code for security anti-patterns
# Example detections:
// ❌ BAD - SQL Injection risk
const query = "SELECT * FROM users WHERE id = " + userId;

// ❌ BAD - XSS risk  
element.innerHTML = userInput;

// ❌ BAD - Command Injection
exec("ls " + userDir);

// ✅ GOOD - Parameterized query
const query = "SELECT * FROM users WHERE id = ?";
db.query(query, [userId]);
```

**Security rules checked:**
- `detect-object-injection`: Bracket notation with user input
- `detect-non-literal-regexp`: RegExp with user input (ReDoS)
- `detect-eval-with-expression`: eval() usage
- `detect-child-process`: Unsafe child_process usage
- `no-unsanitized/method`: innerHTML, outerHTML with variables
- And many more...

**Educational value:**
- Students see exact line numbers where issues exist
- Can fix code and re-run to see improvements
- Learn secure coding patterns

#### 3. Snyk (Professional Scanner)
**What it is:** Enterprise-grade security platform

**Features:**
- Most comprehensive vulnerability database
- Automated PR creation for fixes
- License compliance checking
- Container and infrastructure scanning
- Developer-friendly interface

**How it works:**
```bash
snyk test
# Analyzes dependencies deeply
# Checks code for vulnerabilities
# Provides actionable fix recommendations
# Integrates with GitHub for automated PRs
```

**Educational value:**
- Shows what professional teams use
- Beautiful reports students can explore
- Learn about CVE scoring (CVSS)
- Understand risk prioritization

### DAST Tool Explained

#### OWASP ZAP (Dynamic Scanner)
The ZAP baseline scan is designed for CI/CD integration:
- **Fast**: Completes in 1-2 minutes
- **Non-invasive**: Passive scanning only, safe for production
- **Comprehensive**: Checks for OWASP Top 10 vulnerabilities
- **Automated**: Runs on every code change
- **Educational**: Great for learning security concepts

**How ZAP works:**
1. **Spider Phase**: Crawls the application to find all pages
   ```
   Found: http://localhost:3000/
   Found: http://localhost:3000/images/sast-diagram.svg
   Found: http://localhost:3000/script.js
   Found: http://localhost:3000/style.css
   ```

2. **Passive Scan Phase**: Analyzes HTTP responses for issues
   ```
   Checking for missing security headers...
   Checking for information disclosure...
   Checking for SSL/TLS issues...
   Checking for cookie security...
   ```

3. **Report Generation**: Creates detailed findings
   ```
   WARN: Missing Anti-clickjacking Header [10020]
   WARN: X-Content-Type-Options Header Missing [10021]
   WARN: Content Security Policy (CSP) Header Not Set [10038]
   ```

### Common Vulnerabilities Detected
1. **Missing Security Headers**: CSP, X-Frame-Options, etc.
2. **SQL Injection**: Database query vulnerabilities
3. **Cross-Site Scripting (XSS)**: Script injection flaws
4. **Information Disclosure**: Server version leaks
5. **Authentication Issues**: Weak auth mechanisms
6. **Session Management**: Cookie security problems
7. **HTTPS Issues**: SSL/TLS configuration
8. **Access Control**: Authorization vulnerabilities

### Why `-I` Flag for Student Demos (DAST)
The `-I` flag tells ZAP to not fail the build on warnings:
- **Educational Focus**: Students see results without CI/CD failures
- **Learning Environment**: Safe to experiment and learn
- **Real Findings**: All vulnerabilities are still reported
- **Production Note**: In production, remove `-I` to enforce security standards

### Why `continue-on-error: true` for Snyk (SAST)
Similar reasoning for educational environments:
- **Learning First**: Allow workflow to complete even with vulnerabilities
- **See All Results**: Get npm audit + ESLint + Snyk results every time
- **Production Note**: In production, set to `false` to enforce security gates

## Troubleshooting Common Issues

### SAST Workflow Issues

**Snyk Authentication Error**
**Problem**: `Missing Snyk API token`
**Solution**: 
1. Go to https://app.snyk.io/account
2. Generate API token
3. Add to GitHub: Settings → Secrets → Actions → New secret
4. Name: `SNYK_TOKEN`
5. Paste your token

**ESLint No Files Found**
**Problem**: ESLint doesn't find JavaScript files
**Solution**: The workflow explicitly uses `--ext .js` to find all `.js` files. Verify your project has `.js` files.

**npm audit Fails**
**Problem**: `npm audit` exits with error code
**Solution**: The workflow uses `|| true` to continue even with vulnerabilities (educational mode). Reports are still generated.

### DAST Workflow Issues

**ZAP Container Permission Errors**
**Problem**: `Permission denied: /zap/wrk/zap-report.html`
**Solution**: The workflow includes `chmod -R 777 .` to ensure the ZAP container can write reports to the mounted directory.

**ZAP Path Issues**
**Problem**: `NoSuchFileException /zap/wrk/zap/wrk/zap-report.html`
**Solution**: Use relative paths (`zap-report.html`) not absolute paths (`/zap/wrk/zap-report.html`) as the working directory is already `/zap/wrk/`.

**No Artifacts Found**
**Problem**: `No files were found with the provided path`
**Solution**: 
- For SAST: Ensure workflow completes all steps
- For DAST: Ensure reports are written with relative paths and directory has proper permissions

### Exit Code Meanings

**DAST (ZAP) Exit Codes:**
- **Exit 0**: Success (no issues or warnings suppressed)
- **Exit 1**: Critical failures found
- **Exit 2**: Warnings found (suppressed with `-I` flag)
- **Exit 3**: Scan errors (connectivity, Docker issues, etc.)

**SAST Exit Codes:**
- **Exit 0**: All scans completed (may have findings in reports)
- **Exit 1**: Critical error in workflow
- Note: Individual tool failures are caught with `|| true` to allow workflow completion

## Next Steps for Learning

1. **Understand the difference** between SAST and DAST
2. **Review SAST reports** to see code-level vulnerabilities
3. **Review DAST reports** to see runtime vulnerabilities  
4. **Compare findings** - what does each type of testing catch?
5. **Fix vulnerabilities** found by ESLint and re-run to see improvements
6. **Update dependencies** based on npm audit recommendations
7. **Add security headers** to fix DAST findings (CSP, X-Frame-Options, etc.)
8. **Modify the code** and see how both pipelines respond
9. **Add new tests** to understand testing best practices
10. **Customize the build process** by modifying webpack.config.js
11. **Experiment with security rules** in ESLint configuration
12. **Explore Snyk dashboard** for detailed vulnerability analysis
13. **Compare all three SAST tools** - see what each one finds
14. **Study ZAP reports** to understand web application security

### Suggested Exercises

**Exercise 1: Fix a Dependency Vulnerability**
1. Run SAST workflow
2. Review npm audit results
3. Update the vulnerable package
4. Re-run and verify fix

**Exercise 2: Fix a Code Security Issue**
1. Review ESLint security results
2. Find a security warning in your code
3. Refactor to use secure patterns
4. Re-run and see improvement

**Exercise 3: Add Security Headers**
1. Review DAST/ZAP results
2. Note missing security headers
3. Add headers to your server configuration
4. Re-run DAST and verify fixes

**Exercise 4: Compare SAST vs DAST**
1. Run both workflows
2. List findings from each
3. Identify: What can SAST find that DAST can't?
4. Identify: What can DAST find that SAST can't?
5. Understand: Why do we need both?

## Resources for Further Learning

### SAST Resources
- [npm audit Documentation](https://docs.npmjs.com/cli/v8/commands/npm-audit)
- [ESLint Security Plugin](https://github.com/nodesecurity/eslint-plugin-security)
- [Snyk Learning](https://learn.snyk.io/)
- [OWASP Secure Coding Practices](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/)

### DAST Resources  
- [OWASP ZAP Documentation](https://www.zaproxy.org/docs/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [ZAP Baseline Scan Guide](https://www.zaproxy.org/docs/docker/baseline-scan/)

### General Security
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Security in CI/CD](https://owasp.org/www-community/vulnerabilities/CI_CD_Security)
- [Security Headers Guide](https://securityheaders.com/)
- [CVE Database](https://cve.mitre.org/)
- [CVSS Scoring](https://www.first.org/cvss/)

### CI/CD Best Practices
- [Bitbucket Pipelines Guide](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/)
- [DevSecOps](https://www.devsecops.org/)
- [Shift Left Security](https://www.synopsys.com/glossary/what-is-shift-left-security.html)

---

*This project serves as a practical introduction to CI/CD concepts, comprehensive security testing (SAST/DAST), and modern web development practices. Use it as a foundation for understanding how professional development teams deliver secure software.*
