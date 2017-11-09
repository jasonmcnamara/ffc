<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width">
    <title>Cast of Final Fantasy v1.0</title>
    <style>

        @keyframes loadingFade {
            0%{
                opacity: 0;
            }
          
            100%{
                opacity: 1;
            }
        }
        
        body {
            overflow-y: scroll;
            background-color: beige;
        }

        span {
            margin: -2px;
            padding: 0;
        }

        h1 {
            opacity: 0;
        }

        .loading{
            
            background-color: beige;
            position: relative;
            top: 35px;
        }

        .el1 {
            font-size: larger;
            animation-name: loadingFade;
            animation-duration: .4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }

        .el2 {
            font-size: larger;
            animation-name: loadingFade;
            animation-duration: .4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-delay: .025s;
        }

        .el3 {
            font-size: larger;
            animation-name: loadingFade;
            animation-duration: .4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-delay: .05s;
        }

        .el4 {
            font-size: larger;
            animation-name: loadingFade;
            animation-duration: .4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-delay: .075s;
        }

        .el5 {
            font-size: larger;
            animation-name: loadingFade;
            animation-duration: .4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-delay: .1s;
        }

        .el6 {
            font-size: larger;
            animation-name: loadingFade;
            animation-duration: .4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-delay: .125s;
        }

        .el7 {
            font-size: larger;
            animation-name: loadingFade;
            animation-duration: .4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-delay: .15s;
        }

        .el8 {
            font-size: larger;
            animation-name: loadingFade;
            animation-duration: .4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-delay: .175s;
        }

        

        .center-text{
            text-align: center;
        }

        .navigation {
            text-align: center;
            text-decoration: none;
        }

        nav {
            display: block;
            background-color: beige;
            height: 50px;
            font-size: xx-large;

        }

        nav a{
            text-decoration: none;
            color: black;
        }

        nav ul{
            width: 80%;
            margin:0 auto;
            list-style: none;
        }

        .no-display {
            display: none;
            opacity: 0;
        }

        .menu-icon {
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div name="main-div" id="main-div" class="main-div">
        <div name="navigation" id="navigation" class="navigation">
            <nav>
                <span class="menu-icon">&#9776;</span>

                <ul class="menu no-display">
                    <li name="ff6">Final Fantasy 6</li>
                    <li name="ff5">Final Fantasy 5</li>
                    <li name="ff4">Final Fantasy 4</li>
                    <li name="ff7">Final Fantasy 7</li>
                </ul>
            </nav>
        </div>
        <h1 id="header" class="center-text">The Characters Of Final Fantasy</h1>
        <div class="center-text" name="loading"><span class="loading"><span class="el1">l</span>
                                                                        <span class="el2">o</span>
                                                                        <span class="el3">a</span>
                                                                        <span class="el4">d</span>
                                                                        <span class="el5">i</span>
                                                                        <span class="el6">n</span>
                                                                        <span class="el7">g</span>
                                                                        <span class="el8">.</span>
                                                                    </span></div>
    </div>
    <script>


        var indexFolder = "<?php echo basename(__DIR__); ?>";
        

        (function(){
            var aTest = document.querySelectorAll("a");
             var aTestFunc = function(event){
                event.preventDefault();
            }

            for( i = aTest.length - 1; i >= 0; --i)
            {
                aTest[i].addEventListener("click", aTestFunc);
            }
        }())
    </script>
    <script type="text/javascript" src="/<?php echo basename(__DIR__); ?>/dist/bundle.js"></script>
</body>
</html>

