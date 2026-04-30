# Project Design Report (PDR): BSTL HRMS Implementation

## 1. Executive Summary
This PDR outlines the implementation of a comprehensive Human Resource Management System (HRMS) for **BarodaSun Technologies Limited (BSTL)**. The project aims to digitize the entire employee lifecycle for regular, contractual, and deputed staff, ensuring scalability, security, and seamless integration with existing systems.

## 2. Scope of Work (Functional Modules)

### 2.1 Core Employee Management
*   **Digital Employee Records**: Centralized repository for ID proofs, certificates, and appointment letters.
*   **Database Management**: Handling Organization, People, Job Data, and Positions.
*   **Lifecycle Events**: Enrollment, confirmation process, and transfers.

### 2.2 Attendance & Leave Management
*   **Biometric Integration**: Support for Thumb and IRIS-based attendance.
*   **Real-time Dashboard**: Tracking late marks, early exits, and daily status.
*   **Leave Engine**: Configurable BSTL-specific rules, online application, and automated ledger updates.
*   **Timesheets**: Project-wise timesheet entries for employees.

### 2.3 Payroll & Compensation
*   **Salary Engine**: Automated calculations based on CTC, attendance, and leave.
*   **Statutory Compliance**: Automated TDS, PF, ESI, and Professional Tax (PT).
*   **Reimbursements**: TA/DA claim workflow with document upload and approval routing.

### 2.4 Talent & Performance
*   **Recruitment (ATS)**: Job requisition, applicant tracking, and interview scheduling.
*   **PMS**: Goal setting, KPI tracking, and appraisal feedback cycles.
*   **Onboarding**: Automated document verification and code generation.

### 2.5 Separation & Exit
*   **F&F Settlement**: Automated calculation of notice period shortfall and dues.
*   **Exit Process**: Digital exit forms, clearance workflow, and feedback interviews.

## 3. Technical Architecture

### 3.1 Deployment Model
*   **SaaS/Cloud-based**: Multi-tenant or dedicated architecture.
*   **Data Residency**: All data must reside in India (MeitY compliant).
*   **High Availability**: Scalable architecture with Disaster Recovery (DR) in place.

### 3.2 Security & Compliance
*   **Standards**: ISO/IEC 27001:2022 certified.
*   **Data Security**: Encryption at rest and in transit (TLS 1.2+).
*   **Audits**: Quarterly VAPT and yearly comprehensive Penetration Testing.
*   **Access Control**: Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA).

### 3.3 Integration Ecosystem
*   **Identity**: SSO via Office 365 / SAML / OAuth 2.0.
*   **Finance**: Integration with Tally/ERP systems.
*   **Communication**: Email integration with Microsoft Outlook.

## 4. Implementation Timeline (6-Week Go-Live)

| Phase | Activity | Deliverables |
| :--- | :--- | :--- |
| **Week 1-2** | Solution Setup & Configuration | SRS, Schema, Environment Provisioning |
| **Week 3-4** | Customization & Integration | Payroll Rules, Tally/O365 Integration |
| **Week 5** | User Acceptance Testing (UAT) | UAT Sign-off, Training Manuals |
| **Week 6** | Go-Live & Handover | Production Release, Training Completion |

## 5. Commercial & Support Terms
*   **Contract Duration**: 3 Years from Go-Live sign-off.
*   **Payment Milestone**:
    *   10%: On PBG Submission.
    *   50%: On UAT Sign-off.
    *   30%: On Go-Live.
    *   10%: On Go-Live Closure.
*   **Support**: Comprehensive warranty and AMC including helpdesk and periodic upgrades.

## 6. Key Compliance Checkpoints
*   **CERT-IN**: Auditor confirmation on data segregation.
*   **VAPT**: Mandatory quarterly assessments.
*   **Data Deletion**: Secure purging of data upon contract termination.

---
*Reference: Bid Number GEM/2026/B/7416997*
