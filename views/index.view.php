<?php require 'views/partials/head.php'; ?>

<ul>

  <?php

  /** @var User[] $users */
  foreach($users as $user) : ?>
  <li>
      <?= $user->last_name ?>
  </li>
  <? endforeach; ?>

</ul>

<form action="/" method="get">


</form>

<?php require 'views/partials/footer.php'; ?>
