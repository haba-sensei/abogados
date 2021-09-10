<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{

    public function render($pageName = 'home')
    {
        // $activeMenu = $this->activeMenu($pageName);
    //   $this->sendNotification();
      Artisan::call('schedule:run');



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
        // $owner = User::whereId(auth()->user()->id);

        // switch ($owner->noveno_numero) {
        //     case 'value':
        //         # code...
        //         break;

        //     default:
        //         # code...
        //         break;
        // }

        // DB::table('notificacion')->insert([
        //     'title' => 'ON LAW',
        //     'mensaje' => 'SOY UN MENSAJE'
        // ]);


    }

}

