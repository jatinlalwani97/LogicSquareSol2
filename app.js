function findCaliforniaCafes(search) {
    // You can store the given arrays in 2 internal variables
     
  const places = [{
        "id": "jahgde7wgdiau8ewsahgosd",
        "street_no": "60H",
        "locality": "Solomos Island Road",
        "postal_code": "20688",
        "lat": "36.7783 N",
        "long": "119.4179 W"
    }, {
        "id": "12hydbdf76sljfts87sbfis",
        "street_no": "1B",
        "locality": "Macarthur Blvd",
        "postal_code": "20619",
        "lat": "38.1781 N",
        "long": "118.4171 W"
    }, {
        "id": "kjk234g4gcvfx8usg1l33pi",
        "street_no": "45250",
        "locality": "Worth Avenue, Unit A",
        "postal_code": "20619",
        "lat": "36.1152",
        "long": "117.521"
    }, {
        "id": "saswe3s6yydtdr52hsd72yst",
        "street_no": "1X",
        "locality": "Macarthur Blvd",
        "postal_code": "20687",
        "lat": "36.7783",
        "long": "119.4179"
    }, {
        "id": "skjd86svvfdrsv55svbvf3f",
        "street_no": "7S",
        "locality": "Three Notch Road",
        "postal_code": "20619",
        "lat": "36.83",
        "long": "119.6"
    }, {
        "id": "mjdhgetr4pojfyts22fzfsh",
        "street_no": "22803",
        "locality": "Gunston Dr Lexington Park",
        "postal_code": "20688",
        "lat": "35.7788",
        "long": "119.979"
    }, {
        "id": "urhw3837ehalod7w02b7835",
        "street_no": "225",
        "locality": "Macarthur Blvd",
        "postal_code": "20687",
        "lat": "35.77813",
        "long": "119.41791"
    }];
    const cafes = [{
        "name": "Bazaar Cafe",
        "place_id": "kjk234g4gcvfx8usg1l33pi"
    }, {
        "name": "Ashley's Cafe",
        "place_id": "12hydbdf76sljfts87sbfis"
    }, {
        "name": "Avenue Cafe",
        "place_id": "skjd86svvfdrsv55svbvf3f"
    }, {
        "name": "Hi-Lo Cafe",
        "place_id": "mjdhgetr4pojfyts22fzfsh"
    }, {
        "name": "California Chicken Cafe",
        "place_id": "12hydbdf76sljfts87sbfis"
    }, {
        "name": "Avenue Bakery Cafe",
        "place_id": "jahgde7wgdiau8ewsahgosd"
    }, {
        "name": "Philz Coffee",
        "place_id": "urhw3837ehalod7w02b7835"
    }];
    objectL = Object.keys(cafes).length;
    var newArray=[];
    var n=[];
   
    for(i=0;i<objectL;i++){
        var lowerSearch= search.toLowerCase();
   if(cafes[i].name.toLowerCase().includes(lowerSearch)){
    newArray.push(cafes[i].place_id);
    n.push(cafes[i].name);
    }
   
    }
   
    //console.log(newArray())
    //  Your code goes here
    //console.log(search)
   // return results
   var results =[]
   objectP = Object.keys(places).length;
   
   for(i=0;i<newArray.length;i++){
   obj = {};
   for(j=0;j<objectP;j++){
    if(places[j].id==newArray[i]){
    //results.push(places[j].street_no,places[j].locality)
    obj["name"]=n[i];
    obj["street_no"]=places[j].street_no;
    obj["locality"]=places[j].locality;
    obj["postal_code"]=places[j].postal_code;
    obj["lat"]=places[j].lat;
    obj["long"]=places[j].long;
    break;
    }
   }
  results.push(obj);
  console.log(results);


  }
   document.getElementById("searchBar").innerHTML = results;

   var html = "<table border='1|1'>";
   for (var i = 0; i < results.length; i++) {
    var j=i+1;
    html+="<tr>";
    html+="<td class='column1'>"+j+"</td>";
    html+="<td class='column2'>"+results[i].name+"</td>";
    html+="<td class='column3'>"+results[i].street_no+' '+results[i].locality+"</td>";
    html+="<td class='column4'>"+results[i].postal_code+"</td>";
    html+="<td class='column5'>"+results[i].lat+"</td>";
    html+="<td class='column6'>"+results[i].log+"</td>";
    html+="</tr>";

   }
document.getElementById("box").innerHTML = html;
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup',(e)=>{
    console.log(e.target.value);
    findCaliforniaCafes(e.target.value);
})