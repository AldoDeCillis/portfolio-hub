<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Project;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // prendi sia i progetti che gli articoli
        $projects = Project::orderBy('created_at','desc')->get();
        $articles = Article::with('tags')
            ->orderBy('published_at','desc')
            ->get();

        return Inertia::render('Home', [
            'projects' => $projects,
            'articles' => $articles,
        ]);
    }

    // se non usi più questa rotta, puoi rimuoverla
    public function projects()
    {
        $projects = Project::orderBy('created_at','desc')->get();
        return Inertia::render('Projects', [
            'projects' => $projects,
        ]);
    }
}
