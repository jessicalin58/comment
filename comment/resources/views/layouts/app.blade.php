<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Comment') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- Favicon Link -->
    <link rel="shortcut icon" href="{{asset('favicon.ico')}}">
    <!-- jQuery cdn -->
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.css" />


</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand"  href="{{ url('/') }}">
                    <img src="http://res.cloudinary.com/jessicalin/image/upload/v1516420163/jn16lbldh2mkxxn7az32.png" height="30">
                   
                      

                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @guest
                            <li><a href="{{ route('login') }}">Login</a></li>
                            <li><a href="{{ route('register') }}">Register</a></li>
                        @else
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        @yield('content')

    </div>

        <div class="container">
        @section('sidebar')
        @yield('sidebar')
        </div>
           
        @show

  
        <!-- Upload Info -->
        <!-- Pulling info from React: dash view | component: FileUpload -->
        <div class="container">
            @yield('homePage')
        </div>


        <!-- Upload Info -->
        <!-- Pulling info from React: dash view | component: FileUpload -->
        <div class="container">
            @yield('dataImport')
        </div>

         <!-- Pulling info from React: dash view | component: CommentImport -->
        <div class="container">
            @yield('commentImport')
        </div>

    
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>

    <!-- Jquery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

    <!-- FullPage.js -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.extensions.min.js"></script>

</body>
</html>
