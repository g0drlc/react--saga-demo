import { BASE_URL } from "../../environment/index";
const get = async (query, url) => {
  let body = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(model)
  };
  const response = await fetch(`${BASE_URL}${url}?${query}`, body);
  if (response.ok) {
    const json = await response.json();
    return { data: json };
  } else {
    throw new Error("Error");
  }
};

const post = async (model, url) => {
  let body = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(model)
  };
  const response = await fetch(`${BASE_URL}${url}`, body);

  if (response.ok) {
    const json = await response.json();
    return { data: json };
  } else {
    throw new Error("Error");
  }
};

export { get, post };
