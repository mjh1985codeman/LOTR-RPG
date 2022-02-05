async function newFormHandler(event) {
  event.preventDefault();

  const char_name = document.querySelector('input[name="charName"]').value;
  const char_type = document.querySelector('select[name="char-type"]').value;

  const response = await fetch("/api/character", {
    method: "POST",
    body: JSON.stringify({
      char_name,
      char_type,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/game");
  } else {
    alert("Character Names Must be unique!");
  }
}
async function anotherFormHandler(event) {
  event.preventDefault();

  const char_name = document.querySelector(
    'select[name="existing-char"]'
  ).value;
  const char_type = document.querySelector(
    'select[name="existing-char"]'
  ).value;

  const response = await fetch("/api/character", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/game");
  } else {
    alert("Uh Oh Something went wrong");
  }
}

document
  .querySelector(".create-char-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".exist-char-form")
  .addEventListener("submit", anotherFormHandler);
