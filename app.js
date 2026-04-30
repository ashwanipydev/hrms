// Sample Employee Data
const employees = [
    { name: 'Ashwani Kumar', id: 'BSTL-101', dept: 'IT Services', role: 'Sr. Software Engineer', status: 'Active', joined: '2024-01-15' },
    { name: 'Priya Sharma', id: 'BSTL-102', dept: 'Human Resources', role: 'HR Manager', status: 'Active', joined: '2024-02-10' },
    { name: 'Rahul Verma', id: 'BSTL-103', dept: 'Finance', role: 'Accounts Officer', status: 'On Leave', joined: '2024-03-05' },
    { name: 'Sneha Patel', id: 'BSTL-104', dept: 'Operations', role: 'Project Coordinator', status: 'Active', joined: '2024-03-20' },
    { name: 'Amit Singh', id: 'BSTL-105', dept: 'IT Services', role: 'UI/UX Designer', status: 'Active', joined: '2024-04-12' }
];

// DOM Elements
const modal = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const cancelModalBtn = document.getElementById('cancelModal');
const addEmployeeForm = document.getElementById('addEmployeeForm');
const tableBody = document.getElementById('employeeTableBody');

function populateEmployeeTable() {
    if (!tableBody) return;
    tableBody.innerHTML = employees.map(emp => `
        <tr>
            <td>
                <div class="emp-info">
                    <div class="avatar"></div>
                    <strong>${emp.name}</strong>
                </div>
            </td>
            <td>${emp.id}</td>
            <td>${emp.dept}</td>
            <td>${emp.role}</td>
            <td>
                <span class="badge ${emp.status === 'Active' ? 'badge-success' : 'badge-warning'}">
                    ${emp.status}
                </span>
            </td>
            <td>${new Date(emp.joined).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
        </tr>
    `).join('');
}

// Modal Toggle Functions
const toggleModal = (show) => {
    modal.style.display = show ? 'flex' : 'none';
    if (!show) addEmployeeForm.reset();
};

// Form Submission
addEmployeeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newEmployee = {
        name: document.getElementById('fullName').value,
        id: document.getElementById('empID').value,
        dept: document.getElementById('department').value,
        role: document.getElementById('designation').value,
        status: document.getElementById('status').value,
        joined: document.getElementById('joiningDate').value
    };

    employees.unshift(newEmployee); // Add to beginning of array
    populateEmployeeTable();
    toggleModal(false);
    
    // In a real app, this would be an API call
    console.log('New employee added:', newEmployee);
});

// Event Listeners
openModalBtn?.addEventListener('click', () => toggleModal(true));
closeModalBtn?.addEventListener('click', () => toggleModal(false));
cancelModalBtn?.addEventListener('click', () => toggleModal(false));

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) toggleModal(false);
});

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    populateEmployeeTable();
    console.log('BSTL HRMS Initialized Successfully');
});
