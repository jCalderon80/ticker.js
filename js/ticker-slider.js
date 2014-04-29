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
	//Set defaults and globals
	var strip;
	var in_move;
	var actual_position;
	var id = optiond.id;
	var orig_pos = 0;
	var	stop = ( options.stop_on_hover == "" || options.stop_on_hover == null ) ? true : options.stop_on_hover;
	var	orig_speed = ( options.speed == "" || options.speed == null ) ? 100 : options.speed;
	var	orig_dir = (options.direction == "" || options.direction == null ) ? "rtl" : options.direction;
	var speed = orig_speed;
	var dir = orig_dir;
	var roller_width = 0;
	
	window.onload = function() {
		//Get all elements
		var roller, l_arr, r_arr, arrows;
		
		roller = document.getElementById("ticker-roller");
		
		//Event Listeners for Left and Right Speeders
		l_arr = document.getElementsByClassName("left-speeder");
		for( var i = 0; i < l_arr.length; i++ ){
			l_arr[i].addEventListener( "mouseover", function() {
				dir = "ltr";
				speed = ( speed < orig_speed ) ? orig_speed / 2 : speed / 2;
				
				clearInterval( in_move );
				
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
				
				clearInterval( in_move );
				
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
				
				clearInterval( in_move );
				
				in_move = window.setInterval( function(){
					run_strip();
				}, speed );
			}, false );
		}
		
		strip = document.getElementById("ticker-strip");
		strip.addEventListener( "mouseover", function() {
			clearInterval( in_move );
			in_move = "";
		}, false );
		
		strip.addEventListener( "mouseout", function() {
			in_move = setInterval( function() {
				run_strip();
			}, speed );
		}, false )
		
	
		function set_rollers( roller ) {
			
			var elems = roller.getElementsByTagName( "li" );
			
			for( var i = 0; i < elems.length; i++ ) {
				roller_width += elems[i].offsetWidth;
			}
			roller_width += 1
			
			orig_pos = -(roller_width);
			
			strip.style.width = ( ( window.roller_width * 3 ) + 1 ) + "px";
			strip.style.marginLeft = "-" + window.roller_width + "px";
			
			roller.style.width = window.roller_width + "px";
			
			triplicate_it( roller_width );
			
			function triplicate_it( width ) {
				
				var elems = roller.innerHTML;
				var x = 0;
				
				strip = document.getElementById("ticker-strip");
				
				while ( x < 2) {
					
					var newRoller = document.createElement("ul");
					newRoller.setAttribute("id", "ticker-roller");
					newRoller.style.width = window.roller_width;
					newRoller.innerHTML = elems;
					newRoller.style.width = width;
					strip.appendChild( newRoller );
					
					x++;
					
				}
			}
		
		}
		
		function pause_strip() {
			if ( stop === true ) {
				window.clearInterval( in_move );
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
		
		set_rollers( roller )
		
		window.setInterval( function() {
			run_strip();
		}, speed );
		
	} //window.onload
} //strip_

ticker({
	speed: 20,
	stop_on_hover: true,
	direction: "rtl",
})