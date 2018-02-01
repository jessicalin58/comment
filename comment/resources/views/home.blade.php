@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <!-- <div class="panel-heading">Dashboard</div> -->

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

<!-- Title Info -->
<div class="title-content">
<div id="title" style="margin-top: 5%"> Welcome to your dashboard</div>
<div id="title-instruction"> Check your old files or create a new one. </div>

    <div class="row">
    <div class="col-md-4" style="text-align:center;width:40%; padding:20px 20px 10px 20px">
        <div class="panel panel-default">
            <div clas="panel-body" style="padding: 50px 20px 50px 20px">
                <a href="/upload"> 
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="upload" x="0px" y="0px" viewBox="0 0 471.2 471.2" style="enable-background:new 0 0 471.2 471.2;" xml:space="preserve" width="30px" height="42px" onmouseover="evt.target.setAttribute('opacity', '0.5');" onmouseout="evt.target.setAttribute('opacity','1)');">
                <g>
	            <g>
		            <path d="M457.7,230.15c-7.5,0-13.5,6-13.5,13.5v122.8c0,33.4-27.2,60.5-60.5,60.5H87.5c-33.4,0-60.5-27.2-60.5-60.5v-124.8    c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v124.8c0,48.3,39.3,87.5,87.5,87.5h296.2c48.3,0,87.5-39.3,87.5-87.5v-122.8    C471.2,236.25,465.2,230.15,457.7,230.15z" fill="#7C88FF"/>
		                <path d="M159.3,126.15l62.8-62.8v273.9c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V63.35l62.8,62.8c2.6,2.6,6.1,4,9.5,4    c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.8-85.8c-2.5-2.5-6-4-9.5-4c-3.6,0-7,1.4-9.5,4l-85.8,85.8    c-5.3,5.3-5.3,13.8,0,19.1C145.5,131.35,154.1,131.35,159.3,126.15z" fill="#7C88FF" />
	                    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
                </a> 
                <div> Upload a new file </div>
            </div>
        </div>
    </div>
    <div class="col-md-4"  style="text-align:center;width:40%; padding:20px 20px 10px 20px">
        <div class="panel panel-default">
            <div clas="panel-body" style="padding: 50px 20px 50px 20px">
                <div> <OldFiles />  </div>
            </div>
        </div>
    </div>
    </div>


</div>

<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
<div id="main">
  

<!-- <div id="example"></div> -->

</div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
