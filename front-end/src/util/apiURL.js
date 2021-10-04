export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://dry-savannah-93616.herokuapp.com";
};
