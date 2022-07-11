let game = document.getElementById('game')

let game_elements = []

for(let i = 0; i < 6; i++ ){
    
    for (let j = 0; j < 7; j++){
        
        game.innerHTML += '<div id="'+i+j+'" class="game-element" onclick="oszlop(id)"></div>';
       
    }
   
}
    let foglalt = []
    let kor=true
    let piros = []
    let sarga = []
    let jatekvege = 0
    game.innerHTML+= '<div id="turno" ></div>'
function oszlop(id)
{
    
    if(jatekvege)
    {
        return
    }
    x = id[0];
    y = id[1];
    //console.log(x+"," +y);
    
    for(let i = 5; i> -1;i--){
        if(!foglalt.includes(i+''+y))
        {
            foglalt.push(i+''+y)
            if(kor)
            {
            document.getElementById(i+''+y).innerHTML = "<div class='bounce-in-top' style='z-index:-1; background-color: red; border-radius: 300px; border: 2px black solid; width: 140px; height: 140px; margin: auto; margin-top:3px'></div>";
            kor = false
            piros.push(i+''+y)
            
            }
            else
            {
            document.getElementById(i+''+y).innerHTML = "<div class='bounce-in-top' style='z-index:-1; background-color: yellow; border-radius: 300px; border: 2px black solid; width: 140px; height: 140px; margin: auto; margin-top:3px'></div>";
            kor = true
            sarga.push(i+''+y)
            
            }
            if(foglalt.length==42)
            {
                ellenorzes()
                vege()
                break
            }
            turn()
            break
        }
      
    }
            
    ellenorzes()
    
}
function ellenorzes()
{
    fuggoleges()
    
    vizszintes()
    atlo0()
    atlo1()
}
var vegeredmeny=0
function fuggoleges()
{
    for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 7; j++)
            {
                if (piros.includes(i+''+j) && piros.includes((i+1)+''+j) && piros.includes((i+2)+''+j) && piros.includes((i+3)+''+j))
                {
                    vegeredmeny = 1;
                    vege();
                }
               
              
                if (sarga.includes(i+''+j) && sarga.includes((i+1)+''+j) && sarga.includes((i+2)+''+j) && sarga.includes((i+3)+''+j))
                {
                    vegeredmeny = 2;
                    vege();
                }
            }
        }

}
function vizszintes()
{
    for (let i = 0; i < 6; i++)
        {
            for (let j = 0; j < 4; j++)
            {
               
                if (piros.includes(i+''+j) && piros.includes(i+''+(j+1)) && piros.includes(i+''+(j+2)) && piros.includes(i+''+(j+3)))
                {
                    vegeredmeny = 1;
                    vege()
                }
                
                if (sarga.includes(i+''+j) && sarga.includes(i+''+(j+1)) && sarga.includes(i+''+(j+2)) && sarga.includes(i+''+(j+3)))
                {
                    vegeredmeny = 2
                    vege()
                }
            }
        }

}
function atlo0()
{
    for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 4; j++)
            {
                
                if (piros.includes(i+''+j) && piros.includes((i+1)+''+(j+1)) && piros.includes((i+2)+''+(j+2)) && piros.includes((i+3)+''+(j+3)))
                {
                    vegeredmeny = 1;
                    vege()
                }
                
                if (sarga.includes(i+''+j) && sarga.includes((i+1)+''+(j+1)) && sarga.includes((i+2)+''+(j+2)) && sarga.includes((i+3)+''+(j+3)))
                {
                    vegeredmeny = 2
                    vege()
                }
            }
        }

}
function atlo1()
{
    for (let i = 3; i < 6; i++)
        {
            for (let j = 0; j < 4; j++)
            {
                
                if (piros.includes(i+''+j) && piros.includes((i-1)+''+(j+1)) && piros.includes((i-2)+''+(j+2)) && piros.includes((i-3)+''+(j+3)))
                {
                    vegeredmeny = 1;
                    vege()
                }
                
                if (sarga.includes(i+''+j) && sarga.includes((i-1)+''+(j+1)) && sarga.includes((i-2)+''+(j+2)) && sarga.includes((i-3)+''+(j+3)))
                {
                    vegeredmeny = 2
                    vege()
                }
            }
        }

}

let szin =true
function turn(){
    if(szin)
    {
        document.getElementById('turno').style.backgroundColor = "yellow";
        szin=false 
    }

    else
    {
        document.getElementById('turno').style.backgroundColor = "red"
        szin=true
    }
}



function vege()
{

    jatekvege = true;
    game.innerHTML += '<div id="veges" ></div>';
        if(vegeredmeny==1)
        document.getElementById('veges').innerHTML = '<h2 class="nyero" style="color: Red">A Piros játékos nyert</h2>'
        else if(vegeredmeny==2)
        document.getElementById('veges').innerHTML = '<h2 class="nyero" style="color: Yellow">A Sárga játékos nyert</h2>'   
        else    
        document.getElementById('veges').innerHTML = '<h2 class="nyero" style="color: Blue; Left: 75px">Döntetlen</h2>'

    document.getElementById('veges').innerHTML += '<div id="ujjatek" Onclick="ujjatek()"><div id="tolt"><h4 id="gomb">Új Játék</h4></div></div>'     
}
function ujjatek(){
    window.location.reload(true)
}