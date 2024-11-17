localStorage.clear();

const employees = [
  {
    "id": 1,
    "firstName": "Rohan",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Compile the monthly sales report and present to the management.",
        "taskDate": "2024-10-15",
        "category": "Report"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Client Database",
        "taskDescription": "Ensure all client records are up to date in the CRM.",
        "taskDate": "2024-10-05",
        "category": "Database"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Aarav",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design New Website Layout",
        "taskDescription": "Create a draft for the upcoming website redesign project.",
        "taskDate": "2024-10-20",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Feedback Meeting",
        "taskDescription": "Attend and gather feedback from clients regarding the new product.",
        "taskDate": "2024-09-28",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Market Research Survey",
        "taskDescription": "Conduct a market research survey for product X but missed the deadline.",
        "taskDate": "2024-09-10",
        "category": "Research"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Quarterly Budget",
        "taskDescription": "Work with the finance team to prepare the Q4 budget.",
        "taskDate": "2024-10-18",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Building Event",
        "taskDescription": "Organize the logistics for the upcoming team-building event.",
        "taskDate": "2024-10-22",
        "category": "Event"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Employee Onboarding",
        "taskDescription": "Complete the onboarding process for the new hires.",
        "taskDate": "2024-09-30",
        "category": "HR"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Aditya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "System Upgrade",
        "taskDescription": "Oversee the system upgrade for the IT infrastructure.",
        "taskDate": "2024-09-15",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDescription": "Conduct a security audit for the new software system.",
        "taskDate": "2024-10-25",
        "category": "Audit"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Ishaan",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Support Training",
        "taskDescription": "Organize and lead training sessions for the support team.",
        "taskDate": "2024-10-16",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Annual Product Review",
        "taskDescription": "Review the performance and feedback of all products released this year.",
        "taskDate": "2024-09-21",
        "category": "Review"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Advertising Campaign",
        "taskDescription": "Launch an advertising campaign for Q3 but was unsuccessful.",
        "taskDate": "2024-09-05",
        "category": "Marketing"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
];

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = () =>{
    const employeesData = JSON.parse(localStorage.getItem('employees'));
    const adminData = JSON.parse(localStorage.getItem('admin'));
    
    return {employeesData,adminData}
}