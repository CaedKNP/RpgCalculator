//refferences
var reset = document.getElementById("resetAll");

var dmgButtons = document.getElementsByClassName("dmg");
var damageField = document.getElementById("dmgSum");
var ressButtons = document.getElementsByClassName("ress");
var ressField = document.getElementById("ressSum");

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
var ressSum = 0;
var limbB = 0;
var limbA = 0;

var color1 = {
    red: 130,
    green: 0,
    blue: 0
};
var color2 = {
    red: 130,
    green: 95,
    blue: 0
};

var color3 = {
    red: 0,
    green: 0,
    blue: 0
};

var color4 = {
    red: 145,
    green: 145,
    blue: 145
};

function divideStats(){
    var dB = limbB =Math.round(barrier/7);
    var dA = limbA = Math.round(armor/7);
    
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

function addRess() {
    var value = parseInt(this.getAttribute("id"));
    ressSum += value;
    ressField.innerHTML = ressSum;
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

function VisualizeDmg(limb, button)
{
    if(barriers[limb] > 0)
    {
        barriers[limb] -= calcDmg();
        button.innerHTML = barriers[limb];
        button.style.backgroundColor = calcGradient1(barriers[limb]/limbB);
    }
    else if(armors[limb] > 0)
    {
        armors[limb] -= calcDmg();
        button.innerHTML = armors[limb];
        button.style.backgroundColor = calcGradient2(armors[limb]/limbA);
    }
}

function calcDmg()
{
    return dmgSum - ((dmgSum*ressSum)/100);
}

function calcGradient1(percent)
{
    var resultRed = color1.red + percent * (color2.red - color1.red);
    var resultGreen = color1.green + percent * (color2.green - color1.green);
    var resultBlue = color1.blue + percent * (color2.blue - color1.blue);

    return 'rgb(' + resultRed + ',' + resultGreen + ',' + resultBlue + ')'; 
}

function calcGradient2(percent)
{
    var resultRed = color3.red + percent * (color4.red - color3.red);
    var resultGreen = color3.green + percent * (color4.green - color3.green);
    var resultBlue = color3.blue + percent * (color4.blue - color3.blue);

    return 'rgb(' + resultRed + ',' + resultGreen + ',' + resultBlue + ')'; 
}

//execute on start
updateVisual()
//headButton.style.backgroundColor = 'rgb(204, 197, 8)';

divideStats();
reset.addEventListener("click", resetClick);
headButton.addEventListener("click", function() {
    VisualizeDmg('Head', headButton);
});
forntButton.addEventListener("click", function() {
    VisualizeDmg('Front', forntButton);
});
backButton.addEventListener("click", function() {
    VisualizeDmg('Back', backButton);
});
lHandButton.addEventListener("click", function() {
    VisualizeDmg('LeftHand', lHandButton);
});
rHandButton.addEventListener("click", function() {
    VisualizeDmg('RightHand', rHandButton);
});
lLegButton.addEventListener("click", function() {
    VisualizeDmg('LeftLeg', lLegButton);
});
rLegButton.addEventListener("click", function() {
    VisualizeDmg('RightLeg', rLegButton);
});

damageField.addEventListener('click', function(){
    dmgSum = 0;
    damageField.innerHTML = dmgSum;
});

for (var i = 0; i < dmgButtons.length; i++) {
    dmgButtons[i].addEventListener('click', addDmg, false);
}

ressField.addEventListener('click', function(){
    ressSum = 0;
    ressField.innerHTML = ressSum;
});

for (var i = 0; i < ressButtons.length; i++) {
    ressButtons[i].addEventListener('click', addRess, false);
}