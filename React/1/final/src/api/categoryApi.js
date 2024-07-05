import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/categories/";

export function getCategories() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
