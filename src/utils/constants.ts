const NOTES_API =
  process.env.NODE_ENV === "production"
    ? "https://notes-api.adaptable.app"
    : "http://localhost:3000";

const alphabetRegex = /^[a-zA-Z ]*$/;
const minThreeCharactersRegex = /(.*[a-z]){3}/i;
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export {
  NOTES_API,
  alphabetRegex,
  minThreeCharactersRegex,
  emailRegex,
  passwordRegex,
};
