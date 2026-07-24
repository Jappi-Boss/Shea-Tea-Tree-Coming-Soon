<?php
// Shea Tea Tree contact form test handler using SMTP.
// Test URL: /contact-test.html
// IMPORTANT: Do not store SMTP password in GitHub. Create smtp-config.php directly in cPanel public_html.

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

function smtp_read($socket) {
    $data = '';
    while ($line = fgets($socket, 515)) {
        $data .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    return $data;
}

function smtp_command($socket, $command, $expected_codes = [250]) {
    if ($command !== null) {
        fwrite($socket, $command . "\r\n");
    }
    $response = smtp_read($socket);
    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expected_codes, true)) {
        throw new Exception('SMTP error after command [' . ($command ?? 'CONNECT') . ']: ' . trim($response));
    }
    return $response;
}

function send_smtp_mail($config, $to, $subject, $html_body, $reply_to_email, $reply_to_name) {
    $host = $config['host'];
    $port = (int) $config['port'];
    $user = $config['user'];
    $pass = $config['pass'];
    $from = $config['from'] ?? $user;
    $from_name = $config['from_name'] ?? 'Shea Tea Tree Website';

    $remote = ($port === 465 ? 'ssl://' : '') . $host;
    $socket = fsockopen($remote, $port, $errno, $errstr, 30);
    if (!$socket) {
        throw new Exception('SMTP connection failed: ' . $errstr . ' (' . $errno . ')');
    }
    stream_set_timeout($socket, 30);

    smtp_command($socket, null, [220]);
    smtp_command($socket, 'EHLO sheateatree.com', [250]);

    if ($port === 587) {
        smtp_command($socket, 'STARTTLS', [220]);
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        smtp_command($socket, 'EHLO sheateatree.com', [250]);
    }

    smtp_command($socket, 'AUTH LOGIN', [334]);
    smtp_command($socket, base64_encode($user), [334]);
    smtp_command($socket, base64_encode($pass), [235]);
    smtp_command($socket, 'MAIL FROM:<' . $from . '>', [250]);
    smtp_command($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
    smtp_command($socket, 'DATA', [354]);

    $headers = [];
    $headers[] = 'From: ' . mb_encode_mimeheader($from_name) . ' <' . $from . '>';
    $headers[] = 'Reply-To: ' . mb_encode_mimeheader($reply_to_name) . ' <' . $reply_to_email . '>';
    $headers[] = 'To: <' . $to . '>';
    $headers[] = 'Subject: ' . mb_encode_mimeheader($subject);
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/html; charset=UTF-8';
    $headers[] = 'Date: ' . date('r');
    $headers[] = 'X-Mailer: Shea Tea Tree Website SMTP';

    $message = implode("\r\n", $headers) . "\r\n\r\n" . $html_body . "\r\n.";
    fwrite($socket, $message . "\r\n");
    smtp_command($socket, null, [250]);
    smtp_command($socket, 'QUIT', [221]);
    fclose($socket);
    return true;
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
<head><meta charset='utf-8'><title>New Website Enquiry - Shea Tea Tree</title></head>
<body style='margin:0;padding:0;background:#f3f4ef;font-family:Arial,Helvetica,sans-serif;color:#173f24;'>
  <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='background:#f3f4ef;padding:30px 0;'>
    <tr><td align='center'>
      <table role='presentation' width='680' cellspacing='0' cellpadding='0' style='width:680px;max-width:94%;background:#ffffff;border:1px solid #d9ded5;border-radius:18px;overflow:hidden;'>
        <tr><td style='background:#174b2a;color:#ffffff;padding:26px 30px;'><h1 style='margin:0;font-size:24px;line-height:1.3;'>New Website Enquiry - Shea Tea Tree</h1></td></tr>
        <tr><td style='padding:30px;'>
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
        </td></tr>
        <tr><td style='background:#f7f9f5;border-top:1px solid #dfe6db;padding:18px 30px;color:#6a756c;font-size:13px;line-height:1.6;'>This enquiry was submitted from sheateatree.com/contact-test.html.<br>Please reply directly to the customer using the email address above.</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>";

// Backup every submission on the server so messages are not lost during testing.
$backup_dir = __DIR__ . '/contact-submissions';
if (!is_dir($backup_dir)) {
    @mkdir($backup_dir, 0755, true);
}
$backup_file = $backup_dir . '/submissions-' . date('Y-m') . '.txt';
$backup_text = "\n--- " . date('Y-m-d H:i:s') . " ---\nName: {$name}\nCompany: {$company}\nPhone: {$phone}\nEmail: {$email}\nSubject: {$subject_field}\nMessage:\n{$message_text}\n";
@file_put_contents($backup_file, $backup_text, FILE_APPEND | LOCK_EX);

$config_file = __DIR__ . '/smtp-config.php';
if (!file_exists($config_file)) {
    header('Location: contact-test.html?error=config');
    exit;
}

$smtp_config = require $config_file;

try {
    send_smtp_mail($smtp_config, $to, $email_subject, $email_body, $email, $name);
    header('Location: contact-test.html?sent=true');
    exit;
} catch (Exception $e) {
    @file_put_contents($backup_dir . '/smtp-errors.log', date('Y-m-d H:i:s') . ' - ' . $e->getMessage() . "\n", FILE_APPEND | LOCK_EX);
    header('Location: contact-test.html?error=send');
    exit;
}
?>