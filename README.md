# Pasivo apps

## Apps

- Finance planner
- Risk assessment

## Workflow

### Build project

- Project is built using the `./github/workflows/build-plugin.yml`
  - Builds the project to `./app/dist` with `npm run build`
  - Creates a `.zip` file with the built project and the relevant file for creating a wordpress plugin
  - Publish the `.zip` file as an artifact

### Use the plugin

- Download the artifact `finance-planner.zip` from github actions
- Remove the previous used plugin
- Install the new plugin by installing by using the `finance-planner.zip` file

## DEPRECATED INFO

## Options for hosting the program

1. Mount Vue project to div on one of the sites
2. Host program on different hosting platform like Heroku and redirect to the app using a link
3. Host program on existing server and redirect to app using a link
4. Use wordpress plugins to create a questionnaire

## Insert VueJS using custom template

### Custom templates after twentytwentytwo

- Modify `functions.php` inside your theme

```php
# wordpress/html/wp-content/themes/twnetytwentytwo/functions.php

# ...
if ( ! function_exists( 'financeplanner_scripts' ) ) :
  /**
   * Enqueue scripts for finance planner app.
  *
  * @since Twenty Twenty-Two 1.0
  *
  * @return void
  */
  function financeplanner_scripts() {
    // Enqueue stylesheet for the vue app
    wp_enqueue_style( 'finance-planner-style', get_template_directory_uri() . '/css/finance-planner-style.css', false, '1.1', 'all');
    // Enqueue script for vue app
    wp_enqueue_script( 'finance-planner-app', get_template_directory_uri() . '/scripts/finance-planner-app.js', [], 1.1, true);
  }
endif;

add_action( 'wp_enqueue_scripts', 'financeplanner_scripts' );

# ...
```

- Copy your app's build files to the paths that should be loaded in `wp_enqueue_style` and `wp_enqueue_script`.

- Create the folders in your used theme and copy the files

```bash
sudo ./setup_files.sh
```

### Custom templates before twentytwentytwo

[wordpress.org - custom templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/#creating-custom-page-templates-for-global-use)

[wpmudev.com - create hybrid spa](https://wpmudev.com/blog/creating-a-hybrid-single-page-app-wordpress-with-vuejs/)

- Create `.php` file in the used theme
- In my case it was the theme `twentytwentythree`

```php
<?php Template Name: Search Page ?>

<div id="vue-finance-planner"></div>
```
