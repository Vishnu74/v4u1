<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Prevent CORS issues for development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json"); // Commented out for debug printing

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

date_default_timezone_set('Asia/Kolkata'); // Adjust timezone if needed

function debug_print($msg) {
    echo "[" . date('Y-m-d H:i:s') . "] DEBUG: " . $msg . "<br>\n";
}

debug_print("Script accessed.");

// Database Configuration
$host = 'YOUR_DB_HOST';
$username = 'YOUR_DB_USER';
$password = 'YOUR_DB_PASS';
$database = 'YOUR_DB_NAME';

debug_print("Database Config - Host: $host, User: $username, DB: $database");

// SMTP Configuration
$smtpHost = 'smtp.example.com';
$smtpUser = 'your_email@example.com';
$smtpPass = 'your_email_password';
$smtpPort = 587; // or 465
$smtpSecure = 'tls'; // or 'ssl'

debug_print("SMTP Config - Host: $smtpHost, Port: $smtpPort, User: $smtpUser, Secure: $smtpSecure");

// Read input
$inputJSON = file_get_contents('php://input');
debug_print("Raw Input: " . $inputJSON);

$input = json_decode($inputJSON, true);

if (!$input) {
    debug_print("Error: Invalid JSON input.");
    die("Invalid input");
}

debug_print("Input parsed successfully. Name: {$input['name']}, Email: {$input['email']}");

debug_print("Attempting Database Connection...");
$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    debug_print("Database connection failed: " . $conn->connect_error);
    die("Database connection failed: " . $conn->connect_error);
}
debug_print("Database connection successful.");

// 1. Insert into contact_requests
debug_print("Preparing INSERT statement for contact_requests...");
$stmt = $conn->prepare("INSERT INTO contact_requests (name, email, company, phone, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())");

if (!$stmt) {
    debug_print("Prepare failed: (" . $conn->errno . ") " . $conn->error);
} else {
    $stmt->bind_param("sssss", $input['name'], $input['email'], $input['company'], $input['phone'], $input['message']);
    
    debug_print("Executing INSERT...");
    $saved = $stmt->execute();
    
    if ($saved) {
        $contactId = $stmt->insert_id;
        debug_print("INSERT successful. New Contact ID: " . $contactId);
    } else {
        debug_print("INSERT failed: (" . $stmt->errno . ") " . $stmt->error);
    }
    $stmt->close();
}

if ($saved) {
    // 2. Database save successful -> Try to send email
    $emailSent = false;
    $emailError = '';

    debug_print("Checking for PHPMailer...");
    
    // NOTE: You need to install PHPMailer or include the classes manually. 
    // If you don't have Composer, download PHPMailer src folder and require the files:
    // require 'path/to/PHPMailer/src/Exception.php';
    // require 'path/to/PHPMailer/src/PHPMailer.php';
    // require 'path/to/PHPMailer/src/SMTP.php';
    
    if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        debug_print("PHPMailer class found. Initializing...");
        $mail = new PHPMailer(true);
        try {
            // Server settings
            $mail->SMTPDebug = 2; // Enable verbose debug output
            $mail->Debugoutput = function($str, $level) {
                echo "SMTP DEBUG level $level; message: $str<br>\n";
            };

            $mail->isSMTP();
            $mail->Host       = $smtpHost;
            $mail->SMTPAuth   = true;
            $mail->Username   = $smtpUser;
            $mail->Password   = $smtpPass;
            $mail->SMTPSecure = $smtpSecure;
            $mail->Port       = $smtpPort;

            debug_print("SMTP settings applied.");

            // Recipients
            $mail->setFrom($smtpUser, 'Website Contact Form');
            $mail->addAddress('admin@example.com'); // Add a recipient
            
            debug_print("Recipients set.");

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'New Contact Request from ' . $input['name'];
            $mail->Body    = "
                <h2>New Contact Request</h2>
                <p><strong>Name:</strong> {$input['name']}</p>
                <p><strong>Email:</strong> {$input['email']}</p>
                <p><strong>Company:</strong> {$input['company']}</p>
                <p><strong>Phone:</strong> {$input['phone']}</p>
                <p><strong>Message:</strong><br>{$input['message']}</p>
            ";

            debug_print("Sending email...");
            $mail->send();
            debug_print("Email sent successfully!");
            $emailSent = true;
        } catch (Exception $e) {
            $emailError = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            debug_print("PHPMailer Error: " . $emailError);
        }
    } else {
        // Fallback to PHP mail() if PHPMailer is not available
        debug_print("PHPMailer not found. Attempting native mail()...");
        
        $to = 'admin@example.com';
        $subject = 'New Contact Request from ' . $input['name'];
        $message = "Name: {$input['name']}\nEmail: {$input['email']}\n\nMessage:\n{$input['message']}";
        $headers = "From: webmaster@example.com" . "\r\n" .
                   "Reply-To: {$input['email']}" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $message, $headers)) {
            debug_print("Native mail() sent successfully.");
            $emailSent = true;
        } else {
            $emailError = "Native mail() failed. Check server configuration.";
            debug_print("Native mail() error: " . $emailError);
        }
    }

    // 3. Log the email attempt
    debug_print("Logging email attempt to database...");
    $logStmt = $conn->prepare("INSERT INTO email_logs (contact_request_id, email_sent, error_message, created_at) VALUES (?, ?, ?, NOW())");
    if ($logStmt) {
        $emailSentInt = $emailSent ? 1 : 0;
        $logStmt->bind_param("iis", $contactId, $emailSentInt, $emailError);
        $logStmt->execute();
        debug_print("Email log saved. ID: " . $logStmt->insert_id);
        $logStmt->close();
    } else {
        debug_print("Failed to prepare email log statement: " . $conn->error);
    }

    echo "PROCESS COMPLETE: Message saved and processed";
} else {
    debug_print("Failed to save contact request to database.");
    echo "PROCESS FAILED: Failed to save contact request";
}

$conn->close();
debug_print("Database connection closed.");
?>

