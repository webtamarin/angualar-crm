<?php

require_once 'connection.php';

/*
 * User Login
 */
if (isset($_GET['username']) && isset($_GET['password'])) {
  echo user_login($mysqli, $_GET['username'], $_GET['password']);
}

switch ($_GET['data']) {
  case 'fetch_all_users':
    fetch_all_users($mysqli);
    break;
}

/*
 * User Login
 */

function user_login($mysqli, $username, $password) {
  $sql = 'SELECT id, username, name, phone, address FROM `users` WHERE username LIKE "' . $username . '" AND password LIKE "' . $password . '"';
  $result = $mysqli->query($sql, MYSQLI_USE_RESULT);
  $json = [];
  while ($row = $result->fetch_object()) {
    array_push($json, $row);
  }
  echo json_encode($json);
}

/*
 * Fetch all users
 */

function fetch_all_users($mysqli) {
  $sql = 'SELECT * FROM users';
  $result = $mysqli->query($sql, MYSQLI_USE_RESULT);
  $json = [];
  while ($row = $result->fetch_object()) {
    array_push($json, $row);
  }
  echo json_encode($json);
}
