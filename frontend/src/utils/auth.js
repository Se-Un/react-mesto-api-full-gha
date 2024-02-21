// URL адрес
//export const BASE_URL = 'https://auth.nomoreparties.co';
export const BASE_URL = 'http://localhost:3000';
//export const BASE_URL = 'https://api.mestoks.nomoredomainsmonster.ru';
// функция для проверки передачи данных с сервера
export function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password}),
  })
  .then(checkRes);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password}),
  })
  .then(checkRes)
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then(checkRes);
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json", 
    }
  })
  .then(checkRes);
}
