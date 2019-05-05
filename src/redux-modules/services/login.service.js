import { BASE_URL } from "../../environment/index";
const login = async (model, url) => {
  // const data =
  //   "username=" +
  //   model.userName +
  //   "&password=" +
  //   model.password +
  //   "&clientid=Website&grant_type=password";
  //   const data = {
  //     userName: model.userName,
  //     password: model.password
  //     // clientid: "Website",
  //     // grant_type: "password"
  //   };

  //   axios.defaults.baseURL = BASE_URL;
  //   axios.defaults.headers.post["Content-Type"] = "application/json";
  //   const response = await axios.post(url, data);
  let body = {
    method: "POST",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(model)
  };
  const response = await fetch(`${BASE_URL}${url}`, body);
  debugger;
  if (response.status !== 200) {
    return { error: { code: response.status } };
  }

  localStorage.setItem("edist_id_token", response.data.id_token);
  return { data: response.data };
};

export { login };
