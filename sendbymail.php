<?php
if(isset($_POST['Email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "dayanalara95@gmail.com";
$email_subject = "Contacto desde el Greks Travels";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['Name']) ||
!isset($_POST['Email']) ||
!isset($_POST['Telephone']) ||
!isset($_POST['Message'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Name: " . $_POST['Name'] . "\n";
$email_message .= "E-mail: " . $_POST['Email'] . "\n";
$email_message .= "Teléfono: " . $_POST['Telephone'] . "\n";
$email_message .= "Comentarios: " . $_POST['Message'] . "\n\n";

$email_from = ($_POST['Email']);


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}




