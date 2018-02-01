@extends('layouts.app')

@section('dataImport')

<!-- Progression Breadcrumb -->
<div class="breadcrumb">
<img src="http://res.cloudinary.com/jessicalin/image/upload/v1516479171/hmf0bfeiqboyy7pv7jbp.png" width='320'>
</div>

<!-- Title Info -->
<div class="title-content">
<div id="title"> Upload your file </div>
<div id="title-instruction"> 1. Let's start with your document </div>
</div>

<div id="mySidenav" class="sidenav">
  <!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> -->
 
  <!-- Upload active icon -->
  <a href="/upload"> 
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="upload" x="0px" y="0px" viewBox="0 0 471.2 471.2" style="enable-background:new 0 0 471.2 471.2;" xml:space="preserve" width="30px" height="42px" onmouseover="evt.target.setAttribute('opacity', '0.5');" onmouseout="evt.target.setAttribute('opacity','1)');">
<g>
	<g>
		<path d="M457.7,230.15c-7.5,0-13.5,6-13.5,13.5v122.8c0,33.4-27.2,60.5-60.5,60.5H87.5c-33.4,0-60.5-27.2-60.5-60.5v-124.8    c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v124.8c0,48.3,39.3,87.5,87.5,87.5h296.2c48.3,0,87.5-39.3,87.5-87.5v-122.8    C471.2,236.25,465.2,230.15,457.7,230.15z" fill="#7C88FF"/>
		<path d="M159.3,126.15l62.8-62.8v273.9c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V63.35l62.8,62.8c2.6,2.6,6.1,4,9.5,4    c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.8-85.8c-2.5-2.5-6-4-9.5-4c-3.6,0-7,1.4-9.5,4l-85.8,85.8    c-5.3,5.3-5.3,13.8,0,19.1C145.5,131.35,154.1,131.35,159.3,126.15z" fill="#7C88FF" />
	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>
</a> 

<!-- Comment icon -->
  <a href="/comment" id="comment-icon">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" width="30px" height="42px" onmouseover="evt.target.setAttribute('opacity', '0.5');" onmouseout="evt.target.setAttribute('opacity','1)');">
<g>
	<path d="M10,25.465h13c0.553,0,1-0.448,1-1s-0.447-1-1-1H10c-0.553,0-1,0.448-1,1S9.447,25.465,10,25.465z" fill="#c3c3c3"/>
	<path d="M36,29.465H10c-0.553,0-1,0.448-1,1s0.447,1,1,1h26c0.553,0,1-0.448,1-1S36.553,29.465,36,29.465z" fill="#c3c3c3"/>
	<path d="M36,35.465H10c-0.553,0-1,0.448-1,1s0.447,1,1,1h26c0.553,0,1-0.448,1-1S36.553,35.465,36,35.465z" fill="#c3c3c3"/>
	<path d="M54.072,2.535L19.93,2.465c-3.27,0-5.93,2.66-5.93,5.93v5.124l-8.07,0.017c-3.27,0-5.93,2.66-5.93,5.93v21.141   c0,3.27,2.66,5.929,5.93,5.929H12v10c0,0.413,0.254,0.784,0.64,0.933c0.117,0.045,0.239,0.067,0.36,0.067   c0.276,0,0.547-0.115,0.74-0.327l9.704-10.675l16.626-0.068c3.27,0,5.93-2.66,5.93-5.929v-0.113l5.26,5.786   c0.193,0.212,0.464,0.327,0.74,0.327c0.121,0,0.243-0.022,0.36-0.067c0.386-0.149,0.64-0.52,0.64-0.933v-10h1.07   c3.27,0,5.93-2.66,5.93-5.929V8.465C60,5.196,57.341,2.536,54.072,2.535z M44,40.536c0,2.167-1.763,3.929-3.934,3.929l-17.07,0.07   c-0.28,0.001-0.548,0.12-0.736,0.327L14,53.949v-8.414c0-0.552-0.447-1-1-1H5.93c-2.167,0-3.93-1.763-3.93-3.929V19.465   c0-2.167,1.763-3.93,3.932-3.93l9.068-0.019c0,0,0,0,0,0c0.001,0,0.001,0,0.002,0l25.068-0.052c2.167,0,3.93,1.763,3.93,3.93   v18.441V40.536z M58,29.606c0,2.167-1.763,3.929-3.93,3.929H52c-0.553,0-1,0.448-1,1v8.414l-5-5.5V19.395   c0-3.27-2.66-5.93-5.932-5.93L16,13.514v-5.12c0-2.167,1.763-3.93,3.928-3.93l34.141,0.07c0.001,0,0.001,0,0.002,0   c2.167,0,3.93,1.763,3.93,3.93V29.606z" fill="#c3c3c3"/>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>

  </a>

  <!-- Team icon  -->
 <a href="/home" id="team-icon">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="30px" height="42px" onmouseover="evt.target.setAttribute('opacity', '0.5');" onmouseout="evt.target.setAttribute('opacity','1)');">
