import React from 'react';

const About = () => {
    return (
        <div className="mt-8 p-4">
            <h2 className="text-3xl font-semibold mb-4 text-center">About</h2>

            <p>
                Welcome to SCC Technovision Inc., your dedicated solution for streamlined task management. We understand the importance of staying organized and on top of your tasks, both in your personal and professional life. Our task management app is designed to simplify your workflow, boost productivity, and help you achieve your goals with efficiency.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Key Features</h3>
            <ul className="list-disc pl-6">
                <li><strong>Intuitive Task Creation:</strong> Easily create tasks with detailed information, including titles, descriptions, deadlines, and priority levels.</li>
                <li><strong>User-Friendly Dashboard:</strong> Navigate through a clean and user-friendly dashboard that provides a comprehensive overview of your tasks.</li>
                <li><strong>Task Status Tracking:</strong> Monitor the status of your tasks, from "To-Do" to "Completed," giving you a clear picture of your progress.</li>
                <li><strong>Personalized Prioritization:</strong> Prioritize tasks based on urgency and importance, helping you manage your time effectively.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">How It Works</h3>
            <ol className="list-decimal pl-6">
                <li><strong>Task Creation:</strong> Simply create a new task by providing essential details such as title, description, deadline, and priority.</li>
                <li><strong>Dashboard Overview:</strong> Access your personalized dashboard to view all tasks at a glance.</li>
                <li><strong>Task Updates:</strong> Keep your tasks up to date by editing details, marking tasks as complete, or modifying deadlines.</li>
            </ol>

            <p>
                SCC Technovision Inc. is more than just a task management app; it's your productivity companion. Whether you're a professional managing work projects or an individual organizing personal tasks, our app adapts to your needs.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Get Started Today</h3>
            <p>
                Join the countless users who have transformed the way they manage tasks. Sign up for SCC Technovision Inc. today and experience the benefits of a streamlined and organized approach to task management.
            </p>

            <p>
                Ready to take control of your tasks? Let SCC Technovision Inc. be your guide!
            </p>
        </div>
    );
};

export default About;
