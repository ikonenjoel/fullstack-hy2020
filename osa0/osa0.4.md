title Fullstack osa0.4

Selain->Palvelin: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
note over Palvelin: Selain lähettää POST metodilla datan palvelimelle.
Selain->Palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
note over Selain: Selain pyytää sivun uudestaan.
Palvelin-->Selain: HTML-koodi
Selain->Palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
Palvelin-->Selain: main.css
Selain->Palvelin: https://fullstack-exampleapp.herokuapp.com/main.js
Palvelin-->Selain: main.js
note over Selain: suorittaa js-koodia joka pyytää JSON-dataa palvelimelta
Selain->Palvelin: https://fullstack-exampleapp.herokuapp.com/data.json
Palvelin-->Selain: JSON-data
note over Selain: Selain suorittaa tapahtumakäsittelijän joka renderöi muistiinpanot näytölle.