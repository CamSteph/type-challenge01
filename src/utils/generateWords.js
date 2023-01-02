
export const generateLetters = (mode) => {
  const subject = mode.subject;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '62d946ed66msh29ab779d3a8f6a4p144f59jsn6f4117186e43',
      'X-RapidAPI-Host': 'linguatools-sentence-generating.p.rapidapi.com'
    }
  };
  
  fetch(`https://linguatools-sentence-generating.p.rapidapi.com/realise?object=technology&subject=technology&verb=technology`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};