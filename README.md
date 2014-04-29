#TICKER.JS
##Full width animated ticker ( no jQuery needed )
04-29-2014 [jcalderon] {}http://www.iguana-web.net} [hello]

###Description

###Installation
Copy the **CSS, JS,** and **ASSETS** folder into your site's root folder.

Declare the css and javascript files in your html document **head** after all the other files.

```html: Your HTML Head
    <head>
        <link rel="stylesheet" href="css/ticker-slider.css"/>
        <script src="js/ticker-slider.js"></script>
    </head>
```

###Configuration
**HTML**

The following is the minimal classes and id needed for the **ticker** to work

```html: Your HTML
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
    </body>```

**JS**

Start the ticker with the ticker() function, it will load default settings

```javascript: your JS
    ticker();
```

###Customize

**speed** _( integer: milliseconds )_, (default: 100ms)

**dir** _( direction: string )_ ( default: rtl ) values: rtl, ltr

**stop\_on\_hover** _( bool )_ ( default: true )

Example:

```javascript: your JS
    ticker({
        speed : 50,
        dir : ltr, //ticker will ru from left-to-righ
        stop_on_hover: false //won't stop on hover
    });
```