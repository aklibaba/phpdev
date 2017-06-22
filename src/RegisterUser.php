<?php
/**
 * Created by PhpStorm.
 * User: SAMSUNG
 * Date: 22.06.2017
 * Time: 22:14
 */

namespace Phpdev;


class RegisterUser {
  public function execute( array $data, RespondsToUserRegistration $listener ) {
    var_dump( 'Registering the user' );

    $listener->userRegisteredSuccesfully();
  }
}