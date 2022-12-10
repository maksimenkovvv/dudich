<?php
  $data = [
    "name" => $_POST['name'],
    "tel" => $_POST['tel'],
    "email" => $_POST['email']
  ];

  $connection = new PDO('mysql:host=localhost;dbname=example01','root', '');
  $sql = 'INSERT INTO users (name, tel, email) VALUES (:name, :tel, :email)';
  $statement = $connection ->prepare($sql);
  $result = $statement->execute($data);
  var_dump($result)
  ?>