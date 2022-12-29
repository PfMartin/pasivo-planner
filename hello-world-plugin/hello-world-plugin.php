<?php
/**
 * Plugin Name:       Hello World Plugin
 * Plugin URI:        http://github.com/PfMartin/pasivo-planner
 * Description:       Creates a Finance Planner App for the Pasivo Website
 * Version:           0.0.1
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Martin Pfatrisch
 * Author URI:        https://github.com/PfMartin
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       hello-world-plugin
 * Domain Path:       /hello-world
 */


 function load_hello_world() {
  wp_register_script('hello-world', plugin_dir_url( __FILE__ ).'/src/hello-world.js', true);
}

add_action('wp_enqueue_scripts', 'load_hello_world');

//Add shortscode
function func_say_hello_world(){
  wp_enqueue_script('hello-world');

  $str= "<div id='finance-planner-app'>"
        ."Message from Hello World Plugin: "
        ."</div>";
  return $str;
} // end function

add_shortcode( 'hello', 'func_say_hello_world' );
?>