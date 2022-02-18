function getData(){

    fetch('../php/g_data.php')
    .then((response) => response.json())
    .then((data)=>{
        if(data['empty']){
            alert("No Cards available!!");
        }else{
            for(var i in data){
                addCard(data[i]);
            }
        }
    }).catch((error)=>{
        alert("Issue in fetching the Cards!");
    });

}

function addCard(jsonCard){

    var card_id = jsonCard.Id;
    var card_image = jsonCard.image;
    var card_title = jsonCard.title;
    var card_description = jsonCard.description;
    var card_date = jsonCard.date;
    var card_link = jsonCard.link;

    var image = document.createElement("img");
    image.src = "../images/"+card_image;

    var imageDiv = document.createElement("div");
    imageDiv.className = "card-image";
    imageDiv.appendChild(image);

    var titleID = "myTitleID"+card_id;
    var headingDiv = document.createElement("div");
    headingDiv.className = "card-heading";
    headingDiv.id = titleID;
    headingDiv.innerHTML = card_title;

    var descriptionID = "myDescID"+card_id;
    var descriptionDiv = document.createElement("div");
    descriptionDiv.className = "card-text";
    descriptionDiv.id = descriptionID;
    descriptionDiv.innerHTML = card_description;

    var dateID = "myDateID"+card_id;
    var dateDiv = document.createElement("div");
    dateDiv.className = "card-date-text";
    dateDiv.innerHTML = "Last Date to Apply :- "+card_date+".";
    dateDiv.id = dateID;

    var linkID = "myLinkID"+card_id;
    var link = document.createElement("a");
    link.href="#";
    link.className="card-button";
    link.innerHTML = "Apply Now &nbsp;";
    link.id = linkID;

    var arrowIcon = document.createElement("i");
    arrowIcon.className = "material-icons icon";
    arrowIcon.innerHTML = "arrow_forward";

    link.appendChild(arrowIcon);

    var card = document.createElement("div");
    card.className = "card-sl";

    card.appendChild(imageDiv);
    card.appendChild(headingDiv);
    card.appendChild(descriptionDiv);
    card.appendChild(dateDiv);
    card.appendChild(link);

    var cardID = "myCardID"+card_id;
    var cardColumn = document.createElement("div");
    cardColumn.className = "col-md-4";
    cardColumn.id = cardID;
    cardColumn.appendChild(card);

    var container = document.getElementById("cards_container");
    container.appendChild(cardColumn);
}