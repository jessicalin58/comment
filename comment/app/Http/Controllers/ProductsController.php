<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;


class ProductsController extends Controller
{ 
    
    public function index()
    {
        return Product::all();
    }

    // public function highchart()
    // {
    //     $product = Product:all();
    //     return redirect()->route('comment', ['public_id'=>2])
    //         -> with('info,test');
    // }

    public function getImageData($public_id){
        $data['public_id'] = $public_id;
        return View::make('comment', $public_id);
    }

    public function show(Product $product)
    {
        return $product;
    }
    
    public function store(Request $request)
    {
        // $this->validate($request, [
        // 'title' => 'required|unique:products|max:255',
        // 'comment' => 'required',
        // 'url' => 'required',

        return $request;
        
        
        // $product = Product::create($request->all());
        // return response()->json($product,201);
    }

    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return response()->json($product, 200);
    }

    public function delete(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
