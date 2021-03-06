@extends('../layouts/web/cuerpo')
@section('content')

<div class="app-layout theme-black">

    <header class="topbar">
        <div class="back-btn ico-hover" title="Back"><i class="lni lni-angle-double-left"></i></div>

        <div class="logo-place"><a href="#" title=""><img src="{{ asset('dist/images/icono.png') }}" width="40"></a></div>
        <div class="ac-settings ico-hover" title="Settings"><i class="lni lni-radio-button"></i></div>
    </header>

    <div class="bottom-header">
        <ul class="menu-left">
            <li><a class="ico-hover" href="newsfeed.html" title=""><i class="lni lni-home"></i></a></li>
            <li><a class="ico-hover" href="notifications.html" title=""><i class="lni lni-alarm"></i></a><span>3</span></li>
        </ul>
        <div id="nav-icon2" class="menu-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul class="menu-right">
            <li><a class="ico-hover" href="messages.html" title=""><i class="lni lni-comments"></i></a></li>
            <li class=""><a class="ico-hover" href="timeline.html" title=""><i class="lni lni-user"></i></a></li>
        </ul>
    </div>

    <nav>

                <section>

                    <div class="gap no-top" style="top: 61px;">
                        <div class="height-100vh">

                            <div class="conversation">
                                <div class="" style="background:url()"></div>

                                <script>
                                    var botmanWidget = {
                                        aboutText: 'Escribe una opcion',
                                        introMessage: "✋ Hola! Escribe ok para ayudarte..."
                                    };
                                </script>
                                 {{-- <script src='{{ asset('js/chat.js') }}'></script> --}}
                                <iframe id="chatBotManFrame" style="height: 33.2rem;" src="{{URL::to('botman/chat?conf=%7B%22chatServer%22%3A%22%2Fbotman%22%2C%22frameEndpoint%22%3A%22%2Fbotman%2Fchat%22%2C%22timeFormat%22%3A%22HH%3AMM%22%2C%22dateTimeFormat%22%3A%22m%2Fd%2Fyy%20HH%3AMM%22%2C%22title%22%3A%22BotMan%20Widget%22%2C%22cookieValidInDays%22%3A1%2C%22introMessage%22%3A%22%E2%9C%8B%20Hola!%20Para%20iniciar%20el%20chatbot%20escribe%20empezar%22%2C%22placeholderText%22%3A%22Envia%20un%20mensaje...%22%2C%22displayMessageTime%22%3Atrue%2C%22sendWidgetOpenedEvent%22%3Afalse%2C%22widgetOpenedEventData%22%3A%22%22%2C%22mainColor%22%3A%22%23408591%22%2C%22headerTextColor%22%3A%22%23333%22%2C%22bubbleBackground%22%3A%22%23408591%22%2C%22bubbleAvatarUrl%22%3A%22%22%2C%22desktopHeight%22%3A450%2C%22desktopWidth%22%3A370%2C%22mobileHeight%22%3A%22100%25%22%2C%22mobileWidth%22%3A%22300px%22%2C%22videoHeight%22%3A160%2C%22aboutLink%22%3A%22https%3A%2F%2Fbotman.io%22%2C%22aboutText%22%3A%22Write%20Something%22%2C%22chatId%22%3A%22%22%2C%22userId%22%3A%22%22%2C%22alwaysUseFloatingButton%22%3Afalse%2C%22wrapperHeight%22%3A450%7D')}}" width="100%" height="100%" frameborder="0" allowtransparency="true" style="background-color: transparent;"></iframe>
                                {{-- <ul class="chat-desc">
                                    <li class="you">
                                        <span>Asistente (Bot)</span>
                                        <p>Hola! para ayudarte debes elegir una de las siguientes opciones: </p>
                                        <p>1: Elemento  1</p>
                                        <p>2: Elemento  2</p>
                                        <p>3: Elemento  3</p>
                                        <p>4: Elemento  4</p>
                                        <em>11:54PM</em>
                                    </li>
                                    <li class="me">
                                        <span>Cliente</span>
                                        <p>1</p>
                                        <em>11:54PM</em>
                                    </li>

                                    <li class="you">
                                        <span>Asistente (Bot)</span>
                                        <p>Para continuar: </p><br>
                                        <p>1: Elemento  1</p>
                                        <p>2: Elemento  2</p>
                                        <em>11:54PM</em>
                                    </li>

                                    <li class="me">
                                        <span>Cliente</span>
                                        <p>2</p>
                                        <em>11:54PM</em>
                                    </li>


                                </ul>
                                <div class="mesg-write-box">
                                    <form method="post">
                                        <input type="text" placeholder="Type a Message">
                                    </form>
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </section>


    </nav><!-- compact nav menu -->
    <section>
        <div class="gap redish high-opacity">
            <div class="content-bg-wrap" style="background: url({{ asset('images/resources/animate-bg.png') }})"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="head-meta">
                            <h5>Notificaciones </h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="gap">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <button onclick="initFirebaseMessagingRegistration()"
                        class="text-white btn btn-danger btn-flat">Generate Device Token
                        </button>


                    </div>
                </div>
            </div>
        </div>
    </section>




</div>

@endsection


@section('script')

{{-- <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase.js"></script> --}}
<script>

var firebaseConfig = {
    apiKey: "AIzaSyCmF3I02OcesAK2dCmI01HS13FjU2QJQB0",
  authDomain: "abogadosfcm.firebaseapp.com",
  databaseURL: "https://abogadosfcm-default-rtdb.firebaseio.com",
  projectId: "abogadosfcm",
  storageBucket: "abogadosfcm.appspot.com",
  messagingSenderId: "891936953167",
  appId: "1:891936953167:web:39beeac3ae23e5942d2b3a",
  measurementId: "G-R6WYB6DZMY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    function initFirebaseMessagingRegistration() {
            messaging
            .requestPermission()
            .then(function () {
                return messaging.getToken()
            })
            .then(function(token) {
                 console.log(token);
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    url: '{{ route("admin.save_token") }}',
                    type: 'POST',
                    data: {
                        token: token
                    },
                    dataType: 'JSON',
                    success: function (response) {
                        console.log(response);

                    },
                    error: function (err) {
                        console.log('User Chat Token Error'+ err);
                    },
                });
            }).catch(function (err) {
                console.log('User Chat Token Error'+ err);
            });
     }
    messaging.onMessage(function(payload) {
        const noteTitle = payload.notification.title;
        const noteOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon,
        };
        new Notification(noteTitle, noteOptions);
    });

    // initFirebaseMessagingRegistration();
</script>

@endsection
