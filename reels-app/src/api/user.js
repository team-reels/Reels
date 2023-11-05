import axios from "axios";

export const fun = async () => {
    console.log('fun')
    try {
        console.log('data1')
        const { data } = await axios.post('http://localhost:8000/user_api/get_user', {
		uid: "g8Vs7pZe2GgnKqPmEIIv00hxus93"
            }
        )
        console.log('data2')
        console.log(data);
    } catch(e) {
        console.log(e.message);
    }
}
