// Constants
const STORAGE_KEYS = {
    TASKS: 'taskmaster_tasks',
    USERS: 'taskmaster_users',
    CURRENT_USER: 'taskmaster_current_user',
    THEME: 'taskmaster_theme'
};

const EMAIL_CONFIG = {
    FROM_EMAIL: 'grafstarshow@gmail.com',
    TO_EMAIL: 'grafstarshow@gmail.com',
};

// Initialize users from storage or use mock users
let USERS = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [
    { username: 'admin', password: 'admin123', isAdmin: true },
    { username: 'user1', password: 'user123', isAdmin: false },
    { username: 'user2', password: 'user123', isAdmin: false },
    { username: 'zeki_eleman',password: 'zeki123', isAdmin: false }
];

// Save initial users if not exists
if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(USERS));
}

// State management
let currentUser = null;
let tasks = [];

// DOM Elements
const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const userDashboard = document.querySelector('#userDashboard');
const adminPanel = document.querySelector('#adminPanel');
const taskCreatorForm = document.querySelector('.task-creator__form');
const userTaskList = document.querySelector('#userTaskList');
const adminTaskList = document.querySelector('#adminTaskList');
const themeToggle = document.querySelector('.header__theme-toggle');
const loginBtn = document.querySelector('.header__login-btn');
const showRegisterFormBtn = document.querySelector('#showRegisterForm');
const showLoginFormBtn = document.querySelector('#showLoginForm');
const tasksButton = document.querySelector('#tasksButton');

// Additional DOM Elements
const landingSection = document.querySelector('.landing');
const getStartedBtn = document.querySelector('#getStartedBtn');
const homeLink = document.querySelector('#homeLink');

// Form Switching
showRegisterFormBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

showLoginFormBtn.addEventListener('click', () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    
    // Update icon
    const themeIcon = themeToggle.querySelector('i');
    themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// User Management
function registerUser(username, password) {
    if (USERS.some(u => u.username === username)) {
        return { success: false, message: 'Username already exists' };
    }

    const newUser = {
        username,
        password,
        isAdmin: false
    };

    USERS.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(USERS));

    return { success: true, message: 'Registration successful' };
}

function login(username, password) {
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
        updateUIForUser(user);
        return true;
    }
    return false;
}

function logout() {
    currentUser = null;
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    userDashboard.classList.add('hidden');
    adminPanel.classList.add('hidden');
    landingSection.classList.remove('hidden');
    loginBtn.textContent = 'Login';
}

// Task Management
function createTask(title, description, assignee, dueDate) {
    const task = {
        id: Date.now(),
        title,
        description,
        assignee,
        dueDate,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(task);
    saveTasks();
    return task;
}

function updateTask(taskId, updates) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
        saveTasks();
        return true;
    }
    return false;
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasks();
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem(STORAGE_KEYS.TASKS);
    tasks = savedTasks ? JSON.parse(savedTasks) : [];
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    loadTasks();
    
    // Check for saved user session
    const savedUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForUser(currentUser);
    }
});

themeToggle.addEventListener('click', toggleTheme);
loginBtn.addEventListener('click', () => {
    if (currentUser) {
        logout();
    } else {
        showLoginForm();
    }
});

// Initialize the application
initializeTheme();
loadTasks();