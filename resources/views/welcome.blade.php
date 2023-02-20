<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="apple-touch-icon" href="{{ asset('assets/img/apple-touch-icon.png') }}" >
        {{-- <link href="{{ asset('assets/img/favicon.png') }}" rel="icon" /> --}}

        @viteReactRefresh
        @vite(['resources/js/app.jsx','resources/css/app.css'])
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
