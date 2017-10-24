"use_strict";

import "../style/css/main.css";

import {specialVar, 
        routeHandler, 
        dataGetter, 
        convertJSONData, 
        charBoxBuilder, 
        popStateHandler,
        navDivDragger,
        noSuch,
        menuClick
        } from  "../js/test.js";

window.addEventListener("popstate", popStateHandler.popFunc);

//console.log(document.querySelectorAll("li"));
menuClick.setLiFunc(document.querySelectorAll("li"));

navDivDragger.addDrag();

//console.log(routeHandler.splitUrl(routeHandler.theUrl()));
//console.log(routeHandler.theUrl().split("/"));

switch(routeHandler.splitUrl(routeHandler.theUrl())[2])
    {
        case "ff6":
            console.log("Use FF6 Characters");
            //console.log(location.pathname);
            //console.log(routeHandler.splitUrl(routeHandler.theUrl())[2])
            dataGetter.makeCall(routeHandler.splitUrl(routeHandler.theUrl())[2]);
            break;
        case "ff5":
            console.log("Use FF5 Characters");
            //console.log(location.pathname);
            //console.log(routeHandler.splitUrl(routeHandler.theUrl())[2])
            dataGetter.makeCall(routeHandler.splitUrl(routeHandler.theUrl())[2]);
            break;
        default:
            console.log(location.pathname);
            dataGetter.makeCall("Testy");
    }
