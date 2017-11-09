import * as Images from "../js/imageList.js";

var ffc = {};

ffc.storeLoadingEl = (function(){

    var loadingEl;

    var getLoadingEl = function(){
        loadingEl = document.querySelector("[name=loading]");
    }

    var returnLoadingEl = function(){
        return loadingEl;
    }

    return {
        getLoadingEl : getLoadingEl,
        returnLoadingEl : returnLoadingEl
    }
}());

ffc.specialVar = (function(){
    var routeArray = ["ff6","ff5","ff4","ff7"];

    var returnRouteArray = function(){
        return routeArray;
    }

    var allLi = document.querySelectorAll("li");

    return {
        returnRouteArray: returnRouteArray
    };

}());

ffc.routeHandler = (function(){
    var routeTest = function(){
        console.log("From routeTest");
    }

    var theUrl = function(){
        return document.location.pathname;
    }

    var splitUrl = function(theUrl){
        return theUrl.split("/");
    }

    return {
        routeTest: routeTest,
        aSecondTest : "aSecondTest",
        theUrl: theUrl,
        splitUrl: splitUrl
    }

}());

ffc.dataGetter = (function(){
    var makeCall = function(x){//x is the url pathname [2]

        var ajaxCall = new XMLHttpRequest();

        if(!ajaxCall)
        {
            console.log("Cannot make call");
        }

        ajaxCall.onreadystatechange = onResponse;

        ajaxCall.onprogress = progressing;

        var testObj = {
            "testStuff" : "stuffTest"
        }

        ajaxCall.open("GET", "/ffc/api/getChars.php?x="+x+"&preventCache="+new Date());

        ajaxCall.send();

        function progressing(){
            //console.log("Progessing");
            //console.log(ajaxCall.responseText);
        }

        function onResponse(){

            if(ajaxCall.readyState === XMLHttpRequest.DONE)
            {
                if(ajaxCall.status === 200)
                {
                    //console.log("Success");
                    //console.log(ajaxCall);
                    //console.log(JSON.parse(ajaxCall.responseText));
                    //console.log(JSON.parse(ajaxCall.responseText)["testCheck"]);
                    if(JSON.parse(ajaxCall.responseText)["theGetDataBruh"])
                    {
                    //console.log(JSON.parse(ajaxCall.responseText)["theGetDataBruh"]);
                    var dataBruh = JSON.parse(ajaxCall.responseText)["theGetDataBruh"];
                    //console.log(dataBruh);
                    //console.log(ajaxCall.responseText);

                    var isACharBox = document.querySelector("#character-box");

                    switch(dataBruh)
                    {
                        case "ff6":
                        
                        case "ff5":

                        case "ff4":

                        case "ff7":
                            console.log("from here "+dataBruh);
                            console.log(ffc.convertJSONData.convert(ajaxCall.responseText)[dataBruh]);
                            if(ffc.convertJSONData.convert(ajaxCall.responseText)[dataBruh]){
                            ffc.charBoxBuilder.buildTheBoxes(ffc.convertJSONData.convert(ajaxCall.responseText)[dataBruh]['characterNames'], 
                                                            ffc.convertJSONData.convert(ajaxCall.responseText)[dataBruh]['characterBio'],
                                                            dataBruh);
                            }
                            else
                            {
                                ffc.noSuch.runSorry();
                            }
                            ffc.stateHandler.stateSetter(dataBruh);
                            break;
                        default:
                            console.log("From default");
                            ffc.noSuch.runSorry();
                            ffc.stateHandler.stateSetter(dataBruh);
                    }
                }

                }
                else
                {
                    console.log("Error with response");
                }
            }
        }
    }

        return {
            makeCall: makeCall
        }

}());

ffc.convertJSONData = (function(){
    var convert = function(x){
        return JSON.parse(x);
    }

    return {
        convert: convert
    }
}());

