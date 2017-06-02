<?php /** @noinspection PhpIncludeInspection */
require 'views/partials/head.php'; ?>
<?php
/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-06-01
 * Time: 11:44
 */

/**
 * @var core\database\QueryBuilder $app['database']
 */
$app['database']->insert('Users', [
  'first_name' => $_POST['first_name'],
  'last_name' => $_POST['last_name'],
  'age' => $_POST['age'],
]);

header('Location: /');