<g>
	<g>
		<path d="M437.02,74.98C388.668,26.629,324.381,0,256,0C187.62,0,123.333,26.628,74.981,74.98l-0.002,0.001l-0.001,0.001    C26.628,123.335,0,187.621,0,256c0,0.001,0,0.002,0,0.002v0.001c0.001,55.903,17.704,109.018,51.197,153.605    c2.833,3.772,7.276,5.991,11.993,5.991h385.622c4.718,0,9.16-2.219,11.993-5.992c33.491-44.588,51.193-97.703,51.194-153.604    v-0.001H512c0,0,0-0.001,0-0.002C512,187.62,485.371,123.332,437.02,74.98z M441.171,385.6H70.831    c-23.869-33.994-37.652-73.226-40.336-114.599L47.134,271c8.284,0,15-6.717,14.999-15.001c0-8.284-6.717-14.999-15.001-14.999    l-16.622,0.001c3.362-51.045,23.738-97.512,55.509-133.768l11.684,11.683c2.929,2.929,6.767,4.393,10.606,4.393    c3.839,0,7.678-1.465,10.607-4.394c5.858-5.858,5.857-15.355-0.001-21.213L107.232,86.02C143.488,54.249,189.955,33.872,241,30.51    v16.624c0,8.284,6.716,15,15,15s15-6.716,15-15V30.51c51.045,3.362,97.512,23.739,133.769,55.511l-11.684,11.681    c-5.858,5.857-5.859,15.355-0.002,21.213c2.929,2.929,6.769,4.394,10.607,4.394s7.677-1.464,10.605-4.393l11.685-11.683    c31.772,36.256,52.148,82.723,55.51,133.768L464.867,241c-0.001,0-0.001,0-0.001,0c-8.283,0-14.999,6.715-15,14.999    c-0.001,8.284,6.715,15.001,14.999,15.001l16.64,0.001C478.82,312.373,465.039,351.604,441.171,385.6z" fill="#D4D4D4"/>
	</g>
</g>
<g>
	<g>
		<path d="M352.399,482H159.6c-8.284,0-15,6.716-15,15s6.716,15,15,15h192.8c8.284,0,15-6.716,15-15S360.684,482,352.399,482z" fill="#D4D4D4"/>
	</g>
</g>
<g>
	<g>
		<path d="M350.029,161.97c-5.856-5.859-15.354-5.859-21.212,0l-40.024,40.023c-9.566-5.83-20.795-9.193-32.794-9.193    c-34.849,0-63.2,28.351-63.2,63.2s28.352,63.2,63.2,63.2c34.849,0,63.199-28.352,63.199-63.2c0-11.999-3.362-23.227-9.192-32.794    l40.023-40.023C355.887,177.325,355.887,167.828,350.029,161.97z M256,289.2c-18.307,0-33.2-14.894-33.2-33.2    c0-18.306,14.894-33.2,33.2-33.2c18.306,0,33.199,14.893,33.199,33.2S274.306,289.2,256,289.2z" fill="#D4D4D4"/>
	</g>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>
  </a>

</div>

<!-- Use any element to open the sidenav -->
<!-- <span onclick="openNav()">open</span> -->


<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
<div id="main">
  

<div id="example"></div>

</div>

<script>

  $( document ).ready(function() {
     document.getElementById("mySidenav").style.width = "80px";
    console.log( "ready!" );
});
  /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }
</script>

@endsection
