<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use OpenAI\Laravel\Facades\OpenAI;
use Spatie\Browsershot\Browsershot;
use App\Models\Cv;

class CVController extends Controller
{
    public function generate(Request $request)
    {
        $data = $request->validate([
            'personal'   => 'required|array',
            'education'  => 'required|array',
            'experience' => 'required|array',
        ]);

        // ChatGPT
        $response = OpenAI::chat()->create([
            'model'    => 'gpt-4o-mini',
            'messages' => [
              ['role'=>'system','content'=>'Sei un assistente per CV.'],
              ['role'=>'user','content'=>json_encode($data)],
            ],
            'temperature' => 0.7,
        ]);
        $cvText = $response->choices[0]->message->content;

        // Salvare nel DB
        $cv = Cv::create([
          'personal'   => $data['personal'],
          'education'  => $data['education'],
          'experience' => $data['experience'],
          'cv_text'    => $cvText,
        ]);

        return response()->json([
          'id'  => $cv->id,
          'cv'  => $cvText,
        ]);
    }

    public function preview(int $id)
    {
        $cv = Cv::findOrFail($id);
        // Ritorna una pagina Inertia che mostri il CV formattato
        return Inertia::render('CvPreview', compact('cv'));
    }

    public function downloadPdf(int $id)
    {
        $cv = Cv::findOrFail($id);

        // Prepara l’HTML da convertire (puoi usarne uno dedicato o inline)
        $html = view('pdf.cv', ['cv' => $cv])->render();

        return Browsershot::html($html)
            ->format('A4')
            ->download("cv-{$cv->id}.pdf");
    }
}
