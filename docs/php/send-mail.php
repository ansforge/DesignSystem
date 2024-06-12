<?php

  function sendHtmlMail($to, $subject, $message, $reply_to) {
    $headers = array(
      'MIME-Version' => '1.0',
      'Content-type' => 'text/html; charset=utf-8',
      'From' => 'Design System ANS <communication@esante.gouv.fr>',
      'Return-Path' => $reply_to,
      'Reply-To' => $reply_to,
      'Date' => date('r'),
      'Message-ID' => time() . '.' . md5($to) . '@' . $_SERVER['SERVER_NAME'],
      'X-Mailer' => 'PHP/' . phpversion()
    );

    $is_sent = mail($to, $subject, $message, $headers);
    return $is_sent;
  }
  
?>