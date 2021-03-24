var DESCR_GROUP_ID = "descr_group";
var OPTION_GROUP_ID = "option_group";
var SCORE_GROUP_ID = "score_group"

var curNode;
var descrProgress = 0;

let playerScore = 0

main();

function main() {
    displayNode(STORY["entry"]);
}

function displayScore() {
    document.getElementById("score_num").style.opacity = "1"
    $("#score_num").fadeOut("fast")
    $("#score_num").fadeIn(30)
}

function displayScoreText() {
    document.getElementById("text_output").style.opacity = "1"
    $("#text_output").fadeOut("fast")
    $("#text_output").fadeIn(0)
}


function displayNode(storyNode) { 

    curNode = storyNode;
    descrProgress = 0;

    clearOptionBtns();

    $("#" + DESCR_GROUP_ID).fadeOut("fast", function() {
            $("#" + DESCR_GROUP_ID).empty();
            $("#" + DESCR_GROUP_ID).fadeIn(0);

            for(i = 0; i < storyNode.description.length; i++) {
                setTimeout( function() { expandDescription(storyNode) }, i * 800);
            }
        }
    );
}

function expandDescription(storyNode) {
    var storyNodeRef = storyNode ? storyNode : curNode;

    var descr = document.createElement("p");
    var id = "descr_" + descrProgress;
    descr.setAttribute("class", "primary");
    descr.setAttribute("id", id);
    descr.innerHTML = storyNodeRef.description[descrProgress];
    
    descrProgress++;
    var enableOptions = (descrProgress == storyNodeRef.description.length);

    $("#" + DESCR_GROUP_ID).append(descr);
    $("#" + id).fadeIn("slow", function() {
        if(enableOptions) {
            displayOptions();
        }
    }  
    );
}

function displayOptions(storyNode) {
    var storyNodeRef = storyNode ? storyNode : curNode;

    for(i = 0; i < storyNodeRef.options.length; i++) {
        addOptionBtn(storyNodeRef.options[i], i);
    }
}

function clearOptionBtns() {
    $("#" + OPTION_GROUP_ID).empty();
}

function addOptionBtn(option, index) {

    var btn = document.createElement("button");
    var btnTex = document.createTextNode(option.text);
    btn.appendChild(btnTex);
    btn.setAttribute("onclick", "onOptionClick("+ index +")");

    var spacer = document.createElement("div");
    spacer.classList.add("spacer");

    var divEl = document.getElementById(OPTION_GROUP_ID);
    divEl.appendChild(btn);
    divEl.appendChild(spacer);

    return btn;
}

function onOptionClick(optIndex) {
    if(curNode) {
        var newNode = curNode.options[optIndex].goto;
        console.log(newNode)
        console.log(curNode.options[optIndex]["text"])
        if(curNode.options[optIndex]["text"]=="Begin"){
            playerScore+=60
            $("#score_num").text("Score: "+playerScore +"/100")
            displayScore()
        }
        if(curNode.options[optIndex]["text"]=="Take a selfie and post on Instagram"){
            playerScore+=2
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("+2 points for maintaining social media activity")
            displayScoreText();
        }
        if(curNode.options[optIndex]["text"]=="Clear last night's trash"){
            playerScore-=2
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("-2 points. Trash can only be cleared once a week on Friday")
            displayScoreText();
        }
        if(curNode.options[optIndex]["text"]=="Help Aunt May"){
            playerScore+=5
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("+5 points. Points awarded for helping the elderly")
        }
        if(curNode.options[optIndex]["text"]=="Don't help Aunt May"){
            playerScore-=5
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("-5 points. Points deducted for not helping the elderly")
        }
        if(curNode.options[optIndex]["text"]=="Wait for the next train"){
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("")
        }
        if(curNode.options[optIndex]["text"]=="Pin the badge on yourself and squeeze in"){
            playerScore+=2
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("+2 points. Points awarded due to upvotes from people around you")
        }
        if(curNode.options[optIndex]["text"]=="Turn around"){
            playerScore-=5
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("-5 points. Points deducted due to downvote by gentleman")
        }
        if(curNode.options[optIndex]["text"]=="Enter the office building"){
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("")
        }
        if(curNode.options[optIndex]["text"]=="'was in the washroom'"){
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("You got away with being late this time")
        }
        if(curNode.options[optIndex]["text"]=="'was late, I'm sorry'"){
            playerScore-=3
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("-3 points. Points deducted for being late")
        }
        if(curNode.options[optIndex]["text"]=="Hack the system"){
            playerScore=80
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("Hacking successful")
        }
        if(curNode.options[optIndex]["text"]=="Leave the office"){
            playerScore=20
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("You have been blacklisted by the system")
        }
        if(curNode.options[optIndex]["text"]=="Make small talk with the boss"){
            playerScore+=1
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("+1 point. Point awarded due to upvote from the boss")
        }
        if(curNode.options[optIndex]["text"]=="Lunch break"){
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("")
        }
        if(curNode.options[optIndex]["text"]=="Join coworkers for lunch"){
            playerScore+=2
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("+2 points for having regular meals")
        }
        if(curNode.options[optIndex]["text"]=="Skip Lunch"){
            playerScore-=2
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("-2 points for skipping meals")
        }
        if(curNode.options[optIndex]["text"]=="Continue"){
            $("#score_num").text("Score: "+playerScore +"/100")
            $("#text_output").text("")
            if(playerScore>=70){
                newNode = "ending_70"
            }
            else{
                newNode = "ending_no_job_promo"
            }
        }
        if(curNode.options[optIndex]["text"]=="Replay"){
            playerScore=0
            $("#score_num").text("")
            $("#text_output").text("")
        }
        displayNode(STORY[newNode]);
    }
    
}