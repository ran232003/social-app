export const login = async (payload) => {
  const res = await fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};
export const signup = async (payload) => {
  console.log(payload, "signup");
  let formData = new FormData();
  formData.append("file", payload.picture);
  formData.append("password", payload.password);
  formData.append("occupation", payload.occupation);
  formData.append("location", payload.location);
  formData.append("lastName", payload.lastName);
  formData.append("firstName", payload.firstName);
  formData.append("email", payload.email);
  const res = await fetch("http://localhost:5000/api/user/signup", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data;
};

export const getUser = async () => {
  const res = await fetch("http://localhost:5000/api/user/getUser");
  const data = await res.json();
  return data;
};
