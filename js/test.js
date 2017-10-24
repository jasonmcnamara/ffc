import * as Images from "../js/imageList.js";

var specialVar = (function(){
    function test(){
        console.log("From test()");
    }

    var aValue = 5;

    return {
        aValue: aValue,
        testString : "testString"
    };

}());

var routeHandler = (function(){
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

var dataGetter = (function(){
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
                    switch(dataBruh)
                    {
                        case "ff6":
                            console.log("from here ff6");
                            charBoxBuilder.buildTheBoxes(convertJSONData.convert(ajaxCall.responseText)[dataBruh]['characterNames'], 
                                                            convertJSONData.convert(ajaxCall.responseText)[dataBruh]['characterBio']);
                            break;
                        case "ff5":
                            console.log("from here ff5");
                            charBoxBuilder.buildTheBoxes(convertJSONData.convert(ajaxCall.responseText)[dataBruh]['characterNames']);
                            break;
                        default:
                            console.log("From default");
                            noSuch.runSorry();
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

var convertJSONData = (function(){
    var convert = function(x){
        return JSON.parse(x);
    }

    return {
        convert: convert
    }
}());

var charBoxBuilder = (function(){
    var buildTheBoxes = function(x, y){//the x is the list of character names from getChars, y is their bio
        var mainDiv = document.querySelector("[name=main-div]");

        //var theHeader = document.createElement("h1");
        //theHeader.innerText = "The Characters Of Final Fantasy";
        //theHeader.className += " center-text";
        //console.log(theHeader);
        //mainDiv.appendChild(theHeader);
        //console.log(mainDiv.childNodes);
        //mainDiv.insertBefore(theHeader, mainDiv.childNodes[3]);

        var characterBox = document.createElement("div");
        characterBox.className += " character-box";
        characterBox.id = "character-box";
        //characterBox.style.backgroundColor = "cyan";
        //characterBox.style.boxSizing = "border-box";
        //characterBox.style.border = "solid black 3px";
        //characterBox.style.margin = "0 auto 0 auto";
        characterBox.className += " overflow-auto";
        //characterBox.style.position = "relative";
        //mainDiv.appendChild(characterBox);
        
        var characterSlot = [];

        var characterBio = [];

        var parentHeight;

        var imageTest = [];

        var imageTestFunc = [];

        var testNumber = 0;

        var clickFunc = function(event){
            //console.log(event);
            //console.log(this);
            //console.log(this.getAttribute("name"));
            //console.log(characterBio[this.getAttribute("name")]);
            if(characterBio[this.getAttribute("name")])
            {
                alert(characterBio[this.getAttribute("name")]);
            }
        }

        //console.log(x.length - 1);

        for(var i = 0;i < (x.length);i++)
        {

            //console.log(x[i]);
            //console.log(testNumber);
           
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
            //characterSlot[i].style.backgroundImage = 'url("http://localhost:81/ffc/dist/'+Images[z]+'")';
            //characterSlot[i].style.backgroundImage = `url("./images/jpg/`+characterNames[i]+`.jpg")`;
            characterSlot[i].style.backgroundSize = "contain";
            characterSlot[i].style.backgroundRepeat = "no-repeat";
            characterSlot[i].style.backgroundPosition = "center";
            /* characterSlot[i].innerHTML = `<div class="character-wrapper"><h1 class="center-text"><span>`+characterNames[i]+`</span></h1><div>`; */
            characterSlot[i].style.float = "left";
            if(y)
            {
            characterBio[x[i]] = y[i];
            }    
            characterSlot[i].addEventListener("click", clickFunc);

            characterBox.appendChild(characterSlot[i]);
            //console.log(characterBox);

            //console.log(document.querySelector("[name="+x[i]+"]"));

            //console.log(i)
            imageTest[i] = new Image();
            //console.log(imageTest[i]);
            
            

            imageTestFunc[i] = function(){

                //console.log(this);
                //console.log(imageTest);
                characterSlot[testNumber].appendChild(imageTest[testNumber]);
                //console.log(testNumber);
                if (testNumber === (x.length - 1))
                {
                    //console.log("yooooo");
                    var loadingDiv = document.querySelector("[name=loading]");
                    if(loadingDiv)
                    {
                        mainDiv.removeChild(loadingDiv);
                    }

                    //console.log(navDivDragger.returnIsGrown());
                    if(navDivDragger.returnIsGrown())
                    {
                        characterBox.style.transform = "translate(0, 170px)";
                    }
                    
                    mainDiv.appendChild(characterBox);
                    if(!navDivDragger.returnIsGrown())
                    {
                        //console.log("from is nav");
                        characterBox.className += " applyCharAni";
                    }
                    else{
                        characterBox.className += " still-loading-characterbox";
                    }
                }
                //console.log(testNumber);
                //console.log(x.length);
                testNumber++;
                
                
            }

            //imageTest[i].onload = imageTestFunc[i];

            if(imageTest[i].addEventListener)
            {
                imageTest[i].addEventListener("load", imageTestFunc[i]);                
            }
            else
            {
                imageTest[i].attachEvent("onload", imageTestFunc[i]);                
            }

            //imageTest[i].src = "http://localhost:81/ffc/dist/"+Images[z];
            imageTest[i].src = "https://mycanvas.000webhostapp.com/ffc/dist/"+Images[z];

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

    return {
        buildTheBoxes : buildTheBoxes
    }
}());

var popStateHandler = (function(){

    var popFunc = function(event){
        console.log("From popStateHandler");
        event.preventDefault();
    }

    return {
        popFunc: popFunc
    }

}());

var navDivDragger = (function(){

    var isGrown = false;

    var addDrag = function(){

        var dragFunc = function(){
            console.log(this);

            var origin = function(){
                return event.clientY;
                }

            console.log(origin());

            this.style.height = event.clientY+"px";
        }


        var beenGrown = false;

        var liFunc = function(event){
            event.stopPropagation();
        }

        var testEl = document.querySelector("h1");
        //console.log(testEl);

        

        var shrinkFunc = function(element){
            
            //this.classList.remove("grow-me");
            //this.className += " shrink-me";

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

            testEl.classList.remove("move-down");
            testEl.className += " move-up";
            if(testEl2)
            {
            testEl2.classList.remove("move-down");
            testEl2.className += " move-up";
            }
            this.childNodes[3].classList.remove("li-text-in");
            this.childNodes[3].className += " fade-out-display";

            var theLi = document.querySelectorAll("li");
            for(var i=0;i<4;i++)
            {
                theLi[i].classList.remove("test-class");
            }

            this.removeEventListener("click", shrinkFunc);
            this.addEventListener("click", growFunc);
        }

        var growFunc = function(element){

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
            this.childNodes[3].classList.remove("no-display");
            this.childNodes[3].classList.remove("fade-out-display");
            this.childNodes[3].className += " li-text-in";
            var theLi = document.querySelectorAll("li");
            for(var i = 0;i < 4; i++)
            {
                theLi[i].className += " test-class";
                theLi[i].addEventListener("click", liFunc);
            }
            
            this.removeEventListener("click", growFunc);
            this.addEventListener("click", shrinkFunc);
        }

        if(document.addEventListener)
        {
            if(document.querySelector("nav"))
            {
                //console.log(document.querySelector("nav").childNodes);
                document.querySelector("nav").addEventListener("click", growFunc);
            }
            else
            {
                console.log("No querySelector");
            }
        }
        else
        {
            console.log("from attachEvent");
            document.getElementsByTagName("nav").attachEvent("click", growFunc);
        }
    }

    var returnIsGrown = function(){
        return isGrown;
    }

    return {
        addDrag: addDrag,
        returnIsGrown: returnIsGrown
    }
}());

var noSuch = (function(){

    var sorry = document.createElement("div");
    sorry.style.backgroundColor = "yellow";
    sorry.id = "sorry";
    sorry.style.height = "500px";
    sorry.style.width = "100%";
    sorry.innerHTML = "<p>Sorry this is not an option</p>";

    var mainDiv = document.querySelector("[name=main-div]");

    var runSorry = function(){
        var loading = document.querySelector("[name=loading]");
        if(loading)
        {
            mainDiv.removeChild(loading);
        }
        mainDiv.appendChild(sorry);
    }

    return {
        runSorry: runSorry
    }
}());

var menuClick = (function(){
    
    var setLiFunc = function(x){

        //console.log("from setLiFunc");

        //console.log(x);
        //console.log(x.length);

        var liFunc = function(){
            //console.log(this);
            history.pushState(null, null, "/ffc/ff5/");
            alert("Load new state now");
            //console.log(document.querySelector("#main-div").childNodes);
            if(document.querySelector("#character-box"))
            {
            document.querySelector("#main-div").removeChild(document.querySelector("#character-box"));
            }
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

export {specialVar,
        routeHandler, 
        dataGetter, 
        convertJSONData, 
        charBoxBuilder, 
        popStateHandler,
        navDivDragger,
        noSuch,
        menuClick
        };