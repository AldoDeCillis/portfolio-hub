<!-- resources/views/pdf/cv.blade.php -->
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    h1 { text-align: center; margin-bottom:1rem; }
    .section { margin-bottom:1.5rem; }
    .section h2 { border-bottom:1px solid #333; }
  </style>
</head>
<body>
  <h1>{{ $cv->personal['name'] ?? '' }}</h1>
  <div class="section">
    <h2>Informazioni Personali</h2>
    <p>Email: {{ $cv->personal['email'] }}</p>
    <p>Telefono: {{ $cv->personal['phone'] }}</p>
    <p>LinkedIn: {{ $cv->personal['linkedin'] }}</p>
  </div>
  <div class="section">
    <h2>Formazione</h2>
    @foreach($cv->education as $edu)
      <p><strong>{{ $edu['title'] }}</strong> — {{ $edu['year'] }}<br>
         {{ $edu['institution'] }}<br>
         {{ $edu['description'] }}</p>
    @endforeach
  </div>
  <div class="section">
    <h2>Esperienze & Skills</h2>
    @foreach($cv->experience as $exp)
      <p>{{ $exp['description'] }}<br>
         <em>Ruolo:</em> {{ $exp['role'] }}<br>
         <em>Competenze:</em> {{ $exp['skills'] }}</p>
    @endforeach
  </div>
  <div class="section">
    <h2>CV Generato da AI</h2>
    <pre style="white-space:pre-wrap;">{{ $cv->cv_text }}</pre>
  </div>
</body>
</html>
