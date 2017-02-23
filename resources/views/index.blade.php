<!DOCTYPE html>
<html>
<head>
	<title></title>

	<!-- <link rel="stylesheet" type="text/css" href="css/all.css"> -->
	<link rel="stylesheet" type="text/css" href="{{elixir('css/all.css')}}">
	<link rel="stylesheet" type="text/css" href="{{elixir('build/fonts/fontawesome-webfont.ttf')}}" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

	<div class="container-fluid">
		
		@include ('header')

		@yield('mainbody')

		@include ('footer')
		
	</div>
</body>
</html>