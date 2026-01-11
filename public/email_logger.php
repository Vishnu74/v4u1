<?php

function logEmail($conn, $from, $to, $subject, $body, $status, $response) {

    $stmt = $conn->prepare("
        INSERT INTO email_logs
        (from_email, to_email, subject, body, status, response)
        VALUES (?, ?, ?, ?, ?, ?)
    ");

    $stmt->bind_param(
        "ssssss",
        $from,
        $to,
        $subject,
        $body,
        $status,
        $response
    );

    $stmt->execute();
    $stmt->close();
}
