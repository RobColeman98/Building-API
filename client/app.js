$(document).ready(function () {
  $("body").append("<div></div>");
  const chirpContainer = $("#chirp-container");

  const loadTimeline = () => {
    $.get("/api/chirps", (data) => {
      delete data.nextid;
      let chirpArr = Object.values(data);
      console.log(chirpArr);
      chirpArr.forEach((chirp) => {
        // make cards for each one.
        let chirpDiv = `<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
        <h5 class="card-title">${chirp.name}</h5>
        <p class="card-text">${chirp.text}</p>
        <button data-id=${chirp.id} class="btn btn-outline-dark" id="delete-btn" onclick="removeChirp()">Delete</button>
        </div>
        </div>
        `;
        $("#chirp-container").append(chirpDiv);
      });
    });
  };
  loadTimeline();

  // let postChirp = () => {
  // };

  $("#chirp-button").click(() => {
    const nameInput = $("#name-input").val();
    const mssgInput = $("#mssg-input").val();
    let newChirp = { name: nameInput, text: mssgInput };

    $.ajax({
      type: "POST",
      url: "/api/chirps/",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(newChirp),
      success: () => {
        chirpContainer.empty();
        loadTimeline();
      },
    });

    // $.post("/api/chirps/").then(() => {});
  });
  // button that loads the chirps

  let removeChirp = () => {
    let chirpid = e.target.dataset.id;
    $.ajax({
      type: "DELETE",
      url: `http://localhost:3001/api/chirps/${data}`,
      success: function () {
        console.log("DELETED");
      },
    });
  };
});
