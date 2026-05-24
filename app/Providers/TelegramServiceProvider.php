<?php

namespace App\Providers;

use App\Services\TelegramService;
use Illuminate\Support\ServiceProvider;

class TelegramServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(TelegramService::class, function ($app) {
            $token = config('services.telegram.bot_token');
            return new TelegramService($token);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
