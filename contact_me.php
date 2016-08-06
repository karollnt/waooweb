<?php
  // Check for empty fields
  if(empty($_POST['name'])     ||
    empty($_POST['email'])     ||
    empty($_POST['phone'])     ||
    empty($_POST['message'])   ||
    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
    {
    echo "No arguments Provided!";
    return false;
  }
  require("./sendgrid/sendgrid-php.php");
  $name = strip_tags(htmlspecialchars($_POST['name']));
  $email_address = strip_tags(htmlspecialchars($_POST['email']));
  $phone = strip_tags(htmlspecialchars($_POST['phone']));
  $message = strip_tags(htmlspecialchars($_POST['message']));
  $email_body = "Ha recibido un nuevo mensaje de su formulario de contacto web.\n\n"."Aquí están los detalles:\n\nNombre: $name\n\nEmail: $email_address\n\nTelefono: $phone\n\nMensaje:\n$message";
  $from = new SendGrid\Email(null, $email_address);
  $subject = "WAOO:  $name";
  $to = new SendGrid\Email(null, "info@waooapp.com");
  $content = new SendGrid\Content("text/plain", $email_body);
  $mail = new SendGrid\Mail($from, $subject, $to, $content);

  //$apiKey = getenv('SENDGRID_API_KEY');
  $apiKey = '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';
  $sg = new \SendGrid($apiKey);

  $response = $sg->client->mail()->send()->post($mail);
  if($response->statusCode() == 202) echo 'ok';
?>
