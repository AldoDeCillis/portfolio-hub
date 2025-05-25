<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
{
    $articles = Article::with('tags')
        ->orderBy('published_at','desc')
        ->get();
    return Inertia::render('Blog', compact('articles'));
}

public function show($slug)
{
    $article = Article::with('tags')
        ->where('slug',$slug)
        ->firstOrFail();
    return Inertia::render('Article/Show', compact('article'));
}

}
