# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

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
