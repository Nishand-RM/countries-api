var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => {
    return data.json();
}).then((data1) => foo(data1)).catch((error) => console.log(error))

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(data1) {
    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `<div class="card" style="width: 18rem;">
        <br>
            <div class="card-body" style="text-align: center; background-color: black;color: white;">${data1[i].name.common}</div>
            <br>
  <img src=${data1[i].flags.png} class="card-img-top" alt="...">
  
    <p class="card-title" style="font-size: medium; text-align: center;">Capital:${data1[i].capital}</p>
           <p class="card-title" style="font-size: medium; text-align: center;">Region:${data1[i].region}</p>
             <p class="card-title" style="font-size: medium; text-align: center;">Region:${data1[i].cca3}</p>

                 <button class="btn btn-primary" type="button" onclick="clickme(${data1[i].latlng[0]}, ${data1[i].latlng[1]})">Click For Weather</button>

    <br>
  </div>
</div>`
        row.append(col);
        container.append(row);
        document.body.append(container);
    }
}

async function clickme(lat, lon) {
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ea20e3b2efab9d8b77a5d783bdd3e81c`);
        let data = await res.json();
        console.log(`Country is: (${data.sys.country}) and its temperature is: ${data.main.temp}K`);
    } catch (error) {
        console.log(error);
    }
}
        
clickme();
