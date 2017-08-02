<?php

require_once 'mailer/class.phpmailer.php';

$name = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$email = $_POST['email']; // сохраняем в переменную данные полученные из поля c телефонным номером
$phone = $_POST['phone'];
$text = $_POST['text'];

$mail = new PHPMailer();

$mail->CharSet = "UTF-8"; // кодировка заголовков
$mail->From     = 'smtp.yandex.ru';
$mail->FromName = 'www.darvis.kz';
$mail->Host     = $_SERVER['HTTP_HOST'];
$mail->Mailer   = "mail";
$mail->Subject = 'Новая заявка с сайта DAR Vis'; // тема письма (заголовок)
$mail->Body    = 'Имя клиента: '.$name.'<br/>'.'Телефон: '.$phone.'<br/>'.'Email: '.$email.'<br/>'.'Сообщение:'.$text;
$mail->AltBody = strip_tags(str_replace("<br/>", "\n", $mail->Body));
$mail->addAddress("support@gmail.com"); // добавляем получателя и отправляем
$mail->addAddress("i@darvis.kz");  

$sent = $mail->Send();

return true;

?>