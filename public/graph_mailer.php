<?php

function getGraphAccessToken() {
    $url = "https://login.microsoftonline.com/" . TENANT_ID . "/oauth2/v2.0/token";

    $postData = http_build_query([
        'grant_type'    => 'client_credentials',
        'client_id'     => CLIENT_ID,
        'client_secret' => CLIENT_SECRET,
        'scope'         => 'https://graph.microsoft.com/.default'
    ]);

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $postData,
        CURLOPT_RETURNTRANSFER => true
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    $json = json_decode($response, true);

    if (!isset($json['access_token'])) {
        throw new Exception('Graph token failed');
    }

    return $json['access_token'];
}

function sendGraphMail($accessToken, $to, $subject, $htmlBody) {

    $url = "https://graph.microsoft.com/v1.0/users/" . FROM_EMAIL . "/sendMail";

    $payload = [
        "message" => [
            "subject" => $subject,
            "body" => [
                "contentType" => "HTML",
                "content" => $htmlBody
            ],
            "toRecipients" => [[
                "emailAddress" => ["address" => $to]
            ]]
        ],
        "saveToSentItems" => true
    ];

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($payload),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            "Authorization: Bearer $accessToken",
            "Content-Type: application/json"
        ],
        CURLOPT_HEADER => true
    ]);

    $response = curl_exec($ch);
    $status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return [$status, $response];
}
