<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('created_at','desc')->get();
        return Inertia::render('Home', [
            'projects' => $projects,
        ]);
    }
}
