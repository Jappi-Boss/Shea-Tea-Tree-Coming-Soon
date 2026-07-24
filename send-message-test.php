<?php
// Shea Tea Tree contact form test handler
// Test URL: /contact-test.html

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact-test.html');
    exit;
}

function clean_input($value) {
    return trim(str_replace(["\r", "\n"], ' ', $value ?? ''));
}

function clean_message($value) {
    return trim($value ?? '');
}

$name = clean_input($_POST['name'] ?? '');
$company = clean_input($_POST['company'] ?? '');
$phone = clean_input($_POST['phone'] ?? '');
$email = filter_var(clean_input($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$subject_field = clean_input($_POST['subject'] ?? '');
$message_text = clean_message($_POST['message'] ?? '');

if (!$name || !$email || !$subject_field || !$message_text) {
    header('Location: contact-test.html?error=missing');
    exit;
}

$to = 'info@sheateatree.com';
$email_subject = 'New Website Enquiry - Shea Tea Tree';

$safe_name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safe_company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$safe_phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safe_email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safe_subject_field = htmlspecialchars($subject_field, ENT_QUOTES, 'UTF-8');
$safe_message = nl2br(htmlspecialchars($message_text, ENT_QUOTES, 'UTF-8'));

$email_body = "
<!doctype html>
<html>
<head>
  <meta charset='utf-8'>
  <title>New Website Enquiry - Shea Tea Tree</title>
</head>
<body style='margin:0;padding:0;background:#f3f4ef;font-family:Arial,Helvetica,sans-serif;color:#173f24;'>
  <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='background:#f3f4ef;padding:30px 0;'>
    <tr>
      <td align='center'>
        <table role='presentation' width='680' cellspacing='0' cellpadding='0' style='width:680px;max-width:94%;background:#ffffff;border:1px solid #d9ded5;border-radius:18px;overflow:hidden;'>
          <tr>
            <td style='background:#174b2a;color:#ffffff;padding:26px 30px;'>
              <h1 style='margin:0;font-size:24px;line-height:1.3;'>New Website Enquiry - Shea Tea Tree</h1>
            </td>
          </tr>
          <tr>
            <td style='padding:30px;'>
              <p style='font-size:16px;color:#4d5b51;line-height:1.6;margin:0 0 24px;'>New message received from the official Shea Tea Tree website contact form.</p>
              <div style='background:#f7f9f5;border:1px solid #dfe6db;border-radius:14px;padding:20px;margin-bottom:24px;'>
                <p style='margin:0 0 12px;'><strong style='color:#174b2a;'>Name:</strong> {$safe_name}</p>
                <p style='margin:0 0 12px;'><strong style='color:#174b2a;'>Company:</strong> {$safe_company}</p>
                <p style='margin:0 0 12px;'><strong style='color:#174b2a;'>Phone:</strong> {$safe_phone}</p>
                <p style='margin:0 0 12px;'><strong style='color:#174b2a;'>Email:</strong> {$safe_email}</p>
                <p style='margin:0;'><strong style='color:#174b2a;'>Subject:</strong> {$safe_subject_field}</p>
              </div>
              <h2 style='font-size:18px;margin:0 0 10px;color:#174b2a;'>Message</h2>
              <div style='background:#ffffff;border:1px solid #dfe6db;border-radius:14px;padding:18px;color:#26352b;line-height:1.7;'>{$safe_message}</div>
            </td>
          </tr>
          <tr>
            <td style='background:#f7f9f5;border-top:1px solid #dfe6db;padding:18px 30px;color:#6a756c;font-size:13px;line-height:1.6;'>
              This enquiry was submitted from sheateatree.com/contact-test.html.<br>
              Please reply directly to the customer using the email address above.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Shea Tea Tree Website <noreply@sheateatree.com>';
$headers[] = 'Reply-To: ' . $safe_name . ' <' . $email . '>';

$sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));

if ($sent) {
    header('Location: contact-test.html?sent=true');
    exit;
}

header('Location: contact-test.html?error=send');
exit;
?>