import { getPassage } from "./api.mjs";
import { renderLoading, renderError, renderPassage } from "./ui.mjs";

export function setupSearch(form, container) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const reference = form.reference.value.trim();
    const translation = form.translation.value;

    renderLoading(container);

    try {
      const data = await getPassage(reference, translation);
      renderPassage(container, data);
    } catch (error) {
      renderError(container, error.message);
    }
  });
}