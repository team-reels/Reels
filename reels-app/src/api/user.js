import axios from "axios";

export const fun = async () => {
    try {
        const { data } = await axios.get('http://api:8000/user_api/get_user/', {
               params: {
                    uid: "g8Vs7pZe2GgnKqPmEIIv00hxus93",
                }
            }
        )
        console.log(data);
    } catch(e) {
        console.log(e.message);
    }
}