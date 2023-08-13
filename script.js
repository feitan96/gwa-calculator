document.getElementById("generateBoxes").addEventListener("click", function() {
    const subjectCount = parseInt(document.getElementById("subjectCount").value);
    const subjectBoxes = document.getElementById("subjectBoxes");

    subjectBoxes.innerHTML = "";

    for (let i = 1; i <= subjectCount; i++) {
        const box = document.createElement("div");
        box.className = "subject-box";
        box.innerHTML = `
            <h3>Subject ${i}</h3>
            <label for="grade${i}">Grade:</label>
            <input type="number" id="grade${i}" class="subject-grade">
            <label for="units${i}">Units:</label>
            <input type="number" id="units${i}" class="subject-units">
        `;
        subjectBoxes.appendChild(box);
    }
});

document.getElementById("calculateGWA").addEventListener("click", function() {
    const subjectBoxes = document.getElementsByClassName("subject-box");
    let totalWeightedPoints = 0;
    let totalUnits = 0;

    for (const box of subjectBoxes) {
        const units = parseFloat(box.querySelector(".subject-units").value);
        const grade = parseFloat(box.querySelector(".subject-grade").value);

        if (!isNaN(units) && !isNaN(grade)) {
            totalWeightedPoints += units * grade;
            totalUnits += units;
        }
    }

    if (totalUnits > 0) {
        const gwa = totalWeightedPoints / totalUnits;
        document.getElementById("result").textContent = `Your GWA is: ${gwa.toFixed(2)}`;
    } else {
        document.getElementById("result").textContent = "Enter valid units and grades.";
    }
    if (totalUnits > 0) {
        const gwa = totalWeightedPoints / totalUnits;
        document.getElementById("result").textContent = `Your GWA is: ${gwa.toFixed(2)}`;

        let message = "";
        let backgroundColor = "";

        if (gwa >= 4.8) {
            message = "Gero kayka ha!";
            backgroundColor = "#73ad21";
        } else if (gwa >= 4.6) {
            message = "Congrats ikaw na!";
            backgroundColor = "#98c34d";
        } else if (gwa >= 4.4) {
            message = "Meh, mediocre!";
            backgroundColor = "#c3d077";
        } else if (gwa >= 4.0) {
            message = "Hapit ka ma Achiever!";
            backgroundColor = "#f0e68c";
        } else if (gwa >= 3.0) {
            message = "I'm dissapointed pero atleast dika hagbong!";
            backgroundColor = "#ffc04c";
        } else {
            message = "Bogoa sa boang!";
            backgroundColor = "#ff5733";
        }

        document.getElementById("result").style.backgroundColor = backgroundColor;
        document.getElementById("result").textContent += ` ${message}`;
    } else {
        document.getElementById("result").textContent = "Enter valid units and grades.";
        document.getElementById("result").style.backgroundColor = "#f2f2f2";
    }
});
