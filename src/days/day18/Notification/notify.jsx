// Exercise 3: Notification System
// Create a global notification system:

// NotificationContext with an array of notifications
// Functions: addNotification(message, type) and removeNotification(id)
// Display notifications at the top of the screen
// Auto-remove after 3 seconds (hint: useEffect!)

import React, { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

// Export the context so other components can use it
export { NotificationContext };

export function Notification ({children}) {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message, type) => {
        const id = Date.now();
        const newNotification = { id, message, type };
        
        // Just add it - no timer here
        setNotifications([...notifications, newNotification]);
    }

    const removeNotification = (id) =>  {
        setNotifications((currentNotifications) => 
            currentNotifications.filter((notification) => notification.id !== id)
        );
    }

// Timer runs AFTER each notification appears
useEffect(() => {
    if (notifications.length === 0) return; // No notifications? Do nothing.
    
    // Get the most recent notification
    const latestNotification = notifications[notifications.length - 1];
    
    // Start timer AFTER it's on screen
    const timer = setTimeout(() => {
        removeNotification(latestNotification.id);
    }, 3000);
    
    // Cleanup: if component unmounts, cancel the timer
    return () => clearTimeout(timer);
    
}, [notifications]); // Run this whenever notifications array changes

    return (
        <NotificationContext.Provider value={{notifications, addNotification, removeNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}