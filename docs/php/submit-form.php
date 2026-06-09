<?php  
  require_once('./send-mail.php');

  $to = 'communication@esante.gouv.fr';
  $subject = 'ANS - Demande de Support Design System';

  // User Post Inputs
  $request = array(
    'type' => filter_input(INPUT_POST, 'contactDemande', FILTER_SANITIZE_FULL_SPECIAL_CHARS),
    'lastname' => filter_input(INPUT_POST, 'contactNom', FILTER_SANITIZE_FULL_SPECIAL_CHARS),
    'firstname' => filter_input(INPUT_POST, 'contactPrenom', FILTER_SANITIZE_FULL_SPECIAL_CHARS),
    'email' => filter_input(INPUT_POST, 'contactEmail', FILTER_SANITIZE_EMAIL),
    'board' => filter_input(INPUT_POST, 'contactDirection', FILTER_SANITIZE_FULL_SPECIAL_CHARS),
    'subject' => filter_input(INPUT_POST, 'contactObjet', FILTER_SANITIZE_FULL_SPECIAL_CHARS),
    'message' => filter_input(INPUT_POST, 'contactMessage', FILTER_SANITIZE_FULL_SPECIAL_CHARS)
  );

  require_once('./mail-template.php');
  $message = $template;

  $has_empty_value = in_array('', $request, true);
  if (!$has_empty_value) {
    $is_sent = sendHtmlMail($to, $subject, $message, $request['email']);

    $send_result = array(
      'title' => 'Confirmation d\'envoi de demande',
      'message' => 'Votre demande a bien été transmise au support. <br>Celle-ci sera traitée dans les plus brefs délais.'
    );

    if (!$is_sent) {
      $send_result['title'] = 'Erreur d\'envoi de demande';
      $send_result['message'] = 'Une erreur est survenue lors de l\'envoi de votre demande. <br>Veuillez svp réessayer ultérieurement ou 
      contacter notre service par email en leur communiquant l\'erreur suivante : ' . error_get_last()['message'];
    }
    require_once('./confirmation.php');
  }

?>