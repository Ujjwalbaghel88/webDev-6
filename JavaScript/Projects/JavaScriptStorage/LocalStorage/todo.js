function addNewTask() {
  // Input field se user ka likha hua task le raha hai
  const taskToAdd = document.getElementById("newTask").value;

  const LI = document.createElement("li");

  // Bootstrap class add kar raha hai margin ke liye
  LI.classList.add("my-3");

  // Naya <div> create kar raha hai
  const DIV = document.createElement("div");

  // Div ko flex bana raha hai aur items center me la raha hai
  DIV.classList.add("d-flex", "align-items-center");

  // Task text dikhane ke liye span create kar raha hai
  const SPAN1 = document.createElement("span");

  // User ka task span ke andar daal raha hai
  SPAN1.innerText = taskToAdd;

  // Delete button create kar raha hai
  const BUTTON = document.createElement("button");

  // Button me bootstrap classes add kar raha hai
  BUTTON.classList.add(
    "btn",
    "btn-danger",
    "ms-4",
    "d-flex",
    "gap-3",
    "align-items-center",
    "justify-content-center",
  );

  // Delete button click hone par ye function chalega
  BUTTON.onclick = () => {
    // Task ko screen se remove kar raha hai
    LI.remove();

    // Task ko local storage se bhi remove kar raha hai
    removeTaskFromLocalStorage(taskToAdd);
  };

  // Trash icon create kar raha hai
  const I = document.createElement("i");

  // Bootstrap icon classes add kar raha hai
  I.classList.add("bi", "bi-trash");

  // Delete text ke liye span create kar raha hai
  const SPAN2 = document.createElement("span");

  // Span ke andar Delete text daal raha hai
  SPAN2.innerText = "Delete";

  // Icon ko button ke andar daal raha hai
  BUTTON.appendChild(I);

  // Delete text ko button ke andar daal raha hai
  BUTTON.appendChild(SPAN2);

  // Task text wale span ko div ke andar daal raha hai
  DIV.appendChild(SPAN1);

  // Button ko div ke andar daal raha hai
  DIV.appendChild(BUTTON);

  // Div ko LI ke andar daal raha hai
  LI.appendChild(DIV);

  // Task container se d-none class hata raha hai
  // taki task section visible ho jaye
  document.getElementById("taskDiv").classList.remove("d-none");

  // Final LI ko OL list ke andar add kar raha hai
  document.getElementById("taskList").appendChild(LI);

  // Task ko local storage me save kar raha hai
  saveToLocalStorage(taskToAdd);

  // Input field ko empty kar raha hai
  document.getElementById("newTask").value = "";
}

function saveToLocalStorage(taskToAdd) {
  // Local storage se purana array la raha hai
  // Agar kuch nahi mila to empty array bana raha hai
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  // Naya task array me add kar raha hai
  TaskArray.push(taskToAdd);

  // Array ko string me convert kar raha hai
  // Kyuki localStorage sirf string store karta hai
  const newTaskArray = JSON.stringify(TaskArray);

  // String ko local storage me save kar raha hai
  localStorage.setItem("toDoTask", newTaskArray);
}

function getTaskFromLocalStorage() {
  // Local storage se saved tasks la raha hai
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  console.log(TaskArray);

  // Har ek task par loop chala raha hai
  TaskArray.forEach((element) => {
    // Naya LI create kar raha hai
    const LI = document.createElement("li");

    // Margin class add kar raha hai
    LI.classList.add("my-3");

    // Div create kar raha hai
    const DIV = document.createElement("div");

    // Div ko flex bana raha hai
    DIV.classList.add("d-flex", "align-items-center");

    // Span create kar raha hai task text ke liye
    const SPAN1 = document.createElement("span");

    // Saved task ko span me dikha raha hai
    SPAN1.innerText = element;

    // Delete button create kar raha hai
    const BUTTON = document.createElement("button");

    BUTTON.classList.add(
      "btn",
      "btn-danger",
      "ms-4",
      "d-flex",
      "gap-3",
      "align-items-center",
      "justify-content-center",
    );

    // Delete button click hone par
    BUTTON.onclick = () => {
      // Task ko screen se hata raha hai
      LI.remove();

      // Task ko local storage se remove kar raha hai
      removeTaskFromLocalStorage(element);
    };

    // Trash icon create kar raha hai
    const I = document.createElement("i");

    // Bootstrap icon classes add kar raha hai
    I.classList.add("bi", "bi-trash");

    // Delete text span create kar raha hai
    const SPAN2 = document.createElement("span");

    // Span me Delete text daal raha hai
    SPAN2.innerText = "Delete";

    // Icon button me add kar raha hai
    BUTTON.appendChild(I);

    // Delete text button me add kar raha hai
    BUTTON.appendChild(SPAN2);

    // Task span div me add kar raha hai
    DIV.appendChild(SPAN1);

    // Button div me add kar raha hai
    DIV.appendChild(BUTTON);

    // Div LI me add kar raha hai
    LI.appendChild(DIV);

    // Task section ko visible kar raha hai
    document.getElementById("taskDiv").classList.remove("d-none");

    // Final task ko list me add kar raha hai
    document.getElementById("taskList").appendChild(LI);
  });
}

// Page load hote hi saved tasks show karne ke liye
getTaskFromLocalStorage();

