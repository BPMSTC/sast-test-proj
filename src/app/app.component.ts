import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ScanResult {
  check: string;
  status: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly title = 'SAST/DAST Angular 21 Demo';
  scanResults: ScanResult[] = [];

  runScan(): void {
    this.scanResults = [
      { check: 'Dependency vulnerabilities', status: 'PASS' },
      { check: 'OWASP Top 10 patterns', status: 'PASS' },
      { check: 'Input validation coverage', status: 'WARN' },
      { check: 'Authentication hardening', status: 'PASS' },
      { check: 'Client-side XSS protections', status: 'WARN' }
    ];
  }
}
