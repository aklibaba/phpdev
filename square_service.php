<?php
/**
 * Created by PhpStorm.
 * User: SAMSUNG
 * Date: 18.06.2017
 * Time: 18:50
 */

$rows = $_REQUEST['rows'];
$cols = $_REQUEST['cols'];

for ($y = 0; $y < $cols; $y++) {
	for ($x = 0; $x < $rows; $x++) {
		echo '*';
	}
	echo '<br>';
}