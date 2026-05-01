const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(consentForm);
//   name from formData Object
  const name = formData.get('fullName'); //fullName is object of name used in input tag in HTML


  modalText.innerHTML = `<div class="modal-inner-loading">
                            <img src="images/loading.svg" class="loading">
                            <p id="uploadText">
                                Uploading your data to the dark web...
                            </p>
                        </div>`;

  setTimeout(() => {
    document.getElementById("uploadText").textContent = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML =
                                        `  <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
                                            <p>We just sold the rights to your eternal soul.</p>
                                                <div class="idiot-gif">
                                                    <img src="images/pirate.webp">
                                                </div> `;
  }, 3000);
});
