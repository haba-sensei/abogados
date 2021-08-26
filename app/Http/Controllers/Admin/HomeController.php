<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function render($pageName = 'home')
    {
        // $activeMenu = $this->activeMenu($pageName);
        $this->sendNotification();




        return view('admin/'. $pageName, [
            'page_name' => $pageName,
            'userauth' => Auth::user()
        ]);

    }

    public function saveToken(Request $request)
    {

      $owner = User::whereId(auth()->user()->id);
      $owner->update(['device_token'=>$request->token]);

      return response()->json([$request->token]);
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function sendNotification()
    {
        // Request $request

        $firebaseToken = User::whereNotNull('device_token')->pluck('device_token')->all();

        $SERVER_API_KEY = 'AAAAz6uV008:APA91bF4kM_tW163McSTDJjoLNMujXeZkfAH5s-FcPNSLZZFt1mpDmwure7hXTVeTFcELHNOBC8W4_tMwgbaWAdQEiigFemFo8ZgMjhDjk875_dddYmqOGKqTKe-2UncuKOOBeRKF8ea';

        // $owner = User::whereId(auth()->user()->id);

        // switch ($owner->noveno_numero) {
        //     case 'value':
        //         # code...
        //         break;

        //     default:
        //         # code...
        //         break;
        // }

        DB::table('notificacion')->insert([
            'title' => 'ON LAW',
            'mensaje' => 'SOY UN MENSAJE'
        ]);

        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => "ON LAW",
                "body" => "MENSAJE DE PRUEBA",
                "content_available" => true,
                "priority" => "high",
            ]
        ];
        $dataString = json_encode($data);

        $headers = [
            'Authorization: key=' . $SERVER_API_KEY,
            'Content-Type: application/json',
        ];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);

        $response = curl_exec($ch);

        return redirect()->route('dash');
    }
}
