<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>APP NAME</title>

    <!-- core:css -->
    <link rel="stylesheet" href="{{ asset('dash_board/assets/vendors/core/core.css') }}">
    <!-- endinject -->
    <link rel="stylesheet"
        href="{{ asset('dash_board/assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css') }}">
    <!-- plugin css for this page -->
    <link rel="stylesheet"
        href="{{ asset('dash_board/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css') }}">
    <!-- end plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="{{ asset('dash_board/assets/fonts/feather-font/css/iconfont.css') }}">
    <link rel="stylesheet" href="{{ asset('dash_board/assets/vendors/flag-icon-css/css/flag-icon.min.css') }}">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/3.4.0/css/bootstrap-colorpicker.css">
    <link rel="stylesheet" href="https://unpkg.com/intro.js/minified/introjs.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="icon" href="{{ asset('img/logo.png') }}" />
    <!-- endinject -->

    {{-- Light --}}
    <link rel="stylesheet" href="{{ asset('dash_board/assets/css/demo_1/style.css') }}">


    {{-- @if ($is_dark_theme)
        <meta title="isDark">
        </meta>
        <link rel="stylesheet" href="{{ asset('dash_board/assets/css/dark.css') }}">
    @else
        <link rel="stylesheet" href="{{ asset('dash_board/assets/css/demo_1/style.css') }}">
    @endif --}}

    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800&display=swap" -->


    <style>
        html {
            overflow-y: auto;
            overflow-x: hidden;
        }

    </style>


</head>

<body>
    <div class="d-none" id="language">{{ $language ?? '' }}</div>
    <div id="app">
        <app></app>
    </div>

    <script src="{{ mix('/js/app.js') }}"></script>

    <!-- core:js -->
    <script src="{{ asset('dash_board/assets/vendors/core/core.js') }}"></script>
    <!-- endinject -->
    <!-- plugin js for this page -->
    <script src="{{ asset('dash_board/assets/vendors/chartjs/Chart.min.js') }}"></script>
    <script src="{{ asset('dash_board/assets/vendors/jquery.flot/jquery.flot.js') }}"></script>
    <script src="{{ asset('dash_board/assets/vendors/jquery.flot/jquery.flot.resize.js') }}"></script>

    <script src="{{ asset('dash_board/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js') }}"></script>
    <script src="{{ asset('dash_board/assets/vendors/apexcharts/apexcharts.min.js') }}"></script>
    <script src="{{ asset('dash_board/assets/vendors/progressbar.js/progressbar.min.js') }}"></script>
    <!-- end plugin js for this page -->
    <!-- inject:js -->
    <script src="{{ asset('dash_board/assets/vendors/feather-icons/feather.min.js') }}"></script>
    <script src="{{ asset('dash_board/assets/js/template.js') }}"></script>
    <!-- endinject -->
    <!-- custom js for this page -->
    <script src="{{ asset('dash_board/assets/js/dashboard.js') }}"></script>
    <script src="{{ asset('dash_board/assets/js/datepicker.js') }}"></script>
    <!-- end custom js for this page -->
    <script src="{{ asset('dash_board/assets/js/global.js') }}"></script>
    <script src="{{ asset('dash_board/assets/js/jQuery3.6.0.min.js') }}"></script>

    <script src="{{ asset('dash_board/assets/vendors/datatables.net/jquery.dataTables.js') }}"></script>
    <script src="{{ asset('dash_board/assets/vendors/datatables.net-bs4/dataTables.bootstrap4.js') }}"></script>
    <script src="{{ asset('dash_board/assets/js/file-upload.js') }}"></script>

    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/3.4.0/js/bootstrap-colorpicker.min.js">
    </script>
    <script src="https://unpkg.com/intro.js/minified/intro.min.js"></script>

</body>

</html>
