// SAST Security Analysis Simulator
// Interactive demonstration of security scanning functionality

document.addEventListener('DOMContentLoaded', function() {
    const scanButton = document.getElementById('scanButton');
    const scanResults = document.getElementById('scanResults');
    const scanList = document.getElementById('scanList');
    
    // Security scan simulation data
    const securityChecks = [
        { name: 'SQL Injection Detection', status: 'PASS', severity: 'LOW' },
        { name: 'XSS Vulnerability Scan', status: 'PASS', severity: 'LOW' },
        { name: 'Authentication Bypass Check', status: 'PASS', severity: 'MEDIUM' },
        { name: 'Input Validation Analysis', status: 'WARN', severity: 'MEDIUM' },
        { name: 'Dependency Vulnerability Scan', status: 'PASS', severity: 'HIGH' },
        { name: 'Code Quality Security Review', status: 'PASS', severity: 'LOW' },
        { name: 'OWASP Top 10 Compliance', status: 'PASS', severity: 'HIGH' },
        { name: 'Sensitive Data Exposure Check', status: 'PASS', severity: 'CRITICAL' }
    ];
    
    let isScanning = false;
    
    scanButton.addEventListener('click', function() {
        if (isScanning) return;
        
        isScanning = true;
        scanButton.textContent = '🔄 Scanning...';
        scanButton.disabled = true;
        scanResults.style.display = 'none';
        scanList.innerHTML = '';
        
        // Simulate scanning process with delay
        setTimeout(() => {
            scanButton.textContent = '✅ Scan Complete!';
            scanButton.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
            
            // Display results
            scanResults.style.display = 'block';
            scanResults.style.animation = 'fadeIn 0.5s ease-in';
            
            securityChecks.forEach((check, index) => {
                setTimeout(() => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span class="security-badge" style="background: ${getStatusColor(check.status)}; margin-right: 10px;">
                            ${check.status}
                        </span>
                        <strong>${check.name}</strong> 
                        <span style="color: #666;">(${check.severity} severity)</span>
                    `;
                    li.style.marginBottom = '10px';
                    li.style.animation = 'slideIn 0.3s ease';
                    scanList.appendChild(li);
                }, index * 200);
            });
            
            // Reset button after 3 seconds
            setTimeout(() => {
                scanButton.textContent = '🔍 Start Security Scan';
                scanButton.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
                scanButton.disabled = false;
                isScanning = false;
            }, 3000);
            
        }, 2000);
    });
    
    function getStatusColor(status) {
        switch(status) {
            case 'PASS': return 'linear-gradient(45deg, #4ecdc4, #44a08d)';
            case 'WARN': return 'linear-gradient(45deg, #f39c12, #e67e22)';
            case 'FAIL': return 'linear-gradient(45deg, #e74c3c, #c0392b)';
            default: return 'linear-gradient(45deg, #95a5a6, #7f8c8d)';
        }
    }
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        .security-badge {
            transition: all 0.3s ease;
        }
        
        .security-badge:hover {
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(style);
    
    // Add floating animation to security badges
    const badges = document.querySelectorAll('.security-badge');
    badges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
    });
});
