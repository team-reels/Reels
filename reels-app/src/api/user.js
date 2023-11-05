import axios from "axios";

const { data } = axios.get('http://localhost:8000/user_api/get_user/')
console.log(data);