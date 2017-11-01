<?php

    $data = json_decode($_POST["players"]);
    
    //include PHPMailerAutoload.php
    require 'phpmailer/PHPMailerAutoload.php';

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    //set a host
    $mail->Host = "smtp.gmail.com";

    //enable SMTP
    $mail->isSMTP();
    $mail->SMTPDebug = 2;

    //set authentication to true
    $mail->SMTPAuth = true;

    //set login details for Gmail account
    $mail->Username = "secretsantanamegenerator@gmail.com";
    $mail->Password = "Oldsaintnick";

    //set type of protection
    $mail->SMTPSecure = "ssl";

    //set a port
    $mail->Port = 465;


    //set HTML to true
    $mail->isHTML(true);

    //set who is sending an email
    $mail->setFrom('secretsantanamegenerator@gmail.com', 'Secret Santa');
    
    foreach($data as $playerObject){
      $mail->addAddress($playerObject->email);
      $mail->Subject = "Secret Santa";
      $mail->Body = "Your secret santa target is: " + $playerObject-> secretSanta;
              
      $mail->send();
      
    }
    
    

?>


