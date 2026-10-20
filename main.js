const copyButton = document.querySelector("#copy-bibtex");
const bibtex = document.querySelector("#bibtex");

if (copyButton && bibtex) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibtex.textContent.trim());
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = "Copy BibTeX";
      }, 1600);
    } catch (error) {
      copyButton.textContent = "Select and copy above";
    }
  });
}
