<?php
/**
 * Created by PhpStorm.
 * User: SAMSUNG
 * Date: 22.06.2017
 * Time: 22:10
 */

namespace Phpdev;


class AuthController implements RespondsToUserRegistration {

  protected $registration;

  /**
   * AuthController constructor.
   *
   * @param RegisterUser $registration
   */
  public function __construct( RegisterUser $registration ) {
    $this->registration = $registration;
  }

  public function register() {
    $this->registration->execute( [], $this );
  }

  public function userRegisteredSuccesfully() {
    var_dump( 'redirect to view' );
  }

  public function userRegisteredFail() {
    var_dump( 'redirect back to index' );

  }
}