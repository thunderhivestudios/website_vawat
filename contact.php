<?php

//form filled in too fast, bot detection
$formTime = $_POST['form_time'] ?? 0;

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit;
}

// Honeypot field
$honeypot = $_POST['company'] ?? '';
if (!empty($honeypot)) {
    exit;
}

// Time-based bot protection
$formTime = (int)($_POST['form_time'] ?? 0);
if ($formTime > 0 && (time() * 1000 - $formTime) < 2000) {
    exit;
}

$fullName = trim($_POST["fullName"] ?? "");
$email    = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
$phone    = trim($_POST["phone"] ?? "");
$subject  = trim($_POST["subject"] ?? "Contact form");
$message  = trim($_POST["message"] ?? "");

if (!$fullName || !$email || !$message) {
    exit("Required fields missing");
}

$to = "info@vawat.be";

$mailSubject = "Website contact: " . $subject;

$mailBody = "
Name: $fullName
Email: $email
Phone: $phone

Message:
$message
";

$headers = "From: website@vawat.be\r\n";
$headers .= "Reply-To: $email\r\n";

mail($to, $mailSubject, $mailBody, $headers);

header("Location: /?success=1#contact");
exit;
