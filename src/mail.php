<?php
    $header;
    $to;

    $recipients = array(
       "tereschenko23041991@gmail.com"
    );

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= "From:" . "admin@global-workers.eu";

    $to = implode(",", $recipients);

     mail(
       $to,
       $subject,
       '<div>
          <p>name: '.$_POST['name'].'</p>
          <p>email: '.$_POST['email'].'</p>
          <p>phone: '.$_POST['phone'].'</p>
          <p>company: '.$_POST['company'].'</p>
          <p>message: '.$_POST['message'].'</p>
       </div>',
       $headers
     );
?>
