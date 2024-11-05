import "./styles.css";

const myJson = [
  {
    Car: [
      {
        Color: "Roosi roosa",
        "Tinted Windows": true,
        Wheels: 4,
        "Roof cargo": null,
        Entertainment: {
          Radio: "FM Radio",
          Media: "MP3, MP4 and MKV player",
          "Sound system": "harman/kardon speakers",
        },
        Accessories: ["satnav", "cruise control"],
      },
      {
        Color: "Meresinine",
        "Tinted Windows": true,
        Wheels: 9,
        "Roof cargo": "Thule",
        Entertainment: {
          Radio: "FM Radio",
          Media: "Apple CarPlay/Android Auto",
          "Sound system": "Bowers and Wilkins",
        },
        Accessories: ["self-drive system", "pakiruumi kaan"],
      },
    ],
  },
];

document.getElementById("app").innerHTML = `
<div id="json">
<h1>Car properties</h1>
<p>Color: ${myJson[0].Car[0].Color}</p>
<p>Tinted windows: ${myJson[0].Car[0]["Tinted Windows"]}</p>
<p>Wheels : ${myJson[0].Car[0]["Wheels"]}</p>
<p>Roof cargo : ${myJson[0].Car[0]["Roof cargo"]}</p>
<p>Entertainment : 
<ul>
<li>${myJson[0].Car[0].Entertainment.Radio}</li>
<li>${myJson[0].Car[0].Entertainment.Media}</li>
<li>${myJson[0].Car[0].Entertainment["Sound system"]}}</li></ul>
<p><Accessories : ${myJson[0].Car["Accessories"]}</p>

<h1>Car properties 2</h1>
<p>Color: ${myJson[0].Car[1].Color}</p>
<p>Tinted windows: ${myJson[0].Car[1]["Tinted Windows"]}</p>
<p>Wheels : ${myJson[0].Car[1]["Wheels"]}</p>
<p>Roof cargo : ${myJson[0].Car[1]["Roof cargo"]}</p>
<p>Entertainment : 
<ul>
<li>${myJson[0].Car[1].Entertainment.Radio}</li>
<li>${myJson[0].Car[1].Entertainment.Media}</li>
<li>${myJson[0].Car[1].Entertainment["Sound system"]}}</li></ul>
<p><Accessories : ${myJson[0].Car["Accessories"]}</p>

</div>

`;