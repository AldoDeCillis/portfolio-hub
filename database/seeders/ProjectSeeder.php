<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::insert([
            [
                'title'       => 'AI Portfolio Generator',
                'description' => 'Una piattaforma intelligente che crea portfolio personalizzati...',
                'image_url'   => 'https://picsum.photos/400/240?random=1',
                'link'        => '#',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'title'       => 'Dynamic CV Builder',
                'description' => 'Sistema avanzato di generazione CV che si adatta automaticamente...',
                'image_url'   => 'https://picsum.photos/400/240?random=2',
                'link'        => '#',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'title'       => 'Career Analytics Dashboard',
                'description' => 'Dashboard interattiva che analizza le tendenze del mercato del lavoro...',
                'image_url'   => 'https://picsum.photos/400/240?random=3',
                'link'        => '#',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
        ]);
    }
}
