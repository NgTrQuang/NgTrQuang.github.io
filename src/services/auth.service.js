import axios from "axios";

const API_URL = "http://localhost:8089/api/auth/";

//nhận dữ liệu với 3 trường từ bàn phím
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};
//đăng nhập
const login = async (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => { {/** nếu accessToken tồn tại localStorage(lưu dữ liệu dưới dạng key value ở máy user) gán lưu dữ liệu cho user với chuỗi nhận vào*/}
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
// đăng xuất
const logout = () => {
  localStorage.removeItem("user");/** xóa dữ liệu localStorage */
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")); /**lấy dữ liệu ra khỏi localStorage (getItem()) */
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
