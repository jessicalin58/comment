<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('promo');
});

Route::get('/upload', function () {
    return view('upload');
});
Route::get('/react', function () {
    return view('welcome');
});

Route::get('/comment', function () {
    //fetch image based on public id
    return view('comment')->with('infotest');
});

Route::get('/team',function(){
    return view('export');
});
// Route::get('/comment/{public_id}', ['uses' => 'ProductController@getImageData', 'as'=>'routeName']);

Route::get('/comment/{name?}', function ($name = 'numbers'){
        return view('comment');

});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
