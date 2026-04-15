
const likeBtn = document.getElementById("likeBtn");

likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("fa-regular");
  likeBtn.classList.toggle("fa-solid");
  likeBtn.style.color = likeBtn.classList.contains("fa-solid") ? "red" : "black";
});


const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  saveBtn.classList.toggle("fa-regular");
  saveBtn.classList.toggle("fa-solid");
});


document.getElementById("commentBtn").addEventListener("click", () => {
  alert("Abrir comentarios");
});


document.getElementById("shareBtn").addEventListener("click", () => {
  alert("Compartir post");
});

const commentBtn = document.getElementById("commentBtn");
const commentsSection = document.getElementById("commentsSection");
const addCommentBtn = document.getElementById("addCommentBtn");
const commentInput = document.getElementById("commentInput");
const commentsList = document.getElementById("commentsList");


commentBtn.addEventListener("click", () => {
  commentsSection.classList.toggle("hidden");
});


addCommentBtn.addEventListener("click", () => {
  const text = commentInput.value.trim();

  if (text !== "") {
    const newComment = document.createElement("p");
    newComment.textContent = text;

    commentsList.appendChild(newComment);
    commentInput.value = "";
  }
});