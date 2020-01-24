//console.log("test"); //salvestae ära ja vaatame browseris Console all kas töötab, siis on ühendautd


//listen to the click event on the get-jokes button
 //select the button, add the event  listener

document.querySelector('.get-jokes').addEventListener('click', getJokes); //ootame kliki, et funktsioon getJokes panna tööle, funktsioon call back ootab vastupidi klikimist. 
function getJokes(event){ //eventi asemel tavaliselt kirjutatakse e, see tähendabki event
    //console.log("button clicked");
    const userNumber = document.querySelector('input[type="number"]').value;
    //console.log(userNumber); kui lisame console.log(typeof(userNumber)); siis näeme, et väljastab tegelt string tüüpi andmed mida oelks vaja konverteerida
    //add proxy enne url et läbi proxy kutsume
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    //GET request
    fetch(`${proxyUrl}http://api.icndb.com/jokes/random/${userNumber}`)
    .then(function(response){ //paneme selle koodi käima kui response saame kätte
        console.log(response);
        return response.json();
    })
    .then(function(data){

      let output =''; //tühi muutuja sest pole veel midagi sees, pärast lisame andmetes sinna listi alla
      console.log(data.value);
    //foreach  ehk for each joke in data.value array
      data.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`; //igakord kui salvestab siis siia li sisse lisab seda
          console.log(joke.joke);
      });

      

      document.querySelector('.jokes').innerHTML = output; //saime joke kätte url-st ja siis salvestasime li ja siis listi

    });
     

    event.preventDefault(); //kui tegu on nuppuga, siis alguses kirjutame selle eventi kuna saame lahti selelst, et kaob ära console "button clicked"

}

