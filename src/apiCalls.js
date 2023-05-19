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
  console.log(data);
  return data;
};

export const getUser = async (user) => {
  const res = await fetch(
    `http://localhost:5000/api/user/getUser/${user.userId}`
  );
  const data = await res.json();
  return data;
};
export const addPost = async (payload) => {
  let formData = new FormData();
  console.log("addPost", payload);
  formData.append("file", payload.pic);
  formData.append("flag", payload.flag);
  formData.append("description", payload.input);
  formData.append("id", payload.user.id);
  formData.append("userPicturePath", payload.user.picturePath);
  formData.append("occupation", payload.user.occupation);
  formData.append("location", payload.user.location);
  formData.append("lastName", payload.user.lastName);
  formData.append("firstName", payload.user.firstName);
  formData.append("email", payload.user.email);
  const res = await fetch("http://localhost:5000/api/post/addPost", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data;
};
export const getAllPosts = async (payload) => {
  const res = await fetch("http://localhost:5000/api/post/getAllPosts");
  const data = await res.json();
  return data;
};
export const getMyPost = async (payload) => {
  const res = await fetch("http://localhost:5000/api/post/getMyPost");
  const data = await res.json();
  return data;
};
