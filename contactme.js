const scriptURL = "https://script.google.com/macros/s/AKfycbwhuHfNQzMZFpXoWFlcEjsOTLTt1yJXNT8wbip08klSyxQ-BICwHMv3mpN246--18lWLg/exec";
const form = document.forms["haris-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit di klik
  //Selama belum sukses tampilkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // Tampilkan Alert
      Swal.fire("Terima Kasih!", "Pesan anda sudah kami terima", "success");
      // Reset formnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
