function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);}

    function jugada(seleccion){
    if(seleccion == "1"){
        return("Piedra")
    } else if( seleccion == "2"){return("Papel")}
    else if(seleccion == "3"){return("Tijera")}}

    function PPOT(){
               
    let triunfos = 0
    let derrotas = 0

    while(triunfos<3 && derrotas<3){
    let jugador = prompt("Piedra, papel, o tijera?")
    let pc = aleatorio(1,3)
    alert("Has jugado: " + jugada(jugador))
    alert("La PC ha jugado: " + jugada(pc)) 
    
    function win(){
        alert("Ganaste")
        triunfos = triunfos +1
    }
    function lose(){
        alert("Perdiste")
        derrotas = derrotas +1
    }

    function combate(jugador, pc){
    if(jugador == pc){
        alert("Empate")
    } else if (jugador == "1" && pc == "3"){
        win();
    } else if(jugador == "2" && pc == "1"){
        win();           
    } else if(jugador == "3" && pc == "2"){
        win();
    } else {
        lose();
    }}
    combate(jugador, pc);
    if(derrotas=="3"||triunfos=="3"){
        alert("Triunfos: " + triunfos + ", Derrotas: " + derrotas);
    }
}}

window.onload = function(){
    var p1selecting = true;
    var p2selecting = false;
    var saintsp1 = [];
    var saintsp2 = [];
    var spot1 = false;
    var spot2 = false;
    var spot3 = false;
    var spotuno = null;
    var spotdos = null;
    var spottres = null;
    var select1 = document.getElementById("cb1");
    var select2 = document.getElementById("cb2");
    var select3 = document.getElementById("cb3");
    var select4 = document.getElementById("cb7");
    var select5 = document.getElementById("cb8");
    var select6 = document.getElementById("cb9");
    var charbtn = document.getElementsByClassName("char-btn");
    const saints = new Array(12).fill(false);
    var attacks = document.getElementsByClassName("atack-btn");

    function choiseSaint(e){
        var id = (e.target.parentElement.id);
        if(spot1==false&&saints[id-1]==false){
            let a = charbtn[id-1].childNodes[1];
            a.style.backgroundImage = "url('images/glow.png')";
            a.style.backgroundPosition = "center";
            charbtn[id-1].style.color = "gold"; 
            spot1 = true;
            spotuno = id;
            saints[id-1] = true;
            charbtn[id-1].removeEventListener("click", choiseSaint, false);
            charbtn[id-1].addEventListener("click", unselectSaint, false);
            if(p1selecting==true){
            document.getElementsByClassName("charbox")[0].style.borderColor = "#0095c2";
            saintsp1[0] = id-1;}else {
                document.getElementsByClassName("charbox")[0].style.borderColor = "red";
                a.style.backgroundImage = "url('images/cosozz.png')";
                saintsp2[0] = id-1;
               }   
        } else if(spot2==false&&saints[id-1]==false){
            let a = charbtn[id-1].childNodes[1];
            a.style.backgroundPosition = "center";
            charbtn[id-1].style.color = "gold";
            spot2 = true;
            saints[id-1] = true;
            spotdos = id;
            charbtn[id-1].removeEventListener("click", choiseSaint, false);
            charbtn[id-1].addEventListener("click", unselectSaint, false);
            if(p1selecting==true){
                document.getElementsByClassName("charbox")[1].style.borderColor = "#0095c2";
            a.style.backgroundImage = "url('images/glow.png')";
            saintsp1[1] = id-1;   }else {
                document.getElementsByClassName("charbox")[1].style.borderColor = "red";
                a.style.backgroundImage = "url('images/cosozz.png')";
                saintsp2[1] = id-1;
               } 
        } else if(spot3==false&&saints[id-1]==false){
            let a = charbtn[id-1].childNodes[1];
            a.style.backgroundImage = "url('images/glow.png')";
            a.style.backgroundPosition = "center";
            charbtn[id-1].style.color = "gold";
            spot3 = true;
            spottres = id;
            saints[id-1] = true;
            charbtn[id-1].removeEventListener("click", choiseSaint, false);
            charbtn[id-1].addEventListener("click", unselectSaint, false); 
           if(p1selecting==true){document.getElementsByClassName("charbox")[2].style.borderColor = "#0095c2";
           saintsp1[2] = id-1; }else {
            document.getElementsByClassName("charbox")[2].style.borderColor = "red";
            a.style.backgroundImage = "url('images/cosozz.png')";
            saintsp2[2] = id-1;
           } 
        }
        var audio=document.getElementsByTagName('audio');
        audio[2].play(); 
    }
    function selectSaint(e){
        var id = (e.target.parentElement.id);
        if(e.path.length==6){id = e.target.id}
        var imagen = "images/characters/"+id+".png";
        
        if(spot1==false&&saints[id-1]==false){
            select1.src = imagen;
            select1.style.visibility = "visible";
        } else if(spot2==false&&saints[id-1]==false){
            select2.src = imagen;
            select2.style.visibility = "visible";
        } else if(spot3==false&&saints[id-1]==false){
            select3.src = imagen;
            select3.style.visibility = "visible";
        }

    }
    function unselectSaint(e){
        let id = (e.target.parentElement.id);
         if (spot1 == true && spotuno == id){
            spot1 = false;
            select1.style.visibility = "hidden";
            spotuno = null;
            saints[id-1] = false;
            charbtn[id-1].childNodes[1].style.background = "";
            charbtn[id-1].style.color = "white";
            charbtn[id-1].removeEventListener("click", unselectSaint, false);
            charbtn[id-1].addEventListener("click", choiseSaint, false);
            document.getElementsByClassName("charbox")[0].style.borderColor = "gold"; 
         }
         if (spot2 == true && spotdos == id){
            spot2 = false;
            select2.style.visibility = "hidden";
            spotdos = null;
            saints[id-1] = false;
            charbtn[id-1].childNodes[1].style.background = "";
            charbtn[id-1].style.color = "white";
            charbtn[id-1].removeEventListener("click", unselectSaint, false);
            charbtn[id-1].addEventListener("click", choiseSaint, false);
            document.getElementsByClassName("charbox")[1].style.borderColor = "gold"; 
         }
         if (spot3 == true && spottres == id){
            spot3 = false;
            select3.style.visibility = "hidden";
            spottres = null;
            saints[id-1] = false;
            charbtn[id-1].childNodes[1].style.background = "";
            charbtn[id-1].style.color = "white";
            charbtn[id-1].removeEventListener("click", unselectSaint, false);
            charbtn[id-1].addEventListener("click", choiseSaint, false);
            document.getElementsByClassName("charbox")[2].style.borderColor = "gold"; 
         }
    }
    function outImage(){
        if(spotuno==null){
            select1.style.visibility = "hidden";
        }
        if(spotdos==null){
            select2.style.visibility = "hidden";
        }
        if(spottres==null){
            select3.style.visibility = "hidden";
        }
    }
    function checkButtons(){
        if(p1selecting==true){
            if(spot1 ==true && spot2 == true && spot3 == true){
            document.getElementById("bt1").style.backgroundColor = "#00c3ff69";
        } else {
            document.getElementById("bt1").style.backgroundColor = "";
        }}
        if(p2selecting==true){if(spot1 ==true && spot2 == true && spot3 == true){
            document.getElementById("bt2").style.backgroundColor = "rgba(255, 0, 0, 0.315)";
            document.getElementById("bt3").style.opacity ="1";
        } else {
            document.getElementById("bt2").style.backgroundColor = "";
            document.getElementById("bt3").style.opacity ="0.3";
        }}
    }
    function boton2(){
        for(elemento of charbtn){
            elemento.childNodes[1].style.background = "";
            elemento.style.color = "white";
            elemento.removeEventListener("click", unselectSaint, false);
            elemento.addEventListener("click", choiseSaint, false);
        }
        spot1 = false;
        spot2 = false;
        spot3 = false;
        spotuno = null;
        spotdos = null;
        spottres = null;
        select1.style.visibility = "hidden";
        select2.style.visibility = "hidden";
        select3.style.visibility = "hidden";
        document.getElementsByClassName("charbox")[0].style.borderColor = "gold";
        document.getElementsByClassName("charbox")[1].style.borderColor = "gold"; 
        document.getElementsByClassName("charbox")[2].style.borderColor = "gold";
        saints.fill(false);
        p1selecting = false;
        p2selecting = true;
        for(el of charbtn){       
            el.childNodes[1].onmouseover = function(e){
                e.target.style.backgroundImage = "url('./images/cosozz.png')"; 
                e.target.style.backgroundPosition = "center";
          }
        
          el.childNodes[1].onmouseout = function(e){
            var ide = e.target.parentElement.id;
            console.log(ide);
            if(saints[ide-1]==false){
                e.target.style.backgroundImage = "";
            } }
        }

        
    }
    function boton3(){
    var i = document.getElementById("characterSelect");
    i.style.transitionProperty = "all";
    i.style.transitionDuration = "1s";
    i.style.marginTop = "-2000px";

    var o = document.getElementById("battle");
    o.style.marginTop = "1350px";
    o.style.display = "flex";

    document.getElementById("titulo").style.display = "none";
    SAINT1();
    SAINT2();
    SAINT3();
    SAINT4();
    SAINT5();
    SAINT6();
    var audio=document.getElementsByTagName('audio');
        audio[1].play();  

    }

  var Mu = {
    id: "Mu",
    name: 'Mu de Aries',
    src: './images/characters/mudearies.png',
    src1: './images/characters/chara_on_aries.png',
    element: 'Fire',
    hp: 3000,
    skills: {
        0: {
          name: 'Crystal Wall',
          src:'./images/atacks/crystalwall.webp',
          icon: './images/icons/crystalwall.png',
          duration: 4380,
          damage: 400
        },
        1: {
          name: 'Stardust Extintion',
          src: './images/atacks/stardustextincion.gif',
          icon: './images/icons/stardustextintion.png',
          duration: 1000,
          damage: 600
        },
        2: {
            name: 'Stardust Revolution',
            src: './images/atacks/mu.gif',
            icon: './images/icons/stardustrevolutionn.png',
            duration: 3410,
            damage: 1000
        }
    },
    Skill1(parametro){
        alert("Cystal Wall!")
        alert(parametro);
        document.getElementById("cb7").src = "./images/atacks/crystalwall.webp";
        document.getElementById("cb7").style.width = "100%";
    
    },
    Skill2(){
        alert("Stardust Extincion!");
        document.getElementById("cb7").src = "./images/atacks/stardustextincion.gif";
        document.getElementById("cb7").style.width = "100%";
    },
    Skill3(){
        alert("Stardust Revolution!");
        document.getElementById("cb7").src = "./images/atacks/stardustrevolution.gif";
        document.getElementById("cb7").style.width = "100%";
        }
}
  var Aldebaran = {
    name: 'Aldebaran de Tauro',
    src: './images/characters/alde.png',
    src1: './images/characters/chara_on_taurus.png',
    element: 'Earth',
    hp: 5000,
    skills: {
        0: {
          name: 'Great Horn',
          src:'./images/atacks/greathorn.webp',
          icon: './images/icons/greathorn.png',
          duration: 2690,
          damage: 400
        },
        1: {
          name: 'Aldebaran',
          src: './images/atacks/aldebaran.gif',
          icon: './images/icons/none.png',
          duration: 2690,
          damage: 500
        },
        2: {
            name: '',
            src: '',
            icon: './images/icons/none.png',
            damage: 0
        }
    }
  }
  var Saga = {
    name: 'Saga de Geminis',
    src: './images/characters/saga2.png',
    src1: './images/characters/chara_on_gemini.png',
    element: 'Earth',
    hp: 5000,
    skills: {
        0: {
          name: 'Genrō Maō Ken',
          src:'./images/atacks/saga.gif',
          icon: './images/icons/none.png',
          duration: 1700,
          damage: 500
        },
        1: {
          name: 'Another Dimension',
          src: './images/atacks/otherdimension.gif',
          icon: './images/icons/none.png',
          duration: 2000,
          damage: 700
        },
        2: {
            name: 'Galaxian Explosion',
            src: './images/atacks/galaxianexplosion.gif',
            icon: './images/icons/none.png',
            duration: 4500,
            damage: 1000
        }
    }
  }
  var DeathMask = {
    name: 'DeathMask de Cancer',
    src: './images/characters/mascara.png',
    src1: './images/characters/chara_on_cancer.png',
    element: 'Earth',
    hp: 4000,
    skills: {
        0: {
          name: 'Infernal Waves',
          src:'./images/atacks/infernalwaves.webp',
          icon: './images/icons/none.png',
          duration: 2000,
          damage: 400
        },
        1: {
          name: 'Soul Steal',
          src: './images/atacks/deathmask.gif',
          icon: './images/icons/none.png',
          duration: 2500,
          damage: 500
        },
        2: {
            name: 'Infernal Waves Charg',
            src: './images/atacks/deathmask3.gif',
            icon: './images/icons/none.png',
            duration: 6000,
            damage: 900
        }
    }

  }
  var Aioria = {
    name: 'Aioria de Leo',
    src: './images/characters/aioria.png',
    src1: './images/characters/chara_on_leo.png',
    element: 'Earth',
    hp: 3500,
    skills: {
        0: {
          name: 'Golden Bolt',
          src:'./images/atacks/aioria3.gif',
          icon: './images/icons/none.png',
          duration: 2500,
          damage: 400
        },
        1: {
          name: 'Cosmos Charge',
          src: './images/atacks/aioria.webp',
          icon: './images/icons/none.png',
          duration: 2000,
          damage: 0
        },
        2: {
            name: 'Lightning Plasma',
            src: './images/atacks/lightiningplasma.gif',
            icon: './images/icons/none.png',
            duration: 2400,
            damage: 700
        }
    }
    
  }
  var Shaka = {
    name: 'Shaka de Virgo',
    src: './images/characters/shakamario.webp',
    src1: './images/characters/chara_on_virgo.png',
    element: 'Earth',
    hp: 3200,
    skills: {
        0: {
            name: 'Ohm',
            src:'./images/atacks/ohm.gif',
            icon: './images/icons/ohm.png',
            duration: 1800,
            damage: 200
          },
          1: {
            name: 'Supremacia del Cielo',
            src: './images/atacks/supremaciadelcielo.gif',
            icon: './images/icons/supremaciadelcielo.png',
            duration: 1700,
            damage: 900
          },
          2: {
              name: 'Tembu Hōrin',
              src: './images/atacks/tenbuhorin.webp',
              icon: './images/icons/tenbuhorin.png',
              duration: 2200,
              damage: 1000
          }},
    Skill1(){
            alert("Ohm!")
            document.getElementById("cb8").src = "./images/atacks/ohm.gif";
            document.getElementById("cb8").style.width = "100%";       
        },
    Skill2(){
            alert("Supremacia del Cielo!");
            document.getElementById("cb8").src = "./images/atacks/supremaciadelcielo.gif";
            document.getElementById("cb8").style.width = "100%";
        },
    Skill3(){
            alert("Tembu Hōrin!");
            document.getElementById("cb8").src = "./images/atacks/tenbuhorin.webp";
            document.getElementById("cb8").style.width = "100%";
            }
  }
  var Dokho = {
    name: 'Dokho de Libra',
    src: './images/characters/7.png',
    src1: './images/characters/chara_on_libra.png',
    element: 'Earth',
    hp: 4100,
    skills: {
        0: {
            name: 'Acient Dragons',
            src:'./images/atacks/100 dragons.gif',
            icon: './images/icons/none.png',
            duration: 2000,
            damage: 400
          },
          1: {
            name: 'Berserk',
            src: './images/atacks/dokhocosmo.gif',
            icon: './images/icons/none.png',
            duration: 2500,
            damage: 200
          },
          2: {
              name: '100 Rotzank Dragons',
              src: './images/atacks/dragon.gif',
              icon: './images/icons/none.png',
              duration: 2400,
              damage: 700
          }},
  }
  var Milo = {
    name: 'Milo de Escorpio',
    src: './images/characters/milo2.png',
    src1: './images/characters/chara_on_scorpius.png',
    element: 'Earth',
    hp: 2500,
    skills: {
        0: {
            name: 'Scarlate Niddle',
            src:'./images/atacks/scarlateniddle.gif',
            icon: './images/icons/none.png',
            duration: 2100,
            damage: 400
          },
          1: {
            name: 'Scarlate blood',
            src: './images/atacks/milo.gif',
            icon: './images/icons/none.png',
            duration: 1500,
            damage: 100
          },
          2: {
              name: 'Antares',
              src: './images/atacks/antares.gif',
              icon: './images/icons/none.png',
              duration: 5600,
              damage: 1500
          }},
  }
  var Aioros = {
    name: 'Aioros de Sagitario',
    src: './images/characters/aioros.png',
    src1: './images/characters/chara_on_sagittarius.png',
    element: 'Earth',
    hp: 3000,
    skills: {
        0: {
            name: 'Golden Shot',
            src:'./images/atacks/shot.gif',
            icon: './images/icons/none.png',
            duration: 800,
            damage: 700
          },
          1: {
            name: 'Atomic Thunder',
            src: './images/atacks/atomicthunder.webp',
            icon: './images/icons/none.png',
            duration: 2300,
            damage: 800
          },
          2: {
              name: 'Sagitarius Arrow',
              src: './images/atacks/arrow.gif',
              icon: './images/icons/none.png',
              duration: 8100,
              damage: 1000
          }},
  }
  var Shura = {
    name: 'Shura de Capricornio',
    src: './images/characters/shura3.png',
    src1: './images/characters/chara_on_capriconus.png',
    element: 'Earth',
    hp: 3000,
    skills: {
        0: {
            name: 'Excalibur',
            src:'./images/atacks/excalibur2.gif',
            icon: './images/icons/none.png',
            duration: 1200,
            damage: 1000
          },
          1: {
            name: 'Excalibur Chargue',
            src: './images/atacks/excaliburchargue.gif',
            icon: './images/icons/none.png',
            duration: 2200,
            damage: 0
          },
          2: {
              name: 'Capricornus Excalibur',
              src: './images/atacks/excalibur.gif',
              icon: './images/icons/none.png',
              duration: 2100,
              damage: 800
          }},
  }
  var Camus = {
    name: 'Camus de Acuario',
    src: './images/characters/camus.png',
    src1: './images/characters/chara_on_aquarius.png',
    element: 'Water',
    hp: 3300,
    skills: {
        0: {
        name: 'Koliso',
        src:'./images/atacks/camus.gif',
        icon: './images/icons/none.png',
        duration: 1600,
        damage: 500
      },
      1: {
        name: 'Diamond Dust',
        src: './images/atacks/diamonddust.gif',
        icon: './images/icons/none.png',
        duration: 1200,
        damage: 450
      },
      2: {
          name: 'Aurora Execution',
          src: './images/atacks/auroraexecution.gif',
          icon: './images/icons/none.png',
          duration: 2500,
          damage: 850
      }
    }
    
  }
  var Afrodita = {
    name: 'Afrodita de Piscis',
    src: './images/characters/asphrodit.webp',
    src1: './images/characters/chara_on_pisces.png',
    element: 'Earth',
    hp: 3560,
    skills: {
        0: {
        name: 'Bloody Rose',
        src:'./images/atacks/Aphrodite.gif',
        icon: './images/icons/none.png',
        duration: 3000,
        damage: 350
      },
      1: {
        name: 'Royal Demon Rose',
        src: './images/atacks/blackrose.gif',
        icon: './images/icons/none.png',
        duration: 2700,
        damage: 350
      },
      2: {
          name: 'Demon Rose Final',
          src: './images/atacks/afrodita3.gif',
          icon: './images/icons/none.png',
          duration: 2200,
          damage: 1100
      }
    }
  }
  var GoldSaints = [Mu, Aldebaran,Saga,DeathMask,Aioria,Shaka,Dokho,Milo, Aioros, Shura, Camus, Afrodita]


  function skill(santo, skill, atackbox){

     function visualSkill(){     
        atackbox.src = santo.skills[skill].src;
        atackbox.style.width = "100%";
        let sound = document.getElementById("atacksound");
        sound.src = "./mucero.wav";
        setTimeout(function(){
            document.getElementById("atacksound2");
            setTimeout(()=>{
                
            },1200) 
        }, 3300)      
        return new Promise(function (resolve, reject){
            setTimeout(function ataque(){
                atackbox.src = santo.src;
                atackbox.style.width = "50%";
                resolve(console.log(santo.skills[skill].damage))
                },santo.skills[skill].duration);
        })
        }
    async function selectTarget(e){
        if(e.target.id=="cb10"){
            await visualSkill();
            GoldSaints[saintsp2[0]].hp -= santo.skills[skill].damage; 
            let santoenemy = GoldSaints[saintsp2[0]].hp
            let hp = document.getElementById('hp4');
            hp.innerHTML = "Hp: " + santoenemy;
            let hpbar = document.getElementById('p4');
            hpbar.value = santoenemy;
            document.removeEventListener("click", selectTarget);               
        }
        if(e.target.id=="cb11"){
            await visualSkill();
            GoldSaints[saintsp2[1]].hp -= santo.skills[skill].damage; 
            let santoenemy = GoldSaints[saintsp2[1]].hp
            let hp = document.getElementById('hp5');
            hp.innerHTML = "Hp: " + santoenemy;
            let hpbar = document.getElementById('p5');
            hpbar.value = santoenemy;
            document.removeEventListener("click", selectTarget);  }
            
        if(e.target.id=="cb12"){
            await visualSkill();
            GoldSaints[saintsp2[2]].hp -= santo.skills[skill].damage; 
            let santoenemy = GoldSaints[saintsp2[2]].hp
            let hp = document.getElementById('hp6');
            hp.innerHTML = "Hp: " + santoenemy;
            let hpbar = document.getElementById('p6');
            hpbar.value = santoenemy;
            document.removeEventListener("click", selectTarget);  
    }
    if(e.target.id=="cb7"){
        await visualSkill();
        GoldSaints[saintsp1[0]].hp -= santo.skills[skill].damage; 
        let santoenemy = GoldSaints[saintsp1[0]].hp
        let hp = document.getElementById('hp1');
        hp.innerHTML = "Hp: " + santoenemy;
        let hpbar = document.getElementById('p1');
        hpbar.value = santoenemy;
        document.removeEventListener("click", selectTarget);               
    }
    if(e.target.id=="cb8"){
        await visualSkill();
        GoldSaints[saintsp1[1]].hp -= santo.skills[skill].damage; 
        let santoenemy = GoldSaints[saintsp1[1]].hp
        let hp = document.getElementById('hp2');
        hp.innerHTML = "Hp: " + santoenemy;
        let hpbar = document.getElementById('p2');
        hpbar.value = santoenemy;
        document.removeEventListener("click", selectTarget);  }
        
    if(e.target.id=="cb9"){
        await visualSkill();
        GoldSaints[saintsp1[2]].hp -= santo.skills[skill].damage; 
        let santoenemy = GoldSaints[saintsp1[2]].hp
        let hp = document.getElementById('hp3');
        hp.innerHTML = "Hp: " + santoenemy;
        let hpbar = document.getElementById('p3');
        hpbar.value = santoenemy;
        document.removeEventListener("click", selectTarget);  
}
    }
document.addEventListener("click", selectTarget, false);  
}


function SAINT1(){
         let santoselect = saintsp1[0];
         var santo = GoldSaints[santoselect];
         let atackbox = document.getElementById('cb7');
         atackbox.src = santo.src;
         document.getElementById('saint1').src = santo.src1;

         let hp = document.getElementById('hp1');
    hp.innerHTML = "Hp: " + santo.hp;
    let hpbar = document.getElementById('p1');
    hpbar.max = santo.hp;
    hpbar.value = santo.hp;
    function skillOne(){
        skill(santo, 0, atackbox);
    }
    function skillTwo(){
        skill(santo, 1, atackbox);
    }
    function skillThree(){
        skill(santo, 2, atackbox)
    }
         attacks[0].childNodes[0].innerHTML = santo.name;
         attacks[1].childNodes[0].innerHTML = santo.skills[0].name;
         attacks[2].childNodes[0].innerHTML = santo.skills[1].name;
         attacks[3].childNodes[0].innerHTML = santo.skills[2].name;
            attacks[1].addEventListener('click', skillOne , false);
            attacks[2].addEventListener('click', skillTwo , false);
            attacks[3].addEventListener('click', skillThree , false);
        attacks[1].childNodes[1].childNodes[0].src = santo.skills[0].icon;
        attacks[2].childNodes[1].childNodes[0].src = santo.skills[1].icon;
        attacks[3].childNodes[1].childNodes[0].src = santo.skills[2].icon;
         
}
function SAINT2(){
    let santoselect = saintsp1[1];
    let santo = GoldSaints[santoselect];
    let atackbox = document.getElementById('cb8');
    atackbox.src = santo.src;
    document.getElementById('saint2').src = santo.src1;

    let hp = document.getElementById('hp2');
    hp.innerHTML = "Hp: " + santo.hp;
    let hpbar = document.getElementById('p2');
    hpbar.max = santo.hp;
    hpbar.value = santo.hp;

    function skillOne(){
        skill(santo, 0, atackbox);
     }
     function skillTwo(){
        skill(santo, 1, atackbox);
     }
     function skillThree(){
        skill(santo, 2, atackbox);
     }
    attacks[4].childNodes[0].innerHTML = santo.name;
    attacks[5].childNodes[0].innerHTML = santo.skills[0].name;
    attacks[6].childNodes[0].innerHTML = santo.skills[1].name;
    attacks[7].childNodes[0].innerHTML = santo.skills[2].name;
        attacks[5].addEventListener('click', skillOne , false);
        attacks[6].addEventListener('click', skillTwo , false);
        attacks[7].addEventListener('click', skillThree , false);
    attacks[5].childNodes[1].childNodes[0].src = santo.skills[0].icon;
    attacks[6].childNodes[1].childNodes[0].src = santo.skills[1].icon;
    attacks[7].childNodes[1].childNodes[0].src = santo.skills[2].icon;
}
function SAINT3(){
    let santoselect = saintsp1[2];
    let santo = GoldSaints[santoselect];
    let atackbox = document.getElementById('cb9');
    atackbox.src = santo.src;
    document.getElementById('saint3').src = santo.src1;

    let hp = document.getElementById('hp3');
    hp.innerHTML = "Hp: " + santo.hp;
    let hpbar = document.getElementById('p3');
    hpbar.max = santo.hp;
    hpbar.value = santo.hp;
    function skillOne(){
        skill(santo, 0, atackbox);
     }
     function skillTwo(){
        skill(santo, 1, atackbox);
     }
     function skillThree(){
        skill(santo, 2, atackbox);
     }
    attacks[8].childNodes[0].innerHTML = santo.name;
    attacks[9].childNodes[0].innerHTML = santo.skills[0].name;
    attacks[10].childNodes[0].innerHTML = santo.skills[1].name;
    attacks[11].childNodes[0].innerHTML = santo.skills[2].name;
        attacks[9].addEventListener('click', skillOne , false);
        attacks[10].addEventListener('click', skillTwo , false);
        attacks[11].addEventListener('click', skillThree , false);
    attacks[9].childNodes[1].childNodes[0].src = santo.skills[0].icon;
    attacks[10].childNodes[1].childNodes[0].src = santo.skills[1].icon;
    attacks[11].childNodes[1].childNodes[0].src = santo.skills[2].icon;
}
function SAINT4(){
    let santoselect = saintsp2[0];
    let santo = GoldSaints[santoselect];
    let atackbox = document.getElementById('cb10');
    atackbox.src = santo.src;
    document.getElementById('saint4').src = santo.src1;
    let hp = document.getElementById('hp4');
    hp.innerHTML = "Hp: " + santo.hp;
    let hpbar = document.getElementById('p4');
    hpbar.max = santo.hp;
    hpbar.value = santo.hp;
    
    function skillOne(){
        skill(santo, 0, atackbox);
     }
     function skillTwo(){
        skill(santo, 1, atackbox);
     }
     function skillThree(){
        skill(santo, 2, atackbox);
     }
     attacks[12].childNodes[0].innerHTML = santo.name;
     attacks[13].childNodes[0].innerHTML = santo.skills[0].name;
     attacks[14].childNodes[0].innerHTML = santo.skills[1].name;
     attacks[15].childNodes[0].innerHTML = santo.skills[2].name;
         attacks[13].addEventListener('click', skillOne , false);
         attacks[14].addEventListener('click', skillTwo , false);
         attacks[15].addEventListener('click', skillThree , false);
     attacks[13].childNodes[1].childNodes[0].src = santo.skills[0].icon;
     attacks[14].childNodes[1].childNodes[0].src = santo.skills[1].icon;
     attacks[15].childNodes[1].childNodes[0].src = santo.skills[2].icon;
}
function SAINT5(){
    let santoselect = saintsp2[1];
    let santo = GoldSaints[santoselect];
    let atackbox = document.getElementById('cb11');
    atackbox.src = santo.src;
    document.getElementById('saint5').src = santo.src1;

    let hp = document.getElementById('hp5');
    hp.innerHTML = "Hp: " + santo.hp;
    let hpbar = document.getElementById('p5');
    hpbar.max = santo.hp;
    hpbar.value = santo.hp;
    function skillOne(){
        skill(santo, 0, atackbox);
     }
     function skillTwo(){
        skill(santo, 1, atackbox);
     }
     function skillThree(){
        skill(santo, 2, atackbox);
     }
     attacks[16].childNodes[0].innerHTML = santo.name;
     attacks[17].childNodes[0].innerHTML = santo.skills[0].name;
     attacks[18].childNodes[0].innerHTML = santo.skills[1].name;
     attacks[19].childNodes[0].innerHTML = santo.skills[2].name;
         attacks[17].addEventListener('click', skillOne , false);
         attacks[18].addEventListener('click', skillTwo , false);
         attacks[19].addEventListener('click', skillThree , false);
     attacks[17].childNodes[1].childNodes[0].src = santo.skills[0].icon;
     attacks[18].childNodes[1].childNodes[0].src = santo.skills[1].icon;
     attacks[19].childNodes[1].childNodes[0].src = santo.skills[2].icon;
}
function SAINT6(){
let santoselect = saintsp2[2];
let santo = GoldSaints[santoselect];
let atackbox = document.getElementById('cb12');
atackbox.src = santo.src;
document.getElementById('saint6').src = santo.src1;

let hp = document.getElementById('hp6');
    hp.innerHTML = "Hp: " + santo.hp;
    let hpbar = document.getElementById('p6');
    hpbar.max = santo.hp;
    hpbar.value = santo.hp;
function skillOne(){
    skill(santo, 0, atackbox);
 }
 function skillTwo(){
    skill(santo, 1, atackbox);
 }
 function skillThree(){
    skill(santo, 2, atackbox);
 }
attacks[20].childNodes[0].innerHTML = santo.name;
attacks[21].childNodes[0].innerHTML = santo.skills[0].name;
attacks[22].childNodes[0].innerHTML = santo.skills[1].name;
attacks[23].childNodes[0].innerHTML = santo.skills[2].name;
    attacks[21].addEventListener('click', skillOne , false);
    attacks[22].addEventListener('click', skillTwo , false);
    attacks[23].addEventListener('click', skillThree , false);
attacks[21].childNodes[1].childNodes[0].src = santo.skills[0].icon;
attacks[22].childNodes[1].childNodes[0].src = santo.skills[1].icon;
attacks[23].childNodes[1].childNodes[0].src = santo.skills[2].icon;
}


  for(el of charbtn){       
    el.childNodes[1].onmouseover = function(e){
        e.target.style.backgroundImage = "url('./images/glow.png')"; 
        e.target.style.backgroundPosition = "center";
  }
  el.childNodes[1].onmouseout = function(e){
    var ide = e.target.parentElement.id;
    if(saints[ide-1]==false){
        e.target.style.backgroundImage = "";
    }    
}
}
    for(elemento of charbtn){
        elemento.addEventListener("mouseover", selectSaint, false);
        elemento.addEventListener("click", choiseSaint, false);
        elemento.addEventListener("mouseout", outImage, false);
        elemento.addEventListener("mouseover", checkButtons, true);    
    }
    document.getElementById("bt2").addEventListener("click",boton2, false);
    document.getElementById("bt3").addEventListener("click",boton3, false);
    
}

