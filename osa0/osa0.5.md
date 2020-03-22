Fullstack osa0.5

Selain->Palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
Palvelin-->Selain: Sivun HTML-koodi
Selain->Palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
Palvelin-->Selain: Sivun main.css tiedosto
Selain->Palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
Palvelin-->Selain: Sivun spa.js tiedosto, joka sisältää sivun toiminnallisuuden.
note over Selain: Selain suorittaa .js tiedoston ja pyytää data.json tiedoston.
Selain->Palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
Palvelin-->Selain: Palvelin lähettää data.json tiedoston
note over Selain: Kaikki toiminnallisuus on ladattu sivulle.