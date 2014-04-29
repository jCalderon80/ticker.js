#TICKER.JS
##Full width animated ticker ( no jQuery needed )

###Description

###Installation
Copy the **CSS, JS,** and **ASSETS** folder into your site's root folder.

Declare the css and javascript files in your html document **head** after all the other files.

    html: Your HTML Head
    <head>
    <link rel="stylesheet" href="css/ticker-slider.css"/>
    <script src="js/ticker-slider.js"></script>
    </head>

###Configuration
The following is the minimal classes and id needed for the **ticker** to work

    html: Your HTML
    <body>
        <div><!-- Start your ticker -->
            <div class="right-speeder speeder"></div>
            <div class="left-speeder speeder"></div>
            <div class="strip-wrapper">
                <div id="ticker-strip">
                    <ul id="tiker-roller">
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </body>

###Options