const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalBtn = document.getElementById("modal-btn");
const reverseBtn = document.getElementById("modal-choice-btns");


setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// form btn reverse when hover (mouseenter)
modalBtn.addEventListener('mouseenter',function(){
  reverseBtn.classList.toggle('reversebtn')  //classList gives all the classes access we created.toogle is action we want to perform.
});                                          //class name of Css in bracket we want to use



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
    modalCloseBtn.disabled = false;
  }, 3000);
});
