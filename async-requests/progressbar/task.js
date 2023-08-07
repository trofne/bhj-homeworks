const form = document.getElementById("form");
const uploadFileButton = document.getElementById("send");
const progressBar = document.getElementById("progress");

uploadFileButton.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const request = new XMLHttpRequest();
  const url = "https://students.netoservices.ru/nestjs-backend/auth";
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "multipart/form-data");
  request.onprogress = (pe) => {
    if (pe.lengthComputable) {
      progressBar.value = pe.loaded / pe.total;
    }
  };
  request.onloadend = (pe) => {
    progressBar.value = 1.0;
  };
  request.send(formData);
});
