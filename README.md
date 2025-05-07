# TaskMaster - Modern Task Management System

## 🌟 Overview

TaskMaster is a modern, user-friendly task management system built with vanilla JavaScript. It offers a clean interface for managing tasks, with features like dark/light theme support, real-time email notifications, and role-based access control.

## ✨ Features

### User Management
- 👤 User registration and authentication
- 🔐 Role-based access (Admin/User)
- 🌓 Dark/Light theme preference
- 💾 Session persistence

### Task Management
- ✏️ Create, read, update, and delete tasks
- 📋 Assign tasks to users
- 📅 Set due dates
- ✅ Mark tasks as complete
- 🔍 Search and filter tasks
- 📧 Email notifications for task completion

### UI/UX
- 📱 Responsive design for all devices
- 💫 Smooth animations and transitions
- 🎨 Modern and clean interface
- 🌈 Theme customization

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Internet connection (for email notifications)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/OzenKerem/taskmaster-project.git
   ```

2. Open `index.html` in your web browser

### Default Users
```javascript
Admin Account:
- Username: admin
- Password: admin123

Test User Accounts:
- Username: user1
- Password: user123

- Username: user2
- Password: user123

- Username: zeki_eleman
- Password: zeki123
```

## 💻 Usage

### Admin Features
1. Log in with admin credentials
2. Create new tasks
3. Assign tasks to users
4. Monitor all tasks
5. Delete tasks

### User Features
1. Log in with user credentials
2. View assigned tasks
3. Mark tasks as complete
4. Receive email notifications

## 🛠️ Technical Details

### Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- EmailJS for notifications
- Local Storage for data persistence

### Project Structure
```
taskmaster/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
```

## 📝 Configuration

### Email Configuration
To enable email notifications, update the following in `main.js`:
```javascript
const EMAIL_CONFIG = {
    FROM_EMAIL: 'your-email@example.com',
    TO_EMAIL: 'recipient@example.com',
};
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- **Kerem Özen** - [GitHub Profile](https://github.com/OzenKerem)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts
- EmailJS for email service

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [@OzenKerem](https://github.com/OzenKerem)
- Email: grafstarshow@gmail.com

---
⭐️ Star this repository if you find it helpful!