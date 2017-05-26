<?php

/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-26
 * Time: 09:01
 */


require 'vendor/autoload.php';

use Phpdev\Staff;
use Phpdev\Business;
use Phpdev\Person;

$alex = new Person('Alex');
$peter = new Person('Peter');
$adam = new Person('Adam');

$dpStaffStart = new Phpdev\Staff([$peter, $adam]);

$dp = new Phpdev\Business($dpStaffStart);
$dp->hire($alex);

$dpStaff =  $dp->getStaff();

var_dump($dpStaffStart);

foreach($dpStaff as $employee):?>

<li><?php echo $employee?></li>

<?endforeach;?>