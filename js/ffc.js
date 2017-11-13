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


    var mainDiv = document.querySelector("[name=main-div]");

    var charBox;

    var loader;

    var sorry;

    var boxChild = {};

    var makeCall = function(x){//x is the url pathname [2]

        boxChild = ffc.charBoxBuilder.returnContentObj();
        
        if(boxChild[x])
        {
            charBox = document.querySelector("#character-box");
            if(charBox)
            {
            mainDiv.removeChild(charBox);
            }
            loader = document.querySelector("[name=loading]");
            if(loader)
            {
            mainDiv.removeChild(loader);
            }
            sorry = document.querySelector("#sorry");
            if(sorry){
                mainDiv.removeChild(sorry);
            }

            boxChild[x].className += " applyCharAni";
            boxChild[x].classList.remove("no-height");
            mainDiv.appendChild(boxChild[x]);

            ffc.stateHandler.stateSetter(x);
            return null;
        }

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
                    if(JSON.parse(ajaxCall.responseText)["theGetDataBruh"])
                    {
                        var dataBruh = JSON.parse(ajaxCall.responseText)["theGetDataBruh"];
                        

                        var isACharBox = document.querySelector("#character-box");

                        switch(dataBruh)
                        {
                            case "ff6":
                            
                            case "ff5":

                            case "ff4":

                            case "ff7":
                                if(ffc.convertJSONData.convert(ajaxCall.responseText)[dataBruh]){
                                    ffc.charBoxBuilder.buildTheBoxes(ffc.convertJSONData.convert(ajaxCall.responseText)[dataBruh]['characterNames'], 
                                                                    ffc.convertJSONData.convert(ajaxCall.responseText)[dataBruh]['characterBio'],
                                                                    dataBruh, x);
                                    }
                                else
                                {
                                    ffc.noSuch.runSorry();
                                }
                                ffc.stateHandler.stateSetter(dataBruh);
                                break;
                            default:
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

    var contentObj = {};

    var mainDiv = document.querySelector("[name=main-div]");

    var clickFunc = function(event){
        if(characterBio[this.getAttribute("name")])
        {
            console.log(characterBio[this.getAttribute("name")]);
        }
    }

    var fillTheBoxes = function(x, y, zz, keyName)
    {

        while(zz.hasChildNodes())
        {
            zz.removeChild(zz.lastChild);
        }


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
                    
                    if(!ffc.navDiv.returnIsGrown())
                    {
                        zz.className += " applyCharAni";
                    }
                    else
                    {
                        zz.className += " still-loading-characterbox";
                    }

                    var loadingDiv = document.querySelector("[name=loading]");
                    if(loadingDiv)
                    {
                        mainDiv.removeChild(loadingDiv);
                    }

                    if(!document.querySelector("#character-box")){
                    mainDiv.appendChild(zz);
                    
                    }
                    
                    zz.style.opacity = 1;

                    if(!contentObj[keyName])
                    {
                        contentObj[keyName] = zz.cloneNode(true);
                    }
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

    var buildTheBoxes = function(x, y, z, keyName){//the x is the list of character names from getChars, y is their bio, z is the FF title name
        
        if(!document.querySelector("#character-box")){
            var characterBox = document.createElement("div");
            characterBox.className += " character-box";
            characterBox.id = "character-box";
            characterBox.className += " overflow-auto";
            characterBox.setAttribute("name", z);

            if(document.querySelector("#sorry")){
                mainDiv.removeChild(document.querySelector("#sorry"));
            }
            fillTheBoxes(x, y, characterBox, keyName);
        }
        else
        {
            fillTheBoxes(x, y, document.querySelector("#character-box"), keyName);
        }
    }

    var returnContentObj = function(){
        return contentObj;
    }

    return {
        buildTheBoxes : buildTheBoxes,
        fillTheBoxes : fillTheBoxes,
        returnContentObj : returnContentObj
    }
}());

ffc.popStateHandler = (function(){

    var popFunc = function(event){
        console.log("From popStateHandler");
        event.preventDefault();

        switch(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2])
        {
            case "ff6":
                ffc.dataGetter.makeCall(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2]);
                break;
            case "ff5":
                ffc.dataGetter.makeCall(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2]);
                break;
            default:
                ffc.dataGetter.makeCall("Testy");
        }
    }

    return {
        popFunc: popFunc
    }

}());

ffc.navDiv = (function(){

    var isGrown = false;

    var noSuch;
    
    var testEl = document.querySelector("h1");

    var liFunc = function(event){
        event.stopPropagation();
    }

    var shrinkFunc = function(element){
        
                    noSuch = document.querySelector("#sorry");
                    
                    isGrown = false;
        
                    var testEl2 = document.querySelector("#character-box");
        
                    var loading = document.querySelector("[name=loading]");
                    if(loading)
                    {
                        loading.classList.remove("move-down");
                        loading.className += " move-up";
                    }
                    else
                    {
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

                                noSuch = document.querySelector("#sorry");
                    
                                isGrown = true;
                    
                                document.querySelector("#header").style.opacity = 1;
                    
                                var testEl2 = document.querySelector("#character-box");
                    
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


    var returnIsGrown = function(){
        return isGrown;
    }

    var addMenu = function(){
        var navBtn = document.querySelector(".menu-icon");

        navBtn.addEventListener("click", growFunc);
    }
    
    return {
        returnIsGrown: returnIsGrown,
        shrinkFunc: shrinkFunc,
        addMenu: addMenu
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
        if(ffc.navDiv.returnIsGrown()){
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
            
            ffc.navDiv.shrinkFunc();

            if(this.getAttribute("name") === ffc.stateHandler.returnState())
            {
                return null;
            }
            var mainDiv = document.querySelector("[name=main-div]");
            var characterBox = document.querySelector("#character-box");
            
            if(characterBox){
                mainDiv.removeChild(characterBox);
            }
            
            
            mainDiv.appendChild(ffc.storeLoadingEl.returnLoadingEl());
            
                history.pushState("", "", this.getAttribute("name"));
                ffc.dataGetter.makeCall(this.getAttribute("name"));            
        }

        if(x)
        {
            for(i = x.length - 1; i > -1; i--)
            {
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