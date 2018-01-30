@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <!-- Progression Breadcrumb -->
<!-- <div class="breadcrumb">
<img src="http://res.cloudinary.com/jessicalin/image/upload/v1516479171/hmf0bfeiqboyy7pv7jbp.png" width='320'>
</div> -->

<!-- Title Info -->
<div class="title-content">
<div id="title"> Welcome to your dashboard</div>
<div id="title-instruction"> 1. Create a new upload or see your old files. </div>
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