function addNewTask() {
  // Input field se user ka likha hua task le raha hai
  const taskToAdd = document.getElementById("newTask").value;

  // Naya <li> create kar raha hai
  const LI = document.createElement("li");

  // Bootstrap class add kar raha hai margin ke liye
  LI.classList.add("my-3");

  // Naya <div> create kar raha hai
  const DIV = document.createElement("div");

  // Div ko flex bana raha hai aur items center me la raha hai
  DIV.classList.add("d-flex", "align-items-center");

  // Task text dikhane ke liye span create kar raha hai
  const SPAN1 = document.createElement("span");

  // User ka task span ke andar daal raha hai
  SPAN1.innerText = taskToAdd;

  // Delete button create kar raha hai
  const BUTTON = document.createElement("button");

  // Button me bootstrap classes add kar raha hai
  BUTTON.classList.add(
    "btn",
    "btn-danger",
    "ms-4",
    "d-flex",
    "gap-3",
    "align-items-center",
    "justify-content-center",
  );

  // Delete button click hone par ye function chalega
  BUTTON.onclick = () => {
    // Task ko screen se remove kar raha hai
    LI.remove();

    // Task ko local storage se bhi remove kar raha hai
    removeTaskFromLocalStorage(taskToAdd);
  };

  // Trash icon create kar raha hai
  const I = document.createElement("i");

  // Bootstrap icon classes add kar raha hai
  I.classList.add("bi", "bi-trash");

  // Delete text ke liye span create kar raha hai
  const SPAN2 = document.createElement("span");

  // Span ke andar Delete text daal raha hai
  SPAN2.innerText = "Delete";

  // Icon ko button ke andar daal raha hai
  BUTTON.appendChild(I);

  // Delete text ko button ke andar daal raha hai
  BUTTON.appendChild(SPAN2);

  // Task text wale span ko div ke andar daal raha hai
  DIV.appendChild(SPAN1);

  // Button ko div ke andar daal raha hai
  DIV.appendChild(BUTTON);

  // Div ko LI ke andar daal raha hai
  LI.appendChild(DIV);

  // Task container se d-none class hata raha hai
  // taki task section visible ho jaye
  document.getElementById("taskDiv").classList.remove("d-none");

  // Final LI ko OL list ke andar add kar raha hai
  document.getElementById("taskList").appendChild(LI);

  // Task ko local storage me save kar raha hai
  saveToLocalStorage(taskToAdd);

  // Input field ko empty kar raha hai
  document.getElementById("newTask").value = "";
}

function saveToLocalStorage(taskToAdd) {
  // Local storage se purana array la raha hai
  // Agar kuch nahi mila to empty array bana raha hai
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  // Naya task array me add kar raha hai
  TaskArray.push(taskToAdd);

  // Array ko string me convert kar raha hai
  // Kyuki localStorage sirf string store karta hai
  const newTaskArray = JSON.stringify(TaskArray);

  // String ko local storage me save kar raha hai
  localStorage.setItem("toDoTask", newTaskArray);
}

function getTaskFromLocalStorage() {
  // Local storage se saved tasks la raha hai
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  console.log(TaskArray);

  // Har ek task par loop chala raha hai
  TaskArray.forEach((element) => {
    // Naya LI create kar raha hai
    const LI = document.createElement("li");

    // Margin class add kar raha hai
    LI.classList.add("my-3");

    // Div create kar raha hai
    const DIV = document.createElement("div");

    // Div ko flex bana raha hai
    DIV.classList.add("d-flex", "align-items-center");

    // Span create kar raha hai task text ke liye
    const SPAN1 = document.createElement("span");

    // Saved task ko span me dikha raha hai
    SPAN1.innerText = element;

    // Delete button create kar raha hai
    const BUTTON = document.createElement("button");

    // Bootstrap classes add kar raha hai
    BUTTON.classList.add(
      "btn",
      "btn-danger",
      "ms-4",
      "d-flex",
      "gap-3",
      "align-items-center",
      "justify-content-center",
    );

    // Delete button click hone par
    BUTTON.onclick = () => {
      // Task ko screen se hata raha hai
      LI.remove();

      // Task ko local storage se remove kar raha hai
      removeTaskFromLocalStorage(element);
    };

    // Trash icon create kar raha hai
    const I = document.createElement("i");

    // Bootstrap icon classes add kar raha hai
    I.classList.add("bi", "bi-trash");

    // Delete text span create kar raha hai
    const SPAN2 = document.createElement("span");

    // Span me Delete text daal raha hai
    SPAN2.innerText = "Delete";

    // Icon button me add kar raha hai
    BUTTON.appendChild(I);

    // Delete text button me add kar raha hai
    BUTTON.appendChild(SPAN2);

    // Task span div me add kar raha hai
    DIV.appendChild(SPAN1);

    // Button div me add kar raha hai
    DIV.appendChild(BUTTON);

    // Div LI me add kar raha hai
    LI.appendChild(DIV);

    // Task section ko visible kar raha hai
    document.getElementById("taskDiv").classList.remove("d-none");

    // Final task ko list me add kar raha hai
    document.getElementById("taskList").appendChild(LI);
  });
}

// Page load hote hi saved tasks show karne ke liye
getTaskFromLocalStorage();

function removeTaskFromLocalStorage(taskItem) {
  console.log(taskItem);

  // Local storage se pura array la raha hai
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask"));

  console.log(TaskArray);

  // Filter method use karke matching task hata raha hai
  const newTaskArray = TaskArray.filter((item) => item !== taskItem);

  console.log(newTaskArray);

  // Updated array ko string me convert kar raha hai
  const newTaskString = JSON.stringify(newTaskArray);

  // Updated string ko local storage me save kar raha hai
  localStorage.setItem("toDoTask", newTaskString);
}
