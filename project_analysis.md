# Project Analysis & Solution Document: BSTL HRMS

## 1. Project Overview
BarodaSun Technologies Limited (BSTL) is seeking a comprehensive **Human Resource Management System (HRMS)** to manage the entire lifecycle of its employees (Regular, Contractual, and Deputed). The solution must be a web-based, mobile-enabled, cloud-native SaaS application.

## 2. Comprehensive Module Analysis

### 2.1 Core HR & Database Management
*   **Digital Employee Records**: Centralized repository for all HR documents (Appointment letters, ID proofs, etc.).
*   **Lifecycle Management**: From onboarding to separation.
*   **Organization Structure**: Hierarchy mapping, department management, and position tracking.

### 2.2 Attendance & Leave Management
*   **Integration**: Seamless connection with Biometric/Digital systems (Thumb/IRIS).
*   **Policies**: Configurable leave rules, holiday calendars, and shift management.
*   **Dashboards**: Real-time tracking of late marks, early exits, and timesheets.

### 2.3 Payroll & Compensation
*   **Automated Processing**: Salary calculation based on attendance, CTC structure, and arrears.
*   **Statutory Compliance**: Automated TDS, PF, ESI, and PT deductions.
*   **Claims & Reimbursements**: Workflow-driven TA/DA claims and settlements.

### 2.4 Talent Management
*   **Recruitment (ATS)**: Job requisition, posting, applicant tracking, and interview scheduling.
*   **Performance Management**: Goal setting (KPIs), appraisal cycles, and feedback mechanisms.
*   **Training**: Management of training materials and user manuals.

### 2.5 Self-Service Portals (ESS/MSS)
*   **Employee Portal**: Leave application, payslip viewing, and profile updates.
*   **Manager Portal**: Approval workflows and team performance tracking.

### 2.6 Exit Management
*   **Full & Final (F&F)**: Automated calculation of notice period shortfall and dues.
*   **Clearance Workflow**: Digital "No Dues" from all departments.

## 3. Technical Solution Architecture

### 3.1 Proposed Tech Stack
*   **Frontend**: React.js / Next.js (for high performance and SEO/Speed) or modern Vanilla JS for lightweight needs.
*   **Backend**: Node.js (NestJS) or Java (Spring Boot) for enterprise-grade stability.
*   **Database**: PostgreSQL (Relational) + Redis (Caching).
*   **Cloud**: AWS or Azure (India Region for data residency compliance).
*   **Mobile**: React Native (Cross-platform Android/iOS).

### 3.2 Security & Integration
*   **Authentication**: SSO (O365), MFA, and RBAC.
*   **Encryption**: AES-256 for data at rest, TLS 1.2+ for data in transit.
*   **Integrations**: REST APIs for Tally (Finance), O365 (Email/Identity), and Biometric devices.

## 4. Phase-wise Implementation & Time Estimation

| Phase | Description | Estimated Time | Key Deliverables |
| :--- | :--- | :--- | :--- |
| **Phase 1** | **Discovery & Foundation** | 2-3 Weeks | SRS Document, UI/UX Prototypes, Database Schema |
| **Phase 2** | **Core Modules Development** | 6-8 Weeks | Employee DB, Leave & Attendance, ESS/MSS Portals |
| **Phase 3** | **Payroll & Financials** | 4-6 Weeks | Salary Engine, Tax Module, Reimbursement Workflow |
| **Phase 4** | **Talent & Performance** | 4-5 Weeks | ATS, Onboarding, PMS (KPI/Appraisals) |
| **Phase 5** | **Integration & Security** | 3-4 Weeks | O365/Tally Integration, MFA, VAPT Audit Fixes |
| **Phase 6** | **UAT, Training & Go-Live** | 3-4 Weeks | User Training, Manuals, Production Deployment |

**Total Estimated Timeline**: 22 - 30 Weeks (approx. 6-7 Months)

## 5. Deployment Strategy
1.  **Staging**: For UAT and internal testing.
2.  **Production**: High-availability setup with multi-AZ deployment.
3.  **DR Site**: Disaster Recovery environment as per BSTL requirements.

---
*This document is prepared based on Bid Number: GEM/2026/B/7416997.*
