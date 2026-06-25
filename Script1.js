// JavaScript source code
console.log("JS Loaded for homepage.");

function handleSearch(event) {
    event.preventDefault();

    const input = document.getElementById("searchinput").value.toLowerCase();

    if (input.includes("beans")) {
        document.querySelector(".page-content").scrollIntoView();
    }
    else if (input.includes("contact")) {
        document.querySelector(".contact-content").scrollIntoView();
    }
    else if (input.includes("about")) {
        document.querySelector(".intro-box").scrollIntoView();
    }
    else if (input.includes("vacancies")) {
        window.location.href = "HotBeansVacancies.html";
    }
    else {
        alert("no results found");
    }
}

function GoToServices() {
    window.location.href = "HTMLPage4.html";
}

function GoToVacancies() {
    window.location.href = "HotBeansVacancies.html";
}

function GoToFeedback() {
    window.location.href="HTMLPage5.html"
}

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