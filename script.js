let eventCount = 0;


/* =========================
   ADD EVENT
========================= */

function addEvent() {

    const title =
        document.getElementById("title").value.trim();

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const description =
        document.getElementById("description").value.trim();

    const gallery =
        document.getElementById("galleryImage");


    /* VALIDATION */

    if (title === "" || date === "" || time === "") {

        alert(
            "Please enter the event title, date and time."
        );

        return;
    }


    /* EVENT LIST */

    const eventList =
        document.getElementById("eventList");


    /* REMOVE EMPTY MESSAGE */

    const empty =
        eventList.querySelector(".empty");

    if (empty) {
        empty.remove();
    }


    /* CREATE EVENT CARD */

    const card =
        document.createElement("div");

    card.className = "event-card";


    /* EVENT TITLE */

    const heading =
        document.createElement("h3");

    heading.textContent =
        `🎉 ${title}`;


    /* EVENT DATE */

    const dateText =
        document.createElement("p");

    dateText.innerHTML =
        `📅 <b>Date:</b> `;

    dateText.appendChild(
        document.createTextNode(date)
    );


    /* EVENT TIME */

    const timeText =
        document.createElement("p");

    timeText.innerHTML =
        `⏰ <b>Time:</b> `;

    timeText.appendChild(
        document.createTextNode(time)
    );


    /* EVENT DESCRIPTION */

    const descriptionText =
        document.createElement("p");

    descriptionText.innerHTML =
        `📝 <b>Description:</b> `;

    descriptionText.appendChild(
        document.createTextNode(
            description || "No description provided."
        )
    );


    /* DELETE BUTTON */

    const deleteButton =
        document.createElement("button");

    deleteButton.className =
        "delete-btn";

    deleteButton.textContent =
        "🗑 Delete Event";

    deleteButton.onclick = function () {
        deleteEvent(deleteButton);
    };


    /* ADD CONTENT TO CARD */

    card.appendChild(heading);
    card.appendChild(dateText);
    card.appendChild(timeText);
    card.appendChild(descriptionText);


    /* IMAGE */

    if (gallery.files.length > 0) {

        const image =
            document.createElement("img");

        image.src =
            URL.createObjectURL(
                gallery.files[0]
            );

        image.alt =
            `Image for ${title}`;

        card.appendChild(image);
    }


    /* ADD DELETE BUTTON */

    card.appendChild(deleteButton);


    /* ADD CARD TO DASHBOARD */

    eventList.appendChild(card);


    /* UPDATE EVENT COUNT */

    eventCount++;

    document.getElementById(
        "eventCount"
    ).textContent = eventCount;


    /* CLEAR FORM */

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("description").value = "";
    document.getElementById("galleryImage").value = "";
}


/* =========================
   DELETE EVENT
========================= */

function deleteEvent(button) {

    const card =
        button.parentElement;

    card.remove();


    /* UPDATE COUNT */

    eventCount--;

    document.getElementById(
        "eventCount"
    ).textContent = eventCount;


    /* CHECK IF EVENTS ARE EMPTY */

    const eventList =
        document.getElementById("eventList");


    if (eventList.children.length === 0) {

        eventList.innerHTML = `
            <div class="empty">
                <h3>No Events Yet</h3>
                <p>Create your first event!</p>
            </div>
        `;
    }
}
