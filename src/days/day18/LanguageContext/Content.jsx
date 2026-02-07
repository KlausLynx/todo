import { useContext } from "react";
import LanguageContext from "./UserContext";

export default function Content() {
    const {mode, translations, changeTranslation} = useContext(LanguageContext);

    return (
        <div>
            <button onClick={changeTranslation}>
                Switch to {mode === 'English' ? 'English' : 'Spanish'} Mode
            </button>
            <p>{translations}</p>
        </div>   
    )
}