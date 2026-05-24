<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Exception;

class TelegramService
{
    protected string $botToken;
    protected string $baseUrl;

    public function __construct(string $botToken)
    {
        $this->botToken = $botToken;
        $this->baseUrl = "https://api.telegram.org/bot{$this->botToken}";
    }

    public function sendMessage(string $chatId, string $message): bool
    {
        try {
            $response = Http::post("{$this->baseUrl}/sendMessage", [
                'chat_id' => $chatId,
                'text' => $message,
                'parse_mode' => 'MarkdownV2',
            ]);

            return $response->successful();
        } catch (Exception $e) {
            logger()->error("Telegram Notification Failed: " . $e->getMessage());
            return false;
        }
    }
}
