/**
 * Strip Slider
 *
 * @author Johnny Calderon jcalderon@iguana
 * @version Strip Slider 0.1 
 */

function ticker( options ) {
	/**
	 * @param (array) settings for ticker slider
	 */
	
	if ( ! options ) {
		var options = "";
	}
	
	//Set globals
	var ticker;
	var roller;
	var strip;
	var in_move;
	var actual_position;
	var id = options.id;
	var orig_pos = 0;
	var roller_width = 0;
	
	//Set defaults
	var	stop = ( options.stop_on_hover == "" || options.stop_on_hover == undefined ) ? true : options.stop_on_hover;
	var	orig_speed = ( options.speed == "" || options.speed == undefined ) ? 30 : options.speed;
	var	orig_dir = (options.direction == "" || options.direction == undefined ) ? "rtl" : options.direction;
	var speed = orig_speed;
	var dir = orig_dir;
	
	window.onload = function() {
		//Get all elements
		var l_arr, r_arr, arrows;
		
		//get ticker container if defined
		if ( id ) {
			ticker = document.getElementById( id );	
		}
		
		//get the strip
		strip = document.getElementById("ticker-strip");
		
		//get ticker roller container
		roller = document.getElementById( "ticker-roller" );
		
		//Event Listeners for Left and Right Speeders
		l_arr = document.getElementsByClassName("left-speeder");
		for( var i = 0; i < l_arr.length; i++ ){
			l_arr[i].addEventListener( "mouseover", function() {
				dir = "ltr";
				speed = ( speed < orig_speed ) ? orig_speed / 2 : speed / 2;
				
				//Stop previous motion
				clearInterval( in_move );
				
				//start new motion
				in_move = window.setInterval( function(){
					run_strip();
				}, speed );
			}, false );
		}
		
		r_arr = document.getElementsByClassName("right-speeder");
		for( var i = 0; i < r_arr.length; i++ ){
			r_arr[i].addEventListener( "mouseover", function() {
				dir = "rtl";
				speed = ( speed < orig_speed ) ? orig_speed / 2 : speed / 2;
				
				//Stop previous motion
				clearInterval( in_move );
				
				//start new motion
				in_move = window.setInterval( function(){
					run_strip();
				}, speed );
			}, false );
		}
		
		arrows = document.getElementsByClassName("speeder");
		for( var i = 0; i < arrows.length; i++ ){
			arrows[i].addEventListener( "mouseout", function() {
				dir = orig_dir;
				speed = ( speed < orig_speed ) ? orig_speed : speed;
				
				//Stop previous motion
				clearInterval( in_move );
				
				//start new motion
				in_move = window.setInterval( function(){
					run_strip();
				}, speed );
			}, false );
		}
		
		set_rollers();
		pause_strip();
	
		window.setInterval( function() {
			run_strip();
		}, speed );
		
	} //window.onload
	
	function set_rollers() {
		/** Add up elements width to apply total to container ( ticker-roller )
		 *  Set position for content
		 */
		
		var elems;
		
		if ( ticker ) {
			
			elems = ticker.getElementsByTagName( "li" );
			
		} else {
			
			elems = roller.getElementsByTagName( "li" );
			
		}
		
		for( var i = 0; i < elems.length; i++ ) {
			roller_width += elems[i].offsetWidth;
		}
		roller_width += 1
		
		orig_pos = -( roller_width );
		
		strip.style.marginLeft = "-" + roller_width + "px";
		strip.style.width = ( ( roller_width * 3 ) + 1 ) + "px";
		
		roller.style.width = roller_width + "px";
		
		triplicate_it( roller_width );	
	}
	
	function triplicate_it( width ) {
		//triplicate strip content
		
		var elems = roller.innerHTML;
		var x = 0;
		
		while ( x < 2) {
			
			var newRoller = document.createElement("ul");
			newRoller.setAttribute("id", "ticker-roller");
			newRoller.setAttribute("class", "ticker-roller");
			newRoller.style.width = window.roller_width;
			newRoller.innerHTML = elems;
			newRoller.style.width = width+"px";
			strip.appendChild( newRoller );
			
			x++;
			
		}
	}
	
	function pause_strip() {
		
		var container;
		
		if ( ! ticker || ticker == null ) {
			container = strip;
		} else {
			container = ticker;
		}
		
		if ( stop == true ) {
			var links = container.getElementsByTagName( "li" );
			for ( var i = 0; i < links.length; i++ ) {
				
				links[i].addEventListener( "mouseover", function() {
					
					clearInterval( in_move );
					
				}, false );
				
				links[i].addEventListener( "mouseout", function() {
					
					in_move = window.setInterval( function() {
						run_strip();
					}, speed );
					
				}, false );
				
			}
		}
	}
	
	function run_strip() {
		
		actual_position = ( strip.style.marginLeft == "" ) ? 0 : parseInt( strip.style.marginLeft);
		
		if ( dir == "ltr" ) {
			
			if ( actual_position == 0 ) {
				actual_position = orig_pos;
			} else {
				actual_position = actual_position + 1;
			}
				
		} else {
			
			if ( actual_position == ( orig_pos * 2 ) ) {
				actual_position = orig_pos;
			} else {
				actual_position = actual_position - 1;
			}
				
		}
		
		strip.style.marginLeft = actual_position + "px";
		
	}	
} //ticker

ticker();