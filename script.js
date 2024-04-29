let reportedError = []

function majorValiation (e) {
    e.preventDefault();
    const username = document.querySelector(".username")
    const userMail = document.querySelector(".user-mail")
    const userDate = document.querySelector(".user-date")
    checkName = /^[a-z]{2,}\s[a-z]{2,}$/ig.test(username.value)
    checkMail = /^[\w|.|-|_]{2,}\@\w{2,}\.[\w]{2,}$/ig.test(userMail.value)
    checkDate = /^\d{4}\/\d{1,2}\/\d{1,2}$/ig.test(userDate.value)
    if (checkName == false) {
        reportedError.push("Please enter a valid username")
    }
    if (checkMail == false) {
        reportedError.push("Please enter a valid email")
    }
    if (checkDate == false) {
        reportedError.push("Please enter a valid date")
    }
    if (checkName === false || checkMail === false || checkDate === false) {
    Swal.fire({
        icon: "error",
        title: reportedError.join("\n"),
      });
    reportedError = []
    }
    else {
        Swal.fire({
            icon: "success",
            title: "All your Input is Correct",
          });
    }
}
const validationBtn = document.querySelector(".validate").addEventListener("click", majorValiation)