ffc.charBoxBuilder = (function(){

    var characterSlot = [];

    var characterBio = [];

    var imageTest = [];

    var imageTestFunc = [];

    var parentHeight;

    var testNumber = 0;

    var mainDiv = document.querySelector("[name=main-div]");

    var clickFunc = function(event){
        if(characterBio[this.getAttribute("name")])
        {
            console.log(characterBio[this.getAttribute("name")]);
        }
    }

    var fillTheBoxes = function(x, y, zz)
    {

        

        var theCount = x.length;

        for(var i = 0;i < (theCount);i++)
        {
            var n = x[i].indexOf('-');
            var z = x[i].substring(0, n != -1 ? n : x[i].length);

            characterSlot[i] = document.createElement("div");
            characterSlot[i].setAttribute("name", x[i]);
            characterSlot[i].className += " character";
            characterSlot[i].style.width = "50%";
            characterSlot[i].style.height = "80px";
            characterSlot[i].style.boxSizing = "border-box";
            characterSlot[i].style.border = "solid black 1px";
            characterSlot[i].style.backgroundColor = "white";
            characterSlot[i].style.backgroundSize = "contain";
            characterSlot[i].style.backgroundRepeat = "no-repeat";
            characterSlot[i].style.backgroundPosition = "center";
            characterSlot[i].style.float = "left";
            
            if(y)
            {
            characterBio[x[i]] = y[i];
            }    
            characterSlot[i].addEventListener("click", clickFunc);

            zz.appendChild(characterSlot[i]);
            
            imageTest[i] = new Image();
            
            imageTestFunc[i] = function(){

                characterSlot[testNumber].appendChild(imageTest[testNumber]);
                
                if (testNumber === (x.length - 1))
                {
                    
                    zz.classList.remove("no-height");
                    //if(ffc.navDivDragger.returnIsGrown())
                    //{
                    //    zz.style.transform = "translate(0, 170px)";
                    //}
                    if(!ffc.navDivDragger.returnIsGrown())
                    {
                        zz.className += " applyCharAni";
                    }
                    else{
                        zz.className += " still-loading-characterbox";
                    }

                    console.log("right before");

                    var loadingDiv = document.querySelector("[name=loading]");
                    if(loadingDiv)
                    {
                        mainDiv.removeChild(loadingDiv);
                    }

                    if(!document.querySelector("#character-box")){
                    mainDiv.appendChild(zz);
                    }
                    
                    zz.style.opacity = 1;
                    
                    console.log(ffc.navDivDragger.returnIsGrown());
                    testNumber = 0;
                    return null;
                }
                testNumber++;                
            }

            if(imageTest[i].addEventListener)
            {
                imageTest[i].addEventListener("load", imageTestFunc[i]);                
            }
            else
            {
                imageTest[i].attachEvent("onload", imageTestFunc[i]);                
            }

            imageTest[i].src = "/ffc/dist/"+Images[z];

            function isEven(n) {
                /* If the character slot added is even I use this to check it, and then add to the character box height */
                return n % 2 == 0;
            }

            if(isEven(i))
            {
                /* adds the needed height for every new character row */
                var parent = characterSlot[i].parentNode;
                parentHeight += 80;
                parent.style.height = parentHeight+"px";
            }
        }
    }

    var buildTheBoxes = function(x, y, z){//the x is the list of character names from getChars, y is their bio, z is the FF title name
        
        if(!document.querySelector("#character-box")){
            console.log(characterBox);
            console.log("Hello from here");
            var characterBox = document.createElement("div");
            characterBox.className += " character-box";
            characterBox.id = "character-box";
            characterBox.className += " overflow-auto";
            characterBox.setAttribute("name", z);

            if(document.querySelector("#sorry")){
                mainDiv.removeChild(document.querySelector("#sorry"));
            }
            fillTheBoxes(x, y, characterBox);
        }
        else
        {
            console.log("Already a box in here");
            fillTheBoxes(x, y, document.querySelector("#character-box"));
        }
    }

    return {
        buildTheBoxes : buildTheBoxes,
        fillTheBoxes : fillTheBoxes
    }
}());

ffc.popStateHandler = (function(){

    var popFunc = function(event){
        console.log("From popStateHandler");
        event.preventDefault();
    }

    return {
        popFunc: popFunc
    }

}());

