<?php
$botToken = "xxx";
$chatId = "xxx";
$host = 'xxx';
$db   = 'xxx';
$user = 'xxx';
$pass = 'xxx';
$captchaSecretKey = "xxx";

header('Content-Type: application/json');

// Зчитування JSON-тіла запиту
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['firstLastName']) || !isset($input['phone']) || !isset($input['captcha'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
    exit;
}

// Перевірка Google reCAPTCHA
$captchaToken = $input['captcha'];
$verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
$response = file_get_contents($verifyUrl . '?' . http_build_query([
    'secret' => $captchaSecretKey,
    'response' => $captchaToken,
]));
$result = json_decode($response, true);

if (!$result["success"]) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Captcha verification failed"]);
    exit;
}

// Підключення до бази даних
try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$db;charset=utf8mb4",
        $user,
        $pass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

// SQL-запит на вставку
$sql = "INSERT INTO recruitment_forms (
    first_last_name, phone, birth_date, social_media, desired_position, additional_info
) VALUES (
    :firstLastName, :phone, :birthDate, :socialMedia, :desiredPosition, :additionalInfo
)";


$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':firstLastName'     => $input['firstLastName'],
    ':phone'             => $input['phone'],
    ':birthDate'         => date('Y-m-d', strtotime($input['birthDate'])),
    ':socialMedia'       => $input['socialMedia'] ?? null,
    ':desiredPosition'   => $input['desiredPosition'] ?? null,
    ':additionalInfo'    => $input['additionalInfo'] ?? null,
]);


// Повідомлення в Telegram
$message = "📋 Нова заявка з форми:\n\n";
$message .= "👤 Ім’я та прізвище: " . $input['firstLastName'] . "\n";
$message .= "📞 Телефон: " . $input['phone'] . "\n";
$message .= "🎂 Дата народження: " . date('d.m.Y', strtotime($input['birthDate'])) . "\n";
$message .= "💬 Посилання на соц. мережі: " . ($input['socialMedia'] ?: '—') . "\n";
$message .= "💂 Бажана посада: " . ($input['desiredPosition'] ?: '—') . "\n";
$message .= "📝 Додаткова інформація: " . ($input['additionalInfo'] ?: '—') . "\n";

$sendUrl = "https://api.telegram.org/bot$botToken/sendMessage";

file_get_contents($sendUrl . '?' . http_build_query([
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'HTML',
]));

echo json_encode(["status" => "ok"]);
