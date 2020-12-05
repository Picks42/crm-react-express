import axois from 'axios';
const url = "https://api.jsonbin.io/b/";
const secretKey = "$2b$10$mKuiKoYbikkuFFjRdjIgduAUx361MviMzqHNUz8kQdg34b3szPNSS";


export default axois.create({
  baseURL: url,
  headers:{
    "secret-key":secretKey,
    "content-type":'application/json',
    "versioning":false
  }
});