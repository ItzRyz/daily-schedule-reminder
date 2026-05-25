<?php

namespace App\Http\Controllers\Webhooks;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class TelegramController extends Controller
{
    public function handle(Request $request)
    {
        $message = $request->input('message');

        if (!$message || !isset($message['text'])) {
            return response()->json(['status' => 'ignored']);
        }

        $text = $message['text'];
        $chatId = $message['chat']['id'];

        if (str_starts_with($text, '/start')) {
            $parts = explode(' ', $text);
            if (count($parts) > 1) {
                $code = $parts[1];

                $user = User::where('telegram_verification_code', $code)->first();
                if ($user) {
                    $user->update([
                        'telegram_chat_id' => $chatId,
                        'telegram_verification_code' => null,
                    ]);

                    return response()->json(['status' => 'success']);
                }
            }
        }

        return response()->json(['status' => 'ok']);
    }
}
