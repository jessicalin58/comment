<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;

class CommentController extends Controller
{
     public function index()
    {
        return Comment::all();
    }
 
    public function show(Product $comment)
    {
        return $comment;
    }
 
    public function store(Request $request)
    {
         $this->validate($request, [
        'name' => 'required|unique:comments|max:255',
        'comment' => 'required',
        'url' => 'required',
    ]);
        $comment = Comment::create($request->all());
 
        return response()->json($comment, 201);
    }
 
    public function update(Request $request, Product $comment)
    {
        $comment->update($request->all());
 
        return response()->json($comment, 200);
    }
 
    public function delete(Product $comment)
    {
        $comment->delete();
 
        return response()->json(null, 204);
    }
}
