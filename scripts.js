//refferences
var reset = document.getElementById("resetAll");

var dmgButtons = document.getElementsByClassName("dmg");
var damageField = document.getElementById("dmgSum");

var headButton = document.getElementById("HeadB");
var forntButton = document.getElementById("FrontB");
var backButton = document.getElementById("BackB");
var lHandButton = document.getElementById("LArmB");
var rHandButton = document.getElementById("RArmB");
var lLegButton = document.getElementById("LLegB");
var rLegButton = document.getElementById("RLegB");

//stats
var armor = document.getElementById("baseArmor").value;
var barrier = document.getElementById("baseBarrier").value;
var armors = {
    Head: 0,
    Front: 0,
    Back: 0,
    LeftHand: 0,
    RightHand: 0,
    LeftLeg: 0,
    RightLeg: 0,
};
var barriers = {
    Head: 0,
    Front: 0,
    Back: 0,
    LeftHand: 0,
    RightHand: 0,
    LeftLeg: 0,
    RightLeg: 0,
};

var dmgSum = 0;

function divideStats(){
    var dB = Math.round(barrier/7);
    var dA = Math.round(armor/7);
    
    for(var key in armors)
        armors[key] = dA;
    for(var key in barriers)
        barriers[key] = dB;

}

function resetClick(){
    armor = document.getElementById("baseArmor").value;
    barrier = document.getElementById("baseBarrier").value;
    divideStats();
    updateVisual();
} 

function addDmg() {
    var value = parseInt(this.getAttribute("id"));
    dmgSum += value;
    damageField.innerHTML = dmgSum;
};

function updateVisual(){
    headButton.innerHTML = barriers.Head;
    forntButton.innerHTML = barriers.Front;
    backButton.innerHTML = barriers.Back;
    lHandButton.innerHTML = barriers.LeftHand;
    rHandButton.innerHTML = barriers.RightHand;
    lLegButton.innerHTML = barriers.LeftLeg;
    rLegButton.innerHTML = barriers.RightLeg;
}

//execute on start
updateVisual()
headButton.style.backgroundColor = 'rgb(204, 197, 8)';

divideStats();
reset.addEventListener("click", resetClick);
headButton.addEventListener("click", function() {
    barriers.Head -= dmgSum;
    headButton.innerHTML = barriers.Head;
});
forntButton.addEventListener("click", function() {
    barriers.Front -= dmgSum;
    forntButton.innerHTML = barriers.Front;
});
backButton.addEventListener("click", function() {
    barriers.Back -= dmgSum;
    backButton.innerHTML = barriers.Back;
});
lHandButton.addEventListener("click", function() {
    barriers.LeftHand -= dmgSum;
    lHandButton.innerHTML = barriers.LeftHand;
});
rHandButton.addEventListener("click", function() {
    barriers.RightHand -= dmgSum;
    rHandButton.innerHTML = barriers.RightHand;
});
lLegButton.addEventListener("click", function() {
    barriers.LeftLeg -= dmgSum;
    lLegButton.innerHTML = barriers.LeftLeg;
});
rLegButton.addEventListener("click", function() {
    barriers.RightLeg -= dmgSum;
    rLegButton.innerHTML = barriers.RightLeg;
});

damageField.addEventListener('click', function(){
    dmgSum = 0;
    damageField.innerHTML = dmgSum;
});

for (var i = 0; i < dmgButtons.length; i++) {
    dmgButtons[i].addEventListener('click', addDmg, false);
}