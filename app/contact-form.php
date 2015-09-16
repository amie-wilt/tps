<?php

$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

// validate the variables ========
if (empty($_POST['name']))
  $errors['name'] = 'Name is required.';

if (empty($_POST['email']))
  $errors['email'] = 'Email is required.';

if(empty($_POST['message']))
  $error['message'] = 'A message is required.';

// return a response ==============

// response if there are errors
if ( ! empty($errors)) {

  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors']  = $errors;
} else {

  // if there are no errors, return a message
  $data['success'] = true;
  $data['message'] = 'Success!';
}

// return all our data to an AJAX call
echo json_encode($data);

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

