<?php

namespace Database\Seeders;

use App\Models\Tag;
use App\Models\Article;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $examples = [
            [
                'title'        => "Il Futuro dell'AI nel Recruitment",
                'excerpt'      => "Scopri come l'intelligenza artificiale sta trasformando il processo di selezione del personale.",
                'content'      => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
                'category'     => 'AI & Technology',
                'image_url'    => 'https://picsum.photos/800/400?random=1',
                'read_time'    => '8 min di lettura',
                'published_at' => now()->subDays(1),
            ],
            [
                'title'        => 'CV Perfetto: 10 Errori da Evitare',
                'excerpt'      => 'Una guida pratica per creare un curriculum che catturi davvero l’attenzione.',
                'content'      => "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
                'category'     => 'Career Tips',
                'image_url'    => 'https://picsum.photos/800/400?random=2',
                'read_time'    => '5 min di lettura',
                'published_at' => now()->subDays(2),
            ],
            [
                'title'        => 'Portfolio Digitale: Showcase del Tuo Talento',
                'excerpt'      => "Come costruire un portfolio online che metta in luce le tue competenze.",
                'content'      => "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
                'category'     => 'Portfolio',
                'image_url'    => 'https://picsum.photos/800/400?random=3',
                'read_time'    => '6 min di lettura',
                'published_at' => now()->subDays(3),
            ],
            [
                'title'        => 'Soft Skills nel 2025: Cosa Cercano le Aziende',
                'excerpt'      => "Le competenze trasversali più richieste nel mercato del lavoro moderno.",
                'content'      => "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
                'category'     => 'Skills',
                'image_url'    => 'https://picsum.photos/800/400?random=4',
                'read_time'    => '4 min di lettura',
                'published_at' => now()->subDays(4),
            ],
            [
                'title'        => 'Laravel 12: Le Novità Principali',
                'excerpt'      => "Un tour delle nuove feature introdotte con Laravel 12.",
                'content'      => "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                'category'     => 'Tech',
                'image_url'    => 'https://picsum.photos/800/400?random=5',
                'read_time'    => '7 min di lettura',
                'published_at' => now()->subDays(5),
            ],
            [
                'title'        => 'Vue.js + Inertia: SPA Senza Fatica',
                'excerpt'      => "Come usare Inertia.js per costruire Single Page Applications con Laravel e Vue.",
                'content'      => "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                'category'     => 'Web Development',
                'image_url'    => 'https://picsum.photos/800/400?random=6',
                'read_time'    => '6 min di lettura',
                'published_at' => now()->subDays(6),
            ],
            [
                'title'        => 'SEO per Developer: Best Practice',
                'excerpt'      => "Guida alle tecniche SEO che ogni sviluppatore dovrebbe conoscere.",
                'content'      => "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
                'category'     => 'SEO',
                'image_url'    => 'https://picsum.photos/800/400?random=7',
                'read_time'    => '5 min di lettura',
                'published_at' => now()->subDays(7),
            ],
        ];

        foreach ($examples as $data) {
            $article = Article::create([
                'title'        => $data['title'],
                'slug'         => Str::slug($data['title']) . '-' . Str::random(5),
                'excerpt'      => $data['excerpt'],
                'content'      => $data['content'],
                'category'     => $data['category'],
                'image_url'    => $data['image_url'],
                'read_time'    => $data['read_time'],
                'published_at' => $data['published_at'],
            ]);
            $tags = Tag::inRandomOrder()->take(2)->pluck('id');
            $article->tags()->sync($tags);
        }

    }
}
