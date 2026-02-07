import { AuthProvider } from "./AuthContext";
import Profile from "./Profile";
import Login from "./Login"; 
import { useContext } from "react";
import AuthContext from "./AuthContext";

function AppContent() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      {isLoggedIn ? <Profile /> : <Login />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;