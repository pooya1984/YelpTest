import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5SS8ystQmmAasatrsWDAPtHweNzFnPpfKCo4UV_S-SV3bLfWoFufC-o1Vd3YG9kODTqBD9RU9XJlZMYtIG1x4DZy90ny3bp9ySlIGyZEdgR8cjFJq7u7rYe0SD5OX3Yx",
  },
});
