<?php

/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-26
 * Time: 09:01
 */



$alex = new Person('Alex');
$peter = new Person('Peter');
$adam = new Person('Adam');

$dpStaffStart = new Staff([$peter, $adam]);

$dp = new Business($dpStaffStart);
$dp->hire($alex);

$dpStaff =  $dp->getStaff();

var_dump($dpStaffStart);

foreach($dpStaff as $employee):?>

<li><?php echo $employee?></li>

<?endforeach;?>