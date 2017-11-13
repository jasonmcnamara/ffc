"use_strict";

import "../style/css/main.css";

import { ffc } from  "../js/ffc.js";

window.addEventListener("popstate", ffc.popStateHandler.popFunc);

ffc.storeLoadingEl.getLoadingEl();

ffc.navDiv.addMenu();

ffc.menuClick.setLiFunc(document.querySelectorAll("li"));

switch(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2])
    {
        case "ff6":       
        case "ff5":
        case "ff7":
            ffc.dataGetter.makeCall(ffc.routeHandler.splitUrl(ffc.routeHandler.theUrl())[2]);
            break;
        default:
            ffc.dataGetter.makeCall("Testy");
    }
