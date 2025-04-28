export const fetchFile = (fileName) => {
  const fileUrl = `${process.env.PUBLIC_URL}/${fileName}`;

  fetch(fileUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob(); // Pobieramy plik jako blob
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName; // Ustawiamy nazwę pliku przy pobieraniu
      a.click(); // Symulujemy kliknięcie, żeby rozpocząć pobieranie
      URL.revokeObjectURL(url); // Zwolnienie URL po użyciu
    })
    .catch((error) => {
      console.error("There was a problem with fetching the file:", error);
    });
};
