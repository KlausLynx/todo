import {useContext} from 'react';
import SettingContext from './settingContext';

const Display = () => {
    const {fontSize, language, notifications} = useContext(SettingContext);

    const style = {
        fontSize: fontSize === 'small' ? '12px' : fontSize === 'medium'? '16px' : '20px'
    };

    const greetings = language === 'en' ? 'Hello' : language === 'es' ? 'Hola' : 'Bonjour';
    const notificationText = notifications ? 'Notifications are enabled' : 'Notifications are disabled';

    return (
        <div>
            <h2>Display</h2>
            <p style={style}>{greetings}</p>
            <p>{notificationText}</p>
        </div>
    )
    
}

export default Display;