console.log("connect")
function getData(){
   fetch('/db.json')
    .then((response) => response.json())
    .then((data)=>{
        if(data['empty']){
            alert("No Cards available!!");
        }else{
         addCard(data);
        }
    }).catch((error)=>{
        alert("Issue in fetching the Cards!");
    });
}

function addCard(jsonCard){
    var card_title = jsonCard.title;
    var titleID = "myTitleID"+card_id;
    var headingDiv = document.createElement("div");
    headingDiv.className = "card-heading";
    headingDiv.id = titleID;
    headingDiv.innerHTML = card_title;
    card.appendChild(headingDiv);

}