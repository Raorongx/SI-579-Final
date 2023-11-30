import React from 'react';
import Calendar from './components/Calendar';
import CustomReminder from './components/CustomReminder';
import Notification from './components/Notification';
// Import other necessary components

const App = () => {
    return (
        <div>
            <Calendar />
            <CustomReminder />
            <Notification />
            {/* Add other components here */}
        </div>
    );
};

export default App;
