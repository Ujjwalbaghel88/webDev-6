
// FORM

const form =
  document.getElementById("registrationFrom");

// SUBMIT EVENT

form.addEventListener("submit", (event) => {

  event.preventDefault();

  let isValid = true;


  // INPUTS


  const fullName =
    document.getElementById("fullName");

  const email =
    document.getElementById("email");

  const phone =
    document.getElementById("phone");

  const dob =
    document.getElementById("dob");

  const qualification =
    document.getElementById("qualification");

  const marks =
    document.getElementById("marks");

  const course =
    document.getElementById("course");

  const address =
    document.getElementById("address");

  const city =
    document.getElementById("city");

  const pin =
    document.getElementById("pin");

  const guardianName =
    document.getElementById("guardianName");

  const guardianPhone =
    document.getElementById("guardianPhone");

  const reference =
    document.getElementById("reference");


  // ERROR ELEMENTS


  const fullNameError =
    document.getElementById("fullNameError");

  const emailError =
    document.getElementById("emailError");

  const phoneError =
    document.getElementById("phoneError");

  const dobError =
    document.getElementById("dobError");

  const genderError =
    document.getElementById("genderError");

  const qualificationError =
    document.getElementById("qualificationError");

  const marksError =
    document.getElementById("marksError");

  const courseError =
    document.getElementById("courseError");

  const timingError =
    document.getElementById("timingError");

  const addressError =
    document.getElementById("addressError");

  const cityError =
    document.getElementById("cityError");

  const pinError =
    document.getElementById("pinError");

  const guardianNameError =
    document.getElementById("guardianNameError");

  const guardianPhoneError =
    document.getElementById("guardianPhoneError");

  const referenceError =
    document.getElementById("referenceError");


  // CLEAR OLD ERRORS


  clearErrors();


  // REMOVE OLD CLASSES


  removeValidationClasses();


  // PATTERNS


  const namePattern =
    /^[A-Za-z ]+$/;

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phonePattern =
    /^[6-9][0-9]{9}$/;

  const cityPattern =
    /^[A-Za-z ]+$/;

  const pinPattern =
    /^[0-9]{6}$/;

  const marksPattern =
    /^(100|[0-9]{1,2}(\.[0-9]+)?|[A-Fa-f])$/;

  // FULL NAME


  if (
    fullName.value.trim() === ""
  ) {

    setError(
      fullName,
      fullNameError,
      "Full Name is required"
    );

    isValid = false;

  }
  else if (
    !namePattern.test(
      fullName.value.trim()
    )
  ) {

    setError(
      fullName,
      fullNameError,
      "Only alphabets and spaces allowed"
    );

    isValid = false;

  }
  else {

    setSuccess(fullName);

  }


  // EMAIL


  if (
    email.value.trim() === ""
  ) {

    setError(
      email,
      emailError,
      "Email is required"
    );

    isValid = false;

  }
  else if (
    !emailPattern.test(
      email.value.trim()
    )
  ) {

    setError(
      email,
      emailError,
      "Enter valid email address"
    );

    isValid = false;

  }
  else {

    setSuccess(email);

  }


  // PHONE


  if (
    phone.value.trim() === ""
  ) {

    setError(
      phone,
      phoneError,
      "Mobile Number is required"
    );

    isValid = false;

  }
  else if (
    !phonePattern.test(
      phone.value.trim()
    )
  ) {

    setError(
      phone,
      phoneError,
      "Enter valid Indian mobile number"
    );

    isValid = false;

  }
  else {

    setSuccess(phone);

  }


  // DOB


  if (
    dob.value === ""
  ) {

    setError(
      dob,
      dobError,
      "Date Of Birth is required"
    );

    isValid = false;

  }
  else {

    const dobValue =
      new Date(dob.value);

    const today =
      new Date();

    let age =
      today.getFullYear() -
      dobValue.getFullYear();

    const monthDifference =
      today.getMonth() -
      dobValue.getMonth();

    if (
      monthDifference < 0 ||
      (
        monthDifference === 0 &&
        today.getDate() <
        dobValue.getDate()
      )
    ) {

      age--;

    }

    if (
      age < 15
    ) {

      setError(
        dob,
        dobError,
        "Minimum age should be 15"
      );

      isValid = false;

    }
    else {

      setSuccess(dob);

    }

  }


  // GENDER


  const gender =
    document.querySelector(
      "input[name='gender']:checked"
    );

  if (
    !gender
  ) {

    genderError.innerText =
      "Select gender";

    isValid = false;

  }


  // QUALIFICATION


  if (
    qualification.value === ""
  ) {

    setError(
      qualification,
      qualificationError,
      "Select qualification"
    );

    isValid = false;

  }
  else {

    setSuccess(qualification);

  }


  // MARKS


  if (
    marks.value.trim() === ""
  ) {

    setError(
      marks,
      marksError,
      "Enter percentage or grade"
    );

    isValid = false;

  }
  else if (
    !marksPattern.test(
      marks.value.trim()
    )
  ) {

    setError(
      marks,
      marksError,
      "Enter valid percentage or grade"
    );

    isValid = false;

  }
  else {

    setSuccess(marks);

  }


  // COURSE


  if (
    course.value === ""
  ) {

    setError(
      course,
      courseError,
      "Select preferred course"
    );

    isValid = false;

  }
  else {

    setSuccess(course);

  }


  // TIMING


  const timing =
    document.querySelector(
      "input[name='timing']:checked"
    );

  if (
    !timing
  ) {

    timingError.innerText =
      "Select batch timing";

    isValid = false;

  }


  // ADDRESS


  if (
    address.value.trim() === ""
  ) {

    setError(
      address,
      addressError,
      "Address is required"
    );

    isValid = false;

  }
  else {

    setSuccess(address);

  }


  // CITY


  if (
    city.value.trim() === ""
  ) {

    setError(
      city,
      cityError,
      "City is required"
    );

    isValid = false;

  }
  else if (
    !cityPattern.test(
      city.value.trim()
    )
  ) {

    setError(
      city,
      cityError,
      "Only alphabets allowed"
    );

    isValid = false;

  }
  else {

    setSuccess(city);

  }


  // PIN CODE


  if (
    pin.value.trim() === ""
  ) {

    setError(
      pin,
      pinError,
      "Pin Code is required"
    );

    isValid = false;

  }
  else if (
    !pinPattern.test(
      pin.value.trim()
    )
  ) {

    setError(
      pin,
      pinError,
      "Enter valid 6 digit pin code"
    );

    isValid = false;

  }
  else {

    setSuccess(pin);

  }


  // GUARDIAN NAME


  if (
    guardianName.value.trim() === ""
  ) {

    setError(
      guardianName,
      guardianNameError,
      "Guardian Name is required"
    );

    isValid = false;

  }
  else if (
    !namePattern.test(
      guardianName.value.trim()
    )
  ) {

    setError(
      guardianName,
      guardianNameError,
      "Only alphabets allowed"
    );

    isValid = false;

  }
  else {

    setSuccess(guardianName);

  }


  // GUARDIAN PHONE


  if (
    guardianPhone.value.trim() === ""
  ) {

    setError(
      guardianPhone,
      guardianPhoneError,
      "Guardian Contact Number is required"
    );

    isValid = false;

  }
  else if (
    !phonePattern.test(
      guardianPhone.value.trim()
    )
  ) {

    setError(
      guardianPhone,
      guardianPhoneError,
      "Enter valid Indian mobile number"
    );

    isValid = false;

  }
  else {

    setSuccess(guardianPhone);

  }


  // REFERENCE


  if (
    reference.value === ""
  ) {

    setError(
      reference,
      referenceError,
      "Select one option"
    );

    isValid = false;

  }
  else {

    setSuccess(reference);

  }


  // FINAL SUBMIT


  if (
    isValid
  ) {

    alert(
      "Registration Successful 🚀"
    );

    console.log({

      fullName:
        fullName.value,

      email:
        email.value,

      phone:
        phone.value,

      dob:
        dob.value,

      gender:
        gender.value,

      qualification:
        qualification.value,

      marks:
        marks.value,

      course:
        course.value,

      timing:
        timing.value,

      address:
        address.value,

      city:
        city.value,

      pin:
        pin.value,

      guardianName:
        guardianName.value,

      guardianPhone:
        guardianPhone.value,

      reference:
        reference.value,

    });

    form.reset();

    removeValidationClasses();

  }

});

// ERROR FUNCTION

function setError(
  input,
  errorElement,
  message
) {

  input.classList.add(
    "invalid"
  );

  errorElement.innerText =
    message;

}

// SUCCESS FUNCTION

function setSuccess(
  input
) {

  input.classList.add(
    "valid"
  );

}

// CLEAR ERRORS

function clearErrors() {

  document
    .querySelectorAll(
      ".text-danger"
    )
    .forEach((item) => {

      item.innerText = "";

    });

}

// REMOVE CLASSES

function removeValidationClasses() {

  document
    .querySelectorAll(
      ".form-control, .form-select"
    )
    .forEach((item) => {

      item.classList.remove(
        "valid"
      );

      item.classList.remove(
        "invalid"
      );

    });

}