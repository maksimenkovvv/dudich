<?php
    if (isset($_GET['popup-submit'])) {
      $nameform = $_GET['name'];
      $telform = $_GET['tel'];
      $emailform = $_GET['email'];
      $mysqli = new mysqli("localhost", "root", "", "dudich");
      if ($mysqli->connect__errno) {
        echo "Извините, возникла проблема на сайте";
        exit;
      }
      $name = '"' . $mysqli->real_escape_string($nameform) . '"';
      $tel = '"' . $mysqli->real_escape_string($telform) . '"';
      $email = '"' . $mysqli->real_escape_string($emailform) . '"';
      $query = "INSERT INTO users (name, tel, email) VALUES ($name, $tel, $email)";
      $result = $mysqli->query($query);
      $mysqli->close();
    }
?>
