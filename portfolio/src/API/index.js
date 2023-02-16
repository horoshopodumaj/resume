import axios from "axios";
import { URL } from "../App";

export const SendEmail = async ({ name, email, message, setSend }) => {
    try {
        const datas = { name, email, message };
        let res = await axios.post(`${URL}/send`, datas);
        if (res) {
            setSend(res.data.msg);
        }
    } catch (error) {
        console.log(error);
    }
};
