import {useContext} from 'react';
import SettingContext from './settingContext';

const SettingPanel = () => {
    const {notifications, changeFontSize, changeLanguage, changeNotifications} = useContext(SettingContext);

    return (
        <div>
            <h2>Settings</h2>

            <div>
                <label htmlFor="">Font</label>
                <select name="" id="" onChange={(e) => changeFontSize(e.target.value)}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>

            <div>
                <label htmlFor="">Language</label>
                <select name="" id="" onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select>
            </div>

            <div>
                <label htmlFor="">Notifications</label>
                <input type="checkbox" checked={notifications} onChange={(e) => changeNotifications(e.target.checked)} />
            </div>
        </div>
    )
}

export default SettingPanel;