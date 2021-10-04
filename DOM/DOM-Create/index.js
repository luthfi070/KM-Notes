console.log("hello world");

function writeComment() {
  document.getElementById("comment-form-section").removeAttribute("class");
}

function submitComment() {
  event.preventDefault();
  let username = document.getElementById("input-username").value;
  //   let comment = document.getElementById("input-commment").value;

  console.log(document.getElementById("input-username").value);
  console.log(document.getElementById("input-commment").value);
}

document
  .getElementById("btn-submit")
  .addEventListener("click", () => submitComment(event));
document
  .getElementById("btn-comment")
  .addEventListener("click", () => writeComment());
inde;
