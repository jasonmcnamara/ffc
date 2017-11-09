"use_strict";

import "../style/css/main.css";

import { ffc } from  "../js/ffc.js";

/*
var justATest = routeHandler.splitUrl(window.location.pathname);

var stateTrigger = "Not yet set";
var subStateTrigger = "Not yet set";

console.log(justATest);

for(var i = (justATest.length - 1); i > -1; i--)
{
    if(specialVar.returnRouteArray().indexOf(justATest[i]) > -1)
    {
        console.log("Had a match at "+i+"!");
        console.log(specialVar.returnRouteArray().indexOf(justATest[i]));
        console.log(justATest[i]);
    }

}
*/
window.addEventListener("popstate", ffc.popStateHandler.popFunc);

ffc.storeLoadingEl.getLoadingEl();

console.log(ffc.storeLoadingEl.returnLoadingEl());

//console.log(document.querySelectorAll("li"));
ffc.menuClick.setLiFunc(document.querySelectorAll("li"));

ffc.navDivDragger.addDrag();

//console.log(routeHandler.splitUrl(routeHandler.theUrl()));
//console.log(routeHandler.theUrl().split("/"));

switch(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2])
    {
        case "ff6":
            console.log("Use FF6 Characters");
            //console.log(location.pathname);
            //console.log(routeHandler.splitUrl(routeHandler.theUrl())[2])
            //dataGetter.makeCall(routeHandler.splitUrl(routeHandler.theUrl())[2]);
            //ffc.stateHandler.stateSetter(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2]);
            ffc.dataGetter.makeCall(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2]);
            break;
        case "ff5":
            console.log("Use FF5 Characters");
            //console.log(location.pathname);
            //console.log(routeHandler.splitUrl(routeHandler.theUrl())[2])
            //dataGetter.makeCall(routeHandler.splitUrl(routeHandler.theUrl())[2]);
            //console.log(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl()).pop());
            ffc.dataGetter.makeCall(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2]);

            break;
        default:
            console.log(location.pathname);
            ffc.dataGetter.makeCall("Testy");
    }
