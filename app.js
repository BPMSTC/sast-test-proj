const $ = require('jquery');

// SAST Security Analysis Module
// Simulates security scanning functionality for educational purposes

function createSecurityIssue(issueType, severity, description) {
  const issueItem = $('<li>').addClass('security-issue');
  const issueText = $('<span>').text(`${issueType}: ${description}`);
  const severityBadge = $('<span>').addClass('severity-badge').text(severity);
  const removeButton = $('<button>').text('Resolve').addClass('resolve-btn');
  
  // Add severity-based styling
  severityBadge.addClass(`severity-${severity.toLowerCase()}`);
  
  removeButton.on('click', function() { 
    $(this).parent().fadeOut(300, function() { 
      $(this).remove(); 
    }); 
  });
  
  issueItem.append(issueText, severityBadge, removeButton);
  return issueItem;
}

function performSecurityScan() {
  const securityIssues = [
    { type: 'SQL Injection', severity: 'HIGH', description: 'Potential SQL injection vulnerability detected' },
    { type: 'XSS', severity: 'MEDIUM', description: 'Cross-site scripting vulnerability found' },
    { type: 'Authentication', severity: 'CRITICAL', description: 'Weak authentication mechanism identified' },
    { type: 'Input Validation', severity: 'LOW', description: 'Missing input validation on user data' },
    { type: 'Dependency', severity: 'HIGH', description: 'Outdated dependency with known vulnerabilities' }
  ];
  
  return securityIssues.map(issue => createSecurityIssue(issue.type, issue.severity, issue.description));
}

function generateSecurityReport() {
  const report = {
    timestamp: new Date().toISOString(),
    totalIssues: 0,
    criticalIssues: 0,
    highIssues: 0,
    mediumIssues: 0,
    lowIssues: 0,
    status: 'PASS'
  };
  
  // Simulate scanning results
  const issues = performSecurityScan();
  report.totalIssues = issues.length;
  
  issues.forEach(issue => {
    const severity = issue.find('.severity-badge').text();
    switch(severity) {
      case 'CRITICAL': report.criticalIssues++; break;
      case 'HIGH': report.highIssues++; break;
      case 'MEDIUM': report.mediumIssues++; break;
      case 'LOW': report.lowIssues++; break;
    }
  });
  
  // Determine overall status
  if (report.criticalIssues > 0 || report.highIssues > 2) {
    report.status = 'FAIL';
  } else if (report.mediumIssues > 3 || report.lowIssues > 5) {
    report.status = 'WARN';
  }
  
  return report;
}

// Legacy function for backward compatibility
function createTaskItem(taskText) {
  const listItem = $('<li>').text(taskText);
  const removeButton = $('<button>').text('Remove');
  removeButton.on('click', function() { $(this).parent().remove(); });
  listItem.append(removeButton);
  return listItem;
}

module.exports = { 
  createTaskItem, 
  createSecurityIssue, 
  performSecurityScan, 
  generateSecurityReport 
};
