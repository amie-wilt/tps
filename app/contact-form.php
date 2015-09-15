<?php

error_reporting(E_ALL);

require_once("class.phpmailer.php");
$mail = new PHPMailer(true);

//Submission Data
$ipaddress = $_SERVER['REMOTE_ADDR'];

//Form Data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$to = $_POST['amie.wilt@gmail.com'];

//Email Body
$emailBody = '';
$emailBody = $emailBody . '<div style="padding-bottom:5px;border-bottom:1px solid #d9dcdd;margin-bottom:5px;"><span><strong style="color:#122B48;">Name:  </strong></span> <span>' . $name . '</span></div><br>';
$emailBody = $emailBody . '<div style="padding-bottom:5px;border-bottom:1px solid #d9dcdd;margin-bottom:5px;"><span><strong style="color:#122B48;">Email:  </strong></span> <span>' . $email . '</span></div><br>';
$emailBody = $emailBody . '<div><span><strong style="color:#122B48;">Phone Number: </strong></span> <span>' . $phone . '</span></div><br>';
$emailBody = $emailBody . '<div><span><strong style="color:#122B48;">Comments/Questions:  </strong></span> <span>' . $message . '</span></div>';

$mail->SetFrom($email, $name);
$mail->AddAddress($to);
$mail->Subject = 'Contact Form Submission | ' . $name;
$mail->MsgHTML($emailBody);
$mail->Send();

?>



