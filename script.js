    //document.body.style.backgroundColor="#4A4562"
    document.body.color="white"
    document.body.style.padding="20px"
    document.body.style.border="dotted"

    var h1=document.createElement("h1");
    h1 .innerHTML="Pokemon charecteristics";
    h1.style.textAlign="center";
    h1.style.marginTop="30px";
    //h1.style.color="white"
    h1.style.fontStretch="115%";
    h1.style.border="dotted"

    var linebr=document.createElement("br");

    var row1=document.createElement("div");
    row1.setAttribute("class","row");
    row1.style.marginLeft="20%";
    row1.style.textAlign="center";
    row1.style.color="blue"

    var colS1=document.createElement("div");
    colS1.setAttribute("class","col-sm-2");
    
    var pS1=document.createElement("p");
    pS1.innerHTML="SI No";

    var col1=document.createElement("div");
    col1.setAttribute("class","col-sm-2");
    
    var p1=document.createElement("p");
    p1.innerHTML="Name";
    
    var col2=document.createElement("div");
    col2.setAttribute("class","col-sm-4");
    
    var p2=document.createElement("p");
    p2.innerHTML="Moves";
    
    var col3=document.createElement("div");
    col3.setAttribute("class","col-sm-2");
    
    var p3=document.createElement("p");
    p1.style.textDecorationStyle="bold"
    p3.innerHTML="Weight"


    var linebr=document.createElement("br");
    var hr=document.createElement("hr");

    var div2=document.createElement("div");
    div2.setAttribute("class","row")
    div2.style.margin="20px";
    div2.style.textAlign="center";

    var colBtn=document.createElement("div");
    colBtn.setAttribute("class","col-sm-12");

    /*var count=5;
    for (var i=1;i<=count;i++){*/
        var button=document.createElement("button");
        button.setAttribute("type","button");
        button.classList.add("btn","btn-primary");
        button.id="mybtn"
        button.style.marginTop="10px"
        button.innerHTML="Search For Pokemon!!!";
       // button.value= i;
        button.addEventListener("click", bar);   
        
   // }
   colBtn.append(button,hr);
   div2.append(colBtn);
    col3.append(p3);
    col2.append(p2);
    col2.append(p2);
    col1.append(p1);
    colS1.append(pS1)
    row1.append(colS1,col1,col2,col3);
    document.body.append(h1,div2,row1,hr);

async function bar(){
    
    //let btntext=document.getElementById("mybtn").value;
    //console.log(`btntext ${btntext}`)

    //var limit=btntext*10
    let url=`https://pokeapi.co/api/v2/pokemon?limit=50&offset=50`;
    console.log(url);
    
    let res=await fetch(url);
    //console.log("res "+res);
   
    let res1= await res.json();
    //console.log("res1 "+res1.results);
   
    for(var i in res1.results){
    //console.log(await (await fetch(res1.results[i].url)).json());
    var rowV1=document.createElement("div");
    rowV1.setAttribute("class","row");
    rowV1.style.marginLeft="20%";
    rowV1.style.textAlign="center";
   
    
    var colS1=document.createElement("div");
    colS1.setAttribute("class","col-sm-2");
    
    var pS1=document.createElement("p");
    pS1.innerHTML=i;

    var colV1=document.createElement("div");
    colV1.setAttribute("class","col-sm-2");
    
    var pV1=document.createElement("p");
    pV1.innerHTML=res1.results[i].name;
    
    var res2=await(await fetch(res1.results[i].url)).json();      
    //console.log(res2.moves[i].move.name)
        
    var colV2=document.createElement("div");
    colV2.setAttribute("class","col-sm-4");
    
    var pV2=document.createElement("p");
    pV2.innerHTML=res2.moves[i].move.name;
    
    var colV3=document.createElement("div");
    colV3.setAttribute("class","col-sm-2");
    
    var pV3=document.createElement("p");
    pV3.innerHTML=res2.weight;
    
    var linebr=document.createElement("br");
    
    colV3.append(pV3);
    colV2.append(pV2);
    colV1.append(pV1);
    colS1.append(pS1);
    rowV1.append(colS1,colV1,colV2,colV3)
    document.body.append(rowV1,linebr);
    }
    //rowV1.innerHTML=""
}

