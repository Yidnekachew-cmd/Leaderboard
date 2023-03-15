import scoreGet from "./getScore.js";
import messageDisplay from "./message.js";

const scoreAdd = async (scores, userValue, scoreValue, message) => {
  if (userValue === "" || scoreValue === "") {
    messageDisplay(
      message,
      "success",
      "error",
      "Please fill all the required fields!"
    );
  } else {
    const response = await fetch(
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MHRRHv4u0pTBZdqSXI6v/scores/",
      {
        method: "POST",
        body: JSON.stringify({
          user: userValue,
          score: scoreValue,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (response.ok) {
      scoreGet(scores);
    } else {
      messageDisplay(
        message,
        "error",
        "success",
        "Error, something is not right.."
      );
    }
    document.querySelector("#name").value = "";
    document.querySelector("#score").value = "";

    const json = await response.json();
    messageDisplay(message, "error", "success", json.result);
  }
};

export default scoreAdd;
