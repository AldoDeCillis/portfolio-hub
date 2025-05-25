<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\ProjectSeeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            ProjectSeeder::class,
            TagSeeder::class,
            ArticleSeeder::class,
        ]);
    }
}
