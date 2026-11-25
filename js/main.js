import { setupSearch } from "./events.mjs";

const form = document.querySelector("#search-form");
const passage = document.querySelector("#passage");

setupSearch(form, passage);