ffc.navDivDragger = (function(){

    var isGrown = false;

    var noSuch;
    
    var testEl = document.querySelector("h1");

    var liFunc = function(event){
        event.stopPropagation();
    }

    var shrinkFunc = function(element){
        
                    console.log("AYYYYY");
        
                    noSuch = document.querySelector("#sorry");
                    
                    isGrown = false;
        
                    var testEl2 = document.querySelector("#character-box");
                    //console.log(testEl2);
                    //if(!testEl2){
                    //    return null;
                    //}
        
                    var loading = document.querySelector("[name=loading]");
                    if(loading)
                    {
                        loading.classList.remove("move-down");
                        loading.className += " move-up";
                    }
                    else
                    {
                        //document.querySelector("[name=main-div]").appendChild(ffc.storeLoadingEl.returnLoadingEl());
                        ffc.storeLoadingEl.returnLoadingEl().classList.remove("move-down");
                        ffc.storeLoadingEl.returnLoadingEl().className += " move-up";
                    }
        
                    testEl.classList.remove("move-down");
                    testEl.className += " move-up";
                    if(testEl2)
                    {
                    testEl2.classList.remove("move-down");
                    testEl2.className += " move-up";
                    }
        
                    var ul = document.querySelector("ul");
        
                    ul.classList.remove("li-text-in");
                    ul.className += " fade-out-display";
        
                    setTimeout(function(){
                        ul.className += " no-display";
                    }, 150);
        
                    var theLi = document.querySelectorAll("li");
                    for(var i=0;i<4;i++)
                    {
                        theLi[i].classList.remove("test-class");
                    }
        
                    if(noSuch)
                    {
                    noSuch.classList.remove("move-down");
                    noSuch.className += " move-up";
                    }
        
                    var nav = document.querySelector(".menu-icon");
                    nav.removeEventListener("click", shrinkFunc);
                    nav.addEventListener("click", growFunc);
                }

    var growFunc = function(element){

                                console.log(this);
                                console.log(document.querySelector(".menu-icon"));
                    
                                noSuch = document.querySelector("#sorry");
                    
                                //this.classList.remove("shrink-me");
                                //this.className += " grow-me";
                    
                                isGrown = true;
                    
                                document.querySelector("#header").style.opacity = 1;
                    
                                var testEl2 = document.querySelector("#character-box");
                                //console.log(testEl2);
                                //if(!testEl2){
                                //    return null;
                                //}
                    
                                var loading = document.querySelector("[name=loading]");
                                if(loading)
                                {
                                    loading.classList.remove("move-up");
                                    loading.className += " move-down";
                                }
                    
                                
                                testEl.classList.remove("move-up");
                                testEl.className += " move-down";
                                if(testEl2)
                                {
                                testEl2.classList.remove("applyCharAni");
                                testEl2.classList.remove("move-up");
                                testEl2.className += " move-down";
                                }
                                var ul = document.querySelector("ul");
                                ul.classList.remove("no-display");
                                ul.classList.remove("fade-out-display");
                                ul.className += " li-text-in";
                                var theLi = document.querySelectorAll("li");
                                for(var i = 0;i < 4; i++)
                                {
                                    theLi[i].className += " test-class";
                                    theLi[i].addEventListener("click", liFunc);
                                }
                    
                                if(noSuch)
                                {
                                noSuch.classList.remove("move-up");
                                noSuch.className += " move-down";
                                }
                                var nav = document.querySelector(".menu-icon");
                                nav.removeEventListener("click", growFunc);
                                nav.addEventListener("click", shrinkFunc);
                            }

    
                            var addDrag = function(){

        

        
        //console.log(testEl);
        
        

        

        

        if(document.addEventListener)
        {
            if(document.querySelector(".menu-icon"))
            {
                //console.log(document.querySelector("nav").childNodes);
                document.querySelector(".menu-icon").addEventListener("click", growFunc);
            }
            else
            {
                console.log("No querySelector");
            }
        }
        else
        {
            console.log("from attachEvent");
            document.getElementsByTagName(".menu-icon").attachEvent("click", growFunc);
        }
    }

    var returnIsGrown = function(){
        return isGrown;
    }

    return {
        addDrag: addDrag,
        returnIsGrown: returnIsGrown,
        shrinkFunc: shrinkFunc
    }
}());

ffc.noSuch = (function(){

    var sorry = document.createElement("div");
    sorry.id = "sorry";
    sorry.style.height = "500px";
    sorry.style.width = "100%";
    sorry.style.textAlign = "center";
    sorry.innerHTML = "<p>Sorry this is not an option</p>";
    

    var mainDiv = document.querySelector("[name=main-div]");

    var runSorry = function(){
        var loading = document.querySelector("[name=loading]");
        var charbox = document.querySelector("#character-box");
        
        if(loading)
        {
            mainDiv.removeChild(loading);
        }
        if(charbox){
            mainDiv.removeChild(charbox);
        }
        if(ffc.navDivDragger.returnIsGrown()){
            sorry.classList.remove("move-down");
            sorry.className += " still-loading-characterbox";
        }
        mainDiv.appendChild(sorry);
    }

    return {
        runSorry: runSorry
    }
}());

ffc.menuClick = (function(){

    
    
    var setLiFunc = function(x){

        var liFunc = function(event){
            console.log(ffc.stateHandler.returnState());
            console.log(this.getAttribute("name"));

            ffc.navDivDragger.shrinkFunc();

            if(this.getAttribute("name") === ffc.stateHandler.returnState())
            {
                console.log("chyup");
                return null;
            }
            var mainDiv = document.querySelector("[name=main-div]");
            var characterBox = document.querySelector("#character-box");
            console.log(this.getAttribute("name"));
            if(characterBox){
                console.log("there is a character box");
                console.log(ffc.storeLoadingEl.returnLoadingEl());
                characterBox.style.opacity = 0;
                characterBox.className += " no-height";
                characterBox.innerHTML = "";
                characterBox.classList.remove("move-down");
                characterBox.classList.remove("still-loading-characterbox");
                characterBox.setAttribute("name", this.getAttribute("name"));
                mainDiv.appendChild(ffc.storeLoadingEl.returnLoadingEl());
            }
            else{
                mainDiv.appendChild(ffc.storeLoadingEl.returnLoadingEl());
            }
            
            
                history.pushState("", "", this.getAttribute("name"));
                ffc.dataGetter.makeCall(this.getAttribute("name"));
                console.log(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2]);
            
        }

        if(x)
        {
            for(i = x.length - 1; i > -1; i--)
            {
                //console.log(i);
                //console.log(x[i]);
                x[i].style.cursor = "pointer";
                x[i].addEventListener("click", liFunc);
            }
        }
    }
    return {
        setLiFunc: setLiFunc
    }

}());

ffc.stateHandler = (function(){
    var currentState = "Not yet set";

    var callDataGetter = function(x)
    {
        ffc.dataGetter.makeCall(x);
    }

    var stateSetter = function(x){
        currentState = x;
        return null;
    }

    var returnState = function(){
        return currentState;
    }

    return {
        stateSetter: stateSetter,
        returnState: returnState
    }
}());

export { ffc };