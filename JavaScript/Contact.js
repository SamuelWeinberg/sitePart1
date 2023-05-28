const form = document.querySelector("form");

const onSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => data[key]= value);
  console.log(data);

  // בדיקת השם הפרטי
  if (data["firstName"].length < 2) {
    alert ("יש למלא שם פרטי תקין");
    return;
  }

  // בדיקת השם המשפחה
  if (data.lastName.length < 2) {
    ("יש למלא שם משפחה תקין");
    return;
  }

  // בדיקת השם המלא
  if (!data.fullName.includes(" ")) {
    ("יש למלא שם מלא תקין");
    return;
  }

}

form.addEventListener("submit" ,onSubmit);