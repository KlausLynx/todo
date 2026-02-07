import { LanguageProvider } from "./UserContext";
import Header from './Header'
import Content from './Content'

function App() {
    return(
        <LanguageProvider>
            <div>
                <Header />
                <Content />
            </div>
        </LanguageProvider>
    )
}

export default App