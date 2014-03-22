<?php
require "config.php";
require "controllers/DevStaticController.php";
require "controllers/DevDashboardController.php";

$app = new Silex\Application();
$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));

// Development routes
$app->get('/devStatic/{lang}/{fileName}', 'DevStaticController::getDevFile')->assert('fileName', '.+');;
$app->get('/dev/', 'DevDashboardController::devIndex');
$app->get('/dev/js/{type}/{id}', 'DevDashboardController::jsExample');

// Production routes
$app->get('/', 'DevDashboardController::prodIndex');
$app->get('/dashboard/js/{type}/{id}', 'DevDashboardController::prodJSExample');

$app->run ();