<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    echo json_encode(["success" => true]);
    exit;
}

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/graph_mailer.php';
require_once __DIR__ . '/email_logger.php';

try {

    /* ---------- INPUT ---------- */
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        throw new Exception("Invalid JSON");
    }

    $name    = trim($data['name'] ?? '');
    $email   = trim($data['email'] ?? '');
    $company = trim($data['company'] ?? '');
    $phone   = trim($data['phone'] ?? '');
    $message = trim($data['message'] ?? '');

    if (!$name || !$email || !$message) {
        throw new Exception("Required fields missing");
    }

    /* ---------- DB ---------- */
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        throw new Exception("DB connection failed");
    }

    $stmt = $conn->prepare("
        INSERT INTO contact_requests
        (name, email, company, phone, message, created_at)
        VALUES (?, ?, ?, ?, ?, NOW())
    ");
    $stmt->bind_param("sssss", $name, $email, $company, $phone, $message);
    $stmt->execute();
    $stmt->close();

    /* ---------- GRAPH TOKEN ---------- */
    $token = getGraphAccessToken();

    /* ---------- ADMIN MAIL ---------- */
    $adminBody = "
        <h3>New Contact Request</h3>
        <b>Name:</b> $name<br>
        <b>Email:</b> $email<br>
        <b>Company:</b> $company<br>
        <b>Phone:</b> $phone<br><br>
        <b>Message:</b><br>$message
    ";

    [$status, $resp] = sendGraphMail(
        $token,
        ADMIN_EMAIL,
        "New Contact Request",
        $adminBody
    );

    logEmail($conn, FROM_EMAIL, ADMIN_EMAIL,
        "New Contact Request",
        $adminBody,
        $status === 202 ? 'SENT' : 'FAILED',
        $resp
    );

    if ($status !== 202) {
        throw new Exception("Admin mail failed");
    }

    /* ---------- AUTO REPLY ---------- */
    if (AUTO_REPLY_ENABLED) {

        $replyBody = "
            <p>Dear <b>$name</b>,</p>
            <p>Thank you for contacting <b>V4U Steel Detailing</b>.
            Our team will contact you shortly.</p>
            <p><b>Your Message:</b><br>$message</p>
            <br>
            <p>Regards,<br><b>V4U Steel Detailing</b></p>
        ";

        [$rStatus, $rResp] = sendGraphMail(
            $token,
            $email,
            "We received your enquiry",
            $replyBody
        );

        logEmail($conn, FROM_EMAIL, $email,
            "Auto Reply",
            $replyBody,
            $rStatus === 202 ? 'SENT' : 'FAILED',
            $rResp
        );
    }

    $conn->close();

    echo json_encode([
        "success" => true,
        "autoReply" => AUTO_REPLY_ENABLED,
        "message" => "Contact request submitted successfully"
    ]);

} catch (Throwable $e) {

    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => $e->getMessage()
    ]);
}
