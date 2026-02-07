import { SettingProvider } from "./settingContext";
import Display from "./display";
import SettingPanel from "./setingsPanel";

function App() {
  return (
    <SettingProvider>
      <Display />
      <SettingPanel />
    </SettingProvider>
  );
}


export default App;