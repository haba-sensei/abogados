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


            switch ($message) {
                case 'empezar':
                $this->askName($botman);
                break;
                    case 'ok':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    $this->opciones($botman);
                    break;
                case 'asesor':
                    $this->asesor($botman);
                    break;

                default:
                     $botman->reply("Disculpa esa no es una opcion...");
                    break;
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

            $this->say('hola sr: '.$name.': escriba "ok" para continuar');

        });
    }

    public function opciones($botman)
    {
        $botman->ask('<br> Elige el area de practica que deseas consultar <br> <br> 1 = Familia <br> 2 = Tributario <br> 3 = Laboral <br> 4 = Otros', function(Answer $answer) {
            // Save result
            $algo = $answer->getText();

            switch ($algo) {
                case '1':
                $respuesta = "Familia";
                break;
                case '2':
                $respuesta = "Tributario";
                break;
                case '3':
                $respuesta = "Laboral";
                break;
                case '4':
                $respuesta = "Otros";
                break;

            }

            $this->say('Genial has elegido '.$respuesta.'  <br><br>Para una atencion mas exacta escriba "asesor" ');
        });
    }

    public function asesor($botman)
    {
        $botman->ask('En breve te asignaremos a un asesor legal especializado escribe "ok" para confirmar', function(Answer $answer) {
            // Save result
            $algo = $answer->getText();

            $this->say('en unos minutos un asesor se comunicara con usted muchas gracias');
        });
    }
}
