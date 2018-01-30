@extends('layouts.app')

@section('homePage')

<style>
body{
    /* background-color:red; */
      background-image: url("http://i68.tinypic.com/aertr6.png");
    background-size:100%;
}

#col-sm {
  border-radius: 30px !important;
}

#start {
    background-color:#58D9FF;
    color:white;
    border-radius: 20px;
    border-color:transparent;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
       -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    font-family: 'Proxima Nova';
    padding: 5px 20px 5px 20px;
    margin: 5px;
}
#start: hover {
     background-color: transparent;
    color:#58D9FF;
    border-color: #58D9FF;
}


.row {

    margin-top: 5%;
    margin-left: 2%;
}

.title-content {
    margin-top: 10%;

}

#rectangle {
    background-color: white;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.10);
    height: 5px;
    width: 40px;

}
.blob {
    width: 2rem;
    height: 2rem;
    background: rgba(230,230,230,0.85);
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 1rem);
    top: calc(50% - 1rem);
    box-shadow: 0 0 1rem rgba(255, 255, 255, 0.25);
}

.blob-2 { animation: animate-to-2 1.5s infinite; }
.blob-3 { animation: animate-to-3 1.5s infinite; }
.blob-1 { animation: animate-to-1 1.5s infinite; }
.blob-4 { animation: animate-to-4 1.5s infinite; }
.blob-0 { animation: animate-to-0 1.5s infinite; }
.blob-5 { animation: animate-to-5 1.5s infinite; }

@keyframes animate-to-2 {
    25%, 75% { transform: translateX(-1.5rem) scale(0.75); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-3 {
    25%, 75% { transform: translateX(1.5rem) scale(0.75); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-1 {
    25% { transform: translateX(-1.5rem) scale(0.75); }
    50%, 75% { transform: translateX(-4.5rem) scale(0.6); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-4 {
    25% { transform: translateX(1.5rem) scale(0.75); }
    50%, 75% { transform: translateX(4.5rem) scale(0.6); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-0 {
    25% { transform: translateX(-1.5rem) scale(0.75); }
    50% { transform: translateX(-4.5rem) scale(0.6); }
    75% { transform: translateX(-7.5rem) scale(0.5); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-5 {
    25% { transform: translateX(1.5rem) scale(0.75); }
    50% { transform: translateX(4.5rem) scale(0.6); }
    75% { transform: translateX(7.5rem) scale(0.5); }
    95% { transform: translateX(0rem) scale(1); }
}

#depoiments{
    color:white;
    font-size: 20px;
    text-align: center;
    font-style: italic;
}

#depoiment-text{
    /* text-align: left; */
    font-size: 15px;
}

.faq {
    color: white;
}

#faq-bold {
    font-weight: 800;
}

.fp-controlArrow.fp-prev {
    left: -50px;
    border-width: 18.5px 14px 18.5px 0;
    opacity: 0.3;
}

.fp-controlArrow.fp-next {
    right: -50px;
    border-width: 18.5px 0 18.5px 14px;
        opacity: 0.3;

}

#bold {
    font-weight: 800;
}

</style>

<div id="fullpage">

<!-- Section 1 -->
<div class="section">
<!-- Title Info -->
<div class="title-content">
<div id="title-home"> Comment me. </div>
<div id="title-home-instruction"> Easy file upload. <span id="title-home-thin">better work done</span></div>
<div id="rectangle"></div>
</div>

<div class="container-fluid">
<div class="row">
<!-- Text Content -->
    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div class="home-text">No more hassle.          
        </div>
        <div id="home-italic">Comment your files quickly and effectively. <br>
                                No more back-to-back messages <br>
                                and miscommunication.
        </div>

<!-- Button -->
        <a href="http://localhost:8000/upload" id="start"> Get Started </a>
  

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
        <filter id="gooey">
         <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
         <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
         <feBlend in="SourceGraphic" in2="goo"></feBlend>
        </filter>
         </defs>
        </svg>
        <!-- <div class="blob blob-0"></div>
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div> -->
        <div class="blob blob-3"></div>
        <div class="blob blob-4"></div>
        <div class="blob blob-5"></div>

    </div>


<!-- App Gif Preview -->
    <div class='col-xs-4 col-sm-4 col-md-4 col-lg-4' style='margin-left:  50px;'>
        <div style="border-radius: 10px; width: 450px; height: 280px; overflow: hidden;">  
            <iframe src="https://giphy.com/embed/l0HU94PLP1dYpjB96"  width="480" height="282" frameBorder="0" class="giphy-embed" allowFullScreen ></iframe><p><a href="https://giphy.com/gifs/comment-l0HU94PLP1dYpjB96">via GIPHY</a></p>
        </div>
    </div>

</div>
</div>
<!-- End of Section 1 -->
</div>

<!-- Section 1 -->
<div class="section" id="depoiments"> 
<div class="slide" id="depoiments"> " Working with <span id="bold">Comment.me</span> is such a breeze. It is our new standard for internal/external communication of our designs. We work in big teams and this app allows us<span id="bold"> to work together in a pretty organized fashion".</span>
    <div class="container">
    <div class="row">
    <div class="col"><img src="https://image.ibb.co/dvUNKG/depoiment1.png"></div>
    <div class="col" id="depoiment-text">Poodle Brown, <br>Product Marketing of Willy Wonka Factory</div>
    </div>
    </div>

</div>
<div class="slide"> " So easy, It was incredible. We have worked with other businesses before and their method is like <span id="bold">waiting in line under the sun with no water and crying babies.</span> Working with comment.me made it so easy to communicate the changes we wanted and how we wanted them to be done. <span id="bold">10/10 would use again."</span>
    <div class="container">
    <div class="row">
    <div class="col"><img src="https://image.ibb.co/dvUNKG/depoiment1.png"></div>
    <div class="col" id="depoiment-text">Poodle Brown, <br>Product Marketing of Willy Wonka Factory</div>
    </div>
    </div>
</div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
</div>



<!-- Section 2 -->
<div class="section">
<div class="faq">
    <h3 id="faq-bold">FAQ</h3>
        <h4> What is comment.me? </h4>
                <li> An app made to help developers and designers to comment or add notes into images </li>
        <h4>Is it safe to upload my images?</h4>
                <li> All images are currently being uploaded into "cloudinary" server and it is <i>public</i>. So I wouldn't upload anything personal that might harm you or someone else </li>
        <h4> How do I upload an image? </h4>
                <li> You can either drag and drop or click on the upload box </li>
            <h4> How do I share my image? </h4>
                <li> Currently you can only add hotspots and your own comments. Future updates will be released soon </li>
                <h4> How do I delete a hotspot? </h4>
                <li> Double click to delete a hotspot </li>
                    <h4> 





            </div>


</div>


</div>

<!-- FullPage -->


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.extensions.min.js"></script>

<script>
    $(document).ready(function() {
	$('#fullpage').fullpage();
});
</script>
    

@endsection
