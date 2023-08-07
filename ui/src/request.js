import axios from "axios";




// const user = useSelector(state=>state.user.value)

const BASE_URL = "http://localhost:8800/api/";
// const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzdlZDJjZWNlYzg2MzBiMjNiNWZkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTg3NTAyNywiZXhwIjoxNjkwMzA3MDI3fQ.TVy6NKFxm2CT59yDc2oa-qdnEROmyZJEu-w8e2jSuiE";




export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    // headers: { token: `Bearer ${TOKEN}`},
});

