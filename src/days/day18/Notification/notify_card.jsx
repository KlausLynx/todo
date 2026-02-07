import { useContext } from "react"; 
import { NotificationContext } from "./notify";

const Notifies = () => {
    // Move useContext INSIDE the component
    const {notifications, addNotification, removeNotification} = useContext(NotificationContext);

    return (
        <div>
            <button onClick={() => addNotification("Success! This worked", "success")}>
                Add Success Notification
            </button>
            <button onClick={() => addNotification("Error! Something went wrong", "error")}>
                Add Error Notification
            </button>
            
            {/* Display all notifications */}
            <div style={{position: 'fixed', top: '20px', right: '20px', zIndex: 1000}}>
                {notifications.map((notification) => (
                    <div 
                        key={notification.id}
                        style={{
                            padding: '10px 20px',
                            margin: '10px 0',
                            borderRadius: '5px',
                            backgroundColor: notification.type === 'error' ? '#ff4444' : '#44ff44',
                            color: 'white'
                        }}
                    >
                        {notification.message}
                        <button 
                            onClick={() => removeNotification(notification.id)}
                            style={{marginLeft: '10px'}}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notifies;