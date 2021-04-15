async function  sendata() {
    let country = getElementById("country-name");
    let sdate = getElementById("from");
    // sdate contains starting date
    let edate = getElementById("to");
    // to contains ending date 

    fetch()
    .then((resp)=>resp.json('https://api.covid19api.com/country/${country,value}?from=${from.value}T00:00:00Z&to=${to.value}T00:00:00Z'))
    .then((data)=>{
        console.log(data);
        populateData(data);
        
    })
        .catch((err)=>console.log(err.message));
        
    

}
function populateData(data){
    var main =document.getElementsByClassName("cases")[0];
    main.innerHTML="";
    for (var i =0; i<data.length;i++)
    {
        var main_div = document.createElement(div);
        main_div.className= 'cases';
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');

        div1.className.add('blue');
        div2.className.add('blue');
        div3.className.add('blue');

        div1.innerHTML ="Active Cases-->" +data[i].Active;
        div2.innerHTML ="Confirmed-->" +data[i].Confirmed;
        div3.innerHTML ="Deaths-->" +data[i].Deaths;



        main_div.appendChild(div1);
        main_div.appendChild(div2);
        main_div.appendChild(div3);
        main.appendChild(main_div);





    }
    
}