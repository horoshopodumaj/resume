import React, { useContext } from "react";
import { Select, MenuItem } from "@mui/material";
import GlobalContext from "./context/GlobalContext";
import { LOCALES } from "./i18n/locales";

export default function LocalePicker() {
    const { currentLocale, setCurrentLocale } = useContext(GlobalContext);

    const handleChange = (event) => {
        setCurrentLocale(event.target.value);
        localStorage.setItem("language", event.target.value);
    };
    return (
        <Select
            className="select-fieldset"
            value={currentLocale}
            label="lang"
            onChange={handleChange}
            displayEmpty
            sx={{
                mr: "10px",
                color: "white",
                float: "right",
                fontSize: "14px",
                "& .MuiSelect-icon": {
                    color: "white",
                },
            }}>
            <MenuItem value={LOCALES.RU}>RU</MenuItem>
            <MenuItem value={LOCALES.EN}>EN</MenuItem>
        </Select>
    );
}
