const scoreGet = async (scores) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MHRRHv4u0pTBZdqSXI6v/scores/',
  );
  const json = await response.json();
  scores.innerHTML = '';

  const sortScores = json.result.sort((a, b) => b.score - a.score);
  sortScores.forEach((element) => {
    if (json.result.length > 0) {
      const trophy = sortScores.indexOf(element) < 3 ? '🏆' : '';
      const number = sortScores.indexOf(element) + 1;
      scores.innerHTML += `<li class="list-container">
      <div class="name-icon"> <div>#${number}</div> <i class="fas fa-user"></i> <div>${element.user}</div> </div> <div>${element.score} ${trophy}</div></li><hr/>`;
    } else {
      scores.innerHTML = 'No Score are available!!';
    }
  });
};

export default scoreGet;
