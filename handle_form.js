
const scriptURL = "https://script.google.com/macros/s/AKfycbyGCNWIPsPKRSRGCvzmwrtDV_sgshaEVpO1cBzzTe2zZ-r668XHqnr8Mv6Df00wS085/exec"



document.getElementById("myForm").addEventListener("submit", async function (e) {

  e.preventDefault();
  const frm = e.target;

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {

    const submitBtn = frm.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    let res = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    });
    let text = await res.text();
    showNotification("Data submitted successfully!");
    document.getElementById("myForm").reset();
  } catch (error) {
    showNotification("Error: " + error.message, true);
    console.error(error);
  } finally {
    const submitBtn = frm.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.disabled = false;
  }
})

function showNotification(message, isError = false) {
  notification.textContent = message;
  notification.style.background = isError ? "#e74c3c" : "#4caf50";
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000); // disappears after 2 seconds
}