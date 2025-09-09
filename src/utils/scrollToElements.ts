export function scrollToElementById(id: string, options?: ScrollIntoViewOptions) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options
    });
  } else {
    console.warn(`Element with id "${id}" not found.`);
  }
}