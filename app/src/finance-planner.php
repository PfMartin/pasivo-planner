<?php
/**
 * Plugin Name:       Finance Planner
 * Plugin URI:        http://github.com/PfMartin/pasivo-planner
 * Description:       Creates a Finance Planner App for the Pasivo Website
 * Version:           0.0.1
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Martin Pfatrisch
 * Author URI:        https://github.com/PfMartin
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       finance-planner
 * Domain Path:       /finance-planner
 */

 function func_load_vuescripts() {
     wp_register_script('finance-planner', plugin_dir_url( __FILE__ ).'finance-planner.js', true);
     wp_enqueue_style( 'finance-planner-style', plugin_dir_url( __FILE__ ).'finance-planner-style.css', true, '1.1', 'all');
 }

 add_action('wp_enqueue_scripts', 'func_load_vuescripts');

 //Add shortscode
 function func_load_finance_planner(){
     wp_enqueue_script('finance-planner');
     wp_enqueue_style('finance-planner-style');

     $str= "<div id='finance-planner-app'>"
           ."Message from Vue: "
           ."</div>";
     return $str;
 } // end function

  add_shortcode( 'finance-planner-app', 'func_load_finance_planner' );
?>