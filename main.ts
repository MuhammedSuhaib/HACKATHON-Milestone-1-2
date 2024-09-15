function toggleDarkMode():void {
    document.body.classList.toggle("dark");
    const button = document.querySelector("button") as HTMLButtonElement | null;;
    if (button) {
      button.textContent = document.body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
  }
}


  