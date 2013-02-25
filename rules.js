var Character = {
    name: "Bob the Builder",
    alignment: "LG",
    level: 5,
    hp: 20,
    bonusHp: 2,
    damage: 8,
    init: 0,
    speed: 0,
    climb: 0,
    fly: 0,
    flyManeuverability: 0,
    //burrow: 0,
    //swim: 0,
    attacks: {},
    specAttacks: {},
    cmd: 0,
    cmb: 0,
    ac: 0,
    touch: 0,
    ff: 0,
    fort: 0,
    ref: 0,
    will: 0
};

var CharSetValue = function(id, value, nolbrk, notag) {
    var CharElement = document.getElementById(id);
    if (typeof value === 'undefined')
    {
        CharElement.style.display="none";
    } else {
        if (!notag){
            CharElement.innerHTML = CharElement.getAttribute('id').replace('Char', '') + ": " + value;
        } else {
            CharElement.innerHTML = value;
        }
        
        if (!nolbrk) {
            CharElement.innerHTML = CharElement.innerHTML + "<br />";
        }   
    }
};

window.onload = function() {
    
    //Core 
    CharSetValue('CharName', Character.name, true, true);

    CharSetValue('CharAlign', Character.alignment, true, true);
    
    CharSetValue('CharLevel', Character.level, false, true);
    
    CharSetValue('CharHP', Character.hp + Character.bonusHp - Character.damage);
    
    CharSetValue('CharInit', Character.init);
    
    CharSetValue('CharSpeed', Character.speed); 
    
    CharSetValue('CharClimb', Character.climb);
    
    CharSetValue('CharFly', Character.fly + " Maneuverability: " + Character.flyManeuverability);
    
    CharSetValue('CharBurrow', Character.burrow);

    CharSetValue('CharSwim', Character.swim);

    
    
    //Offense
    CharSetValue('CharCMD', Character.cmd);
    
    CharSetValue('CharCMB', Character.cmb);
    
    //Defense
    CharSetValue('CharAC', Character.ac);
    
    CharSetValue('CharTouch', Character.touch);
    
    CharSetValue('CharFF', Character.ff);
    
    CharSetValue('CharFort', Character.fort);
    
    CharSetValue('CharRef', Character.ref);
    
    CharSetValue('CharWill', Character.will);
    
};



