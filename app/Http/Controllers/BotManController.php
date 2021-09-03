<?php
namespace App\Http\Controllers;

use BotMan\BotMan\BotMan;
use Illuminate\Http\Request;
use BotMan\BotMan\Messages\Incoming\Answer;

class BotManController extends Controller
{
    /**
     * Place your BotMan logic here.
     */
    public function handle()
    {
        $botman = app('botman');

        $botman->hears('{message}', function($botman, $message) {

            if ($message == 'listo') {
                $this->askName($botman);
            }

            else{
                $botman->reply("Disculpa esa no es una opcion...");
            }

        });

        $botman->listen();
    }

    /**
     * Place your BotMan logic here.
     */
    public function askName($botman)
    {
        $botman->ask('Cual es tu nombre ?', function(Answer $answer) {

            $name = $answer->getText();

            $this->say('hola sr: '.$name);
        });
    }
}
