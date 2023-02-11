import { createContext } from "react";
import { LOCALES } from "../i18n/locales";

const GlobalContext = createContext({
    locale: LOCALES.EN,
});

export default GlobalContext;
