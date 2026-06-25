// JavaScript source code
console.log("JS loaded for Vacancies page");

function openForm() {
    document.getElementById("ApplyForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("ApplyForm").style.display = "none";
}

function submitApplication() {
    alert("Application submitted");
    document.getElementById("Applyform").reset();
    closeForm();
    return false;

}