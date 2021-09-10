<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EnvioNotificaciones extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'envio:notificaciones';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'vainas mias';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        DB::table('notificacion')->insert([
            'title' => 'ON LAW',
            'mensaje' => 'SOY UN MENSAJE'
        ]);

        // return 0;
        $url = 'https://fcm.googleapis.com/fcm/send';
        $DeviceToekn = User::whereNotNull('device_token')->pluck('device_token')->all();

        $FcmKey = 'AAAAz6uV008:APA91bF4kM_tW163McSTDJjoLNMujXeZkfAH5s-FcPNSLZZFt1mpDmwure7hXTVeTFcELHNOBC8W4_tMwgbaWAdQEiigFemFo8ZgMjhDjk875_dddYmqOGKqTKe-2UncuKOOBeRKF8ea';

        $data = [
            "registration_ids" => $DeviceToekn,
            "notification" => [
                "content_available" => true,
                "mutable_content" => true,
                "title" => 'ON LAW',
                "body" => 'SOY UN MENSAJE',
            ]
        ];

        $RESPONSE = json_encode($data);

        $headers = [
            'Authorization:key=' . $FcmKey,
            'Content-Type: application/json',
        ];

        // CURL
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $RESPONSE);

        $output = curl_exec($ch);
        if ($output === FALSE) {
            die('Curl error: ' . curl_error($ch));
        }
        curl_close($ch);
    }
}
